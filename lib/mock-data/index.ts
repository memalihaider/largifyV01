// lib/mock-data/index.ts - Comprehensive Mock Data Service

import { 
  User, 
  Idea, 
  Startup, 
  Team, 
  MentorSession,
  Task,
  CorporateProblem,
  PilotProject,
  Validation
} from '@/lib/types/database';

// ============================================================================
// MOCK USERS
// ============================================================================

export const mockUsers = {
  students: [
    {
      id: 'student-1',
      email: 'ahmed@example.com',
      name: 'Ahmed Hassan',
      role: 'student',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed',
      location: 'Karachi, Pakistan',
      bio: 'Passionate about EdTech solutions'
    },
    {
      id: 'student-2',
      email: 'fatima@example.com',
      name: 'Fatima Khan',
      role: 'student',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima',
      location: 'Lahore, Pakistan',
      bio: 'FinTech innovator and entrepreneur'
    },
    {
      id: 'student-3',
      email: 'ali@example.com',
      name: 'Ali Raza',
      role: 'student',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali',
      location: 'Islamabad, Pakistan',
      bio: 'AI & Machine Learning enthusiast'
    },
    {
      id: 'student-4',
      email: 'sara@example.com',
      name: 'Sara Malik',
      role: 'student',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sara',
      location: 'Karachi, Pakistan',
      bio: 'AgriTech and sustainability focused'
    },
  ] as Partial<User>[],
  
  mentors: [
    {
      id: 'mentor-1',
      email: 'dr.pakistan@example.com',
      name: 'Dr. Pakistan Founder',
      role: 'mentor',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrPakistan',
      location: 'Karachi, Pakistan',
      bio: '20+ years in tech entrepreneurship'
    },
    {
      id: 'mentor-2',
      email: 'sana.mentor@example.com',
      name: 'Sana Ahmed',
      role: 'mentor',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SanaMentor',
      location: 'Lahore, Pakistan',
      bio: 'Growth strategy and scaling expertise'
    },
    {
      id: 'mentor-3',
      email: 'hassan.tech@example.com',
      name: 'Hassan Tech',
      role: 'mentor',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HassanTech',
      location: 'Islamabad, Pakistan',
      bio: 'Software architecture and product development'
    },
  ] as Partial<User>[],
  
  corporates: [
    {
      id: 'corp-1',
      email: 'innovation@zong.com.pk',
      name: 'Zong Pakistan',
      role: 'corporate',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Zong',
      location: 'Karachi, Pakistan',
      bio: 'Leading telecom innovation hub'
    },
    {
      id: 'corp-2',
      email: 'ventures@hbl.com',
      name: 'HBL Innovation',
      role: 'corporate',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HBL',
      location: 'Karachi, Pakistan',
      bio: 'Pakistan\'s largest banking innovation platform'
    },
  ] as Partial<User>[],
  
  admin: {
    id: 'admin-1',
    email: 'admin@largify.com',
    name: 'Admin Largify',
    role: 'admin',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin',
    location: 'Pakistan',
    bio: 'Platform administrator'
  } as Partial<User>
};

// ============================================================================
// MOCK IDEAS
// ============================================================================

