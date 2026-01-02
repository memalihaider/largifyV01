'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield,
  ArrowRight,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Eye,
  Server
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CybersecurityServicePage() {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Vulnerability Assessments',
      description: 'Identify and remediate security weaknesses before they can be exploited.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Penetration Testing',
      description: 'Simulated cyber attacks to test the strength of your systems and networks.'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'Network Security',
      description: 'Protect your infrastructure from unauthorized access and evolving online threats.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Data Protection',
      description: 'Ensure your sensitive business and customer data remains secure and private.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Assessment',
      description: 'Comprehensive audit of your current security posture and infrastructure.'
    },
    {
      number: '02',
      title: 'Analysis',
      description: 'Identifying vulnerabilities and prioritizing risks based on impact.'
    },
    {
      number: '03',
      title: 'Strategy',
      description: 'Developing a tailored security roadmap and incident response plan.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Deploying security controls, firewalls, and monitoring systems.'
    },
    {
      number: '05',
      title: 'Monitoring',
      description: '24/7 threat detection and continuous security improvements.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 relative overflow-hidden">
      {/* Optimized Background - reduced motion & blur */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-red-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-red-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[80px]" />
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
                  Security & Protection
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Cybersecurity Services
                </h1>
                <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                  Keep your business secure with our cybersecurity services. From vulnerability assessments to penetration testing, 
                  we help protect your systems, networks, and data from evolving online threats.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-linear-to-r from-red-600 to-red-800 hover:opacity-90 text-white border-0">
                      Secure Your Business
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
                <div className="absolute -inset-4 border border-red-500/5 rounded-[2.5rem] -z-10 opacity-50" />
                
                <div className="relative rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400/20 border border-red-400/40" />
                      <div className="w-3 h-3 rounded-full bg-amber-400/20 border border-amber-400/40" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                    </div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Largify Shield v1.4.2</div>
                    <div className="w-12" />
                  </div>
                  <div className="p-6 bg-slate-950/50 backdrop-blur-xl">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="col-span-2 space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                              <Shield className="w-4 h-4" />
                            </div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Threat Detection</div>
                          </div>
                          <div className="h-24 flex items-end gap-1">
                            {[20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80].map((h, i) => (
                              <motion.div 
                                key={i} 
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ duration: 0.5, delay: 0.5 + (i * 0.05) }}
                                className="flex-1 bg-red-500/30 rounded-t-sm" 
                              />
                            ))}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Security Score</div>
                            <div className="text-2xl font-bold text-white">98/100</div>
                            <div className="text-[10px] text-emerald-400 mt-1">Excellent</div>
                          </div>
                          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                            <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Active Threats</div>
                            <div className="text-2xl font-bold text-white">0</div>
                            <div className="text-[10px] text-red-400 mt-1">All clear</div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 h-full">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Firewall Status</div>
                          <div className="space-y-3">
                            {[
                              { name: 'Intrusion Prev.', status: 'Active', color: 'bg-emerald-500' },
                              { name: 'DDoS Protect', status: 'Active', color: 'bg-emerald-500' },
                              { name: 'Malware Scan', status: 'Running', color: 'bg-amber-500' }
                            ].map((item, i) => (
                              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
                                <span className="text-[10px] font-bold text-slate-300">{item.name}</span>
                                <div className="flex items-center gap-1.5">
                                  <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                                  <span className="text-[8px] font-bold text-slate-500 uppercase">{item.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-800">
                            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                              SHIELD ACTIVE
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

        {/* Security Solutions */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Security Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We provide comprehensive security measures to safeguard your digital ecosystem.
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
                  <Card className="h-full border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:border-red-500/20 transition-all">
                    <CardContent className="p-8">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
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

        {/* Process Section */}
        <section className="py-20 px-4 bg-slate-900/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Security Audit Process</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A systematic approach to identifying and neutralizing security threats.
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
                    <div className="w-10 h-10 bg-slate-900 border border-red-500/50 rounded-full flex items-center justify-center text-red-500 font-bold mx-auto mb-4 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
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
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Security Roadmap</h2>
                <p className="text-slate-400 mb-8">
                  A phased approach to achieving and maintaining robust cybersecurity.
                </p>
                <div className="space-y-8">
                  {[
                    { phase: 'Phase 1: Assessment & Audit', tasks: ['Vulnerability scan', 'Penetration testing', 'Compliance check'] },
                    { phase: 'Phase 2: Remediation', tasks: ['Patch management', 'Configuration hardening', 'Access control'] },
                    { phase: 'Phase 3: Implementation', tasks: ['Firewall setup', 'IDS/IPS deployment', 'Encryption'] },
                    { phase: 'Phase 4: Continuous Monitoring', tasks: ['24/7 SOC monitoring', 'Incident response', 'Regular audits'] }
                  ].map((phase, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="relative pb-8 border-l border-slate-800 pl-8 last:pb-0 last:border-0">
                        <div className="absolute left-0 top-2 w-2 h-2 bg-red-500 rounded-full -translate-x-[5px]"></div>
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
                <div className="absolute inset-0 bg-linear-to-br from-red-500/20 to-red-800/20 blur-3xl rounded-full"></div>
                <Card className="bg-slate-950 border-white/10 relative overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Value Proposition</h3>
                    <div className="space-y-6">
                      {[
                        { title: 'Risk Mitigation', desc: 'Minimize the financial and reputational impact of cyber attacks.' },
                        { title: 'Regulatory Compliance', desc: 'Ensure adherence to GDPR, HIPAA, and other standards.' },
                        { title: 'Business Continuity', desc: 'Maintain operations even during security incidents.' },
                        { title: 'Peace of Mind', desc: 'Focus on your business while we handle the security.' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle2 className="w-6 h-6 text-red-500" />
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
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
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

        {/* Why Security Matters */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4 bg-slate-900/50"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">Why Security Matters?</h2>
                <div className="space-y-6">
                  {[
                    'Protection against data breaches',
                    'Compliance with industry regulations',
                    'Enhanced customer trust and loyalty',
                    'Business continuity and resilience'
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-red-500" />
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
                className="bg-linear-to-br from-red-600/20 to-red-900/20 rounded-3xl p-12 border border-white/10 backdrop-blur-sm shadow-2xl shadow-red-500/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Don't wait for a breach</h3>
                <p className="text-red-100 mb-8">
                  Get a comprehensive security assessment today and protect your business from evolving threats.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="w-full bg-white text-red-600 hover:bg-red-50 border-0">
                    Request a Security Audit
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