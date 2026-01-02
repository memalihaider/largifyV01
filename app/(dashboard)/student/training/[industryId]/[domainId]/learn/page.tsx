'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Play,
  FileText,
  Video,
  Code,
  CheckCircle,
  Circle,
  Award,
  ExternalLink,
  Brain,
  Target,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Lock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'practice' | 'quiz';
  duration: string;
  completed: boolean;
  source?: string;
}

interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  completed: boolean;
}

interface NanoSkillData {
  id: string;
  name: string;
  description: string;
  modules: Module[];
}

// Sample learning content
const generateModules = (skillName: string): Module[] => [
  {
    id: 'mod-1',
    title: 'Understanding the Basics',
    description: `Core concepts and fundamentals of ${skillName}`,
    completed: false,
    lessons: [
      { id: 'l1', title: 'Introduction & Overview', type: 'video', duration: '12 min', completed: false, source: 'YouTube' },
      { id: 'l2', title: 'Key Concepts Explained', type: 'reading', duration: '8 min', completed: false, source: 'Documentation' },
      { id: 'l3', title: 'Real-World Applications', type: 'video', duration: '15 min', completed: false, source: 'YouTube' },
      { id: 'l4', title: 'Concept Check Quiz', type: 'quiz', duration: '5 min', completed: false }
    ]
  },
  {
    id: 'mod-2',
    title: 'Tools & Setup',
    description: 'Set up your environment and learn essential tools',
    completed: false,
    lessons: [
      { id: 'l5', title: 'Tool Overview', type: 'video', duration: '10 min', completed: false, source: 'YouTube' },
      { id: 'l6', title: 'Installation Guide', type: 'reading', duration: '10 min', completed: false, source: 'Official Docs' },
      { id: 'l7', title: 'Hands-On Setup', type: 'practice', duration: '20 min', completed: false },
      { id: 'l8', title: 'Configuration Quiz', type: 'quiz', duration: '5 min', completed: false }
    ]
  },
  {
    id: 'mod-3',
    title: 'Practical Application',
    description: 'Apply your knowledge in real scenarios',
    completed: false,
    lessons: [
      { id: 'l9', title: 'Case Study Analysis', type: 'video', duration: '18 min', completed: false, source: 'Industry Expert' },
      { id: 'l10', title: 'Best Practices Guide', type: 'reading', duration: '12 min', completed: false, source: 'Industry Blog' },
      { id: 'l11', title: 'Practice Lab', type: 'practice', duration: '30 min', completed: false },
      { id: 'l12', title: 'Scenario Problem', type: 'practice', duration: '25 min', completed: false }
    ]
  },
  {
    id: 'mod-4',
    title: 'Advanced Techniques',
    description: 'Master advanced concepts and strategies',
    completed: false,
    lessons: [
      { id: 'l13', title: 'Advanced Strategies', type: 'video', duration: '20 min', completed: false, source: 'Coursera Preview' },
      { id: 'l14', title: 'Expert Insights', type: 'reading', duration: '15 min', completed: false, source: 'Whitepaper' },
      { id: 'l15', title: 'Complex Problem Lab', type: 'practice', duration: '35 min', completed: false },
      { id: 'l16', title: 'Final Assessment', type: 'quiz', duration: '15 min', completed: false }
    ]
  },
  {
    id: 'mod-5',
    title: 'Capstone Project',
    description: 'Complete a real-world project to prove your skills',
    completed: false,
    lessons: [
      { id: 'l17', title: 'Project Brief', type: 'reading', duration: '10 min', completed: false },
      { id: 'l18', title: 'Project Execution', type: 'practice', duration: '60 min', completed: false },
      { id: 'l19', title: 'AI Review & Feedback', type: 'practice', duration: '15 min', completed: false },
      { id: 'l20', title: 'Certification Quiz', type: 'quiz', duration: '20 min', completed: false }
    ]
  }
];

