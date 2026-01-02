# Largify Venture Lab - Complete Setup & Development Guide

## 🚀 Quick Start (With Mock Data)

This application is fully functional with mock data - **no database setup required** for development and testing.

### 1. Install Dependencies
```bash
cd /Users/macbookpro/Desktop/largifylab
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000 in your browser.

### 3. Access All Dashboards with Mock Data

#### Student Portal
- **URL**: http://localhost:3000/dashboard/student
- **Data**: 4 mock ideas, 3 active startups, 8 completed tasks
- **Features**:
  - View submitted ideas with AI scores
  - Track startup health and readiness
  - Manage team members
  - Monitor validation progress
  - Task management with priority levels

#### Mentor Portal
- **URL**: http://localhost:3000/dashboard/mentor
- **Data**: 4 assigned startups, 8 sessions this month, 120 mentoring hours
- **Features**:
  - View upcoming and completed sessions
  - AI-generated pre-session briefings
  - Track mentee progress and health scores
  - Session notes and feedback system
  - Mentor profile with expertise areas

#### Admin Dashboard
- **URL**: http://localhost:3000/dashboard/admin
- **Data**: 45 students, 28 ideas, 8 validated startups, 3 pilot-ready
- **Features**:
  - Cohort analytics and metrics
  - Idea pipeline with distribution
  - Startup stage tracking
  - Corporate problem matching
  - Pilot project monitoring
  - Reports generation

#### Corporate Portal
- **URL**: http://localhost:3000/dashboard/corporate
- **Data**: 3 problem statements, 5 active matches, 1 active pilot
- **Features**:
  - Post innovation challenges
  - Browse AI-matched startups
  - Manage pilot projects
  - Track success metrics
  - Budget and timeline management

### 4. Public Website Pages

All pages are fully functional with content:

| Page | URL | Content |
|------|-----|---------|
| Home | http://localhost:3000 | Landing with 6 AI agents, pricing, testimonials |
| About | http://localhost:3000/about | Company story, team, values, milestones |
| How It Works | http://localhost:3000/how-it-works | 3 user paths, timeline, AI advantages |
| Contact | http://localhost:3000/contact | Contact form, locations, FAQs, map |
| Login | http://localhost:3000/auth/login | Demo credentials provided |
| Register | http://localhost:3000/auth/register | 4-role selection (Student, Mentor, Admin, Corporate) |

---

## 📊 Mock Data Structure

### Core Entities

**mockUsers** (15 total)
- 4 Students (Ahmed, Fatima, Ali, Sara)
- 3 Mentors (Dr. Pakistan, Sana, Hassan)
- 2 Corporate (Zong, HBL)
- 1 Admin

**mockIdeas** (4 ideas)
- AI Classroom Analytics - Score 82
- Digital Banking Platform - Score 88
- Precision Farming IoT - Score 75
- Supply Chain Tracking - Draft (not evaluated)

**mockStartups** (3 startups)
- SmartClass AI - Validation stage, 72% readiness, 78% health
- MobiFinance - Validation stage, 85% readiness, 82% health
- AgroBridge - Building stage, 68% readiness, 65% health

**mockTeams** (3 teams)
- Team 1: 3 members, 87% compatibility
- Team 2: 4 members, 92% compatibility
- Team 3: 3 members, 79% compatibility

**mockMentorSessions** (3 sessions)
- 2 Completed with ratings and notes
- 1 Scheduled with AI prep summary

**mockTasks** (4 tasks)
- "Conduct 10 Customer Interviews" - In Progress - High Priority
- "Develop MVP Prototype" - Todo - High Priority
- "Regulatory Compliance Research" - In Progress - Critical
- "Market Size Analysis" - Completed - High Priority

**mockValidations** (3 validations)
- Teacher Interviews (Completed, Score 82)
- Unbanked Population Survey (Completed, Score 88)
- Competitor Analysis (In Progress)

**mockCorporateProblems** (2 problems)
- Customer Data Analytics & Personalization (Zong)
- Digital Payment Gateway for Rural Areas (HBL)

**mockPilotProjects** (1 active pilot)
- MobiFinance x Zong AI-Powered Customer Analytics

---

## 🔄 How Mock Data Works

### Data Files Location
```
lib/mock-data/index.ts
├── mockUsers
├── mockIdeas
├── mockStartups
├── mockTeams
├── mockMentorSessions
├── mockTasks
├── mockValidations
├── mockCorporateProblems
├── mockPilotProjects
├── mockStats
└── Helper functions (getMockUser, getMockIdea, etc.)
```

### Using Mock Data in Components

**Example 1: Fetch startup data**
```typescript
import { mockStartups, getMockStartup } from '@/lib/mock-data';

