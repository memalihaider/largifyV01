'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  Shield,
  Brain,
  Code,
  TrendingUp,
  Palette,
  ArrowRight,
  Check
} from 'lucide-react';
import { cn } from '@/lib/utils';

const domains = [
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: Shield,
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    accentColor: 'text-blue-400',
    description: 'Protect systems, data, and networks from digital attacks',
    topics: ['Security Architecture', 'Threat Analysis', 'Risk Management', 'Compliance'],
    niches: 5,
    cases: 1
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    icon: Brain,
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30 hover:border-purple-500/60',
    accentColor: 'text-purple-400',
    description: 'Build intelligent systems that learn and adapt',
    topics: ['NLP & Chatbots', 'Computer Vision', 'Machine Learning', 'AI Strategy'],
    niches: 5,
    cases: 1
  },
  {
    id: 'development',
    name: 'Software Development',
    icon: Code,
    color: 'from-emerald-500/20 to-emerald-600/20',
    borderColor: 'border-emerald-500/30 hover:border-emerald-500/60',
    accentColor: 'text-emerald-400',
    description: 'Create scalable applications and platforms',
    topics: ['Full Stack', 'Mobile Apps', 'DevOps', 'API Design'],
    niches: 5,
    cases: 1
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    icon: TrendingUp,
    color: 'from-amber-500/20 to-amber-600/20',
    borderColor: 'border-amber-500/30 hover:border-amber-500/60',
    accentColor: 'text-amber-400',
    description: 'Build and scale online business platforms',
    topics: ['Marketplace Design', 'Payment Systems', 'Supply Chain', 'Growth'],
    niches: 4,
    cases: 0
  },
  {
    id: 'marketing',
    name: 'Digital Marketing',
    icon: Palette,
    color: 'from-rose-500/20 to-rose-600/20',
    borderColor: 'border-rose-500/30 hover:border-rose-500/60',
    accentColor: 'text-rose-400',
    description: 'Master customer acquisition and engagement',
    topics: ['SEO & Content', 'Performance Marketing', 'Analytics', 'Growth Hacking'],
    niches: 3,
    cases: 0
  }
];

export default function DomainSelection() {
  const router = useRouter();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = async (domainId: string) => {
    setSelectedDomain(domainId);
    setLoading(true);

    // Store selection
    localStorage.setItem('selectedDomain', domainId);

    // Simulate transition and redirect
    await new Promise(resolve => setTimeout(resolve, 800));
    router.push('/student/nano-niche-selection');
  };

  const selectedDomainData = domains.find(d => d.id === selectedDomain);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] to-[#1a1f3a] text-slate-200 font-sans py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 heading-gradient">Choose Your Domain</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Select the field you want to master. You can explore different domains anytime, but let's start with your primary focus.
          </p>
        </motion.div>

        {/* Domain Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {domains.map((domain, idx) => {
            const Icon = domain.icon;
            const isSelected = selectedDomain === domain.id;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => !loading && handleSelect(domain.id)}
              >
                <Card 
                  className={cn(
                    "h-full cursor-pointer transition-all border-2 relative overflow-hidden",
                    isSelected
                      ? "border-[#a3e635] bg-[#a3e635]/5"
                      : "border-slate-700/50 hover:border-slate-600"
                  )}
                >
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity",
                    domain.color,
                    isSelected && "opacity-100"
                  )} />

                  <CardContent className="pt-6 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className={cn(
                        "w-8 h-8",
                        isSelected ? "text-[#a3e635]" : domain.accentColor
                      )} />
                      {isSelected && (
                        <Check className="w-5 h-5 text-[#a3e635]" />
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {domain.name}
                    </h3>

                    <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                      {domain.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {domain.topics.slice(0, 2).map(topic => (
                          <Badge 
                            key={topic} 
                            variant="secondary"
                            className="text-xs bg-slate-800/50 text-slate-300"
                          >
                            {topic}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-xs text-slate-500 pt-2 border-t border-slate-700/50">
                        <p>🎯 {domain.niches} niches • 📚 {domain.cases} {domain.cases === 1 ? 'case' : 'cases'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Details Card */}
        {selectedDomainData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl mb-8">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl text-white">
                      {selectedDomainData.name}
                    </CardTitle>
                    <CardDescription className="text-slate-400 mt-1">
                      {selectedDomainData.description}
                    </CardDescription>
                  </div>
                  {selectedDomainData && (() => {
                    const IconComponent = selectedDomainData.icon;
                    return <IconComponent className="w-8 h-8 text-[#a3e635]" />;
                  })()}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Key Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDomainData.topics.map(topic => (
                      <Badge 
                        key={topic} 
                        className="bg-[#a3e635]/20 text-[#a3e635] hover:bg-[#a3e635]/30"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                    <p className="text-2xl font-bold text-[#a3e635]">{selectedDomainData.niches}</p>
                    <p className="text-xs text-slate-400">Specialized Niches</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50">
                    <p className="text-2xl font-bold text-[#a3e635]">{selectedDomainData.cases}+</p>
                    <p className="text-xs text-slate-400">Real Case Studies</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 bg-slate-800/20 rounded-lg p-4 border border-slate-700/50">
                  📝 Once you select this domain, you'll choose a specialized niche within {selectedDomainData.name}, then take a skill assessment to personalize your learning path.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="border-slate-600 text-slate-300 hover:bg-slate-800/50 px-8"
          >
            Go Back
          </Button>

          <Button
            disabled={!selectedDomain || loading}
            onClick={() => selectedDomain && handleSelect(selectedDomain)}
            className="bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold px-8"
          >
            {loading ? (
              <>
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
                  ⏳
                </motion.span>
                Processing...
              </>
            ) : (
              <>
                Continue to Niches
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        {/* Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-slate-500 text-sm"
        >
          <p>💡 Tip: You'll be able to explore other domains anytime after onboarding</p>
        </motion.div>
      </div>
    </div>
  );
}
