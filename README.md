# Largify Venture Lab

**AI-Agent Powered Idea-to-Startup Platform**

Transform ideas into pilot-ready startups in 8-16 weeks through structured execution workflows, autonomous AI agents, and real-time dashboards.

## 📊 Overview

Largify Venture Lab is a digital execution infrastructure for Pakistan's startup ecosystem. It provides:

- **6 Autonomous AI Agents** working 24/7 for validation, evaluation, and monitoring
- **Real-time Dashboards** for students, mentors, admins, and corporate partners
- **Structured Workflows** from idea to pilot-ready startup
- **Scalable Infrastructure** built on Next.js + Supabase

## 🎯 Core Features

### 1. Idea Evaluation Agent
AI scores ideas on innovation, feasibility, and market potential with instant feedback.

### 2. Market Validation Agent
Analyzes interviews and surveys to generate market demand scores and pivot recommendations.

### 3. Team Formation Agent
Detects skill gaps, suggests co-founders, and scores team compatibility.

### 4. Mentor Assistant Agent
Pre-session summaries, automatic task generation, and team alignment.

### 5. Progress & Risk Monitor
Daily cohort monitoring with inactivity detection and milestone tracking.

### 6. Corporate Matching Agent
Matches validated startups with corporate problems and generates pilot scopes.

## 🏗️ Tech Stack

- **Frontend**: Next.js App Router with React Server Components
- **Backend**: Supabase Postgres with RLS security
- **Auth**: Supabase Auth with role-based access control
- **AI**: OpenAI API via server actions
- **Real-time**: Supabase Realtime subscriptions
- **Storage**: Supabase Storage for files
- **Styling**: Tailwind CSS

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Supabase account
- OpenAI API key

### Setup

```bash
# Install dependencies
npm install

# Configure environment
# Create .env.local with:
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...
# SUPABASE_SERVICE_ROLE_KEY=...
# OPENAI_API_KEY=...

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Demo Credentials

- **Student**: `student@demo.com` / `password123`
- **Mentor**: `mentor@demo.com` / `password123`
- **Admin**: `admin@demo.com` / `password123`
- **Corporate**: `corporate@demo.com` / `password123`

## 📁 Project Structure

```
app/                    # Next.js App Router
├── page.tsx           # Landing page
├── layout.tsx         # Root layout
├── auth/              # Authentication pages
└── dashboard/         # Role-based dashboards

components/           # Reusable UI components
├── ui/               # UI components library
└── layout/           # Navigation & footer

lib/
├── types/            # Database types
├── supabase/         # Supabase clients & middleware
├── agents/           # AI agent functions
├── actions/          # Server actions
└── utils.ts          # Utilities
```

## 🤖 AI Agents

Located in `lib/agents/index.ts`:

- `evaluateIdea()` - Score and evaluate submitted ideas
- `analyzeValidation()` - Market analysis from interviews/surveys
- `scoreTeamCompatibility()` - Team skill assessment
- `calculateHealthScore()` - Startup health monitoring
- `generateMentorBriefing()` - Pre-session summaries
- `monitorStartupProgress()` - Inactivity detection
- `matchStartupsToCorporateProblems()` - Corporate matching

## 🔒 Role-Based Access

| Role | Dashboard | Access |
|------|-----------|--------|
| Student | Idea submission, team management, startup tracking |
| Mentor | Assigned startups, session management, briefings |
| Admin | Cohort analytics, pipeline visualization, reporting |
| Corporate | Problem posting, startup matching, pilots |

## 💻 Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run typecheck # Type checking
```

## 📊 Dashboard Features

- **Student**: Track ideas, manage teams, view AI evaluations
- **Mentor**: Upcoming sessions, AI prep summaries, startup health
- **Admin**: Cohort stats, pipeline visualization, cohort health
- **Corporate**: Problem matching, pilot projects, ROI tracking

## 🚀 Deployment

Deploy to Vercel with environment variables. See `.env.local` for required keys.

## 📄 License

MIT License

---

**Largify Venture Lab** - Transform Ideas. Build Startups. Create Impact. 🚀

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
