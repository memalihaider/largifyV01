# Largify Venture Lab - Deployment & Setup Guide

## Quick Deployment to Production

### 1. Deploy to Vercel (Recommended)

**Easiest option for Next.js apps:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Connect your GitHub repo for automatic deployments
# Push to main branch = automatic production deploy
```

### 2. Environment Variables on Vercel

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
OPENAI_API_KEY=sk-...
NEXT_PUBLIC_APP_URL=https://largify-venture-lab.vercel.app
```

### 3. Supabase Setup

#### Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details
4. Copy API keys to `.env.local`

#### Create Database Tables

In Supabase SQL Editor, run:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  role VARCHAR(20) NOT NULL DEFAULT 'student',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  skills TEXT[],
  linkedin_url TEXT,
  university TEXT,
  department TEXT,
  year_of_study INTEGER,
  company_name TEXT,
  company_position TEXT,
  expertise_areas TEXT[],
  is_available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ideas table
CREATE TABLE public.ideas (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  problem_statement TEXT,
  proposed_solution TEXT,
  target_market TEXT,
  industry TEXT,
  status VARCHAR(20) DEFAULT 'draft',
  ai_score INTEGER,
  ai_feedback JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Startups table
CREATE TABLE public.startups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  idea_id UUID REFERENCES ideas(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  tagline TEXT,
  description TEXT,
  stage VARCHAR(20) DEFAULT 'idea',
  readiness_score INTEGER DEFAULT 0,
  health_score INTEGER DEFAULT 0,
  logo_url TEXT,
  website_url TEXT,
  pitch_deck_url TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Teams table
CREATE TABLE public.teams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  name TEXT,
  description TEXT,
  compatibility_score INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Team Members table
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  team_id UUID NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role TEXT,
  is_lead BOOLEAN DEFAULT FALSE,
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Validations table
CREATE TABLE public.validations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  type VARCHAR(30) DEFAULT 'interview',
  status VARCHAR(20) DEFAULT 'pending',
  data JSONB,
  ai_analysis JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Interviews table
CREATE TABLE public.interviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  validation_id UUID NOT NULL REFERENCES validations(id) ON DELETE CASCADE,
  interviewee_name TEXT,
  interviewee_role TEXT,
  transcript TEXT,
  audio_url TEXT,
  key_takeaways TEXT[],
  sentiment_score FLOAT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Mentor Sessions table
CREATE TABLE public.mentor_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  mentor_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  scheduled_at TIMESTAMP,
  duration_minutes INTEGER DEFAULT 60,
  status VARCHAR(20) DEFAULT 'scheduled',
  ai_prep_summary TEXT,
  mentor_notes TEXT,
  action_items TEXT[],
  meeting_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tasks table
CREATE TABLE public.tasks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'todo',
  priority VARCHAR(20) DEFAULT 'medium',
  assigned_to UUID REFERENCES users(id),
  due_date DATE,
  completed_at TIMESTAMP,
  source VARCHAR(20) DEFAULT 'manual',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Corporate Problems table
CREATE TABLE public.corporate_problems (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  corporate_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  industry TEXT,
  budget_range TEXT,
  timeline TEXT,
  requirements TEXT[],
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Startup Matches table
CREATE TABLE public.startup_matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  problem_id UUID NOT NULL REFERENCES corporate_problems(id) ON DELETE CASCADE,
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  match_score INTEGER,
  match_reasons TEXT[],
  status VARCHAR(20) DEFAULT 'suggested',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Pilot Projects table
CREATE TABLE public.pilot_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  problem_id UUID NOT NULL REFERENCES corporate_problems(id) ON DELETE CASCADE,
  startup_id UUID NOT NULL REFERENCES startups(id) ON DELETE CASCADE,
  corporate_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  scope TEXT,
  status VARCHAR(20) DEFAULT 'proposed',
  start_date DATE,
  end_date DATE,
  budget INTEGER,
  deliverables TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS (Row-Level Security)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ideas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.startups ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mentor_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.corporate_problems ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pilot_projects ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Ideas (users can see their own)
CREATE POLICY "Users can view own ideas"
  ON public.ideas FOR SELECT
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert own ideas"
  ON public.ideas FOR INSERT
  WITH CHECK (auth.uid()::text = user_id::text);

-- RLS Policies for Startups (team members can view)
CREATE POLICY "Team members can view startup"
  ON public.startups FOR SELECT
  USING (
    id IN (
      SELECT startup_id FROM team_members 
      WHERE user_id = auth.uid()
    )
  );

-- RLS Policies for Mentor Sessions (mentor and startup team can view)
CREATE POLICY "Mentor can view assigned sessions"
  ON public.mentor_sessions FOR SELECT
  USING (mentor_id = auth.uid());

-- Create indexes for performance
CREATE INDEX idx_ideas_user_id ON public.ideas(user_id);
CREATE INDEX idx_startups_idea_id ON public.startups(idea_id);
CREATE INDEX idx_teams_startup_id ON public.teams(startup_id);
CREATE INDEX idx_mentor_sessions_startup_id ON public.mentor_sessions(startup_id);
CREATE INDEX idx_mentor_sessions_mentor_id ON public.mentor_sessions(mentor_id);
CREATE INDEX idx_corporate_problems_corporate_id ON public.corporate_problems(corporate_id);
CREATE INDEX idx_pilot_projects_startup_id ON public.pilot_projects(startup_id);
```

### 4. Configure Authentication

In Supabase Dashboard → Authentication:

1. Go to Providers → Email
2. Enable Email provider
3. Configure email settings

In `Authentication` → `URL Configuration`:
- Site URL: `https://largify-venture-lab.vercel.app`
- Redirect URLs:
  - `https://largify-venture-lab.vercel.app/auth/callback`
  - `http://localhost:3000/auth/callback`

### 5. Local Development

```bash
# Clone the repository
git clone <your-repo>
cd largifylab

# Install dependencies
npm install

# Create .env.local file
cat > .env.local << EOF
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
OPENAI_API_KEY=your_openai_key
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF

# Run dev server
npm run dev
```

### 6. Test the Application

**Student Workflow:**
1. Register as student
2. Submit an idea
3. View AI evaluation
4. Create a team
5. Track readiness score

**Mentor Workflow:**
1. Sign in as mentor
2. View assigned startups
3. See AI-prepared briefing
4. Schedule session
5. Log notes (auto-converts to tasks)

**Admin Workflow:**
1. Sign in as admin
2. View cohort analytics
3. Monitor startup health
4. Export reports

**Corporate Workflow:**
1. Register as corporate
2. Post problem statement
3. View AI-matched startups
4. Create pilot project

## Production Deployment Checklist

- [ ] Supabase project created and database seeded
- [ ] Environment variables configured in Vercel
- [ ] GitHub repository connected to Vercel
- [ ] Custom domain configured (optional)
- [ ] Email notifications configured
- [ ] Backup and disaster recovery plan
- [ ] Monitoring and analytics setup (Vercel Analytics)
- [ ] Security audit completed
- [ ] SSL/HTTPS verified
- [ ] Load testing completed
- [ ] User acceptance testing passed
- [ ] Documentation updated

## Monitoring & Maintenance

### Vercel Monitoring
- Visit [vercel.com/dashboard](https://vercel.com/dashboard)
- Monitor build times and errors
- Check analytics and performance metrics

### Supabase Monitoring
- Visit your Supabase dashboard
- Monitor database performance
- Check storage usage
- Review authentication logs

### Setup Alerts
1. Configure GitHub branch protection rules
2. Setup automated backups in Supabase
3. Enable monitoring emails in Vercel
4. Create status page (optional)

## Scaling Considerations

### If User Growth Increases:

1. **Database**: Supabase auto-scales
2. **Storage**: Supabase Storage is unlimited
3. **Serverless Functions**: Vercel auto-scales
4. **Real-time**: May need to upgrade Supabase plan
5. **AI API Costs**: Monitor OpenAI API usage

### Multi-region Deployment:

```bash
# Create Supabase projects in different regions
# Update database with replication
# Configure Vercel Edge Functions for global distribution
```

## Troubleshooting

### Build Fails on Vercel
```bash
# Check types locally
npm run typecheck

# Rebuild
npm run build
```

### Database Connection Issues
```bash
# Verify .env.local has correct keys
# Check Supabase project status
# Verify IP whitelist (if applicable)
```

### AI Agent Errors
```bash
# Verify OpenAI API key is valid
# Check OpenAI account has credits
# Monitor API usage in OpenAI dashboard
```

## Support & Help

- **Docs**: [docs.largify.com](https://docs.largify.com)
- **Email**: support@largify.com
- **GitHub Issues**: [github.com/largify/venture-lab/issues](https://github.com/largify/venture-lab/issues)

---

**Ready to launch? Deploy to Vercel now!** 🚀
