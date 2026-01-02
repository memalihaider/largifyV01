# Largify Venture Lab - API & Integration Guide

## 🔌 Server Actions (Secure API)

Server actions are Next.js's way of handling server-side operations securely. Located in `lib/actions/index.ts`:

### 1. Submit Idea

```typescript
import { submitIdea } from '@/lib/actions';

const result = await submitIdea({
  title: "AI Classroom",
  description: "Smart classrooms with real-time engagement tracking",
  problemStatement: "Teachers can't track student engagement in real-time",
  proposedSolution: "AI-powered dashboard analyzing student engagement",
  targetMarket: "Universities and schools",
  industry: "EdTech"
});

// Result:
// {
//   success: true,
//   ideaId: "uuid",
//   feedback: {
//     overall_score: 78,
//     strengths: [...],
//     weaknesses: [...],
//     recommendations: [...]
//   }
// }
```

### 2. Create Startup from Idea

```typescript
import { createStartupFromIdea } from '@/lib/actions';

const result = await createStartupFromIdea(ideaId);
// Returns: { success: true, startupId: "uuid" }
```

### 3. Upload Validation Data

```typescript
import { uploadValidationData } from '@/lib/actions';

const result = await uploadValidationData(startupId, {
  type: "interview",
  content: "Interview transcript or summary",
  file: formFile // Optional: audio/video file
});
// Returns: { success: true, validationId: "uuid" }
```

### 4. Schedule Mentor Session

```typescript
import { scheduleMentorSession } from '@/lib/actions';

const result = await scheduleMentorSession({
  startupId: "uuid",
  mentorId: "uuid",
  scheduledAt: "2025-02-15T14:00:00Z",
  duration: 60 // minutes
});
// Returns: { success: true, sessionId: "uuid" }
```

### 5. Update Task Status

```typescript
import { updateTaskStatus } from '@/lib/actions';

const result = await updateTaskStatus(taskId, "completed");
// Returns: { success: true }
```

### 6. Post Corporate Problem

```typescript
import { postCorporateProblem } from '@/lib/actions';

const result = await postCorporateProblem({
  title: "Payment Processing Optimization",
  description: "Need scalable payment processing for SMEs",
  industry: "FinTech",
  requirements: ["Scalability", "Low latency", "99.9% uptime"],
  budget: "PKR 1,000,000",
  timeline: "4 weeks"
});
// Returns: { success: true, problemId: "uuid" }
```

### 7. Accept Pilot Project

```typescript
import { acceptPilotProject } from '@/lib/actions';

const result = await acceptPilotProject(problemId, startupId);
// Returns: { success: true, pilotId: "uuid" }
```

---

## 🤖 AI Agent Functions

Located in `lib/agents/index.ts`:

### 1. Evaluate Idea

```typescript
import { evaluateIdea } from '@/lib/agents';

const feedback = await evaluateIdea({
  id: "idea-uuid",
  title: "AI Classroom",
  // ... other idea fields
});

// Returns:
// {
//   overall_score: 78,           // 0-100
//   strengths: [
//     "Clear problem statement",
//     "Large target market",
//     "Scalable solution architecture"
//   ],
//   weaknesses: [
//     "High competition in space",
//     "Requires significant capital"
//   ],
//   recommendations: [
//     "Focus on niche sub-market first",
//     "Partner with established players",
//     "Validate with 10+ potential customers"
//   ],
//   market_potential: 85,         // 0-100
//   innovation_score: 72,         // 0-100
//   feasibility_score: 68,        // 0-100
//   validation_readiness: true    // boolean
// }
```

### 2. Analyze Market Validation

```typescript
import { analyzeValidation } from '@/lib/agents';

const analysis = await analyzeValidation({
  interviews: [...],
  surveys: [...],
  market_research: [...]
});

// Returns:
// {
//   market_demand_score: 85,           // 0-100
//   willingness_to_pay: 78,            // 0-100
//   key_insights: [
//     "Strong demand for solution in target market",
//     "Customers willing to pay premium for quality"
//   ],
//   concerns: [
//     "Regulatory uncertainty in initial markets"
//   ],
//   recommendation: "proceed" | "iterate" | "pivot",
//   confidence_level: 82               // 0-100
// }
```

### 3. Score Team Compatibility

```typescript
import { scoreTeamCompatibility } from '@/lib/agents';

const score = scoreTeamCompatibility([
  { id: "user1", skills: ["Product", "Design"], experience: 5 },
  { id: "user2", skills: ["Backend", "DevOps"], experience: 7 },
  { id: "user3", skills: ["Frontend", "Design"], experience: 3 }
]);

// Returns: 85 (0-100)
```

