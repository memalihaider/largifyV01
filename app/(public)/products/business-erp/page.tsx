'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Briefcase, Users, BarChart3, DollarSign, Settings, Play, Star, Search, Database, Rocket } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BusinessErpPage() {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Unified Operations",
      description: "Integrate all your core business processes—from finance and HR to supply chain and sales—into a single, unified platform.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: "Financial Management",
      description: "Automate accounting, invoicing, and financial reporting. Gain a real-time view of your company's financial health.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Human Resources",
      description: "Manage the entire employee lifecycle, from recruitment and onboarding to payroll and performance reviews.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "Supply Chain & Inventory",
      description: "Optimize your supply chain with real-time inventory tracking, order management, and procurement automation.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Sales & CRM",
      description: "Track leads, manage customer relationships, and streamline your sales pipeline to close more deals, faster.",
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "Customizable & Scalable",
      description: "Tailor the ERP to your specific business needs and scale the system as your company grows.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-40 pb-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-slate-800/40 via-blue-900/10 to-transparent"></div>
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 bg-slate-800/50 text-slate-300 border-slate-700 px-4 py-1.5 backdrop-blur-md">
            Business Management
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            The <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">Operating System</span>
            <br />
            for Your Business
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Our Business ERP system integrates all your essential functions into one powerful, intuitive, and scalable platform designed for modern enterprises.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?service=business-erp-demo">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-200 px-10 py-7 text-lg rounded-full transition-all hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105 group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 px-10 py-7 text-lg rounded-full transition-all">
                Explore Features
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              A Single Source of <span className="text-blue-400">Truth</span>
            </h2>
            <p className="text-lg text-slate-400">
              Eliminate data silos and make smarter, faster decisions with a complete view of your business.
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
                <Card className="h-full bg-slate-900/40 border-slate-800 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-300 group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-2xl bg-linear-to-br from-slate-800 to-slate-700 text-white w-fit shadow-lg group-hover:scale-110 transition-transform duration-300 border border-slate-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{feature.title}</h3>
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

      {/* Dashboard Preview Section */}
      <section className="py-24 px-4 bg-slate-900/30 border-y border-slate-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/30">Real-time Analytics</Badge>
              <h2 className="text-4xl font-extrabold mb-6 tracking-tight">
                Data-Driven Decisions at Your Fingertips
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Stop guessing and start knowing. Our interactive dashboards give you a pulse on every aspect of your business, from cash flow to inventory turnover.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Customizable KPI dashboards",
                  "Automated daily reports",
                  "Predictive forecasting models",
                  "Drill-down capabilities for deep analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8">
                View Dashboard Demo
              </Button>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden border border-slate-700 shadow-2xl shadow-blue-900/20 bg-slate-900"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-transparent pointer-events-none"></div>
              {/* Abstract representation of a dashboard */}
              <div className="p-6 grid grid-cols-2 gap-4 opacity-80">
                <div className="col-span-2 h-32 bg-slate-800 rounded-lg animate-pulse"></div>
                <div className="h-32 bg-slate-800 rounded-lg animate-pulse delay-75"></div>
                <div className="h-32 bg-slate-800 rounded-lg animate-pulse delay-150"></div>
                <div className="col-span-2 h-48 bg-slate-800 rounded-lg animate-pulse delay-200"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-slate-500 font-mono text-sm">Interactive Dashboard Preview</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-extrabold mb-16 tracking-tight">
            Implementation Roadmap
          </h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-800 -translate-y-1/2 hidden md:block"></div>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { icon: <Search className="w-6 h-6" />, title: "Audit", desc: "We analyze your current workflows." },
                { icon: <Settings className="w-6 h-6" />, title: "Configure", desc: "Tailoring the ERP to your needs." },
                { icon: <Database className="w-6 h-6" />, title: "Migrate", desc: "Secure transfer of your data." },
                { icon: <Rocket className="w-6 h-6" />, title: "Launch", desc: "Go live with full team training." },
              ].map((step, i) => {
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group"
                  >
                    <div className="w-14 h-14 mx-auto bg-slate-900 rounded-full flex items-center justify-center border border-slate-700 mb-4 group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors shadow-lg">
                      <div className="text-slate-400 group-hover:text-white transition-colors">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-slate-950 -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Unify Your Operations?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            See how our Business ERP can be tailored to your exact needs and drive sustainable growth.
          </p>
          <Link href="/contact?service=business-erp-demo">
            <Button size="lg" className="bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-12 py-8 text-xl rounded-full font-bold shadow-2xl shadow-blue-500/20 transition-all hover:scale-105">
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
