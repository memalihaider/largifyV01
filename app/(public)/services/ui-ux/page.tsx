'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Palette,
  ArrowRight,
  CheckCircle2,
  LayoutGrid,
  Users,
  Eye,
  MousePointerClick,
  Layers,
  Smartphone
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function UiUxDesignPage() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'User Research',
      description: 'Deep dive into user behaviors, needs, and motivations through interviews and data analysis.'
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: 'Wireframing & Prototyping',
      description: 'Rapid iteration of ideas into tangible structures before visual design begins.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Visual Design',
      description: 'Creating stunning, on-brand interfaces that delight users and enhance credibility.'
    },
    {
      icon: <MousePointerClick className="w-6 h-6" />,
      title: 'Interaction Design',
      description: 'Designing intuitive micro-interactions that guide and provide feedback to users.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and competitive landscape.'
    },
    {
      number: '02',
      title: 'Research',
      description: 'Conducting user interviews, creating personas, and mapping user journeys.'
    },
    {
      number: '03',
      title: 'Ideation',
      description: 'Brainstorming solutions, sketching concepts, and creating low-fidelity wireframes.'
    },
    {
      number: '04',
      title: 'Design',
      description: 'Crafting high-fidelity UI designs and interactive prototypes for testing.'
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Validating designs with real users to ensure usability and satisfaction.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-pink-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-rose-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-900/10 rounded-full blur-[80px]" />
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
                <Badge className="mb-4 bg-pink-500/10 text-pink-400 border-pink-500/20">
                  Design Excellence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  UI/UX Design
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Create intuitive and engaging user experiences that drive conversion. 
                  We design interfaces that users love to use, blending aesthetics with functionality.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-pink-600 to-rose-600 hover:opacity-90 text-white border-0">
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
                <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-rose-500 blur-3xl opacity-20 rounded-full"></div>
                <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'User Satisfaction', value: '98%' },
                      { label: 'Conversion Uplift', value: '3x' },
                      { label: 'Projects Delivered', value: '200+' },
                      { label: 'Design Awards', value: '15' }
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Comprehensive Design Services</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                From initial concept to final polish, we cover every aspect of the design process.
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
                  className="bg-slate-950 border border-white/5 rounded-xl p-6 hover:border-pink-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center text-pink-500 mb-4 group-hover:scale-110 transition-transform">
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Design Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A proven methodology that ensures we deliver user-centric and business-aligned designs.
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
                    <div className="w-10 h-10 bg-slate-900 border border-pink-500/50 rounded-full flex items-center justify-center text-pink-500 font-bold mx-auto mb-4 shadow-[0_0_15px_rgba(236,72,153,0.3)]">
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
                  Typical timeline for a comprehensive UI/UX design project. Timelines may vary based on project scope.
                </p>
                <div className="space-y-8">
                  {[
                    { week: 'Week 1-2', phase: 'Discovery & Research', tasks: ['Stakeholder interviews', 'User research', 'Competitive analysis'] },
                    { week: 'Week 3-4', phase: 'Information Architecture & Wireframing', tasks: ['Sitemap creation', 'User flows', 'Low-fidelity wireframes'] },
                    { week: 'Week 5-7', phase: 'Visual Design & Prototyping', tasks: ['Design system setup', 'High-fidelity UI', 'Interactive prototypes'] },
                    { week: 'Week 8', phase: 'Testing & Handoff', tasks: ['Usability testing', 'Design iteration', 'Developer handoff'] }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="flex-shrink-0 w-24 pt-1">
                        <span className="text-sm font-bold text-pink-400">{phase.week}</span>
                      </div>
                      <div className="relative pb-8 border-l border-slate-800 pl-8 last:pb-0 last:border-0">
                        <div className="absolute left-0 top-2 w-2 h-2 bg-pink-500 rounded-full -translate-x-[5px]"></div>
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
                <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-rose-500/20 blur-3xl rounded-full"></div>
                <Card className="bg-slate-950 border-white/10 relative overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Value Proposition</h3>
                    <div className="space-y-6">
                      {[
                        { title: 'Increased Conversion', desc: 'Well-designed interfaces convert better. We focus on reducing friction and guiding users to action.' },
                        { title: 'Reduced Development Costs', desc: 'Fixing usability issues during design is 10x cheaper than fixing them in code.' },
                        { title: 'Brand Loyalty', desc: 'Great experiences build trust. Users return to products that are easy and enjoyable to use.' },
                        { title: 'Data-Driven Decisions', desc: 'We don\'t guess. Our designs are backed by user research and testing data.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-6 h-6 text-pink-500" />
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
                        <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
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
            <div className="bg-linear-to-r from-pink-900/50 to-rose-900/50 border border-pink-500/20 rounded-3xl p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your User Experience?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's create a product that your users will love. Schedule a consultation with our design team today.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-pink-900 hover:bg-slate-100">
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
