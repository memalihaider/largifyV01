// Database Types for Largify Venture Lab

export type UserRole = "student" | "mentor" | "admin" | "corporate";

export type IdeaStatus = "draft" | "submitted" | "evaluating" | "evaluated" | "approved" | "rejected";

export type StartupStage = "idea" | "validation" | "building" | "pilot" | "scaling";

export type ValidationStatus = "pending" | "in_progress" | "completed" | "failed";

export type TaskStatus = "todo" | "in_progress" | "completed" | "blocked";

export type TaskPriority = "low" | "medium" | "high" | "urgent" | "critical";

export type PilotStatus = "proposed" | "negotiating" | "active" | "completed" | "cancelled";

// User & Profile Types
export interface User {
  id: string;
  email: string;
  role: UserRole;
  name?: string;
  avatar?: string;
  location?: string;
  bio?: string;
  created_at: string | Date;
  updated_at?: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name: string;
  avatar_url?: string;
  bio?: string;
  skills: string[];
  linkedin_url?: string;
  university?: string;
  department?: string;
  year_of_study?: number;
  company_name?: string;
  company_position?: string;
  expertise_areas?: string[];
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

// Idea Types
export interface Idea {
  id: string;
  user_id: string;
  title: string;
  description: string;
  problem_statement: string;
  proposed_solution: string;
  target_market: string;
  industry: string;
  status: IdeaStatus;
  ai_score?: number;
  ai_evaluation_score?: number | null;
  ai_evaluation_feedback?: {
    strengths: string[];
    weaknesses: string[];
    recommendations: string[];
  } | null;
  ai_feedback?: AIFeedback;
  created_at: string | Date;
  updated_at?: string;
}

export interface AIFeedback {
  overall_score: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  market_potential: number;
  innovation_score: number;
  feasibility_score: number;
  validation_readiness: boolean;
}

// Startup Types
export interface Startup {
  id: string;
  idea_id: string;
  name: string;
  tagline?: string;
  description: string;
  stage: StartupStage;
  status?: string;
  readiness_score: number;
  health_score: number;
  logo_url?: string;
  website_url?: string;
  pitch_deck_url?: string;
  is_active: boolean;
  industry?: string;
  target_market?: string;
  funding_required?: number;
  funding_raised?: number;
  last_activity_date?: string | Date;
  created_at: string | Date;
  updated_at?: string;
}

// Team Types
export interface Team {
  id: string;
  startup_id: string;
  name: string;
  description?: string;
  leader_id?: string;
  total_members?: number;
  compatibility_score?: number;
  created_at: string | Date;
  updated_at?: string;
}

export interface TeamMember {
  id: string;
  team_id: string;
  user_id: string;
  role: string;
  is_lead: boolean;
  joined_at: string;
}

// Validation Types
export interface Validation {
  id: string;
  startup_id: string;
  type?: "interview" | "survey" | "market_research" | "competitor_analysis";
  validation_type?: "interview" | "survey" | "market_research" | "competitor_analysis";
  title?: string;
  description?: string;
  status: ValidationStatus;
  data?: Record<string, unknown>;
  number_of_respondents?: number;
  ai_analysis_score?: number;
  ai_analysis_feedback?: {
    demand?: string;
    willingness_to_pay?: string;
    key_insights?: string | string[];
    recommendations?: string;
  } | null;
  ai_analysis?: ValidationAnalysis;
  created_at: string | Date;
  updated_at?: string;
}

export interface ValidationAnalysis {
  market_demand_score: number;
  willingness_to_pay: number;
  key_insights: string[];
  concerns: string[];
  recommendation: "pivot" | "proceed" | "iterate";
  confidence_level: number;
}

export interface Interview {
  id: string;
  validation_id: string;
  interviewee_name: string;
  interviewee_role: string;
  transcript?: string;
  audio_url?: string;
  key_takeaways: string[];
  sentiment_score?: number;
  created_at: string;
}

// Mentor Types
export interface MentorSession {
  id: string;
  startup_id: string;
  mentor_id: string;
  scheduled_at: string;
  duration_minutes: number;
  status: "scheduled" | "completed" | "cancelled" | "no_show";
  ai_prep_summary?: string;
  mentor_notes?: string;
  action_items?: string[];
  meeting_url?: string;
  feedback_rating?: number;
  feedback_comments?: string;
  created_at: string | Date;
  updated_at?: string;
}

export interface MentorAssignment {
  id: string;
  mentor_id: string;
  startup_id: string;
  assigned_at: string;
  is_active: boolean;
}

// Task Types
export interface Task {
  id: string;
  startup_id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  assigned_to?: string;
  assigned_to_id?: string;
  assigned_by_id?: string;
  due_date?: string | Date;
  completion_date?: string | Date;
  completed_at?: string;
  source: "manual" | "ai_generated" | "mentor";
  category?: string;
  estimated_hours?: number;
  actual_hours?: number;
  created_at: string | Date;
  updated_at?: string;
}

// Score & Analytics Types
export interface Score {
  id: string;
  startup_id: string;
  type: "readiness" | "health" | "validation" | "team";
  value: number;
  breakdown: Record<string, number>;
  calculated_at: string;
}

// Corporate Types
export interface CorporateProblem {
  id: string;
  corporate_id: string;
  title: string;
  description: string;
  business_context?: string;
  success_criteria?: string;
  industry: string;
  timeline_months?: number;
  budget_range_min?: number;
  budget_range_max?: number;
  budget_range?: string;
  timeline?: string;
  requirements: string[];
  is_active: boolean;
  views_count?: number;
  match_count?: number;
  created_at: string | Date;
  updated_at?: string;
}

export interface StartupMatch {
  id: string;
  problem_id: string;
  startup_id: string;
  match_score: number;
  match_reasons: string[];
  status: "suggested" | "shortlisted" | "contacted" | "rejected";
  created_at: string;
}

export interface PilotProject {
  id: string;
  problem_id: string;
  startup_id: string;
  corporate_id: string;
  title: string;
  description: string;
  scope?: string;
  status: PilotStatus;
  start_date?: string | Date;
  end_date?: string | Date;
  budget?: number;
  expected_deliverables?: string;
  success_percentage?: number;
  deliverables: string[];
  created_at: string | Date;
  updated_at?: string;
}

// Dashboard Types
export interface DashboardStats {
  total_ideas: number;
  active_startups: number;
  avg_readiness_score: number;
  pilot_ready_count: number;
  validation_completion_rate: number;
}

export interface CohortStats {
  cohort_name: string;
  total_students: number;
  ideas_submitted: number;
  validated_startups: number;
  pilot_ready: number;
  active_mentors: number;
}

// Notification Types
export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  is_read: boolean;
  action_url?: string;
  created_at: string;
}
