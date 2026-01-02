# Largify Venture Lab - Complete Student Portal Architecture

**Version**: 1.0 | **Date**: December 31, 2025 | **Status**: Implementation Plan

---

## 🎯 Overview

The **Largify Venture Lab** is a talent and startup production infrastructure platform that guides students through a structured 14-step journey from entry through completion, with clear pathways to either employment or startup founding.

---

## 📊 Database Schema

### **Users**
```typescript
interface User {
  id: string (UUID)
  auth_id: string (Supabase Auth)
  email: string
  name: string
  university: string
  degree: string
  academic_year: number
  weekly_availability: number (hours)
  career_intent: 'job' | 'startup' | 'both'
  institute_id: string (FK)
  cohort_id: string (FK)
  access_level: 'free' | 'pro' | 'sponsored'
  current_level: number (1-10)
  current_domain: string
  current_niche: string
  skill_score: number (0-100)
  completed_at: timestamp
  created_at: timestamp
  updated_at: timestamp
}
```

### **Institutes**
```typescript
interface Institute {
  id: string (UUID)
  name: string
  code: string (unique)
  email: string
  website: string
  logo_url: string
  tier: 'free' | 'pro' | 'enterprise'
  student_count: number
  created_at: timestamp
  updated_at: timestamp
}
```

### **Cohorts**
```typescript
interface Cohort {
  id: string (UUID)
  institute_id: string (FK)
  name: string
  start_date: date
  end_date: date
  capacity: number
  access_level: 'free' | 'pro' | 'sponsored'
  created_at: timestamp
}
```

### **Domains**
```typescript
interface Domain {
  id: string (UUID)
  name: string
  category: 'Technology' | 'Business / Digital'
  description: string
  icon: string
  order: number
  created_at: timestamp
}

// Domains (11 total):
Technology:
  - Cybersecurity
  - Artificial Intelligence
  - Web & App Development
  - DevOps & Cloud
  - Data Engineering

Business / Digital:
  - E-commerce
  - Digital Marketing
  - Product Management
  - SaaS Operations
  - Sales & CRM
```

### **Niches**
```typescript
interface Niche {
  id: string (UUID)
  domain_id: string (FK)
  name: string
  description: string
  market_size: string
  competition_level: 'low' | 'medium' | 'high'
  opportunity_score: number (1-10)
  min_level: number
  order: number
  created_at: timestamp
}
```

### **Case Studies**
```typescript
interface CaseStudy {
  id: string (UUID)
  title: string
  description: string
  domain_id: string (FK)
  niche_id: string (FK)
  difficulty: 'level1' | 'level2' | 'level3' | 'level4' | 'level5' | 'advanced'
  estimated_hours: number
  learning_objectives: string[]
  competencies: string[]
  phases: Phase[]
  created_at: timestamp
}

interface Phase {
  id: string (UUID)
  case_study_id: string (FK)
  number: number (1-5)
  title: string
  description: string
  tasks: Task[]
}

interface Task {
  id: string (UUID)
  phase_id: string (FK)
  number: number
  title: string
  description: string
  time_allocation: number (minutes)
  deliverable_type: 'document' | 'presentation' | 'code' | 'report'
  resources: Resource[]
  hints: string[] (3 levels)
}
```

### **User Progress**
```typescript
interface UserProgress {
  id: string (UUID)
  user_id: string (FK)
  case_study_id: string (FK)
  current_phase: number
  current_task: number
  completed_tasks: number[]
  points_earned: number
  skill_score: number
  status: 'in_progress' | 'completed' | 'abandoned'
  started_at: timestamp
  completed_at: timestamp
}
```

### **Submissions**
```typescript
interface Submission {
  id: string (UUID)
  user_id: string (FK)
  task_id: string (FK)
  content: json
  files: string[] (storage paths)
  status: 'submitted' | 'evaluated' | 'revision_needed'
  submitted_at: timestamp
  evaluated_at: timestamp
}

interface Evaluation {
  id: string (UUID)
  submission_id: string (FK)
  score: number (1-100)
  feedback: string
  flags: string[]
  suggestions: string[]
  evaluated_by: 'ai' | 'mentor'
  evaluated_at: timestamp
}
```

