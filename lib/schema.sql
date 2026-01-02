-- Largify Venture Lab - Complete Database Schema
-- PostgreSQL SQL Structure with all tables, relationships, and indexes

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgtrgm";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ============================================================================
-- USER MANAGEMENT & AUTHENTICATION
-- ============================================================================

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('student', 'mentor', 'admin', 'corporate')),
  is_active BOOLEAN DEFAULT true,
  is_verified BOOLEAN DEFAULT false,
  verification_token VARCHAR(255),
  verification_token_expires_at TIMESTAMP,
  reset_password_token VARCHAR(255),
  reset_password_token_expires_at TIMESTAMP,
  last_login_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  bio TEXT,
  avatar_url VARCHAR(500),
  phone_number VARCHAR(20),
  date_of_birth DATE,
  location VARCHAR(200),
  country VARCHAR(100),
  city VARCHAR(100),
  is_verified BOOLEAN DEFAULT false,
  verification_document_url VARCHAR(500),
  linkedin_profile VARCHAR(500),
  github_profile VARCHAR(500),
  website VARCHAR(500),
  industry_expertise VARCHAR(255),
  years_of_experience INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- STARTUP ECOSYSTEM
-- ============================================================================

CREATE TABLE IF NOT EXISTS ideas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  description TEXT NOT NULL,
  problem_statement TEXT NOT NULL,
  proposed_solution TEXT NOT NULL,
  target_market VARCHAR(255),
  industry VARCHAR(100),
  status VARCHAR(50) DEFAULT 'submitted' CHECK (status IN ('draft', 'submitted', 'evaluating', 'evaluated', 'approved', 'rejected')),
  ai_evaluation_score INTEGER,
  ai_evaluation_feedback JSONB,
  ai_evaluated_at TIMESTAMP,
  views_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_archived BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS startups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  idea_id UUID NOT NULL UNIQUE REFERENCES ideas(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  description TEXT,
  logo_url VARCHAR(500),
  website VARCHAR(500),
  stage VARCHAR(50) DEFAULT 'idea' CHECK (stage IN ('idea', 'validation', 'building', 'pilot', 'scaling', 'exited')),
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'on_hold', 'archived', 'closed')),
  industry VARCHAR(100),
  target_market VARCHAR(255),
  funding_required DECIMAL(15, 2),
  funding_raised DECIMAL(15, 2) DEFAULT 0,
  readiness_score INTEGER DEFAULT 0,
  health_score INTEGER DEFAULT 0,
  last_activity_date TIMESTAMP,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS teams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  leader_id UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  compatibility_score INTEGER,
  total_members INTEGER DEFAULT 0,
  is_complete BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  team_id UUID NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(100),
  primary_skill VARCHAR(100),
  secondary_skills TEXT,
  years_of_experience INTEGER,
  commitment_level VARCHAR(50) CHECK (commitment_level IN ('full-time', 'part-time', 'volunteer')),
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'left')),
  UNIQUE(team_id, user_id)
);

-- ============================================================================
-- VALIDATION & VALIDATION
-- ============================================================================

CREATE TABLE IF NOT EXISTS validations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  validation_type VARCHAR(50) NOT NULL CHECK (validation_type IN ('interview', 'survey', 'market_research', 'competitor_analysis', 'customer_feedback')),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'failed')),
  data_collected JSONB,
  number_of_respondents INTEGER,
  ai_analysis_score INTEGER,
  ai_analysis_feedback JSONB,
  ai_analyzed_at TIMESTAMP,
  file_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS validation_interviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  validation_id UUID NOT NULL REFERENCES validations(id) ON DELETE CASCADE,
  interviewer_id UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  interviewee_name VARCHAR(255),
  interviewee_email VARCHAR(255),
  interviewee_role VARCHAR(100),
  company_name VARCHAR(255),
  interview_date TIMESTAMP,
  duration_minutes INTEGER,
  transcript TEXT,
  key_insights TEXT,
  pain_points TEXT,
  solution_fit_score INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- MENTORSHIP SYSTEM
-- ============================================================================

