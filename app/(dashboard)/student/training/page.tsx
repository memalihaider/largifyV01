'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Target,
  Award,
  Play,
  FileText,
  CheckCircle,
  Clock,
  Zap,
  Brain,
  Briefcase,
  Code,
  TrendingUp,
  ShoppingCart,
  DollarSign,
  Heart,
  GraduationCap,
  Factory,
  Building2,
  Palette,
  Globe,
  Lock,
  ArrowRight,
  Coins
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { COIN_COSTS } from '@/lib/coin-costs';
import { InsufficientCoinsModal } from '@/components/ui/insufficient-coins-modal';

interface Industry {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  domains: string[];
  color: string;
}

interface LearningPath {
  id: string;
  title: string;
  modules: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'available' | 'in-progress' | 'completed' | 'locked';
  progress?: number;
}

export default function TrainingPage() {
  const router = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'industries' | 'my-learning' | 'certifications'>('industries');
  const [currentCoins] = useState(450); // Mock current coin balance
  const [insufficientCoinsModal, setInsufficientCoinsModal] = useState({
    isOpen: false,
    requiredCoins: 0,
    featureName: ''
  });

  const industries: Industry[] = [
    {
      id: 'it',
      name: 'Information Technology',
      icon: <Code className="w-6 h-6" />,
      description: 'Master tech skills from cybersecurity to cloud computing',
      domains: ['Cybersecurity', 'AI & Machine Learning', 'Web & App Development', 'DevOps & Cloud', 'Data Engineering'],
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'business',
      name: 'Business & Entrepreneurship',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Build and scale ventures with proven frameworks',
      domains: ['Startup Management', 'Product Management', 'Operations', 'HR & Talent', 'Finance for Managers'],
      color: 'from-violet-500/20 to-purple-500/20'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: <ShoppingCart className="w-6 h-6" />,
      description: 'Launch and grow online businesses',
      domains: ['Store Setup', 'Supply Chain', 'Customer Experience', 'Marketplace Management', 'D2C Strategy'],
      color: 'from-orange-500/20 to-amber-500/20'
    },
    {
      id: 'marketing',
      name: 'Marketing & Growth',
      icon: <TrendingUp className="w-6 h-6" />,
      description: 'Drive growth through data-driven marketing',
      domains: ['Facebook Ads', 'SEO Systems', 'Email Automation', 'Influencer Outreach', 'Funnel Analytics'],
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'finance',
      name: 'Finance & Accounting',
      icon: <DollarSign className="w-6 h-6" />,
      description: 'Master financial analysis and management',
      domains: ['Financial Modeling', 'Investment Analysis', 'Corporate Finance', 'Accounting Systems', 'Risk Management'],
      color: 'from-yellow-500/20 to-lime-500/20'
    },
    {
      id: 'healthcare',
      name: 'Healthcare Tech',
      icon: <Heart className="w-6 h-6" />,
      description: 'Innovate in healthcare technology',
      domains: ['Health Informatics', 'Telemedicine', 'Medical Devices', 'Healthcare Analytics', 'Digital Health'],
      color: 'from-red-500/20 to-rose-500/20'
    },
    {
      id: 'education',
      name: 'Education & EdTech',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Transform learning with technology',
      domains: ['Learning Design', 'EdTech Tools', 'Assessment Systems', 'Online Course Creation', 'Student Analytics'],
      color: 'from-indigo-500/20 to-blue-500/20'
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Operations',
      icon: <Factory className="w-6 h-6" />,
      description: 'Optimize production and operations',
      domains: ['Lean Manufacturing', 'Quality Control', 'Supply Chain', 'Process Automation', 'Industrial IoT'],
      color: 'from-slate-500/20 to-gray-500/20'
    },
    {
      id: 'government',
      name: 'Government & Public Sector',
      icon: <Building2 className="w-6 h-6" />,
      description: 'Drive public sector innovation',
      domains: ['E-Governance', 'Policy Tech', 'Civic Innovation', 'Public Services', 'Smart Cities'],
      color: 'from-teal-500/20 to-cyan-500/20'
    },
    {
      id: 'creative',
      name: 'Creative & Media',
      icon: <Palette className="w-6 h-6" />,
      description: 'Create impactful digital content',
      domains: ['UI/UX Design', 'Video Production', 'Content Strategy', 'Brand Design', 'Motion Graphics'],
      color: 'from-pink-500/20 to-fuchsia-500/20'
    }
  ];

  const featuredPaths: LearningPath[] = [
    {
      id: '1',
      title: 'Startup Fundamentals',
      modules: 8,
      duration: '12 hours',
      level: 'Beginner',
      status: 'available'
    },
    {
      id: '2',
      title: 'Product Management Essentials',
      modules: 10,
      duration: '15 hours',
      level: 'Intermediate',
      status: 'available'
    },
    {
      id: '3',
      title: 'Growth Marketing Mastery',
      modules: 12,
      duration: '18 hours',
      level: 'Advanced',
      status: 'locked'
    }
  ];

  const getCoinCost = (level: 'Beginner' | 'Intermediate' | 'Advanced'): number => {
    const costMap = {
      Beginner: COIN_COSTS.courses.beginnerCourse,
      Intermediate: COIN_COSTS.courses.intermediateCourse,
      Advanced: COIN_COSTS.courses.advancedCourse
    };
    return costMap[level];
  };

  const handlePathClick = (path: LearningPath, e: React.MouseEvent) => {
    e.preventDefault();
    if (path.status === 'locked') {
      const cost = getCoinCost(path.level);
      setInsufficientCoinsModal({
        isOpen: true,
        requiredCoins: cost,
        featureName: path.title
      });
      return;
    }
    
    const cost = getCoinCost(path.level);
    if (currentCoins < cost) {
      setInsufficientCoinsModal({
        isOpen: true,
        requiredCoins: cost,
        featureName: path.title
      });
      return;
    }
    
    // In a real app, deduct coins here
    router.push(`/student/training`);
  };

  const trainingFeatures = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: 'Curated Learning',
      description: 'Videos, docs, and resources from industry leaders'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Practical Labs',
      description: 'Hands-on exercises with real-world scenarios'
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: 'AI Guidance',
      description: 'Smart feedback and personalized learning paths'
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Certifications',
      description: 'Industry-recognized proof of your skills'
    }
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
            <p className="text-xs font-bold text-[#a3e635] uppercase tracking-widest mb-2">Largify Training</p>
            <h1 className="text-3xl font-bold mb-2 heading-gradient">AI-Enhanced LMS for Multi-Industry Skill Development</h1>
            <p className="text-white/80 text-lg max-w-2xl">
              Learn → Practice → Assess → Prove. Not just watching videos, but building real capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Features Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {trainingFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#111927] border border-slate-800 rounded-lg p-4"
          >
            <div className="text-[#a3e635] mb-2">{feature.icon}</div>
            <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
            <p className="text-xs text-slate-500">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-slate-800/50 mb-8">
        {[
          { id: 'industries', label: 'Browse Industries' },
          { id: 'my-learning', label: 'My Learning' },
          { id: 'certifications', label: 'Certifications' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={cn(
              "pb-4 text-sm font-medium transition-colors relative",
              activeTab === tab.id ? "text-white" : "text-slate-500 hover:text-slate-300"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div 
                layoutId="trainingTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a3e635]" 
              />
            )}
          </button>
        ))}
      </div>

      {/* Industries Tab */}
      {activeTab === 'industries' && (
        <div className="space-y-8">
          {/* How It Works */}
          <div className="bg-gradient-to-r from-[#111927] to-[#1a1f3a] border border-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#a3e635]" />
              How Training Works
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              {[
                { step: '1', title: 'Select Industry', desc: 'Choose your focus area' },
                { step: '2', title: 'Pick Domain', desc: 'Narrow to your field' },
                { step: '3', title: 'Learn Nano-Skills', desc: 'Master specific skills' },
                { step: '4', title: 'Practice & Prove', desc: 'Complete labs & get certified' }
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#a3e635] text-black rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                  {idx < 3 && <ChevronRight className="w-5 h-5 text-slate-600 hidden md:block mt-1" />}
                </div>
              ))}
            </div>
          </div>

          {/* Industry Selection */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Select Your Industry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, idx) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Card 
                    className={cn(
                      "bg-[#111927] border-slate-800 cursor-pointer transition-all hover:border-[#a3e635]/50",
                      selectedIndustry === industry.id && "border-[#a3e635] ring-1 ring-[#a3e635]/20"
                    )}
                    onClick={() => setSelectedIndustry(industry.id)}
                  >
                    <CardContent className="p-5">
                      <div className={cn("w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4", industry.color)}>
                        <div className="text-white">{industry.icon}</div>
                      </div>
                      <h3 className="font-bold text-white mb-1">{industry.name}</h3>
                      <p className="text-xs text-slate-500 mb-4">{industry.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {industry.domains.slice(0, 3).map((domain, i) => (
                          <span key={i} className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">
                            {domain}
                          </span>
                        ))}
                        {industry.domains.length > 3 && (
                          <span className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded">
                            +{industry.domains.length - 3}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Selected Industry Details */}
          {selectedIndustry && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#111927] border border-[#a3e635]/30 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">
                    {industries.find(i => i.id === selectedIndustry)?.name}
                  </h2>
                  <p className="text-sm text-slate-400">Select a domain to start learning</p>
                </div>
                <Button 
                  onClick={() => router.push(`/student/training/${selectedIndustry}`)}
                  className="bg-[#a3e635] hover:bg-[#bef264] text-black font-bold"
                >
                  Explore All Domains
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {industries.find(i => i.id === selectedIndustry)?.domains.map((domain, idx) => (
                  <button
                    key={idx}
                    className="p-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-[#a3e635]/50 rounded-lg text-left transition-all group"
                  >
                    <h4 className="font-medium text-white text-sm mb-1 group-hover:text-[#a3e635]">{domain}</h4>
                    <p className="text-xs text-slate-500">5-8 nano-skills</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      )}

      {/* My Learning Tab */}
      {activeTab === 'my-learning' && (
        <div className="space-y-6">
          {/* Progress Overview */}
          <div className="bg-gradient-to-r from-[#111927] to-[#1a1f3a] border border-slate-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Your Learning Progress</h2>
              <span className="text-sm font-bold text-[#a3e635] bg-slate-800/50 px-4 py-2 rounded-full">
                0 Courses Started
              </span>
            </div>
            <p className="text-slate-400 mb-6">Select an industry above to begin your learning journey.</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white mb-1">0</p>
                <p className="text-xs text-slate-500">Hours Learned</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white mb-1">0</p>
                <p className="text-xs text-slate-500">Labs Completed</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-white mb-1">0</p>
                <p className="text-xs text-slate-500">Certifications</p>
              </div>
            </div>
          </div>

          {/* Featured Paths */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Recommended Learning Paths</h2>
            <div className="space-y-3">
              {featuredPaths.map((path, idx) => {
                const cost = getCoinCost(path.level);
                const canAccess = currentCoins >= cost && path.status !== 'locked';
                return (
                  <motion.div
                    key={path.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={cn(
                      "flex items-center justify-between p-4 bg-[#111927] border border-slate-800 rounded-lg transition-all",
                      path.status === 'locked' ? 'opacity-60' : 'hover:border-slate-700 cursor-pointer'
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        path.status === 'locked' || !canAccess ? 'bg-slate-800' : 'bg-[#a3e635]/20'
                      )}>
                        {path.status === 'locked' || !canAccess ? (
                          <Lock className="w-5 h-5 text-slate-600" />
                        ) : (
                          <Play className="w-5 h-5 text-[#a3e635]" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-white">{path.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span>{path.modules} modules</span>
                          <span>•</span>
                          <span>{path.duration}</span>
                          <span>•</span>
                          <span className={cn(
                            "px-2 py-0.5 rounded",
                            path.level === 'Beginner' && 'bg-green-500/20 text-green-400',
                            path.level === 'Intermediate' && 'bg-yellow-500/20 text-yellow-400',
                            path.level === 'Advanced' && 'bg-red-500/20 text-red-400'
                          )}>
                            {path.level}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-[#a3e635]">
                            <Coins className="w-3 h-3" />
                            {cost} coins
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        {path.status === 'locked' && (
                          <p className="text-xs text-slate-500">Locked</p>
                        )}
                        {!canAccess && path.status !== 'locked' && (
                          <p className="text-xs text-red-400">Not Enough Coins</p>
                        )}
                        {canAccess && (
                          <p className="text-xs text-green-400">Can Access</p>
                        )}
                      </div>
                      <Button 
                        onClick={(e) => handlePathClick(path, e)}
                        size="sm" 
                        className={cn(
                          "text-white",
                          canAccess 
                            ? "bg-[#a3e635] hover:bg-[#bef264] text-black" 
                            : "bg-slate-700 hover:bg-slate-600 cursor-not-allowed"
                        )}
                        disabled={!canAccess}
                      >
                        {path.status === 'locked' ? 'Locked' : canAccess ? 'Start Learning' : 'Buy Coins'}
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Certifications Tab */}
      {activeTab === 'certifications' && (
        <div className="space-y-6">
          {/* Certification Levels */}
          <div className="bg-gradient-to-r from-[#111927] to-[#1a1f3a] border border-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#a3e635]" />
              Certification Levels
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Skill Certificate', desc: 'Nano-skill mastery', icon: '🎯' },
                { name: 'Track Certificate', desc: 'Domain completion', icon: '📚' },
                { name: 'Industry Certificate', desc: 'Full industry track', icon: '🏆' },
                { name: 'Capstone Certificate', desc: 'Real project proof', icon: '🚀' }
              ].map((cert, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-1">{cert.name}</h3>
                  <p className="text-xs text-slate-500">{cert.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Your Certificates */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Your Certificates</h2>
            <div className="bg-[#111927] border border-slate-800 rounded-lg p-8 text-center">
              <Award className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">No Certificates Yet</h3>
              <p className="text-sm text-slate-500 mb-4 max-w-md mx-auto">
                Complete learning paths and pass assessments to earn industry-recognized certifications that prove your skills.
              </p>
              <Button 
                onClick={() => setActiveTab('industries')}
                className="bg-[#a3e635] hover:bg-[#bef264] text-black font-bold"
              >
                Start Learning
              </Button>
            </div>
          </div>

          {/* Certificate Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: 'Skill Mapping', desc: 'Detailed competency breakdown' },
              { title: 'Hours Invested', desc: 'Time commitment verified' },
              { title: 'Practical Proof', desc: 'Links to your work' },
              { title: 'Institute Verified', desc: 'Academic governance ready' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-[#111927] border border-slate-800 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-[#a3e635] mb-2" />
                <h3 className="font-bold text-white text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-slate-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Insufficient Coins Modal */}
      <InsufficientCoinsModal
        isOpen={insufficientCoinsModal.isOpen}
        onClose={() => setInsufficientCoinsModal({ ...insufficientCoinsModal, isOpen: false })}
        requiredCoins={insufficientCoinsModal.requiredCoins}
        currentCoins={currentCoins}
        featureName={insufficientCoinsModal.featureName}
        coinsShortage={insufficientCoinsModal.requiredCoins - currentCoins}
      />
    </div>
  );
}
