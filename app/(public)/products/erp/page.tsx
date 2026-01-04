'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Database, Users, BarChart3, Settings, Layers, Globe, Shield, Server, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ErpPage() {
  const features = [
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Modular Architecture",
      description: "Select and deploy the modules you need, from finance and HR to manufacturing and supply chain, for a truly custom fit.",
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: "Centralized Data Management",
      description: "Achieve a single source of truth across your entire organization, eliminating data silos and improving decision-making.",
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Process Automation",
      description: "Automate repetitive tasks, streamline complex workflows, and increase operational efficiency across all departments.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Advanced Analytics & Reporting",
      description: "Leverage real-time data to generate insightful reports and dashboards, empowering data-driven strategies.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "Scalability & Performance",
      description: "Built to handle the demands of large-scale operations, our ERP scales with your business as you grow.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Role-Based Access Control",
      description: "Ensure data security and integrity with granular, role-based permissions for all users across the system.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-40 pb-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-indigo-600/20 via-indigo-900/5 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 bg-indigo-500/10 text-indigo-400 border-indigo-500/30 px-4 py-1.5 backdrop-blur-sm">
            Enterprise Resource Planning
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-300">Command Center</span>
            <br />
            for Your Enterprise
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Integrate, automate, and optimize every aspect of your large-scale operation with our powerful, flexible, and secure ERP system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?service=erp-demo">
              <Button size="lg" className="bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-10 py-7 text-lg rounded-full transition-all hover:shadow-2xl hover:shadow-indigo-500/20 hover:scale-105 group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#architecture">
              <Button size="lg" variant="outline" className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10 px-10 py-7 text-lg rounded-full transition-all">
                View Architecture
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Engineered for <span className="text-indigo-400">Enterprise Scale</span>
            </h2>
            <p className="text-lg text-slate-400">
              Our ERP is more than software; it's the backbone of your operational strategy, built for complexity and growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full bg-slate-900/40 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all duration-300 group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-2xl bg-linear-to-br from-indigo-500/20 to-violet-500/20 text-white w-fit shadow-lg shadow-indigo-500/10 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture / Tech Stack Section */}
      <section id="architecture" className="py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
                Built on Modern, Secure Infrastructure
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                We don't just give you software; we give you a robust technology stack designed for security, uptime, and speed.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Shield className="w-6 h-6 text-indigo-400" />, title: "Enterprise-Grade Security", desc: "End-to-end encryption, SOC 2 compliance, and regular security audits." },
                  { icon: <Globe className="w-6 h-6 text-indigo-400" />, title: "Cloud-Native & Hybrid", desc: "Deploy on AWS, Azure, or on-premise. Your data, your choice." },
                  { icon: <Server className="w-6 h-6 text-indigo-400" />, title: "99.99% Uptime SLA", desc: "Redundant architecture ensures your business never stops running." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{item.title}</h3>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full"></div>
              <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                {/* Abstract Tech Stack Visual */}
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                      <div className="font-mono text-indigo-400 text-sm mb-2">Frontend</div>
                      <div className="h-2 bg-slate-800 rounded-full w-3/4 mx-auto"></div>
                   </div>
                   <div className="bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                      <div className="font-mono text-indigo-400 text-sm mb-2">API Gateway</div>
                      <div className="h-2 bg-slate-800 rounded-full w-3/4 mx-auto"></div>
                   </div>
                   <div className="col-span-2 bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                      <div className="font-mono text-indigo-400 text-sm mb-2">Core Microservices</div>
                      <div className="flex justify-center gap-2 mt-2">
                        <div className="w-8 h-8 bg-slate-800 rounded-md"></div>
                        <div className="w-8 h-8 bg-slate-800 rounded-md"></div>
                        <div className="w-8 h-8 bg-slate-800 rounded-md"></div>
                      </div>
                   </div>
                   <div className="col-span-2 bg-slate-900 p-4 rounded-lg border border-slate-800 text-center">
                      <div className="font-mono text-indigo-400 text-sm mb-2">Distributed Database</div>
                      <div className="h-2 bg-slate-800 rounded-full w-1/2 mx-auto"></div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold mb-16 text-center tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Robert Fox", role: "CTO, MegaCorp Logistics", text: "The scalability of this ERP is unmatched. It handled our 300% growth without a hitch." },
              { name: "Amanda Lee", role: "VP Operations, TechFlow", text: "We finally have visibility into our global supply chain in real-time. Incredible tool." },
              { name: "David Chen", role: "CFO, Future Manufacturing", text: "The financial reporting module alone saved us countless hours during audit season." },
            ].map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-slate-900/50 border-slate-800 hover:border-indigo-500/30 transition-all h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-indigo-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic flex-grow">"{client.text}"</p>
                    <div>
                      <h4 className="font-bold text-white">{client.name}</h4>
                      <p className="text-sm text-indigo-400">{client.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-indigo-900/20 to-slate-950 -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Optimize Your Entire Operation?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Schedule a personalized demo to see how our ERP can be configured to solve your unique enterprise challenges.
          </p>
          <Link href="/contact?service=erp-demo">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-indigo-50 px-12 py-8 text-xl rounded-full font-bold shadow-2xl shadow-indigo-500/20 transition-all hover:scale-105">
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