// Get all startups
mockStartups.forEach(startup => {
  console.log(startup.name);
});

// Get specific startup
const startup = getMockStartup('startup-1');
```

**Example 2: Fetch user-specific data**
```typescript
import { getMockUser, mockIdeas } from '@/lib/mock-data';

const user = getMockUser('student-1');
const userIdeas = mockIdeas.filter(i => i.user_id === 'student-1');
```

**Example 3: Get dashboard stats**
```typescript
import { mockStats } from '@/lib/mock-data';

const studentStats = mockStats.dashboard.student;
console.log(studentStats.ideasSubmitted); // 4
console.log(studentStats.readinessScore); // 75
```

---

## 🗄️ Database Schema (For Future Supabase Integration)

Complete SQL schema is available in `lib/schema.sql`:

```sql
-- Tables included:
- users
- profiles
- ideas
- startups
- teams
- team_members
- validations
- validation_interviews
- mentor_profiles
- mentor_assignments
- mentor_sessions
- mentor_reviews
- tasks
- task_comments
- scores
- progress_alerts
- corporate_profiles
- corporate_problems
- startup_matches
- pilot_projects
- pilot_milestones
- notifications
- emails
- user_activities
- dashboard_metrics
- articles
- faqs
```

### To Use Supabase Later:
1. Copy `lib/schema.sql` content
2. Go to Supabase SQL Editor
3. Paste and execute
4. All tables will be created automatically

---

## 🔌 Component Integration

All dashboard components use mock data:

### Student Dashboard (`app/dashboard/student/page.tsx`)
- Displays 4 stats from `mockStats`
- Lists user's ideas filtered by `user_id`
- Shows startups from `mockStartups`
- Tasks from `getMockTasks('startup-1')`
- Mentor sessions from `getMockMentorSessions('startup-1')`

### Mentor Dashboard (`app/dashboard/mentor/page.tsx`)
- Shows mentor stats from `mockStats.dashboard.mentor`
- Sessions from `mockMentorSessions`
- Assigned startups from `mockStartups`
- Ratings and feedback calculated from session data

### Admin Dashboard (`app/dashboard/admin/page.tsx`)
- Aggregates stats from `mockStats.dashboard.admin`
- Calculates idea distribution from `mockIdeas`
- Calculates startup stage distribution
- Lists problems and pilots for oversight

### Corporate Dashboard (`app/dashboard/corporate/page.tsx`)
- Shows corporate stats
- Lists matched startups
- Displays active pilot projects
- Shows posted problems with match counts

---

## 🎨 Available User Accounts

### Student Login
- Email: `ahmed@example.com` (Ahmed Hassan)
- Password: `any` (mock mode accepts any)
- Access: Student Portal

### Mentor Login
- Email: `dr.pakistan@example.com` (Dr. Pakistan)
- Password: `any`
- Access: Mentor Portal

### Admin Login
- Email: `admin@largify.com` (Admin)
- Password: `any`
- Access: Admin Dashboard

### Corporate Login
- Email: `innovation@zong.com.pk` (Zong Pakistan)
- Password: `any`
- Access: Corporate Portal

---

## 📱 Public Website Features

### Landing Page (/)
- Hero section with gradient text
- 6 AI agents showcase with descriptions
- Benefits for 4 stakeholder groups
- Pricing table with 3 tiers
- Tech stack showcase
- Social proof and testimonials
- Call-to-action buttons

### About Page (/about)
- Company story and mission
- Core values (4 pillars)
- Leadership team (4 members)
- Milestones timeline (4 phases)
- Key statistics

### How It Works (/how-it-works)
- Student path (6 steps)
- Mentor path (5 steps)
- Corporate path (5 steps)
- Expected timeline breakdown
- AI advantages section
- Call-to-action for signup

### Contact Page (/contact)
- Contact information (3 channels)
- Contact form with validation
- Office locations
- FAQ section (6 FAQs)
- Embedded map
- Social media links

---

## 🔧 Development Workflow

### 1. Create New Components
```typescript
import { mockStartups, mockIdeas } from '@/lib/mock-data';

