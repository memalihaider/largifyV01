// lib/types/venture-lab.ts - Complete Largify Venture Lab Type Definitions

export type AccessLevel = 'free' | 'pro' | 'sponsored';
export type UserRole = 'student' | 'mentor' | 'admin' | 'institute_admin';
export type CareerIntent = 'job' | 'startup' | 'both';
export type DomainCategory = 'Technology' | 'Business / Digital';
export type Difficulty = 'level1' | 'level2' | 'level3' | 'level4' | 'level5' | 'advanced';
export type CompetitionLevel = 'low' | 'medium' | 'high';
export type ProgressStatus = 'in_progress' | 'completed' | 'abandoned';
export type SubmissionStatus = 'submitted' | 'evaluated' | 'revision_needed';
export type MentorSessionStatus = 'scheduled' | 'completed' | 'cancelled';
export type ValidationStatus = 'ideation' | 'validated' | 'rejected';
export type NotificationType = 'task_reminder' | 'inactivity' | 'milestone' | 'mentor_feedback' | 'level_up';

// Institute and Cohort
export interface Institute {
  id: string;
  name: string;
  code: string;
  email: string;
  website?: string;
  logo_url?: string;
  tier: 'free' | 'pro' | 'enterprise';
  student_count: number;
  created_at: string;
  updated_at: string;
}

export interface Cohort {
  id: string;
  institute_id: string;
  name: string;
  start_date: string;
  end_date: string;
  capacity: number;
  access_level: AccessLevel;
  created_at: string;
}

// User
export interface User {
  id: string;
  auth_id: string;
  email: string;
  name: string;
  university?: string;
  degree?: string;
  academic_year?: number;
  weekly_availability?: number;
  career_intent?: CareerIntent;
  institute_id: string;
  cohort_id: string;
  access_level: AccessLevel;
  current_level: number;
  current_domain?: string;
  current_niche?: string;
  skill_score: number;
  role: UserRole;
  completed_at?: string;
  created_at: string;
  updated_at: string;
}

// Domain and Niche
export interface Domain {
  id: string;
  name: string;
  category: DomainCategory;
  description: string;
  icon: string;
  order: number;
  created_at: string;
}

export interface Niche {
  id: string;
  domain_id: string;
  name: string;
  description: string;
  market_size: string;
  competition_level: CompetitionLevel;
  opportunity_score: number;
  min_level: number;
  order: number;
  created_at: string;
}

// Case Study
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  domain_id: string;
  niche_id: string;
  difficulty: Difficulty;
  estimated_hours: number;
  learning_objectives: string[];
  competencies: string[];
  phases: Phase[];
  created_at: string;
}

export interface Phase {
  id: string;
  case_study_id: string;
  number: number;
  title: string;
  description: string;
  tasks: Task[];
  created_at: string;
}

export interface Task {
  id: string;
  phase_id: string;
  number: number;
  title: string;
  description: string;
  time_allocation: number;
  deliverable_type: 'document' | 'presentation' | 'code' | 'report';
  resources: Resource[];
  hints: string[];
  created_at: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'video' | 'template' | 'tool';
  url: string;
  duration?: number;
}

// User Progress
export interface UserProgress {
  id: string;
  user_id: string;
  case_study_id: string;
  current_phase: number;
  current_task: number;
  completed_tasks: string[];
  points_earned: number;
  skill_score: number;
  status: ProgressStatus;
  started_at: string;
  completed_at?: string;
}

// Submission and Evaluation
export interface Submission {
  id: string;
  user_id: string;
  task_id: string;
  content: Record<string, any>;
  files: string[];
  status: SubmissionStatus;
  submitted_at: string;
  evaluated_at?: string;
}

export interface Evaluation {
  id: string;
  submission_id: string;
  score: number;
  feedback: string;
  flags: string[];
  suggestions: string[];
  evaluated_by: 'ai' | 'mentor';
  evaluated_at: string;
}

