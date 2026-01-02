'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ChevronLeft,
  Clock,
  Star,
  Lightbulb,
  Send,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Trophy,
  Zap
} from 'lucide-react'

// Mock challenge data (in production, fetch from API)
const challengesData: any = {
  'cs-1': {
    id: 'cs-1',
    title: 'SQL Injection Bypass',
    domain: 'cybersecurity',
    difficulty: 'Beginner',
    points: 100,
    timeLimit: 30,
    briefing: {
      context: 'A vulnerable web application has been deployed with a login form that doesn\'t properly sanitize user input. Your goal is to exploit this vulnerability to gain unauthorized access.',
      objective: 'Bypass the login authentication and retrieve the admin credentials from the database.',
      constraints: [
        'You cannot modify the server-side code',
        'You must use SQL injection techniques',
        'No brute force attacks allowed'
      ],
      environment: 'Web application running on http://ctf-lab.largify.com:3001'
    },
    workspace: {
      type: 'web-security',
      url: 'http://ctf-lab.largify.com:3001/login',
      tools: ['Browser DevTools', 'Burp Suite', 'SQLMap']
    },
    hints: [
      { cost: 10, hint: 'Try using single quotes in the username field to test for SQL injection' },
      { cost: 20, hint: 'The backend uses MySQL. Common payloads like \' OR \'1\'=\'1 might work' },
      { cost: 30, hint: 'Look for the admin table and try UNION-based injection to extract data' }
    ],
    submissionType: 'flag',
    flagFormat: 'LARGIFY{admin_password_here}'
  },
  'dev-1': {
    id: 'dev-1',
    title: 'React Performance Optimization',
    domain: 'development',
    difficulty: 'Intermediate',
    points: 250,
    timeLimit: 60,
    briefing: {
      context: 'A React e-commerce application is experiencing performance issues. The initial load time is 8 seconds, and users are reporting laggy interactions.',
      objective: 'Reduce the initial load time to under 4 seconds and improve Lighthouse performance score to 90+.',
      constraints: [
        'Must maintain all existing functionality',
        'Cannot remove features',
        'Must work on production build'
      ],
      environment: 'React 18 application with 150+ components'
    },
    workspace: {
      type: 'code-editor',
      language: 'javascript',
      files: ['App.jsx', 'ProductList.jsx', 'Cart.jsx'],
      initialCode: `// Unoptimized React Component
import React from 'react';

function ProductList({ products }) {
  // This runs on every render!
  const expensiveCalculation = () => {
    const result = [];
    for (let i = 0; i < products.length; i++) {
      // Complex calculation
      result.push(products[i].price * 1.2);
    }
    return result;
  };
  
  const calculatedPrices = expensiveCalculation();
  
  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>Price: \${calculatedPrices[index]}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;`
    },
    hints: [
      { cost: 15, hint: 'Look for unnecessary re-renders. React.memo and useMemo can help.' },
      { cost: 25, hint: 'Keys should be unique IDs, not array indices. Check your map functions.' },
      { cost: 35, hint: 'Code splitting with React.lazy and Suspense can reduce initial bundle size.' }
    ],
    submissionType: 'code',
    evaluationCriteria: {
      loadTime: '< 4 seconds',
      lighthouseScore: '>= 90',
      functionalityIntact: true
    }
  },
  'biz-1': {
    id: 'biz-1',
    title: 'SaaS Business Model Canvas',
    domain: 'business-startup',
    difficulty: 'Beginner',
    points: 180,
    timeLimit: 60,
    briefing: {
      context: 'You\'re launching a B2B SaaS product that helps small businesses manage their inventory across multiple sales channels (online store, physical store, marketplaces).',
      objective: 'Create a comprehensive Business Model Canvas that demonstrates viability and scalability of this SaaS product.',
      constraints: [
        'Target market: SMBs with 10-50 employees',
        'Must have clear revenue model',
        'Consider competition from Shopify, Square'
      ],
      environment: 'Digital canvas workspace'
    },
    workspace: {
      type: 'business-canvas',
      sections: [
        'Customer Segments',
        'Value Propositions',
        'Channels',
        'Customer Relationships',
        'Revenue Streams',
        'Key Resources',
        'Key Activities',
        'Key Partnerships',
        'Cost Structure'
      ]
    },
    hints: [
      { cost: 10, hint: 'Focus on the pain point: inventory sync errors cost SMBs $50K+ annually' },
      { cost: 20, hint: 'Consider a freemium model with premium features for multi-channel sync' },
      { cost: 30, hint: 'Key partnerships could include Shopify, WooCommerce, and Amazon Marketplace' }
    ],
    submissionType: 'document',
    evaluationCriteria: {
      completeness: 'All 9 blocks filled',
      coherence: 'Components align logically',
      viability: 'Revenue > Costs projection shown'
    }
  },
  'ai-1': {
    id: 'ai-1',
    title: 'Customer Churn Prediction',
    domain: 'ai-data',
    difficulty: 'Intermediate',
    points: 300,
    timeLimit: 120,
    briefing: {
      context: 'A SaaS company is losing 15% of customers monthly. They have 2 years of customer data including usage patterns, support tickets, billing history, and feature adoption.',
      objective: 'Build a machine learning model that predicts which customers will churn in the next 30 days with at least 85% accuracy.',
      constraints: [
        'Dataset: 10,000 customers, 50 features',
        'Must explain top 5 churn indicators',
        'Model must be deployable (< 100MB)'
      ],
      environment: 'Jupyter notebook with Python 3.10, scikit-learn, pandas'
    },
    workspace: {
      type: 'jupyter',
      language: 'python',
      datasetUrl: '/datasets/saas-churn.csv',
      libraries: ['pandas', 'numpy', 'scikit-learn', 'matplotlib', 'seaborn']
    },
    hints: [
      { cost: 15, hint: 'Start with exploratory data analysis. Look at feature correlations with churn.' },
      { cost: 25, hint: 'Random Forest or XGBoost typically perform well for tabular data like this.' },
      { cost: 35, hint: 'Feature engineering matters: try creating usage_decline_rate and support_ticket_frequency.' }
    ],
    submissionType: 'model',
    evaluationCriteria: {
      accuracy: '>= 85%',
      precision: '>= 80%',
      recall: '>= 80%',
      explainability: 'Feature importance analysis included'
    }
  }
}