### 4. Calculate Health Score

```typescript
import { calculateHealthScore } from '@/lib/agents';

const score = calculateHealthScore({
  readinessScore: 75,
  validationProgress: 50,
  teamSize: 3,
  inactivityDays: 4
});

// Returns: 78 (0-100)
```

### 5. Generate Mentor Briefing

```typescript
import { generateMentorBriefing } from '@/lib/agents';

const briefing = generateMentorBriefing({
  id: "startup-uuid",
  name: "EduAI",
  stage: "validation",
  // ... other startup data
});

// Returns:
// "## Pre-Session Briefing
// 
// ### Startup Status
// - Stage: Validation
// - Last Update: 2 days ago
// - Team Size: 3 members
// ...
```

### 6. Monitor Progress

```typescript
import { monitorStartupProgress } from '@/lib/agents';

const alerts = monitorStartupProgress({
  id: "startup-uuid",
  lastActivityDate: new Date("2025-12-25"),
  // ... other startup data
});

// Returns:
// [
//   {
//     type: "inactivity",
//     severity: "medium",
//     message: "No activity recorded in the last 5 days",
//     actionItems: [
//       "Send check-in message",
//       "Schedule mentor session"
//     ]
//   }
// ]
```

### 7. Match Startups to Corporate Problems

```typescript
import { matchStartupsToCorporateProblems } from '@/lib/agents';

const matches = matchStartupsToCorporateProblems(
  startup,
  [problem1, problem2, problem3]
);

// Returns:
// [
//   {
//     startupId: "startup-uuid",
//     problemId: "problem-uuid",
//     matchScore: 92,
//     reasons: [
//       "Similar technology stack",
//       "Relevant market experience",
//       "Team expertise alignment"
//     ]
//   }
// ]
```

---

## 🗄️ Database Schema Reference

### Users
```typescript
type User = {
  id: string;
  email: string;
  role: "student" | "mentor" | "admin" | "corporate";
  created_at: string;
}
```

### Ideas
```typescript
type Idea = {
  id: string;
  user_id: string;
  title: string;
  description: string;
  problem_statement: string;
  proposed_solution: string;
  target_market: string;
  industry: string;
  status: "draft" | "submitted" | "evaluating" | "evaluated" | "approved" | "rejected";
  ai_score?: number;
  ai_feedback?: AIFeedback;
  created_at: string;
}
```

### Startups
```typescript
type Startup = {
  id: string;
  idea_id: string;
  name: string;
  stage: "idea" | "validation" | "building" | "pilot" | "scaling";
  readiness_score: number;
  health_score: number;
  is_active: boolean;
  created_at: string;
}
```

### Teams
```typescript
type Team = {
  id: string;
  startup_id: string;
  compatibility_score?: number;
  members: TeamMember[];
  created_at: string;
}
```

### Mentor Sessions
```typescript
type MentorSession = {
  id: string;
  startup_id: string;
  mentor_id: string;
  scheduled_at: string;
  status: "scheduled" | "completed" | "cancelled";
  ai_prep_summary?: string;
  mentor_notes?: string;
  action_items?: string[];
  created_at: string;
}
```

### Validations
```typescript
type Validation = {
  id: string;
  startup_id: string;
  type: "interview" | "survey" | "market_research" | "competitor_analysis";
  status: "pending" | "in_progress" | "completed" | "failed";
  data: Record<string, unknown>;
  ai_analysis?: ValidationAnalysis;
  created_at: string;
}
```

### Corporate Problems
```typescript
type CorporateProblem = {
  id: string;
  corporate_id: string;
  title: string;
  description: string;
  industry: string;
  requirements: string[];
  is_active: boolean;
  created_at: string;
}
```

### Pilot Projects
```typescript
type PilotProject = {
  id: string;
  problem_id: string;
  startup_id: string;
  corporate_id: string;
  title: string;
  status: "proposed" | "negotiating" | "active" | "completed" | "cancelled";
  budget?: number;
  deliverables: string[];
  created_at: string;
}
```

---

## 📡 Real-Time Subscriptions (Supabase Realtime)

### Subscribe to Startup Updates

```typescript
import { createClient } from '@/lib/supabase/client';

const supabase = createClient();

const channel = supabase
  .channel(`startup_${startupId}`)
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'startups',
      filter: `id=eq.${startupId}`
    },
    (payload) => {
      console.log('Startup updated:', payload.new);
      // Update UI
    }
  )
  .subscribe();

// Cleanup
channel.unsubscribe();
```

