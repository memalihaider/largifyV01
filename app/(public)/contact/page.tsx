'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Building2,
  GraduationCap,
  Shield,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', inquiryType: '', message: '' });
      setSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'info@largify.com',
      description: 'We respond within 24 hours',
      color: 'text-corporate-primary'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+92 (0) 300 1234567',
      description: 'Mon-Fri, 9 AM - 6 PM PKT',
      color: 'text-lab-primary'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Headquarters',
      value: 'Karachi, Pakistan',
      description: 'Tech Park, Gulshan-e-Iqbal',
      color: 'text-lab-secondary'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Serving',
      value: '5+ Countries',
      description: 'South Asia & Middle East',
      color: 'text-lab-highlight'
    }
  ];

  const inquiryTypes = [
    {
      id: 'enterprise',
      icon: <Building2 className="w-6 h-6" />,
      title: 'Enterprise Services',
      description: 'ERO System, Software Development, Digital Transformation',
      color: 'bg-corporate-primary/10 text-corporate-primary border-corporate-primary/20'
    },
    {
      id: 'security',
      icon: <Shield className="w-6 h-6" />,
      title: 'Security Services',
      description: 'Cybersecurity Audits, SOC, Compliance',
      color: 'bg-corporate-secondary/10 text-corporate-secondary border-corporate-secondary/20'
    },
    {
      id: 'institute',
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Institute Partnership',
      description: 'Innovation Lab, Training Programs, Certifications',
      color: 'bg-lab-primary/10 text-lab-primary border-lab-primary/20'
    },
    {
      id: 'consulting',
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Consulting',
      description: 'Innovation Strategy, Technology Roadmap',
      color: 'bg-lab-accent/10 text-lab-accent border-lab-accent/20'
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
          className="py-16 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                Contact Us
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight heading-gradient">
                Let's Build Something Great
              </h1>
              <p className="text-xl text-white/80">
                Whether you're looking for enterprise solutions, security services, or 
                capability building programs - we're here to help.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Info Cards */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-12 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full border border-white/5 shadow-lg bg-slate-900/50 backdrop-blur-sm hover:border-white/10 transition-colors">
                    <CardContent className="p-6">
                      <div className={`inline-flex p-3 rounded-xl bg-white/5 ${info.color} mb-4`}>
                        {info.icon}
                      </div>
                      <h3 className="font-semibold text-white mb-1">{info.title}</h3>
                      <p className="text-violet-400 font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-slate-400">{info.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Main Contact Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-16 px-4"
        >
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Inquiry Types */}
              <div>
                <h2 className="text-3xl font-extrabold mb-6 heading-gradient">
                  What Can We Help You With?
                </h2>
                <p className="text-white/80 mb-8">
                  Select the type of inquiry that best describes your needs, and our 
                  specialized team will reach out to assist you.
                </p>

                <div className="grid gap-4">
                  {inquiryTypes.map((type, i) => (
                    <div
                      key={type.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.inquiryType === type.id 
                          ? type.color 
                          : 'bg-slate-900/50 backdrop-blur-sm border-white/5 hover:border-white/10'
                      }`}
                      onClick={() => setFormData(prev => ({ ...prev, inquiryType: type.id }))}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${formData.inquiryType === type.id ? 'bg-white/20' : 'bg-white/5'}`}>
                          {type.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1 text-white">{type.title}</h3>
                          <p className="text-sm opacity-80 text-slate-400">{type.description}</p>
                        </div>
                        {formData.inquiryType === type.id && (
                          <CheckCircle2 className="w-6 h-6 ml-auto flex-shrink-0 text-white" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Response Time */}
                <div className="mt-8 p-6 bg-linear-to-br from-violet-600 to-indigo-700 rounded-2xl text-white shadow-xl shadow-violet-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6" />
                    <h3 className="font-semibold text-lg">Fast Response Guaranteed</h3>
                  </div>
                  <p className="text-violet-100">
                    Our team typically responds within 24 hours. For urgent enterprise 
                    inquiries, call us directly for immediate assistance.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-xl overflow-hidden">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">
                      Send Us a Message
                    </h2>

                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="w-8 h-8 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-slate-400">
                          Thank you for reaching out. Our team will get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-slate-300 mb-2 block">Name *</Label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              className="bg-white/5 border-white/10 text-white focus:border-violet-500/50 transition-colors"
                              required
                            />
                          </div>
                          <div>
                            <Label className="text-slate-300 mb-2 block">Email *</Label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@company.com"
                              className="bg-white/5 border-white/10 text-white focus:border-violet-500/50 transition-colors"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <Label className="text-slate-300 mb-2 block">Phone</Label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+92 300 1234567"
                              className="bg-white/5 border-white/10 text-white focus:border-violet-500/50 transition-colors"
                            />
                          </div>
                          <div>
                            <Label className="text-slate-300 mb-2 block">Company / Organization</Label>
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your company name"
                              className="bg-white/5 border-white/10 text-white focus:border-violet-500/50 transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <Label className="text-slate-300 mb-2 block">Message *</Label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your needs, challenges, or questions..."
                            className="bg-white/5 border-white/10 text-white focus:border-violet-500/50 transition-colors min-h-[150px]"
                            required
                          />
                        </div>

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-linear-to-r from-corporate-primary to-corporate-secondary hover:opacity-90 text-white py-6 text-lg font-bold shadow-lg shadow-violet-500/20 border-0"
                        >
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </Button>

                        <p className="text-center text-sm text-slate-500">
                          By submitting, you agree to our Privacy Policy and Terms of Service.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                FAQ
              </Badge>
              <h2 className="text-4xl font-extrabold mb-4 heading-gradient">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'What industries do you serve?',
                  a: 'We serve businesses, educational institutes, and government organizations across all industries - from finance and healthcare to manufacturing and retail.'
                },
                {
                  q: 'What is your typical project timeline?',
                  a: 'Timelines vary based on scope. Security audits typically take 2-4 weeks, while full ERO implementations range from 3-6 months depending on complexity.'
                },
                {
                  q: 'Do you offer support and maintenance?',
                  a: 'Yes, we provide ongoing support and maintenance packages for all our solutions, ensuring your systems remain optimized and secure.'
                },
                {
                  q: 'Can you work with our existing systems?',
                  a: 'Absolutely. We specialize in integration and can work with your existing infrastructure, gradually modernizing while maintaining business continuity.'
                },
                {
                  q: 'What is Largify Innovation Lab?',
                  a: 'Largify Innovation Lab is our capability-building platform offering training, certifications, and hands-on programs in business, cybersecurity, and technology for students and professionals.'
                },
                {
                  q: 'Do you provide on-site services?',
                  a: 'Yes, we provide both remote and on-site services depending on project requirements. Our team can deploy to your location for implementation and training.'
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="border border-white/5 shadow-lg bg-slate-900/50 backdrop-blur-sm hover:border-white/10 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg text-white mb-2">{faq.q}</h3>
                      <p className="text-slate-400">{faq.a}</p>
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
          className="py-16 px-4"
        >
          <div className="container mx-auto max-w-4xl text-center">
            <div className="bg-linear-to-r from-violet-600 to-indigo-700 rounded-3xl p-12 shadow-2xl shadow-violet-500/20 text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Prefer to Talk Directly?
              </h2>
              <p className="text-xl text-violet-100 mb-8">
                Schedule a call with our team to discuss your specific needs.
              </p>
              <Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50 text-lg px-8 py-6 border-0">
                Schedule a Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
