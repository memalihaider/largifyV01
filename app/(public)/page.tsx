'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle2,
  Building2,
  Shield,
  Code,
  Lightbulb,
  Users,
  Target,
  Zap,
  GraduationCap,
  Award,
  ChevronRight,
  ArrowUpRight,
  Globe,
  Server,
  Lock,
  BarChart3,
  Cpu,
  Database,
  Activity,
  Layers,
  ShieldCheck,
  Terminal,
  Smartphone,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LargifySolutionsPage() {
  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      subtitle: "Digital Presence",
      description: "Build responsive, fast-loading websites that work seamlessly across all devices.",
      features: ["Custom Design", "SEO Optimized", "Performance"],
      href: "/services/web-development"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI Solutions",
      subtitle: "Intelligent Automation",
      description: "Harness the power of AI to automate tasks and analyze data for business growth.",
      features: ["Machine Learning", "NLP", "Data Analytics"],
      href: "/services/ai-solutions"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      subtitle: "Native & Hybrid",
      description: "Develop intuitive and high-performance apps for iOS and Android platforms.",
      features: ["iOS & Android", "User Experience", "Scalability"],
      href: "/services/mobile-development"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cybersecurity Services",
      subtitle: "Security & Protection",
      description: "Protect your systems, networks, and data from evolving online threats.",
      features: ["Vulnerability Audits", "Penetration Testing", "Data Security"],
      href: "/services/cybersecurity"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Custom ERP, CRM, & POS",
      subtitle: "Business Systems",
      description: "Tailored systems to streamline operations and optimize transactions.",
      features: ["Workflow Automation", "Inventory Management", "CRM"],
      href: "/services/custom-systems"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Digital Marketing & SEO",
      subtitle: "Growth & Visibility",
      description: "Boost your online visibility and attract more customers with expert strategies.",
      features: ["SEO Strategy", "Content Marketing", "Analytics"],
      href: "/services/marketing-seo"
    }
  ];

  const stats = [
    { value: '150+', label: 'Enterprise Clients' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Expert Support' }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-lab-primary/20 selection:text-white relative">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-[-20%] left-[-20%] w-[40%] h-[40%] bg-lab-primary/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[40%] h-[40%] bg-corporate-primary/5 rounded-full blur-[80px]" />
        <div className="absolute top-[30%] right-[5%] w-[30%] h-[30%] bg-lab-accent/5 rounded-full blur-[60px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-4 overflow-hidden">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="outline" className="mb-8 px-4 py-1.5 border-lab-primary/20 bg-lab-primary/10 text-lab-primary hover:bg-lab-primary/20 transition-colors backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lab-primary/40 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-lab-primary"></span>
                    </span>
                    Enterprise Technology & Innovation
                  </span>
                </Badge>
                
                <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-10 heading-gradient">
                  Build. Secure. Transform.
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Largify Solutions delivers enterprise-grade systems and security, 
                  while building the talent and innovation capability behind those systems.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-20">
                  <Link href="/contact">
                    <Button size="lg" className="bg-lab-primary hover:bg-lab-primary/90 text-white px-10 py-7 text-lg rounded-full transition-all hover:shadow-2xl hover:shadow-lab-primary/20 group">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/features">
                    <Button size="lg" variant="outline" className="px-10 py-7 text-lg rounded-full border-slate-800 text-white hover:bg-slate-900 transition-all backdrop-blur-sm">
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Hero Visual - Clean Dashboard Style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full max-w-5xl mx-auto relative"
              >
                {/* Decorative Ring */}
                <div className="absolute -inset-4 border border-lab-primary/5 rounded-[2.5rem] -z-10 opacity-50" />
                
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/40" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Largify OS v2.0.4</div>
                    <div className="w-12" />
                  </div>
                  <div className="p-8 lg:p-16 bg-slate-950/50 backdrop-blur-xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                      <div className="lg:col-span-2 space-y-10">
                        <div className="grid grid-cols-2 gap-6">
                          {stats.map((stat, i) => (
                            <div 
                              key={i} 
                              className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-lab-primary/20 hover:bg-lab-primary/5 transition-colors group"
                            >
                              <p className="text-4xl font-bold text-white group-hover:text-lab-primary transition-colors mb-1">{stat.value}</p>
                              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                        <div className="p-8 rounded-2xl border border-lab-primary/10 bg-lab-primary/5 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Zap className="w-24 h-24 text-lab-primary" />
                          </div>
                          <div className="flex items-center gap-4 mb-4 relative z-10">
                            <div className="p-3 rounded-xl bg-lab-primary text-white shadow-lg shadow-lab-primary/20">
                              <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Innovation Lab Integration</h3>
                          </div>
                          <p className="text-slate-400 text-lg leading-relaxed relative z-10">
                            Our unique dual-engine model ensures your team is trained on the very systems we build, 
                            creating a sustainable cycle of innovation and execution.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-2 rounded-lg bg-lab-primary/10 text-white">
                              <ShieldCheck className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-white">Security Posture</span>
                          </div>
                          <div className="space-y-4">
                            <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: '92%' }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="h-full bg-lab-primary rounded-full" 
                              />
                            </div>
                            <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                              <span>Compliance</span>
                              <span>92%</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-2 rounded-lg bg-lab-secondary/10 text-lab-secondary">
                              <Activity className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-white">System Health</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-16 bg-slate-800 rounded-lg flex items-end gap-1.5 p-2">
                              {[40, 70, 45, 90, 65, 80, 50, 85, 95, 60].map((h, i) => (
                                <motion.div 
                                  key={i} 
                                  initial={{ height: 0 }}
                                  animate={{ height: `${h}%` }}
                                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                                  className="flex-1 bg-lab-primary/20 rounded-t-sm hover:bg-lab-primary/40 transition-colors" 
                                />
                              ))}
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
        </section>

        {/* Services Section - Bento Grid Style */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <Badge className="mb-4 bg-white/10 text-white border-none px-4 py-1">Our Expertise</Badge>
                <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight heading-gradient">
                  Enterprise-Grade Services
                </h2>
                <p className="text-xl text-white/80 leading-relaxed">
                  We provide the technical foundation and strategic guidance needed to scale 
                  modern organizations in a digital-first world.
                </p>
              </div>
              <Link href="/features">
                <Button variant="ghost" className="text-lab-primary hover:text-lab-primary/80 hover:bg-lab-primary/5 font-bold text-lg group">
                  View all services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, i) => (
                <div key={i}>
                  <Card className="h-full border-slate-800 hover:border-lab-primary/30 hover:shadow-[0_20px_50px_rgba(30,144,255,0.1)] transition-all group cursor-pointer bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-lab-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CardContent className="p-10">
                      <div className="mb-8 p-4 rounded-2xl bg-slate-800 text-white group-hover:bg-lab-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all w-fit shadow-sm">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lab-primary transition-colors">{service.title}</h3>
                      <p className="text-sm font-bold text-lab-primary mb-6 uppercase tracking-widest">{service.subtitle}</p>
                      <p className="text-slate-300 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-lab-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dual Engine Section - Professional Dark Mode */}
        <section className="py-32 px-4 text-white overflow-hidden relative">
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <Badge className="mb-6 bg-lab-primary/20 text-lab-primary border-lab-primary/30 px-4 py-1">The Ecosystem</Badge>
              <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-400 to-blue-600">
                One Company. Two Engines.
              </h2>
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed">
                A unified ecosystem where enterprise execution meets capability building.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div 
                  className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-accent/10 rounded-full blur-3xl group-hover:bg-corporate-accent/20 transition-colors" />
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 rounded-2xl bg-slate-700 text-white shadow-xl shadow-black/20">
                      <Building2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Largify Solutions</h3>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] mt-1">The Execution Engine</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    We design, build, and secure digital systems for businesses, institutes, and governments. 
                    Our focus is on high-performance execution and enterprise-grade reliability.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {['ERO Systems', 'Cybersecurity', 'Custom Software', 'Consulting'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-slate-500 shadow-[0_0_10px_rgba(192,192,192,0.5)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div 
                  className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-lab-primary/10 rounded-full blur-3xl group-hover:bg-lab-primary/20 transition-colors" />
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 rounded-2xl bg-lab-primary text-white shadow-xl shadow-lab-primary/20">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold">Largify Innovation Lab</h3>
                      <p className="text-lab-secondary text-sm font-bold uppercase tracking-[0.2em] mt-1">The Capability Engine</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    Our platform for building talent and innovation capability. We train the people 
                    who will operate and evolve the systems we build.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {['LMS Training', 'CTF Challenges', 'Case Studies', 'Certifications'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                        <div className="w-2 h-2 rounded-full bg-lab-highlight shadow-[0_0_10px_rgba(255,122,0,0.5)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative lg:pl-12">
                <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-lab-primary rounded-full blur-md" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-lab-highlight rounded-full blur-md" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-lab-secondary rounded-full blur-md" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-lab-accent rounded-full blur-md" />
                  </div>
                  <div className="w-4/5 h-4/5 rounded-full border border-white/5 flex items-center justify-center bg-slate-900/50">
                    <div className="text-center">
                      <div 
                        className="text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-4"
                      >
                        Ecosystem
                      </div>
                      <p className="text-lab-primary font-bold uppercase tracking-[0.4em] text-xs">Unified Platform</p>
                    </div>
                  </div>
                  
                  {/* Floating Icons */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                  >
                    <Shield className="w-8 h-8 text-lab-primary" />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl"
                  >
                    <Terminal className="w-8 h-8 text-lab-highlight" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERO System Highlight - Clean & Modern */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <Badge className="mb-8 bg-white/10 text-white border-lab-primary/10 px-4 py-1.5 text-sm font-bold">Flagship Service</Badge>
                <h2 className="text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight leading-[1.1] heading-gradient">
                  ERO System: The Operating System for Business
                </h2>
                <p className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed">
                  Enterprise Resource Optimization (ERO) is more than just an ERP. It's a 
                  comprehensive digital nervous system that connects every part of your organization.
                </p>
                
                <div className="space-y-8 mb-12">
                  {[
                    { title: 'Process Digitization', desc: 'Convert manual workflows into streamlined digital assets.' },
                    { title: 'Intelligent Automation', desc: 'Reduce operational overhead with AI-driven task management.' },
                    { title: 'Real-time Analytics', desc: 'Make decisions based on live data, not historical reports.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-white group-hover:bg-slate-700 transition-all shadow-sm">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-white/70 text-lg leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/features#ero">
                  <Button size="lg" className="bg-lab-primary hover:bg-lab-primary/90 text-white rounded-full px-10 py-7 text-lg font-bold shadow-xl shadow-lab-primary/20 group">
                    Learn about ERO
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="bg-corporate-primary rounded-[3rem] p-6 shadow-xl overflow-hidden">
                  <div className="bg-corporate-secondary rounded-[2.5rem] p-10 border border-white/5">
                    <div className="flex items-center justify-between mb-12">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-lab-primary flex items-center justify-center shadow-lg shadow-lab-primary/20">
                          <BarChart3 className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-white text-xl font-bold">Efficiency Metrics</span>
                      </div>
                      <Badge variant="outline" className="text-lab-secondary border-lab-secondary/30 px-3 py-1">Live Data</Badge>
                    </div>
                    
                    <div className="space-y-10">
                      {[
                        { label: 'Operational Cost', value: '-40%', color: 'bg-lab-secondary', width: '40%' },
                        { label: 'Decision Speed', value: '+60%', color: 'bg-lab-primary', width: '60%' },
                        { label: 'Process Accuracy', value: '99.9%', color: 'bg-lab-accent', width: '99.9%' }
                      ].map((metric, i) => (
                        <div key={i} className="space-y-4">
                          <div className="flex justify-between text-sm font-bold uppercase tracking-widest">
                            <span className="text-slate-300">{metric.label}</span>
                            <span className="text-white">{metric.value}</span>
                          </div>
                          <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${metric.color} rounded-full`} 
                              style={{ width: metric.width }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section - How We Work */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <Badge className="mb-4 bg-white/10 text-white border-none px-4 py-1">Our Process</Badge>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight heading-gradient">
                How We Deliver Excellence
              </h2>
              <p className="text-xl text-white/80 leading-relaxed">
                A structured approach to digital transformation, from initial audit to full-scale deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-800 -translate-y-1/2 z-0" />
              
              {[
                { step: '01', title: 'Audit & Strategy', desc: 'We analyze your current systems and define a clear roadmap for optimization.' },
                { step: '02', title: 'Build & Secure', desc: 'Our engineers develop custom solutions with security baked into every line of code.' },
                { step: '03', title: 'Scale & Train', desc: 'We deploy your systems and train your team through the Innovation Lab.' }
              ].map((item, i) => (
                <div 
                  key={i}
                  className="relative z-10 bg-slate-900/50 p-10 rounded-3xl border border-slate-800 shadow-sm hover:shadow-xl hover:border-lab-primary/20 transition-all group"
                >
                  <div className="text-6xl font-black text-slate-800 group-hover:text-lab-primary/10 transition-colors mb-6">{item.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-white/70 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By Section - Minimalist Marquee */}
        <section className="py-24 px-4 border-y border-slate-800 overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            <p className="text-center text-sm font-bold text-slate-500 uppercase tracking-[0.3em] mb-16">
              Trusted by Industry Leaders
            </p>
            <div className="relative flex overflow-x-hidden">
              <div className="animate-marquee flex items-center gap-20 lg:gap-32 whitespace-nowrap py-4">
                {['Government', 'Education', 'Banking', 'Telecom', 'Healthcare', 'Manufacturing', 'Logistics', 'Retail'].map((name) => (
                  <span key={name} className="text-3xl lg:text-4xl font-black text-slate-700 hover:text-lab-primary transition-colors cursor-default uppercase tracking-tighter">
                    {name}
                  </span>
                ))}
              </div>
              <div className="absolute top-0 animate-marquee2 flex items-center gap-20 lg:gap-32 whitespace-nowrap py-4">
                {['Government', 'Education', 'Banking', 'Telecom', 'Healthcare', 'Manufacturing', 'Logistics', 'Retail'].map((name) => (
                  <span key={name} className="text-3xl lg:text-4xl font-black text-slate-700 hover:text-lab-primary transition-colors cursor-default uppercase tracking-tighter">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - High Impact */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div 
              className="relative rounded-[3rem] bg-lab-primary overflow-hidden p-16 lg:p-24 text-center shadow-2xl shadow-lab-primary/20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1e1b4b,transparent_70%)] opacity-50" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              <div className="relative z-10">
                <Badge className="mb-8 bg-white/20 text-white border-white/30 px-4 py-1">Get Started Today</Badge>
                <h2 className="text-5xl lg:text-7xl font-bold text-white mb-10 tracking-tight leading-[1.1]">
                  Ready to transform your <br className="hidden lg:block" /> organization?
                </h2>
                <p className="text-xl lg:text-2xl text-slate-200 mb-16 max-w-3xl mx-auto leading-relaxed">
                  Join 150+ enterprises that trust Largify Solutions for their 
                  critical technology and security needs.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link href="/contact">
                    <Button size="lg" className="bg-white text-lab-primary hover:bg-slate-100 px-12 py-8 text-xl rounded-full font-bold shadow-2xl transition-all hover:scale-105">
                      Schedule a Consultation
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 px-12 py-8 text-xl rounded-full font-bold backdrop-blur-sm transition-all hover:scale-105">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
  