### **Mentors**
```typescript
interface Mentor {
  id: string (UUID)
  auth_id: string
  name: string
  email: string
  expertise_domains: string[]
  bio: string
  availability: string[] (time slots)
  institute_id: string (FK)
  created_at: timestamp
}

interface MentorSession {
  id: string (UUID)
  mentor_id: string (FK)
  user_id: string (FK)
  scheduled_at: timestamp
  duration: number (minutes)
  status: 'scheduled' | 'completed' | 'cancelled'
  notes: string
  feedback: string
  created_at: timestamp
}
```

### **Portfolios**
```typescript
interface Portfolio {
  id: string (UUID)
  user_id: string (FK)
  slug: string (shareable link)
  title: string
  bio: string
  completed_cases: CaseArtifact[]
  skills: SkillTag[]
  certificates: Certificate[]
  is_public: boolean
  created_at: timestamp
  updated_at: timestamp
}

interface CaseArtifact {
  case_id: string
  completed_at: timestamp
  level: number
  score: number
  summary: string
  skills_gained: string[]
}

interface SkillTag {
  name: string
  level: number (1-5)
  proficiency: number (0-100)
}

interface Certificate {
  id: string
  name: string
  issued_at: timestamp
  credential_url: string
}
```

### **Startup Ideas** (Level 7+)
```typescript
interface StartupIdea {
  id: string (UUID)
  user_id: string (FK)
  source_case_id: string (FK)
  name: string
  description: string
  problem: string
  solution: string
  target_market: string
  validation_status: 'ideation' | 'validated' | 'rejected'
  team_members: string[] (user IDs)
  corporate_pilot_eligible: boolean
  created_at: timestamp
}
```

### **Notifications**
```typescript
interface Notification {
  id: string (UUID)
  user_id: string (FK)
  type: 'task_reminder' | 'inactivity' | 'milestone' | 'mentor_feedback' | 'level_up'
  title: string
  message: string
  action_url: string
  is_read: boolean
  created_at: timestamp
}
```

---

## 🛣️ Complete Route Map (New Pages)

### **Entry & Authentication**
```
/institute/signup                    Institute Account Creation
/institute/login                     Institute Login
/cohort/join                         Student Cohort Selection
/auth/signup                         Student Registration
/auth/login                          Student Login
```

### **Onboarding Flow**
```
/student/onboarding/profile          Profile Setup (Step 1.1)
/student/onboarding/assessment       Baseline Skill Assessment (Step 1.2)
/student/domain-selection            Domain Selection (Step 2)
/student/niche-selection             Nano-Niche Selection (Step 3)
/student/learning-path               Learning Path Assignment (Step 4)
```

### **Core Portal**
```
/student                             Enhanced Dashboard (Step 5)
/student/case-study/[id]             Case Study Execution (Step 6)
/student/level                       Level & Progress (Step 7)
/student/mentor                      Mentor Sessions (Step 8)
/student/portfolio                   Portfolio View (Step 9)
/student/path-decision               Career vs Startup (Step 10)
/student/startup/idea                Startup Idea (Step 11)
/student/startup/validation          Market Validation (Step 11)
/student/completion                  Completion & Outcomes (Step 14)
```

### **Mentor Portal**
```
/mentor/dashboard                    Mentor Dashboard
/mentor/sessions                     Mentor Sessions
/mentor/students                     Assigned Students
/mentor/feedback                     Feedback Interface
```

### **Institute Admin**
```
/admin/institute                     Institute Settings
/admin/cohorts                       Manage Cohorts
/admin/students                      View Student Data
/admin/outcomes                      Outcome Reports
```

---

## 🔄 14-Step User Journey

### **Step 0: Entry Point (Institute Controlled)**
- Institute admin invites students OR
- Student self-signup with institute code
- System creates account with:
  - Institute ID
  - Cohort ID
  - Access level (Free/Pro/Sponsored)

### **Step 1: Student Onboarding**
1.1: Profile Setup
- Name, university, degree, academic year
- Weekly availability (hours)
- Career intent (Job/Startup/Both)

1.2: Skill Self-Assessment
- Technical comfort rating
- Business understanding rating
- Tool familiarity rating
- AI Baseline Agent assigns Level 1-3

### **Step 2: Domain Selection (Mandatory)**
- Must select ONE primary domain
- Choose from 11 domains across 2 categories
- Other domains unlock at higher levels

