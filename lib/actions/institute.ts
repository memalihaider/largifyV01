// lib/actions/institute.ts - Server actions for institute operations

'use server';

import { createClient } from '@supabase/supabase-js';
import { Institute, Cohort } from '@/lib/types/venture-lab';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Create a new institute
export async function createInstitute(data: {
  name: string;
  code: string;
  email: string;
  website?: string;
  tier?: 'free' | 'pro' | 'enterprise';
}) {
  try {
    // Check if code already exists
    const { data: existing } = await supabase
      .from('institutes')
      .select('id')
      .eq('code', data.code)
      .single();

    if (existing) {
      return { error: 'Institute code already exists' };
    }

    const { data: institute, error } = await supabase
      .from('institutes')
      .insert([
        {
          name: data.name,
          code: data.code,
          email: data.email,
          website: data.website,
          tier: data.tier || 'free',
          student_count: 0
        }
      ])
      .select()
      .single();

    if (error) {
      return { error: error.message };
    }

    return { data: institute };
  } catch (error) {
    return { error: String(error) };
  }
}

// Get institute by code
export async function getInstituteByCode(code: string) {
  try {
    const { data: institute, error } = await supabase
      .from('institutes')
      .select('*')
      .eq('code', code)
      .single();

    if (error) {
      return { error: 'Institute not found' };
    }

    return { data: institute };
  } catch (error) {
    return { error: String(error) };
  }
}

// Get institute by ID
export async function getInstituteById(id: string) {
  try {
    const { data: institute, error } = await supabase
      .from('institutes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return { error: 'Institute not found' };
    }

    return { data: institute };
  } catch (error) {
    return { error: String(error) };
  }
}

// Create a new cohort
export async function createCohort(data: {
  institute_id: string;
  name: string;
  start_date: string;
  end_date: string;
  capacity: number;
  access_level?: 'free' | 'pro' | 'sponsored';
}) {
  try {
    const { data: cohort, error } = await supabase
      .from('cohorts')
      .insert([
        {
          institute_id: data.institute_id,
          name: data.name,
          start_date: data.start_date,
          end_date: data.end_date,
          capacity: data.capacity,
          access_level: data.access_level || 'free'
        }
      ])
      .select()
      .single();

    if (error) {
      return { error: error.message };
    }

    return { data: cohort };
  } catch (error) {
    return { error: String(error) };
  }
}

// Get cohorts for an institute
export async function getCohortsByInstitute(instituteId: string) {
  try {
    const { data: cohorts, error } = await supabase
      .from('cohorts')
      .select('*')
      .eq('institute_id', instituteId)
      .order('created_at', { ascending: false });

    if (error) {
      return { error: error.message };
    }

    return { data: cohorts };
  } catch (error) {
    return { error: String(error) };
  }
}

// Get cohort by ID
export async function getCohortById(id: string) {
  try {
    const { data: cohort, error } = await supabase
      .from('cohorts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      return { error: 'Cohort not found' };
    }

    return { data: cohort };
  } catch (error) {
    return { error: String(error) };
  }
}

// Update user's institute and cohort assignment
export async function assignUserToCohort(userId: string, instituteId: string, cohortId: string) {
  try {
    const { data: user, error } = await supabase
      .from('users')
      .update({
        institute_id: instituteId,
        cohort_id: cohortId
      })
      .eq('id', userId)
      .select()
      .single();

    if (error) {
      return { error: error.message };
    }

    return { data: user };
  } catch (error) {
    return { error: String(error) };
  }
}

// Verify institute code is valid
export async function verifyInstituteCode(code: string) {
  try {
    const { data: institute, error } = await supabase
      .from('institutes')
      .select('id')
      .eq('code', code)
      .single();

    if (error || !institute) {
      return { valid: false };
    }

    return { valid: true, instituteId: institute.id };
  } catch (error) {
    return { valid: false };
  }
}

// Get institute with cohorts
export async function getInstituteWithCohorts(instituteId: string) {
  try {
    const { data: institute } = await supabase
      .from('institutes')
      .select('*')
      .eq('id', instituteId)
      .single();

    const { data: cohorts } = await supabase
      .from('cohorts')
      .select('*')
      .eq('institute_id', instituteId);

    return {
      data: {
        institute,
        cohorts
      }
    };
  } catch (error) {
    return { error: String(error) };
  }
}

// Create institute admin account
export async function createInstituteAdmin(data: {
  institute_id: string;
  email: string;
  password: string;
  name: string;
}) {
  try {
    // First create Supabase auth user
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email: data.email,
      password: data.password,
      email_confirm: true
    });

    if (authError) {
      return { error: authError.message };
    }

    // Then create user record with admin role
    const { data: user, error: userError } = await supabase
      .from('users')
      .insert([
        {
          auth_id: authData.user.id,
          email: data.email,
          name: data.name,
          institute_id: data.institute_id,
          role: 'institute_admin',
          current_level: 0,
          skill_score: 0
        }
      ])
      .select()
      .single();

    if (userError) {
      return { error: userError.message };
    }

    return { data: user };
  } catch (error) {
    return { error: String(error) };
  }
}

// Get institute statistics
export async function getInstituteStats(instituteId: string) {
  try {
    const { data: users } = await supabase
      .from('users')
      .select('id, current_level, skill_score, completed_at')
      .eq('institute_id', instituteId);

    const totalStudents = users?.length || 0;
    const completedStudents = users?.filter(u => u.completed_at).length || 0;
    const avgSkillScore = users?.length 
      ? (users.reduce((sum, u) => sum + (u.skill_score || 0), 0) / users.length).toFixed(1)
      : 0;

    return {
      data: {
        totalStudents,
        completedStudents,
        completionRate: totalStudents ? ((completedStudents / totalStudents) * 100).toFixed(1) : 0,
        avgSkillScore
      }
    };
  } catch (error) {
    return { error: String(error) };
  }
}
