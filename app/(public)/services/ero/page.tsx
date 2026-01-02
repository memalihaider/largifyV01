'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2,
  ArrowRight,
  CheckCircle2,
  Server,
  Cpu,
  Database,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EROServicePage() {
  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Business Process Digitization',
      description: 'Transform manual workflows into streamlined digital processes for maximum efficiency.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: 'Workflow Automation',
      description: 'Reduce operational overhead with intelligent automation and AI-driven task management.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'ERP & Custom Systems',
      description: 'Unified data architecture tailored to your specific business needs and industry standards.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Performance Optimization',
      description: 'Data-driven insights and real-time analytics for continuous business improvement.'
    }
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
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Badge className="mb-4 bg-white/10 text-white border-white/20">
                  Enterprise Solutions
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  ERO System
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Enterprise Resource Optimization (ERO) is our flagship service that transforms how businesses operate. 
                  We don't just digitize; we optimize every process for maximum efficiency and data-driven decision making.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-corporate-primary to-corporate-secondary hover:opacity-90 text-white border-0">
                      Get Started
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
                <div className="absolute -inset-4 border border-corporate-primary/5 rounded-[2.5rem] -z-10 opacity-50" />
                
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/40" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Largify ERO v5.0.0</div>
                    <div className="w-12" />
                  </div>
                  <div className="p-6 bg-slate-950/50 backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-corporate-primary/10 text-corporate-primary">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Enterprise Efficiency</div>
                          </div>
                          <div className="h-24 flex items-end gap-1">
                            {[50, 65, 45, 80, 70, 90, 85, 95, 100, 90, 80, 75].map((h, i) => (
                              <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 0.5 + (i * 0.05) }}
                                className="flex-1 bg-corporate-primary/30 rounded-t-sm" 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Process Speed</div>
                            <div className="text-2xl font-bold text-white">+45%</div>
                            <div className="text-[10px] text-emerald-400 mt-1">Optimized</div>
                          </div>
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Cost Reduction</div>
                            <div className="text-2xl font-bold text-white">-32%</div>
                            <div className="text-[10px] text-corporate-primary mt-1">Annualized</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 h-full">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Resource Allocation</div>
                          <div className="space-y-3">
                            {[
                              { name: 'Human Capital', val: 88, color: 'bg-emerald-500' },
                              { name: 'Infrastructure', val: 74, color: 'bg-corporate-primary' },
                              { name: 'Digital Assets', val: 92, color: 'bg-emerald-500' }
                            ].map((item, i) => (
                              <div key={i} className="space-y-1">
                                <div className="flex justify-between text-[8px] font-bold text-slate-500 uppercase">
                                  <span>{item.name}</span>
                                  <span>{item.val}%</span>
                                </div>
                                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.val}%` }}
                                    transition={{ duration: 1, delay: 1 + (i * 0.2) }}
                                    className={`h-full ${item.color}`} 
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-800">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                              <div className="w-2 h-2 rounded-full bg-corporate-primary animate-pulse" />
                              OPTIMIZATION ACTIVE
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

        {/* Core Capabilities */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our ERO system provides a comprehensive suite of tools to manage and optimize your entire enterprise.
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
                  <Card className="h-full border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:border-white/10 transition-all">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-white/5 text-corporate-primary flex items-center justify-center mb-6">
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

        {/* Key Benefits */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Key Benefits</h2>
                <div className="space-y-6">
                  {[
                    '40% reduction in operational costs',
                    '60% faster decision making',
                    '3x improvement in efficiency',
                    '99.9% system uptime'
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-corporate-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-corporate-primary" />
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
                className="bg-linear-to-br from-corporate-primary/20 to-corporate-secondary/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Ready to optimize?</h3>
                <p className="text-slate-300 mb-8">
                  Join leading organizations that have transformed their operations with our ERO system.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-white text-corporate-primary hover:bg-slate-100 border-0">
                    Schedule a Demo
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
