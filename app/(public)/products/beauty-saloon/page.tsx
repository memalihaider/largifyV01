'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Calendar, Users, BarChart3, Scissors, Palette, Play, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BeautySaloonPage() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-white" />,
      title: "Smart Appointment Booking",
      description: "An intuitive calendar for clients to book, reschedule, or cancel appointments 24/7, reducing no-shows with automated reminders.",
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Client Management",
      description: "Keep detailed client profiles, including service history, preferences, and contact information, to provide personalized experiences.",
    },
    {
      icon: <Scissors className="w-8 h-8 text-white" />,
      title: "Staff & Service Management",
      description: "Manage staff schedules, commissions, and performance. Easily add, update, or bundle services with custom pricing.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "Inventory Control",
      description: "Track product usage and stock levels in real-time. Get low-stock alerts and automate purchase orders to never run out of supplies.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Sales & Performance Analytics",
      description: "Monitor your business health with comprehensive reports on sales, staff performance, client retention, and popular services.",
    },
    {
      icon: <Palette className="w-8 h-8 text-white" />,
      title: "Marketing & Loyalty Programs",
      description: "Engage your clients with targeted SMS and email marketing campaigns. Create loyalty programs to reward and retain your best customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-pink-500/30">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-40 pb-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-pink-600/20 via-pink-900/5 to-transparent"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] -z-10"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 bg-pink-500/10 text-pink-400 border-pink-500/30 px-4 py-1.5 backdrop-blur-sm">
            Salon & Spa Management
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-pink-100 to-pink-200">
              Manage Your Salon,
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-purple-400">
              Beautifully
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            A complete, all-in-one solution to streamline your salon operations, delight your clients, and grow your business with style.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?service=beauty-saloon-demo">
              <Button size="lg" className="bg-linear-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-10 py-7 text-lg rounded-full transition-all hover:shadow-2xl hover:shadow-pink-500/20 hover:scale-105 group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="border-pink-500/30 text-pink-300 hover:bg-pink-500/10 px-10 py-7 text-lg rounded-full transition-all">
                <Play className="mr-2 w-5 h-5 fill-current" /> Watch Video
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-pink-950/5 to-slate-950 -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Everything You Need to <span className="text-pink-400">Shine</span>
            </h2>
            <p className="text-lg text-slate-400">
              From booking to billing, our platform is designed to handle the complexities of running a modern salon or spa.
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
                <Card className="h-full bg-slate-900/40 border-slate-800 hover:border-pink-500/50 hover:bg-slate-900/60 transition-all duration-300 group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-2xl bg-linear-to-br from-pink-500/20 to-purple-500/20 text-white w-fit shadow-lg shadow-pink-500/10 group-hover:scale-110 transition-transform duration-300 border border-pink-500/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">{feature.title}</h3>
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

      {/* Product Demo Section */}
      <section id="demo" className="py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
            See It In Action
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
            Experience the elegance and efficiency of our salon management interface.
          </p>
          <motion.div 
            className="relative aspect-video bg-slate-900 rounded-2xl border border-pink-500/30 shadow-2xl shadow-pink-500/20 overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-linear-to-tr from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-full h-full flex items-center justify-center bg-slate-900/50 backdrop-blur-xs">
              <div className="text-center">
                <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/40 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white fill-current ml-1" />
                </div>
                <p className="text-pink-200 font-medium">Watch Product Tour</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Seamless Onboarding
            </h2>
            <p className="text-lg text-slate-400">
              We make switching to our platform as smooth as a fresh blowout.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We analyze your salon's specific needs." },
              { step: "02", title: "Migration", desc: "We safely transfer all your client data." },
              { step: "03", title: "Training", desc: "Staff training sessions for your team." },
              { step: "04", title: "Launch", desc: "Go live with full support standby." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-pink-500/30 transition-all group"
              >
                <div className="text-5xl font-black text-slate-800 group-hover:text-pink-500/20 transition-colors mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-extrabold mb-16 text-center tracking-tight">
            Loved by Salon Owners
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Owner, Glow Spa", text: "The booking system alone increased our revenue by 30% in the first month." },
              { name: "Michael Chen", role: "Director, Luxe Hair", text: "Finally, a system that handles inventory and staff commissions correctly." },
              { name: "Elena Rodriguez", role: "Manager, Pure Beauty", text: "Our clients love the mobile booking app. It's been a game changer." },
            ].map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-slate-900/50 border-slate-800 hover:border-pink-500/30 transition-all">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic">"{client.text}"</p>
                    <div>
                      <h4 className="font-bold text-white">{client.name}</h4>
                      <p className="text-sm text-pink-400">{client.role}</p>
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
        <div className="absolute inset-0 bg-linear-to-t from-pink-900/20 to-slate-950 -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Elevate Your Salon Experience?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            Let us show you how our platform can help you save time, reduce stress, and increase your revenue.
          </p>
          <Link href="/contact?service=beauty-saloon-demo">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-pink-50 px-12 py-8 text-xl rounded-full font-bold shadow-2xl shadow-pink-500/20 transition-all hover:scale-105">
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
