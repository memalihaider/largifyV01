'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronLeft,
  ChevronRight,
  BookOpen,
  CheckCircle,
  Clock,
  Play,
  Pause,
  Video,
  FileText,
  Code,
  Brain,
  ArrowRight,
  ExternalLink,
  Award,
  X,
  AlertCircle,
  Coins,
  Lock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Question {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false' | 'scenario';
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'practice' | 'quiz';
  duration: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  coinCost?: number;
  content?: {
    videoUrl?: string;
    videoType?: 'youtube' | 'vimeo' | 'uploaded';
    documentUrl?: string;
    documentContent?: string;
    practicePrompt?: string;
    quizQuestions?: Question[];
  };
}

// Sample lesson data
const getLessonData = (lessonId: string): Lesson => {
  const lessons: Record<string, Lesson> = {
    'l1': {
      id: 'l1',
      title: 'Introduction & Overview',
      type: 'video',
      duration: '12 min',
      difficulty: 'beginner',
      coinCost: 0,
      content: {
        videoUrl: 'dQw4w9WgXcQ', // Sample YouTube ID
        videoType: 'youtube'
      }
    },
    'l2': {
      id: 'l2',
      title: 'Key Concepts Explained',
      type: 'reading',
      duration: '8 min',
      difficulty: 'beginner',
      coinCost: 0,
      content: {
        documentContent: `
# Key Concepts in Modern Development

## Introduction
Understanding the fundamental concepts is crucial for success in any technical field. This document covers the essential principles you need to master.

## Core Principles

### 1. Modularity
Breaking down complex systems into smaller, manageable components is essential for:
- Better code organization
- Easier maintenance
- Improved testability
- Enhanced reusability

### 2. Scalability
Your systems should be designed to grow:
- **Vertical Scaling**: Adding more power to existing machines
- **Horizontal Scaling**: Adding more machines to distribute load
- **Performance Optimization**: Ensuring efficient resource usage

### 3. Security First
Security should never be an afterthought:
- Input validation
- Authentication and authorization
- Data encryption
- Regular security audits

## Best Practices

1. **Code Reviews**: Always have your code reviewed by peers
2. **Testing**: Write tests before deploying to production
3. **Documentation**: Document your code and decisions
4. **Version Control**: Use Git for all projects

## Real-World Application

These concepts apply across industries:
- **Startups**: Build MVPs with scalability in mind
- **Enterprise**: Maintain legacy systems while modernizing
- **Consulting**: Advise clients on best practices

## Summary
Mastering these core concepts will set you apart as a professional. Practice implementing them in every project you work on.

## Additional Resources
- Official documentation
- Industry whitepapers
- Expert blog posts
- Community forums
        `
      }
    },
    'l4': {
      id: 'l4',
      title: 'Concept Check Quiz',
      type: 'quiz',
      duration: '5 min',
      content: {
        quizQuestions: [
          {
            id: 'q1',
            question: 'What is the primary benefit of modularity in software development?',
            type: 'multiple-choice',
            options: [
              'Faster execution speed',
              'Better code organization and maintainability',
              'Reduced file sizes',
              'Automatic bug fixes'
            ],
            correctAnswer: 1,
            explanation: 'Modularity primarily helps with code organization and maintainability by breaking down complex systems into smaller, manageable components.'
          },
          {
            id: 'q2',
            question: 'Horizontal scaling means adding more power to existing machines.',
            type: 'true-false',
            options: ['True', 'False'],
            correctAnswer: 1,
            explanation: 'False. Horizontal scaling means adding more machines to distribute the load. Vertical scaling is adding more power to existing machines.'
          },
          {
            id: 'q3',
            question: 'Your startup is experiencing rapid growth. Which approach would you take?',
            type: 'scenario',
            options: [
              'Wait until the system crashes before scaling',
              'Design for horizontal scalability from the start',
              'Only use vertical scaling to save costs',
              'Ignore performance optimization'
            ],
            correctAnswer: 1,
            explanation: 'Designing for horizontal scalability from the start allows your system to grow seamlessly as your startup scales.'
          },
          {
            id: 'q4',
            question: 'When should security be considered in the development process?',
            type: 'multiple-choice',
            options: [
              'Only after launching to production',
              'During the final testing phase',
              'From the very beginning and throughout',
              'Only when handling payment data'
            ],
            correctAnswer: 2,
            explanation: 'Security should be considered from the very beginning and throughout the entire development lifecycle, not as an afterthought.'
          },
          {
            id: 'q5',
            question: 'Code reviews are optional for experienced developers.',
            type: 'true-false',
            options: ['True', 'False'],
            correctAnswer: 1,
            explanation: 'False. Code reviews are valuable for all developers, regardless of experience level. They help catch bugs, share knowledge, and maintain code quality.'
          }
        ]
      }
    },
    'l11': {
      id: 'l11',
      title: 'Practice Lab',
      type: 'practice',
      duration: '30 min',
      difficulty: 'intermediate',
      coinCost: 35,
      content: {
        practicePrompt: `
# Practical Lab: Building a Modular System

## Objective
Create a modular architecture for a small e-commerce system that demonstrates the core principles you've learned.

## Requirements

### 1. User Management Module
- User registration
- Authentication
- Profile management

### 2. Product Catalog Module
- Product listing
- Search functionality
- Category filtering

### 3. Shopping Cart Module
- Add to cart
- Update quantities
- Calculate totals

### 4. Order Processing Module
- Checkout flow
- Payment integration (mock)
- Order confirmation

## Technical Requirements
- Use proper separation of concerns
- Implement error handling
- Add input validation
- Write at least 3 unit tests
- Document your code

## Deliverables
1. Source code with clear module structure
2. README with setup instructions
3. Test coverage report
4. Brief architecture explanation

## Evaluation Criteria
- Code organization and modularity: 30%
- Functionality and completeness: 30%
- Code quality and best practices: 20%
- Documentation: 10%
- Testing: 10%

## Hints
- Start with defining clear interfaces for each module
- Use dependency injection for better testability
- Consider using a state management pattern
- Think about how modules will communicate

## Submission
Submit your code via the AI review system. You'll receive automated feedback and suggestions for improvement.

**Time Limit**: 30 minutes
**Passing Score**: 70%

Good luck!
        `
      }
    }
  };

  return lessons[lessonId] || {
    id: lessonId,
    title: 'Sample Lesson',
    type: 'video',
    duration: '10 min',
    difficulty: 'beginner',
    coinCost: 0,
    content: {
      videoUrl: 'dQw4w9WgXcQ',
      videoType: 'youtube'
    }
  };
};