### **Step 3: Nano-Niche Selection**
- Select specialized sub-niche within domain
- 5+ niches per domain
- Gives student clear professional identity

### **Step 4: Learning Path Assignment**
- System auto-assigns case study path
- Difficulty adjusted by level
- Timeline auto-generated
- Student sees: Total levels (1-10), active case, progress bar

### **Step 5: Student Dashboard (Main Screen)**
- Shows ONLY:
  - Current domain & niche
  - Level & progress
  - Active case study
  - Tasks to complete
  - Skill score
  - Upcoming mentor sessions

### **Step 6: Case Study Execution**
6.1: Introduction - Context, problem, constraints
6.2: Task Breakdown - 5 phases, tasks unlock sequentially
6.3: Learning + Doing - Material + resources + AI hints
6.4: Submission - Files, reports, decisions
6.5: Evaluation - AI scores, flags gaps, suggests improvement

### **Step 7: Level Progression**
- Level 1-2: Fundamentals
- Level 3-5: Applied execution
- Level 6-8: Advanced scenarios
- Level 9-10: Real-world readiness
- Higher levels unlock: Complex cases, mentor sessions, corporate problems

### **Step 8: Mentor Interaction (Level 4+)**
- Only when student reaches Level 4+ OR requests review
- AI prepares summary
- Mentor gives feedback
- Tasks auto-generated

### **Step 9: Portfolio Generation (Automatic)**
- Case artifacts auto-compiled
- Skills auto-tagged
- Student gets: Live portfolio page, shareable link, institute-verified badge

### **Step 10: Transition Decision (Level 7+)**
- System asks: "What do you want to do next?"
- Option 1: Career Path (job-mapped cases, interviews, certification)
- Option 2: Startup Path (idea validation, team matching, corporate pilots)

### **Step 11: Startup Path (If Selected)**
- Idea auto-created from case
- Market validation tasks
- Team formation opens
- Corporate pilot eligibility begins

### **Step 12: Notifications & Nudges**
- Task reminders
- Inactivity nudges
- Milestone celebrations
- No spam, only signals

### **Step 13: Completion & Outcomes**
- Student gets:
  - Skill readiness score
  - Portfolio
  - Certificate
  - Startup OR job pathway
- Institute gets:
  - Completion data
  - Skill reports
  - Outcome metrics

---

## 🔧 Technical Implementation Notes

### **Supabase Integration**
- Auth: `supabase.auth.signUp()`, `signIn()`
- Database: Postgre with RLS policies
- Storage: Case submissions, portfolio artifacts
- Realtime: Mentor session notifications

### **AI Agent Flows**
- Baseline Assessment: Analyzes responses → assigns level
- Learning Agent: Explains tasks, provides hints
- Evaluation Agent: Scores submissions, flags gaps
- Mentor Prep: Summarizes student progress for mentors

### **Progress Tracking**
- Automatic point system
- Skill score updates on each task
- Level calculation (cumulative points)
- Time tracking per case

### **Security**
- RLS policies for institute/cohort data isolation
- Role-based access (student/mentor/admin/institute)
- File uploads to secure storage
- Audit trails for all submissions

---

## 🎯 Key Principles

1. **Enforced Focus**: No wandering, clear pathways
2. **No Content Overload**: One case, one domain, one niche at a time
3. **Real Execution**: Students submit actual work, get real feedback
4. **Measurable Outcomes**: Skill scores, portfolios, career readiness
5. **Scalable**: Works across any institute size
6. **Production Infrastructure**: Not learning software, talent production

---

## 📈 Implementation Phases

**Phase 1**: Entry Point + Institute Setup (Week 1)
**Phase 2**: Onboarding Flow (Week 2)
**Phase 3**: Domain/Niche Selection (Week 2)
**Phase 4**: Learning Path + Dashboard (Week 3)
**Phase 5**: Level Progression + Mentor System (Week 3)
**Phase 6**: Portfolio + Startup Path (Week 4)
**Phase 7**: Notifications + Completion (Week 4)
**Phase 8**: Testing & Deployment (Week 5)

---

## 🚀 Status

**Current State**: Basic portal exists (8 pages, 3 cases)
**Target State**: Complete 14-step journey with all subsystems
**Database**: Supabase ready
**Next**: Begin Phase 1 implementation
