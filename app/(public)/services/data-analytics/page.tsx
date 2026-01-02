'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  PieChart,
  LineChart,
  Database,
  Brain,
  TrendingUp,
  Search
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DataAnalyticsPage() {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Business Intelligence',
      description: 'Turn complex data into clear, actionable insights with interactive dashboards.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using advanced machine learning models.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Data Warehousing',
      description: 'Centralize your data from multiple sources into a single, reliable source of truth.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Performance Tracking',
      description: 'Monitor key performance indicators (KPIs) in real-time to stay on top of your goals.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Data Audit',
      description: 'Assessing your current data landscape and identifying quality issues.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Defining metrics that matter and designing a data architecture.'
    },
    {
      number: '03',
      title: 'Integration',
      description: 'Connecting disparate data sources into a unified pipeline.'
    },
    {
      number: '04',
      title: 'Analysis',
      description: 'Applying statistical models and algorithms to uncover patterns.'
    },
    {
      number: '05',
      title: 'Visualization',
      description: 'Creating intuitive reports and dashboards for stakeholders.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-teal-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-emerald-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[80px]" />
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
                <Badge className="mb-4 bg-teal-500/10 text-teal-400 border-teal-500/20">
                  Data Intelligence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Data Analytics
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Transform raw data into actionable insights. We help you make smarter, 
                  faster decisions by unlocking the hidden value in your data.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-teal-600 to-emerald-600 hover:opacity-90 text-white border-0">
                      Start Analyzing
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-emerald-500 blur-3xl opacity-20 rounded-full"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Data Processed', value: '5PB+' },
                      { label: 'ROI Increase', value: '35%' },
                      { label: 'Dashboards', value: '500+' },
                      { label: 'Accuracy', value: '99.9%' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 bg-white/5 rounded-xl">
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-slate-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Unlock Your Data Potential</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Comprehensive data services to drive your business forward.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-950 border border-white/5 rounded-xl p-6 hover:border-teal-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center text-teal-500 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Analytics Workflow</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                From raw data to strategic insights, our process is rigorous and results-oriented.
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
                    <div className="w-10 h-10 bg-slate-900 border border-teal-500/50 rounded-full flex items-center justify-center text-teal-500 font-bold mx-auto mb-4 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
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
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Data Maturity Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  We help you evolve from basic reporting to advanced AI-driven decision making.
                </p>
                <div className="space-y-8">
                  {[
                    { phase: 'Stage 1: Descriptive', desc: 'What happened?', tasks: ['Standard reporting', 'Dashboards', 'Data cleaning'] },
                    { phase: 'Stage 2: Diagnostic', desc: 'Why did it happen?', tasks: ['Root cause analysis', 'Data mining', 'Correlations'] },
                    { phase: 'Stage 3: Predictive', desc: 'What will happen?', tasks: ['Forecasting', 'Trend analysis', 'Simulation'] },
                    { phase: 'Stage 4: Prescriptive', desc: 'How can we make it happen?', tasks: ['Optimization', 'Recommendation engines', 'Automated actions'] }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="relative pb-8 border-l border-slate-800 pl-8 last:pb-0 last:border-0">
                        <div className="absolute left-0 top-2 w-2 h-2 bg-teal-500 rounded-full -translate-x-[5px]"></div>
                        <h4 className="text-lg font-bold text-white mb-1">{phase.phase}</h4>
                        <p className="text-teal-400 text-sm font-medium mb-2">{phase.desc}</p>
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
                <div className="absolute inset-0 bg-linear-to-br from-teal-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>
                <Card className="bg-slate-950 border-white/10 relative overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">The Value of Data</h3>
                    <div className="space-y-6">
                      {[
                        { title: 'Competitive Advantage', desc: 'Spot market trends before your competitors do.' },
                        { title: 'Operational Efficiency', desc: 'Identify bottlenecks and optimize processes.' },
                        { title: 'Customer Personalization', desc: 'Deliver tailored experiences that drive loyalty.' },
                        { title: 'Risk Mitigation', desc: 'Detect anomalies and potential threats early.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-6 h-6 text-teal-500" />
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
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-linear-to-r from-teal-900/50 to-emerald-900/50 border border-teal-500/20 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Become Data-Driven?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Start leveraging your data as a strategic asset today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-teal-900 hover:bg-slate-100">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