export default function LessonViewPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  
  const lessonId = searchParams.get('lesson') || 'l1';
  const lesson = getLessonData(lessonId);

  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [practiceCode, setPracticeCode] = useState('');
  const [practiceSubmitted, setPracticeSubmitted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const [readingQuizAnswers, setReadingQuizAnswers] = useState<Record<string, number>>({});
  const [readingQuizSubmitted, setReadingQuizSubmitted] = useState(false);
  const [readingQuizScore, setReadingQuizScore] = useState(0);
  const [showReadingQuiz, setShowReadingQuiz] = useState(false);
  
  // Coin system state
  const [userCoins, setUserCoins] = useState(450); // Match the layout balance
  const [hasAccess, setHasAccess] = useState(lesson.coinCost === 0 || lesson.difficulty === 'beginner');
  const [showUnlockModal, setShowUnlockModal] = useState(false);

  useEffect(() => {
    // Simulate reading progress based on scroll
    const handleScroll = (e: Event) => {
      if (lesson.type === 'reading') {
        const target = e.target as HTMLElement;
        const scrollPercent = (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
        setReadingProgress(Math.min(scrollPercent, 100));
        
        // Show quiz when user reaches 90% of content
        if (scrollPercent >= 90 && !showReadingQuiz) {
          setShowReadingQuiz(true);
        }
      }
    };

    const docViewer = document.getElementById('doc-viewer');
    if (docViewer) {
      docViewer.addEventListener('scroll', handleScroll);
      return () => docViewer.removeEventListener('scroll', handleScroll);
    }
  }, [lesson.type, showReadingQuiz]);

  const handleQuizSubmit = () => {
    if (!lesson.content?.quizQuestions) return;
    
    let correct = 0;
    lesson.content.quizQuestions.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    
    const score = (correct / lesson.content.quizQuestions.length) * 100;
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const handleReadingQuizSubmit = () => {
    const readingQuiz = getReadingComprehensionQuiz();
    
    let correct = 0;
    readingQuiz.forEach(q => {
      if (readingQuizAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    
    const score = (correct / readingQuiz.length) * 100;
    setReadingQuizScore(score);
    setReadingQuizSubmitted(true);
  };

  const getReadingComprehensionQuiz = (): Question[] => {
    return [
      {
        id: 'rq1',
        question: 'According to the document, what is the primary benefit of modularity?',
        type: 'multiple-choice',
        options: [
          'It makes code run faster',
          'It improves code organization and maintainability',
          'It reduces file size',
          'It eliminates all bugs'
        ],
        correctAnswer: 1,
        explanation: 'The document emphasizes that modularity primarily helps with better code organization, easier maintenance, improved testability, and enhanced reusability.'
      },
      {
        id: 'rq2',
        question: 'Which scaling approach involves adding more machines to distribute load?',
        type: 'multiple-choice',
        options: [
          'Vertical Scaling',
          'Horizontal Scaling',
          'Performance Optimization',
          'Code Refactoring'
        ],
        correctAnswer: 1,
        explanation: 'Horizontal scaling is defined in the document as adding more machines to distribute load, while vertical scaling adds more power to existing machines.'
      },
      {
        id: 'rq3',
        question: 'Security should be considered only after the main features are complete.',
        type: 'true-false',
        options: ['True', 'False'],
        correctAnswer: 1,
        explanation: 'False. The document explicitly states that "Security should never be an afterthought" and lists security as a core principle to consider from the start.'
      },
      {
        id: 'rq4',
        question: 'Which of the following is NOT mentioned as a best practice in the document?',
        type: 'multiple-choice',
        options: [
          'Code Reviews',
          'Writing Tests',
          'Using the latest JavaScript framework',
          'Documentation'
        ],
        correctAnswer: 2,
        explanation: 'The document lists Code Reviews, Testing, Documentation, and Version Control as best practices, but does not mention anything about using the latest JavaScript framework.'
      },
      {
        id: 'rq5',
        question: 'What does the document recommend for all projects?',
        type: 'multiple-choice',
        options: [
          'Using MongoDB',
          'Writing in Python',
          'Using Git for version control',
          'Deploying on AWS'
        ],
        correctAnswer: 2,
        explanation: 'The document specifically states "Use Git for all projects" as one of the best practices under version control.'
      }
    ];
  };

  const handlePracticeSubmit = () => {
    setPracticeSubmitted(true);
    // In real implementation, this would send to backend for AI evaluation
  };

  const markComplete = () => {
    // Here you would save completion status
    router.back();
  };

  const canComplete = () => {
    if (lesson.type === 'video') return videoProgress >= 90;
    if (lesson.type === 'reading') return readingProgress >= 90 && readingQuizSubmitted && readingQuizScore >= 70;
    if (lesson.type === 'quiz') return quizSubmitted && quizScore >= 70;
    if (lesson.type === 'practice') return practiceSubmitted;
    return true;
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200">
      {/* Header */}
      <div className="border-b border-slate-800/50 px-6 py-4 flex items-center justify-between bg-[#111927]">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          <div className="h-6 w-px bg-slate-800" />
          <div>
            <h1 className="font-bold text-white flex items-center gap-3">
              {lesson.title}
              {lesson.coinCost && lesson.coinCost > 0 && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-sm">
                  <Coins className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-400 font-bold">{lesson.coinCost}</span>
                  {!hasAccess && <Lock className="w-3 h-3 text-amber-400" />}
                </span>
              )}
              {lesson.difficulty && (
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  lesson.difficulty === 'beginner' ? 'bg-green-500/10 text-green-400 border border-green-500/30' :
                  lesson.difficulty === 'intermediate' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                  'bg-purple-500/10 text-purple-400 border border-purple-500/30'
                }`}>
                  {lesson.difficulty.toUpperCase()}
                </span>
              )}
            </h1>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="capitalize">{lesson.type}</span>
              <span>•</span>
              <span>{lesson.duration}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {lesson.type === 'video' && (
            <div className="text-sm text-slate-400">
              Progress: {Math.round(videoProgress)}%
            </div>
          )}
          {lesson.type === 'reading' && (
            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-400">
                Reading: {Math.round(readingProgress)}%
              </div>
              {showReadingQuiz && (
                <>
                  <div className="h-4 w-px bg-slate-700" />
                  <div className="text-sm text-slate-400">
                    Quiz: {readingQuizSubmitted ? (
                      <span className={readingQuizScore >= 70 ? "text-green-400 font-medium" : "text-red-400 font-medium"}>
                        {Math.round(readingQuizScore)}%
                      </span>
                    ) : (
                      <span className="text-yellow-400">Pending</span>
                    )}
                  </div>
                </>
              )}
            </div>
          )}
          <Button
            onClick={markComplete}
            disabled={!canComplete()}
            className={cn(
              "font-bold",
              canComplete() 
                ? "bg-[#a3e635] hover:bg-[#bef264] text-black" 
                : "bg-slate-700 text-slate-400 cursor-not-allowed"
            )}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark Complete
          </Button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex h-[calc(100vh-73px)]">
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Locked Content Overlay */}
          {!hasAccess && lesson.coinCost && lesson.coinCost > 0 && (
            <div className="p-6">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-500/30 rounded-xl p-12 text-center"
                >
                  <div className="inline-flex p-6 bg-amber-500/20 rounded-full mb-6">
                    <Lock className="w-16 h-16 text-amber-400" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Premium Lesson</h2>
                  <p className="text-slate-300 text-lg mb-8">
                    This {lesson.difficulty} level lesson requires <span className="text-amber-400 font-bold">{lesson.coinCost} coins</span> to unlock.
                  </p>
                  
                  <div className="flex items-center justify-center gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-sm text-slate-400 mb-1">Your Balance</div>
                      <div className="flex items-center gap-2 justify-center">
                        <Coins className="w-5 h-5 text-amber-400" />
                        <span className="text-2xl font-bold">{userCoins}</span>
                      </div>
                    </div>
                    <div className="text-3xl text-slate-600">→</div>
                    <div className="text-center">
                      <div className="text-sm text-slate-400 mb-1">After Unlock</div>
                      <div className="flex items-center gap-2 justify-center">
                        <Coins className="w-5 h-5 text-amber-400" />
                        <span className="text-2xl font-bold">{userCoins - (lesson.coinCost || 0)}</span>
                      </div>
                    </div>
                  </div>

                  {userCoins >= (lesson.coinCost || 0) ? (
                    <div className="space-y-4">
                      <button
                        onClick={() => {
                          setUserCoins(prev => prev - (lesson.coinCost || 0));
                          setHasAccess(true);
                        }}
                        className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-lg font-bold text-lg transition-all"
                      >
                        Unlock Lesson for {lesson.coinCost} Coins
                      </button>
                      <p className="text-xs text-slate-400">
                        One-time unlock • Access forever • No subscription needed
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 font-medium">
                          Insufficient coins. You need {(lesson.coinCost || 0) - userCoins} more coins.
                        </p>
                      </div>
                      <button
                        onClick={() => router.push('/student/coins')}
                        className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-bold text-lg transition-all"
                      >
                        Get More Coins
                      </button>
                      <button
                        onClick={() => router.push('/student/subscription')}
                        className="block w-full text-sm text-violet-400 hover:text-violet-300"
                      >
                        Or subscribe for monthly coins →
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          )}

          {/* Video Lesson */}
          {hasAccess && lesson.type === 'video' && lesson.content?.videoType === 'youtube' && (
            <div className="p-6">
              <div className="max-w-5xl mx-auto">
                <Card className="bg-[#111927] border-slate-800 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative pt-[56.25%]">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${lesson.content.videoUrl}?enablejsapi=1`}
                        title={lesson.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        onLoad={() => {
                          // Simulate video progress
                          const interval = setInterval(() => {
                            setVideoProgress(prev => {
                              if (prev >= 100) {
                                clearInterval(interval);
                                return 100;
                              }
                              return prev + 10;
                            });
                          }, 7000);
                        }}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Video Notes */}
                <div className="mt-6 space-y-4">
                  <Card className="bg-[#111927] border-slate-800">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-white mb-3">Key Takeaways</h3>
                      <ul className="space-y-2 text-slate-400">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#a3e635] mt-0.5 flex-shrink-0" />
                          <span>Understand the core concepts and their practical applications</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#a3e635] mt-0.5 flex-shrink-0" />
                          <span>Learn from real-world examples and industry best practices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#a3e635] mt-0.5 flex-shrink-0" />
                          <span>Prepare for the practical exercises in upcoming lessons</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111927] border-slate-800">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-white mb-3 flex items-center gap-2">
                        <ExternalLink className="w-4 h-4 text-[#a3e635]" />
                        Additional Resources
                      </h3>
                      <div className="space-y-2">
                        <a href="#" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                          <p className="text-sm font-medium text-white">Official Documentation</p>
                          <p className="text-xs text-slate-400">Learn more from the official guides</p>
                        </a>
                        <a href="#" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                          <p className="text-sm font-medium text-white">Community Forum</p>
                          <p className="text-xs text-slate-400">Discuss with other learners</p>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {/* Reading/Documentation Lesson */}
          {hasAccess && lesson.type === 'reading' && (
            <div id="doc-viewer" className="h-full overflow-auto p-6">
              <div className="max-w-4xl mx-auto">
                <Card className="bg-[#111927] border-slate-800">
                  <CardContent className="p-8 prose prose-invert prose-slate max-w-none">
                    <div 
                      className="markdown-content"
                      dangerouslySetInnerHTML={{ 
                        __html: lesson.content?.documentContent?.replace(/\n/g, '<br>') || '' 
                      }}
                      style={{
                        color: '#cbd5e1',
                        lineHeight: '1.8'
                      }}
                    />
                  </CardContent>
                </Card>

                {/* Progress Indicator */}
                <div className="mt-6 sticky bottom-6">
                  <Card className="bg-[#111927] border-slate-800">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-400">Reading Progress</span>
                        <span className="text-sm font-bold text-[#a3e635]">{Math.round(readingProgress)}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                          className="h-full bg-gradient-to-r from-[#a3e635] to-green-500 rounded-full transition-all"
                          style={{ width: `${readingProgress}%` }}
                        />
                      </div>
                      {readingProgress >= 90 && !readingQuizSubmitted && (
                        <p className="text-xs text-[#a3e635] mt-2 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Complete the comprehension quiz below to finish this lesson
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Reading Comprehension Quiz */}
                {showReadingQuiz && (
                  <div className="mt-8 space-y-6">
                    <Card className="bg-gradient-to-r from-[#111927] to-[#1a1f3a] border-[#a3e635]/30">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-[#a3e635]/20 flex items-center justify-center">
                            <Brain className="w-5 h-5 text-[#a3e635]" />
                          </div>
                          <div>
                            <h2 className="font-bold text-white">Reading Comprehension Check</h2>
                            <p className="text-sm text-slate-400">
                              {getReadingComprehensionQuiz().length} questions • Passing score: 70%
                            </p>
                          </div>
                        </div>
                        <div className="p-4 bg-[#a3e635]/10 border border-[#a3e635]/30 rounded-lg">
                          <p className="text-sm text-[#a3e635] flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>Test your understanding of what you just read. You must pass this quiz to complete the lesson.</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {!readingQuizSubmitted ? (
                      <>
                        {getReadingComprehensionQuiz().map((question, idx) => (
                          <motion.div
                            key={question.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Card className="bg-[#111927] border-slate-800">
                              <CardContent className="p-6">
                                <div className="flex gap-4">
                                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[#a3e635] flex-shrink-0">
                                    {idx + 1}
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-bold text-white mb-4">{question.question}</h3>
                                    <div className="space-y-2">
                                      {question.options.map((option, optIdx) => (
                                        <button
                                          key={optIdx}
                                          onClick={() => setReadingQuizAnswers({ ...readingQuizAnswers, [question.id]: optIdx })}
                                          className={cn(
                                            "w-full p-4 rounded-lg border-2 transition-all text-left",
                                            readingQuizAnswers[question.id] === optIdx
                                              ? "border-[#a3e635] bg-[#a3e635]/10"
                                              : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                                          )}
                                        >
                                          <div className="flex items-center gap-3">
                                            <div className={cn(
                                              "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                              readingQuizAnswers[question.id] === optIdx
                                                ? "border-[#a3e635] bg-[#a3e635]"
                                                : "border-slate-600"
                                            )}>
                                              {readingQuizAnswers[question.id] === optIdx && (
                                                <CheckCircle className="w-3 h-3 text-black" />
                                              )}
                                            </div>
                                            <span className="text-white">{option}</span>
                                          </div>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}

                        <div className="flex justify-between items-center pt-4">
                          <p className="text-sm text-slate-400">
                            {Object.keys(readingQuizAnswers).length} of {getReadingComprehensionQuiz().length} answered
                          </p>
                          <Button
                            onClick={handleReadingQuizSubmit}
                            disabled={Object.keys(readingQuizAnswers).length !== getReadingComprehensionQuiz().length}
                            className="bg-[#a3e635] hover:bg-[#bef264] text-black font-bold"
                          >
                            Submit Quiz
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="space-y-6">
                        {/* Quiz Results */}
                        <Card className={cn(
                          "border-2",
                          readingQuizScore >= 70 
                            ? "bg-green-500/10 border-green-500/30" 
                            : "bg-red-500/10 border-red-500/30"
                        )}>
                          <CardContent className="p-8 text-center">
                            <div className={cn(
                              "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center",
                              readingQuizScore >= 70 ? "bg-green-500/20" : "bg-red-500/20"
                            )}>
                              {readingQuizScore >= 70 ? (
                                <CheckCircle className="w-10 h-10 text-green-400" />
                              ) : (
                                <X className="w-10 h-10 text-red-400" />
                              )}
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">{Math.round(readingQuizScore)}%</h2>
                            <p className={cn(
                              "text-lg font-medium mb-4",
                              readingQuizScore >= 70 ? "text-green-400" : "text-red-400"
                            )}>
                              {readingQuizScore >= 70 ? "Great comprehension!" : "Please review the material"}
                            </p>
                            <p className="text-slate-400">
                              You got {Math.round((readingQuizScore / 100) * getReadingComprehensionQuiz().length)} out of {getReadingComprehensionQuiz().length} questions correct
                            </p>
                          </CardContent>
                        </Card>

                        {/* Detailed Results */}
                        {getReadingComprehensionQuiz().map((question, idx) => {
                          const userAnswer = readingQuizAnswers[question.id];
                          const isCorrect = userAnswer === question.correctAnswer;

                          return (
                            <Card key={question.id} className="bg-[#111927] border-slate-800">
                              <CardContent className="p-6">
                                <div className="flex gap-4">
                                  <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0",
                                    isCorrect ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                                  )}>
                                    {isCorrect ? <CheckCircle className="w-5 h-5" /> : <X className="w-5 h-5" />}
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="font-bold text-white mb-2">{question.question}</h3>
                                    <div className="space-y-2 mb-4">
                                      {question.options.map((option, optIdx) => (
                                        <div
                                          key={optIdx}
                                          className={cn(
                                            "p-3 rounded-lg border-2",
                                            optIdx === question.correctAnswer && "border-green-500/50 bg-green-500/10",
                                            optIdx === userAnswer && optIdx !== question.correctAnswer && "border-red-500/50 bg-red-500/10",
                                            optIdx !== question.correctAnswer && optIdx !== userAnswer && "border-slate-700 bg-slate-800/30"
                                          )}
                                        >
                                          <div className="flex items-center gap-2">
                                            <span className="text-white">{option}</span>
                                            {optIdx === question.correctAnswer && (
                                              <span className="ml-auto text-xs text-green-400 font-medium">Correct</span>
                                            )}
                                            {optIdx === userAnswer && optIdx !== question.correctAnswer && (
                                              <span className="ml-auto text-xs text-red-400 font-medium">Your answer</span>
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    <div className="p-4 bg-slate-800/50 rounded-lg">
                                      <p className="text-sm font-medium text-[#a3e635] mb-1">Explanation:</p>
                                      <p className="text-sm text-slate-300">{question.explanation}</p>
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}

                        {readingQuizScore < 70 && (
                          <div className="space-y-4">
                            <Card className="bg-yellow-500/10 border-2 border-yellow-500/30">
                              <CardContent className="p-6">
                                <div className="flex items-start gap-3">
                                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h3 className="font-bold text-white mb-2">Review Recommended</h3>
                                    <p className="text-sm text-slate-300 mb-3">
                                      You scored below 70%. We recommend reviewing the documentation above before retaking the quiz.
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                            <Button
                              onClick={() => {
                                setReadingQuizAnswers({});
                                setReadingQuizSubmitted(false);
                                setReadingQuizScore(0);
                                // Scroll back to top
                                document.getElementById('doc-viewer')?.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold"
                            >
                              Review & Retake Quiz
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quiz Lesson */}
          {hasAccess && lesson.type === 'quiz' && (
            <div className="p-6 overflow-auto h-full">
              <div className="max-w-3xl mx-auto">
                {!quizSubmitted ? (
                  <div className="space-y-6">
                    <Card className="bg-[#111927] border-slate-800">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-[#a3e635]/20 flex items-center justify-center">
                            <Brain className="w-5 h-5 text-[#a3e635]" />
                          </div>
                          <div>
                            <h2 className="font-bold text-white">Assessment Quiz</h2>
                            <p className="text-sm text-slate-400">
                              {lesson.content?.quizQuestions?.length || 0} questions • Passing score: 70%
                            </p>
                          </div>
                        </div>
                        <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                          <p className="text-sm text-yellow-400 flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>Read each question carefully. You can review your answers before submitting.</span>
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {lesson.content?.quizQuestions?.map((question, idx) => (
                      <motion.div
                        key={question.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Card className="bg-[#111927] border-slate-800">
                          <CardContent className="p-6">
                            <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-[#a3e635] flex-shrink-0">
                                {idx + 1}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-white mb-4">{question.question}</h3>
                                <div className="space-y-2">
                                  {question.options.map((option, optIdx) => (
                                    <button
                                      key={optIdx}
                                      onClick={() => setQuizAnswers({ ...quizAnswers, [question.id]: optIdx })}
                                      className={cn(
                                        "w-full p-4 rounded-lg border-2 transition-all text-left",
                                        quizAnswers[question.id] === optIdx
                                          ? "border-[#a3e635] bg-[#a3e635]/10"
                                          : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                                      )}
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className={cn(
                                          "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                          quizAnswers[question.id] === optIdx
                                            ? "border-[#a3e635] bg-[#a3e635]"
                                            : "border-slate-600"
                                        )}>
                                          {quizAnswers[question.id] === optIdx && (
                                            <CheckCircle className="w-3 h-3 text-black" />
                                          )}
                                        </div>
                                        <span className="text-white">{option}</span>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}

                    <div className="flex justify-between items-center pt-4">
                      <p className="text-sm text-slate-400">
                        {Object.keys(quizAnswers).length} of {lesson.content?.quizQuestions?.length || 0} answered
                      </p>
                      <Button
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(quizAnswers).length !== lesson.content?.quizQuestions?.length}
                        className="bg-[#a3e635] hover:bg-[#bef264] text-black font-bold"
                      >
                        Submit Quiz
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Quiz Results */}
                    <Card className={cn(
                      "border-2",
                      quizScore >= 70 
                        ? "bg-green-500/10 border-green-500/30" 
                        : "bg-red-500/10 border-red-500/30"
                    )}>
                      <CardContent className="p-8 text-center">
                        <div className={cn(
                          "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center",
                          quizScore >= 70 ? "bg-green-500/20" : "bg-red-500/20"
                        )}>
                          {quizScore >= 70 ? (
                            <CheckCircle className="w-10 h-10 text-green-400" />
                          ) : (
                            <X className="w-10 h-10 text-red-400" />
                          )}
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">{Math.round(quizScore)}%</h2>
                        <p className={cn(
                          "text-lg font-medium mb-4",
                          quizScore >= 70 ? "text-green-400" : "text-red-400"
                        )}>
                          {quizScore >= 70 ? "Passed! Great job!" : "Not passed. Keep learning!"}
                        </p>
                        <p className="text-slate-400">
                          You got {Math.round((quizScore / 100) * (lesson.content?.quizQuestions?.length || 0))} out of {lesson.content?.quizQuestions?.length || 0} questions correct
                        </p>
                      </CardContent>
                    </Card>

                    {/* Detailed Results */}
                    {lesson.content?.quizQuestions?.map((question, idx) => {
                      const userAnswer = quizAnswers[question.id];
                      const isCorrect = userAnswer === question.correctAnswer;

                      return (
                        <Card key={question.id} className="bg-[#111927] border-slate-800">
                          <CardContent className="p-6">
                            <div className="flex gap-4">
                              <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0",
                                isCorrect ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
                              )}>
                                {isCorrect ? <CheckCircle className="w-5 h-5" /> : <X className="w-5 h-5" />}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-white mb-2">{question.question}</h3>
                                <div className="space-y-2 mb-4">
                                  {question.options.map((option, optIdx) => (
                                    <div
                                      key={optIdx}
                                      className={cn(
                                        "p-3 rounded-lg border-2",
                                        optIdx === question.correctAnswer && "border-green-500/50 bg-green-500/10",
                                        optIdx === userAnswer && optIdx !== question.correctAnswer && "border-red-500/50 bg-red-500/10",
                                        optIdx !== question.correctAnswer && optIdx !== userAnswer && "border-slate-700 bg-slate-800/30"
                                      )}
                                    >
                                      <div className="flex items-center gap-2">
                                        <span className="text-white">{option}</span>
                                        {optIdx === question.correctAnswer && (
                                          <span className="ml-auto text-xs text-green-400 font-medium">Correct</span>
                                        )}
                                        {optIdx === userAnswer && optIdx !== question.correctAnswer && (
                                          <span className="ml-auto text-xs text-red-400 font-medium">Your answer</span>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="p-4 bg-slate-800/50 rounded-lg">
                                  <p className="text-sm font-medium text-[#a3e635] mb-1">Explanation:</p>
                                  <p className="text-sm text-slate-300">{question.explanation}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}

                    {quizScore < 70 && (
                      <Button
                        onClick={() => {
                          setQuizAnswers({});
                          setQuizSubmitted(false);
                          setQuizScore(0);
                        }}
                        className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold"
                      >
                        Retake Quiz
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Practice Lesson */}
          {hasAccess && lesson.type === 'practice' && (
            <div className="p-6 overflow-auto h-full">
              <div className="max-w-5xl mx-auto space-y-6">
                <Card className="bg-[#111927] border-slate-800">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#a3e635]/20 flex items-center justify-center">
                        <Code className="w-5 h-5 text-[#a3e635]" />
                      </div>
                      <div>
                        <h2 className="font-bold text-white">Practical Lab</h2>
                        <p className="text-sm text-slate-400">Hands-on exercise • {lesson.duration}</p>
                      </div>
                    </div>
                    <div className="prose prose-invert max-w-none">
                      <pre className="bg-slate-800 p-4 rounded-lg overflow-auto text-sm text-slate-300 whitespace-pre-wrap">
                        {lesson.content?.practicePrompt}
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                {!practiceSubmitted ? (
                  <Card className="bg-[#111927] border-slate-800">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-white mb-4">Your Solution</h3>
                      <textarea
                        value={practiceCode}
                        onChange={(e) => setPracticeCode(e.target.value)}
                        placeholder="Paste your code here or describe your solution..."
                        className="w-full h-64 bg-slate-800 border border-slate-700 rounded-lg p-4 text-slate-200 font-mono text-sm focus:outline-none focus:border-[#a3e635] resize-none"
                      />
                      <div className="mt-4 flex justify-end">
                        <Button
                          onClick={handlePracticeSubmit}
                          disabled={!practiceCode.trim()}
                          className="bg-[#a3e635] hover:bg-[#bef264] text-black font-bold"
                        >
                          Submit for AI Review
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-green-500/10 border-2 border-green-500/30">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white mb-2">Submitted Successfully!</h3>
                          <p className="text-slate-300 mb-4">
                            Your solution has been submitted for AI review. You'll receive detailed feedback and suggestions for improvement.
                          </p>
                          <div className="p-4 bg-slate-800/50 rounded-lg">
                            <p className="text-sm font-medium text-[#a3e635] mb-2">AI Feedback Preview:</p>
                            <ul className="text-sm text-slate-300 space-y-1">
                              <li>✓ Good use of modular architecture</li>
                              <li>✓ Proper error handling implemented</li>
                              <li>→ Consider adding more unit tests</li>
                              <li>→ Documentation could be more detailed</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