// Mentor
export interface Mentor {
  id: string;
  auth_id: string;
  name: string;
  email: string;
  expertise_domains: string[];
  bio?: string;
  availability: string[];
  institute_id: string;
  created_at: string;
}

export interface MentorSession {
  id: string;
  mentor_id: string;
  user_id: string;
  scheduled_at: string;
  duration: number;
  status: MentorSessionStatus;
  notes?: string;
  feedback?: string;
  created_at: string;
}

// Portfolio
export interface Portfolio {
  id: string;
  user_id: string;
  slug: string;
  title: string;
  bio: string;
  completed_cases: CaseArtifact[];
  skills: SkillTag[];
  certificates: Certificate[];
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface CaseArtifact {
  case_id: string;
  completed_at: string;
  level: number;
  score: number;
  summary: string;
  skills_gained: string[];
}

export interface SkillTag {
  name: string;
  level: number;
  proficiency: number;
}

export interface Certificate {
  id: string;
  name: string;
  issued_at: string;
  credential_url: string;
}

// Startup
export interface StartupIdea {
  id: string;
  user_id: string;
  source_case_id: string;
  name: string;
  description: string;
  problem: string;
  solution: string;
  target_market: string;
  validation_status: ValidationStatus;
  team_members: string[];
  corporate_pilot_eligible: boolean;
  created_at: string;
}

// Notification
export interface Notification {
  id: string;
  user_id: string;
  type: NotificationType;
  title: string;
  message: string;
  action_url?: string;
  is_read: boolean;
  created_at: string;
}

// Assessment and Level
export interface BaselineAssessment {
  id: string;
  user_id: string;
  technical_comfort: number;
  business_understanding: number;
  tool_familiarity: number;
  assigned_level: number;
  created_at: string;
}

export interface LevelBand {
  min_level: number;
  max_level: number;
  name: string;
  description: string;
}

export const LEVEL_BANDS: LevelBand[] = [
  { min_level: 1, max_level: 2, name: 'Fundamentals', description: 'Learning basics' },
  { min_level: 3, max_level: 5, name: 'Applied', description: 'Executing solutions' },
  { min_level: 6, max_level: 8, name: 'Advanced', description: 'Complex scenarios' },
  { min_level: 9, max_level: 10, name: 'Expert', description: 'Real-world ready' }
];

// Domains (Complete List)
export const DOMAINS: Domain[] = [
  // Technology
  { id: 'domain-1', name: 'Cybersecurity', category: 'Technology', description: 'Security & protection', icon: '🔒', order: 1, created_at: '' },
  { id: 'domain-2', name: 'Artificial Intelligence', category: 'Technology', description: 'AI & ML systems', icon: '🤖', order: 2, created_at: '' },
  { id: 'domain-3', name: 'Web & App Development', category: 'Technology', description: 'Full-stack development', icon: '💻', order: 3, created_at: '' },
  { id: 'domain-4', name: 'DevOps & Cloud', category: 'Technology', description: 'Infrastructure & deployment', icon: '☁️', order: 4, created_at: '' },
  { id: 'domain-5', name: 'Data Engineering', category: 'Technology', description: 'Data systems & pipelines', icon: '📊', order: 5, created_at: '' },
  
  // Business / Digital
  { id: 'domain-6', name: 'E-commerce', category: 'Business / Digital', description: 'Online retail', icon: '🛒', order: 6, created_at: '' },
  { id: 'domain-7', name: 'Digital Marketing', category: 'Business / Digital', description: 'Growth & marketing', icon: '📈', order: 7, created_at: '' },
  { id: 'domain-8', name: 'Product Management', category: 'Business / Digital', description: 'Product strategy', icon: '🎯', order: 8, created_at: '' },
  { id: 'domain-9', name: 'SaaS Operations', category: 'Business / Digital', description: 'SaaS businesses', icon: '🚀', order: 9, created_at: '' },
  { id: 'domain-10', name: 'Sales & CRM', category: 'Business / Digital', description: 'Sales systems', icon: '💼', order: 10, created_at: '' },
];
