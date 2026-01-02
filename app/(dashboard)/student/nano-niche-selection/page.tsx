'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const nanoNichesData: Record<string, Array<{
  id: string;
  name: string;
  description: string;
  skills: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}>> = {
  cybersecurity: [
    {
      id: 'web-security',
      name: 'Web Security',
      description: 'Secure web applications against OWASP threats and vulnerabilities',
      skills: ['OWASP Top 10', 'Secure Coding', 'Authentication', 'API Security'],
      difficulty: 'beginner'
    },
    {
      id: 'soc-operations',
      name: 'SOC Operations',
      description: 'Monitor, detect, and respond to security incidents in real-time',
      skills: ['SIEM', 'Threat Detection', 'Incident Response', 'Log Analysis'],
      difficulty: 'intermediate'
    },
    {
      id: 'cloud-security',
      name: 'Cloud Security',
      description: 'Secure cloud infrastructure and multi-cloud environments',
      skills: ['AWS/Azure Security', 'Identity Management', 'Data Protection', 'Compliance'],
      difficulty: 'intermediate'
    },
    {
      id: 'grc-compliance',
      name: 'GRC & Compliance',
      description: 'Governance, risk management, and regulatory compliance',
      skills: ['ISO 27001', 'GDPR', 'Risk Management', 'Audit'],
      difficulty: 'intermediate'
    },
    {
      id: 'threat-intel',
      name: 'Threat Intelligence',
      description: 'Research threats, analyze adversaries, and predict attacks',
      skills: ['Threat Hunting', 'Malware Analysis', 'Research', 'Attribution'],
      difficulty: 'advanced'
    }
  ],
  ai: [
    {
      id: 'business-automation',
      name: 'Business Automation',
      description: 'Automate business processes with AI and RPA',
      skills: ['Process Mining', 'RPA', 'Workflow Design', 'Integration'],
      difficulty: 'beginner'
    },
    {
      id: 'nlp-chatbots',
      name: 'NLP & Chatbots',
      description: 'Build intelligent conversational systems and text analysis tools',
      skills: ['NLP', 'Intent Recognition', 'Dialogue Management', 'Sentiment Analysis'],
      difficulty: 'beginner'
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision',
      description: 'Develop systems that see and understand images and video',
      skills: ['Image Recognition', 'Object Detection', 'Neural Networks', 'OpenCV'],
      difficulty: 'intermediate'
    },
    {
      id: 'ai-healthcare',
      name: 'AI for Healthcare',
      description: 'Apply AI to diagnose, predict, and improve patient outcomes',
      skills: ['Medical Imaging', 'Predictive Models', 'Clinical Data', 'Validation'],
      difficulty: 'intermediate'
    },
    {
      id: 'ai-finance',
      name: 'AI for Finance',
      description: 'Build trading, risk assessment, and fraud detection systems',
      skills: ['Quantitative Analysis', 'Time Series', 'Fraud Detection', 'Portfolio Optimization'],
      difficulty: 'advanced'
    }
  ],
  development: [
    {
      id: 'saas-fullstack',
      name: 'SaaS Full Stack',
      description: 'Build scalable SaaS applications from frontend to backend',
      skills: ['React/Vue', 'Node.js/Python', 'Databases', 'Deployment'],
      difficulty: 'beginner'
    },
    {
      id: 'mobile-apps',
      name: 'Mobile Apps',
      description: 'Develop iOS and Android applications',
      skills: ['React Native', 'Swift', 'Kotlin', 'Mobile UX'],
      difficulty: 'beginner'
    },
    {
      id: 'enterprise-systems',
      name: 'Enterprise Systems',
      description: 'Design large-scale, mission-critical systems',
      skills: ['Microservices', 'Architecture', 'Scalability', 'Integration'],
      difficulty: 'intermediate'
    },
    {
      id: 'api-backend',
      name: 'API & Backend',
      description: 'Build robust APIs and backend services',
      skills: ['REST/GraphQL', 'Authentication', 'Performance', 'Security'],
      difficulty: 'beginner'
    },
    {
      id: 'devops',
      name: 'DevOps & Infrastructure',
      description: 'Manage deployment, infrastructure, and CI/CD pipelines',
      skills: ['Kubernetes', 'Docker', 'CI/CD', 'Cloud Platforms'],
      difficulty: 'intermediate'
    }
  ],
  ecommerce: [
    {
      id: 'shopify-d2c',
      name: 'Shopify & D2C',
      description: 'Launch and scale direct-to-consumer ecommerce stores',
      skills: ['Shopify', 'Store Design', 'Conversion Rate', 'Analytics'],
      difficulty: 'beginner'
    },
    {
      id: 'supply-chain',
      name: 'Supply Chain',
      description: 'Optimize inventory, logistics, and supply chain operations',
      skills: ['Inventory Management', 'Logistics', 'Demand Planning', 'ERP'],
      difficulty: 'intermediate'
    },
    {
      id: 'payment-checkout',
      name: 'Payment & Checkout',
      description: 'Design secure payment systems and checkout flows',
      skills: ['Payment Gateways', 'PCI Compliance', 'Fraud Prevention', 'User Experience'],
      difficulty: 'intermediate'
    },
    {
      id: 'marketplace',
      name: 'Marketplace Platform',
      description: 'Build multi-vendor marketplace platforms',
      skills: ['Platform Design', 'Vendor Management', 'Commission Systems', 'Scaling'],
      difficulty: 'advanced'
    }
  ],
  marketing: [
    {
      id: 'performance-marketing',
      name: 'Performance Marketing',
      description: 'Master paid advertising and ROI optimization',
      skills: ['Google Ads', 'Facebook Ads', 'Analytics', 'Attribution'],
      difficulty: 'beginner'
    },
    {
      id: 'seo-systems',
      name: 'SEO & Content Systems',
      description: 'Build organic traffic through SEO and content strategies',
      skills: ['SEO', 'Content Strategy', 'Technical SEO', 'Keyword Research'],
      difficulty: 'beginner'
    },
    {
      id: 'crm-funnels',
      name: 'CRM & Sales Funnels',
      description: 'Design sales funnels and customer relationship systems',
      skills: ['CRM', 'Sales Funnels', 'Email Marketing', 'Lead Generation'],
      difficulty: 'intermediate'
    }
  ]
};

