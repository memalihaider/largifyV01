'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  SmartphoneIcon
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MobileDevelopmentPage() {
  const features = [
    {
      icon: <SmartphoneIcon className="w-6 h-6" />,
      title: 'iOS & Android',
      description: 'High-performance apps developed for both major mobile platforms.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Optimized Speed',
      description: 'Fast and responsive apps that provide a smooth user experience.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure Architecture',
      description: 'Built with security as a priority to protect user data and privacy.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User Engagement',
      description: 'Intuitive designs that keep users engaged and coming back.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Strategy',
      description: 'Defining app goals, target audience, and monetization strategy.'
    },
    {
      number: '02',
      title: 'UX/UI Design',
      description: 'Creating intuitive user flows and stunning visual interfaces.'
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building the app using native or cross-platform technologies.'
    },
    {
      number: '04',
      title: 'Testing',
      description: 'Rigorous testing on multiple devices to ensure stability.'
    },
    {
      number: '05',
      title: 'Deployment',
      description: 'App Store and Play Store submission and optimization.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-emerald-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-emerald-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-900/10 rounded-full blur-[80px]" />
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
                  Mobile Engineering
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Mobile App Development
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Develop intuitive and high-performance apps for iOS and Android platforms. 
                  We create user-friendly apps that are optimized for speed, security, and engagement, helping your business thrive on mobile.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-emerald-600 to-emerald-800 hover:opacity-90 text-white border-0">
                      Start App Project
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
                <div className="absolute -inset-4 border border-emerald-500/5 rounded-[2.5rem] -z-10 opacity-50" />
                
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/40" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Largify Mobile v2.4.0</div>
                    <div className="w-12" />
                  </div>
                  <div className="p-6 bg-slate-950/50 backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                              <Smartphone className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">App Performance</div>
                          </div>
                          <div className="h-24 flex items-end gap-1">
                            {[70, 85, 75, 95, 80, 100, 90, 110, 105, 120, 115, 130].map((h, i) => (
                              <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 0.5 + (i * 0.05) }}
                                className="flex-1 bg-emerald-500/30 rounded-t-sm" 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Active Installs</div>
                            <div className="text-2xl font-bold text-white">24.5k</div>
                            <div className="text-[10px] text-emerald-400 mt-1">+18% this month</div>
                          </div>
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Crash-free Rate</div>
                            <div className="text-2xl font-bold text-white">99.9%</div>
                            <div className="text-[10px] text-emerald-400 mt-1">Stable</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 h-full">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Build Pipeline</div>
                          <div className="space-y-3">
                            {[
                              { name: 'iOS Build', status: 'Success', color: 'bg-emerald-500' },
                              { name: 'Android Build', status: 'Success', color: 'bg-emerald-500' },
                              { name: 'Unit Tests', status: 'Passed', color: 'bg-emerald-500' }
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
                              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              DEPLOYMENT READY
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

        {/* Mobile Solutions */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Mobile Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We build apps that users love and businesses rely on.
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
                  <Card className="h-full border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:border-emerald-500/20 transition-all">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6">
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
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">App Development Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                From concept to app store, we handle every step of the journey.
              </p>
            </div>
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 hidden lg:block -translate-y-1/2"></div>
              
              <div className="grid lg:grid-cols-5 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-950 border border-white/10 rounded-xl p-6 text-center relative"
                  >
                    <div className="w-10 h-10 bg-slate-900 border border-emerald-500/50 rounded-full flex items-center justify-center text-emerald-500 font-bold mx-auto mb-4 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Development Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  A clear path to launching your successful mobile application.
                </p>
                <div className="space-y-8">
                  {[
                    { phase: 'Week 1-2: Strategy & Design', tasks: ['Market research', 'User personas', 'Wireframing'] },
                    { phase: 'Week 3-4: UI Design & Prototype', tasks: ['High-fidelity design', 'Interactive prototype', 'Design system'] },
                    { phase: 'Week 5-10: Development', tasks: ['Frontend development', 'API integration', 'Database setup'] },
                    { phase: 'Week 11-12: Testing & Launch', tasks: ['Beta testing', 'Bug fixing', 'App Store submission'] }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="relative pb-8 border-l border-slate-800 pl-8 last:pb-0 last:border-0">
                        <div className="absolute left-0 top-2 w-2 h-2 bg-emerald-500 rounded-full -translate-x-[5px]"></div>
                        <h4 className="text-lg font-bold text-white mb-2">{phase.phase}</h4>
                        <ul className="space-y-1">
                          {phase.tasks.map((task, j) => (
                            <li key={j} className="text-slate-400 text-sm flex items-center gap-2">
                              <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-emerald-800/20 blur-3xl rounded-full"></div>
                <Card className="bg-slate-950 border-white/10 relative overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Value Proposition</h3>
                    <div className="space-y-6">
                      {[
                        { title: 'Native Performance', desc: 'Smooth 60fps animations and responsive interactions.' },
                        { title: 'Offline First', desc: 'Apps that work seamlessly even without internet connection.' },
                        { title: 'Cross-Platform', desc: 'Save costs with React Native or Flutter solutions.' },
                        { title: 'Analytics Integrated', desc: 'Track user behavior and app performance.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-400">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <Link href="/contact">
                        <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                          Get a Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Benefits */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4 bg-slate-900/50"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Mobile Benefits</h2>
                <div className="space-y-6">
                  {[
                    'Native performance and feel',
                    'Offline capabilities',
                    'Push notification integration',
                    'App store optimization (ASO)'
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
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
                className="bg-linear-to-br from-emerald-600/20 to-emerald-900/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm shadow-2xl shadow-emerald-500/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ready to go mobile?</h3>
                <p className="text-emerald-100 mb-8">
                  Let's create a mobile app that helps your business reach more customers and thrive.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-white text-emerald-600 hover:bg-blue-50 border-0">
                    Get a Mobile Strategy
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