export default function ChallengePage() {
  const router = useRouter()
  const params = useParams()
  const domainId = params.domain as string
  const challengeId = params.challengeId as string
  
  const challenge = challengesData[challengeId]
  
  const [timeRemaining, setTimeRemaining] = useState(challenge?.timeLimit * 60 || 1800) // seconds
  const [hintsUsed, setHintsUsed] = useState<number[]>([])
  const [submission, setSubmission] = useState('')
  const [evaluationResult, setEvaluationResult] = useState<any>(null)
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [activeTab, setActiveTab] = useState('briefing')

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!challenge) {
    return <div>Challenge not found</div>
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const unlockHint = (index: number) => {
    if (!hintsUsed.includes(index)) {
      setHintsUsed([...hintsUsed, index])
    }
  }

  const handleSubmit = async () => {
    if (!submission.trim()) return

    setIsEvaluating(true)
    
    // Simulate AI evaluation (2-3 seconds)
    setTimeout(() => {
      // Mock evaluation result
      const passed = Math.random() > 0.3 // 70% pass rate for demo
      
      setEvaluationResult({
        passed,
        score: passed ? 85 + Math.floor(Math.random() * 15) : 45 + Math.floor(Math.random() * 20),
        feedback: passed 
          ? 'Excellent work! Your solution meets all requirements.'
          : 'Your solution is close but needs improvement in some areas.',
        details: {
          correctness: passed ? 'All test cases passed' : '2 test cases failed',
          efficiency: passed ? 'Optimal approach used' : 'Could be more efficient',
          completeness: passed ? 'All requirements met' : 'Missing edge case handling'
        },
        pointsEarned: passed ? challenge.points - hintsUsed.reduce((sum, i) => sum + challenge.hints[i].cost, 0) : 0
      })
      
      setIsEvaluating(false)
    }, 2500)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-400 bg-green-400/10 border-green-400/30'
      case 'Intermediate':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30'
      case 'Advanced':
        return 'text-red-400 bg-red-400/10 border-red-400/30'
      default:
        return 'text-slate-400'
    }
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={() => router.push(`/student/ctf/${domainId}`)}
          className="flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Challenges
        </button>

        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold">{challenge.title}</h1>
              <span className={`px-3 py-1 text-sm rounded border ${getDifficultyColor(challenge.difficulty)}`}>
                {challenge.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400" />
                <span>{challenge.points} points</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{challenge.timeLimit} min limit</span>
              </div>
            </div>
          </div>

          {/* Timer */}
          <div className={`px-6 py-3 rounded-xl border-2 ${
            timeRemaining < 300 ? 'bg-red-500/10 border-red-500 text-red-400' : 'bg-[#111927] border-slate-700'
          }`}>
            <div className="text-sm text-slate-400 mb-1">Time Remaining</div>
            <div className="text-2xl font-bold font-mono">{formatTime(timeRemaining)}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Tabs */}
          <div className="flex gap-2 border-b border-slate-800">
            {['briefing', 'workspace', 'hints'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-white border-b-2 border-violet-500'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Briefing Tab */}
          {activeTab === 'briefing' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Context</h3>
                <p className="text-slate-300 leading-relaxed">{challenge.briefing.context}</p>
              </div>

              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Objective</h3>
                <p className="text-slate-300 leading-relaxed">{challenge.briefing.objective}</p>
              </div>

              <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Constraints</h3>
                <ul className="space-y-2">
                  {challenge.briefing.constraints.map((constraint: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-violet-400 mt-1">•</span>
                      <span>{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Environment</h3>
                <p className="text-slate-300">{challenge.briefing.environment}</p>
              </div>
            </motion.div>
          )}

          {/* Workspace Tab */}
          {activeTab === 'workspace' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {challenge.workspace.type === 'code-editor' && (
                <div className="bg-[#111927] border border-slate-800 rounded-xl overflow-hidden">
                  <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                    <span className="text-sm text-slate-400">Code Editor</span>
                    <span className="text-xs text-slate-500">{challenge.workspace.language}</span>
                  </div>
                  <textarea
                    value={submission || challenge.workspace.initialCode}
                    onChange={(e) => setSubmission(e.target.value)}
                    className="w-full h-96 bg-[#0b1120] text-slate-300 p-4 font-mono text-sm focus:outline-none"
                    placeholder="Write your code here..."
                  />
                </div>
              )}

              {challenge.workspace.type === 'web-security' && (
                <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Web Application Access</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <p className="text-sm text-slate-400 mb-2">Target URL:</p>
                    <a 
                      href={challenge.workspace.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:underline font-mono"
                    >
                      {challenge.workspace.url}
                    </a>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-slate-400 mb-2">Available Tools:</p>
                    <div className="flex flex-wrap gap-2">
                      {challenge.workspace.tools.map((tool: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-slate-800 rounded text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-400 mb-2 block">Submit Flag:</label>
                    <input
                      type="text"
                      value={submission}
                      onChange={(e) => setSubmission(e.target.value)}
                      placeholder={challenge.flagFormat}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-violet-500"
                    />
                  </div>
                </div>
              )}

              {challenge.workspace.type === 'business-canvas' && (
                <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Business Model Canvas</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {challenge.workspace.sections.map((section: string, i: number) => (
                      <div key={i} className="bg-slate-900 rounded-lg p-4">
                        <label className="text-sm font-medium text-violet-400 mb-2 block">
                          {section}
                        </label>
                        <textarea
                          className="w-full h-24 bg-[#0b1120] border border-slate-700 rounded px-3 py-2 text-sm text-slate-300 focus:outline-none focus:border-violet-500"
                          placeholder={`Describe ${section.toLowerCase()}...`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {challenge.workspace.type === 'jupyter' && (
                <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Jupyter Notebook Environment</h3>
                  <div className="bg-slate-900 rounded-lg p-4 mb-4">
                    <p className="text-sm text-slate-400 mb-2">Dataset:</p>
                    <a 
                      href={challenge.workspace.datasetUrl}
                      className="text-violet-400 hover:underline font-mono text-sm"
                    >
                      {challenge.workspace.datasetUrl}
                    </a>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-slate-400 mb-2">Available Libraries:</p>
                    <div className="flex flex-wrap gap-2">
                      {challenge.workspace.libraries.map((lib: string, i: number) => (
                        <span key={i} className="px-3 py-1 bg-slate-800 rounded text-sm font-mono">
                          {lib}
                        </span>
                      ))}
                    </div>
                  </div>
                  <textarea
                    value={submission}
                    onChange={(e) => setSubmission(e.target.value)}
                    className="w-full h-64 bg-[#0b1120] border border-slate-700 rounded-lg p-4 font-mono text-sm text-slate-300 focus:outline-none focus:border-violet-500"
                    placeholder="# Write your Python code here..."
                  />
                </div>
              )}
            </motion.div>
          )}

          {/* Hints Tab */}
          {activeTab === 'hints' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-slate-300">
                      Using hints will reduce your points. Each hint costs points that will be deducted from your final score.
                    </p>
                  </div>
                </div>
              </div>

              {challenge.hints.map((hint: any, index: number) => (
                <div
                  key={index}
                  className="bg-[#111927] border border-slate-800 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Lightbulb className="w-5 h-5 text-amber-400" />
                      <h3 className="font-bold">Hint {index + 1}</h3>
                    </div>
                    <span className="text-sm text-amber-400">-{hint.cost} points</span>
                  </div>
                  
                  {hintsUsed.includes(index) ? (
                    <p className="text-slate-300">{hint.hint}</p>
                  ) : (
                    <button
                      onClick={() => unlockHint(index)}
                      className="px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-amber-400 transition-colors"
                    >
                      Unlock Hint (-{hint.cost} points)
                    </button>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Submit Section */}
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Submit Solution</h3>
            
            <button
              onClick={handleSubmit}
              disabled={isEvaluating || !submission.trim()}
              className="w-full px-4 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              {isEvaluating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Evaluating...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit for Evaluation
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 mt-3">
              Your solution will be evaluated by AI based on {challenge.submissionType === 'code' ? 'correctness, efficiency, and completeness' : 'domain-specific criteria'}.
            </p>
          </div>

          {/* Evaluation Result */}
          {evaluationResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`border-2 rounded-xl p-6 ${
                evaluationResult.passed
                  ? 'bg-green-500/10 border-green-500'
                  : 'bg-red-500/10 border-red-500'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                {evaluationResult.passed ? (
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-400" />
                )}
                <div>
                  <h3 className="font-bold text-lg">
                    {evaluationResult.passed ? 'Challenge Completed!' : 'Not Quite There'}
                  </h3>
                  <p className="text-sm text-slate-400">Score: {evaluationResult.score}/100</p>
                </div>
              </div>

              <p className="text-slate-300 mb-4">{evaluationResult.feedback}</p>

              <div className="space-y-2 mb-4">
                {Object.entries(evaluationResult.details).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-slate-300">{value}</span>
                  </div>
                ))}
              </div>

              {evaluationResult.passed && (
                <div className="pt-4 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Points Earned:</span>
                    <span className="text-2xl font-bold text-amber-400 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      +{evaluationResult.pointsEarned}
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Challenge Stats */}
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-bold mb-4">Challenge Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm">Max Points:</span>
                <span className="font-bold">{challenge.points}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm">Hints Used:</span>
                <span className="font-bold">{hintsUsed.length}/{challenge.hints.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 text-sm">Points Deducted:</span>
                <span className="font-bold text-amber-400">
                  -{hintsUsed.reduce((sum, i) => sum + challenge.hints[i].cost, 0)}
                </span>
              </div>
              <div className="pt-3 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Potential Points:</span>
                  <span className="font-bold text-violet-400">
                    {challenge.points - hintsUsed.reduce((sum, i) => sum + challenge.hints[i].cost, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
