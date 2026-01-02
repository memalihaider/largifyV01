'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Cloud,
  ArrowRight,
  CheckCircle2,
  Server,
  Database,
  Shield,
  Zap,
  Globe,
  Lock
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CloudInfrastructurePage() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Migration',
      description: 'Seamlessly move your applications and data to the cloud with minimal downtime.'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Infrastructure Design',
      description: 'Architecting robust, scalable, and cost-effective cloud environments.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Cloud Security',
      description: 'Implementing best practices to secure your cloud infrastructure and data.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Fine-tuning your cloud resources for maximum speed and efficiency.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'Analyzing your current infrastructure and defining cloud goals.'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Creating a detailed migration strategy and architecture design.'
    },
    {
      number: '03',
      title: 'Migration',
      description: 'Executing the migration plan with a focus on data integrity and uptime.'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Refining the environment for cost, performance, and security.'
    },
    {
      number: '05',
      title: 'Management',
      description: 'Ongoing monitoring, maintenance, and support of your cloud systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-sky-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-blue-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[80px]" />
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
                <Badge className="mb-4 bg-sky-500/10 text-sky-400 border-sky-500/20">
                  Cloud Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Cloud Infrastructure
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Scalable, secure, and efficient cloud solutions for your growing business. 
                  We help you leverage the full power of the cloud to drive innovation and reduce costs.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-sky-600 to-blue-600 hover:opacity-90 text-white border-0">
                      Start Migration
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
                <div className="absolute inset-0 bg-linear-to-r from-sky-500 to-blue-500 blur-3xl opacity-20 rounded-full"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Uptime Guarantee', value: '99.99%' },
                      { label: 'Cost Reduction', value: '40%' },
                      { label: 'Migrations', value: '100+' },
                      { label: 'Security Score', value: 'A+' }
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Enterprise Cloud Services</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Comprehensive solutions for AWS, Azure, and Google Cloud Platform.
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
                  className="bg-slate-950 border border-white/5 rounded-xl p-6 hover:border-sky-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-500 mb-4 group-hover:scale-110 transition-transform">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Migration Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A structured approach to moving your workloads to the cloud safely and efficiently.
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
                    <div className="w-10 h-10 bg-slate-900 border border-sky-500/50 rounded-full flex items-center justify-center text-sky-500 font-bold mx-auto mb-4 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Cloud Adoption Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  From initial assessment to full cloud maturity, we guide you every step of the way.
                </p>
                <div className="space-y-8">
                  {[
                    { phase: 'Phase 1: Assessment & Planning', tasks: ['Infrastructure audit', 'TCO analysis', 'Migration strategy'] },
                    { phase: 'Phase 2: Foundation Build', tasks: ['Landing zone setup', 'Security configuration', 'Network design'] },
                    { phase: 'Phase 3: Migration & Modernization', tasks: ['Workload migration', 'Database modernization', 'Containerization'] },
                    { phase: 'Phase 4: Optimization & Growth', tasks: ['Cost optimization', 'Auto-scaling setup', 'DevOps integration'] }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="relative pb-8 border-l border-slate-800 pl-8 last:pb-0 last:border-0">
                        <div className="absolute left-0 top-2 w-2 h-2 bg-sky-500 rounded-full -translate-x-[5px]"></div>
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
                <div className="absolute inset-0 bg-linear-to-br from-sky-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
                <Card className="bg-slate-950 border-white/10 relative overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Why Choose Cloud?</h3>
                    <div className="space-y-6">
                      {[
                        { title: 'Scalability', desc: 'Instantly scale resources up or down based on demand.' },
                        { title: 'Cost Efficiency', desc: 'Pay only for what you use and reduce capital expenditure.' },
                        { title: 'Global Reach', desc: 'Deploy applications close to your users worldwide.' },
                        { title: 'Innovation', desc: 'Access advanced services like AI, ML, and IoT instantly.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-6 h-6 text-sky-500" />
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
                        <Button className="w-full bg-sky-600 hover:bg-sky-700 text-white">
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
            <div className="bg-linear-to-r from-sky-900/50 to-blue-900/50 border border-sky-500/20 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Accelerate your digital transformation with our expert cloud services.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-sky-900 hover:bg-slate-100">
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
