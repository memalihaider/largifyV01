'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Zap,
  FileCode,
  Target,
  TrendingUp,
  Compass,
  Briefcase,
  Presentation,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ConsultingServicePage() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Innovation Strategy',
      description: 'Define your innovation roadmap and priorities to stay ahead of the competition.'
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: 'Technology Roadmap',
      description: 'Plan your technology evolution path with expert guidance on emerging trends.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Process Re-engineering',
      description: 'Redesign your business processes for digital excellence and operational efficiency.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Digital Transformation',
      description: 'Navigate the complexities of digital transformation with a proven strategic framework.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'Deep dive into your current business model, technology stack, and market position.'
    },
    {
      number: '02',
      title: 'Gap Analysis',
      description: 'Identifying the gap between your current state and your desired future state.'
    },
    {
      number: '03',
      title: 'Strategic Planning',
      description: 'Developing a comprehensive roadmap with actionable steps and clear milestones.'
    },
    {
      number: '04',
      title: 'Implementation Support',
      description: 'Guiding your team through the execution phase to ensure successful adoption.'
    },
    {
      number: '05',
      title: 'Review & Optimize',
      description: 'Measuring results against KPIs and refining the strategy for continuous improvement.'
    }
  ];

  const roadmap = [
    {
      phase: 'Phase 1',
      title: 'Assessment',
      timeline: 'Weeks 1-2',
      items: ['Stakeholder Interviews', 'Tech Audit', 'Market Research', 'SWOT Analysis']
    },
    {
      phase: 'Phase 2',
      title: 'Strategy',
      timeline: 'Weeks 3-4',
      items: ['Vision Setting', 'Roadmap Creation', 'Resource Planning', 'Risk Assessment']
    },
    {
      phase: 'Phase 3',
      title: 'Execution',
      timeline: 'Months 2-6',
      items: ['Pilot Projects', 'Change Management', 'Tech Implementation', 'Process Optimization']
    },
    {
      phase: 'Phase 4',
      title: 'Scale',
      timeline: 'Ongoing',
      items: ['Full Rollout', 'Performance Monitoring', 'Innovation Labs', 'Strategic Review']
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
                  Strategic Advisory
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Innovation Consulting
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Navigate digital transformation with strategic guidance. We help enterprises innovate, 
                  adapt, and lead in their industries through expert technology consulting.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-amber-600 to-amber-800 hover:opacity-90 text-white border-0">
                      Consult with Experts
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
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Largify Strategy v1.2.0</div>
                    <div className="w-12" />
                  </div>
                  <div className="p-6 bg-slate-950/50 backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                              <Lightbulb className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Innovation Roadmap</div>
                          </div>
                          <div className="space-y-4">
                            {[
                              { label: 'Phase 1: Discovery', val: 100, color: 'bg-emerald-500' },
                              { label: 'Phase 2: Strategy', val: 85, color: 'bg-amber-500' },
                              { label: 'Phase 3: Execution', val: 40, color: 'bg-slate-700' }
                            ].map((item, i) => (
                              <div key={i} className="space-y-1">
                                <div className="flex justify-between text-[8px] font-bold text-slate-500 uppercase">
                                  <span>{item.label}</span>
                                  <span>{item.val}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.val}%` }}
                                    transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                                    className={`h-full ${item.color}`} 
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">ROI Forecast</div>
                            <div className="text-2xl font-bold text-white">3.5x</div>
                            <div className="text-[10px] text-emerald-400 mt-1">Estimated</div>
                          </div>
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Market Fit</div>
                            <div className="text-2xl font-bold text-white">High</div>
                            <div className="text-[10px] text-amber-400 mt-1">Validated</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 h-full">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Strategic Pillars</div>
                          <div className="space-y-3">
                            {[
                              { name: 'Scalability', status: 'Verified', color: 'bg-emerald-500' },
                              { name: 'Security', status: 'Verified', color: 'bg-emerald-500' },
                              { name: 'Innovation', status: 'Active', color: 'bg-emerald-500' }
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
                              ADVISORY ACTIVE
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

        {/* Consulting Services */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Consulting Services</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our strategic approach helps you identify opportunities and mitigate risks in your digital journey.
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
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Consulting Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A structured methodology to drive meaningful change and results.
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Transformation Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  A clear path to achieving your strategic objectives.
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
                    <h3 className="text-2xl font-bold text-white mb-6">Engagement Models</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                            <Compass className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium">Strategic Audit</div>
                            <div className="text-slate-400 text-xs">Assessment & Roadmap</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-amber-400 font-bold">$5k</div>
                          <div className="text-slate-500 text-xs">2 weeks</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                            <Briefcase className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium">Project Advisory</div>
                            <div className="text-slate-400 text-xs">Ongoing guidance</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-amber-400 font-bold">$8k/mo</div>
                          <div className="text-slate-500 text-xs">Retainer</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                            <Presentation className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium">Full Transformation</div>
                            <div className="text-slate-400 text-xs">End-to-end execution</div>
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
                        <span>Confidentiality guaranteed</span>
                      </div>
                      <Link href="/contact">
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          Schedule a Call
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Strategic Benefits */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Strategic Benefits</h2>
                <div className="space-y-6">
                  {[
                    'Clear innovation roadmap and priorities',
                    'Reduced technology risk and debt',
                    'Improved operational agility',
                    'Enhanced competitive advantage'
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
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
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
                <h3 className="text-2xl font-bold text-white mb-6">Ready to innovate?</h3>
                <p className="text-amber-100 mb-8">
                  Partner with our consultants to define your digital future and lead your industry.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-white text-amber-600 hover:bg-amber-50 border-0">
                    Book a Consultation
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