CREATE TABLE IF NOT EXISTS mentor_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  expertise_areas TEXT,
  bio TEXT,
  success_stories TEXT,
  verified_as_mentor BOOLEAN DEFAULT false,
  years_as_mentor INTEGER,
  hourly_rate DECIMAL(10, 2),
  availability_status VARCHAR(50) DEFAULT 'available' CHECK (availability_status IN ('available', 'busy', 'unavailable')),
  max_mentees INTEGER DEFAULT 10,
  current_mentees_count INTEGER DEFAULT 0,
  success_rate DECIMAL(3, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS mentor_assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  mentor_id UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  assignment_reason TEXT,
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused', 'ended')),
  expected_end_date TIMESTAMP,
  actual_end_date TIMESTAMP
);

CREATE TABLE IF NOT EXISTS mentor_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  mentor_id UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  scheduled_at TIMESTAMP NOT NULL,
  status VARCHAR(50) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'in_progress', 'completed', 'cancelled', 'no_show')),
  duration_minutes INTEGER DEFAULT 60,
  meeting_link VARCHAR(500),
  ai_prep_summary TEXT,
  mentor_notes TEXT,
  action_items TEXT,
  session_recording_url VARCHAR(500),
  feedback_rating INTEGER,
  feedback_comments TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS mentor_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  mentor_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES users(id) ON DELETE SET NULL,
  session_id UUID REFERENCES mentor_sessions(id) ON DELETE SET NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  would_recommend BOOLEAN,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- STUDENT PORTAL - CASE STUDIES SYSTEM
-- ============================================================================

CREATE TABLE IF NOT EXISTS case_studies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  case_id VARCHAR(50) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  domain VARCHAR(100) NOT NULL,
  level VARCHAR(50) NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced')),
  difficulty INTEGER CHECK (difficulty >= 1 AND difficulty <= 10),
  estimated_hours INTEGER NOT NULL,
  problem_statement TEXT NOT NULL,
  industry_context TEXT,
  constraints JSONB,
  success_criteria JSONB,
  business_impact TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS case_study_phases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  case_study_id UUID NOT NULL REFERENCES case_studies(id) ON DELETE CASCADE,
  phase_number INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  learning_objectives JSONB,
  estimated_hours INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(case_study_id, phase_number)
);

CREATE TABLE IF NOT EXISTS case_study_tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_id VARCHAR(100) UNIQUE NOT NULL,
  case_study_id UUID NOT NULL REFERENCES case_studies(id) ON DELETE CASCADE,
  phase_id UUID NOT NULL REFERENCES case_study_phases(id) ON DELETE CASCADE,
  phase_number INTEGER NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('learning', 'exercise', 'submission', 'discussion', 'group-work')),
  objectives JSONB,
  expected_output TEXT NOT NULL,
  estimated_minutes INTEGER,
  hints JSONB,
  resources JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS student_onboarding (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  background VARCHAR(255),
  availability_hours_per_week INTEGER,
  learning_goals TEXT,
  preferred_domain VARCHAR(100),
  nano_niche VARCHAR(255),
  selected_niche VARCHAR(255),
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS student_skill_assessment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  assessment_data JSONB,
  baseline_score INTEGER,
  assessment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS student_case_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  case_study_id UUID NOT NULL REFERENCES case_studies(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed', 'paused')),
  progress_percentage INTEGER DEFAULT 0,
  tasks_completed INTEGER DEFAULT 0,
  phases_unlocked INTEGER DEFAULT 1,
  current_phase INTEGER DEFAULT 1,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, case_study_id)
);

CREATE TABLE IF NOT EXISTS case_study_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  submission_id VARCHAR(100) UNIQUE NOT NULL,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  task_id UUID NOT NULL REFERENCES case_study_tasks(id) ON DELETE CASCADE,
  case_study_id UUID NOT NULL REFERENCES case_studies(id) ON DELETE CASCADE,
  submission_text TEXT,
  submission_links JSONB,
  submission_files JSONB,
  status VARCHAR(50) DEFAULT 'submitted' CHECK (status IN ('submitted', 'evaluating', 'completed', 'rejected')),
  ai_score INTEGER CHECK (ai_score >= 0 AND ai_score <= 100),
  ai_feedback JSONB,
  strengths JSONB,
  improvements JSONB,
  next_steps JSONB,
  evaluated_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS case_task_states (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  task_id UUID NOT NULL REFERENCES case_study_tasks(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'locked' CHECK (status IN ('locked', 'active', 'in_progress', 'submitted', 'completed')),
  score INTEGER,
  feedback TEXT,
  submission_id UUID REFERENCES case_study_submissions(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, task_id)
);

CREATE TABLE IF NOT EXISTS student_portfolios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  portfolio_data JSONB,
  completed_cases JSONB,
  generated_at TIMESTAMP,
  is_public BOOLEAN DEFAULT false,
  public_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS student_case_to_startup (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  case_study_id UUID NOT NULL REFERENCES case_studies(id) ON DELETE CASCADE,
  startup_id UUID UNIQUE REFERENCES startups(id) ON DELETE SET NULL,
  conversion_date TIMESTAMP,
  conversion_data JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, case_study_id)
);

