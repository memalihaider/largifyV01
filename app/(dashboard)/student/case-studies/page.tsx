'use client';

import { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, TrendingUp, Target, BookOpen, Zap, Filter, Coins } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { mockCaseStudies, type CaseStudyLevel } from '@/lib/mock-data/student-portal';
import { COIN_COSTS } from '@/lib/coin-costs';
import { InsufficientCoinsModal } from '@/components/ui/insufficient-coins-modal';

function CaseStudiesContent() {
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [currentCoins] = useState(450); // Mock current coin balance
  const [insufficientCoinsModal, setInsufficientCoinsModal] = useState({
    isOpen: false,
    requiredCoins: 0,
    featureName: ''
  });
  const router = useRouter();

  const domains = Array.from(new Set(mockCaseStudies.map(c => c.domain)));
  const domainLabels: Record<string, string> = {
    cybersecurity: 'Cybersecurity',
    ai: 'Artificial Intelligence',
    development: 'Software Development',
    ecommerce: 'E-commerce',
    marketing: 'Digital Marketing'
  };

  const filteredCases = mockCaseStudies.filter(c => {
    const levelMatch = selectedLevel === 'all' || c.level === selectedLevel;
    const domainMatch = selectedDomain === null || c.domain === selectedDomain;
    return levelMatch && domainMatch;
  });

  const getCoinCost = (level: CaseStudyLevel): number => {
    const costMap: Record<CaseStudyLevel, number> = {
      beginner: COIN_COSTS.caseStudies.basicCase,
      intermediate: COIN_COSTS.caseStudies.intermediateCase,
      advanced: COIN_COSTS.caseStudies.advancedCase
    };
    return costMap[level];
  };

  const handleCaseStudyClick = (caseId: string, level: CaseStudyLevel, title: string) => {
    const cost = getCoinCost(level);
    if (currentCoins < cost) {
      setInsufficientCoinsModal({
        isOpen: true,
        requiredCoins: cost,
        featureName: title
      });
      return;
    }
    router.push(`/student/case-study/${caseId}`);
  };

  const levelColors: Record<string, { bg: string; color: string; icon: React.ReactNode }> = {
    beginner: { 
      bg: 'bg-blue-500/10 border-blue-500/30',
      color: 'text-blue-400',
      icon: <BookOpen className="w-4 h-4" />
    },
    intermediate: { 
      bg: 'bg-violet-500/10 border-violet-500/30',
      color: 'text-violet-400',
      icon: <Zap className="w-4 h-4" />
    },
    advanced: { 
      bg: 'bg-red-500/10 border-red-500/30',
      color: 'text-red-400',
      icon: <TrendingUp className="w-4 h-4" />
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] to-[#1a1f3a] text-slate-200 font-sans py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 heading-gradient">Case Studies</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Real-world scenarios. Real skills. Real outcomes. Choose a case study to start your learning journey.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Domain Filter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-[#a3e635]" />
              <p className="text-sm font-semibold text-white">Filter by Domain</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => setSelectedDomain(null)}
                variant={selectedDomain === null ? 'default' : 'outline'}
                className={cn(
                  'rounded-full',
                  selectedDomain === null
                    ? 'bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold'
                    : 'border-slate-600 text-slate-300 hover:bg-slate-800/50'
                )}
              >
                All Domains
              </Button>
              {domains.map(domain => (
                <Button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  variant={selectedDomain === domain ? 'default' : 'outline'}
                  className={cn(
                    'rounded-full',
                    selectedDomain === domain
                      ? 'bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold'
                      : 'border-slate-600 text-slate-300 hover:bg-slate-800/50'
                  )}
                >
                  {domainLabels[domain] || domain}
                </Button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-[#a3e635]" />
              <p className="text-sm font-semibold text-white">Filter by Level</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['all', 'beginner', 'intermediate', 'advanced'].map(lvl => {
                const labels: Record<string, string> = {
                  all: 'All Levels',
                  beginner: 'Beginner',
                  intermediate: 'Intermediate',
                  advanced: 'Advanced'
                };
                return (
                  <Button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl as any)}
                    variant={selectedLevel === lvl ? 'default' : 'outline'}
                    className={cn(
                      'rounded-full',
                      selectedLevel === lvl
                        ? 'bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold'
                        : 'border-slate-600 text-slate-300 hover:bg-slate-800/50'
                    )}
                  >
                    {labels[lvl]}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cases Grid */}
        {filteredCases.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {filteredCases.map((caseStudy, idx) => {
              const colors = levelColors[caseStudy.level];

              return (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="h-full"
                >
                  <Link href={`/student/case-study/${caseStudy.id}`}>
                    <Card className="bg-slate-900/50 border-slate-700/50 hover:border-slate-600 transition-all h-full cursor-pointer group backdrop-blur-xl">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex gap-2">
                            <Badge
                              className={cn(
                                'border text-xs font-semibold',
                                colors.bg,
                                colors.color
                              )}
                            >
                              {colors.icon}
                              <span className="ml-1">{caseStudy.level.charAt(0).toUpperCase() + caseStudy.level.slice(1)}</span>
                            </Badge>
                            <Badge 
                              variant="secondary"
                              className="bg-slate-800/50 text-slate-300"
                            >
                              {domainLabels[caseStudy.domain] || caseStudy.domain}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-slate-400 bg-slate-800/30 px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4" />
                            {caseStudy.estimatedHours}h
                          </div>
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-[#a3e635] transition">
                          {caseStudy.title}
                        </CardTitle>
                        <CardDescription className="text-slate-400">
                          {caseStudy.industryContext}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        {/* Problem Statement */}
                        <div className="bg-slate-800/20 rounded-lg p-4 border border-slate-700/50">
                          <p className="text-xs font-semibold text-slate-400 uppercase mb-2 flex items-center gap-2">
                            <Target className="w-3 h-3" /> Problem Statement
                          </p>
                          <p className="text-sm text-slate-300 line-clamp-2">{caseStudy.problemStatement}</p>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-slate-800/20 rounded-lg p-3 border border-slate-700/50 text-center">
                            <p className="text-2xl font-bold text-[#a3e635]">{caseStudy.constraints.length}</p>
                            <p className="text-xs text-slate-400 mt-1">Constraints</p>
                          </div>
                          <div className="bg-slate-800/20 rounded-lg p-3 border border-slate-700/50 text-center">
                            <p className="text-2xl font-bold text-[#a3e635]">{caseStudy.phases.length}</p>
                            <p className="text-xs text-slate-400 mt-1">Phases</p>
                          </div>
                          <div className="bg-slate-800/20 rounded-lg p-3 border border-slate-700/50 text-center">
                            <p className="text-2xl font-bold text-[#a3e635]">{caseStudy.difficulty}/10</p>
                            <p className="text-xs text-slate-400 mt-1">Difficulty</p>
                          </div>
                        </div>

                        {/* Business Impact */}
                        <div className="bg-slate-800/20 rounded-lg p-4 border border-slate-700/50">
                          <p className="text-xs font-semibold text-slate-400 uppercase mb-2">💼 Business Impact</p>
                          <p className="text-sm text-slate-300 line-clamp-2">{caseStudy.businessImpact}</p>
                        </div>

                        {/* Success Criteria Preview */}
                        <div>
                          <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Success Criteria</p>
                          <div className="flex flex-wrap gap-1">
                            {caseStudy.successCriteria.slice(0, 2).map((criteria, i) => (
                              <Badge key={i} variant="secondary" className="bg-slate-800/50 text-slate-300 text-xs">
                                ✓ {criteria}
                              </Badge>
                            ))}
                            {caseStudy.successCriteria.length > 2 && (
                              <Badge variant="secondary" className="bg-slate-800/50 text-slate-300 text-xs">
                                +{caseStudy.successCriteria.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        {/* Coin Cost & CTA */}
                        <div className="space-y-3 pt-2 border-t border-slate-700/50">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Coins className="w-4 h-4 text-amber-400" />
                              <span className="text-sm font-semibold text-amber-400">
                                {getCoinCost(caseStudy.level)} coins
                              </span>
                            </div>
                            <span className={cn(
                              'text-xs font-semibold px-2 py-1 rounded',
                              currentCoins >= getCoinCost(caseStudy.level)
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
                            )}>
                              {currentCoins >= getCoinCost(caseStudy.level) ? 'Can Access' : 'Not Enough'}
                            </span>
                          </div>
                          <button
                            onClick={() => handleCaseStudyClick(caseStudy.id, caseStudy.level, caseStudy.title)}
                            className="w-full bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors group/btn"
                          >
                            Start Case Study
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <Card className="bg-slate-900/50 border-slate-700/50 text-center py-16">
            <CardContent>
              <p className="text-slate-400 mb-4 text-lg">No case studies match your filters</p>
              <Button
                onClick={() => {
                  setSelectedLevel('all');
                  setSelectedDomain(null);
                }}
                className="bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold"
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Results Count */}
        <div className="text-center text-slate-400 text-sm">
          Showing {filteredCases.length} of {mockCaseStudies.length} case studies
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-slate-700/50 rounded-lg p-6"
        >
          <p className="text-slate-300">
            <span className="font-semibold text-white">📚 How Case Studies Work:</span> Each case study progresses through 4 phases: <span className="text-[#a3e635]">Understanding → Analysis → Execution → Business Impact</span>. You advance to the next phase only after passing evaluation. AI mentors guide you with learning resources, hints, and personalized feedback.
          </p>
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
    </div>
  );
}

export default function CaseStudies() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b1120] flex items-center justify-center">Loading...</div>}>
      <CaseStudiesContent />
    </Suspense>
  );
}
