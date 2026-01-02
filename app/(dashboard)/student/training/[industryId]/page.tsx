'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Users,
  Target,
  ArrowRight,
  Code,
  Briefcase,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  Heart,
  GraduationCap,
  Factory,
  Building2,
  Palette,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Domain {
  id: string;
  name: string;
  description: string;
  nanoSkills: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  popularity: number;
}

interface IndustryData {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  domains: Domain[];
}

const industriesData: Record<string, IndustryData> = {
  'it': {
    id: 'it',
    name: 'Information Technology',
    description: 'Master cutting-edge tech skills from cybersecurity to cloud computing. Build the technical foundation for modern digital products.',
    icon: <Code className="w-8 h-8" />,
    color: 'text-blue-400',
    bgColor: 'from-blue-500/20 to-cyan-500/20',
    domains: [
      { id: 'cybersecurity', name: 'Cybersecurity', description: 'Protect systems and networks from digital attacks', nanoSkills: 8, duration: '24 hours', level: 'Intermediate', popularity: 92 },
      { id: 'ai-ml', name: 'AI & Machine Learning', description: 'Build intelligent systems that learn and adapt', nanoSkills: 10, duration: '32 hours', level: 'Advanced', popularity: 98 },
      { id: 'web-dev', name: 'Web & App Development', description: 'Create modern web and mobile applications', nanoSkills: 12, duration: '36 hours', level: 'Beginner', popularity: 95 },
      { id: 'devops', name: 'DevOps & Cloud', description: 'Automate deployment and manage cloud infrastructure', nanoSkills: 9, duration: '28 hours', level: 'Intermediate', popularity: 88 },
      { id: 'data-eng', name: 'Data Engineering', description: 'Design and build data pipelines and systems', nanoSkills: 7, duration: '22 hours', level: 'Advanced', popularity: 85 }
    ]
  },
  'business': {
    id: 'business',
    name: 'Business & Entrepreneurship',
    description: 'Build and scale ventures with proven frameworks. Learn from real startup journeys and enterprise strategies.',
    icon: <Briefcase className="w-8 h-8" />,
    color: 'text-violet-400',
    bgColor: 'from-violet-500/20 to-purple-500/20',
    domains: [
      { id: 'startup-mgmt', name: 'Startup Management', description: 'Launch and grow your startup from idea to scale', nanoSkills: 10, duration: '30 hours', level: 'Beginner', popularity: 96 },
      { id: 'product-mgmt', name: 'Product Management', description: 'Lead product strategy and roadmap execution', nanoSkills: 8, duration: '24 hours', level: 'Intermediate', popularity: 94 },
      { id: 'operations', name: 'Operations', description: 'Optimize business processes and efficiency', nanoSkills: 6, duration: '18 hours', level: 'Intermediate', popularity: 82 },
      { id: 'hr-talent', name: 'HR & Talent', description: 'Build and manage high-performing teams', nanoSkills: 7, duration: '20 hours', level: 'Beginner', popularity: 78 },
      { id: 'finance-mgr', name: 'Finance for Managers', description: 'Make data-driven financial decisions', nanoSkills: 8, duration: '22 hours', level: 'Intermediate', popularity: 86 }
    ]
  },
  'ecommerce': {
    id: 'ecommerce',
    name: 'E-commerce & Retail',
    description: 'Launch and grow online businesses. Master the complete e-commerce stack from store setup to scale.',
    icon: <ShoppingCart className="w-8 h-8" />,
    color: 'text-orange-400',
    bgColor: 'from-orange-500/20 to-amber-500/20',
    domains: [
      { id: 'store-setup', name: 'Store Setup', description: 'Build and launch your online store', nanoSkills: 6, duration: '16 hours', level: 'Beginner', popularity: 90 },
      { id: 'supply-chain', name: 'Supply Chain', description: 'Manage inventory and logistics efficiently', nanoSkills: 7, duration: '20 hours', level: 'Intermediate', popularity: 84 },
      { id: 'customer-exp', name: 'Customer Experience', description: 'Create exceptional shopping experiences', nanoSkills: 5, duration: '14 hours', level: 'Beginner', popularity: 88 },
      { id: 'marketplace', name: 'Marketplace Management', description: 'Sell on Amazon, eBay, and other platforms', nanoSkills: 6, duration: '18 hours', level: 'Intermediate', popularity: 86 },
      { id: 'd2c', name: 'D2C Strategy', description: 'Build direct-to-consumer brands', nanoSkills: 8, duration: '24 hours', level: 'Advanced', popularity: 92 }
    ]
  },
  'marketing': {
    id: 'marketing',
    name: 'Marketing & Growth',
    description: 'Drive growth through data-driven marketing. Master acquisition, retention, and brand building.',
    icon: <TrendingUp className="w-8 h-8" />,
    color: 'text-green-400',
    bgColor: 'from-green-500/20 to-emerald-500/20',
    domains: [
      { id: 'paid-ads', name: 'Paid Advertising', description: 'Master Facebook, Google, and social ads', nanoSkills: 8, duration: '24 hours', level: 'Intermediate', popularity: 94 },
      { id: 'seo', name: 'SEO Systems', description: 'Rank higher and drive organic traffic', nanoSkills: 7, duration: '20 hours', level: 'Beginner', popularity: 90 },
      { id: 'email', name: 'Email Automation', description: 'Build email sequences that convert', nanoSkills: 5, duration: '14 hours', level: 'Beginner', popularity: 86 },
      { id: 'influencer', name: 'Influencer Outreach', description: 'Partner with creators for growth', nanoSkills: 4, duration: '12 hours', level: 'Beginner', popularity: 82 },
      { id: 'analytics', name: 'Funnel Analytics', description: 'Optimize conversions with data', nanoSkills: 6, duration: '18 hours', level: 'Intermediate', popularity: 88 }
    ]
  },
  'finance': {
    id: 'finance',
    name: 'Finance & Accounting',
    description: 'Master financial analysis and management. Build skills for corporate finance and investment.',
    icon: <DollarSign className="w-8 h-8" />,
    color: 'text-yellow-400',
    bgColor: 'from-yellow-500/20 to-lime-500/20',
    domains: [
      { id: 'fin-modeling', name: 'Financial Modeling', description: 'Build models for business decisions', nanoSkills: 8, duration: '26 hours', level: 'Advanced', popularity: 88 },
      { id: 'investment', name: 'Investment Analysis', description: 'Evaluate investment opportunities', nanoSkills: 7, duration: '22 hours', level: 'Intermediate', popularity: 86 },
      { id: 'corp-finance', name: 'Corporate Finance', description: 'Manage corporate financial operations', nanoSkills: 6, duration: '20 hours', level: 'Intermediate', popularity: 82 },
      { id: 'accounting', name: 'Accounting Systems', description: 'Master accounting principles and tools', nanoSkills: 8, duration: '24 hours', level: 'Beginner', popularity: 84 },
      { id: 'risk', name: 'Risk Management', description: 'Identify and mitigate financial risks', nanoSkills: 5, duration: '16 hours', level: 'Advanced', popularity: 80 }
    ]
  },
  'healthcare': {
    id: 'healthcare',
    name: 'Healthcare Tech',
    description: 'Innovate in healthcare technology. Build solutions for modern healthcare challenges.',
    icon: <Heart className="w-8 h-8" />,
    color: 'text-red-400',
    bgColor: 'from-red-500/20 to-rose-500/20',
    domains: [
      { id: 'informatics', name: 'Health Informatics', description: 'Manage healthcare data systems', nanoSkills: 7, duration: '22 hours', level: 'Intermediate', popularity: 84 },
      { id: 'telemedicine', name: 'Telemedicine', description: 'Build remote healthcare solutions', nanoSkills: 5, duration: '16 hours', level: 'Beginner', popularity: 90 },
      { id: 'med-devices', name: 'Medical Devices', description: 'Understand medical device development', nanoSkills: 6, duration: '20 hours', level: 'Advanced', popularity: 78 },
      { id: 'health-analytics', name: 'Healthcare Analytics', description: 'Analyze health data for insights', nanoSkills: 6, duration: '18 hours', level: 'Intermediate', popularity: 86 },
      { id: 'digital-health', name: 'Digital Health', description: 'Create digital health products', nanoSkills: 8, duration: '24 hours', level: 'Intermediate', popularity: 92 }
    ]
  },
  'education': {
    id: 'education',
    name: 'Education & EdTech',
    description: 'Transform learning with technology. Build the future of education.',
    icon: <GraduationCap className="w-8 h-8" />,
    color: 'text-indigo-400',
    bgColor: 'from-indigo-500/20 to-blue-500/20',
    domains: [
      { id: 'learning-design', name: 'Learning Design', description: 'Create effective learning experiences', nanoSkills: 7, duration: '20 hours', level: 'Beginner', popularity: 88 },
      { id: 'edtech-tools', name: 'EdTech Tools', description: 'Master education technology platforms', nanoSkills: 6, duration: '18 hours', level: 'Beginner', popularity: 86 },
      { id: 'assessment', name: 'Assessment Systems', description: 'Design effective assessments', nanoSkills: 5, duration: '14 hours', level: 'Intermediate', popularity: 82 },
      { id: 'course-creation', name: 'Online Course Creation', description: 'Build and sell online courses', nanoSkills: 8, duration: '24 hours', level: 'Beginner', popularity: 94 },
      { id: 'student-analytics', name: 'Student Analytics', description: 'Track and improve learning outcomes', nanoSkills: 5, duration: '16 hours', level: 'Intermediate', popularity: 80 }
    ]
  },
  'manufacturing': {
    id: 'manufacturing',
    name: 'Manufacturing & Operations',
    description: 'Optimize production and operations. Build efficient manufacturing systems.',
    icon: <Factory className="w-8 h-8" />,
    color: 'text-slate-400',
    bgColor: 'from-slate-500/20 to-gray-500/20',
    domains: [
      { id: 'lean', name: 'Lean Manufacturing', description: 'Eliminate waste and optimize flow', nanoSkills: 6, duration: '18 hours', level: 'Intermediate', popularity: 86 },
      { id: 'quality', name: 'Quality Control', description: 'Ensure product quality standards', nanoSkills: 5, duration: '16 hours', level: 'Beginner', popularity: 84 },
      { id: 'mfg-supply', name: 'Supply Chain', description: 'Manage manufacturing supply chains', nanoSkills: 7, duration: '22 hours', level: 'Intermediate', popularity: 82 },
      { id: 'automation', name: 'Process Automation', description: 'Automate manufacturing processes', nanoSkills: 8, duration: '26 hours', level: 'Advanced', popularity: 88 },
      { id: 'iiot', name: 'Industrial IoT', description: 'Connect and monitor industrial systems', nanoSkills: 6, duration: '20 hours', level: 'Advanced', popularity: 90 }
    ]
  },
  'government': {
    id: 'government',
    name: 'Government & Public Sector',
    description: 'Drive public sector innovation. Build solutions for civic challenges.',
    icon: <Building2 className="w-8 h-8" />,
    color: 'text-teal-400',
    bgColor: 'from-teal-500/20 to-cyan-500/20',
    domains: [
      { id: 'egov', name: 'E-Governance', description: 'Digitize government services', nanoSkills: 6, duration: '18 hours', level: 'Intermediate', popularity: 84 },
      { id: 'policy-tech', name: 'Policy Tech', description: 'Use technology for policy making', nanoSkills: 5, duration: '16 hours', level: 'Intermediate', popularity: 78 },
      { id: 'civic', name: 'Civic Innovation', description: 'Create citizen-centric solutions', nanoSkills: 6, duration: '18 hours', level: 'Beginner', popularity: 82 },
      { id: 'public-services', name: 'Public Services', description: 'Improve public service delivery', nanoSkills: 5, duration: '14 hours', level: 'Beginner', popularity: 80 },
      { id: 'smart-cities', name: 'Smart Cities', description: 'Build intelligent urban systems', nanoSkills: 8, duration: '26 hours', level: 'Advanced', popularity: 88 }
    ]
  },
  'creative': {
    id: 'creative',
    name: 'Creative & Media',
    description: 'Create impactful digital content. Master design, video, and creative strategy.',
    icon: <Palette className="w-8 h-8" />,
    color: 'text-pink-400',
    bgColor: 'from-pink-500/20 to-fuchsia-500/20',
    domains: [
      { id: 'uiux', name: 'UI/UX Design', description: 'Design beautiful user experiences', nanoSkills: 9, duration: '28 hours', level: 'Beginner', popularity: 96 },
      { id: 'video', name: 'Video Production', description: 'Create professional video content', nanoSkills: 7, duration: '22 hours', level: 'Beginner', popularity: 92 },
      { id: 'content', name: 'Content Strategy', description: 'Plan and execute content that converts', nanoSkills: 6, duration: '18 hours', level: 'Intermediate', popularity: 88 },
      { id: 'brand', name: 'Brand Design', description: 'Build memorable brand identities', nanoSkills: 6, duration: '20 hours', level: 'Intermediate', popularity: 90 },
      { id: 'motion', name: 'Motion Graphics', description: 'Create animated visual content', nanoSkills: 8, duration: '26 hours', level: 'Advanced', popularity: 86 }
    ]
  }
};

