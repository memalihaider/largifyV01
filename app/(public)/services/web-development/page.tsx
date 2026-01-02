'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Globe,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Smartphone,
  Layout
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WebDevelopmentPage() {
  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'Responsive Design',
      description: 'Websites that look and function perfectly on desktops, tablets, and smartphones.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Loading',
      description: 'Optimized performance to ensure your visitors never have to wait.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'High Security',
      description: 'Built-in security features to protect your data and your users.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Cross-Device Compatibility',
      description: 'Seamless experience across all modern browsers and devices.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Understanding your business goals, target audience, and technical requirements.'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Creating sitemaps, wireframes, and selecting the right technology stack.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Crafting the visual identity and user interface of your website.'
    },
    {
      number: '04',
      title: 'Development',
      description: 'Writing clean, efficient code to bring the design to life.'
    },
    {
      number: '05',
      title: 'Launch',
      description: 'Testing, deployment, and post-launch support.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-blue-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px]" />
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
                <Badge className="mb-4 bg-white/10 text-white border-white/20">
                  Web Engineering
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Web Development
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Build responsive, fast-loading websites that work seamlessly across all devices. 
                  We focus on delivering a great user experience, high security, and easy management to ensure long-term success.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-blue-600 to-blue-800 hover:opacity-90 text-white border-0">
                      Start Your Project
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
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-blue-800 blur-3xl opacity-20 rounded-full"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Projects Delivered', value: '500+' },
                      { label: 'Client Satisfaction', value: '99%' },
                      { label: 'Team Experts', value: '50+' },
                      { label: 'Years Experience', value: '10+' }
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose Our Web Services?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We combine technical expertise with creative design to deliver exceptional results.
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
                  className="bg-slate-950 border border-white/5 rounded-xl p-6 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Development Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A proven methodology that ensures transparency and quality at every step.
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
                    <div className="w-10 h-10 bg-slate-900 border border-blue-500/50 rounded-full flex items-center justify-center text-blue-500 font-bold mx-auto mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
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
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Project Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  Typical timeline for a custom web development project.
                </p>
                <div className="space-y-8">
                  {[
                    { phase: 'Week 1-2: Discovery & Planning', tasks: ['Requirements gathering', 'Tech stack selection', 'Project timeline'] },
                    { phase: 'Week 3-4: Design & Prototyping', tasks: ['UI/UX design', 'Interactive prototypes', 'Client approval'] },
                    { phase: 'Week 5-8: Development', tasks: ['Frontend coding', 'Backend integration', 'CMS setup'] },
                    { phase: 'Week 9: Testing & Launch', tasks: ['QA testing', 'Performance optimization', 'Go-live'] }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="relative pb-8 border-l border-slate-800 pl-8 last:pb-0 last:border-0">
                        <div className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full -translate-x-[5px]"></div>
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
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-blue-800/20 blur-3xl rounded-full"></div>
                <Card className="bg-slate-950 border-white/10 relative overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Value Proposition</h3>
                    <div className="space-y-6">
                      {[
                        { title: 'SEO Optimized', desc: 'Built to rank high on search engines from day one.' },
                        { title: 'Scalable Architecture', desc: 'Grow your website as your business expands.' },
                        { title: 'High Performance', desc: 'Lightning fast load times for better user retention.' },
                        { title: 'Secure by Design', desc: 'Protection against common web vulnerabilities.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-6 h-6 text-blue-500" />
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
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
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
            <div className="bg-linear-to-r from-blue-900/50 to-slate-900/50 border border-blue-500/20 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Build Your Digital Presence?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's create a website that drives results for your business.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100">
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