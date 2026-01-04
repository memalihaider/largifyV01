'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, School, Users, BarChart3, BookOpen, Bell, Play, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SchoolManagementPage() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Student Information System",
      description: "Centralize student data, from admissions and enrollment to grades and attendance, all in one secure place.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "Academic Management",
      description: "Manage courses, subjects, class schedules, and curriculum planning with powerful and flexible tools for educators.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Grading & Report Cards",
      description: "Automate grade calculation, generate custom report cards, and provide parents with real-time access to student progress.",
    },
    {
      icon: <School className="w-8 h-8 text-white" />,
      title: "Parent & Student Portals",
      description: "Foster a strong school-home connection with dedicated portals for students and parents to access information.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "Fee Management",
      description: "Simplify fee collection with automated invoicing, online payment gateways, and detailed financial reporting.",
    },
    {
      icon: <Bell className="w-8 h-8 text-white" />,
      title: "Communication Hub",
      description: "Send announcements, newsletters, and alerts to the entire school community via SMS, email, and push notifications.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-orange-500/30">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-40 pb-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-orange-500/20 via-orange-900/5 to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-[80px] -z-10"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 bg-orange-500/10 text-orange-400 border-orange-500/30 px-4 py-1.5 backdrop-blur-sm">
            Education Management
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            The All-in-One Platform for <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-300">
              Modern Schools
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Empower your students, teachers, and administrators with a comprehensive, intuitive, and powerful school management system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?service=school-management-demo">
              <Button size="lg" className="bg-linear-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white px-10 py-7 text-lg rounded-full transition-all hover:shadow-2xl hover:shadow-orange-500/20 hover:scale-105 group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#video">
              <Button size="lg" variant="outline" className="border-orange-500/30 text-orange-300 hover:bg-orange-500/10 px-10 py-7 text-lg rounded-full transition-all">
                <Play className="mr-2 w-5 h-5 fill-current" /> See How It Works
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
              Streamline. Engage. <span className="text-orange-400">Educate.</span>
            </h2>
            <p className="text-lg text-slate-400">
              Our system is designed to simplify administrative tasks so you can focus on what matters most: education.
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
                <Card className="h-full bg-slate-900/40 border-slate-800 hover:border-orange-500/50 hover:bg-slate-900/60 transition-all duration-300 group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-2xl bg-linear-to-br from-orange-500/20 to-amber-500/20 text-white w-fit shadow-lg shadow-orange-500/10 group-hover:scale-110 transition-transform duration-300 border border-orange-500/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">{feature.title}</h3>
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

      {/* Video Section */}
      <section id="video" className="py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-8">Empowering the Next Generation</h2>
          <motion.div 
            className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
             <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/40 cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-current ml-1" />
                  </div>
                  <p className="text-orange-200 font-medium">Watch Platform Overview</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Schools", value: "500+" },
              { label: "Students", value: "1M+" },
              { label: "Teachers", value: "50k+" },
              { label: "Countries", value: "20+" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-slate-500 mb-2">{stat.value}</div>
                <div className="text-orange-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-slate-900/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold mb-16 text-center tracking-tight">
            Educators Love Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Alan Grant", role: "Principal, Westside High", text: "Administrative workload has dropped by 40% since we implemented this system." },
              { name: "Maria Garcia", role: "Admin, Sunshine Elementary", text: "The parent portal has completely transformed how we communicate with families." },
              { name: "James Wilson", role: "IT Director, City School District", text: "Secure, reliable, and easy to scale. Exactly what we needed for our district." },
            ].map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-slate-950 border-slate-800 hover:border-orange-500/30 transition-all h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-orange-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic flex-grow">"{client.text}"</p>
                    <div>
                      <h4 className="font-bold text-white">{client.name}</h4>
                      <p className="text-sm text-orange-400">{client.role}</p>
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
        <div className="absolute inset-0 bg-linear-to-t from-orange-900/20 to-slate-950 -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Discover how our School Management System can bring efficiency and connectivity to your entire campus.
          </p>
          <Link href="/contact?service=school-management-demo">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-orange-50 px-12 py-8 text-xl rounded-full font-bold shadow-2xl shadow-orange-500/20 transition-all hover:scale-105">
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