export const mockIdeas = [
  {
    id: 'idea-1',
    user_id: 'student-1',
    title: 'AI-Powered Smart Classroom Analytics',
    description: 'An intelligent platform that tracks student engagement and provides real-time insights to educators.',
    problem_statement: 'Teachers cannot measure real-time student engagement in virtual and physical classrooms',
    proposed_solution: 'AI system that analyzes student behavior, participation, and emotional responses',
    target_market: 'Schools and Universities in Pakistan',
    industry: 'EdTech',
    status: 'evaluated',
    ai_evaluation_score: 82,
    ai_evaluation_feedback: {
      strengths: ['Clear problem', 'Large market', 'Scalable solution'],
      weaknesses: ['High competition', 'Privacy concerns'],
      recommendations: ['Focus on universities first', 'Validate with 10+ schools']
    },
    created_at: new Date('2025-12-15')
  },
  {
    id: 'idea-2',
    user_id: 'student-2',
    title: 'Digital Banking for Unbanked Population',
    description: 'A mobile-first financial platform designed for Pakistan\'s unbanked population.',
    problem_statement: '80% of Pakistani population lacks access to basic banking services',
    proposed_solution: 'Simple, offline-enabled mobile banking with zero fees',
    target_market: 'Unbanked population in rural Pakistan',
    industry: 'FinTech',
    status: 'evaluated',
    ai_evaluation_score: 88,
    ai_evaluation_feedback: {
      strengths: ['Huge market opportunity', 'Strong regulatory support', 'Social impact'],
      weaknesses: ['Regulatory complexity', 'Trust building required'],
      recommendations: ['Partner with existing banks', 'Start with one region']
    },
    created_at: new Date('2025-12-10')
  },
  {
    id: 'idea-3',
    user_id: 'student-3',
    title: 'Precision Farming using IoT & AI',
    description: 'Smart farming solution using sensors and AI to optimize crop yield.',
    problem_statement: 'Pakistani farmers lose 30% yield due to poor irrigation and pest management',
    proposed_solution: 'IoT-based system with AI predictions for irrigation and pest control',
    target_market: 'Small and medium farmers in Punjab',
    industry: 'AgriTech',
    status: 'evaluated',
    ai_evaluation_score: 75,
    ai_evaluation_feedback: {
      strengths: ['High impact', 'Government support', 'Clear ROI'],
      weaknesses: ['High capital requirement', 'Limited digital literacy'],
      recommendations: ['Focus on subsidized model', 'Partner with government']
    },
    created_at: new Date('2025-12-08')
  },
  {
    id: 'idea-4',
    user_id: 'student-4',
    title: 'Supply Chain Tracking for SMEs',
    description: 'Blockchain-based supply chain transparency for small and medium enterprises.',
    problem_statement: 'SMEs in Pakistan lack visibility into their supply chains leading to waste and inefficiency',
    proposed_solution: 'Simple blockchain platform for tracking goods from production to delivery',
    target_market: 'SMEs in textile and food industries',
    industry: 'B2B SaaS',
    status: 'draft',
    ai_evaluation_score: null,
    ai_evaluation_feedback: null,
    created_at: new Date('2025-12-20')
  }
] as Partial<Idea>[];

// ============================================================================
// MOCK STARTUPS
// ============================================================================

export const mockStartups = [
  {
    id: 'startup-1',
    idea_id: 'idea-1',
    name: 'SmartClass AI',
    description: 'AI-powered student engagement analytics platform for educational institutions.',
    logo_url: 'https://api.dicebear.com/7.x/initials/svg?seed=SC',
    stage: 'validation',
    status: 'active',
    readiness_score: 72,
    health_score: 78,
    last_activity_date: new Date(),
    industry: 'EdTech',
    target_market: 'Educational Institutions',
    funding_required: 500000,
    funding_raised: 100000,
    created_at: new Date('2025-11-15')
  },
  {
    id: 'startup-2',
    idea_id: 'idea-2',
    name: 'MobiFinance',
    description: 'Digital banking platform for Pakistan\'s unbanked population.',
    logo_url: 'https://api.dicebear.com/7.x/initials/svg?seed=MF',
    stage: 'validation',
    status: 'active',
    readiness_score: 85,
    health_score: 82,
    last_activity_date: new Date(),
    industry: 'FinTech',
    target_market: 'Unbanked Population',
    funding_required: 2000000,
    funding_raised: 300000,
    created_at: new Date('2025-11-10')
  },
  {
    id: 'startup-3',
    idea_id: 'idea-3',
    name: 'AgroBridge',
    description: 'IoT and AI-powered precision farming platform for Pakistani farmers.',
    logo_url: 'https://api.dicebear.com/7.x/initials/svg?seed=AB',
    stage: 'building',
    status: 'active',
    readiness_score: 68,
    health_score: 65,
    last_activity_date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    industry: 'AgriTech',
    target_market: 'Farming Community',
    funding_required: 1500000,
    funding_raised: 200000,
    created_at: new Date('2025-10-20')
  }
] as Partial<Startup>[];

// ============================================================================
// MOCK TEAMS
// ============================================================================

export const mockTeams = [
  {
    id: 'team-1',
    startup_id: 'startup-1',
    leader_id: 'student-1',
    compatibility_score: 87,
    total_members: 3,
    created_at: new Date('2025-11-20')
  },
  {
    id: 'team-2',
    startup_id: 'startup-2',
    leader_id: 'student-2',
    compatibility_score: 92,
    total_members: 4,
    created_at: new Date('2025-11-10')
  },
  {
    id: 'team-3',
    startup_id: 'startup-3',
    leader_id: 'student-3',
    compatibility_score: 79,
    total_members: 3,
    created_at: new Date('2025-10-25')
  }
] as Partial<Team>[];

// ============================================================================
// MOCK MENTOR SESSIONS
// ============================================================================

