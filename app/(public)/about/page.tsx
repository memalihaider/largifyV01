'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2,
  Shield,
  Code,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  Target,
  Users,
  Zap,
  Heart,
  Globe,
  Award,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We deliver enterprise-grade solutions with meticulous attention to quality and performance.',
      color: 'text-corporate-primary'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security First',
      description: 'Security is embedded in everything we do - from systems we build to teams we develop.',
      color: 'text-corporate-secondary'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We continuously evolve our services to address emerging challenges and opportunities.',
      color: 'text-lab-primary'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Partnership',
      description: 'We build lasting relationships, not transactions. Your success is our success.',
      color: 'text-lab-secondary'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Founded',
      description: 'Largify Solutions established with a vision to transform enterprises through technology.'
    },
    {
      year: '2021',
      title: 'ERO System Launch',
      description: 'Launched our flagship Enterprise Resource Optimization system for businesses.'
    },
    {
      year: '2022',
      title: 'Security Division',
      description: 'Expanded into comprehensive cybersecurity services and consulting.'
    },
    {
      year: '2023',
      title: '100+ Clients',
      description: 'Reached milestone of serving 100+ enterprise clients across industries.'
    },
    {
      year: '2024',
      title: 'Innovation Lab',
      description: 'Launched Largify Innovation Lab platform for capability building.'
    },
    {
      year: '2025',
      title: 'Regional Expansion',
      description: 'Expanding services across South Asia and the Middle East.'
    }
  ];

  const stats = [
    { value: '150+', label: 'Enterprise Clients' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '5+', label: 'Countries Served' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-corporate-primary/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-linear-to-t from-lab-primary/10 via-transparent to-transparent"></div>
        
        {/* Animated Pulses */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-corporate-primary/20 rounded-full blur-[128px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lab-primary/20 rounded-full blur-[128px]"
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                About Us
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight heading-gradient">
                One Company. Two Engines. One Ecosystem.
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Largify Solutions is a technology and innovation company that builds enterprise 
                systems, secures digital assets, and develops the talent that powers modern organizations.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* The Two Engines */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Dual-Engine Model
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                We uniquely combine enterprise services with capability building, creating a 
                powerful ecosystem where technology and talent development reinforce each other.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Largify Solutions */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm text-white overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-violet-500/20 text-violet-400 group-hover:scale-110 transition-transform">
                        <Building2 className="w-10 h-10" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Largify Solutions</h3>
                        <p className="text-slate-400">The Parent Company</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-slate-300 mb-6">
                      Professional technology and security services for businesses, institutes, 
                      and governments. We build and secure enterprise systems.
                    </p>

                    <div className="space-y-3">
                      {[
                        { icon: <Building2 className="w-5 h-5" />, text: 'ERO System - Enterprise Resource Optimization' },
                        { icon: <Shield className="w-5 h-5" />, text: 'Cybersecurity & Security Services' },
                        { icon: <Code className="w-5 h-5" />, text: 'Software & Digital Solutions' },
                        { icon: <Lightbulb className="w-5 h-5" />, text: 'Innovation & Transformation Consulting' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-300">
                          <span className="text-violet-400">{item.icon}</span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Innovation Lab */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-white/10 shadow-2xl bg-linear-to-br from-violet-600/20 to-indigo-700/20 backdrop-blur-sm text-white overflow-hidden group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                        <GraduationCap className="w-10 h-10" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Largify Innovation Lab</h3>
                        <p className="text-violet-200">A Platform by Largify Solutions</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-violet-100 mb-6">
                      A capability-building platform that develops talent in business, 
                      cybersecurity, and technology through practical, industry-aligned programs.
                    </p>

                    <div className="space-y-3">
                      {[
                        { icon: <GraduationCap className="w-5 h-5" />, text: 'Training & Learning Management System' },
                        { icon: <Shield className="w-5 h-5" />, text: 'CTF & Cybersecurity Challenges' },
                        { icon: <Lightbulb className="w-5 h-5" />, text: 'Case Studies & Real-World Projects' },
                        { icon: <Award className="w-5 h-5" />, text: 'Certifications & Career Development' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-violet-100">
                          <span className="text-violet-200">{item.icon}</span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8"
            >
              <p className="text-xl text-slate-300 font-medium italic">
                "Largify Solutions builds and secures systems. Largify Innovation Lab builds the 
                people who build and secure systems."
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-3xl p-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-violet-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Values */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                Our Values
              </Badge>
              <h2 className="text-4xl font-extrabold mb-4 heading-gradient">
                What Drives Us
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                These principles guide every decision we make and every solution we deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border border-white/5 shadow-lg hover:shadow-xl transition-all bg-slate-900/50 backdrop-blur-sm group hover:border-white/10">
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex p-4 rounded-xl bg-white/5 ${value.color} mb-4 group-hover:scale-110 transition-transform`}>
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-slate-400">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                Our Journey
              </Badge>
              <h2 className="text-4xl font-extrabold mb-4 heading-gradient">
                Milestones
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10 hidden lg:block" />

              <div className="space-y-12">
                {milestones.map((milestone, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 shadow-xl hover:border-white/10 transition-colors">
                        <div className="text-violet-400 font-bold text-lg mb-1">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                        <p className="text-slate-400">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden lg:flex w-12 h-12 rounded-full bg-linear-to-br from-violet-500 to-indigo-600 items-center justify-center text-white font-bold z-10 shadow-lg shadow-violet-500/20">
                      {milestone.year.slice(-2)}
                    </div>
                    
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-violet-500/20 text-violet-300 border-violet-500/30">
                Why Largify
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                The Largify Difference
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: 'Integrated Ecosystem',
                  description: 'Our dual-engine model means services and training work together. We build systems while developing the talent to operate them.'
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: 'Proven Results',
                  description: '500+ successful projects delivered with a 98% client satisfaction rate. Our track record speaks for itself.'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Partnership Approach',
                  description: 'We\'re not vendors - we\'re partners invested in your long-term success. Your growth is our growth.'
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="inline-flex p-3 rounded-xl bg-violet-500/20 text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Whether you need enterprise solutions or want to build your team's capabilities, 
                we're here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-linear-to-r from-corporate-primary to-corporate-secondary hover:opacity-90 text-lg px-8 py-6 text-white border-0">
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-slate-700 hover:bg-white/5">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