### Subscribe to Task Changes

```typescript
const channel = supabase
  .channel(`tasks_${startupId}`)
  .on(
    'postgres_changes',
    {
      event: '*',
      schema: 'public',
      table: 'tasks',
      filter: `startup_id=eq.${startupId}`
    },
    (payload) => {
      console.log('Task changed:', payload);
    }
  )
  .subscribe();
```

---

## 🔐 Authentication & Authorization

### Check User Role

```typescript
import { createClient } from '@/lib/supabase/server';

const supabase = await createClient();
const { data: { user } } = await supabase.auth.getUser();
const { data: profile } = await supabase
  .from('profiles')
  .select('role')
  .eq('user_id', user.id)
  .single();

console.log(profile.role); // "student", "mentor", "admin", "corporate"
```

### Protected Route Example

```typescript
// app/dashboard/student/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function StudentDashboard() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  async function checkAuth() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      router.push('/auth/login');
      return;
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('user_id', user.id)
      .single();

    if (profile?.role !== 'student') {
      router.push('/dashboard');
      return;
    }

    setAuthorized(true);
  }

  if (!authorized) return null;

  return (
    // Dashboard content
  );
}
```

---

## 🚀 Integration Examples

### Integrate with Email Service (e.g., SendGrid)

```typescript
// lib/actions/email.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendIdeaEvaluationEmail(
  recipientEmail: string,
  ideaTitle: string,
  score: number
) {
  await sgMail.send({
    to: recipientEmail,
    from: 'noreply@largify.com',
    subject: `Your Idea "${ideaTitle}" has been evaluated!`,
    html: `
      <h2>${ideaTitle}</h2>
      <p>Score: ${score}/100</p>
      <a href="https://largify-lab.com/ideas/${ideaId}">View Details</a>
    `
  });
}
```

### Integrate with WhatsApp (e.g., Twilio)

```typescript
// lib/actions/whatsapp.ts
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export async function sendStartupAlert(
  phoneNumber: string,
  message: string
) {
  await client.messages.create({
    body: message,
    from: 'whatsapp:+1234567890',
    to: `whatsapp:${phoneNumber}`
  });
}
```

### Integrate with Slack (Notifications)

```typescript
// lib/actions/slack.ts
export async function notifySlackChannel(
  message: string,
  channel: string
) {
  const response = await fetch(process.env.SLACK_WEBHOOK_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      channel,
      text: message
    })
  });

  return response.json();
}
```

---

## 📊 Analytics & Reporting

### Track Key Metrics

```typescript
// lib/analytics.ts
export async function trackEvent(
  eventName: string,
  properties: Record<string, unknown>
) {
  // Send to analytics service (e.g., Mixpanel, Segment)
  await fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      event: eventName,
      properties,
      timestamp: new Date()
    })
  });
}

// Usage
await trackEvent('idea_submitted', {
  startupId: 'uuid',
  score: 78,
  timestamp: new Date()
});
```

### Generate Reports

```typescript
// lib/reports.ts
export async function generateCohortReport(cohortId: string) {
  const supabase = await createClient();
  
  const { data: ideas } = await supabase
    .from('ideas')
    .select('status, ai_score')
    .eq('cohort_id', cohortId);

  return {
    totalIdeas: ideas.length,
    avgScore: ideas.reduce((sum, idea) => sum + (idea.ai_score || 0), 0) / ideas.length,
    evaluatedCount: ideas.filter(i => i.status === 'evaluated').length
  };
}
```

---

## 🔧 Error Handling

```typescript
// Standard response format
interface ApiResponse<T = null> {
  success: boolean;
  data?: T;
  error?: string;
  details?: Record<string, string>;
}

// Example usage
try {
  const result = await submitIdea(ideaData);
  if (result.success) {
    // Handle success
  } else {
    // Handle error
    console.error(result.error);
  }
} catch (error) {
  console.error('Unexpected error:', error);
}
```

---

## 📚 Type Definitions

All types are available from `lib/types/database.ts`:

```typescript
import {
  User,
  Idea,
  Startup,
  Team,
  MentorSession,
  Validation,
  CorporateProblem,
  PilotProject,
  AIFeedback,
  ValidationAnalysis
} from '@/lib/types/database';
```

---

**For more examples and documentation, see:**
- README.md - Feature overview
- DEPLOYMENT.md - Setup guide
- APPLICATION_SUMMARY.md - Complete summary

