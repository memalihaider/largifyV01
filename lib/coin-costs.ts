/**
 * Coin Cost System
 * Defines the cost of various features and tasks in the Largify ecosystem
 */

export const COIN_COSTS = {
  // Training & Learning
  lessons: {
    beginnerLesson: 10,
    intermediateLesson: 25,
    advancedLesson: 50,
  },

  // Courses & Specializations
  courses: {
    beginnerCourse: 50,
    intermediateCourse: 150,
    advancedCourse: 300,
    specialization: 500,
  },

  // Labs & Hands-On
  labs: {
    basicLab: 20,
    intermediateLab: 50,
    advancedLab: 100,
    practiceProject: 75,
  },

  // CTF (Challenge The Field)
  ctf: {
    beginnerChallenge: 15,
    intermediateChallenge: 40,
    advancedChallenge: 80,
    teamChallenge: 120,
    ctfRound: 200,
  },

  // Case Studies
  caseStudies: {
    basicCase: 30,
    intermediateCase: 60,
    advancedCase: 100,
    caseStudyAccess: 25,
  },

  // Certifications & Assessment
  certifications: {
    basicCertificate: 100,
    intermediateCertificate: 250,
    advancedCertificate: 500,
    skillBadge: 50,
  },

  // Mentorship
  mentorship: {
    sessionOneOnOne: 150,
    careerCounseling: 100,
    codeReview: 80,
    portfolioReview: 120,
  },

  // Documentation & Resources
  resources: {
    courseDocumentation: 5,
    advancedGuide: 15,
    template: 10,
    toolkit: 25,
  },

  // Assessments
  assessments: {
    skillAssessment: 20,
    domainTest: 50,
    practiceTest: 15,
    finalExam: 75,
  },

  // Miscellaneous
  misc: {
    certificateDownload: 10,
    badgeUnlock: 5,
    portfolioFeature: 25,
    jobBoardAccess: 30,
  },
};

/**
 * Get the level of a cost (beginner, intermediate, advanced)
 */
export function getCostLevel(cost: number): 'beginner' | 'intermediate' | 'advanced' {
  if (cost <= 30) return 'beginner';
  if (cost <= 100) return 'intermediate';
  return 'advanced';
}

/**
 * Check if user has enough coins
 */
export function hasEnoughCoins(userCoins: number, requiredCoins: number): boolean {
  return userCoins >= requiredCoins;
}

/**
 * Calculate remaining coins after purchase
 */
export function calculateRemainingCoins(currentCoins: number, cost: number): number {
  const remaining = currentCoins - cost;
  return remaining < 0 ? 0 : remaining;
}

/**
 * Get all coins costs organized by category
 */
export function getAllCoinCosts() {
  return COIN_COSTS;
}

/**
 * Get total monthly coins from subscription tier
 */
export const MONTHLY_COINS_BY_TIER = {
  free: 0,
  starter: 150,
  growth: 400,
  pro: 800,
};
