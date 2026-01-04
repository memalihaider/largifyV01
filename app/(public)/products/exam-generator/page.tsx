'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Cpu, FileText, BarChart3, ShieldCheck, Layers, Palette, Users, Play, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ExamGeneratorPage() {
  const features = [
    {
      icon: <Cpu className="w-8 h-8 text-white" />,
      title: "AI-Powered Question Generation",
      description: "Automatically create a diverse range of questions from your existing content like PDFs, DOCs, and text snippets. Save hours of manual work.",
    },
    {
      icon: <Layers className="w-8 h-8 text-white" />,
      title: "Multiple Question Types",
      description: "Supports everything from multiple-choice and true/false to short answer and in-depth essay questions to fit any subject.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: "Secure & Proctored Exams",
      description: "Ensure academic integrity with built-in proctoring, browser locking, and anti-cheating security features.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "Automated Grading",
      description: "Instantly grade objective questions and streamline the review process for subjective answers, freeing up valuable instructor time.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "In-depth Analytics",
      description: "Gain detailed insights into student performance, question effectiveness, and overall learning outcomes with our powerful analytics dashboard.",
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Customizable Templates",
      description: "Create, save, and reuse exam templates with your preferred settings, question structures, and branding.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-40 pb-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-cyan-600/20 via-cyan-900/5 to-transparent"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/30 px-4 py-1.5 backdrop-blur-sm">
            AI-Powered Assessment
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Effortless Exam <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              Creation with AI
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Generate comprehensive, secure, and fair exams in minutes, not hours. Our AI-driven platform streamlines your entire assessment workflow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?service=exam-generator-demo">
              <Button size="lg" className="bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-10 py-7 text-lg rounded-full transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:scale-105 group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 px-10 py-7 text-lg rounded-full transition-all">
                <Play className="mr-2 w-5 h-5 fill-current" /> Watch Demo
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
              The Future of <span className="text-cyan-400">Assessment</span>
            </h2>
            <p className="text-lg text-slate-400">
              Discover the powerful features that make Exam Generator the leading choice for educators and institutions worldwide.
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
                <Card className="h-full bg-slate-900/40 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300 group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-2xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 text-white w-fit shadow-lg shadow-cyan-500/10 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{feature.title}</h3>
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

      {/* Product in Action Section */}
      <section id="demo" className="py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
            See It In Action
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
            Watch a quick overview of how our AI can build a comprehensive exam in minutes, from content upload to final analytics.
          </p>
          <motion.div 
            className="relative aspect-video bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-full h-full flex items-center justify-center bg-slate-900/50 backdrop-blur-xs">
              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/40 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
                <p className="text-cyan-200 font-medium">Watch Product Tour</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Our Integration Process
            </h2>
            <p className="text-lg text-slate-400">
              We follow a streamlined, collaborative process to ensure your solution is a perfect fit.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block" />
            <div className="space-y-16">
              {[
                { title: "Discovery & Planning", description: "We work with you to understand your exact needs, existing systems, and goals for the platform.", icon: <FileText className="w-6 h-6" /> },
                { title: "Customization & Branding", description: "We tailor the Exam Generator to match your institution's branding and specific workflow requirements.", icon: <Palette className="w-6 h-6" /> },
                { title: "Integration & Deployment", description: "Our team handles the full integration with your existing SIS, LMS, or other platforms, ensuring a seamless rollout.", icon: <Layers className="w-6 h-6" /> },
                { title: "Training & Support", description: "We provide comprehensive training for your staff and offer ongoing support to ensure you get the most out of the platform.", icon: <Users className="w-6 h-6" /> },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-8 relative">
                  <div className="md:w-1/2 md:text-right">
                    {i % 2 === 0 && <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all">
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </motion.div>}
                  </div>
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-lg shadow-cyan-500/30 border-4 border-slate-950">
                    {item.icon}
                  </motion.div>
                  <div className="md:w-1/2">
                  {i % 2 !== 0 && <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/30 transition-all">
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </motion.div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-24 px-4 bg-slate-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Trusted by Leading Institutions
            </h2>
            <p className="text-lg text-slate-400">
              Hear from educators and administrators who have transformed their assessment process with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Global Tech University", role: "Dean of Academics", quote: "The Exam Generator has saved our faculty hundreds of hours. It's an indispensable tool for modern education." },
              { name: "Innovate Prep School", role: "Head of Curriculum", quote: "The security features give us complete confidence in our remote examinations. The analytics are a game-changer." },
              { name: "NextGen Corporate Training", role: "L&D Manager", quote: "We can now create and grade certification exams in a fraction of the time. The ROI was immediate." },
            ].map((client, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <Card className="h-full bg-slate-950 border-slate-800 hover:border-cyan-500/30 transition-all">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-cyan-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic flex-grow">"{client.quote}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{client.name}</h4>
                        <p className="text-sm text-cyan-400">{client.role}</p>
                      </div>
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
        <div className="absolute inset-0 bg-linear-to-t from-cyan-900/20 to-slate-950 -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Revolutionize Your Assessment Process?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Join hundreds of institutions that have already transformed their testing and evaluation workflow.
          </p>
          <Link href="/contact?service=exam-generator-demo">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-cyan-50 px-12 py-8 text-xl rounded-full font-bold shadow-2xl shadow-cyan-500/20 transition-all hover:scale-105">
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
