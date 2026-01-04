'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  Check, 
  Gift, 
  Calendar,
  BookOpen,
  Users,
  Zap,
  Award,
  TrendingUp,
  Clock,
  AlertCircle,
  Coins,
  Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Reward {
  id: string;
  title: string;
  description: string;
  coins: number;
  icon: React.ReactNode;
  category: 'daily' | 'achievement' | 'learning' | 'social';
  frequency?: string;
  completed: boolean;
  progress?: number;
  maxProgress?: number;
}

interface RewardHistory {
  id: string;
  title: string;
  coins: number;
  earnedAt: Date;
  category: string;
}

export default function RewardsPage() {
  const router = useRouter();
  const [currentCoins] = useState(450); // Mock current coin balance
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'daily' | 'achievement' | 'learning' | 'social'>('all');
  const [totalEarned] = useState(2150); // Total coins earned in session
  const [rewardHistory] = useState<RewardHistory[]>([
    {
      id: '1',
      title: 'Daily Login Bonus',
      coins: 50,
      earnedAt: new Date('2024-01-15'),
      category: 'daily'
    },
    {
      id: '2',
      title: 'Course Completion - AI Fundamentals',
      coins: 100,
      earnedAt: new Date('2024-01-14'),
      category: 'learning'
    },
    {
      id: '3',
      title: 'Referral Bonus - John Doe',
      coins: 50,
      earnedAt: new Date('2024-01-12'),
      category: 'social'
    }
  ]);

  const rewards: Reward[] = [
    {
      id: '1',
      title: 'Daily Login Bonus',
      description: 'Log in every day to earn coins',
      coins: 50,
      icon: <Calendar className="w-6 h-6" />,
      category: 'daily',
      frequency: 'Daily',
      completed: true
    },
    {
      id: '2',
      title: 'Weekly Streak',
      description: 'Log in 7 days in a row',
      coins: 200,
      icon: <TrendingUp className="w-6 h-6" />,
      category: 'daily',
      frequency: 'Weekly',
      progress: 5,
      maxProgress: 7,
      completed: false
    },
    {
      id: '3',
      title: 'Complete a Course',
      description: 'Finish any full course to earn coins',
      coins: 100,
      icon: <BookOpen className="w-6 h-6" />,
      category: 'learning',
      progress: 3,
      maxProgress: 5,
      completed: false
    },
    {
      id: '4',
      title: 'Pass 3 Assessments',
      description: 'Successfully complete 3 skill assessments',
      coins: 75,
      icon: <Award className="w-6 h-6" />,
      category: 'achievement',
      progress: 2,
      maxProgress: 3,
      completed: false
    },
    {
      id: '5',
      title: 'CTF Challenge Winner',
      description: 'Complete a CTF challenge round',
      coins: 150,
      icon: <Zap className="w-6 h-6" />,
      category: 'achievement',
      completed: false
    },
    {
      id: '6',
      title: 'Refer a Friend',
      description: 'Invite 3 friends who complete onboarding',
      coins: 150,
      icon: <Users className="w-6 h-6" />,
      category: 'social',
      progress: 1,
      maxProgress: 3,
      completed: false
    },
    {
      id: '7',
      title: 'First Case Study',
      description: 'Complete your first case study project',
      coins: 50,
      icon: <Gift className="w-6 h-6" />,
      category: 'learning',
      completed: false
    },
    {
      id: '8',
      title: 'Certification Achieved',
      description: 'Earn an industry certification',
      coins: 200,
      icon: <Award className="w-6 h-6" />,
      category: 'achievement',
      completed: false
    }
  ];

  const filteredRewards = selectedCategory === 'all' 
    ? rewards 
    : rewards.filter(r => r.category === selectedCategory);

  const categoryStats = {
    daily: rewards.filter(r => r.category === 'daily').length,
    achievement: rewards.filter(r => r.category === 'achievement').length,
    learning: rewards.filter(r => r.category === 'learning').length,
    social: rewards.filter(r => r.category === 'social').length,
  };

  const categories = [
    { id: 'all', label: 'All Rewards', count: rewards.length },
    { id: 'daily', label: 'Daily Tasks', count: categoryStats.daily, icon: <Calendar className="w-4 h-4" /> },
    { id: 'learning', label: 'Learning Goals', count: categoryStats.learning, icon: <BookOpen className="w-4 h-4" /> },
    { id: 'achievement', label: 'Achievements', count: categoryStats.achievement, icon: <Award className="w-4 h-4" /> },
    { id: 'social', label: 'Social', count: categoryStats.social, icon: <Users className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 font-sans">
      {/* Header */}
      <div className="border-b border-slate-800/50 mb-8 pb-6">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="text-slate-400 hover:text-white mb-6 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>

        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-bold text-[#a3e635] uppercase tracking-widest mb-2">Rewards & Earnings</p>
            <h1 className="text-3xl font-bold mb-2 heading-gradient">Coin Rewards System</h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Earn coins by completing tasks, learning courses, and engaging with the community
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-400 mb-2">Current Balance</p>
            <div className="flex items-center gap-2 text-3xl font-bold text-[#a3e635]">
              <Coins className="w-8 h-8" />
              {currentCoins}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111927] border border-slate-800 rounded-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm mb-1">Total Earned</p>
              <p className="text-2xl font-bold text-[#a3e635]">{totalEarned}</p>
            </div>
            <Sparkles className="w-8 h-8 text-[#a3e635]/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#111927] border border-slate-800 rounded-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm mb-1">Active Rewards</p>
              <p className="text-2xl font-bold text-white">
                {rewards.filter(r => !r.completed).length}
              </p>
            </div>
            <Gift className="w-8 h-8 text-green-500/50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#111927] border border-slate-800 rounded-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-500 text-sm mb-1">Completed</p>
              <p className="text-2xl font-bold text-white">
                {rewards.filter(r => r.completed).length}/{rewards.length}
              </p>
            </div>
            <Check className="w-8 h-8 text-blue-500/50" />
          </div>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as any)}
            className={cn(
              "px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-all flex items-center gap-2",
              selectedCategory === cat.id
                ? "bg-[#a3e635] text-black"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            )}
          >
            {cat.icon && cat.icon}
            {cat.label}
            <span className={cn(
              "text-xs rounded-full px-2 py-0.5",
              selectedCategory === cat.id 
                ? "bg-black/20" 
                : "bg-slate-700"
            )}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {filteredRewards.map((reward, idx) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className={cn(
              "bg-[#111927] border-slate-800 hover:border-slate-700 transition-all h-full",
              reward.completed && "opacity-60"
            )}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#a3e635]/20 flex items-center justify-center text-[#a3e635]">
                      {reward.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-white">{reward.title}</h3>
                        {reward.completed && (
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                            <Check className="w-3 h-3 mr-1" />
                            Earned
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate-500">{reward.description}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1 text-[#a3e635] font-bold text-lg">
                      <Coins className="w-4 h-4" />
                      {reward.coins}
                    </div>
                    {reward.frequency && (
                      <p className="text-xs text-slate-500 mt-1">{reward.frequency}</p>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                {reward.progress !== undefined && reward.maxProgress && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-slate-500">
                        Progress: {reward.progress}/{reward.maxProgress}
                      </p>
                      <p className="text-xs text-slate-500">
                        {Math.round((reward.progress / reward.maxProgress) * 100)}%
                      </p>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(reward.progress / reward.maxProgress) * 100}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-[#a3e635]"
                      />
                    </div>
                  </div>
                )}

                {!reward.completed && !reward.progress && (
                  <Button className="w-full mt-4 bg-[#a3e635] hover:bg-[#91d900] text-black font-semibold">
                    Unlock Now
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Earnings */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#a3e635]" />
          Recent Earnings
        </h2>
        <div className="space-y-3">
          {rewardHistory.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111927] border border-slate-800 rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <p className="font-medium text-white">{item.title}</p>
                <p className="text-xs text-slate-500 mt-1">
                  {item.earnedAt.toLocaleDateString()} at {item.earnedAt.toLocaleTimeString()}
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#a3e635] font-bold text-lg">
                <Coins className="w-4 h-4" />
                +{item.coins}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
