'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2,
  Shield,
  Code,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Target,
  Users,
  Zap,
  Server,
  BarChart3,
  GraduationCap,
  Rocket,
  Globe,
  Lock,
  Database
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'enterprise',
      title: 'Enterprise Solutions',
      subtitle: 'For Businesses & Corporations',
      description: 'Complete digital transformation packages for enterprises looking to optimize operations, secure their infrastructure, and accelerate growth.',
      icon: <Building2 className="w-10 h-10" />,
      color: 'from-corporate-primary to-corporate-secondary',
      offerings: [
        {
          title: 'Digital Transformation Package',
          description: 'ERO System + Process Automation + Analytics Dashboard',
          features: ['End-to-end process digitization', 'Custom ERP implementation', 'Business intelligence suite', 'Staff training & onboarding']
        },
        {
          title: 'Security Operations Package',
          description: 'Complete security infrastructure and compliance',
          features: ['Security audit & assessment', 'SOC setup & operations', 'Compliance certification', 'Incident response planning']
        },
        {
          title: 'Custom Software Development',
          description: 'Bespoke solutions for unique business needs',
          features: ['Requirements analysis', 'Agile development', 'Integration services', 'Ongoing support & maintenance']
        }
      ]
    },
    {
      id: 'institutes',
      title: 'Institute Solutions',
      subtitle: 'For Universities & Training Centers',
      description: 'Comprehensive capability-building solutions for educational institutions looking to prepare students for the modern workforce.',
      icon: <GraduationCap className="w-10 h-10" />,
      color: 'from-lab-primary to-lab-secondary',
      offerings: [
        {
          title: 'Innovation Lab Partnership',
          description: 'White-label access to Largify Innovation Lab',
          features: ['Custom-branded student portal', 'LMS integration', 'CTF competitions', 'Certification programs']
        },
        {
          title: 'Curriculum Development',
          description: 'Industry-aligned training content and programs',
          features: ['Case study library', 'Practical assignments', 'Industry mentorship', 'Career pathway mapping']
        },
        {
          title: 'Campus Security Program',
          description: 'Cybersecurity education and infrastructure',
          features: ['Student CTF clubs', 'Security awareness training', 'Lab infrastructure', 'Certification prep']
        }
      ]
    },
    {
      id: 'government',
      title: 'Government Solutions',
      subtitle: 'For Public Sector Organizations',
      description: 'Secure, compliant, and citizen-centric digital solutions designed specifically for government agencies and public institutions.',
      icon: <Globe className="w-10 h-10" />,
      color: 'from-corporate-primary to-lab-primary',
      offerings: [
        {
          title: 'E-Government Services',
          description: 'Digital citizen services and portals',
          features: ['Citizen service portals', 'Document management', 'Inter-agency integration', 'Mobile government apps']
        },
        {
          title: 'Critical Infrastructure Security',
          description: 'Protect national digital assets',
          features: ['Security assessment', 'Threat monitoring', 'Incident response', 'Staff training']
        },
        {
          title: 'Data Management & Analytics',
          description: 'Transform data into actionable insights',
          features: ['Data architecture', 'Analytics dashboards', 'Policy impact analysis', 'Open data initiatives']
        }
      ]
    }
  ];

  const engagementProcess = [
    {
      step: 1,
      title: 'Discovery',
      description: 'We begin with understanding your unique challenges, goals, and constraints through in-depth consultations.',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Assessment',
      description: 'Our experts conduct thorough analysis of your current systems, processes, and security posture.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Solution Design',
      description: 'We design a customized solution architecture that addresses your specific needs and budget.',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Implementation',
      description: 'Our team delivers the solution with minimal disruption, following industry best practices.',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      step: 5,
      title: 'Training',
      description: 'We ensure your team is fully equipped to leverage the new systems through comprehensive training.',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 6,
      title: 'Partnership',
      description: 'Ongoing support, optimization, and evolution of your systems as your needs grow.',
      icon: <Zap className="w-6 h-6" />
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
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                Our Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Tailored Solutions for{' '}
                <span className="bg-linear-to-r from-corporate-primary to-lab-primary bg-clip-text text-transparent">
                  Every Sector
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Whether you're an enterprise seeking digital transformation, an institute building 
                capability, or a government agency serving citizens - we have solutions designed for you.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Sections */}
        {solutions.map((solution, index) => (
          <motion.section 
            key={solution.id}
            id={solution.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="py-24 px-4"
          >
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${solution.color} text-white mb-6 shadow-lg`}>
                  {solution.icon}
                </div>
                <h2 className="text-4xl font-bold text-white mb-2">{solution.title}</h2>
                <p className={`text-xl font-medium mb-4 ${index === 1 ? 'text-lab-primary' : 'text-corporate-primary'}`}>{solution.subtitle}</p>
                <p className="text-lg text-slate-400 max-w-3xl">{solution.description}</p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-8">
                {solution.offerings.map((offering, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="h-full border border-white/5 bg-slate-900/50 backdrop-blur-sm hover:border-white/10 transition-all">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{offering.title}</h3>
                        <p className="text-slate-400 mb-4">{offering.description}</p>
                        <ul className="space-y-2">
                          {offering.features.map((feature, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${index === 1 ? 'text-lab-primary' : 'text-corporate-primary'}`} />
                              <span className="text-slate-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link href="/contact">
                  <Button size="lg" className={`bg-linear-to-r ${solution.color} hover:opacity-90 text-white border-0`}>
                    Explore {solution.title}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Engagement Process */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                How We Work
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Engagement Process
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                A structured approach to ensure successful delivery and lasting value for every client.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {engagementProcess.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 h-full hover:border-white/10 transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-lab-primary to-lab-secondary flex items-center justify-center text-white font-bold shadow-lg">
                        {phase.step}
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 text-white">
                        {phase.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                    <p className="text-slate-400">{phase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Innovation Lab CTA */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-linear-to-br from-lab-primary/20 to-lab-secondary/20 rounded-[2.5rem] p-12 border border-white/10 backdrop-blur-sm text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lab-primary/10 rounded-full blur-[100px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-lab-secondary/10 rounded-full blur-[100px] -ml-32 -mb-32" />
              
              <div className="relative z-10">
                <Badge className="mb-4 bg-white/10 text-white border-white/20">
                  Capability Building
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Looking to Build Internal Capability?
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                  Largify Innovation Lab provides training, certifications, and hands-on learning 
                  experiences to develop your team's skills in business, cybersecurity, and technology.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/pricing">
                    <Button size="lg" className="bg-white text-lab-primary hover:bg-slate-100 border-0 px-8">
                      View Lab Pricing
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}