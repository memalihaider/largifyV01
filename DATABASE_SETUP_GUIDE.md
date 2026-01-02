# Database Setup & Migration Guide

## Quick Start

### 1. Initialize Database Schema
```bash
# Using psql (PostgreSQL command line)
psql -U postgres -d largify_lab -f lib/schema.sql

# Or if using Supabase (recommended)
# Upload schema.sql via Supabase dashboard → SQL Editor
```

### 2. Verify Tables Created
```sql
-- Check case study tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' AND table_name LIKE 'case_%'
ORDER BY table_name;

-- Check student tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public' AND table_name LIKE 'student_%'
ORDER BY table_name;
```

Expected output: 10 case study related tables

### 3. Seed Case Study Data
```bash
# Option 1: Use migration script (recommended)
npm run db:seed-cases

# Option 2: Manual SQL insert
psql -U postgres -d largify_lab -f scripts/seed-case-studies.sql
```

---

## Database Setup Options

### Option A: PostgreSQL Local (Development)

#### 1. Install PostgreSQL
```bash
# macOS
brew install postgresql

# Ubuntu/Debian
sudo apt-get install postgresql postgresql-contrib

# Windows
# Download from https://www.postgresql.org/download/windows/
```

#### 2. Create Database
```bash
createdb largify_lab
createuser largify_user -P  # Will prompt for password
psql -U postgres -d largify_lab -c "GRANT ALL PRIVILEGES ON DATABASE largify_lab TO largify_user;"
```

#### 3. Load Schema
```bash
psql -U largify_user -d largify_lab -f lib/schema.sql
```

#### 4. Connect from App
```typescript
// .env.local
DATABASE_URL=postgresql://largify_user:password@localhost:5432/largify_lab
```

---

### Option B: Supabase (Recommended - Free Tier)

#### 1. Create Supabase Project
- Go to https://supabase.com
- Sign up / Log in
- Click "New Project"
- Choose region, set password
- Wait for project to initialize

#### 2. Get Connection String
- Go to Project Settings → Database
- Copy "Connection String"
- Replace `[YOUR-PASSWORD]` with actual password

#### 3. Run Schema
- Open SQL Editor in Supabase
- Copy entire `lib/schema.sql`
- Paste and run
- Verify all tables created

#### 4. Set Environment Variable
```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
DATABASE_URL=postgresql://postgres:password@db.your-project.supabase.co:5432/postgres
```

#### 5. Seed Data
```bash
npm run db:seed-cases
```

---

### Option C: Railway (Affordable Hosting)

#### 1. Create Account
- Go to https://railway.app
- Connect GitHub account
- Create new project

#### 2. Add PostgreSQL
- Click "Add Service" → PostgreSQL
- Automatically sets up database

#### 3. Get Credentials
- Click PostgreSQL service
- Go to "Data" tab
- Copy connection string

#### 4. Load Schema
```bash
# Using psql with connection string
psql "postgresql://..." < lib/schema.sql
```

---

## Seed Data Migration from Mock Data

### Step 1: Create Migration Script
Create `scripts/seed-case-studies.sql`:

```sql
-- Insert Case Study 1: Cybersecurity
INSERT INTO case_studies (
  case_id, title, description, domain, level, difficulty, 
  estimated_hours, problem_statement, industry_context, 
  constraints, success_criteria, business_impact, is_active
) VALUES (
  'case-1',
  'Securing an SME E-commerce Platform',
  'Build a comprehensive security solution for an e-commerce platform',
  'cybersecurity',
  'beginner',
  3,
  25,
  'A growing e-commerce company faces increasing security threats including DDoS attacks, data breaches, and payment fraud.',
  'The company processes 1000+ orders daily with customer data including credit card information.',
  '[
    "Limited budget of $50,000",
    "Must integrate with existing infrastructure",
    "6-month implementation window",
    "Cannot require customer workflow changes"
  ]'::jsonb,
  '[
    "Implement SSL/TLS encryption",
    "Deploy DDoS protection",
    "Set up fraud detection system",
    "Achieve SOC 2 compliance"
  ]'::jsonb,
  'Implementing security measures reduces potential breach costs by $2M+ and increases customer trust by 45%.',
  true
);

-- Insert Phases for Case 1
INSERT INTO case_study_phases (case_study_id, phase_number, title, description, learning_objectives, estimated_hours)
SELECT id, 1, 'Understanding', 'Learn security fundamentals and threat landscape',
  '["Learn OWASP Top 10", "Understand threat modeling", "Know encryption basics"]'::jsonb, 6
FROM case_studies WHERE case_id = 'case-1';

INSERT INTO case_study_phases (case_study_id, phase_number, title, description, learning_objectives, estimated_hours)
SELECT id, 2, 'Analysis', 'Deep dive into e-commerce security architecture',
  '["Design security architecture", "Analyze existing vulnerabilities", "Create mitigation plan"]'::jsonb, 6
FROM case_studies WHERE case_id = 'case-1';

INSERT INTO case_study_phases (case_study_id, phase_number, title, description, learning_objectives, estimated_hours)
SELECT id, 3, 'Execution', 'Implement security measures',
  '["Implement SSL/TLS", "Deploy DDoS protection", "Build fraud detection"]'::jsonb, 8
FROM case_studies WHERE case_id = 'case-1';

INSERT INTO case_study_phases (case_study_id, phase_number, title, description, learning_objectives, estimated_hours)
SELECT id, 4, 'Business Impact', 'Present business value and compliance',
  '["Calculate ROI", "Document compliance", "Create implementation roadmap"]'::jsonb, 5
FROM case_studies WHERE case_id = 'case-1';

-- Insert Tasks for Case 1, Phase 1
INSERT INTO case_study_tasks (
  task_id, case_study_id, phase_id, phase_number, title, description, type,
  objectives, expected_output, estimated_minutes,
  hints, resources
)
SELECT 'task-1-1', cs.id, csp.id, 1,
  'Define Security Threats',
  'Identify and categorize the main security threats facing the e-commerce platform',
  'learning',
  '["Understand threat types", "Learn about OWASP Top 10", "Identify platform-specific risks"]'::jsonb,
  'Document of 5+ identified threats with descriptions and impact assessment',
  45,
  '{
    "basic": "Think about what information the e-commerce site handles and who might want to access it",
    "intermediate": "Review the OWASP Top 10 and map common threats to e-commerce",
    "advanced": "Create a threat model using attack trees - consider how attackers might target payment processing, customer data, and website availability"
  }'::jsonb,
  '[
    {"type": "video", "title": "OWASP Top 10 Explained", "url": "https://owasp.org"},
    {"type": "article", "title": "E-commerce Security Best Practices", "url": "https://..."},
    {"type": "tool", "title": "Threat Modeling Tool", "url": "https://..."}
  ]'::jsonb
FROM case_studies cs
JOIN case_study_phases csp ON cs.id = csp.case_study_id
WHERE cs.case_id = 'case-1' AND csp.phase_number = 1;

-- ... Continue for remaining tasks ...
```

