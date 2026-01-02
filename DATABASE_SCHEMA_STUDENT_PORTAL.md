# Database Schema Documentation

## Overview
Complete PostgreSQL schema for Largify Venture Lab platform with all three main systems:
1. **Startup Ecosystem** - Idea submission, team formation, validation, mentoring, corporate partnerships
2. **Student Portal** - Case study learning system with phase progression and AI evaluation
3. **Core Infrastructure** - Users, profiles, tasks, notifications, analytics

---

## Student Portal Tables (NEW)

### `case_studies`
**Purpose**: Store case study problems and metadata
- `id` (UUID): Primary key
- `case_id` (VARCHAR): Unique identifier (case-1, case-2, case-3)
- `title` (VARCHAR): Case title
- `description` (TEXT): Full description
- `domain` (VARCHAR): Subject domain (cybersecurity, ai, development, ecommerce, marketing)
- `level` (VARCHAR): Difficulty level (beginner, intermediate, advanced)
- `difficulty` (INTEGER): 1-10 difficulty rating
- `estimated_hours` (INTEGER): Total hours to complete
- `problem_statement` (TEXT): Problem to solve
- `industry_context` (TEXT): Industry background
- `constraints` (JSONB): List of constraints
- `success_criteria` (JSONB): Success criteria list
- `business_impact` (TEXT): Business impact description
- `is_active` (BOOLEAN): Whether case is available
- `created_at`, `updated_at` (TIMESTAMP)

**Example Record**:
```json
{
  "case_id": "case-1",
  "title": "Securing an SME E-commerce Platform",
  "domain": "cybersecurity",
  "level": "beginner",
  "difficulty": 3,
  "estimated_hours": 25
}
```

### `case_study_phases`
**Purpose**: Organize case studies into learning phases
- `id` (UUID): Primary key
- `case_study_id` (UUID): Foreign key to case_studies
- `phase_number` (INTEGER): 1-4
- `title` (VARCHAR): Phase title (Understanding, Analysis, Execution, Business Impact)
- `description` (TEXT): Phase overview
- `learning_objectives` (JSONB): Array of learning objectives
- `estimated_hours` (INTEGER): Hours for this phase
- `created_at` (TIMESTAMP)
- **UNIQUE**: (case_study_id, phase_number)

**Relationship**: case_studies (1) → case_study_phases (4)

### `case_study_tasks`
**Purpose**: Individual tasks within case study phases
- `id` (UUID): Primary key
- `task_id` (VARCHAR): Unique identifier (e.g., "task-1-1")
- `case_study_id` (UUID): Foreign key to case_studies
- `phase_id` (UUID): Foreign key to case_study_phases
- `phase_number` (INTEGER): Which phase (1-4)
- `title` (VARCHAR): Task title
- `description` (TEXT): Task description
- `type` (VARCHAR): learning, exercise, submission, discussion, group-work
- `objectives` (JSONB): Learning objectives for this task
- `expected_output` (TEXT): What student should deliver
- `estimated_minutes` (INTEGER): Time estimate
- `hints` (JSONB): {basic: "...", intermediate: "...", advanced: "..."}
- `resources` (JSONB): [{type, title, url}, ...]
- `created_at`, `updated_at` (TIMESTAMP)

**Relationship**: case_study_phases (1) → case_study_tasks (1-2)

### `student_onboarding`
**Purpose**: Track student onboarding progress
- `id` (UUID): Primary key
- `user_id` (UUID): Foreign key to users (UNIQUE)
- `background` (VARCHAR): Student background
- `availability_hours_per_week` (INTEGER): Weekly availability
- `learning_goals` (TEXT): Student's goals
- `preferred_domain` (VARCHAR): Domain preference
- `nano_niche` (VARCHAR): Selected nano-niche
- `completed_at` (TIMESTAMP): When onboarding completed
- `created_at`, `updated_at` (TIMESTAMP)

### `student_skill_assessment`
**Purpose**: Store baseline skill assessment results
- `id` (UUID): Primary key
- `user_id` (UUID): Foreign key to users
- `assessment_data` (JSONB): Quiz responses and results
- `baseline_score` (INTEGER): Overall score
- `assessment_date` (TIMESTAMP): When taken
- `created_at` (TIMESTAMP)

