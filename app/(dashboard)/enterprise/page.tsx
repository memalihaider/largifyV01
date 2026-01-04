'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Building2,
  Users,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Trophy,
  BarChart3,
  Clock,
  CheckCircle2,
  Lightbulb,
  GitBranch,
  AlertTriangle,
  Rocket,
  LineChart,
  ChevronRight,
  Play,
  FileText,
  Award,
  Globe
} from 'lucide-react'

const modules = [
  {
    id: 'baseline',
    number: '01',
    title: 'Enterprise Skill Baseline Assessment',
    subtitle: 'Measure Reality Before Training',
    description: 'Team members enter domain-specific CTFs with no prior training. Timed challenges reveal true capabilities across business and technical scenarios.',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    features: [
      'Team skill heatmap',
      'Strength & weakness matrix',
      'Risk area identification',
      'Capability scoring',
      'Baseline benchmark'
    ],
    output: 'Replaces guesswork with data-driven insights'
  },
  {
    id: 'role-based',
    number: '02',
    title: 'Role-Based Learning & CTF Tracks',
    subtitle: 'Training That Matches Your Role',
    description: 'Product managers, developers, marketing teams, and leadership each get role-specific training with progressive challenges.',
    icon: Users,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    features: [
      'Product Managers → Product & Ops CTF',
      'Developers → Dev + Security CTF',
      'Marketing → Growth & Analytics CTF',
      'Leadership → Strategy & Decision CTF',
      'Custom role tracks'
    ],
    output: 'Role-specific skill development'
  },
  {
    id: 'simulations',
    number: '03',
    title: 'Innovation & Crisis Simulations',
    subtitle: 'Where Enterprises See Value',
    description: 'Product launches, security breaches, scaling bottlenecks, revenue declines. Teams must analyze, decide, act, and defend decisions under pressure.',
    icon: AlertTriangle,
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    features: [
      'Product launch failure scenarios',
      'Security breach response',
      'Scaling bottleneck resolution',
      'Revenue decline turnaround',
      'Regulatory pressure handling'
    ],
    output: 'Builds real innovation muscle'
  },
  {
    id: 'team-ctf',
    number: '04',
    title: 'Team-Based CTF (Cross-Functional)',
    subtitle: 'Innovation Never Happens Alone',
    description: 'Mixed roles tackle shared objectives with conflicting constraints under time pressure. Dev secures, marketing communicates, business adjusts, ops stabilizes.',
    icon: GitBranch,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    features: [
      'Cross-functional collaboration',
      'Shared objectives',
      'Conflicting constraints',
      'Time pressure scenarios',
      'Real-world coordination'
    ],
    output: 'Trains collaboration at scale'
  },
  {
    id: 'analytics',
    number: '05',
    title: 'Performance Analytics & ROI',
    subtitle: 'Enterprises Need Numbers',
    description: 'Track decision accuracy, speed improvement, risk reduction, skill growth, and team coordination. Before vs after comparison with training ROI dashboard.',
    icon: BarChart3,
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    features: [
      'Decision accuracy metrics',
      'Speed improvement tracking',
      'Risk reduction analysis',
      'Skill growth curves',
      'Team coordination scores'
    ],
    output: 'What HR and leadership care about'
  }
]

const targetSegments = [
  { name: 'Tech Companies', icon: Rocket },
  { name: 'Banks & Fintechs', icon: Building2 },
  { name: 'Telcos', icon: Globe },
  { name: 'Manufacturing', icon: Zap },
  { name: 'Consulting', icon: Users },
  { name: 'Government', icon: Shield },
  { name: 'SMEs', icon: TrendingUp }
]

const enterpriseProblems = [
  { problem: 'Teams lack real problem-solving practice', solution: 'Real scenarios, not hypotheticals' },
  { problem: 'Innovation teams are siloed', solution: 'Cross-functional team challenges' },
  { problem: 'Training ROI is unclear', solution: 'Measurable improvement tracking' },
  { problem: 'Skills decay quickly', solution: 'Continuous challenge-based practice' },
  { problem: 'Hiring new talent is expensive', solution: 'Upskill existing teams efficiently' }
]

const aiCapabilities = [
  {
    title: 'AI Coach',
    description: 'Observes team behavior, flags bad habits, suggests frameworks',
    icon: Lightbulb
  },
  {
    title: 'AI Evaluator',
    description: 'Scores decisions, detects shortcuts, ensures fairness',
    icon: Trophy
  },
  {
    title: 'AI Insight Engine',
    description: 'Converts activity into insights, highlights future risks',
    icon: LineChart
  }
]

