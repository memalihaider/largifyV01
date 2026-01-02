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
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden pt-24">
      {/* Optimized Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-linear-to-b from-lab-primary/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-linear-to-t from-lab-primary/5 via-transparent to-transparent"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lab-primary/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-corporate-primary/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 px-4 py-2 border-lab-primary/20 bg-lab-primary/10 text-lab-primary">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lab-primary/40 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lab-primary"></span>
                  </span>
                  Choose Your Journey
                </span>
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-slate-400">
                Get Started Today
              </h1>
              
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
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
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              >
                {/* Learning Journey Card */}
                <motion.div variants={itemVariants}>
                  <button
                    onClick={() => setSelectedPath('learning')}
                    className="w-full h-full"
                  >
                    <Card className="bg-slate-900/50 border-slate-800 hover:border-lab-primary/50 transition-all duration-300 overflow-hidden group hover:shadow-2xl hover:shadow-lab-primary/20 cursor-pointer relative">
                      <div className="absolute inset-0 bg-linear-to-br from-lab-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-lab-primary/20 text-lab-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="w-8 h-8" />
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-4 group-hover:text-lab-primary transition-colors">
                          Start Learning Journey
                        </h2>
                        
                        <p className="text-slate-400 mb-8 leading-relaxed">
                          Join Largify Innovation Lab and accelerate your tech skills. Get hands-on training, 
                          industry certifications, and career guidance from experts.
                        </p>

                        <div className="space-y-3 mb-8">
                          <div className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-lab-primary mt-0.5 flex-shrink-0" />
                            <p className="text-slate-300">Industry-leading training programs</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-lab-primary mt-0.5 flex-shrink-0" />
                            <p className="text-slate-300">Expert mentorship & guidance</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-lab-primary mt-0.5 flex-shrink-0" />
                            <p className="text-slate-300">Career advancement opportunities</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-lab-primary mt-0.5 flex-shrink-0" />
                            <p className="text-slate-300">24/7 portal access</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-lab-primary font-bold group-hover:gap-3 transition-all">
                          Get Started <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </button>
                </motion.div>

                {/* Services Card */}
                <motion.div variants={itemVariants}>
                  <button
                    onClick={() => setSelectedPath('services')}
                    className="w-full h-full"
                  >
                    <Card className="bg-slate-900/50 border-slate-800 hover:border-corporate-primary/50 transition-all duration-300 overflow-hidden group hover:shadow-2xl hover:shadow-corporate-primary/20 cursor-pointer relative">
                      <div className="absolute inset-0 bg-linear-to-br from-corporate-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardContent className="p-8 relative z-10">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-corporate-primary/20 text-corporate-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Briefcase className="w-8 h-8" />
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-4 group-hover:text-corporate-primary transition-colors">
                          Get Largify Solutions Services
                        </h2>
                        
                        <p className="text-slate-400 mb-8 leading-relaxed">
                          Transform your business with our enterprise-grade solutions. From custom development to 
                          security implementations, we deliver results.
                        </p>

                        <div className="space-y-3 mb-8">
                          <div className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-corporate-primary mt-0.5 flex-shrink-0" />
                            <p className="text-slate-300">Enterprise solutions</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-corporate-primary mt-0.5 flex-shrink-0" />
                            <p className="text-slate-300">Custom development</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-corporate-primary mt-0.5 flex-shrink-0" />
                            <p className="text-slate-300">Project valuation & proposal</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-corporate-primary mt-0.5 flex-shrink-0" />
                            <p className="text-slate-300">Dedicated account management</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-corporate-primary font-bold group-hover:gap-3 transition-all">
                          Get Started <ArrowRight className="w-4 h-4" />
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
                <div className="flex items-center gap-4 mb-8">
                  <button
                    onClick={() => setSelectedPath(null)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                  <h2 className="text-3xl font-bold">Redirect to Learning Portal</h2>
                </div>

                <Card className="bg-slate-900/50 border-slate-800 p-8">
                  <p className="text-slate-400 mb-6">
                    You will be redirected to the Largify Innovation Lab where you can create your account, 
                    explore courses, and start your learning journey.
                  </p>
                  
                  <div className="flex gap-4">
                    <Link href="/student" className="flex-1">
                      <Button className="w-full bg-lab-primary hover:bg-lab-primary/90 text-white h-12 rounded-xl">
                        Go to Innovation Lab Portal
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
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Select Your Industry</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {industries.map(industry => (
                  <button
                    key={industry.id}
                    onClick={() => setFormData(prev => ({...prev, selectedIndustry: industry.id}))}
                    className={`p-4 rounded-xl border transition-all ${
                      formData.selectedIndustry === industry.id
                        ? 'border-corporate-primary bg-corporate-primary/10'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <div className="text-2xl mb-2">{industry.icon}</div>
                    <p className="font-bold text-left">{industry.name}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-4">Select Your Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services[formData.selectedIndustry as keyof typeof services]?.map(service => (
                  <button
                    key={service.id}
                    onClick={() => setFormData(prev => ({...prev, selectedService: service.id}))}
                    className={`p-4 rounded-xl border transition-all ${
                      formData.selectedService === service.id
                        ? 'border-lab-primary bg-lab-primary/10'
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <p className="font-bold text-left">{service.name}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-3">Project Description</label>
              <textarea
                value={formData.projectDescription}
                onChange={(e) => setFormData(prev => ({...prev, projectDescription: e.target.value}))}
                placeholder="Describe your project, requirements, and goals..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-lab-primary outline-none transition-colors text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-3">Project Link (Optional)</label>
              <input
                type="url"
                value={formData.projectLink}
                onChange={(e) => setFormData(prev => ({...prev, projectLink: e.target.value}))}
                placeholder="e.g., https://yourproject.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-lab-primary outline-none transition-colors text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-3">Google Drive Links</label>
              {formData.googleDriveLinks.map((link, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => handleLinkChange('google', i, e.target.value)}
                    placeholder="https://drive.google.com/..."
                    className="flex-1 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-lab-primary outline-none transition-colors text-white"
                  />
                  <button
                    onClick={() => handleRemoveLink('google', i)}
                    className="px-3 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleAddLink('google')}
                className="text-lab-primary hover:text-lab-primary/80 text-sm font-bold"
              >
                + Add Google Drive Link
              </button>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3">GitHub Links</label>
              {formData.githubLinks.map((link, i) => (
                <div key={i} className="flex gap-2 mb-2">
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => handleLinkChange('github', i, e.target.value)}
                    placeholder="https://github.com/..."
                    className="flex-1 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-lab-primary outline-none transition-colors text-white"
                  />
                  <button
                    onClick={() => handleRemoveLink('github', i)}
                    className="px-3 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleAddLink('github')}
                className="text-lab-primary hover:text-lab-primary/80 text-sm font-bold"
              >
                + Add GitHub Link
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-3">Email Address</label>
              <input
                type="email"
                value={formData.contactEmail}
                onChange={(e) => setFormData(prev => ({...prev, contactEmail: e.target.value}))}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-lab-primary outline-none transition-colors text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-3">Phone Number (Optional)</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({...prev, phone: e.target.value}))}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 focus:border-lab-primary outline-none transition-colors text-white"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-3">Upload Case Studies/Docs</label>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-6 hover:border-lab-primary transition-colors">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-center">
                    <p className="font-bold mb-2">Choose a file or drag and drop</p>
                    <p className="text-sm text-slate-400">Max 5MB • PDF, DOC, DOCX</p>
                  </div>
                </label>
                {formData.caseStudies && (
                  <p className="text-sm text-lab-primary mt-2">✓ {formData.caseStudies.name}</p>
                )}
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.scheduleCall}
                onChange={(e) => setFormData(prev => ({...prev, scheduleCall: e.target.checked}))}
                className="w-4 h-4 rounded bg-slate-800 border-slate-700 accent-lab-primary"
              />
              <span className="font-bold">Schedule a meeting with our team</span>
            </label>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <Card className="bg-lab-primary/10 border border-lab-primary/30 p-6">
              <h3 className="text-lg font-bold mb-4">Review Your Request</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-slate-400">Industry</p>
                  <p className="font-bold">{industries.find(i => i.id === formData.selectedIndustry)?.name}</p>
                </div>
                <div>
                  <p className="text-slate-400">Service</p>
                  <p className="font-bold">
                    {services[formData.selectedIndustry as keyof typeof services]?.find(s => s.id === formData.selectedService)?.name}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="font-bold">{formData.contactEmail}</p>
                </div>
                <div>
                  <p className="text-slate-400">Schedule Meeting</p>
                  <p className="font-bold">{formData.scheduleCall ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Card className="bg-slate-900/50 border-slate-800 overflow-hidden max-w-2xl mx-auto">
      <CardContent className="p-8">
        {/* Step Indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4, 5].map(s => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all ${
                  s <= step
                    ? 'bg-lab-primary text-slate-950'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-lab-primary transition-all duration-300"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {step === 1 && "Step 1: Select Industry"}
              {step === 2 && "Step 2: Select Service"}
              {step === 3 && "Step 3: Project Details"}
              {step === 4 && "Step 4: Your Information"}
              {step === 5 && "Step 5: Review & Submit"}
            </h2>

            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-6 border-t border-slate-800">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-600 transition-colors font-bold"
              >
                Previous
              </button>
            )}
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-xl bg-lab-primary hover:bg-lab-primary/90 text-slate-950 font-bold transition-all"
            >
              {step === 5 ? 'Submit Request' : 'Next'}
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
