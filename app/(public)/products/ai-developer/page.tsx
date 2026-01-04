'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, Bot, Brain, BarChart3, Zap, TrendingUp, Sparkles, Users, Play, Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AiDeveloperPage() {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: "Automated Market Research",
      description: "Our AI continuously analyzes market trends, competitor strategies, and customer sentiment to identify new growth opportunities.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Predictive Lead Scoring",
      description: "Automatically score and prioritize leads based on their likelihood to convert, allowing your sales team to focus on the hottest prospects.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Dynamic Pricing Optimization",
      description: "Leverage machine learning to adjust pricing in real-time based on demand, inventory, and competitor pricing.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Intelligent Content Strategy",
      description: "Generate data-driven content ideas and SEO strategies that are proven to rank and attract your target audience.",
    },
    {
      icon: <Bot className="w-8 h-8 text-white" />,
      title: "AI-Powered Customer Support",
      description: "Deploy intelligent chatbots that can resolve customer queries, automate support tasks, and escalate complex issues to human agents.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "Automated Business Reporting",
      description: "Receive automated, easy-to-understand reports on your business performance, with actionable insights and recommendations.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-violet-500/30">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-40 pb-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-violet-600/20 via-violet-900/5 to-transparent"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] -z-10"></div>
        </div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <Badge className="mb-6 bg-violet-500/10 text-violet-400 border-violet-500/30 px-4 py-1.5 backdrop-blur-sm">
            AI-Driven Growth
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Your <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-300">AI Business</span>
            <br />
            Developer
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Automate growth, uncover opportunities, and make smarter decisions with an AI that works for your business 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact?service=ai-developer-demo">
              <Button size="lg" className="bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white px-10 py-7 text-lg rounded-full transition-all hover:shadow-2xl hover:shadow-violet-500/20 hover:scale-105 group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline" className="border-violet-500/30 text-violet-300 hover:bg-violet-500/10 px-10 py-7 text-lg rounded-full transition-all">
                <Sparkles className="mr-2 w-5 h-5 fill-current" /> See AI in Action
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
              Intelligence That <span className="text-violet-400">Drives Results</span>
            </h2>
            <p className="text-lg text-slate-400">
              Our AI Business Developer is more than a tool—it's a strategic partner for your growth.
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
                <Card className="h-full bg-slate-900/40 border-slate-800 hover:border-violet-500/50 hover:bg-slate-900/60 transition-all duration-300 group backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6 p-4 rounded-2xl bg-linear-to-br from-violet-500/20 to-fuchsia-500/20 text-white w-fit shadow-lg shadow-violet-500/10 group-hover:scale-110 transition-transform duration-300 border border-violet-500/20">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{feature.title}</h3>
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

      {/* Interactive Demo Section */}
      <section id="demo" className="py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Chat with Your Data</h2>
              <p className="text-slate-400 mb-8">
                Imagine asking your business questions like "What's our most profitable channel this month?" or "Draft a marketing email for our new product" and getting instant, accurate answers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="bg-slate-800 rounded-2xl rounded-tl-none p-4 text-sm text-slate-300">
                    How can we improve our customer retention rate?
                  </div>
                </div>
                <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center shrink-0 shadow-lg shadow-violet-500/30">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-violet-900/30 border border-violet-500/30 rounded-2xl rounded-tr-none p-4 text-sm text-violet-100">
                    Based on recent data, customers who engage with our loyalty program have a 40% higher retention rate. I recommend launching a targeted email campaign to inactive users highlighting new loyalty rewards.
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden"
            >
               <div className="absolute inset-0 bg-linear-to-br from-violet-500/10 to-transparent"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                      <Brain className="w-12 h-12 text-violet-400" />
                    </div>
                    <p className="text-slate-500 font-mono">AI Processing...</p>
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
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Jessica Wu", role: "CEO, StartUp Inc", text: "The AI Business Developer identified a market gap we completely missed. It's like having a McKinsey consultant on staff 24/7." },
              { name: "Mark Johnson", role: "Sales Director, TechGlobal", text: "Lead scoring accuracy improved by 60%. Our sales team is closing deals faster than ever." },
              { name: "Emily Davis", role: "Marketing Lead, Creative Agency", text: "The content strategy suggestions are spot on. Our organic traffic has doubled in 3 months." },
            ].map((client, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-slate-900/50 border-slate-800 hover:border-violet-500/30 transition-all h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-violet-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic flex-grow">"{client.text}"</p>
                    <div>
                      <h4 className="font-bold text-white">{client.name}</h4>
                      <p className="text-sm text-violet-400">{client.role}</p>
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
        <div className="absolute inset-0 bg-linear-to-t from-violet-900/20 to-slate-950 -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Put Your Growth on Autopilot?
          </h2>
          <p className="text-lg text-slate-300 mb-10">
            See how our AI can become your most valuable team member. Schedule a live demo today.
          </p>
          <Link href="/contact?service=ai-developer-demo">
            <Button size="lg" className="bg-white text-slate-950 hover:bg-violet-50 px-12 py-8 text-xl rounded-full font-bold shadow-2xl shadow-violet-500/20 transition-all hover:scale-105">
              Request a Demo
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
