'use client'

import { useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Code, 
  Brain, 
  TrendingUp, 
  Megaphone, 
  Package,
  ChevronLeft,
  Trophy,
  Clock,
  Zap,
  Users,
  Star,
  Filter,
  TrendingUp as TrendIcon,
  Lock,
  CheckCircle2,
  Circle
} from 'lucide-react'

// Domain data structure
const domainsData: any = {
  cybersecurity: {
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    description: 'Test your security skills with real-world hacking challenges',
    subDomains: ['Web Security', 'Network Security', 'Cryptography', 'Forensics', 'Malware Analysis', 'Reverse Engineering'],
    challenges: [
      {
        id: 'cs-1',
        title: 'SQL Injection Bypass',
        description: 'Exploit a vulnerable login form to gain admin access',
        difficulty: 'Beginner',
        points: 100,
        timeLimit: 30,
        completions: 1247,
        subDomain: 'Web Security',
        status: 'completed'
      },
      {
        id: 'cs-2',
        title: 'XSS Filter Evasion',
        description: 'Bypass input sanitization to execute JavaScript',
        difficulty: 'Intermediate',
        points: 200,
        timeLimit: 45,
        completions: 823,
        subDomain: 'Web Security',
        status: 'in-progress'
      },
      {
        id: 'cs-3',
        title: 'JWT Token Manipulation',
        description: 'Forge authentication tokens to escalate privileges',
        difficulty: 'Advanced',
        points: 350,
        timeLimit: 60,
        completions: 421,
        subDomain: 'Web Security',
        status: 'available'
      },
      {
        id: 'cs-4',
        title: 'Network Packet Analysis',
        description: 'Analyze pcap files to discover hidden credentials',
        difficulty: 'Beginner',
        points: 120,
        timeLimit: 40,
        completions: 956,
        subDomain: 'Network Security',
        status: 'available'
      },
      {
        id: 'cs-5',
        title: 'Caesar Cipher Breaking',
        description: 'Decrypt encrypted messages using frequency analysis',
        difficulty: 'Beginner',
        points: 80,
        timeLimit: 25,
        completions: 1521,
        subDomain: 'Cryptography',
        status: 'available'
      },
      {
        id: 'cs-6',
        title: 'RSA Key Recovery',
        description: 'Exploit weak RSA implementation to recover private key',
        difficulty: 'Advanced',
        points: 400,
        timeLimit: 90,
        completions: 287,
        subDomain: 'Cryptography',
        status: 'locked'
      }
    ]
  },
  development: {
    name: 'Development',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    description: 'Build, debug, and optimize real-world applications',
    subDomains: ['Frontend', 'Backend', 'Mobile', 'DevOps', 'Databases', 'APIs'],
    challenges: [
      {
        id: 'dev-1',
        title: 'React Performance Optimization',
        description: 'Reduce bundle size and improve load time by 50%',
        difficulty: 'Intermediate',
        points: 250,
        timeLimit: 60,
        completions: 892,
        subDomain: 'Frontend',
        status: 'available'
      },
      {
        id: 'dev-2',
        title: 'REST API Design Challenge',
        description: 'Design a scalable API for an e-commerce platform',
        difficulty: 'Intermediate',
        points: 220,
        timeLimit: 75,
        completions: 745,
        subDomain: 'Backend',
        status: 'available'
      },
      {
        id: 'dev-3',
        title: 'Database Query Optimization',
        description: 'Optimize slow queries handling 1M+ records',
        difficulty: 'Advanced',
        points: 380,
        timeLimit: 90,
        completions: 423,
        subDomain: 'Databases',
        status: 'available'
      },
      {
        id: 'dev-4',
        title: 'CI/CD Pipeline Setup',
        description: 'Configure automated deployment with testing',
        difficulty: 'Intermediate',
        points: 280,
        timeLimit: 120,
        completions: 634,
        subDomain: 'DevOps',
        status: 'locked'
      }
    ]
  },
  'ai-data': {
    name: 'AI & Data Science',
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    description: 'Solve data problems with machine learning and AI',
    subDomains: ['Machine Learning', 'Data Analysis', 'Prompt Engineering', 'Computer Vision', 'NLP', 'Deep Learning'],
    challenges: [
      {
        id: 'ai-1',
        title: 'Customer Churn Prediction',
        description: 'Build ML model to predict customer churn (85%+ accuracy)',
        difficulty: 'Intermediate',
        points: 300,
        timeLimit: 120,
        completions: 567,
        subDomain: 'Machine Learning',
        status: 'available'
      },
      {
        id: 'ai-2',
        title: 'Image Classification Challenge',
        description: 'Train CNN to classify 10 object categories',
        difficulty: 'Advanced',
        points: 420,
        timeLimit: 150,
        completions: 341,
        subDomain: 'Computer Vision',
        status: 'available'
      },
      {
        id: 'ai-3',
        title: 'Prompt Engineering Mastery',
        description: 'Craft prompts to extract structured data from text',
        difficulty: 'Beginner',
        points: 150,
        timeLimit: 45,
        completions: 1089,
        subDomain: 'Prompt Engineering',
        status: 'available'
      }
    ]
  },
  'business-startup': {
    name: 'Business & Startup',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    description: 'Pitch ideas and solve business strategy challenges',
    subDomains: ['Business Model Canvas', 'Market Research', 'Financial Modeling', 'Pitch Preparation', 'Fundraising', 'Strategy'],
    challenges: [
      {
        id: 'biz-1',
        title: 'SaaS Business Model Canvas',
        description: 'Create BMC for a B2B SaaS product targeting SMBs',
        difficulty: 'Beginner',
        points: 180,
        timeLimit: 60,
        completions: 823,
        subDomain: 'Business Model Canvas',
        status: 'available'
      },
      {
        id: 'biz-2',
        title: 'Market Sizing Challenge',
        description: 'Calculate TAM, SAM, SOM for electric vehicle market',
        difficulty: 'Intermediate',
        points: 220,
        timeLimit: 75,
        completions: 612,
        subDomain: 'Market Research',
        status: 'available'
      },
      {
        id: 'biz-3',
        title: 'Investor Pitch Deck',
        description: 'Create 10-slide pitch deck for Series A funding',
        difficulty: 'Advanced',
        points: 350,
        timeLimit: 120,
        completions: 389,
        subDomain: 'Pitch Preparation',
        status: 'available'
      }
    ]
  },
  'marketing-growth': {
    name: 'Marketing & Growth',
    icon: Megaphone,
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    description: 'Drive growth with data-driven marketing strategies',
    subDomains: ['Digital Marketing', 'Growth Hacking', 'Analytics', 'Content Strategy', 'SEO/SEM', 'Social Media'],
    challenges: [
      {
        id: 'mkt-1',
        title: 'Growth Funnel Optimization',
        description: 'Improve conversion rate from 2% to 5%+',
        difficulty: 'Intermediate',
        points: 240,
        timeLimit: 90,
        completions: 734,
        subDomain: 'Growth Hacking',
        status: 'available'
      },
      {
        id: 'mkt-2',
        title: 'Content Marketing Strategy',
        description: 'Create 90-day content plan for SaaS startup',
        difficulty: 'Beginner',
        points: 160,
        timeLimit: 60,
        completions: 921,
        subDomain: 'Content Strategy',
        status: 'available'
      },
      {
        id: 'mkt-3',
        title: 'SEO Technical Audit',
        description: 'Identify and fix 20+ SEO issues on website',
        difficulty: 'Intermediate',
        points: 200,
        timeLimit: 75,
        completions: 567,
        subDomain: 'SEO/SEM',
        status: 'available'
      }
    ]
  },
  'product-operations': {
    name: 'Product & Operations',
    icon: Package,
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    description: 'Design products and optimize operations',
    subDomains: ['Product Strategy', 'UX Research', 'PRD Writing', 'Operations', 'Supply Chain', 'Product Analytics'],
    challenges: [
      {
        id: 'prod-1',
        title: 'PRD for Mobile App Feature',
        description: 'Write comprehensive PRD for payment integration',
        difficulty: 'Intermediate',
        points: 260,
        timeLimit: 90,
        completions: 645,
        subDomain: 'PRD Writing',
        status: 'available'
      },
      {
        id: 'prod-2',
        title: 'User Research Analysis',
        description: 'Analyze 50 user interviews to identify pain points',
        difficulty: 'Beginner',
        points: 140,
        timeLimit: 60,
        completions: 812,
        subDomain: 'UX Research',
        status: 'available'
      },
      {
        id: 'prod-3',
        title: 'Operations Efficiency Challenge',
        description: 'Reduce fulfillment time by 30% for e-commerce',
        difficulty: 'Advanced',
        points: 390,
        timeLimit: 120,
        completions: 298,
        subDomain: 'Operations',
        status: 'available'
      }
    ]
  }
}