export default function IndustryPage() {
  const router = useRouter();
  const params = useParams();
  const industryId = params.industryId as string;
  const industry = industriesData[industryId];

  if (!industry) {
    return (
      <div className="min-h-screen bg-[#0b1120] text-slate-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Industry Not Found</h1>
          <Button onClick={() => router.push('/student/training')} className="mt-4">
            Back to Training
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 font-sans">
      {/* Header */}
      <div className="border-b border-slate-800/50 mb-8 pb-6">
        <Button
          onClick={() => router.push('/student/training')}
          variant="ghost"
          className="text-slate-400 hover:text-white mb-6 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Industries
        </Button>
        
        <div className="flex items-start gap-6">
          <div className={cn("w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center", industry.bgColor)}>
            <div className={industry.color}>{industry.icon}</div>
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-[#a3e635] uppercase tracking-widest mb-2">Largify Training</p>
            <h1 className="text-3xl font-bold text-white mb-2">{industry.name}</h1>
            <p className="text-slate-400 text-lg max-w-2xl">{industry.description}</p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Domains', value: industry.domains.length, icon: <BookOpen className="w-4 h-4" /> },
          { label: 'Total Nano-Skills', value: industry.domains.reduce((acc, d) => acc + d.nanoSkills, 0), icon: <Target className="w-4 h-4" /> },
          { label: 'Total Duration', value: `${industry.domains.reduce((acc, d) => acc + parseInt(d.duration), 0)}h`, icon: <Clock className="w-4 h-4" /> },
          { label: 'Students Enrolled', value: '2.4k+', icon: <Users className="w-4 h-4" /> }
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#111927] border border-slate-800 rounded-lg p-4 flex items-center gap-3"
          >
            <div className="text-[#a3e635]">{stat.icon}</div>
            <div>
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning Path */}
      <div className="bg-gradient-to-r from-[#111927] to-[#1a1f3a] border border-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Your Learning Path</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg">
            <CheckCircle className="w-4 h-4 text-[#a3e635]" />
            <span className="text-sm text-white">Industry Selected</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center gap-2 bg-[#a3e635]/20 border border-[#a3e635]/30 px-3 py-2 rounded-lg">
            <span className="text-sm text-[#a3e635] font-medium">Select Domain</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg opacity-50">
            <span className="text-sm text-slate-400">Choose Nano-Skills</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg opacity-50">
            <span className="text-sm text-slate-400">Start Learning</span>
          </div>
        </div>
      </div>

      {/* Domains Grid */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Select a Domain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industry.domains.map((domain, idx) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card 
                className="bg-[#111927] border-slate-800 cursor-pointer transition-all hover:border-[#a3e635]/50 group"
                onClick={() => router.push(`/student/training/${industryId}/${domain.id}`)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-lg mb-1 group-hover:text-[#a3e635] transition-colors">
                        {domain.name}
                      </h3>
                      <p className="text-sm text-slate-500">{domain.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-[#a3e635] transition-colors" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Target className="w-3 h-3" />
                      {domain.nanoSkills} nano-skills
                    </div>
                    <div className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {domain.duration}
                    </div>
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded",
                      domain.level === 'Beginner' && 'bg-green-500/20 text-green-400',
                      domain.level === 'Intermediate' && 'bg-yellow-500/20 text-yellow-400',
                      domain.level === 'Advanced' && 'bg-red-500/20 text-red-400'
                    )}>
                      {domain.level}
                    </span>
                  </div>

                  {/* Popularity Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-500">Popularity</span>
                      <span className="text-xs text-slate-400">{domain.popularity}%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-1.5">
                      <div 
                        className="h-full bg-gradient-to-r from-[#a3e635] to-green-500 rounded-full"
                        style={{ width: `${domain.popularity}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