// Use mock data directly
const startups = mockStartups.filter(s => s.stage === 'validation');
```

### 2. Add New Mock Data
Edit `lib/mock-data/index.ts` to add more mock records:
```typescript
export const mockNewEntity = [
  { id: '1', name: 'Example', ... },
  // ...
];

export const getMockNewEntity = (id: string) => {
  return mockNewEntity.find(e => e.id === id);
};
```

### 3. Update Components
Simply import and use:
```typescript
import { mockNewEntity, getMockNewEntity } from '@/lib/mock-data';
```

---

## 🚀 Future: Transition to Real Database

When ready to use Supabase:

### Step 1: Setup Supabase
```bash
# Create account at supabase.com
# Create new project
# Copy project URL and anon key
# Add to .env.local
```

### Step 2: Create Schema
```bash
# Go to SQL Editor in Supabase
# Paste content from lib/schema.sql
# Execute
```

### Step 3: Update Components
Replace mock data imports with Supabase queries:
```typescript
// From:
import { mockStartups } from '@/lib/mock-data';

// To:
const supabase = await createClient();
const { data: startups } = await supabase
  .from('startups')
  .select('*');
```

### Step 4: Implement Server Actions
Update `lib/actions/index.ts` to use real database:
```typescript
export async function submitIdea(data: Idea) {
  const supabase = await createClient();
  const { data: idea, error } = await supabase
    .from('ideas')
    .insert([data]);
  // ...
}
```

---

## ✅ Testing Checklist

- [ ] All dashboards load with mock data
- [ ] Student portal shows 4 ideas, 3 startups
- [ ] Mentor dashboard displays sessions and mentees
- [ ] Admin analytics show correct totals
- [ ] Corporate dashboard lists problems and pilots
- [ ] All public pages render correctly
- [ ] Links between pages work
- [ ] Responsive design on mobile
- [ ] Dark mode styling correct
- [ ] No console errors

---

## 📚 File Structure

```
largifylab/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── about/page.tsx           # About page
│   ├── how-it-works/page.tsx    # How It Works
│   ├── contact/page.tsx         # Contact page
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── dashboard/
│   │   ├── student/page.tsx     # Student portal (MOCK)
│   │   ├── mentor/page.tsx      # Mentor portal (MOCK)
│   │   ├── admin/page.tsx       # Admin dashboard (MOCK)
│   │   └── corporate/page.tsx   # Corporate portal (MOCK)
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── ui/                      # 11 UI components
│   └── layout/
│       ├── navbar.tsx
│       └── footer.tsx
├── lib/
│   ├── mock-data/
│   │   └── index.ts            # ⭐ All mock data
│   ├── types/
│   │   └── database.ts         # TypeScript types
│   ├── agents/
│   │   └── index.ts            # AI agent functions
│   ├── actions/
│   │   └── index.ts            # Server actions
│   ├── supabase/               # Supabase config
│   ├── schema.sql              # Database schema
│   └── utils.ts
├── public/
├── .env.local                  # Environment config
├── middleware.ts               # Route protection (disabled for mock)
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🎯 Next Steps

1. **Test everything locally** with `npm run dev`
2. **Try all dashboards** with mock data
3. **Explore the UI** across different screen sizes
4. **When ready for real data**:
   - Create Supabase project
   - Import `lib/schema.sql`
   - Update `.env.local`
   - Update components to use Supabase queries
5. **Deploy to Vercel**:
   - Push to GitHub
   - Connect in Vercel
   - Set environment variables
   - Deploy

---

## 📞 Support

All data is pre-populated for quick testing. No additional setup needed!

- 📧 Questions? Check FAQ on contact page
- 📱 All components are fully responsive
- 🎨 Dark mode enabled everywhere
- ⚡ Optimized performance with mock data

**You're ready to go! 🚀**
