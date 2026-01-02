'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const assessmentQuestions = [
  {
    id: 1,
    question: "What's your experience level with the domain you selected?",
    type: "multiple-choice",
    options: [
      { value: 'no-exp', label: 'No experience', score: 1 },
      { value: 'beginner', label: 'Beginner (< 6 months)', score: 2 },
      { value: 'intermediate', label: 'Intermediate (6-18 months)', score: 3 },
      { value: 'experienced', label: 'Experienced (1-3 years)', score: 4 },
      { value: 'expert', label: 'Expert (3+ years)', score: 5 }
    ]
  },
  {
    id: 2,
    question: "How comfortable are you with self-directed learning?",
    type: "multiple-choice",
    options: [
      { value: 'not-comfortable', label: 'Not comfortable, need guidance', score: 1 },
      { value: 'somewhat', label: 'Somewhat comfortable', score: 2 },
      { value: 'comfortable', label: 'Comfortable with structure', score: 3 },
      { value: 'very-comfortable', label: 'Very comfortable, prefer independence', score: 4 },
      { value: 'expert-level', label: 'Self-directed learning is my strength', score: 5 }
    ]
  },
  {
    id: 3,
    question: "How many hours per week can you dedicate to learning?",
    type: "multiple-choice",
    options: [
      { value: '5-10', label: '5-10 hours', score: 1 },
      { value: '10-15', label: '10-15 hours', score: 2 },
      { value: '15-20', label: '15-20 hours', score: 3 },
      { value: '20-30', label: '20-30 hours', score: 4 },
      { value: '30+', label: '30+ hours', score: 5 }
    ]
  },
  {
    id: 4,
    question: "What's your primary learning goal?",
    type: "multiple-choice",
    options: [
      { value: 'hobby', label: 'Hobby/Personal Interest', score: 1 },
      { value: 'career-pivot', label: 'Career Change/Pivot', score: 2 },
      { value: 'skill-upgrade', label: 'Upgrade Current Skills', score: 3 },
      { value: 'startup', label: 'Build a Startup/Project', score: 4 },
      { value: 'expertise', label: 'Become an Expert/Leader', score: 5 }
    ]
  },
  {
    id: 5,
    question: "Have you completed similar structured learning programs before?",
    type: "multiple-choice",
    options: [
      { value: 'never', label: 'Never', score: 1 },
      { value: 'once', label: 'Once', score: 2 },
      { value: 'couple', label: 'A couple times', score: 3 },
      { value: 'several', label: 'Several times', score: 4 },
      { value: 'many', label: 'Many times', score: 5 }
    ]
  }
];

export default function SkillAssessment() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSelectAnswer = (score: number) => {
    setAnswers(prev => ({
      ...prev,
      [assessmentQuestions[currentQuestion].id]: score
    }));
  };

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(true);

    // Calculate overall score
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    const averageScore = Math.round((totalScore / assessmentQuestions.length) * 100) / 100;

    // Determine skill level
    let skillLevel = 'beginner';
    if (averageScore >= 4) skillLevel = 'advanced';
    else if (averageScore >= 3) skillLevel = 'intermediate';

    // Store assessment results
    const assessmentData = {
      completedAt: new Date(),
      answers,
      totalScore,
      averageScore,
      skillLevel
    };
    localStorage.setItem('skillAssessment', JSON.stringify(assessmentData));

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Redirect to case studies
    router.push('/student/case-studies');
  };

  const currentQ = assessmentQuestions[currentQuestion];
  const isAnswered = assessmentQuestions[currentQuestion].id in answers;
  const allAnswered = Object.keys(answers).length === assessmentQuestions.length;

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0b1120] to-[#1a1f3a] text-slate-200 font-sans py-12 px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg"
        >
          <div className="mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block"
            >
              <Check className="w-16 h-16 text-[#a3e635]" />
            </motion.div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Assessment Complete!</h1>
          <p className="text-slate-400 mb-8 text-lg">
            Great work! We're analyzing your responses to personalize your learning path...
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[#a3e635] text-sm font-semibold"
          >
            Redirecting to case studies...
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] to-[#1a1f3a] text-slate-200 font-sans py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-2">Skill Assessment</h1>
          <p className="text-slate-400 text-lg">
            Help us understand your skill level to personalize your learning path
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm text-slate-400">
              Question {currentQuestion + 1} of {assessmentQuestions.length}
            </p>
            <p className="text-sm text-[#a3e635] font-semibold">
              {Math.round(((currentQuestion + 1) / assessmentQuestions.length) * 100)}%
            </p>
          </div>
          <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / assessmentQuestions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-[#a3e635] rounded-full"
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-xl mb-8">
          <CardHeader className="pb-4">
            <motion.div
              key={`question-${currentQuestion}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <CardTitle className="text-2xl text-white">
                {currentQ.question}
              </CardTitle>
            </motion.div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`question-options-${currentQuestion}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {currentQ.options.map((option, idx) => {
                    const isSelected = answers[currentQ.id] === option.score;
                    return (
                      <motion.button
                        key={option.value}
                        type="button"
                        onClick={() => handleSelectAnswer(option.score)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ delay: idx * 0.05 }}
                        className={cn(
                          "w-full text-left p-4 rounded-lg border-2 transition-all flex items-center justify-between",
                          isSelected
                            ? "bg-[#a3e635]/10 border-[#a3e635]"
                            : "bg-slate-800/30 border-slate-700 hover:border-slate-600"
                        )}
                      >
                        <span className="text-white font-medium">{option.label}</span>
                        {isSelected && (
                          <Check className="w-5 h-5 text-[#a3e635]" />
                        )}
                      </motion.button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-6 border-t border-slate-700/50">
                <Button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800/50"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentQuestion < assessmentQuestions.length - 1 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!isAnswered}
                    className="flex-1 bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!allAnswered || loading}
                    className="flex-1 bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold"
                  >
                    {loading ? 'Submitting...' : 'Submit Assessment'}
                    <Check className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {assessmentQuestions.map((q, idx) => (
            <motion.div
              key={q.id}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                idx === currentQuestion
                  ? "w-8 bg-[#a3e635]"
                  : idx in answers
                  ? "bg-[#a3e635]/50"
                  : "bg-slate-700"
              )}
            />
          ))}
        </div>

        {/* Help Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-slate-500 text-sm"
        >
          💡 Your answers help us customize your learning experience. There are no right or wrong answers.
        </motion.p>
      </div>
    </div>
  );
}
