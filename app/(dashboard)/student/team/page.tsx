'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users,
  UserPlus,
  Crown,
  Trophy,
  Target,
  Zap,
  Clock,
  Star,
  TrendingUp,
  Award,
  Send,
  Copy,
  Check,
  MoreVertical,
  Mail,
  Settings,
  LogOut,
  Shield,
  Code,
  Brain,
  Rocket,
  MessageSquare,
  Calendar,
  BarChart3,
  CheckCircle2
} from 'lucide-react'

interface TeamMember {
  id: string
  name: string
  role: 'leader' | 'member'
  avatar: string
  joinedDate: string
  stats: {
    challengesCompleted: number
    points: number
    rank: string
    domains: string[]
  }
  status: 'online' | 'offline'
  lastActive: string
}

interface TeamChallenge {
  id: string
  title: string
  domain: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  points: number
  timeLimit: number
  membersRequired: number
  status: 'available' | 'in-progress' | 'completed'
  deadline?: string
  progress?: number
}

export default function TeamPage() {
  const [inviteLink, setInviteLink] = useState('https://largify.com/join/team-abc123')
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'challenges' | 'members' | 'activity'>('overview')

  // Mock team data
  const teamInfo = {
    name: 'Innovation Ninjas',
    id: 'team-001',
    createdDate: '15 Dec 2025',
    memberCount: 4,
    maxMembers: 6,
    totalPoints: 5240,
    rank: 'Gold II',
    completedChallenges: 23,
    streak: 7
  }

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'You (Alex)',
      role: 'leader',
      avatar: 'AX',
      joinedDate: '15 Dec 2025',
      stats: {
        challengesCompleted: 12,
        points: 2100,
        rank: 'Silver III',
        domains: ['Development', 'AI & Data']
      },
      status: 'online',
      lastActive: 'Now'
    },
    {
      id: '2',
      name: 'Sarah Chen',
      role: 'member',
      avatar: 'SC',
      joinedDate: '16 Dec 2025',
      stats: {
        challengesCompleted: 8,
        points: 1450,
        rank: 'Bronze I',
        domains: ['Cybersecurity', 'Development']
      },
      status: 'online',
      lastActive: '5 min ago'
    },
    {
      id: '3',
      name: 'Mike Rodriguez',
      role: 'member',
      avatar: 'MR',
      joinedDate: '17 Dec 2025',
      stats: {
        challengesCompleted: 6,
        points: 980,
        rank: 'Bronze III',
        domains: ['Marketing', 'Business']
      },
      status: 'offline',
      lastActive: '2 hours ago'
    },
    {
      id: '4',
      name: 'Priya Sharma',
      role: 'member',
      avatar: 'PS',
      joinedDate: '18 Dec 2025',
      stats: {
        challengesCompleted: 7,
        points: 710,
        rank: 'Bronze II',
        domains: ['Product & Ops', 'AI & Data']
      },
      status: 'offline',
      lastActive: '1 day ago'
    }
  ]

  const teamChallenges: TeamChallenge[] = [
    {
      id: 'tc-1',
      title: 'Cross-Functional Product Launch',
      domain: 'Team Challenge',
      difficulty: 'Advanced',
      points: 500,
      timeLimit: 180,
      membersRequired: 4,
      status: 'in-progress',
      deadline: '5 Jan 2026',
      progress: 65
    },
    {
      id: 'tc-2',
      title: 'Security Breach Response',
      domain: 'Cybersecurity',
      difficulty: 'Intermediate',
      points: 350,
      timeLimit: 120,
      membersRequired: 3,
      status: 'available',
      deadline: '8 Jan 2026'
    },
    {
      id: 'tc-3',
      title: 'Growth Hacking Sprint',
      domain: 'Marketing',
      difficulty: 'Intermediate',
      points: 300,
      timeLimit: 90,
      membersRequired: 2,
      status: 'available'
    },
    {
      id: 'tc-4',
      title: 'AI Model Deployment',
      domain: 'AI & Data',
      difficulty: 'Advanced',
      points: 450,
      timeLimit: 150,
      membersRequired: 3,
      status: 'completed',
      progress: 100
    }
  ]

  const recentActivity = [
    { user: 'Sarah Chen', action: 'completed', target: 'SQL Injection Bypass', points: 100, time: '10 min ago' },
    { user: 'You', action: 'unlocked', target: 'Team Challenge: Product Launch', points: 0, time: '1 hour ago' },
    { user: 'Mike Rodriguez', action: 'completed', target: 'Marketing Strategy Challenge', points: 180, time: '3 hours ago' },
    { user: 'Priya Sharma', action: 'joined', target: 'team', points: 0, time: '1 day ago' }
  ]

  const copyInviteLink = () => {
    navigator.clipboard.writeText(inviteLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">{teamInfo.name}</h1>
                <p className="text-slate-400">Created {teamInfo.createdDate}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-lg text-violet-400 transition-all flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg transition-all flex items-center gap-2">
              <UserPlus className="w-4 h-4" />
              Invite Members
            </button>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-violet-400" />
              <span className="text-slate-400 text-sm">Members</span>
            </div>
            <p className="text-2xl font-bold">{teamInfo.memberCount}/{teamInfo.maxMembers}</p>
          </div>
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span className="text-slate-400 text-sm">Team Rank</span>
            </div>
            <p className="text-2xl font-bold text-amber-400">{teamInfo.rank}</p>
          </div>
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-violet-400" />
              <span className="text-slate-400 text-sm">Total Points</span>
            </div>
            <p className="text-2xl font-bold">{teamInfo.totalPoints.toLocaleString()}</p>
          </div>
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-green-400" />
              <span className="text-slate-400 text-sm">Completed</span>
            </div>
            <p className="text-2xl font-bold">{teamInfo.completedChallenges}</p>
          </div>
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-slate-400 text-sm">Team Streak</span>
            </div>
            <p className="text-2xl font-bold">{teamInfo.streak} days</p>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-800 mb-8">
        {(['overview', 'challenges', 'members', 'activity'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 font-medium transition-colors capitalize ${
              activeTab === tab
                ? 'text-white border-b-2 border-violet-500'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-3 gap-6">
          {/* Team Progress */}
          <div className="col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111927] border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-4">Team Progress Overview</h3>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-slate-400 text-sm mb-1">This Week</div>
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-xs text-green-400">+3 from last week</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-slate-400 text-sm mb-1">This Month</div>
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-xs text-green-400">+12 from last month</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-slate-400 text-sm mb-1">Avg Score</div>
                  <div className="text-2xl font-bold">87%</div>
                  <div className="text-xs text-violet-400">Top 15%</div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Cybersecurity Challenges</span>
                    <span className="font-medium">8/12</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-500 to-orange-500" style={{ width: '67%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Development Challenges</span>
                    <span className="font-medium">6/10</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Business Challenges</span>
                    <span className="font-medium">5/8</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{ width: '62%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">AI & Data Challenges</span>
                    <span className="font-medium">4/9</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: '44%' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Active Team Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#111927] border border-slate-800 rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Active Team Challenges</h3>
                <button className="text-violet-400 hover:text-violet-300 text-sm">View All</button>
              </div>

              <div className="space-y-3">
                {teamChallenges.filter(c => c.status === 'in-progress').map((challenge) => (
                  <div
                    key={challenge.id}
                    className="bg-slate-900/50 border border-slate-800 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold mb-1">{challenge.title}</h4>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs rounded border ${getDifficultyColor(challenge.difficulty)}`}>
                            {challenge.difficulty}
                          </span>
                          <span className="text-xs text-slate-400">{challenge.domain}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-amber-400 font-bold">{challenge.points} pts</div>
                        <div className="text-xs text-slate-500">Due {challenge.deadline}</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Progress</span>
                        <span className="font-medium">{challenge.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-600" 
                          style={{ width: `${challenge.progress}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Invite Members */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-violet-400" />
                Invite Team Members
              </h3>
              <p className="text-sm text-slate-300 mb-4">
                Share this link with teammates to join your team
              </p>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={inviteLink}
                  readOnly
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-300"
                />
                <button
                  onClick={copyInviteLink}
                  className="px-4 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg transition-all"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="text-xs text-slate-500">
                {teamInfo.maxMembers - teamInfo.memberCount} slots remaining
              </div>
            </motion.div>

            {/* Top Performers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#111927] border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                Top Performers
              </h3>
              <div className="space-y-3">
                {teamMembers
                  .sort((a, b) => b.stats.points - a.stats.points)
                  .slice(0, 3)
                  .map((member, index) => (
                    <div key={member.id} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        index === 0 ? 'bg-amber-500 text-white' :
                        index === 1 ? 'bg-slate-400 text-white' :
                        'bg-amber-700 text-white'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                        {member.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{member.name}</div>
                        <div className="text-xs text-slate-400">{member.stats.points} points</div>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#111927] border border-slate-800 rounded-xl p-6"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-violet-400" />
                Team Achievements
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">First Victory</div>
                    <div className="text-xs text-slate-400">Complete first challenge</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Team Player</div>
                    <div className="text-xs text-slate-400">4 members joined</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">On Fire</div>
                    <div className="text-xs text-slate-400">7-day streak</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Challenges Tab */}
      {activeTab === 'challenges' && (
        <div className="space-y-4">
          {teamChallenges.map((challenge, index) => (
            <motion.div
              key={challenge.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#111927] border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">{challenge.title}</h3>
                    <span className={`px-2 py-1 text-xs rounded border ${getDifficultyColor(challenge.difficulty)}`}>
                      {challenge.difficulty}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded ${
                      challenge.status === 'completed' ? 'bg-green-500/10 text-green-400 border border-green-500/30' :
                      challenge.status === 'in-progress' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                      'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {challenge.status === 'in-progress' ? 'In Progress' : 
                       challenge.status === 'completed' ? 'Completed' : 'Available'}
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-slate-400 mb-4">
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
                      <span>{challenge.membersRequired} members required</span>
                    </div>
                    {challenge.deadline && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Due {challenge.deadline}</span>
                      </div>
                    )}
                  </div>

                  {challenge.progress !== undefined && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Progress</span>
                        <span className="font-medium">{challenge.progress}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            challenge.status === 'completed' 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                              : 'bg-gradient-to-r from-violet-500 to-purple-600'
                          }`}
                          style={{ width: `${challenge.progress}%` }} 
                        />
                      </div>
                    </div>
                  )}
                </div>

                <button className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  challenge.status === 'completed'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                    : challenge.status === 'in-progress'
                    ? 'bg-violet-500 hover:bg-violet-600 text-white'
                    : 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white'
                }`}>
                  {challenge.status === 'completed' ? 'View Results' :
                   challenge.status === 'in-progress' ? 'Continue' : 'Start Challenge'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Members Tab */}
      {activeTab === 'members' && (
        <div className="grid grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#111927] border border-slate-800 rounded-xl p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center font-bold text-xl">
                      {member.avatar}
                    </div>
                    {member.status === 'online' && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 border-2 border-[#111927] rounded-full" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      {member.role === 'leader' && (
                        <Crown className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                    <p className="text-sm text-slate-400">Joined {member.joinedDate}</p>
                    <p className="text-xs text-slate-500">{member.lastActive}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-slate-800 rounded-lg transition-all">
                  <MoreVertical className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">{member.stats.challengesCompleted}</div>
                  <div className="text-xs text-slate-400">Challenges</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">{member.stats.points}</div>
                  <div className="text-xs text-slate-400">Points</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <div className="text-sm font-bold text-amber-400">{member.stats.rank}</div>
                  <div className="text-xs text-slate-400">Rank</div>
                </div>
              </div>

              <div>
                <div className="text-sm text-slate-400 mb-2">Domains</div>
                <div className="flex flex-wrap gap-2">
                  {member.stats.domains.map((domain, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-violet-500/10 text-violet-400 border border-violet-500/30 rounded"
                    >
                      {domain}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Activity Tab */}
      {activeTab === 'activity' && (
        <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Recent Team Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 pb-4 border-b border-slate-800 last:border-0"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  {activity.action === 'completed' ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : activity.action === 'unlocked' ? (
                    <Rocket className="w-5 h-5" />
                  ) : (
                    <UserPlus className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-slate-300">
                    <span className="font-bold text-white">{activity.user}</span>
                    {' '}{activity.action}{' '}
                    <span className="text-violet-400">{activity.target}</span>
                  </p>
                  {activity.points > 0 && (
                    <p className="text-sm text-amber-400">+{activity.points} points</p>
                  )}
                  <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
