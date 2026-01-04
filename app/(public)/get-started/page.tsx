'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Briefcase, ChevronRight } from 'lucide-react';

export default function GetStartedPage() {
  const [selectedPath, setSelectedPath] = useState<'learning' | 'services' | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden pt-16">
      {/* Optimized Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        {/* Enhanced Bluish Presence */}
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-linear-to-b from-blue-600/20 via-lab-primary/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-linear-to-t from-blue-900/20 via-corporate-primary/10 to-transparent"></div>
        
        {/* Central Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-lab-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-corporate-primary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <Badge className="mb-4 px-4 py-2 border-blue-500/30 bg-blue-500/10 text-blue-400 backdrop-blur-md shadow-[0_0_20px_rgba(30,144,255,0.2)]">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400/40 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Choose Your Journey
                </span>
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 tracking-tight heading-gradient drop-shadow-[0_0_30px_rgba(30,144,255,0.3)]">
                Get Started Today
              </h1>
              
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
                Whether you want to accelerate your learning or scale your business with our enterprise solutions, 
                we have the perfect path for you.
              </p>
            </motion.div>

            {/* Path Selection */}
            {!selectedPath ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
              >
                {/* Learning Journey Card */}
                <motion.div variants={itemVariants}>
                  <button
                    onClick={() => setSelectedPath('learning')}
                    className="w-full h-full text-left"
                  >
                    <Card className="bg-slate-900/40 border-slate-800/50 hover:border-lab-primary/50 transition-all duration-500 overflow-hidden group hover:shadow-[0_0_50px_-12px_rgba(var(--lab-primary-rgb),0.3)] cursor-pointer relative backdrop-blur-xl h-full">
                      <div className="absolute inset-0 bg-linear-to-br from-lab-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-lab-primary/10 text-lab-primary mb-6 group-hover:scale-110 group-hover:bg-lab-primary/20 transition-all duration-500 border border-lab-primary/20">
                          <BookOpen className="w-10 h-8" />
                        </div>
                        
                        <h2 className="text-3xl font-extrabold mb-4 group-hover:text-lab-primary transition-colors tracking-tight text-white">
                          Start Learning with Innovation Lab
                        </h2>
                        
                        <p className="text-white/80 mb-6 leading-relaxed text-base">
                          Join Largify Innovation Lab and accelerate your tech skills. Get hands-on training, 
                          industry certifications, and career guidance from experts.
                        </p>

                        <div className="space-y-3 mb-8">
                          {[
                            "Industry-leading training programs",
                            "Expert mentorship & guidance",
                            "Career advancement opportunities",
                            "24/7 portal access"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-lab-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <ChevronRight className="w-3 h-3 text-lab-primary" />
                              </div>
                              <p className="text-white/90 font-medium text-sm">{item}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-lab-primary font-extrabold text-base group-hover:gap-4 transition-all">
                          Get Started <ArrowRight className="w-5 h-5" />
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                </motion.div>

                {/* Services Card */}
                <motion.div variants={itemVariants}>
                  <button
                    onClick={() => setSelectedPath('services')}
                    className="w-full h-full text-left"
                  >
                    <Card className="bg-slate-900/40 border-slate-800/50 hover:border-corporate-primary/50 transition-all duration-500 overflow-hidden group hover:shadow-[0_0_50px_-12px_rgba(var(--corporate-primary-rgb),0.3)] cursor-pointer relative backdrop-blur-xl h-full">
                      <div className="absolute inset-0 bg-linear-to-br from-corporate-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-700 mb-6 group-hover:scale-110 group-hover:bg-cyan-100 transition-all duration-500 border border-corporate-primary/20">
                          <Briefcase className="w-8 h-8" />
                        </div>
                        
                        <h2 className="text-3xl font-extrabold mb-4 group-hover:text-blue-100 transition-colors tracking-tight text-white">
                          Get Largify Services for Your Business
                        </h2>
                        
                        <p className="text-white/80 mb-6 leading-relaxed text-base">
                          Transform your business with our enterprise-grade solutions. From custom development to 
                          security implementations, we deliver results.
                        </p>

                        <div className="space-y-3 mb-8">
                          {[
                            "Enterprise solutions",
                            "Custom development",
                            "Project valuation & proposal",
                            "Dedicated account management"
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-corporate-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <ChevronRight className="w-3 h-3 text-corporate-primary" />
                              </div>
                              <p className="text-white/90 font-medium text-sm">{item}</p>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-corporate-primary font-extrabold text-base group-hover:gap-4 transition-all">
                          Get Started <ArrowRight className="w-5 h-5" />
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                </motion.div>
              </motion.div>
            ) : selectedPath === 'learning' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
              >
                <div className="flex items-center gap-4 mb-6">
                  <button
                    onClick={() => setSelectedPath(null)}
                    className="text-white/60 hover:text-slate-200 transition-colors"
                  >
                    ← Back
                  </button>
                  <h2 className="text-2xl font-bold heading-gradient">Redirect to Innovation Lab Login</h2>
                </div>

                <Card className="bg-slate-900/50 border-slate-800 p-6">
                  <p className="text-white/80 mb-6">
                    You will be redirected to the Largify Innovation Lab where you can create your account, 
                    explore courses, and start your learning journey.
                  </p>
                  
                  <div className="flex gap-4">
                    <Link href="/auth/login" className="flex-1">
                      <Button className="w-full bg-lab-primary hover:bg-lab-primary/90 text-white h-12 rounded-xl">
                        Go to Innovation Lab Login
                      </Button>
                    </Link>
                    <button
                      onClick={() => setSelectedPath(null)}
                      className="px-6 h-12 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <button
                    onClick={() => setSelectedPath(null)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                  <h2 className="text-3xl font-bold">Request Largify Solutions Service</h2>
                </div>

                {/* Import the multi-step form component */}
                <ServiceRequestForm />
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function ServiceRequestForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedIndustry: '',
    selectedService: '',
    projectDescription: '',
    projectLink: '',
    googleDriveLinks: [] as string[],
    githubLinks: [] as string[],
    caseStudies: null as File | null,
    scheduleCall: false,
    contactEmail: '',
    phone: '',
  });

  const industries = [
    { id: 'tech', name: 'Technology & Software', icon: '💻' },
    { id: 'finance', name: 'Finance & Banking', icon: '🏦' },
    { id: 'healthcare', name: 'Healthcare & Pharma', icon: '🏥' },
    { id: 'ecommerce', name: 'E-commerce & Retail', icon: '🛍️' },
    { id: 'education', name: 'Education & EdTech', icon: '📚' },
    { id: 'manufacturing', name: 'Manufacturing & Logistics', icon: '🏭' },
    { id: 'real-estate', name: 'Real Estate & Construction', icon: '🏢' },
    { id: 'media', name: 'Media & Entertainment', icon: '🎬' },
  ];

  const services = {
    tech: [
      { id: 'web-dev', name: 'Web Development' },
      { id: 'mobile-dev', name: 'Mobile App Development' },
      { id: 'ai-ml', name: 'AI & Machine Learning' },
      { id: 'cloud', name: 'Cloud Infrastructure' },
      { id: 'devops', name: 'DevOps & Deployment' },
    ],
    finance: [
      { id: 'fintech', name: 'FinTech Solutions' },
      { id: 'blockchain', name: 'Blockchain & Crypto' },
      { id: 'payment', name: 'Payment Systems' },
      { id: 'crm', name: 'CRM Systems' },
    ],
    healthcare: [
      { id: 'ehr', name: 'Electronic Health Records' },
      { id: 'telemedicine', name: 'Telemedicine Platform' },
      { id: 'health-analytics', name: 'Health Analytics' },
    ],
    ecommerce: [
      { id: 'ecom-platform', name: 'E-commerce Platform' },
      { id: 'inventory', name: 'Inventory Management' },
      { id: 'payment-gateway', name: 'Payment Gateway' },
    ],
    education: [
      { id: 'lms', name: 'Learning Management System' },
      { id: 'online-courses', name: 'Online Course Platform' },
      { id: 'student-portal', name: 'Student Portal' },
    ],
    manufacturing: [
      { id: 'erp', name: 'ERP System' },
      { id: 'iot', name: 'IoT Solutions' },
      { id: 'supply-chain', name: 'Supply Chain Management' },
    ],
    'real-estate': [
      { id: 'property-mgt', name: 'Property Management' },
      { id: 'crm-real-estate', name: 'Real Estate CRM' },
    ],
    media: [
      { id: 'cms', name: 'Content Management System' },
      { id: 'streaming', name: 'Streaming Platform' },
      { id: 'analytics', name: 'Content Analytics' },
    ],
  };

  const handleAddLink = (type: 'google' | 'github') => {
    const key = type === 'google' ? 'googleDriveLinks' : 'githubLinks';
    setFormData(prev => ({
      ...prev,
      [key]: [...(prev[key] || []), '']
    }));
  };

  const handleRemoveLink = (type: 'google' | 'github', index: number) => {
    const key = type === 'google' ? 'googleDriveLinks' : 'githubLinks';
    setFormData(prev => ({
      ...prev,
      [key]: prev[key]!.filter((_, i) => i !== index)
    }));
  };

  const handleLinkChange = (type: 'google' | 'github', index: number, value: string) => {
    const key = type === 'google' ? 'googleDriveLinks' : 'githubLinks';
    const newLinks = [...(formData[key] || [])];
    newLinks[index] = value;
    setFormData(prev => ({
      ...prev,
      [key]: newLinks
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        alert('Only PDF and DOC/DOCX files are allowed');
        return;
      }
      setFormData(prev => ({...prev, caseStudies: file}));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.selectedIndustry) {
        alert('Please select an industry');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.selectedService) {
        alert('Please select a service');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!formData.projectDescription) {
        alert('Please describe your project');
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!formData.contactEmail) {
        alert('Please provide your email');
        return;
      }
      setStep(5);
    } else if (step === 5) {
      // Submit form
      console.log('Form submitted:', formData);
      alert('Thank you! Your request has been submitted. Our team will contact you shortly.');
      setStep(1);
      setFormData({
        selectedIndustry: '',
        selectedService: '',
        projectDescription: '',
        projectLink: '',
        googleDriveLinks: [],
        githubLinks: [],
        caseStudies: null,
        scheduleCall: false,
        contactEmail: '',
        phone: '',
      });
    }
  };

  const renderStepContent = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white/80">Select Your Industry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {industries.map(industry => (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() => setFormData(prev => ({...prev, selectedIndustry: industry.id}))}
                    className={`p-4 rounded-xl border-2 transition-all duration-500 group relative overflow-hidden ${
                      formData.selectedIndustry === industry.id
                        ? 'border-blue-500 bg-blue-600/20 shadow-[0_0_30px_-5px_rgba(30,144,255,0.4)] scale-[1.02]'
                        : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    {/* Shine Effect */}
                    {formData.selectedIndustry === industry.id && (
                      <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 via-white/10 to-transparent animate-pulse" />
                    )}
                    
                    <div className="flex items-center gap-3 relative z-10">
                      <div className={`text-2xl p-2 rounded-lg transition-all duration-300 ${
                        formData.selectedIndustry === industry.id 
                          ? 'bg-blue-500/30 scale-110 shadow-[0_0_15px_rgba(30,144,255,0.3)]' 
                          : 'bg-slate-800 group-hover:bg-slate-700'
                      }`}>
                        {industry.icon}
                      </div>
                      <p className={`font-extrabold text-base transition-colors ${
                        formData.selectedIndustry === industry.id ? 'text-white' : 'text-white/60 group-hover:text-white'
                      }`}>{industry.name}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white/80">Select Your Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services[formData.selectedIndustry as keyof typeof services]?.map(service => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setFormData(prev => ({...prev, selectedService: service.id}))}
                    className={`p-4 rounded-xl border-2 transition-all duration-500 group relative overflow-hidden ${
                      formData.selectedService === service.id
                        ? 'border-lab-primary bg-lab-primary/20 shadow-[0_0_30px_-5px_rgba(30,144,255,0.4)] scale-[1.02]'
                        : 'border-slate-800 bg-slate-900/50 hover:border-slate-700 hover:bg-slate-900/80'
                    }`}
                  >
                    {/* Shine Effect */}
                    {formData.selectedService === service.id && (
                      <div className="absolute inset-0 bg-linear-to-tr from-lab-primary/20 via-white/10 to-transparent animate-pulse" />
                    )}

                    <div className="flex items-center justify-between relative z-10">
                      <p className={`font-extrabold text-base transition-colors ${
                        formData.selectedService === service.id ? 'text-white' : 'text-white/60 group-hover:text-white'
                      }`}>{service.name}</p>
                      {formData.selectedService === service.id && (
                        <div className="w-6 h-6 rounded-full bg-lab-primary flex items-center justify-center shadow-[0_0_15px_rgba(30,144,255,0.5)] animate-in zoom-in-95">
                          <ChevronRight className="w-4 h-4 text-slate-950" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="group">
              <label className="block text-xs font-extrabold mb-2 text-white/60 group-focus-within:text-lab-primary transition-colors uppercase tracking-wider">Project Description</label>
              <textarea
                value={formData.projectDescription}
                onChange={(e) => setFormData(prev => ({...prev, projectDescription: e.target.value}))}
                placeholder="Describe your project, requirements, and goals..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border-2 border-slate-800 focus:border-lab-primary outline-none transition-all text-white placeholder:text-slate-600 resize-none text-sm"
              />
            </div>

            <div className="group">
              <label className="block text-xs font-extrabold mb-2 text-white/60 group-focus-within:text-lab-primary transition-colors uppercase tracking-wider">Project Link (Optional)</label>
              <input
                type="url"
                value={formData.projectLink}
                onChange={(e) => setFormData(prev => ({...prev, projectLink: e.target.value}))}
                placeholder="e.g., https://yourproject.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border-2 border-slate-800 focus:border-lab-primary outline-none transition-all text-white placeholder:text-slate-600 text-sm"
              />
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-extrabold text-white/60 uppercase tracking-wider">Google Drive Links</label>
              {formData.googleDriveLinks.map((link, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className="flex gap-2"
                >
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => handleLinkChange('google', i, e.target.value)}
                    placeholder="https://drive.google.com/..."
                    className="flex-1 px-4 py-2 rounded-lg bg-slate-900/50 border-2 border-slate-800 focus:border-lab-primary outline-none transition-all text-white placeholder:text-slate-600 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveLink('google', i)}
                    className="px-3 rounded-lg bg-red-500/10 text-red-500 border-2 border-red-500/20 hover:bg-red-500/20 transition-all"
                  >
                    ✕
                  </button>
                </motion.div>
              ))}
              <button
                type="button"
                onClick={() => handleAddLink('google')}
                className="flex items-center gap-2 text-lab-primary hover:text-lab-primary/80 font-extrabold text-xs transition-all hover:gap-3"
              >
                <span className="text-lg">+</span> Add Google Drive Link
              </button>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-extrabold text-white/60 uppercase tracking-wider">GitHub Links</label>
              {formData.githubLinks.map((link, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className="flex gap-2"
                >
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => handleLinkChange('github', i, e.target.value)}
                    placeholder="https://github.com/..."
                    className="flex-1 px-4 py-2 rounded-lg bg-slate-900/50 border-2 border-slate-800 focus:border-lab-primary outline-none transition-all text-white placeholder:text-slate-600 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveLink('github', i)}
                    className="px-3 rounded-lg bg-red-500/10 text-red-500 border-2 border-red-500/20 hover:bg-red-500/20 transition-all"
                  >
                    ✕
                  </button>
                </motion.div>
              ))}
              <button
                type="button"
                onClick={() => handleAddLink('github')}
                className="flex items-center gap-2 text-lab-primary hover:text-lab-primary/80 font-extrabold text-xs transition-all hover:gap-3"
              >
                <span className="text-lg">+</span> Add GitHub Link
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="group">
              <label className="block text-xs font-extrabold mb-2 text-white/60 group-focus-within:text-lab-primary transition-colors uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => setFormData(prev => ({...prev, contactEmail: e.target.value}))}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border-2 border-slate-800 focus:border-lab-primary outline-none transition-all text-white placeholder:text-slate-600 text-sm"
              />
            </div>

            <div className="group">
              <label className="block text-xs font-extrabold mb-2 text-white/60 group-focus-within:text-lab-primary transition-colors uppercase tracking-wider">Phone Number (Optional)</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border-2 border-slate-800 focus:border-lab-primary outline-none transition-all text-white placeholder:text-slate-600 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold mb-3 text-white/60 uppercase tracking-wider">Upload Case Studies/Docs</label>
              <div className="border-2 border-dashed border-slate-800 rounded-xl p-6 hover:border-lab-primary/50 hover:bg-lab-primary/5 transition-all group cursor-pointer relative">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  id="file-upload"
                />
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:bg-lab-primary/20 transition-all">
                    <Briefcase className="w-6 h-6 text-white/40 group-hover:text-lab-primary" />
                  </div>
                  <p className="font-extrabold text-base mb-1">Choose a file or drag and drop</p>
                  <p className="text-xs text-white/40">Max 5MB • PDF, DOC, DOCX</p>
                </div>
                {formData.caseStudies && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-2 rounded-lg bg-lab-primary/10 border border-lab-primary/20 flex items-center justify-center gap-2 text-lab-primary font-bold text-sm"
                  >
                    <span>✓</span> {formData.caseStudies.name}
                  </motion.div>
                )}
              </div>
            </div>

            <label className={`flex items-center gap-3 cursor-pointer group p-4 rounded-xl border-2 transition-all duration-300 ${
              formData.scheduleCall 
                ? 'border-blue-500 bg-blue-600/10 shadow-[0_0_20px_rgba(30,144,255,0.2)]' 
                : 'border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
            }`}>
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={formData.scheduleCall}
                  onChange={(e) => setFormData(prev => ({...prev, scheduleCall: e.target.checked}))}
                  className="w-5 h-5 rounded-md bg-slate-900 border-2 border-slate-700 accent-blue-500 cursor-pointer"
                />
              </div>
              <span className={`font-extrabold transition-colors text-sm ${
                formData.scheduleCall ? 'text-white' : 'text-white/60 group-hover:text-white'
              }`}>Schedule a meeting with our team</span>
            </label>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="grid gap-3">
              {[
                { label: 'Industry', value: industries.find(i => i.id === formData.selectedIndustry)?.name },
                { label: 'Service', value: services[formData.selectedIndustry as keyof typeof services]?.find(s => s.id === formData.selectedService)?.name },
                { label: 'Email', value: formData.contactEmail },
                { label: 'Meeting', value: formData.scheduleCall ? 'Yes, please schedule' : 'No, not at this time' }
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/50 border-2 border-slate-800 flex justify-between items-center">
                  <span className="text-white/40 font-extrabold uppercase text-[10px] tracking-widest">{item.label}</span>
                  <span className="font-extrabold text-base text-white">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-lab-primary/5 border-2 border-lab-primary/20">
              <p className="text-white/60 text-xs leading-relaxed">
                By submitting this request, you agree to our terms of service. Our team will review your project details 
                and get back to you within 24-48 hours with a valuation and proposal.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="bg-slate-900/40 border-slate-800/50 overflow-hidden max-w-2xl mx-auto backdrop-blur-xl shadow-2xl">
      <CardContent className="p-6">
        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
            {[1, 2, 3, 4, 5].map(s => (
              <div
                key={s}
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold transition-all duration-500 z-10 border-2 ${
                  s <= step
                    ? 'bg-blue-500 border-blue-400 text-white scale-110 shadow-[0_0_25px_rgba(30,144,255,0.5)]'
                    : 'bg-slate-900 border-slate-800 text-slate-500'
                }`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-700 ease-out shadow-[0_0_15px_rgba(30,144,255,0.5)]"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-extrabold mb-6 tracking-tight heading-gradient">
              {step === 1 && "Step 1: Select Industry"}
              {step === 2 && "Step 2: Select Service"}
              {step === 3 && "Step 3: Project Details"}
              {step === 4 && "Step 4: Your Information"}
              {step === 5 && "Step 5: Review & Submit"}
            </h2>

            {renderStepContent()}
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-6 border-t border-slate-800/50">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 transition-all font-extrabold text-base"
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className="flex-[2] px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base transition-all shadow-[0_0_20px_rgba(30,144,255,0.3)] hover:shadow-[0_0_30px_rgba(30,144,255,0.6)] hover:scale-[1.02] active:scale-[0.98]"
            >
              {step === 5 ? 'Submit Request' : 'Next Step'}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
