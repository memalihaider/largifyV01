'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Code, 
  Brain, 
  TrendingUp, 
  Megaphone, 
  Package,
  Trophy,
  Star,
  Zap,
  Target,
  Clock,
  Award,
  ChevronRight,
  Info,
  Coins
} from 'lucide-react'
import { COIN_COSTS } from '@/lib/coin-costs'
import { InsufficientCoinsModal } from '@/components/ui/insufficient-coins-modal'

const domains = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Web security, network defense, cryptography & ethical hacking',
    subDomains: ['Web Security', 'Network Security', 'Cryptography', 'Forensics', 'Malware Analysis'],
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    challenges: 24,
    avgTime: '45 min',
    difficulty: 'Intermediate'
  },
  {
    id: 'development',
    name: 'Development',
    icon: Code,
    description: 'Full-stack challenges, debugging missions & code optimization',
    subDomains: ['Frontend', 'Backend', 'Mobile', 'DevOps', 'Databases'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    challenges: 32,
    avgTime: '60 min',
    difficulty: 'Mixed'
  },
  {
    id: 'ai-data',
    name: 'AI & Data Science',
    icon: Brain,
    description: 'ML models, data analysis, prompt engineering & AI applications',
    subDomains: ['Machine Learning', 'Data Analysis', 'Prompt Engineering', 'Computer Vision', 'NLP'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    challenges: 28,
    avgTime: '75 min',
    difficulty: 'Advanced'
  },
  {
    id: 'business-startup',
    name: 'Business & Startup',
    icon: TrendingUp,
    description: 'Pitch decks, business models, market analysis & investor pitches',
    subDomains: ['Business Model Canvas', 'Market Research', 'Financial Modeling', 'Pitch Preparation', 'Fundraising'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    challenges: 20,
    avgTime: '90 min',
    difficulty: 'Beginner'
  },
  {
    id: 'marketing-growth',
    name: 'Marketing & Growth',
    icon: Megaphone,
    description: 'Campaign strategies, growth hacking, analytics & customer acquisition',
    subDomains: ['Digital Marketing', 'Growth Hacking', 'Analytics', 'Content Strategy', 'SEO/SEM'],
    color: 'from-yellow-500 to-amber-500',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    challenges: 26,
    avgTime: '50 min',
    difficulty: 'Beginner'
  },
  {
    id: 'product-operations',
    name: 'Product & Operations',
    icon: Package,
    description: 'Product design, PRDs, user research & operational challenges',
    subDomains: ['Product Strategy', 'UX Research', 'PRD Writing', 'Operations', 'Supply Chain'],
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    challenges: 22,
    avgTime: '65 min',
    difficulty: 'Intermediate'
  }
]

export default function CTFHomePage() {
  const router = useRouter()
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [currentCoins] = useState(450) // Mock coin balance
  const [insufficientCoinsModal, setInsufficientCoinsModal] = useState({
    isOpen: false,
    requiredCoins: 0,
    featureName: ''
  })

  // Mock user stats
  const userStats = {
    totalCompleted: 12,
    currentRank: 'Bronze III',
    points: 1450,
    streak: 5
  }

  const handleDomainClick = (domainName: string) => {
    // CTF rounds cost coins
    const cost = COIN_COSTS.ctf.ctfRound;
    if (currentCoins < cost) {
      setInsufficientCoinsModal({
        isOpen: true,
        requiredCoins: cost,
        featureName: `${domainName} CTF Round`
      });
      return;
    }
    router.push(`/student/ctf/${domainName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold heading-gradient">Largify CTF</h1>
            <p className="text-white/80">Challenge The Field - Universal Skill Validation Engine</p>
          </div>
        </div>
      </motion.div>

      {/* User Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-4 gap-4 mb-8"
      >
        <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span className="text-slate-400 text-sm">Current Rank</span>
          </div>
          <p className="text-2xl font-bold text-amber-400">{userStats.currentRank}</p>
        </div>
        <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-4 h-4 text-violet-400" />
            <span className="text-slate-400 text-sm">Total Points</span>
          </div>
          <p className="text-2xl font-bold">{userStats.points.toLocaleString()}</p>
        </div>
        <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-green-400" />
            <span className="text-slate-400 text-sm">Completed</span>
          </div>
          <p className="text-2xl font-bold">{userStats.totalCompleted}</p>
        </div>
        <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-4 h-4 text-orange-400" />
            <span className="text-slate-400 text-sm">Day Streak</span>
          </div>
          <p className="text-2xl font-bold">{userStats.streak} days</p>
        </div>
      </motion.div>

      {/* How CTF Works */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-6 mb-8"
      >
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-violet-500/20">
            <Info className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">How Largify CTF Works</h2>
            <p className="text-slate-300 mb-4">
              CTF (Challenge The Field) is a universal skill validation platform where you solve real-world challenges 
              across multiple domains. Each challenge is evaluated by AI based on domain-specific criteria.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#0b1120] rounded-lg p-4 border border-slate-800">
                <div className="text-violet-400 font-bold mb-1">1. Choose Domain</div>
                <p className="text-sm text-slate-400">Select from 6 professional domains</p>
              </div>
              <div className="bg-[#0b1120] rounded-lg p-4 border border-slate-800">
                <div className="text-violet-400 font-bold mb-1">2. Solve Challenge</div>
                <p className="text-sm text-slate-400">Complete tasks within time limits</p>
              </div>
              <div className="bg-[#0b1120] rounded-lg p-4 border border-slate-800">
                <div className="text-violet-400 font-bold mb-1">3. Get Ranked</div>
                <p className="text-sm text-slate-400">Earn points and climb leaderboards</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Difficulty Filter */}
      <div className="flex gap-3 mb-6">
        {['all', 'beginner', 'intermediate', 'advanced'].map((difficulty) => (
          <button
            key={difficulty}
            onClick={() => setSelectedDifficulty(difficulty)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedDifficulty === difficulty
                ? 'bg-violet-500 text-white'
                : 'bg-[#111927] text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </button>
        ))}
      </div>

      {/* Domains Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains
          .filter(domain => 
            selectedDifficulty === 'all' || 
            domain.difficulty.toLowerCase() === selectedDifficulty ||
            (selectedDifficulty === 'mixed' && domain.difficulty === 'Mixed')
          )
          .map((domain, index) => {
            const Icon = domain.icon
            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => router.push(`/student/ctf/${domain.id}`)}
                className={`bg-[#111927] border ${domain.borderColor} rounded-xl p-6 cursor-pointer hover:scale-[1.02] transition-all group`}
              >
                {/* Domain Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${domain.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
                </div>

                {/* Domain Info */}
                <h3 className="text-xl font-bold mb-2">{domain.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{domain.description}</p>

                {/* Sub-domains */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {domain.subDomains.slice(0, 3).map((sub, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded ${domain.bgColor} text-slate-300 border ${domain.borderColor}`}
                    >
                      {sub}
                    </span>
                  ))}
                  {domain.subDomains.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-400">
                      +{domain.subDomains.length - 3} more
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800 mb-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Target className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-400">{domain.challenges} challenges</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-400">{domain.avgTime}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded ${domain.bgColor} border ${domain.borderColor}`}>
                    {domain.difficulty}
                  </span>
                </div>

                {/* Coin Cost */}
                <div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-semibold text-amber-400">{COIN_COSTS.ctf.ctfRound} coins</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDomainClick(domain.name);
                    }}
                    className={`text-xs px-3 py-1 rounded font-medium transition-colors ${
                      currentCoins >= COIN_COSTS.ctf.ctfRound
                        ? 'bg-violet-500 hover:bg-violet-600 text-white'
                        : 'bg-red-500/20 text-red-400 cursor-not-allowed'
                    }`}
                  >
                    {currentCoins >= COIN_COSTS.ctf.ctfRound ? 'Enter' : 'Low Coins'}
                  </button>
                </div>
              </motion.div>
            )
          })}
      </div>

      {/* Certification Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-xl p-6"
      >
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-amber-500/20">
            <Award className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Earn Domain Certifications</h3>
            <p className="text-slate-300 mb-3">
              Complete challenges to earn points and unlock certifications in each domain. 
              Certifications are issued at Bronze, Silver, Gold, and Platinum levels.
            </p>
            <div className="flex gap-4">
              <div className="text-sm">
                <span className="text-slate-400">Bronze:</span>
                <span className="ml-2 font-bold text-amber-700">500+ points</span>
              </div>
              <div className="text-sm">
                <span className="text-slate-400">Silver:</span>
                <span className="ml-2 font-bold text-slate-400">1500+ points</span>
              </div>
              <div className="text-sm">
                <span className="text-slate-400">Gold:</span>
                <span className="ml-2 font-bold text-amber-400">3000+ points</span>
              </div>
              <div className="text-sm">
                <span className="text-slate-400">Platinum:</span>
                <span className="ml-2 font-bold text-cyan-400">5000+ points</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Insufficient Coins Modal */}
      <InsufficientCoinsModal
        isOpen={insufficientCoinsModal.isOpen}
        onClose={() => setInsufficientCoinsModal({ ...insufficientCoinsModal, isOpen: false })}
        requiredCoins={insufficientCoinsModal.requiredCoins}
        currentCoins={currentCoins}
        featureName={insufficientCoinsModal.featureName}
        coinsShortage={Math.max(0, insufficientCoinsModal.requiredCoins - currentCoins)}
      />
    </div>
  )
}