const difficultyColors: Record<string, string> = {
  beginner: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  intermediate: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  advanced: 'bg-red-500/20 text-red-300 border-red-500/30'
};

export default function NanoNicheSelection() {
  const router = useRouter();
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const domain = localStorage.getItem('selectedDomain');
    setSelectedDomain(domain);
  }, []);

  const niches = selectedDomain ? nanoNichesData[selectedDomain as keyof typeof nanoNichesData] || [] : [];
  const selectedNicheData = niches.find(n => n.id === selectedNiche);

  const handleSelect = async (nicheId: string) => {
    setSelectedNiche(nicheId);
    setLoading(true);

    // Store selection
    localStorage.setItem('selectedNiche', nicheId);

    // Simulate transition
    await new Promise(resolve => setTimeout(resolve, 800));
    router.push('/student/skill-assessment');
  };

  const handleGoBack = () => {
    router.push('/student/domain-selection');
  };

  if (!selectedDomain) {
    return (
      <div className="min-h-screen bg-[#0b1120] flex items-center justify-center">
        <p className="text-slate-400">Loading...</p>
      </div>
    );
  }

  const domainName = {
    cybersecurity: 'Cybersecurity',
    ai: 'Artificial Intelligence',
    development: 'Software Development',
    ecommerce: 'E-commerce',
    marketing: 'Digital Marketing'
  }[selectedDomain] || 'Domain';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] to-[#1a1f3a] text-slate-200 font-sans py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleGoBack}
              className="text-slate-400 hover:text-white"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Specialized Niches in {domainName}</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose a specialized area within {domainName}. Each niche offers unique skills and real-world applications.
          </p>
        </motion.div>

        {/* Niche Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {niches.map((niche, idx) => {
            const isSelected = selectedNiche === niche.id;

            return (
              <motion.div
                key={niche.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => !loading && handleSelect(niche.id)}
              >
                <Card 
                  className={cn(
                    "h-full cursor-pointer transition-all border-2 relative overflow-hidden",
                    isSelected
                      ? "border-[#a3e635] bg-[#a3e635]/5"
                      : "border-slate-700/50 hover:border-slate-600"
                  )}
                >
                  <CardContent className="pt-6 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {niche.name}
                        </h3>
                        <Badge 
                          className={cn(
                            difficultyColors[niche.difficulty],
                            'border'
                          )}
                        >
                          {niche.difficulty.charAt(0).toUpperCase() + niche.difficulty.slice(1)}
                        </Badge>
                      </div>
                      {isSelected && (
                        <Check className="w-5 h-5 text-[#a3e635]" />
                      )}
                    </div>

                    <p className="text-sm text-slate-400 mb-4">
                      {niche.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {niche.skills.slice(0, 3).map(skill => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="text-xs bg-slate-800/50 text-slate-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {niche.skills.length > 3 && (
                        <Badge 
                          variant="secondary"
                          className="text-xs bg-slate-800/50 text-slate-300"
                        >
                          +{niche.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Details Card */}
        {selectedNicheData && (
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
                      {selectedNicheData.name}
                    </CardTitle>
                    <CardDescription className="text-slate-400 mt-1">
                      {selectedNicheData.description}
                    </CardDescription>
                  </div>
                  <Badge 
                    className={cn(
                      difficultyColors[selectedNicheData.difficulty],
                      'border'
                    )}
                  >
                    {selectedNicheData.difficulty.charAt(0).toUpperCase() + selectedNicheData.difficulty.slice(1)}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNicheData.skills.map(skill => (
                      <Badge 
                        key={skill} 
                        className="bg-[#a3e635]/20 text-[#a3e635] hover:bg-[#a3e635]/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-300 bg-slate-800/20 rounded-lg p-4 border border-slate-700/50">
                  📝 This specialization will provide real-world case studies and hands-on projects focused on {selectedNicheData.name.toLowerCase()}. Next, we'll assess your current skill level.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Button
            variant="outline"
            onClick={handleGoBack}
            className="border-slate-600 text-slate-300 hover:bg-slate-800/50 px-8"
          >
            Choose Domain
          </Button>

          <Button
            disabled={!selectedNiche || loading}
            onClick={() => selectedNiche && handleSelect(selectedNiche)}
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
                Continue to Assessment
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
          <p>💡 Showing {niches.length} niches in {domainName}</p>
        </motion.div>
      </div>
    </div>
  );
}