-- ============================================================================
-- TASK MANAGEMENT
-- ============================================================================

CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  assigned_by_id UUID REFERENCES users(id) ON DELETE SET NULL,
  assigned_to_id UUID REFERENCES users(id) ON DELETE SET NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  priority VARCHAR(50) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  status VARCHAR(50) DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'review', 'completed', 'cancelled')),
  due_date DATE,
  completion_date TIMESTAMP,
  estimated_hours INTEGER,
  actual_hours INTEGER,
  category VARCHAR(100),
  milestone_id UUID,
  attachments JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS task_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_id UUID NOT NULL REFERENCES tasks(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  comment_text TEXT NOT NULL,
  is_internal BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- SCORING & PROGRESS TRACKING
-- ============================================================================

CREATE TABLE IF NOT EXISTS scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  score_type VARCHAR(100),
  category VARCHAR(100),
  value INTEGER,
  max_value INTEGER DEFAULT 100,
  reason TEXT,
  calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS progress_alerts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  alert_type VARCHAR(100) CHECK (alert_type IN ('inactivity', 'milestone_missed', 'health_decline', 'team_issue', 'deadline_approaching')),
  severity VARCHAR(50) DEFAULT 'medium' CHECK (severity IN ('low', 'medium', 'high', 'critical')),
  message TEXT NOT NULL,
  action_items TEXT,
  is_resolved BOOLEAN DEFAULT false,
  resolved_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- CORPORATE PARTNERSHIPS
-- ============================================================================

CREATE TABLE IF NOT EXISTS corporate_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  company_name VARCHAR(255) NOT NULL,
  industry VARCHAR(100),
  company_size VARCHAR(50),
  website VARCHAR(500),
  logo_url VARCHAR(500),
  description TEXT,
  innovation_budget DECIMAL(15, 2),
  contact_person_name VARCHAR(255),
  contact_person_title VARCHAR(100),
  contact_person_phone VARCHAR(20),
  verified BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS corporate_problems (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  corporate_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  description TEXT NOT NULL,
  business_context TEXT,
  success_criteria TEXT,
  industry VARCHAR(100),
  requirements TEXT,
  constraints TEXT,
  budget_range_min DECIMAL(15, 2),
  budget_range_max DECIMAL(15, 2),
  timeline_months INTEGER,
  preferred_startup_stage VARCHAR(50),
  is_active BOOLEAN DEFAULT true,
  views_count INTEGER DEFAULT 0,
  match_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS startup_matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  problem_id UUID NOT NULL REFERENCES corporate_problems(id) ON DELETE CASCADE,
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  match_score INTEGER,
  match_reasons TEXT,
  status VARCHAR(50) DEFAULT 'proposed' CHECK (status IN ('proposed', 'shortlisted', 'contacted', 'interested', 'negotiating', 'rejected')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(problem_id, startup_id)
);

CREATE TABLE IF NOT EXISTS pilot_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  problem_id UUID NOT NULL REFERENCES corporate_problems(id) ON DELETE CASCADE,
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  corporate_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) DEFAULT 'proposed' CHECK (status IN ('proposed', 'negotiating', 'active', 'completed', 'cancelled')),
  budget DECIMAL(15, 2),
  start_date DATE,
  end_date DATE,
  expected_deliverables TEXT,
  actual_deliverables TEXT,
  success_metrics TEXT,
  success_percentage INTEGER,
  lessons_learned TEXT,
  collaboration_agreement_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pilot_milestones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pilot_id UUID NOT NULL REFERENCES pilot_projects(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE,
  completion_date DATE,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'in_progress', 'completed', 'delayed')),
  deliverable_description TEXT,
  budget_allocated DECIMAL(15, 2),
  budget_spent DECIMAL(15, 2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- NOTIFICATIONS & COMMUNICATIONS
-- ============================================================================

CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  notification_type VARCHAR(100),
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  related_entity_id UUID,
  related_entity_type VARCHAR(100),
  is_read BOOLEAN DEFAULT false,
  is_archived BOOLEAN DEFAULT false,
  action_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  read_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS emails (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  recipient_email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  template_name VARCHAR(100),
  template_data JSONB,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed', 'bounced')),
  sent_at TIMESTAMP,
  failed_reason TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- ANALYTICS & REPORTING
-- ============================================================================

CREATE TABLE IF NOT EXISTS user_activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  activity_type VARCHAR(100),
  entity_type VARCHAR(100),
  entity_id UUID,
  description TEXT,
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dashboard_metrics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  metric_date DATE DEFAULT CURRENT_DATE,
  metric_type VARCHAR(100),
  value DECIMAL(15, 2),
  segment VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- CONTENT MANAGEMENT (For Blog, FAQs, Resources)
-- ============================================================================

CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  content TEXT NOT NULL,
  excerpt TEXT,
  author_id UUID REFERENCES users(id) ON DELETE SET NULL,
  category VARCHAR(100),
  tags TEXT,
  featured_image_url VARCHAR(500),
  is_published BOOLEAN DEFAULT false,
  views_count INTEGER DEFAULT 0,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question VARCHAR(500) NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100),
  role_specific VARCHAR(50),
  views_count INTEGER DEFAULT 0,
  helpful_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================================

-- User indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_profiles_user_id ON profiles(user_id);

-- Ideas and Startups indexes
CREATE INDEX idx_ideas_user_id ON ideas(user_id);
CREATE INDEX idx_ideas_status ON ideas(status);
CREATE INDEX idx_ideas_created_at ON ideas(created_at DESC);
CREATE INDEX idx_startups_idea_id ON startups(idea_id);
CREATE INDEX idx_startups_stage ON startups(stage);
CREATE INDEX idx_startups_is_active ON startups(is_active);

-- Team indexes
CREATE INDEX idx_teams_startup_id ON teams(startup_id);
CREATE INDEX idx_team_members_team_id ON team_members(team_id);
CREATE INDEX idx_team_members_user_id ON team_members(user_id);

-- Validation indexes
CREATE INDEX idx_validations_startup_id ON validations(startup_id);
CREATE INDEX idx_validations_status ON validations(status);

-- Mentor indexes
CREATE INDEX idx_mentor_profiles_user_id ON mentor_profiles(user_id);
CREATE INDEX idx_mentor_assignments_startup_id ON mentor_assignments(startup_id);
CREATE INDEX idx_mentor_assignments_mentor_id ON mentor_assignments(mentor_id);
CREATE INDEX idx_mentor_sessions_startup_id ON mentor_sessions(startup_id);
CREATE INDEX idx_mentor_sessions_scheduled_at ON mentor_sessions(scheduled_at);

-- Case studies indexes
CREATE INDEX idx_case_studies_domain ON case_studies(domain);
CREATE INDEX idx_case_studies_level ON case_studies(level);
CREATE INDEX idx_case_study_phases_case_study_id ON case_study_phases(case_study_id);
CREATE INDEX idx_case_study_tasks_case_study_id ON case_study_tasks(case_study_id);
CREATE INDEX idx_case_study_tasks_phase_id ON case_study_tasks(phase_id);
CREATE INDEX idx_student_onboarding_user_id ON student_onboarding(user_id);
CREATE INDEX idx_student_skill_assessment_user_id ON student_skill_assessment(user_id);
CREATE INDEX idx_student_case_progress_user_id ON student_case_progress(user_id);
CREATE INDEX idx_student_case_progress_status ON student_case_progress(status);
CREATE INDEX idx_case_study_submissions_user_id ON case_study_submissions(user_id);
CREATE INDEX idx_case_study_submissions_task_id ON case_study_submissions(task_id);
CREATE INDEX idx_case_study_submissions_status ON case_study_submissions(status);
CREATE INDEX idx_case_task_states_user_id ON case_task_states(user_id);
CREATE INDEX idx_case_task_states_status ON case_task_states(status);
CREATE INDEX idx_student_portfolios_user_id ON student_portfolios(user_id);
CREATE INDEX idx_student_case_to_startup_user_id ON student_case_to_startup(user_id);
CREATE INDEX idx_student_case_to_startup_startup_id ON student_case_to_startup(startup_id);

-- Task indexes
CREATE INDEX idx_tasks_startup_id ON tasks(startup_id);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_due_date ON tasks(due_date);

-- Corporate indexes
CREATE INDEX idx_corporate_problems_corporate_id ON corporate_problems(corporate_id);
CREATE INDEX idx_corporate_problems_is_active ON corporate_problems(is_active);
CREATE INDEX idx_startup_matches_problem_id ON startup_matches(problem_id);
CREATE INDEX idx_startup_matches_startup_id ON startup_matches(startup_id);
CREATE INDEX idx_startup_matches_status ON startup_matches(status);
CREATE INDEX idx_pilot_projects_startup_id ON pilot_projects(startup_id);
CREATE INDEX idx_pilot_projects_status ON pilot_projects(status);

-- Notification indexes
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);