### `student_case_progress`
**Purpose**: Track student progress through each case study
- `id` (UUID): Primary key
- `user_id` (UUID): Foreign key to users
- `case_study_id` (UUID): Foreign key to case_studies
- `status` (VARCHAR): not_started, in_progress, completed, paused
- `progress_percentage` (INTEGER): 0-100
- `tasks_completed` (INTEGER): Number completed
- `phases_unlocked` (INTEGER): How many phases accessible
- `current_phase` (INTEGER): Current phase (1-4)
- `started_at` (TIMESTAMP): When started
- `completed_at` (TIMESTAMP): When finished
- `created_at`, `updated_at` (TIMESTAMP)
- **UNIQUE**: (user_id, case_study_id)

**Example Query**:
```sql
SELECT * FROM student_case_progress 
WHERE user_id = '...' AND status = 'in_progress'
```

### `case_study_submissions`
**Purpose**: Store student task submissions and AI feedback
- `id` (UUID): Primary key
- `submission_id` (VARCHAR): Unique identifier
- `user_id` (UUID): Student who submitted
- `task_id` (UUID): Task being submitted
- `case_study_id` (UUID): Which case
- `submission_text` (TEXT): Written response
- `submission_links` (JSONB): URLs to external work
- `submission_files` (JSONB): File uploads
- `status` (VARCHAR): submitted, evaluating, completed, rejected
- `ai_score` (INTEGER): 0-100 score
- `ai_feedback` (JSONB): Structured feedback
- `strengths` (JSONB): Array of strengths
- `improvements` (JSONB): Array of improvements
- `next_steps` (JSONB): Array of next steps
- `evaluated_at` (TIMESTAMP): When AI evaluated
- `created_at`, `updated_at` (TIMESTAMP)

**Example Feedback**:
```json
{
  "ai_score": 87,
  "strengths": ["Clear problem analysis", "Good solution approach"],
  "improvements": ["Add more scalability consideration"],
  "next_steps": ["Review design patterns", "Test edge cases"]
}
```

### `case_task_states`
**Purpose**: Track state of each task for each student
- `id` (UUID): Primary key
- `user_id` (UUID): Student
- `task_id` (UUID): Task
- `status` (VARCHAR): locked, active, in_progress, submitted, completed
- `score` (INTEGER): Task score if completed
- `feedback` (TEXT): Feedback text
- `submission_id` (UUID): Reference to their submission
- `created_at`, `updated_at` (TIMESTAMP)
- **UNIQUE**: (user_id, task_id)

**State Machine**:
```
locked → active → in_progress → submitted → completed
                                          ↓
                                      (AI evaluates)
```

### `student_portfolios`
**Purpose**: Generate and store student portfolios
- `id` (UUID): Primary key
- `user_id` (UUID): Student (UNIQUE)
- `portfolio_data` (JSONB): Completed cases, achievements, submissions
- `completed_cases` (JSONB): Array of completed case IDs and results
- `generated_at` (TIMESTAMP): When portfolio generated
- `is_public` (BOOLEAN): Public visibility
- `public_url` (VARCHAR): Shareable link
- `created_at`, `updated_at` (TIMESTAMP)

### `student_case_to_startup`
**Purpose**: Track conversion from case study to real startup
- `id` (UUID): Primary key
- `user_id` (UUID): Student
- `case_study_id` (UUID): Which case
- `startup_id` (UUID): Converted startup (if exists)
- `conversion_date` (TIMESTAMP): When converted
- `conversion_data` (JSONB): Conversion metadata
- `created_at`, `updated_at` (TIMESTAMP)
- **UNIQUE**: (user_id, case_study_id)

---

## Indexes for Case Study Tables

