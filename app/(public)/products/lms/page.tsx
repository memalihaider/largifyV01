'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, BookOpen, Video, Users, BarChart3, Award, Play, Star, MonitorPlay } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LmsPage() {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Intuitive Course Builder",
      description: "Create engaging courses with our easy-to-use drag-and-drop builder. Upload videos, PDFs, quizzes, and more.",
    },
    {
      icon: <Video className="w-8 h-8 text-white" />,
      title: "Interactive Video Learning",
      description: "Host high-quality video content with interactive elements like in-video quizzes and chapter markers to boost engagement.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "User & Cohort Management",
      description: "Manage learners, create groups or cohorts, and track progress for both individual users and entire teams.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Advanced Progress Tracking",
      description: "Monitor learner progress, quiz scores, and course completion rates with our detailed analytics dashboard.",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Certifications & Gamification",
      description: "Issue custom certificates upon course completion. Increase motivation with points, badges, and leaderboards.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "E-commerce & Subscriptions",
      description: "Monetize your content by selling courses individually or as part of a subscription plan with our integrated payment gateways.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-40 pb-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-emerald-600/20 via-emerald-900/5 to-transparent"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 bg-emerald-500/10 text-emerald-400 border-emerald-500/30 px-4 py-1.5 backdrop-blur-sm">
            Online Learning Platform
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Your All-in-One <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
              Learning Management System
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Create, market, and sell online courses with a powerful, user-friendly platform designed for educators and businesses.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?service=lms-demo">
              <Button size="lg" className="bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-10 py-7 text-lg rounded-full transition-all hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-105 group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#preview">
              <Button size="lg" variant="outline" className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 px-10 py-7 text-lg rounded-full transition-all">
                <MonitorPlay className="mr-2 w-5 h-5 fill-current" /> Course Preview
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
              Deliver Exceptional <span className="text-emerald-400">Learning Experiences</span>
            </h2>
            <p className="text-lg text-slate-400">
              Our LMS is packed with features to help you build a thriving online learning community.
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
                <Card className="h-full bg-slate-900/40 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all duration-300 group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-2xl bg-linear-to-br from-emerald-500/20 to-teal-500/20 text-white w-fit shadow-lg shadow-emerald-500/10 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">{feature.title}</h3>
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

      {/* Course Preview Section */}
      <section id="preview" className="py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">A Classroom Without Walls</h2>
              <p className="text-slate-400 mb-8">
                Provide a seamless learning experience on any device. Our responsive player ensures your content looks great on desktops, tablets, and phones.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Distraction-Free Learning", desc: "Clean interface focused on content consumption." },
                  { title: "Discussion Forums", desc: "Built-in community features for peer-to-peer learning." },
                  { title: "Resource Library", desc: "Easy access to downloadable materials and supplementary files." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 font-bold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-800"
            >
              {/* Mockup of course player */}
              <div className="bg-slate-950 aspect-video relative">
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                       <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
                    <div className="h-full w-1/3 bg-emerald-500"></div>
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
            Creators & Educators Trust Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Sarah Miller", role: "Online Instructor", text: "The course builder is incredibly intuitive. I launched my first course in under a week." },
              { name: "Tech Academy", role: "Corporate Training", text: "We use this LMS to train over 500 employees. The reporting features are fantastic." },
              { name: "Creative Skills", role: "E-learning Business", text: "Sales have increased by 50% since switching to this platform. The checkout process is seamless." },
            ].map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-slate-900/50 border-slate-800 hover:border-emerald-500/30 transition-all h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-emerald-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic flex-grow">"{client.text}"</p>
                    <div>
                      <h4 className="font-bold text-white">{client.name}</h4>
                      <p className="text-sm text-emerald-400">{client.role}</p>
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
        <div className="absolute inset-0 bg-linear-to-t from-emerald-900/20 to-slate-950 -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Share Your Knowledge?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Let us show you how easy it is to build and grow your online education business with our powerful LMS.
          </p>
          <Link href="/contact?service=lms-demo">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-emerald-50 px-12 py-8 text-xl rounded-full font-bold shadow-2xl shadow-emerald-500/20 transition-all hover:scale-105">
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