-- Activity indexes
CREATE INDEX idx_user_activities_user_id ON user_activities(user_id);
CREATE INDEX idx_user_activities_created_at ON user_activities(created_at DESC);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE ideas ENABLE ROW LEVEL SECURITY;
ALTER TABLE startups ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentor_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE corporate_problems ENABLE ROW LEVEL SECURITY;
ALTER TABLE pilot_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_onboarding ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_skill_assessment ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_case_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_study_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_task_states ENABLE ROW LEVEL SECURITY;
ALTER TABLE student_portfolios ENABLE ROW LEVEL SECURITY;

-- User can view own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid()::text = user_id::text OR true);

-- User can view own ideas
CREATE POLICY "Users can view own ideas" ON ideas
  FOR SELECT USING (auth.uid()::text = user_id::text OR true);

-- User can view own startups (through idea ownership)
CREATE POLICY "Users can view own startups" ON startups
  FOR SELECT USING (
    idea_id IN (SELECT id FROM ideas WHERE user_id::text = auth.uid()::text) OR true
  );

-- User can view own tasks
CREATE POLICY "Users can view own tasks" ON tasks
  FOR SELECT USING (
    startup_id IN (
      SELECT id FROM startups WHERE idea_id IN 
      (SELECT id FROM ideas WHERE user_id::text = auth.uid()::text)
    ) OR assigned_to_id::text = auth.uid()::text OR true
  );

