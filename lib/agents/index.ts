import { Idea, AIFeedback, ValidationAnalysis } from "@/lib/types/database";

/**
 * Idea Evaluation Agent
 * Analyzes ideas and provides scores and recommendations
 */
export async function evaluateIdea(idea: Idea): Promise<AIFeedback> {
  try {
    // In production, this would call OpenAI API via server action
    // For now, return mock data
    const mockFeedback: AIFeedback = {
      overall_score: Math.floor(Math.random() * 40) + 60, // 60-100
      strengths: [
        "Clear problem statement",
        "Large target market",
        "Scalable solution architecture",
      ],
      weaknesses: [
        "High competition in space",
        "Requires significant capital",
      ],
      recommendations: [
        "Focus on niche sub-market first",
        "Partner with established players",
        "Validate with 10+ potential customers",
      ],
      market_potential: Math.floor(Math.random() * 30) + 70,
      innovation_score: Math.floor(Math.random() * 30) + 65,
      feasibility_score: Math.floor(Math.random() * 40) + 55,
      validation_readiness: Math.floor(Math.random() * 30) + 60 > 75,
    };

    return mockFeedback;
  } catch (error) {
    console.error("Error evaluating idea:", error);
    throw error;
  }
}

/**
 * Market Validation Agent
 * Analyzes market research, interviews, and surveys
 */
export async function analyzeValidation(
  data: Record<string, unknown>
): Promise<ValidationAnalysis> {
  try {
    const mockAnalysis: ValidationAnalysis = {
      market_demand_score: Math.floor(Math.random() * 30) + 70,
      willingness_to_pay: Math.floor(Math.random() * 30) + 70,
      key_insights: [
        "Strong demand for solution in target market",
        "Customers willing to pay premium for quality",
        "Market size estimated at 10M+ addressable users",
      ],
      concerns: [
        "Regulatory uncertainty in initial markets",
        "High customer acquisition cost",
      ],
      recommendation: Math.random() > 0.3 ? "proceed" : "iterate",
      confidence_level: Math.floor(Math.random() * 20) + 75,
    };

    return mockAnalysis;
  } catch (error) {
    console.error("Error analyzing validation:", error);
    throw error;
  }
}

/**
 * Team Compatibility Scoring
 * Evaluates team member skills and compatibility
 */
export function scoreTeamCompatibility(members: unknown[]): number {
  // Mock scoring based on team composition
  // In production, would use actual skills and past collaboration data
  const baseScore = Math.floor(Math.random() * 30) + 60;
  return Math.min(100, baseScore);
}

/**
 * Health Score Calculator
 * Calculates startup health based on various metrics
 */
export function calculateHealthScore(metrics: {
  readinessScore: number;
  validationProgress: number;
  teamSize: number;
  inactivityDays: number;
}): number {
  let score = 50; // Base score

  // Readiness contribution (40%)
  score += metrics.readinessScore * 0.4;

  // Validation contribution (30%)
  score += Math.min(metrics.validationProgress, 100) * 0.3;

  // Team size bonus (15%)
  if (metrics.teamSize >= 3) score += 10;
  else if (metrics.teamSize >= 2) score += 5;

  // Inactivity penalty (15%)
  if (metrics.inactivityDays < 7) score += 15;
  else if (metrics.inactivityDays < 14) score += 10;
  else if (metrics.inactivityDays < 21) score += 5;
  // else 0 points

  return Math.min(100, Math.floor(score));
}

/**
 * Mentor Preparation Agent
 * Generates pre-session summaries for mentors
 */
export function generateMentorBriefing(startupData: unknown): string {
  // Mock briefing generation
  return `
## Pre-Session Briefing

### Startup Status
- Stage: Validation
- Last Update: 2 days ago
- Team Size: 3 members

### Recent Progress
- 12 customer interviews completed
- Market feedback: Positive
- Next milestone: Complete validation by end of month

### Key Discussion Topics
1. Customer feedback analysis
2. Product roadmap adjustments
3. Go-to-market strategy refinement

### Action Items from Last Session
- [ ] Schedule customer interviews
- [ ] Prepare investor pitch deck
- [ ] Research competitor landscape
  `;
}

/**
 * Progress Monitoring Agent
 * Detects issues and generates alerts
 */
export interface ProgressAlert {
  type: "inactivity" | "milestone_missed" | "health_decline" | "validation_issue";
  severity: "low" | "medium" | "high" | "critical";
  message: string;
  actionItems: string[];
}

export function monitorStartupProgress(
  startupData: Record<string, unknown>
): ProgressAlert[] {
  const alerts: ProgressAlert[] = [];

  // Mock alert generation
  if (Math.random() > 0.7) {
    alerts.push({
      type: "inactivity",
      severity: "medium",
      message: "No activity recorded in the last 5 days",
      actionItems: ["Send check-in message", "Schedule mentor session"],
    });
  }

  return alerts;
}

/**
 * Corporate Matching Agent
 * Matches startups with corporate problems
 */
export interface MatchResult {
  startupId: string;
  problemId: string;
  matchScore: number;
  reasons: string[];
}

export function matchStartupsToCorporateProblems(
  startup: unknown,
  problems: unknown[]
): MatchResult[] {
  // Mock matching algorithm
  return [
    {
      startupId: "1",
      problemId: "1",
      matchScore: Math.floor(Math.random() * 20) + 80,
      reasons: [
        "Similar technology stack",
        "Relevant market experience",
        "Team expertise alignment",
      ],
    },
  ];
}
