'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Lightbulb, 
  Building2, 
  Users, 
  TrendingUp,
  ArrowRight,
  Zap,
  BookOpen,
  FlaskConical,
  Trophy,
  Briefcase,
  ChevronRight,
  Grid,
  HelpCircle,
  User,
  Coins,
  Gift,
  CheckCircle,
  Circle
} from 'lucide-react';
import { getMockUser } from '@/lib/mock-data';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  href: string;
  status: 'completed' | 'active' | 'locked';
  estimatedTime: string;
}

export default function StudentDashboard() {
  const router = useRouter();
  const currentUser = getMockUser('student-1');
  const [progressPercent, setProgressPercent] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);

  // Journey steps
  const journeySteps: JourneyStep[] = [
    {
      id: 1,
      title: 'Onboarding',
      description: 'Complete your profile and get started',
      href: '/student/onboarding',
      status: 'active',
      estimatedTime: '15 min'
    },
    {
      id: 2,
      title: 'Domain Selection',
      description: 'Choose your primary learning domain',
      href: '/student/domain-selection',
      status: 'active',
      estimatedTime: '10 min'
    },
    {
      id: 3,
      title: 'Niche Selection',
      description: 'Pick your specialization within the domain',
      href: '/student/nano-niche-selection',
      status: 'active',
      estimatedTime: '15 min'
    },
    {
      id: 4,
      title: 'Skill Assessment',
      description: 'Take the baseline assessment test',
      href: '/student/skill-assessment',
      status: 'active',
      estimatedTime: '20 min'
    },
    {
      id: 5,
      title: 'Case Studies',
      description: 'Start solving real-world case studies',
      href: '/student/case-studies',
      status: 'active',
      estimatedTime: 'Self-paced'
    }
  ];

  // Calculate progress
  useEffect(() => {
    const completed = journeySteps.filter(s => s.status === 'completed').length;
    setCompletedSteps(completed);
    setProgressPercent((completed / journeySteps.length) * 100);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 font-sans">
      {/* Welcome Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2 heading-gradient">
          Welcome <span className="text-violet-400">{(currentUser?.name || 'innovator').toLowerCase().replace(' ', '')}</span>,
        </h1>
        <p className="text-slate-400 text-lg">
          Access the Largify multiverse and develop yourself as a business innovator.
        </p>
      </div>

      {/* Main Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Venture Academy Card */}
        <Card className="bg-[#111927] border-slate-800 overflow-hidden group cursor-pointer hover:border-slate-700 transition-all">
          <CardContent className="p-0 relative flex h-full min-h-[320px]">
            <div className="flex-1 p-8 flex flex-col justify-between relative z-10">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Largify Academy</p>
                  <h2 className="text-3xl font-bold text-white leading-tight">Innovate. Build. Scale.</h2>
                </div>
                <p className="text-slate-400 max-w-[280px] leading-relaxed text-base">
                  Start your journey in startup innovation with practical learning paths focused on building real ventures and predicting opportunities across different industries. Learn how ideas turn into startups, startups turn into systems, and systems turn into impact, backed by industry-recognized certifications.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={() => router.push('/student/journey')}
                  className="w-fit bg-[#a3e635] hover:bg-[#bef264] text-black font-bold rounded-md px-6 py-6 h-auto text-base"
                >
                  Start Journey
                </Button>
              </div>
            </div>
            {/* Decorative Gradient/Image Area */}
            <div className="w-1/3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <BookOpen className="w-32 h-32 text-green-400 -rotate-12" />
              </div>
              <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#111927] to-transparent" />
            </div>
          </CardContent>
        </Card>

        {/* Innovation Lab Card */}
        <Card className="bg-[#111927] border-slate-800 overflow-hidden group cursor-pointer hover:border-slate-700 transition-all">
          <CardContent className="p-0 relative flex h-full min-h-[320px]">
            <div className="flex-1 p-8 flex flex-col justify-between relative z-10">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Largify Training</p>
                  <h2 className="text-3xl font-bold text-white leading-tight">Industry-Driven Learning & Training</h2>
                </div>
                <p className="text-slate-400 max-w-[280px] leading-relaxed text-base">
                  Learn through structured programs designed with insights from leading industries. Our training modules focus on real business practices, emerging technologies, and proven frameworks used by top companies. Each program blends expert guidance, practical exercises, and real case learning to prepare you for real-world execution.
                </p>
              </div>
              <div className="mt-8">
                <Button 
                  onClick={() => router.push('/student/training')}
                  className="w-fit bg-[#a3e635] hover:bg-[#bef264] text-black font-bold rounded-md px-6 py-6 h-auto text-base"
                >
                  Start Training
                </Button>
              </div>
            </div>
            {/* Decorative Gradient/Image Area */}
            <div className="w-1/3 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <FlaskConical className="w-32 h-32 text-fuchsia-400 rotate-12" />
              </div>
              <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#111927] to-transparent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* List Items Section */}
      <div className="space-y-4 mb-12">
        {[
          { title: 'Largify CTF', subtitle: 'Challenge your skills across multiple domains', icon: <Trophy className="w-5 h-5" />, link: '/student/ctf' },
          { title: 'Coin Rewards & Earnings', subtitle: 'Track your coin rewards and daily bonuses', icon: <Gift className="w-5 h-5" />, link: '/student/rewards' },
          { title: 'Buy Coins', subtitle: 'Purchase more coins for learning content', icon: <Coins className="w-5 h-5" />, link: '/student/coins' },
          { title: 'Largify Enterprise Platform', subtitle: 'Upskill your innovation team with challenge-based learning', icon: <Briefcase className="w-5 h-5" />, link: '/enterprise' }
        ].map((item, i) => (
          <div 
            key={i}
            onClick={() => item.link && router.push(item.link)}
            className="flex items-center justify-between p-6 bg-[#111927] border border-slate-800 rounded-lg hover:border-slate-700 cursor-pointer transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="text-slate-500 group-hover:text-violet-400 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
          </div>
        ))}
      </div>

      {/* Footer Job Section */}
      <div className="bg-[#111927] border border-slate-800 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">L</div>
            <span className="font-bold text-white">Lufthansa</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">S</div>
            <span className="font-bold text-white">Synack</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">A</div>
            <span className="font-bold text-white">aws</span>
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h4 className="font-bold text-white mb-1">Find your next job in business innovation with Largify</h4>
          <p className="text-sm text-slate-500">The best resource to discover and connect with innovation experts and jobs globally.</p>
        </div>

        <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-8 py-6 h-auto rounded-md font-bold">
          Search jobs
        </Button>
      </div>
    </div>
  );
}
