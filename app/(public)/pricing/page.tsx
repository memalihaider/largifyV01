'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap,
  Shield,
  Lightbulb,
  Users,
  ArrowRight,
  CheckCircle2,
  Zap,
  Building2,
  Award,
  BookOpen,
  Flag,
  Trophy,
  Briefcase,
  Crown
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PricingPage() {
  const individualPlans = [
    {
      name: 'Explorer',
      price: 'Free',
      period: '',
      description: 'Perfect for getting started with learning and exploration.',
      icon: <Zap className="w-6 h-6" />,
      color: 'bg-slate-100 text-slate-700',
      buttonColor: 'bg-slate-900 hover:bg-slate-800',
      features: [
        'Access to basic case studies',
        'Limited CTF challenges (5/month)',
        'Community forum access',
        'Basic learning resources',
        'Certificate of participation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'PKR 2,500',
      period: '/month',
      description: 'For serious learners ready to build real skills.',
      icon: <Award className="w-6 h-6" />,
      color: 'bg-lab-primary/10 text-lab-primary',
      buttonColor: 'bg-gradient-to-r from-lab-primary to-lab-secondary hover:from-lab-primary/90 hover:to-lab-secondary/90',
      features: [
        'Full case study library access',
        'Unlimited CTF challenges',
        'Advanced learning paths',
        'Industry mentor matching',
        'Professional certifications',
        'Priority support',
        'Career guidance resources'
      ],
      popular: true
    },
    {
      name: 'Enterprise Learner',
      price: 'PKR 5,000',
      period: '/month',
      description: 'Premium experience with personalized attention.',
      icon: <Crown className="w-6 h-6" />,
      color: 'bg-lab-highlight/10 text-lab-highlight',
      buttonColor: 'bg-gradient-to-r from-lab-highlight to-lab-accent hover:from-lab-highlight/90 hover:to-lab-accent/90',
      features: [
        'Everything in Professional',
        'One-on-one mentorship sessions',
        'Exclusive enterprise case studies',
        'Custom learning paths',
        'Job placement assistance',
        'Direct industry connections',
        'Premium certification track'
      ],
      popular: false
    }
  ];

  const institutePlans = [
    {
      name: 'Campus Starter',
      price: 'Contact Sales',
      description: 'For universities starting their innovation journey.',
      icon: <BookOpen className="w-8 h-8" />,
      features: [
        'Up to 500 students',
        'Basic LMS integration',
        'Standard case study library',
        'Monthly CTF competitions',
        'Admin dashboard',
        'Email support'
      ]
    },
    {
      name: 'Campus Pro',
      price: 'Contact Sales',
      description: 'Full-featured platform for growing institutions.',
      icon: <GraduationCap className="w-8 h-8" />,
      features: [
        'Up to 2,000 students',
        'White-label portal',
        'Full case study & CTF access',
        'Industry mentor network',
        'Custom certification programs',
        'Analytics & reporting',
        'Dedicated success manager'
      ],
      popular: true
    },
    {
      name: 'Campus Enterprise',
      price: 'Contact Sales',
      description: 'Unlimited scale with custom requirements.',
      icon: <Building2 className="w-8 h-8" />,
      features: [
        'Unlimited students',
        'Full white-label solution',
        'Custom content development',
        'API integrations',
        'On-site training',
        'SLA guarantees',
        'Strategic partnership'
      ]
    }
  ];

  const coinPackages = [
    { coins: 100, price: 500, popular: false },
    { coins: 250, price: 1000, popular: false },
    { coins: 500, price: 1750, popular: true },
    { coins: 1000, price: 3000, popular: false }
  ];

  return (
    <div className="relative min-h-screen bg-slate-950">
      {/* Unified Background System */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated Pulses */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lab-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-corporate-primary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-32 pb-20 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="p-2 bg-lab-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-lab-primary" />
                </div>
                <span className="text-xl font-semibold text-lab-primary tracking-tight">Largify Innovation Lab</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                Invest in Your{' '}
                <span className="bg-linear-to-r from-lab-primary via-lab-secondary to-lab-highlight bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Join our capability-building platform to develop in-demand skills in business, 
                cybersecurity, and technology through practical, industry-aligned programs.
              </p>
              <div className="flex items-center justify-center gap-3 text-slate-500">
                <div className="h-px w-8 bg-slate-800" />
                <p className="text-sm uppercase tracking-widest">
                  A platform by <span className="text-slate-300 font-semibold">Largify Solutions</span>
                </p>
                <div className="h-px w-8 bg-slate-800" />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Individual Plans */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4 relative"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="mb-4 bg-lab-primary/10 text-lab-primary border-lab-primary/20 px-4 py-1">
                Individual Plans
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                For Students & Professionals
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Choose the plan that matches your learning goals and career aspirations.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {individualPlans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}
                >
                  <Card className={`h-full border-slate-800/50 shadow-2xl relative bg-slate-900/40 backdrop-blur-xl overflow-hidden group hover:border-lab-primary/30 transition-all duration-500 ${plan.popular ? 'ring-2 ring-lab-primary/50' : ''}`}>
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-lab-primary to-lab-secondary" />
                    )}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-lab-primary text-white px-4 py-1 shadow-lg">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-2xl ${plan.color.replace('bg-slate-100 text-slate-700', 'bg-slate-800/50 text-slate-300')} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-slate-500 ml-2">{plan.period}</span>
                      </div>
                      <p className="text-slate-400 mb-8 leading-relaxed">{plan.description}</p>
                      
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="mt-1 bg-green-500/20 rounded-full p-0.5">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                            </div>
                            <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/auth/register">
                        <Button size="lg" className={`w-full ${plan.buttonColor} text-white shadow-lg shadow-lab-primary/20 group-hover:translate-y-[-2px] transition-all duration-300`}>
                          Get Started
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Coin Packages */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4 bg-slate-900/30 backdrop-blur-sm border-y border-slate-800/50"
        >
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/20 px-4 py-1">
                Coin Packages
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-6">
                Pay-As-You-Go Learning
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Purchase coins to unlock premium case studies, advanced CTF challenges, 
                and certification exams individually.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coinPackages.map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`border-slate-800/50 shadow-xl hover:border-amber-500/30 transition-all duration-500 bg-slate-900/40 backdrop-blur-xl group ${pkg.popular ? 'ring-2 ring-amber-500/50' : ''}`}>
                    <CardContent className="p-8 text-center">
                      {pkg.popular && (
                        <Badge className="mb-4 bg-amber-500 text-white px-3 py-0.5">Best Value</Badge>
                      )}
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">🪙</div>
                      <div className="text-3xl font-bold text-white mb-1">{pkg.coins}</div>
                      <div className="text-slate-500 mb-6">Coins</div>
                      <div className="text-2xl font-bold text-amber-400 mb-6">
                        PKR {pkg.price.toLocaleString()}
                      </div>
                      <Link href="/auth/register">
                        <Button variant="outline" className="w-full border-slate-700 text-white hover:bg-amber-500 hover:border-amber-500 transition-all duration-300">
                          Buy Now
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Institute Plans */}
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
              className="text-center mb-20"
            >
              <Badge className="mb-4 bg-corporate-primary/10 text-corporate-primary border-corporate-primary/20 px-4 py-1">
                Institute Plans
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                For Universities & Training Centers
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Empower your students with industry-aligned capability building programs.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {institutePlans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`h-full bg-slate-900/40 backdrop-blur-xl border-slate-800/50 hover:border-corporate-primary/30 transition-all duration-500 group ${plan.popular ? 'ring-2 ring-corporate-primary/50' : ''}`}>
                    {plan.popular && (
                      <div className="bg-linear-to-r from-corporate-primary to-corporate-secondary text-white text-center py-2 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <CardContent className="p-8">
                      <div className="inline-flex p-4 rounded-2xl bg-corporate-primary/10 text-corporate-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-2xl font-bold text-corporate-primary mb-6">{plan.price}</div>
                      <p className="text-slate-400 mb-8 leading-relaxed">{plan.description}</p>
                      
                      <ul className="space-y-4 mb-10">
                        {plan.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="mt-1 bg-corporate-primary/20 rounded-full p-0.5">
                              <CheckCircle2 className="w-4 h-4 text-corporate-primary flex-shrink-0" />
                            </div>
                            <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link href="/contact">
                        <Button size="lg" className="w-full bg-linear-to-r from-corporate-primary to-corporate-secondary hover:from-corporate-primary/90 hover:to-corporate-secondary/90 text-white shadow-lg shadow-corporate-primary/20 group-hover:translate-y-[-2px] transition-all duration-300">
                          Contact Sales
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What's Included */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4 bg-slate-900/30 backdrop-blur-sm border-y border-slate-800/50"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="mb-4 bg-lab-highlight/10 text-lab-highlight border-lab-highlight/20 px-4 py-1">
                What's Included
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Platform Features
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: 'Case Studies',
                  description: 'Real-world business scenarios with guided analysis and solutions',
                  color: 'text-amber-500',
                  bg: 'bg-amber-500/10'
                },
                {
                  icon: <Flag className="w-8 h-8" />,
                  title: 'CTF Challenges',
                  description: 'Capture-the-flag cybersecurity challenges from beginner to expert',
                  color: 'text-red-500',
                  bg: 'bg-red-500/10'
                },
                {
                  icon: <BookOpen className="w-8 h-8" />,
                  title: 'Learning Paths',
                  description: 'Structured curriculum aligned with industry requirements',
                  color: 'text-blue-500',
                  bg: 'bg-blue-500/10'
                },
                {
                  icon: <Trophy className="w-8 h-8" />,
                  title: 'Certifications',
                  description: 'Industry-recognized certificates to validate your skills',
                  color: 'text-green-500',
                  bg: 'bg-green-500/10'
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: 'Mentorship',
                  description: 'Connect with industry experts for guidance and feedback',
                  color: 'text-violet-500',
                  bg: 'bg-violet-500/10'
                },
                {
                  icon: <Briefcase className="w-8 h-8" />,
                  title: 'Career Support',
                  description: 'Job board, resume reviews, and interview preparation',
                  color: 'text-pink-500',
                  bg: 'bg-pink-500/10'
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Security Labs',
                  description: 'Hands-on security environments for practical learning',
                  color: 'text-orange-500',
                  bg: 'bg-orange-500/10'
                },
                {
                  icon: <Building2 className="w-8 h-8" />,
                  title: 'Industry Projects',
                  description: 'Work on real projects from partner organizations',
                  color: 'text-cyan-500',
                  bg: 'bg-cyan-500/10'
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full border-slate-800/50 bg-slate-900/40 backdrop-blur-xl hover:border-lab-primary/30 transition-all duration-500 group">
                    <CardContent className="p-8 text-center">
                      <div className={`inline-flex p-4 rounded-2xl ${feature.bg} ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
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
          className="py-24 px-4 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-r from-lab-primary/20 to-corporate-primary/20 blur-3xl -z-10" />
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Join thousands of students and professionals building skills for the future.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link href="/auth/register">
                  <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-100 text-lg px-10 py-7 rounded-full shadow-2xl shadow-white/10 group">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-white/5 text-lg px-10 py-7 rounded-full backdrop-blur-sm">
                    Contact Sales
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