```sql
CREATE INDEX idx_case_studies_domain ON case_studies(domain);
CREATE INDEX idx_case_studies_level ON case_studies(level);
CREATE INDEX idx_student_case_progress_user_id ON student_case_progress(user_id);
CREATE INDEX idx_student_case_progress_status ON student_case_progress(status);
CREATE INDEX idx_case_study_submissions_user_id ON case_study_submissions(user_id);
CREATE INDEX idx_case_study_submissions_status ON case_study_submissions(status);
CREATE INDEX idx_case_task_states_user_id ON case_task_states(user_id);
CREATE INDEX idx_case_task_states_status ON case_task_states(status);
```

---

## Views for Student Portal Analytics

### `student_case_summary`
**Purpose**: Overview of student progress on each case

**Columns**:
- `user_id`: Student
- `case_id`: Case identifier
- `title`: Case title
- `domain`: Subject domain
- `level`: Difficulty
- `status`: Progress status
- `progress_percentage`: 0-100
- `tasks_completed`: Count
- `current_phase`: 1-4
- `submission_count`: Total submissions
- `average_score`: Average AI score
- `started_at`: When started
- `completed_at`: When finished

**Query Example**:
```sql
SELECT * FROM student_case_summary 
WHERE user_id = '...' 
ORDER BY started_at DESC
```

### `student_progress_dashboard`
**Purpose**: Overall student progress dashboard

**Columns**:
- `user_id`: Student
- `first_name`, `last_name`: Student name
- `total_cases_started`: How many cases attempted
- `cases_completed`: How many completed
- `average_progress`: Average progress across all cases
- `total_submissions`: Total submissions made
- `average_submission_score`: Average score
- `last_activity`: When last active

### `case_study_performance`
**Purpose**: Analytics on case study usage and performance

**Columns**:
- `case_id`: Case identifier
- `title`: Case title
- `domain`: Subject
- `level`: Difficulty
- `students_started`: Number started
- `students_completed`: Number completed
- `completion_rate`: Percentage
- `average_progress`: Average completion %
- `average_submission_score`: Average score
- `total_submissions`: Total submissions across all students

---

## Relationships & Constraints

### Case Study Hierarchy
```
case_studies (1)
  ├── case_study_phases (4)
  │     └── case_study_tasks (8)
  │           └── case_study_submissions (many)
  │           └── case_task_states (1 per student)
  ├── student_case_progress (many)
  └── student_case_to_startup (many)
```

### Student Progress Flow
```
user (student)
  ├── student_onboarding (1)
  ├── student_skill_assessment (1)
  ├── student_case_progress (many - 1 per case)
  │     ├── case_study_submissions (many)
  │     └── case_task_states (many)
  ├── student_portfolios (1)
  └── student_case_to_startup (many)
```

---

## Data Types Used

- **UUID**: Unique identifiers (standard for all primary keys)
- **VARCHAR**: Short text fields (titles, names, status values)
- **TEXT**: Long text (descriptions, feedback, transcripts)
- **INTEGER**: Numbers (scores, hours, counts)
- **DECIMAL(15,2)**: Money values
- **DATE**: Dates without time
- **TIMESTAMP**: Dates with time (default: CURRENT_TIMESTAMP)
- **BOOLEAN**: True/False flags
- **JSONB**: Structured data as JSON (indexed, allows queries)

---

## JSONB Column Usage

### `constraints` in case_studies
```json
[
  "Limited budget of $50k",
  "Must use existing infrastructure",
  "6-month implementation window"
]
```

### `hints` in case_study_tasks
```json
{
  "basic": "Think about what information needs protection",
  "intermediate": "Consider encryption and access control",
  "advanced": "Implement SSL/TLS and role-based access"
}
```

### `resources` in case_study_tasks
```json
[
  {
    "type": "video",
    "title": "Security Best Practices",
    "url": "https://..."
  },
  {
    "type": "article",
    "title": "OWASP Top 10",
    "url": "https://..."
  }
]
```

### `ai_feedback` in case_study_submissions
```json
{
  "strengths": [
    "Clear problem analysis",
    "Comprehensive solution approach"
  ],
  "improvements": [
    "Consider edge cases",
    "Add performance metrics"
  ],
  "next_steps": [
    "Review design patterns",
    "Test with real users"
  ]
}
```

---

## Row Level Security (RLS)

