'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cpu,
  ArrowRight,
  CheckCircle2,
  GitBranch,
  Terminal,
  Server,
  RefreshCw,
  Settings,
  Activity
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function DevOpsPage() {
  const features = [
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'CI/CD Pipelines',
      description: 'Automate your build, test, and deployment processes for faster release cycles.'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Infrastructure as Code',
      description: 'Manage and provision your infrastructure through code for consistency and speed.'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Monitoring & Logging',
      description: 'Gain real-time visibility into your system\'s health and performance.'
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Containerization',
      description: 'Package applications with their dependencies for consistent execution anywhere.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Audit',
      description: 'Evaluating your current development and operations workflows.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Designing a DevOps roadmap tailored to your team\'s needs.'
    },
    {
      number: '03',
      title: 'Automation',
      description: 'Implementing tools to automate repetitive tasks and deployments.'
    },
    {
      number: '04',
      title: 'Integration',
      description: 'Connecting development, testing, and operations tools seamlessly.'
    },
    {
      number: '05',
      title: 'Optimization',
      description: 'Continuous improvement of pipelines and infrastructure.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-cyan-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-blue-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[80px]" />
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
                <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
                  DevOps Engineering
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  DevOps Services
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Bridge the gap between development and operations. We help you ship code faster, 
                  more reliably, and with higher quality through automation and best practices.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-cyan-600 to-blue-600 hover:opacity-90 text-white border-0">
                      Streamline Operations
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
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 blur-3xl opacity-20 rounded-full"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Deployment Freq', value: '10x' },
                      { label: 'Failure Rate', value: '<1%' },
                      { label: 'Recovery Time', value: '-80%' },
                      { label: 'Efficiency', value: '+50%' }
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Operational Excellence</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Tools and practices to accelerate your software delivery.
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
                  className="bg-slate-950 border border-white/5 rounded-xl p-6 hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-500 mb-4 group-hover:scale-110 transition-transform">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">The DevOps Cycle</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A continuous loop of improvement, from planning to monitoring.
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
                    <div className="w-10 h-10 bg-slate-900 border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-500 font-bold mx-auto mb-4 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Transformation Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  Adopting DevOps is a journey. We help you navigate the cultural and technical shifts.
                </p>
                <div className="space-y-8">
                  {[
                    { phase: 'Phase 1: Assessment', tasks: ['Workflow analysis', 'Toolchain audit', 'Culture assessment'] },
                    { phase: 'Phase 2: Foundation', tasks: ['Version control setup', 'CI server configuration', 'Basic automation'] },
                    { phase: 'Phase 3: Acceleration', tasks: ['Containerization', 'Infrastructure as Code', 'Automated testing'] },
                    { phase: 'Phase 4: Maturity', tasks: ['Self-healing systems', 'Advanced monitoring', 'DevSecOps'] }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="relative pb-8 border-l border-slate-800 pl-8 last:pb-0 last:border-0">
                        <div className="absolute left-0 top-2 w-2 h-2 bg-cyan-500 rounded-full -translate-x-[5px]"></div>
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
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
                <Card className="bg-slate-950 border-white/10 relative overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Business Value</h3>
                    <div className="space-y-6">
                      {[
                        { title: 'Faster Time to Market', desc: 'Release features to customers more frequently.' },
                        { title: 'Improved Quality', desc: 'Catch bugs early with automated testing.' },
                        { title: 'Higher Stability', desc: 'Reduce downtime with reliable deployment processes.' },
                        { title: 'Better Collaboration', desc: 'Break down silos between dev and ops teams.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-6 h-6 text-cyan-500" />
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
                        <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
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
            <div className="bg-linear-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/20 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Workflow?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's build a high-performance software delivery machine together.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-cyan-900 hover:bg-slate-100">
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