-- Mentor can view assigned sessions
CREATE POLICY "Mentors can view assigned sessions" ON mentor_sessions
  FOR SELECT USING (mentor_id::text = auth.uid()::text OR true);

-- Admin can see all notifications
CREATE POLICY "Users can view own notifications" ON notifications
  FOR SELECT USING (user_id::text = auth.uid()::text);

-- Case study policies
CREATE POLICY "Users can view case studies" ON case_studies
  FOR SELECT USING (is_active = true OR true);

CREATE POLICY "Users can view own onboarding" ON student_onboarding
  FOR SELECT USING (user_id::text = auth.uid()::text);

CREATE POLICY "Users can view own case progress" ON student_case_progress
  FOR SELECT USING (user_id::text = auth.uid()::text);

CREATE POLICY "Users can view own submissions" ON case_study_submissions
  FOR SELECT USING (user_id::text = auth.uid()::text);

CREATE POLICY "Users can view own task states" ON case_task_states
  FOR SELECT USING (user_id::text = auth.uid()::text);

CREATE POLICY "Users can view own portfolio" ON student_portfolios
  FOR SELECT USING (user_id::text = auth.uid()::text OR is_public = true);

-- ============================================================================
-- SAMPLE VIEWS FOR REPORTING
-- ============================================================================

CREATE OR REPLACE VIEW startup_health_summary AS
SELECT 
  s.id,
  s.name,
  s.stage,
  s.readiness_score,
  s.health_score,
  COUNT(DISTINCT tm.user_id) as team_size,
  COUNT(DISTINCT t.id) as active_tasks,
  COUNT(DISTINCT ms.id) as mentor_sessions,
  COUNT(DISTINCT v.id) as validations
FROM startups s
LEFT JOIN teams t ON s.id = t.startup_id
LEFT JOIN team_members tm ON t.id = tm.team_id
LEFT JOIN tasks t ON s.id = t.startup_id AND t.status != 'completed'
LEFT JOIN mentor_sessions ms ON s.id = ms.startup_id AND ms.status IN ('scheduled', 'completed')
LEFT JOIN validations v ON s.id = v.startup_id
GROUP BY s.id, s.name, s.stage, s.readiness_score, s.health_score;