export const mockMentorSessions = [
  {
    id: 'session-1',
    startup_id: 'startup-1',
    mentor_id: 'mentor-1',
    scheduled_at: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'scheduled',
    duration_minutes: 60,
    ai_prep_summary: 'Focus on market validation strategy. Discuss competition analysis and pricing model.',
    created_at: new Date()
  },
  {
    id: 'session-2',
    startup_id: 'startup-2',
    mentor_id: 'mentor-2',
    scheduled_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
    duration_minutes: 60,
    mentor_notes: 'Great progress on MVP. Need to focus on regulatory compliance. Team is strong.',
    feedback_rating: 5,
    feedback_comments: 'Very helpful insights on fundraising strategy',
    created_at: new Date()
  },
  {
    id: 'session-3',
    startup_id: 'startup-3',
    mentor_id: 'mentor-3',
    scheduled_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'completed',
    duration_minutes: 60,
    mentor_notes: 'Discussed technical architecture. Need to validate with farmers.',
    feedback_rating: 4,
    feedback_comments: 'Good technical guidance, could have more practical examples',
    created_at: new Date()
  }
] as Partial<MentorSession>[];

// ============================================================================
// MOCK TASKS
// ============================================================================

export const mockTasks = [
  {
    id: 'task-1',
    startup_id: 'startup-1',
    assigned_by_id: 'mentor-1',
    assigned_to_id: 'student-1',
    title: 'Conduct 10 Customer Interviews',
    description: 'Interview 10 potential customers from schools to validate problem statement',
    priority: 'high',
    status: 'in_progress',
    due_date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    estimated_hours: 20,
    category: 'Validation',
    created_at: new Date()
  },
  {
    id: 'task-2',
    startup_id: 'startup-1',
    assigned_by_id: 'mentor-1',
    assigned_to_id: 'student-1',
    title: 'Develop MVP Prototype',
    description: 'Create working prototype of core features',
    priority: 'high',
    status: 'todo',
    due_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    estimated_hours: 80,
    category: 'Development',
    created_at: new Date()
  },
  {
    id: 'task-3',
    startup_id: 'startup-2',
    assigned_by_id: 'mentor-2',
    assigned_to_id: 'student-2',
    title: 'Regulatory Compliance Research',
    description: 'Research SBP and FIA regulations for digital banking',
    priority: 'critical',
    status: 'in_progress',
    due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    estimated_hours: 40,
    category: 'Research',
    created_at: new Date()
  },
  {
    id: 'task-4',
    startup_id: 'startup-2',
    assigned_by_id: 'mentor-2',
    assigned_to_id: 'student-2',
    title: 'Market Size Analysis',
    description: 'Create detailed market sizing document',
    priority: 'high',
    status: 'completed',
    due_date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    completion_date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    estimated_hours: 30,
    actual_hours: 28,
    category: 'Research',
    created_at: new Date()
  }
] as Partial<Task>[];

// ============================================================================
// MOCK VALIDATIONS
// ============================================================================

export const mockValidations = [
  {
    id: 'validation-1',
    startup_id: 'startup-1',
    validation_type: 'interview',
    title: 'Teacher Interviews Round 1',
    description: 'Interviews with 5 school teachers about engagement tracking',
    status: 'completed',
    number_of_respondents: 5,
    ai_analysis_score: 82,
    ai_analysis_feedback: {
      demand: 'High - All respondents confirmed need',
      willingness_to_pay: 'PKR 50,000-100,000 per school',
      key_insights: 'Teachers want real-time notifications',
      recommendations: 'Proceed with MVP development'
    },
    created_at: new Date('2025-12-10')
  },
  {
    id: 'validation-2',
    startup_id: 'startup-2',
    validation_type: 'survey',
    title: 'Unbanked Population Survey',
    description: 'Survey with 50 unbanked individuals',
    status: 'completed',
    number_of_respondents: 50,
    ai_analysis_score: 88,
    ai_analysis_feedback: {
      demand: 'Very High - 92% interested',
      willingness_to_pay: 'PKR 500-2000 annually',
      key_insights: 'Offline functionality critical',
      recommendations: 'Market ready for launch'
    },
    created_at: new Date('2025-12-05')
  },
  {
    id: 'validation-3',
    startup_id: 'startup-3',
    validation_type: 'market_research',
    title: 'Competitor Analysis',
    description: 'Analysis of existing precision farming solutions',
    status: 'in_progress',
    ai_analysis_feedback: null,
    created_at: new Date('2025-12-15')
  }
] as Partial<Validation>[];

// ============================================================================
// MOCK CORPORATE PROBLEMS
// ============================================================================