### Students can only see:
- Their own onboarding data
- Their own case progress
- Their own submissions
- Their own task states
- Their own portfolio
- All case studies (public)

### Policies:
```sql
-- View own data
CREATE POLICY "Users can view own case progress" ON student_case_progress
  FOR SELECT USING (user_id::text = auth.uid()::text);

CREATE POLICY "Users can view own submissions" ON case_study_submissions
  FOR SELECT USING (user_id::text = auth.uid()::text);
```

---

## Sample Queries

### Get student's current progress on all cases
```sql
SELECT cs.title, scp.progress_percentage, scp.status
FROM student_case_progress scp
JOIN case_studies cs ON scp.case_study_id = cs.id
WHERE scp.user_id = $1
ORDER BY scp.updated_at DESC
```

### Get all submissions for a student on a specific task
```sql
SELECT ss.*, cst.title
FROM case_study_submissions ss
JOIN case_study_tasks cst ON ss.task_id = cst.id
WHERE ss.user_id = $1 AND ss.task_id = $2
ORDER BY ss.created_at DESC
```

### Get case study performance analytics
```sql
SELECT * FROM case_study_performance
WHERE domain = 'cybersecurity'
ORDER BY completion_rate DESC
```

### Find students who need intervention (low progress)
```sql
SELECT * FROM student_progress_dashboard
WHERE average_progress < 20 AND last_activity < NOW() - INTERVAL '7 days'
```

---

## Migration Path

### From Mock Data to Database
1. **Import case studies**: Create records in `case_studies` table
2. **Import phases**: Create phase records in `case_study_phases`
3. **Import tasks**: Create task records in `case_study_tasks`
4. **Track student progress**: Populate `student_case_progress` as students progress
5. **Store submissions**: Save all submissions to `case_study_submissions`
6. **Update task states**: Maintain `case_task_states` as assignments progress

### Example Migration Script
```sql
-- Insert case study
INSERT INTO case_studies (case_id, title, domain, level, difficulty, estimated_hours, ...)
VALUES ('case-1', 'Securing...', 'cybersecurity', 'beginner', 3, 25, ...);

-- Insert phases
INSERT INTO case_study_phases (case_study_id, phase_number, title, learning_objectives, ...)
SELECT id, 1, 'Understanding', '["Learn threat models", ...]'::jsonb
FROM case_studies WHERE case_id = 'case-1';

-- Insert tasks
INSERT INTO case_study_tasks (case_study_id, phase_id, task_id, title, type, hints, resources, ...)
VALUES (...)
```

---

## Performance Optimization

### Indexes Created
- Domain and level filtering on case studies
- User ID lookups for progress tracking
- Status filtering for active cases
- Submission status filtering

### Query Optimization Tips
1. Use indexes for WHERE clauses (user_id, status, domain)
2. Filter on created_at when fetching recent data
3. Use JSONB operators efficiently (→, ->>)
4. Paginate large result sets
5. Cache view results if heavily queried

---

## Integration with App

### Current Mock Data Structure
```typescript
// From /lib/mock-data/student-portal.ts
interface CaseStudy {
  id: string;
  title: string;
  domain: string;
  level: string;
  phases: CaseStudyPhase[];
  tasks: CaseStudyTask[];
}
```

### Maps to Database as:
```
CaseStudy → case_studies table
CaseStudyPhase → case_study_phases table
CaseStudyTask → case_study_tasks table
```

### Migration Sequence
1. Keep mock data for development/testing
2. When database ready, query database instead of mock data
3. Switch API endpoints to use case_studies table instead of mock array
4. Migrate student progress from localStorage to student_case_progress table

---

## Future Enhancements

- [ ] AI evaluation service integration (external API calls)
- [ ] Portfolio PDF generation (stored in storage service)
- [ ] Startup conversion data enrichment
- [ ] Advanced analytics dashboards
- [ ] Student cohort tracking
- [ ] Peer collaboration features
- [ ] Mentor assignment automation
- [ ] Automated email notifications

---

**Last Updated**: 2024
**Status**: Complete and Ready for Use
**Total Tables Added**: 10 (case studies system)
**Total Views Added**: 3 (analytics)
