'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    number: 1,
    title: "Personal Information",
    description: "Let's start with your basic details"
  },
  {
    number: 2,
    title: "Experience Level",
    description: "Where are you in your learning journey?"
  },
  {
    number: 3,
    title: "Learning Goals",
    description: "What do you want to achieve?"
  },
  {
    number: 4,
    title: "Review & Confirm",
    description: "Let's confirm your enrollment"
  }
];

export default function StudentOnboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    experienceLevel: 'beginner',
    goals: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = async () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step - complete onboarding
      handleSubmit(new Event('submit') as any);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent | Event) => {
    if (e instanceof Event && 'preventDefault' in e) {
      e.preventDefault();
    }
    setLoading(true);
    
    // Simulate enrollment processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Store enrollment data with completion flag
    const onboardingData = {
      ...formData,
      completed: true,
      completedAt: new Date().toISOString()
    };
    localStorage.setItem('studentOnboarding', JSON.stringify(onboardingData));
    localStorage.setItem('onboarding_complete', 'true');
    
    setLoading(false);
    
    // Redirect to domain selection
    router.push('/student/domain-selection');
  };

  const isStepValid = (): boolean => {
    switch (currentStep) {
      case 1:
        return formData.firstName.trim() !== '' && formData.email.trim() !== '';
      case 2:
        return formData.experienceLevel !== '';
      case 3:
        return formData.goals.trim() !== '';
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] to-[#1a1f3a] text-slate-200 font-sans py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to Largify Lab</h1>
          <p className="text-slate-400 text-lg">Complete your enrollment to get started</p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-between gap-2">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                className="flex-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    currentStep >= step.number
                      ? "bg-[#a3e635]"
                      : "bg-slate-700"
                  )}
                />
                <p className="text-xs text-slate-500 mt-2 text-center">Step {step.number}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl">
          <CardHeader className="pb-4">
            <motion.div
              key={`step-${currentStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle className="text-2xl text-white">
                {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription className="text-slate-400 mt-1">
                {steps[currentStep - 1].description}
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500"
                      />
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Experience Level */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <Label className="text-slate-300 mb-4 block">Select Your Experience Level</Label>
                      <div className="space-y-3">
                        {[
                          { value: 'beginner', label: 'Beginner', description: 'Just starting out or new to the field' },
                          { value: 'intermediate', label: 'Intermediate', description: 'Some experience, ready for challenges' },
                          { value: 'advanced', label: 'Advanced', description: 'Experienced, seeking specialized skills' }
                        ].map(option => (
                          <motion.button
                            key={option.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, experienceLevel: option.value }))}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={cn(
                              "w-full text-left p-4 rounded-lg border-2 transition-all",
                              formData.experienceLevel === option.value
                                ? "bg-[#a3e635]/10 border-[#a3e635]"
                                : "bg-slate-800/30 border-slate-700 hover:border-slate-600"
                            )}
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-semibold text-white">{option.label}</p>
                                <p className="text-sm text-slate-400">{option.description}</p>
                              </div>
                              {formData.experienceLevel === option.value && (
                                <Check className="w-5 h-5 text-[#a3e635]" />
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Learning Goals */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <Label htmlFor="goals" className="text-slate-300">What are your learning goals?</Label>
                      <Textarea
                        id="goals"
                        name="goals"
                        placeholder="Tell us what you want to learn and achieve. E.g., 'I want to become a cybersecurity expert' or 'I'm interested in building AI applications'"
                        value={formData.goals}
                        onChange={handleInputChange}
                        className="mt-2 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-500 min-h-[150px]"
                      />
                      <p className="text-xs text-slate-500 mt-2">Minimum 10 characters required</p>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Review & Confirm */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="bg-slate-800/30 rounded-lg p-6 space-y-4 border border-slate-700/50">
                      <div>
                        <p className="text-sm text-slate-400">Full Name</p>
                        <p className="text-lg font-semibold text-white">
                          {formData.firstName} {formData.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="text-lg font-semibold text-white">{formData.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Experience Level</p>
                        <p className="text-lg font-semibold text-white capitalize">
                          {formData.experienceLevel}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Learning Goals</p>
                        <p className="text-base text-white line-clamp-3">{formData.goals}</p>
                      </div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                      <p className="text-sm text-blue-200">
                        ✓ By confirming, you agree to the Largify Lab terms of service and community guidelines.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6 border-t border-slate-700/50">
                <Button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800/50"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < steps.length ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className="flex-1 bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={loading}
                    className="flex-1 bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processing...' : 'Complete Enrollment'}
                    <Check className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          Step {currentStep} of {steps.length}
        </motion.p>
      </div>
    </div>
  );
}
