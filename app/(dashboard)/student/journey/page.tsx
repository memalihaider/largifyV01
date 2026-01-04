'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap,
  ArrowRight,
  CheckCircle,
  Circle,
  Lock,
  ChevronLeft
} from 'lucide-react';
import { getMockUser } from '@/lib/mock-data';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface JourneyStep {
  id: number;
  title: string;
  description: string;
  href: string;
  status: 'completed' | 'active' | 'locked';
  estimatedTime: string;
}

export default function JourneyPage() {
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
      {/* Header with Back Button */}
      <div className="border-b border-slate-800/50 mb-12 pb-6">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="text-slate-400 hover:text-white mb-6 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Dashboard
        </Button>
        
        <h1 className="text-3xl font-bold mb-2 heading-gradient">Your Journey</h1>
        <p className="text-white/80 text-lg">
          Complete each step to master entrepreneurship and earn industry certifications.
        </p>
      </div>

      {/* Progress Tracker Section */}
      <div className="bg-gradient-to-r from-[#111927] to-[#1a1f3a] border border-slate-800 rounded-lg p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Zap className="w-6 h-6 text-[#a3e635]" />
              Progress Tracker
            </h2>
            <span className="text-sm font-bold text-[#a3e635] bg-slate-800/50 px-4 py-2 rounded-full">
              {completedSteps}/{journeySteps.length} Complete
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-[#a3e635] to-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Journey Steps */}
        <div className="space-y-4">
          {journeySteps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <button
                onClick={() => step.status !== 'locked' && router.push(step.href)}
                disabled={step.status === 'locked'}
                className={cn(
                  "w-full p-4 rounded-lg border transition-all flex items-center gap-4 group",
                  step.status === 'completed' ? 'bg-slate-800/50 border-green-500/30' : 
                  step.status === 'active' ? 'bg-slate-800 border-slate-700 hover:border-[#a3e635]' :
                  'bg-slate-900/50 border-slate-800 cursor-not-allowed opacity-60'
                )}
              >
                {/* Step Icon */}
                <div className="flex-shrink-0">
                  {step.status === 'completed' ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : step.status === 'active' ? (
                    <Circle className="w-6 h-6 text-[#a3e635]" />
                  ) : (
                    <Lock className="w-6 h-6 text-slate-600" />
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-lg">{step.title}</h3>
                    <span className="text-xs font-medium text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                      {step.estimatedTime}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </div>

                {/* Arrow */}
                {step.status !== 'locked' && (
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="flex-shrink-0"
                  >
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#a3e635] transition-colors" />
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