export default function LearnPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  
  const industryId = params.industryId as string;
  const domainId = params.domainId as string;
  const skillsParam = searchParams.get('skills') || '';
  const selectedSkillIds = skillsParam.split(',').filter(Boolean);

  const [activeSkill, setActiveSkill] = useState(selectedSkillIds[0] || 'skill-1');
  const [expandedModule, setExpandedModule] = useState<string | null>('mod-1');
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [currentLesson, setCurrentLesson] = useState<string | null>(null);

  // Generate skill data
  const skillsData: NanoSkillData[] = selectedSkillIds.map(id => ({
    id,
    name: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    description: 'Master this skill through structured learning',
    modules: generateModules(id)
  }));

  const activeSkillData = skillsData.find(s => s.id === activeSkill) || skillsData[0];

  const totalLessons = activeSkillData?.modules.reduce((acc, m) => acc + m.lessons.length, 0) || 0;
  const completedCount = completedLessons.length;
  const progressPercent = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

  const markLessonComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    setCurrentLesson(null);
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'reading': return <FileText className="w-4 h-4" />;
      case 'practice': return <Code className="w-4 h-4" />;
      case 'quiz': return <Brain className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getLessonTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-red-500/20 text-red-400';
      case 'reading': return 'bg-blue-500/20 text-blue-400';
      case 'practice': return 'bg-green-500/20 text-green-400';
      case 'quiz': return 'bg-yellow-500/20 text-yellow-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 font-sans">
      {/* Header */}
      <div className="border-b border-slate-800/50 mb-6 pb-6">
        <Button
          onClick={() => router.push(`/student/training/${industryId}/${domainId}`)}
          variant="ghost"
          className="text-slate-400 hover:text-white mb-4 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Domain
        </Button>
        
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-bold text-[#a3e635] uppercase tracking-widest mb-2">Learning Mode</p>
            <h1 className="text-2xl font-bold text-white mb-1">{activeSkillData?.name || 'Learning'}</h1>
            <p className="text-slate-400">{selectedSkillIds.length} nano-skill(s) selected</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400 mb-1">Overall Progress</div>
            <div className="text-2xl font-bold text-[#a3e635]">{Math.round(progressPercent)}%</div>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar - Skill Navigation */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-[#111927] border border-slate-800 rounded-lg p-4 sticky top-6">
            <h3 className="font-bold text-white mb-4 text-sm">Selected Skills</h3>
            <div className="space-y-2">
              {skillsData.map((skill, idx) => (
                <button
                  key={skill.id}
                  onClick={() => setActiveSkill(skill.id)}
                  className={cn(
                    "w-full p-3 rounded-lg text-left transition-all flex items-center gap-3",
                    activeSkill === skill.id
                      ? "bg-[#a3e635]/20 border border-[#a3e635]/30"
                      : "bg-slate-800/50 border border-transparent hover:border-slate-700"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                    activeSkill === skill.id ? "bg-[#a3e635] text-black" : "bg-slate-700 text-slate-400"
                  )}>
                    {idx + 1}
                  </div>
                  <span className={cn(
                    "text-sm font-medium truncate",
                    activeSkill === skill.id ? "text-white" : "text-slate-400"
                  )}>
                    {skill.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Progress Summary */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-400">Completed</span>
                <span className="text-white font-bold">{completedCount}/{totalLessons}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#a3e635] to-green-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Certificate Preview */}
            {progressPercent >= 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-gradient-to-br from-[#a3e635]/20 to-green-500/20 border border-[#a3e635]/30 rounded-lg text-center"
              >
                <Award className="w-8 h-8 text-[#a3e635] mx-auto mb-2" />
                <p className="text-sm font-bold text-white mb-1">Skill Complete!</p>
                <p className="text-xs text-slate-400 mb-3">You've earned a certificate</p>
                <Button size="sm" className="w-full bg-[#a3e635] hover:bg-[#bef264] text-black">
                  View Certificate
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Main Content - Modules */}
        <div className="flex-1">
          {/* Progress Bar */}
          <div className="bg-[#111927] border border-slate-800 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-[#a3e635]" />
                {activeSkillData?.name} Progress
              </h3>
              <span className="text-sm text-[#a3e635] font-bold">{completedCount} of {totalLessons} lessons</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#a3e635] to-green-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Modules List */}
          <div className="space-y-4">
            {activeSkillData?.modules.map((module, moduleIdx) => {
              const moduleCompletedLessons = module.lessons.filter(l => completedLessons.includes(l.id)).length;
              const isModuleComplete = moduleCompletedLessons === module.lessons.length;
              const isExpanded = expandedModule === module.id;

              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: moduleIdx * 0.1 }}
                >
                  <Card className={cn(
                    "bg-[#111927] border-slate-800 overflow-hidden transition-all",
                    isModuleComplete && "border-green-500/30"
                  )}>
                    <CardContent className="p-0">
                      {/* Module Header */}
                      <button
                        onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                        className="w-full p-5 flex items-center justify-between hover:bg-slate-800/30 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center font-bold",
                            isModuleComplete 
                              ? "bg-green-500/20 text-green-400" 
                              : "bg-slate-800 text-slate-400"
                          )}>
                            {isModuleComplete ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              moduleIdx + 1
                            )}
                          </div>
                          <div className="text-left">
                            <h3 className="font-bold text-white">{module.title}</h3>
                            <p className="text-sm text-slate-500">{module.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm font-medium text-white">{moduleCompletedLessons}/{module.lessons.length}</p>
                            <p className="text-xs text-slate-500">lessons</p>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-slate-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                          )}
                        </div>
                      </button>

                      {/* Module Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-slate-800"
                          >
                            <div className="p-4 space-y-2">
                              {module.lessons.map((lesson, lessonIdx) => {
                                const isCompleted = completedLessons.includes(lesson.id);
                                const isActive = currentLesson === lesson.id;

                                return (
                                  <motion.div
                                    key={lesson.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: lessonIdx * 0.05 }}
                                    className={cn(
                                      "flex items-center justify-between p-3 rounded-lg transition-all",
                                      isActive 
                                        ? "bg-[#a3e635]/20 border border-[#a3e635]/30" 
                                        : isCompleted 
                                          ? "bg-slate-800/30" 
                                          : "bg-slate-800/50 hover:bg-slate-800"
                                    )}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center",
                                        isCompleted 
                                          ? "bg-green-500/20" 
                                          : getLessonTypeColor(lesson.type)
                                      )}>
                                        {isCompleted ? (
                                          <CheckCircle className="w-4 h-4 text-green-400" />
                                        ) : (
                                          getLessonIcon(lesson.type)
                                        )}
                                      </div>
                                      <div>
                                        <p className={cn(
                                          "font-medium text-sm",
                                          isCompleted ? "text-slate-400 line-through" : "text-white"
                                        )}>
                                          {lesson.title}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                          <span className="capitalize">{lesson.type}</span>
                                          <span>•</span>
                                          <span>{lesson.duration}</span>
                                          {lesson.source && (
                                            <>
                                              <span>•</span>
                                              <span className="flex items-center gap-1">
                                                {lesson.source}
                                                <ExternalLink className="w-3 h-3" />
                                              </span>
                                            </>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      {!isCompleted && (
                                        <Button 
                                          size="sm" 
                                          onClick={() => router.push(`/student/training/${industryId}/${domainId}/learn/lesson?lesson=${lesson.id}`)}
                                          className={cn(
                                            "text-xs",
                                            isActive 
                                              ? "bg-[#a3e635] hover:bg-[#bef264] text-black" 
                                              : "bg-slate-700 hover:bg-slate-600 text-white"
                                          )}
                                        >
                                          {isActive ? 'Continue' : 'Start'}
                                        </Button>
                                      )}
                                      {isActive && (
                                        <Button 
                                          size="sm" 
                                          onClick={() => markLessonComplete(lesson.id)}
                                          className="bg-green-500 hover:bg-green-600 text-white text-xs"
                                        >
                                          Mark Complete
                                        </Button>
                                      )}
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Continue Button */}
          {completedCount > 0 && completedCount < totalLessons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-gradient-to-r from-[#111927] to-[#1a1f3a] border border-slate-800 rounded-lg flex items-center justify-between"
            >
              <div>
                <p className="font-bold text-white">Keep going!</p>
                <p className="text-sm text-slate-400">{totalLessons - completedCount} lessons remaining</p>
              </div>
              <Button className="bg-[#a3e635] hover:bg-[#bef264] text-black font-bold">
                Continue Learning
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