export const mockCorporateProblems = [
  {
    id: 'problem-1',
    corporate_id: 'corp-1',
    title: 'Customer Data Analytics & Personalization',
    description: 'Improve customer experience through AI-powered analytics and personalization',
    business_context: 'Zong needs to increase customer retention and engagement through personalized services',
    success_criteria: 'Increase customer lifetime value by 20% and reduce churn by 15%',
    industry: 'Telecom',
    timeline_months: 6,
    budget_range_min: 1000000,
    budget_range_max: 5000000,
    is_active: true,
    views_count: 45,
    match_count: 3,
    created_at: new Date('2025-11-20')
  },
  {
    id: 'problem-2',
    corporate_id: 'corp-2',
    title: 'Digital Payment Gateway for Rural Areas',
    description: 'Build efficient payment infrastructure for rural Pakistan',
    business_context: 'HBL wants to expand digital banking to underbanked areas',
    success_criteria: 'Process 100K daily transactions with 99.9% uptime',
    industry: 'Banking',
    timeline_months: 8,
    budget_range_min: 2000000,
    budget_range_max: 8000000,
    is_active: true,
    views_count: 52,
    match_count: 2,
    created_at: new Date('2025-12-01')
  }
] as Partial<CorporateProblem>[];

// ============================================================================
// MOCK PILOT PROJECTS
// ============================================================================

export const mockPilotProjects = [
  {
    id: 'pilot-1',
    problem_id: 'problem-1',
    startup_id: 'startup-2',
    corporate_id: 'corp-1',
    title: 'AI-Powered Customer Analytics Pilot',
    description: 'Implementing customer analytics solution for Zong',
    status: 'active',
    budget: 2000000,
    start_date: new Date('2025-12-01'),
    end_date: new Date('2026-06-01'),
    expected_deliverables: 'Customer analytics dashboard, ML model for churn prediction, personalization engine',
    success_percentage: 65,
    created_at: new Date('2025-12-01')
  }
] as Partial<PilotProject>[];

// ============================================================================
// MOCK STATISTICS
// ============================================================================

export const mockStats = {
  dashboard: {
    student: {
      ideasSubmitted: 4,
      activeStartups: 3,
      readinessScore: 75,
      validationProgress: 65,
      tasksCompleted: 8,
      mentorSessions: 6,
      teamSize: 3
    },
    mentor: {
      activeMentees: 4,
      sessionsThisMonth: 8,
      expertiseAreas: ['EdTech', 'FinTech', 'Product Strategy'],
      impactScore: 92,
      successRate: 85,
      hoursContributed: 120
    },
    admin: {
      totalStudents: 45,
      ideasSubmitted: 28,
      validatedStartups: 8,
      pilotReady: 3,
      avgReadinessScore: 72,
      mentorEngagement: 87,
      cohortHealth: 78
    },
    corporate: {
      problemStatements: 3,
      activeMatches: 5,
      activePilots: 1,
      successRate: 89,
      innovationSpend: 15000000,
      dealsInProgress: 2
    }
  }
};

// ============================================================================
// MOCK DATA GETTERS (Functions for Components)
// ============================================================================

export const getMockUser = (userId: string) => {
  return [
    ...mockUsers.students,
    ...mockUsers.mentors,
    ...mockUsers.corporates,
    mockUsers.admin
  ].find(u => u.id === userId);
};

export const getMockIdea = (ideaId: string) => {
  return mockIdeas.find(i => i.id === ideaId);
};

export const getMockStartup = (startupId: string) => {
  return mockStartups.find(s => s.id === startupId);
};

export const getMockTeam = (teamId: string) => {
  return mockTeams.find(t => t.id === teamId);
};

export const getMockMentorSessions = (startupId: string) => {
  return mockMentorSessions.filter(s => s.startup_id === startupId);
};

export const getMockTasks = (startupId: string, status?: string) => {
  const tasks = mockTasks.filter(t => t.startup_id === startupId);
  if (status) {
    return tasks.filter(t => t.status === status);
  }
  return tasks;
};

export const getMockValidations = (startupId: string) => {
  return mockValidations.filter(v => v.startup_id === startupId);
};

export const getMockCorporateProblems = (corporateId?: string) => {
  if (corporateId) {
    return mockCorporateProblems.filter(p => p.corporate_id === corporateId);
  }
  return mockCorporateProblems;
};

export const getMockPilotProjects = (startupId?: string) => {
  if (startupId) {
    return mockPilotProjects.filter(p => p.startup_id === startupId);
  }
  return mockPilotProjects;
};

export const getMockStats = (role: 'student' | 'mentor' | 'admin' | 'corporate') => {
  return mockStats.dashboard[role];
};
