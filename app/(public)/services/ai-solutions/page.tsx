'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain,
  ArrowRight,
  CheckCircle2,
  Bot,
  BarChart3,
  Zap,
  Cpu
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AISolutionsPage() {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'Task Automation',
      description: 'Automate repetitive tasks to free up your team for higher-value work.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Data Analysis',
      description: 'Extract meaningful insights from complex data to make informed decisions.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Efficiency Boost',
      description: 'Improve operational efficiency and productivity across your organization.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Growth Potential',
      description: 'Unlock new opportunities for growth through AI-driven innovation.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Data Audit',
      description: 'Analyzing your data infrastructure and identifying AI opportunities.'
    },
    {
      number: '02',
      title: 'Model Selection',
      description: 'Choosing the right algorithms and models for your specific use case.'
    },
    {
      number: '03',
      title: 'Training',
      description: 'Training and fine-tuning models using your proprietary data.'
    },
    {
      number: '04',
      title: 'Integration',
      description: 'Seamlessly integrating AI solutions into your existing workflows.'
    },
    {
      number: '05',
      title: 'Optimization',
      description: 'Continuous monitoring and retraining to ensure peak performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-violet-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-purple-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[80px]" />
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
                  Artificial Intelligence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  AI Solutions
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Harness the power of Artificial Intelligence to automate tasks, analyze data, and make informed business decisions. 
                  Our AI solutions improve efficiency, productivity, and overall growth potential.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-violet-600 to-purple-600 hover:opacity-90 text-white border-0">
                      Explore AI Options
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
                <div className="absolute -inset-4 border border-violet-500/5 rounded-[2.5rem] -z-10 opacity-50" />
                
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/40" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Largify AI v2.0.1</div>
                    <div className="w-12" />
                  </div>
                  <div className="p-6 bg-slate-950/50 backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                              <Brain className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Neural Network Activity</div>
                          </div>
                          <div className="h-24 flex items-end gap-1">
                            {[60, 40, 85, 30, 95, 50, 70, 45, 80, 65, 90, 55].map((h, i) => (
                              <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 0.5 + (i * 0.05) }}
                                className="flex-1 bg-violet-500/30 rounded-t-sm" 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Model Accuracy</div>
                            <div className="text-2xl font-bold text-white">99.4%</div>
                            <div className="text-[10px] text-emerald-400 mt-1">Optimized</div>
                          </div>
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Inference Time</div>
                            <div className="text-2xl font-bold text-white">12ms</div>
                            <div className="text-[10px] text-violet-400 mt-1">Real-time</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 h-full">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">AI Agents</div>
                          <div className="space-y-3">
                            {[
                              { name: 'DataBot', status: 'Active', color: 'bg-emerald-500' },
                              { name: 'Analyst', status: 'Active', color: 'bg-emerald-500' },
                              { name: 'Optimizer', status: 'Idle', color: 'bg-slate-500' }
                            ].map((agent, i) => (
                              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-[10px] font-bold text-slate-300">{agent.name}</span>
                                <div className="flex items-center gap-1.5">
                                  <div className={`w-1.5 h-1.5 rounded-full ${agent.color}`} />
                                  <span className="text-[8px] font-bold text-slate-500 uppercase">{agent.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-800">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                              <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                              CORE ONLINE
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

        {/* AI Capabilities */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">AI Capabilities</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We build intelligent systems that learn, adapt, and help your business thrive.
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
                  <Card className="h-full border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:border-violet-500/20 transition-all">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-6">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">AI Implementation Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A data-driven approach to integrating artificial intelligence into your business.
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
                    <div className="w-10 h-10 bg-slate-900 border border-violet-500/50 rounded-full flex items-center justify-center text-violet-500 font-bold mx-auto mb-4 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Implementation Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  From data preparation to deployment, we guide you through the AI journey.
                </p>
                <div className="space-y-8">
                  {[
                    { phase: 'Week 1-2: Data Assessment', tasks: ['Data quality audit', 'Infrastructure review', 'Feasibility study'] },
                    { phase: 'Week 3-4: Model Design', tasks: ['Algorithm selection', 'Architecture design', 'Proof of concept'] },
                    { phase: 'Week 5-8: Development & Training', tasks: ['Model training', 'Hyperparameter tuning', 'Validation'] },
                    { phase: 'Week 9: Deployment & Monitoring', tasks: ['Production deployment', 'Performance monitoring', 'Feedback loop'] }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="relative pb-8 border-l border-slate-800 pl-8 last:pb-0 last:border-0">
                        <div className="absolute left-0 top-2 w-2 h-2 bg-violet-500 rounded-full -translate-x-[5px]"></div>
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
                <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 to-purple-800/20 blur-3xl rounded-full"></div>
                <Card className="bg-slate-950 border-white/10 relative overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Value Proposition</h3>
                    <div className="space-y-6">
                      {[
                        { title: 'Data-Driven Decisions', desc: 'Make choices based on hard data, not guesswork.' },
                        { title: 'Automated Workflows', desc: 'Reduce manual labor and operational costs.' },
                        { title: 'Predictive Insights', desc: 'Anticipate market trends and customer behavior.' },
                        { title: 'Scalable Intelligence', desc: 'Solutions that grow with your data volume.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-6 h-6 text-violet-500" />
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
                        <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
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

        {/* Strategic AI Benefits */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4 bg-slate-900/50"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Strategic AI Benefits</h2>
                <div className="space-y-6">
                  {[
                    'Predictive analytics for better planning',
                    'Natural language processing for customer support',
                    'Computer vision for quality control',
                    'Custom machine learning models'
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-violet-400" />
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
                className="bg-linear-to-br from-violet-600/20 to-purple-900/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm shadow-2xl shadow-violet-500/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ready to innovate?</h3>
                <p className="text-violet-100 mb-8">
                  Partner with us to integrate AI into your business and gain a competitive edge.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-white text-violet-600 hover:bg-violet-50 border-0">
                    Schedule an AI Audit
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