### Step 2: Run Migration
```bash
psql -U largify_user -d largify_lab -f scripts/seed-case-studies.sql
```

### Step 3: Verify Data
```sql
SELECT COUNT(*) as case_count FROM case_studies;
SELECT COUNT(*) as phase_count FROM case_study_phases;
SELECT COUNT(*) as task_count FROM case_study_tasks;
```

---

## API Integration

### 1. Create Database Service Layer
Create `lib/db/cases.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function getCaseStudies() {
  const { data, error } = await supabase
    .from('case_studies')
    .select('*')
    .eq('is_active', true);
  
  if (error) throw error;
  return data;
}

export async function getCaseStudyById(caseId: string) {
  const { data, error } = await supabase
    .from('case_studies')
    .select(`
      *,
      phases:case_study_phases(
        *,
        tasks:case_study_tasks(*)
      )
    `)
    .eq('case_id', caseId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function getStudentProgress(userId: string, caseStudyId: string) {
  const { data, error } = await supabase
    .from('student_case_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('case_study_id', caseStudyId)
    .single();
  
  if (error) throw error;
  return data;
}

export async function submitTaskResponse(
  userId: string,
  taskId: string,
  submission: string
) {
  const { data, error } = await supabase
    .from('case_study_submissions')
    .insert({
      user_id: userId,
      task_id: taskId,
      submission_text: submission,
      status: 'submitted',
      ai_score: Math.floor(Math.random() * 20) + 75  // Temp: replace with real AI
    })
    .select()
    .single();
  
  if (error) throw error;
  return data;
}
```

### 2. Update App to Use Database
```typescript
// In case-study/[id]/page.tsx
import { getCaseStudyById } from '@/lib/db/cases';

export default async function CaseStudyPage() {
  // Instead of mock data:
  // const caseStudy = getCaseStudyById(caseId);
  
  // Use database:
  const caseStudy = await getCaseStudyById(caseId);
  
  // Rest of component remains the same
}
```

---

## Monitoring & Maintenance

### Check Database Size
```sql
SELECT 
  schemaname,
  tablename,
  pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;
```

### Monitor Active Connections
```sql
SELECT datname, usename, count(*)
FROM pg_stat_activity
GROUP BY datname, usename;
```

### View Recent Submissions
```sql
SELECT u.email, cst.title, ss.ai_score, ss.created_at
FROM case_study_submissions ss
JOIN users u ON ss.user_id = u.id
JOIN case_study_tasks cst ON ss.task_id = cst.id
ORDER BY ss.created_at DESC
LIMIT 20;
```

---

## Backup & Recovery

### Automated Backups (Supabase)
- Supabase automatically backs up daily (free tier)
- 7-day retention period
- Access via Dashboard → Backups

### Manual Backup
```bash
# PostgreSQL dump
pg_dump -U largify_user -d largify_lab > backup_$(date +%Y%m%d).sql

# Restore from backup
psql -U largify_user -d largify_lab < backup_20231215.sql
```

---

## Troubleshooting

### Connection Issues
```bash
# Test connection
psql -U largify_user -d largify_lab -c "SELECT 1;"

# Check PostgreSQL service
sudo systemctl status postgresql  # Linux
brew services list | grep postgres  # macOS
```

### Missing Tables
```sql
-- Check what tables exist
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public'
ORDER BY table_name;

-- Re-run schema if missing:
-- psql -U largify_user -d largify_lab -f lib/schema.sql
```

### Performance Issues
```sql
-- Check slow queries
SELECT query, mean_exec_time FROM pg_stat_statements
ORDER BY mean_exec_time DESC LIMIT 10;

-- Analyze query plan
EXPLAIN ANALYZE SELECT * FROM case_study_submissions WHERE user_id = '...';
```

---

## Next Steps

1. ✅ Schema designed and documented
2. ⏳ Run `schema.sql` on your database
3. ⏳ Create seed data migration script
4. ⏳ Run seed data on database
5. ⏳ Update API layer to query database instead of mock data
6. ⏳ Connect frontend to database queries
7. ⏳ Test end-to-end with real database
8. ⏳ Deploy to production

---

**Setup Time**: ~15-30 minutes
**Status**: Ready to implement
**Estimated Effort**: Low (schema complete, straightforward migration)