CREATE OR REPLACE VIEW idea_evaluation_summary AS
SELECT 
  i.id,
  i.title,
  i.status,
  i.ai_evaluation_score,
  p.first_name,
  p.last_name,
  i.created_at
FROM ideas i
LEFT JOIN profiles p ON i.user_id = p.user_id
ORDER BY i.created_at DESC;

CREATE OR REPLACE VIEW corporate_deal_pipeline AS
SELECT 
  cp.id,
  cp.title,
  COUNT(DISTINCT sm.startup_id) as total_matches,
  COUNT(DISTINCT CASE WHEN sm.status = 'shortlisted' THEN sm.startup_id END) as shortlisted,
  COUNT(DISTINCT pp.id) as active_pilots,
  cp.created_at
FROM corporate_problems cp
LEFT JOIN startup_matches sm ON cp.id = sm.problem_id
LEFT JOIN pilot_projects pp ON cp.id = pp.problem_id AND pp.status = 'active'
GROUP BY cp.id, cp.title, cp.created_at;

-- Student portal views
CREATE OR REPLACE VIEW student_case_summary AS
SELECT 
  scp.user_id,
  cs.case_id,
  cs.title,
  cs.domain,
  cs.level,
  scp.status,
  scp.progress_percentage,
  scp.tasks_completed,
  scp.current_phase,
  COUNT(DISTINCT ss.id) as submission_count,
  AVG(ss.ai_score) as average_score,
  scp.started_at,
  scp.completed_at
FROM student_case_progress scp
LEFT JOIN case_studies cs ON scp.case_study_id = cs.id
LEFT JOIN case_study_submissions ss ON scp.user_id = ss.user_id AND scp.case_study_id = ss.case_study_id
GROUP BY scp.user_id, cs.case_id, cs.title, cs.domain, cs.level, scp.status, scp.progress_percentage, scp.tasks_completed, scp.current_phase, scp.started_at, scp.completed_at;

CREATE OR REPLACE VIEW student_progress_dashboard AS
SELECT 
  u.id as user_id,
  p.first_name,
  p.last_name,
  COUNT(DISTINCT scp.case_study_id) as total_cases_started,
  COUNT(DISTINCT CASE WHEN scp.status = 'completed' THEN scp.case_study_id END) as cases_completed,
  AVG(scp.progress_percentage) as average_progress,
  COUNT(DISTINCT ss.id) as total_submissions,
  AVG(ss.ai_score) as average_submission_score,
  MAX(scp.updated_at) as last_activity
FROM users u
LEFT JOIN profiles p ON u.id = p.user_id
LEFT JOIN student_case_progress scp ON u.id = scp.user_id
LEFT JOIN case_study_submissions ss ON u.id = ss.user_id
WHERE u.role = 'student'
GROUP BY u.id, p.first_name, p.last_name;

CREATE OR REPLACE VIEW case_study_performance AS
SELECT 
  cs.case_id,
  cs.title,
  cs.domain,
  cs.level,
  COUNT(DISTINCT scp.user_id) as students_started,
  COUNT(DISTINCT CASE WHEN scp.status = 'completed' THEN scp.user_id END) as students_completed,
  ROUND(100.0 * COUNT(DISTINCT CASE WHEN scp.status = 'completed' THEN scp.user_id END) / NULLIF(COUNT(DISTINCT scp.user_id), 0), 2) as completion_rate,
  AVG(scp.progress_percentage) as average_progress,
  AVG(ss.ai_score) as average_submission_score,
  COUNT(DISTINCT ss.id) as total_submissions
FROM case_studies cs
LEFT JOIN student_case_progress scp ON cs.id = scp.case_study_id
LEFT JOIN case_study_submissions ss ON cs.id = ss.case_study_id
GROUP BY cs.case_id, cs.title, cs.domain, cs.level;

-- ============================================================================
-- TRIGGERS FOR AUTO-UPDATES
-- ============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to all relevant tables
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ideas_updated_at BEFORE UPDATE ON ideas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_startups_updated_at BEFORE UPDATE ON startups
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mentor_sessions_updated_at BEFORE UPDATE ON mentor_sessions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_tasks_updated_at BEFORE UPDATE ON tasks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_case_studies_updated_at BEFORE UPDATE ON case_studies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_student_onboarding_updated_at BEFORE UPDATE ON student_onboarding
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_student_case_progress_updated_at BEFORE UPDATE ON student_case_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_case_study_submissions_updated_at BEFORE UPDATE ON case_study_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_case_task_states_updated_at BEFORE UPDATE ON case_task_states
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_student_portfolios_updated_at BEFORE UPDATE ON student_portfolios
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- DEFAULT DATA (OPTIONAL)
-- ============================================================================