export default function EnterprisePlatformPage() {
  const router = useRouter()
  const [activeModule, setActiveModule] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0b1120] via-slate-900 to-[#0b1120] border-b border-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-8 py-16"
        >
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-400 font-medium">For Enterprises</span>
              </div>
              
              <h1 className="text-5xl font-bold mb-4 leading-tight heading-gradient">
                Upskill Your Innovation Team
              </h1>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                Challenge-based learning that builds capability under pressure, not content consumption.
              </p>
              
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Explore Platform
                </button>
                <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium transition-all">
                  Request Demo
                </button>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Pakistan-first</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Globally usable</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>ROI-focused</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Decision Accuracy', value: '+42%', icon: Target },
                  { label: 'Speed Improvement', value: '3.2x', icon: Zap },
                  { label: 'Risk Reduction', value: '-67%', icon: Shield },
                  { label: 'Team Coordination', value: '+89%', icon: Users }
                ].map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="bg-[#111927] border border-slate-800 rounded-xl p-6"
                    >
                      <Icon className="w-6 h-6 text-violet-400 mb-3" />
                      <div className="text-3xl font-bold mb-1">{stat.value}</div>
                      <div className="text-sm text-slate-400">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Problem-Solution Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Enterprise Problems We Solve</h2>
            <p className="text-slate-400 text-lg">Training on real scenarios, not hypotheticals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseProblems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-[#111927] border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-slate-300 font-medium">{item.problem}</p>
                </div>
                <div className="flex items-start gap-3 pl-8">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="text-slate-400 text-sm">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Target Segments */}
      <div className="bg-gradient-to-br from-slate-900/50 to-transparent py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Built for Every Innovation Team</h2>
            <p className="text-slate-400 text-lg">Pakistan-first, globally usable</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {targetSegments.map((segment, i) => {
              const Icon = segment.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  className="flex items-center gap-3 px-6 py-4 bg-[#111927] border border-slate-800 rounded-xl hover:border-violet-500/50 transition-all"
                >
                  <Icon className="w-5 h-5 text-violet-400" />
                  <span className="font-medium">{segment.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div id="modules" className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Five Core Modules</h2>
          <p className="text-slate-400 text-lg">Complete capability development system</p>
        </div>

        <div className="space-y-6">
          {modules.map((module, index) => {
            const Icon = module.icon
            const isActive = activeModule === module.id
            
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                onMouseEnter={() => setActiveModule(module.id)}
                onMouseLeave={() => setActiveModule(null)}
                className={`bg-[#111927] border ${isActive ? module.borderColor : 'border-slate-800'} rounded-xl overflow-hidden transition-all cursor-pointer`}
              >
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Module Number */}
                    <div className={`text-6xl font-bold bg-gradient-to-br ${module.color} bg-clip-text text-transparent`}>
                      {module.number}
                    </div>

                    {/* Module Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg ${module.bgColor}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-2xl font-bold">{module.title}</h3>
                          </div>
                          <p className="text-violet-400 font-medium mb-3">{module.subtitle}</p>
                          <p className="text-slate-300 leading-relaxed mb-4">{module.description}</p>
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {module.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Output */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 ${module.bgColor} border ${module.borderColor} rounded-lg`}>
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-medium">{module.output}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* AI Agent Section */}
      <div className="bg-gradient-to-br from-violet-500/5 to-purple-500/5 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI as Your Silent Senior Consultant</h2>
            <p className="text-slate-400 text-lg">Advanced AI agents power every interaction</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {aiCapabilities.map((capability, i) => {
              const Icon = capability.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="bg-[#111927] border border-slate-800 rounded-xl p-8 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-slate-400">{capability.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Customization & Pricing */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 gap-8">
          {/* Customization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-[#111927] border border-slate-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Enterprise Customization</h3>
            <div className="space-y-4">
              {[
                'Upload internal cases',
                'Mask sensitive data',
                'Define custom KPIs',
                'Set difficulty levels',
                'Control access & permissions',
                'White-label options'
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Flexible Pricing</h3>
            <div className="space-y-4 mb-6">
              {[
                'Per team pricing',
                'Quarterly engagements',
                'Custom simulations',
                'Annual contracts',
                'Affordable for Pakistan',
                'Scalable globally'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium transition-all">
              Request Custom Quote
            </button>
          </motion.div>
        </div>
      </div>

      {/* Certification */}
      <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-start gap-8">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500">
              <Award className="w-12 h-12 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Certification & Recognition</h2>
              <p className="text-slate-300 mb-6">
                Internal and external recognition that supports promotions and performance reviews.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#111927] border border-slate-800 rounded-lg p-4">
                  <Trophy className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="font-bold mb-1">Team Readiness Badges</div>
                  <p className="text-sm text-slate-400">Validated capabilities</p>
                </div>
                <div className="bg-[#111927] border border-slate-800 rounded-lg p-4">
                  <BarChart3 className="w-6 h-6 text-violet-400 mb-2" />
                  <div className="font-bold mb-1">Innovation Scores</div>
                  <p className="text-sm text-slate-400">Measurable improvement</p>
                </div>
                <div className="bg-[#111927] border border-slate-800 rounded-lg p-4">
                  <FileText className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="font-bold mb-1">Leadership Dashboards</div>
                  <p className="text-sm text-slate-400">Executive insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Largify */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Enterprises Choose Largify</h2>
          <p className="text-xl text-slate-400">No slides. No lectures. No theater.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: 'Training becomes measurable', icon: BarChart3 },
            { title: 'Teams improve together', icon: Users },
            { title: 'Innovation becomes a process', icon: Lightbulb },
            { title: 'Skills are proven, not claimed', icon: Trophy },
            { title: 'Real scenarios, not slides', icon: Target },
            { title: 'Capability under pressure', icon: Zap }
          ].map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.05 }}
                className="bg-[#111927] border border-slate-800 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-500/10 mb-4">
                  <Icon className="w-6 h-6 text-violet-400" />
                </div>
                <p className="font-medium text-slate-200">{reason.title}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-violet-500/10 via-purple-500/10 to-violet-500/10 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-8 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Innovation is Not an Idea Problem</h2>
          <p className="text-2xl text-slate-300 mb-2">It is a capability problem.</p>
          <p className="text-xl text-slate-400 mb-8">
            Largify does not teach innovation. <span className="text-violet-400 font-bold">It builds it.</span>
          </p>
          
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium text-lg transition-all">
              Schedule Demo
            </button>
            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-medium text-lg transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Helper component for X icon
function XCircle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M15 9l-6 6M9 9l6 6"/>
    </svg>
  )
}
