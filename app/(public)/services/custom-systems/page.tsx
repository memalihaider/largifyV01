'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  LayoutGrid,
  ArrowRight,
  CheckCircle2,
  Database,
  Users,
  CreditCard,
  TrendingUp,
  Layers,
  Code2,
  Settings,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CustomSystemsPage() {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Custom ERP',
      description: 'Integrated management of core business processes for maximum efficiency.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Tailored CRM',
      description: 'Manage customer data and relationships to drive sales and loyalty.'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Advanced POS',
      description: 'Optimize transactions and inventory management for retail and service businesses.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Streamlined Operations',
      description: 'Solutions designed to simplify complex workflows and boost productivity.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Requirements Analysis',
      description: 'We analyze your business processes and identify key requirements for your custom system.'
    },
    {
      number: '02',
      title: 'System Architecture',
      description: 'Designing a scalable and secure architecture tailored to your specific operational needs.'
    },
    {
      number: '03',
      title: 'Agile Development',
      description: 'Iterative development with regular feedback loops to ensure the system meets your expectations.'
    },
    {
      number: '04',
      title: 'Integration & Testing',
      description: 'Seamless integration with existing tools and rigorous testing for reliability and performance.'
    },
    {
      number: '05',
      title: 'Deployment & Training',
      description: 'Smooth deployment and comprehensive training to ensure your team can use the system effectively.'
    }
  ];

  const roadmap = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Design',
      timeline: 'Weeks 1-4',
      items: ['Workflow Analysis', 'Technical Specs', 'UI/UX Prototyping', 'Database Schema']
    },
    {
      phase: 'Phase 2',
      title: 'Core Development',
      timeline: 'Weeks 5-12',
      items: ['Backend Logic', 'Frontend Interface', 'API Development', 'Security Implementation']
    },
    {
      phase: 'Phase 3',
      title: 'Integration',
      timeline: 'Weeks 13-16',
      items: ['Third-party APIs', 'Legacy Data Migration', 'System Testing', 'Performance Tuning']
    },
    {
      phase: 'Phase 4',
      title: 'Launch & Support',
      timeline: 'Ongoing',
      items: ['User Training', 'System Deployment', 'Maintenance', 'Feature Updates']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-indigo-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-indigo-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[80px]" />
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
                  Enterprise Systems
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 heading-gradient">
                  Custom ERP, CRM, & POS
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  We design and implement custom ERP, CRM, and POS systems tailored to your business needs. 
                  Our solutions help streamline operations, manage customer data, and optimize transactions for growth.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-indigo-600 to-indigo-800 hover:opacity-90 text-white border-0">
                      Build Your System
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
                <div className="absolute -inset-4 border border-indigo-500/5 rounded-[2.5rem] -z-10 opacity-50" />
                
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/40" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Largify ERP v4.2</div>
                    <div className="w-12" />
                  </div>
                  <div className="p-6 bg-slate-950/50 backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Revenue Overview</div>
                            <div className="flex gap-1">
                              {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-indigo-500/20 rounded-full" />)}
                            </div>
                          </div>
                          <div className="h-24 flex items-end gap-1">
                            {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60, 75, 55].map((h, i) => (
                              <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 0.5 + (i * 0.05) }}
                                className="flex-1 bg-indigo-500/30 rounded-t-sm" 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Active Users</div>
                            <div className="text-2xl font-bold text-white">1,284</div>
                            <div className="text-[10px] text-emerald-400 mt-1">+12% from last month</div>
                          </div>
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Transactions</div>
                            <div className="text-2xl font-bold text-white">852</div>
                            <div className="text-[10px] text-indigo-400 mt-1">Processing...</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 h-full">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">System Health</div>
                          <div className="space-y-4">
                            {[
                              { label: 'Database', val: 98, color: 'bg-emerald-500' },
                              { label: 'API', val: 94, color: 'bg-indigo-500' },
                              { label: 'Storage', val: 72, color: 'bg-amber-500' }
                            ].map((item, i) => (
                              <div key={i} className="space-y-1">
                                <div className="flex justify-between text-[10px] font-bold text-slate-500">
                                  <span>{item.label}</span>
                                  <span>{item.val}%</span>
                                </div>
                                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.val}%` }}
                                    transition={{ duration: 1, delay: 1 + (i * 0.2) }}
                                    className={`h-full ${item.color}`} 
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-800">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              SYSTEMS ONLINE
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

        {/* System Capabilities */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">System Capabilities</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our custom systems are built to scale with your business and solve your unique challenges.
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
                  <Card className="h-full border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:border-indigo-500/20 transition-all">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Development Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A structured approach to building robust and scalable custom systems.
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
                  <div className="text-6xl font-bold text-indigo-900/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 w-full h-[2px] bg-linear-to-r from-indigo-900/0 via-indigo-900/50 to-indigo-900/0 translate-x-1/2" />
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Implementation Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  We follow a clear timeline to ensure your system is delivered on time and within budget.
                </p>
                <div className="space-y-8">
                  {roadmap.map((phase, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-8 border-l border-indigo-900/50"
                    >
                      <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-indigo-500" />
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-indigo-400 text-sm font-bold">{phase.phase}</span>
                        <span className="text-slate-500 text-xs">{phase.timeline}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {phase.items.map((item, j) => (
                          <Badge key={j} variant="secondary" className="bg-indigo-900/20 text-indigo-300 border-indigo-800/30">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full" />
                <Card className="relative border-slate-800 bg-slate-900/80 backdrop-blur-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Project Valuation</h3>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                            <Layers className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium">Small Business ERP</div>
                            <div className="text-slate-400 text-xs">Basic modules & reporting</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-indigo-400 font-bold">$15k - $30k</div>
                          <div className="text-slate-500 text-xs">4-8 weeks</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                            <Code2 className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium">Custom CRM Solution</div>
                            <div className="text-slate-400 text-xs">Sales & support automation</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-indigo-400 font-bold">$25k - $50k</div>
                          <div className="text-slate-500 text-xs">8-12 weeks</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-950/50 border border-slate-800">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                            <Settings className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-white font-medium">Enterprise Suite</div>
                            <div className="text-slate-400 text-xs">Full integration & AI analytics</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-indigo-400 font-bold">$50k+</div>
                          <div className="text-slate-500 text-xs">12+ weeks</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-slate-800">
                      <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Includes 3 months support & maintenance</span>
                      </div>
                      <Link href="/contact">
                        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                          Get a Detailed Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>

        {/* System Benefits */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">System Benefits</h2>
                <div className="space-y-6">
                  {[
                    'Unified data architecture',
                    'Real-time reporting and analytics',
                    'Scalable infrastructure',
                    'Seamless third-party integrations'
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400" />
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
                className="bg-linear-to-br from-indigo-600/20 to-indigo-900/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm shadow-2xl shadow-indigo-500/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ready to optimize?</h3>
                <p className="text-indigo-100 mb-8">
                  Let's build a custom system that streamlines your operations and drives growth.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-white text-indigo-600 hover:bg-blue-50 border-0">
                    Request a Demo
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