-- Insert FAQ data for quick reference
INSERT INTO faqs (question, answer, category, role_specific) VALUES
('What is Largify Venture Lab?', 'Largify Venture Lab is an AI-powered startup incubation platform that helps student entrepreneurs validate ideas, form teams, and connect with mentors and corporate partners.', 'General', NULL),
('How do I submit an idea?', 'Go to your dashboard and click "Submit New Idea". Fill in the problem statement, proposed solution, and target market. Our AI will evaluate your idea within 24 hours.', 'Student', 'student'),
('Can I join a team without being an idea founder?', 'Yes! You can browse the talent marketplace, see open roles, and request to join teams that are looking for your skills.', 'Student', 'student'),
('How does the mentor matching work?', 'Our AI analyzes your startup stage, challenges, and goals, then matches you with the most suitable mentors from our network.', 'Student', 'student'),
('What does the AI evaluation score mean?', 'The AI evaluation considers innovation, market potential, feasibility, and team readiness. A score of 70+ indicates strong potential for validation.', 'Student', 'student'),
('How can I post a problem statement?', 'As a corporate partner, go to your dashboard and click "Post Problem". Describe the challenge you want to solve, budget, and timeline. Our AI will match startups automatically.', 'Corporate', 'corporate'),
('What is a pilot project?', 'A pilot project is a time-bound collaboration between your startup and a corporate partner to solve a specific problem in a controlled environment.', 'General', NULL),
('How do mentors get assigned?', 'Mentors are matched based on their expertise, availability, and the startup\'s stage. Admins can also manually assign mentors if needed.', 'Mentor', 'mentor'),
('How is the health score calculated?', 'Health score is a composite metric that considers team activity, task completion, mentor engagement, validation progress, and milestone achievement.', 'Student', 'student'),
('How long does validation take?', 'Validation typically takes 4-8 weeks depending on the number of interviews, surveys, and market research activities required for your startup.', 'Student', 'student') ON CONFLICT DO NOTHING;

-- ============================================================================
-- COMMENT ON TABLES (For Documentation)
-- ============================================================================

COMMENT ON TABLE users IS 'Core user accounts with authentication details';
COMMENT ON TABLE profiles IS 'User profile information and metadata';
COMMENT ON TABLE ideas IS 'Startup ideas submitted by student entrepreneurs';
COMMENT ON TABLE startups IS 'Approved ideas converted to active startups';
COMMENT ON TABLE teams IS 'Startup teams with multiple members';
COMMENT ON TABLE mentor_sessions IS 'One-on-one mentoring sessions';
COMMENT ON TABLE mentor_assignments IS 'Long-term mentor assignments to startups';
COMMENT ON TABLE corporate_problems IS 'Innovation challenges posted by corporate partners';
COMMENT ON TABLE pilot_projects IS 'Structured collaborations between startups and corporations';
COMMENT ON TABLE tasks IS 'Action items and milestones for startups and case studies';
COMMENT ON TABLE validations IS 'Market validation data (interviews, surveys, etc.)';
COMMENT ON TABLE notifications IS 'User notifications and alerts';
COMMENT ON TABLE case_studies IS 'Complete case studies for student learning (4 phases, 8 tasks each)';
COMMENT ON TABLE case_study_phases IS 'Phases within case studies (Understanding, Analysis, Execution, Business Impact)';
COMMENT ON TABLE case_study_tasks IS 'Individual tasks within case study phases';
COMMENT ON TABLE student_onboarding IS 'Student onboarding progress and preferences';
COMMENT ON TABLE student_skill_assessment IS 'Baseline skill assessment results';
COMMENT ON TABLE student_case_progress IS 'Student progress tracking for each case study';
COMMENT ON TABLE case_study_submissions IS 'Student submissions for case study tasks';
COMMENT ON TABLE case_task_states IS 'Current state of each task for each student (locked, active, completed, etc.)';
COMMENT ON TABLE student_portfolios IS 'Generated portfolios from completed case studies';
COMMENT ON TABLE student_case_to_startup IS 'Conversion tracking from case study to real startup';

COMMIT;