export default function CTFDomainPage() {
  const router = useRouter()
  const params = useParams()
  const domainId = params.domain as string
  const domain = domainsData[domainId]

  const [selectedSubDomain, setSelectedSubDomain] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')

  if (!domain) {
    return <div>Domain not found</div>
  }

  const Icon = domain.icon

  // Filter challenges
  const filteredChallenges = domain.challenges.filter((challenge: any) => {
    const subDomainMatch = selectedSubDomain === 'all' || challenge.subDomain === selectedSubDomain
    const difficultyMatch = selectedDifficulty === 'all' || challenge.difficulty.toLowerCase() === selectedDifficulty
    return subDomainMatch && difficultyMatch
  })

  // Calculate user progress in this domain
  const completedChallenges = domain.challenges.filter((c: any) => c.status === 'completed').length
  const totalChallenges = domain.challenges.length
  const userPoints = domain.challenges
    .filter((c: any) => c.status === 'completed')
    .reduce((sum: number, c: any) => sum + c.points, 0)

  // Mock leaderboard
  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 2840, avatar: 'AC' },
    { rank: 2, name: 'Sarah Johnson', points: 2650, avatar: 'SJ' },
    { rank: 3, name: 'Mike Rodriguez', points: 2420, avatar: 'MR' },
    { rank: 12, name: 'You', points: userPoints, avatar: 'ME', isUser: true }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />
      case 'in-progress':
        return <Circle className="w-5 h-5 text-blue-400 animate-pulse" />
      case 'locked':
        return <Lock className="w-5 h-5 text-slate-600" />
      default:
        return <Circle className="w-5 h-5 text-slate-600" />
    }
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
        return 'text-slate-400 bg-slate-400/10 border-slate-400/30'
    }
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8">
      {/* Back Button */}
      <button
        onClick={() => router.push('/student/ctf')}
        className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to CTF Home
      </button>

      {/* Domain Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${domain.color}`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{domain.name}</h1>
              <p className="text-slate-400">{domain.description}</p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className={`${domain.bgColor} border ${domain.borderColor} rounded-xl p-4`}>
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-slate-400 text-sm">Your Points</span>
            </div>
            <p className="text-2xl font-bold">{userPoints}</p>
          </div>
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span className="text-slate-400 text-sm">Completed</span>
            </div>
            <p className="text-2xl font-bold">{completedChallenges}/{totalChallenges}</p>
          </div>
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <TrendIcon className="w-4 h-4 text-violet-400" />
              <span className="text-slate-400 text-sm">Your Rank</span>
            </div>
            <p className="text-2xl font-bold">#12</p>
          </div>
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-slate-400 text-sm">Avg Success</span>
            </div>
            <p className="text-2xl font-bold">78%</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="col-span-2">
          {/* Filters */}
          <div className="flex gap-4 mb-6">
            <div>
              <label className="text-slate-400 text-sm mb-2 block">Sub-Domain</label>
              <select
                value={selectedSubDomain}
                onChange={(e) => setSelectedSubDomain(e.target.value)}
                className="bg-[#111927] border border-slate-800 rounded-lg px-4 py-2 text-white"
              >
                <option value="all">All Sub-Domains</option>
                {domain.subDomains.map((sub: string) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-slate-400 text-sm mb-2 block">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-[#111927] border border-slate-800 rounded-lg px-4 py-2 text-white"
              >
                <option value="all">All Difficulties</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Challenges List */}
          <div className="space-y-4">
            {filteredChallenges.map((challenge: any, index: number) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  if (challenge.status !== 'locked') {
                    router.push(`/student/ctf/${domainId}/${challenge.id}`)
                  }
                }}
                className={`bg-[#111927] border border-slate-800 rounded-xl p-6 ${
                  challenge.status === 'locked' 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'cursor-pointer hover:border-slate-700'
                } transition-all group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="pt-1">
                      {getStatusIcon(challenge.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">{challenge.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded border ${getDifficultyColor(challenge.difficulty)}`}>
                          {challenge.difficulty}
                        </span>
                        <span className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-400">
                          {challenge.subDomain}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-3">{challenge.description}</p>
                      <div className="flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-400" />
                          <span>{challenge.points} points</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{challenge.timeLimit} min</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{challenge.completions.toLocaleString()} solved</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar - Leaderboard */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#111927] border border-slate-800 rounded-xl p-6 sticky top-8"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              Leaderboard
            </h3>
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    user.isUser 
                      ? 'bg-violet-500/20 border border-violet-500/30' 
                      : 'bg-slate-800/30'
                  }`}
                >
                  <div className={`text-sm font-bold w-6 ${
                    user.rank === 1 ? 'text-amber-400' :
                    user.rank === 2 ? 'text-slate-300' :
                    user.rank === 3 ? 'text-amber-700' :
                    'text-slate-500'
                  }`}>
                    #{user.rank}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xs font-bold">
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{user.name}</div>
                    <div className="text-xs text-slate-400">{user.points} pts</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
