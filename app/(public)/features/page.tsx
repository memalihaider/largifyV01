'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Building2,
  Shield,
  Code,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Server,
  Database,
  Lock,
  Cpu,
  BarChart3,
  Users,
  Zap,
  Globe,
  FileCode,
  Smartphone,
  Cloud,
  Brain,
  Search,
  TrendingUp,
  Palette,
  Blocks,
  LayoutGrid
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  const services = [
    {
      id: 'ero',
      icon: <Building2 className="w-12 h-12" />,
      title: 'ERO System',
      subtitle: 'Enterprise Resource Optimization',
      description: 'Our flagship service that transforms how businesses operate. We don\'t just digitize; we optimize every process for maximum efficiency and data-driven decision making.',
      color: 'from-corporate-primary to-corporate-secondary',
      bgColor: 'bg-corporate-primary/5',
      features: [
        {
          icon: <Server className="w-5 h-5" />,
          title: 'Business Process Digitization',
          description: 'Transform manual workflows into streamlined digital processes'
        },
        {
          icon: <Cpu className="w-5 h-5" />,
          title: 'Workflow Automation',
          description: 'Reduce operational overhead with intelligent automation'
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: 'ERP & Custom Systems',
          description: 'Unified data architecture tailored to your needs'
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: 'Performance Optimization',
          description: 'Data-driven insights for continuous improvement'
        }
      ],
      benefits: ['40% reduction in operational costs', '60% faster decision making', '3x improvement in efficiency', '99.9% system uptime']
    },
    {
      id: 'security',
      icon: <Shield className="w-12 h-12" />,
      title: 'Cybersecurity Services',
      subtitle: 'Protect Your Digital Assets',
      description: 'Comprehensive security solutions to protect your organization from evolving cyber threats. From audits to SOC readiness, we secure your systems.',
      color: 'from-corporate-primary to-corporate-accent',
      bgColor: 'bg-corporate-primary/5',
      features: [
        {
          icon: <Lock className="w-5 h-5" />,
          title: 'Security Audits',
          description: 'Comprehensive assessment of your security posture'
        },
        {
          icon: <Shield className="w-5 h-5" />,
          title: 'Vulnerability Assessments',
          description: 'Identify and remediate security weaknesses'
        },
        {
          icon: <Server className="w-5 h-5" />,
          title: 'SOC Readiness',
          description: 'Build and operationalize security operations'
        },
        {
          icon: <CheckCircle2 className="w-5 h-5" />,
          title: 'Compliance Guidance',
          description: 'ISO 27001, PCI-DSS, and regulatory compliance'
        }
      ],
      benefits: ['Penetration testing', 'Incident response', 'Security training', 'Continuous monitoring']
    },
    {
      id: 'software',
      icon: <Code className="w-12 h-12" />,
      title: 'Software Solutions',
      subtitle: 'Digital Products & Platforms',
      description: 'Build enterprise-grade digital products that scale. From web applications to AI-enabled systems, we deliver execution-focused solutions.',
      color: 'from-lab-primary to-lab-secondary',
      bgColor: 'bg-lab-primary/5',
      features: [
        {
          icon: <Globe className="w-5 h-5" />,
          title: 'Web Applications',
          description: 'Modern, responsive web solutions'
        },
        {
          icon: <Smartphone className="w-5 h-5" />,
          title: 'Mobile Applications',
          description: 'Native and cross-platform mobile apps'
        },
        {
          icon: <Cloud className="w-5 h-5" />,
          title: 'SaaS Platforms',
          description: 'Scalable software-as-a-service solutions'
        },
        {
          icon: <Brain className="w-5 h-5" />,
          title: 'AI-Enabled Systems',
          description: 'Intelligent automation and machine learning'
        }
      ],
      benefits: ['Custom dashboards', 'API integrations', 'Cloud infrastructure', 'DevOps & CI/CD']
    },
    {
      id: 'consulting',
      icon: <Lightbulb className="w-12 h-12" />,
      title: 'Innovation Consulting',
      subtitle: 'Digital Transformation',
      description: 'Navigate digital transformation with strategic guidance. We help enterprises innovate, adapt, and lead in their industries.',
      color: 'from-lab-accent to-lab-highlight',
      bgColor: 'bg-lab-accent/5',
      features: [
        {
          icon: <Lightbulb className="w-5 h-5" />,
          title: 'Innovation Strategy',
          description: 'Define your innovation roadmap and priorities'
        },
        {
          icon: <FileCode className="w-5 h-5" />,
          title: 'Technology Roadmap',
          description: 'Plan your technology evolution path'
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: 'Process Re-engineering',
          description: 'Redesign processes for digital excellence'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Change Management',
          description: 'Lead organizational transformation'
        }
      ],
      benefits: ['Executive workshops', 'Digital maturity assessment', 'Transformation roadmaps', 'Ongoing advisory']
    },
    {
      id: 'marketing',
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Digital Marketing & SEO',
      subtitle: 'Growth & Visibility',
      description: 'Boost your online visibility and attract more customers with expert strategies. We help you reach your target audience effectively.',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-500/5',
      features: [
        {
          icon: <Search className="w-5 h-5" />,
          title: 'SEO Optimization',
          description: 'Improve your search engine rankings'
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: 'Social Media Marketing',
          description: 'Engage with your audience on social platforms'
        },
        {
          icon: <FileCode className="w-5 h-5" />,
          title: 'Content Strategy',
          description: 'Create compelling content that converts'
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: 'PPC Campaigns',
          description: 'Targeted advertising for immediate results'
        }
      ],
      benefits: ['Increased Traffic', 'Better Conversion Rates', 'Brand Awareness', 'ROI Tracking']
    },
    {
      id: 'uiux',
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      subtitle: 'User-Centric Design',
      description: 'Create intuitive and engaging user experiences that drive conversion. We design interfaces that users love to use.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/5',
      features: [
        {
          icon: <Users className="w-5 h-5" />,
          title: 'User Research',
          description: 'Understand your users needs and behaviors'
        },
        {
          icon: <LayoutGrid className="w-5 h-5" />,
          title: 'Wireframing',
          description: 'Blueprint your application structure'
        },
        {
          icon: <Palette className="w-5 h-5" />,
          title: 'Visual Design',
          description: 'Stunning and consistent visual aesthetics'
        },
        {
          icon: <CheckCircle2 className="w-5 h-5" />,
          title: 'Usability Testing',
          description: 'Validate designs with real users'
        }
      ],
      benefits: ['Higher Engagement', 'Lower Bounce Rates', 'Brand Consistency', 'User Satisfaction']
    },
    {
      id: 'cloud',
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable & Secure',
      description: 'Scalable and secure cloud solutions for your growing business needs. We help you leverage the power of the cloud.',
      color: 'from-sky-500 to-blue-500',
      bgColor: 'bg-sky-500/5',
      features: [
        {
          icon: <Cloud className="w-5 h-5" />,
          title: 'Cloud Migration',
          description: 'Seamless transition to cloud environments'
        },
        {
          icon: <Server className="w-5 h-5" />,
          title: 'Architecture Design',
          description: 'Robust and scalable system architecture'
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: 'Serverless Computing',
          description: 'Run code without provisioning servers'
        },
        {
          icon: <Globe className="w-5 h-5" />,
          title: 'Multi-Cloud Strategy',
          description: 'Optimize across different cloud providers'
        }
      ],
      benefits: ['Scalability', 'Cost Efficiency', 'High Availability', 'Disaster Recovery']
    },
    {
      id: 'data',
      icon: <BarChart3 className="w-12 h-12" />,
      title: 'Data Analytics',
      subtitle: 'Actionable Insights',
      description: 'Transform raw data into actionable insights for better decision making. Unlock the value hidden in your data.',
      color: 'from-teal-500 to-emerald-500',
      bgColor: 'bg-teal-500/5',
      features: [
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: 'Data Visualization',
          description: 'Interactive dashboards and reports'
        },
        {
          icon: <Brain className="w-5 h-5" />,
          title: 'Predictive Analytics',
          description: 'Forecast future trends and behaviors'
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: 'Business Intelligence',
          description: 'Strategic analysis of business data'
        },
        {
          icon: <Cpu className="w-5 h-5" />,
          title: 'Big Data Processing',
          description: 'Handle massive datasets efficiently'
        }
      ],
      benefits: ['Informed Decisions', 'Trend Analysis', 'Operational Efficiency', 'Customer Insights']
    },
    {
      id: 'blockchain',
      icon: <Blocks className="w-12 h-12" />,
      title: 'Blockchain Solutions',
      subtitle: 'Decentralized Trust',
      description: 'Secure, transparent, and decentralized solutions for modern problems. Explore the potential of Web3 technology.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/5',
      features: [
        {
          icon: <FileCode className="w-5 h-5" />,
          title: 'Smart Contracts',
          description: 'Self-executing contracts with automated terms'
        },
        {
          icon: <Globe className="w-5 h-5" />,
          title: 'DApp Development',
          description: 'Decentralized applications on the blockchain'
        },
        {
          icon: <Lock className="w-5 h-5" />,
          title: 'Private Blockchains',
          description: 'Secure ledgers for enterprise use'
        },
        {
          icon: <CheckCircle2 className="w-5 h-5" />,
          title: 'Tokenization',
          description: 'Digital representation of assets'
        }
      ],
      benefits: ['Transparency', 'Security', 'Immutability', 'Efficiency']
    },
    {
      id: 'devops',
      icon: <Cpu className="w-12 h-12" />,
      title: 'DevOps Services',
      subtitle: 'Streamlined Operations',
      description: 'Streamline development and operations for faster delivery cycles. Automate your software delivery pipeline.',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-500/5',
      features: [
        {
          icon: <Zap className="w-5 h-5" />,
          title: 'CI/CD Pipelines',
          description: 'Automated build, test, and deployment'
        },
        {
          icon: <Code className="w-5 h-5" />,
          title: 'Infrastructure as Code',
          description: 'Manage infrastructure through code'
        },
        {
          icon: <Server className="w-5 h-5" />,
          title: 'Containerization',
          description: 'Docker and Kubernetes orchestration'
        },
        {
          icon: <CheckCircle2 className="w-5 h-5" />,
          title: 'Monitoring & Logging',
          description: 'Real-time system health tracking'
        }
      ],
      benefits: ['Faster Time-to-Market', 'Reliability', 'Scalability', 'Collaboration']
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(service => {
    const query = searchQuery.toLowerCase();
    return (
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.features.some(feature => 
        feature.title.toLowerCase().includes(query) || 
        feature.description.toLowerCase().includes(query)
      ) ||
      service.benefits.some(benefit => benefit.toLowerCase().includes(query))
    );
  });

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
                Our Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Enterprise-Grade{' '}
                <span className="bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8">
                Largify Solutions provides professional technology and security services 
                for businesses, institutes, and governments. Our signature services are 
                designed to transform operations, secure assets, and drive innovation.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-linear-to-r from-corporate-primary to-corporate-secondary hover:opacity-90 text-white border-0">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-white/5">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Search Bar */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-12 max-w-2xl mx-auto relative"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-linear-to-r from-corporate-primary to-lab-primary rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <Input 
                      type="text" 
                      placeholder="Search services, features, or benefits..." 
                      className="w-full pl-12 py-6 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent shadow-xl"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Detail Sections */}
        {filteredServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <div className="inline-flex p-4 rounded-full bg-slate-800/50 mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-slate-400">Try adjusting your search terms to find what you're looking for.</p>
            <Button 
              variant="link" 
              className="text-violet-400 mt-4"
              onClick={() => setSearchQuery('')}
            >
              Clear search
            </Button>
          </motion.div>
        )}

        {filteredServices.map((service, index) => (
          <motion.section 
            key={service.id} 
            id={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="py-20 px-4"
          >
            <div className="container mx-auto max-w-7xl">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex p-4 rounded-2xl bg-linear-to-br ${service.color} text-white mb-6 shadow-lg shadow-violet-500/20`}>
                    {service.icon}
                  </div>
                  
                  <h2 className="text-4xl font-bold text-white mb-2">{service.title}</h2>
                  <p className="text-xl text-violet-400 font-medium mb-4">{service.subtitle}</p>
                  <p className="text-lg text-slate-400 mb-8">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:border-white/10 transition-colors">
                        <div className={`inline-flex p-2 rounded-lg bg-linear-to-br ${service.color} text-white mb-3`}>
                          {feature.icon}
                        </div>
                        <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                        <p className="text-sm text-slate-400">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className={`bg-linear-to-r ${service.color} hover:opacity-90 text-white border-0`}>
                      Get {service.title}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                {/* Benefits Card */}
                <div className={index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <Card className={`border-0 shadow-2xl bg-linear-to-br ${service.color} text-white overflow-hidden relative group`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                    <CardContent className="p-8 relative z-10">
                      <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                      <div className="space-y-4">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/10">
                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-white" />
                            <span className="font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </motion.section>
        ))}

        {/* Why Largify Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-violet-500/20 text-violet-300 border-violet-500/30">
                Why Choose Us
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                The Largify Advantage
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                We don't just deliver services - we build lasting partnerships that drive 
                continuous value and growth for your organization.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Integrated Ecosystem',
                  description: 'Services and capability building work together. Your team learns while we deliver.',
                  icon: <Globe className="w-8 h-8" />
                },
                {
                  title: 'Proven Expertise',
                  description: '150+ enterprise clients, 500+ projects delivered with 98% satisfaction rate.',
                  icon: <CheckCircle2 className="w-8 h-8" />
                },
                {
                  title: 'Long-term Partnership',
                  description: 'We\'re not vendors - we\'re partners invested in your success and growth.',
                  icon: <Users className="w-8 h-8" />
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Let's discuss how our services can transform your business operations, 
                secure your assets, and drive innovation.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-linear-to-r from-corporate-primary to-corporate-secondary hover:opacity-90 text-lg px-8 py-6 text-white border-0">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
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
