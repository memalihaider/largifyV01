'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Search,
  Users,
  Target,
  BarChart3,
  Globe,
  Megaphone,
  PenTool,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MarketingSEOPage() {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and attract more organic traffic.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Targeted Strategies',
      description: 'Create data-driven marketing strategies to reach your ideal customers.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Lead Generation',
      description: 'Drive traffic and generate high-quality leads for your business.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Tracking',
      description: 'Monitor and analyze your marketing performance to ensure success.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Audit & Analysis',
      description: 'Comprehensive audit of your current digital presence and competitor analysis.'
    },
    {
      number: '02',
      title: 'Strategy Development',
      description: 'Creating a tailored marketing strategy aligned with your business goals and target audience.'
    },
    {
      number: '03',
      title: 'Optimization & Content',
      description: 'On-page SEO optimization and creation of high-quality, engaging content.'
    },
    {
      number: '04',
      title: 'Campaign Launch',
      description: 'Executing targeted campaigns across selected channels (Search, Social, Email).'
    },
    {
      number: '05',
      title: 'Monitoring & Reporting',
      description: 'Continuous monitoring of performance metrics and regular reporting on ROI.'
    }
  ];

  const roadmap = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      timeline: 'Month 1',
      items: ['SEO Audit', 'Keyword Research', 'Competitor Analysis', 'Website Optimization']
    },
    {
      phase: 'Phase 2',
      title: 'Content & Outreach',
      timeline: 'Months 2-3',
      items: ['Content Strategy', 'Blog Writing', 'Link Building', 'Social Media Setup']
    },
    {
      phase: 'Phase 3',
      title: 'Growth & Scale',
      timeline: 'Months 4-6',
      items: ['PPC Campaigns', 'Email Marketing', 'Conversion Optimization', 'Advanced Analytics']
    },
    {
      phase: 'Phase 4',
      title: 'Domination',
      timeline: 'Ongoing',
      items: ['Market Expansion', 'Brand Authority', 'Automated Funnels', 'Retargeting']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-amber-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-amber-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Badge className="mb-4 bg-white/10 text-white border-white/20">
                  Digital Growth
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 heading-gradient">
                  Digital Marketing & SEO
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Boost your online visibility and attract more customers with our SEO and digital marketing services. 
                  We improve your search engine rankings and create strategies to drive traffic and generate leads.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-amber-600 to-amber-800 hover:opacity-90 text-white border-0">
                      Grow Your Business
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                {/* Decorative Ring */}
                <div className="absolute -inset-4 border border-amber-500/5 rounded-[2.5rem] -z-10 opacity-50" />
                
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/40" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Largify Ads v3.1.0</div>
                    <div className="w-12" />
                  </div>
                  <div className="p-6 bg-slate-950/50 backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                              <TrendingUp className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Traffic Growth</div>
                          </div>
                          <div className="h-24 flex items-end gap-1">
                            {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100, 95, 110].map((h, i) => (
                              <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 0.5 + (i * 0.05) }}
                                className="flex-1 bg-amber-500/30 rounded-t-sm" 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Conversion Rate</div>
                            <div className="text-2xl font-bold text-white">4.8%</div>
                            <div className="text-[10px] text-emerald-400 mt-1">+0.6% from last week</div>
                          </div>
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Avg. CPC</div>
                            <div className="text-2xl font-bold text-white">$0.42</div>
                            <div className="text-[10px] text-amber-400 mt-1">Optimized</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 h-full">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Campaign Status</div>
                          <div className="space-y-3">
                            {[
                              { name: 'Google Search', status: 'Active', color: 'bg-emerald-500' },
                              { name: 'Social Media', status: 'Active', color: 'bg-emerald-500' },
                              { name: 'Email Blast', status: 'Scheduled', color: 'bg-amber-500' }
                            ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-[10px] font-bold text-slate-300">{item.name}</span>
                                <div className="flex items-center gap-1.5">
                                  <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                                  <span className="text-[8px] font-bold text-slate-500 uppercase">{item.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-800">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                              CAMPAIGNS LIVE
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Marketing Solutions */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Marketing Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We use data and creativity to help your brand stand out in the digital landscape.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:border-amber-500/20 transition-all">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4 bg-slate-900/30"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A data-driven approach to maximizing your digital impact.
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="text-6xl font-bold text-amber-900/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 w-full h-[2px] bg-linear-to-r from-amber-900/0 via-amber-900/50 to-amber-900/0 translate-x-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Roadmap Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Growth Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  A strategic timeline to build your brand and increase revenue.
                </p>
                <div className="space-y-8">
                  {roadmap.map((phase, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-8 border-l border-amber-900/50"
                    >
                      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-amber-400 text-sm font-bold">{phase.phase}</span>
                        <span className="text-slate-500 text-xs">{phase.timeline}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {phase.items.map((item, j) => (
                          <Badge key={j} variant="secondary" className="bg-amber-900/20 text-amber-300 border-amber-800/30">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full" />
                <Card className="relative border-slate-800 bg-slate-900/80 backdrop-blur-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Service Packages</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                            <Globe className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium">SEO Starter</div>
                            <div className="text-slate-400 text-xs">On-page & Local SEO</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-amber-400 font-bold">$1.5k/mo</div>
                          <div className="text-slate-500 text-xs">Minimum 3 months</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                            <Megaphone className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium">Growth Marketing</div>
                            <div className="text-slate-400 text-xs">SEO + PPC + Social</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-amber-400 font-bold">$3k - $5k/mo</div>
                          <div className="text-slate-500 text-xs">Full service</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                            <PenTool className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium">Content & Brand</div>
                            <div className="text-slate-400 text-xs">Strategy & Production</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-amber-400 font-bold">Custom</div>
                          <div className="text-slate-500 text-xs">Project based</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-slate-800">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Monthly performance reports included</span>
                      </div>
                      <Link href="/contact">
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          Start Growing Today
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Marketing Benefits */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Marketing Benefits</h2>
                <div className="space-y-6">
                  {[
                    'Increased organic search visibility',
                    'Higher conversion rates',
                    'Data-driven campaign optimization',
                    'Comprehensive brand strategy'
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-lg text-slate-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-linear-to-br from-amber-600/20 to-amber-900/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm shadow-2xl shadow-amber-500/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ready to grow?</h3>
                <p className="text-amber-100 mb-8">
                  Let's create a digital marketing strategy that drives results and helps your business thrive.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-white text-amber-600 hover:bg-amber-50 border-0">
                    Get a Free SEO Audit
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
