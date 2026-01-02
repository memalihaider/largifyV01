# Phase 1 Implementation: Entry Point & Supabase Integration

**Status**: Ready to Build | **Timeline**: Days 1-3 of Implementation

---

## 🎯 Phase 1 Goals

1. Set up Supabase client and environment
2. Create Institute signup/login flow
3. Create Cohort selection flow
4. Integrate institute/cohort data into student auth
5. Create institute admin dashboard (basic)

---

## 📋 Phase 1 Checklist

### Supabase Setup
- [ ] Create Supabase project (or use existing)
- [ ] Define RLS policies for table access
- [ ] Create storage bucket for institute logos
- [ ] Test connection with Next.js client

### Database Tables (Create in Supabase)
- [ ] `institutes` table
- [ ] `cohorts` table
- [ ] Update `users` table to include institute_id, cohort_id
- [ ] Create initial seed data (test institutes)

### Frontend - Institute Flow
- [ ] `/institute/signup` - Institute account creation
- [ ] `/institute/login` - Institute login
- [ ] `/institute/dashboard` - Institute management (basic)
- [ ] `/cohort/join` - Student cohort selection (embedded in signup)

### Frontend - Student Auth Enhancement
- [ ] Update `/auth/signup` to include institute code + cohort selection
- [ ] Update `useAuth` hook to store institute_id, cohort_id
- [ ] Update user context to include institute/cohort data

### Testing
- [ ] Test institute signup → creates institute
- [ ] Test student signup with institute code → loads cohort list
- [ ] Test student joins cohort → student gets assigned to cohort
- [ ] Verify RLS policies prevent cross-institute access

---

## 🗄️ SQL Scripts for Supabase

### Create Institutes Table
```sql
CREATE TABLE public.institutes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  logo_url TEXT,
  tier TEXT DEFAULT 'free' CHECK (tier IN ('free', 'pro', 'enterprise')),
  student_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.institutes ENABLE ROW LEVEL SECURITY;

-- Institute members can see their own institute
CREATE POLICY "Institutes are viewable by members"
  ON public.institutes FOR SELECT
  USING (auth.uid() IN (
    SELECT auth_id FROM public.users WHERE institute_id = id
  ) OR auth.uid() IN (
    SELECT auth_id FROM public.institute_admins WHERE institute_id = id
  ));
```

### Create Cohorts Table
```sql
CREATE TABLE public.cohorts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  institute_id UUID NOT NULL REFERENCES public.institutes(id),
  name TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  capacity INT,
  access_level TEXT DEFAULT 'free' CHECK (access_level IN ('free', 'pro', 'sponsored')),
  created_at TIMESTAMP DEFAULT now()
);

ALTER TABLE public.cohorts ENABLE ROW LEVEL SECURITY;

-- Cohorts are viewable by members of the institute
CREATE POLICY "Cohorts viewable by institute members"
  ON public.cohorts FOR SELECT
  USING (institute_id IN (
    SELECT institute_id FROM public.users WHERE auth_id = auth.uid()
  ));
```

### Update Users Table
```sql
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS institute_id UUID REFERENCES public.institutes(id);
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS cohort_id UUID REFERENCES public.cohorts(id);
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS access_level TEXT DEFAULT 'free';
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS university TEXT;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS degree TEXT;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS academic_year INT;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS weekly_availability INT;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS career_intent TEXT;
```

---

## 🔧 Implementation Files Needed

### New Files to Create

1. **`lib/supabase/server.ts`** - Server-side Supabase client
2. **`lib/supabase/client.ts`** - Client-side Supabase client (already exists, enhance)
3. **`lib/types/institute.ts`** - TypeScript types for Institute, Cohort
4. **`lib/actions/institute.ts`** - Server actions for institute operations
5. **`app/institute/signup/page.tsx`** - Institute signup page
6. **`app/institute/login/page.tsx`** - Institute login page
7. **`app/institute/dashboard/page.tsx`** - Institute management dashboard
8. **`app/(public)/cohort/join/page.tsx`** - Cohort selection page
9. **`components/institute/InstituteForm.tsx`** - Reusable institute form
10. **`components/cohort/CohortSelector.tsx`** - Cohort selection component

### Files to Update

1. **`app/auth/signup/page.tsx`** - Add institute code + cohort selection
2. **`lib/hooks/useAuth.ts`** - Store institute/cohort data
3. **`lib/types/database.ts`** - Add new types
4. **`.env.local`** - Ensure Supabase vars

---

## 📱 Page Flows

### Institute Signup Flow
```
/institute/signup
  ↓
Fills: name, email, code, website
  ↓
Creates institute in DB
  ↓
Redirects to: /institute/dashboard
```

### Student Signup Flow (Enhanced)
```
/auth/signup
  ↓
Enters: email, password, institute code
  ↓
Code verified → loads available cohorts
  ↓
Selects: cohort
  ↓
Fills: name, university, degree, etc.
  ↓
Creates account with institute_id, cohort_id
  ↓
Redirects to: /student/onboarding/profile
```

### Institute Admin Dashboard
```
Shows:
- Institute name, code, tier
- List of cohorts
- Student count per cohort
- Outcomes overview
```

---

## 🔐 Security Considerations

1. **Institute Code Validation**
   - Institute codes are public for signup
   - Verify code exists before creating student account

2. **RLS Policies**
   - Users can only see their own institute
   - Institute admins can see their students
   - Students cannot see other students initially

3. **Access Control**
   - Free tier: Limited features
   - Pro tier: Full case studies
   - Sponsored: Premium mentorship

---

## 🧪 Testing Strategy

1. Create test institute with code "TEST123"
2. Sign up as institute admin
3. Create test cohort
4. Sign up as student with institute code "TEST123"
5. Verify cohort list loads
6. Join cohort
7. Verify student sees correct institute/cohort
8. Test RLS policies

---

## 📝 Environment Variables Needed

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://[project-id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon-key]
SUPABASE_SERVICE_ROLE_KEY=[service-role-key]

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## 🚀 Next Steps After Phase 1

1. Phase 2: Enhanced Onboarding (Profile + Baseline Assessment)
2. Phase 3: Expand Domains/Niches to full list
3. Phase 4: Learning Path Assignment + Enhanced Dashboard
4. Phase 5: Level System + Mentor Integration
5. Phase 6: Portfolio + Startup Path
6. Phase 7: Notifications + Completion
7. Phase 8: Full Testing & Deployment

---

**Ready to begin Phase 1 implementation!**
