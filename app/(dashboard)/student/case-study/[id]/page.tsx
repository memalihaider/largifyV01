'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft,
  CheckCircle2,
  Clock,
  Target,
  Lock,
  FileText,
  Upload,
  ChevronRight,
  ChevronDown,
  Lightbulb,
  AlertCircle,
  BookOpen,
  Award,
  Play,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { mockCaseStudies } from '@/lib/mock-data/student-portal';

interface TaskState {
  taskId: string;
  status: 'locked' | 'active' | 'in-progress' | 'submitted' | 'completed';
  submission?: string;
  score?: number;
  evaluatingFeedback?: {
    strengths: string[];
    improvements: string[];
    nextSteps: string[];
  };
}

export default function CaseStudyPage() {
  const params = useParams();
  const caseStudyId = params.id as string;
  const caseStudy = mockCaseStudies.find(c => c.id === caseStudyId);
  
  const [taskStates, setTaskStates] = useState<TaskState[]>([]);
  const [activeTaskId, setActiveTaskId] = useState<string | null>(null);
  const [submission, setSubmission] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [completedPhases, setCompletedPhases] = useState<number[]>([0]);
  const [showTaskModal, setShowTaskModal] = useState(false);

  useEffect(() => {
    if (caseStudy) {
      const states: TaskState[] = [];
      caseStudy.phases.forEach((phase: any, phaseIdx: number) => {
        phase.tasks.forEach((task: any) => {
          states.push({
            taskId: task.id,
            status: phaseIdx === 0 ? 'active' : 'locked'
          });
        });
      });
      
      setTaskStates(states);
      setActiveTaskId(caseStudy.phases[0]?.tasks[0]?.id || null);
    }
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0b1120] to-[#1a1f3a] flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 border-4 border-[#a3e635] border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-slate-400">Loading case study...</p>
        </div>
      </div>
    );
  }

  const allTasks = caseStudy.phases.flatMap((p: any) => p.tasks);
  const completedTasks = taskStates.filter(t => t.status === 'completed').length;
  const totalTasks = allTasks.length;
  const progressPercent = (completedTasks / totalTasks) * 100;

  const getTaskState = (taskId: string) => taskStates.find(t => t.taskId === taskId);
  const activeTask = allTasks.find((t: any) => t.id === activeTaskId);
  const activePhase = caseStudy.phases.find((p: any) => 
    p.tasks.some((t: any) => t.id === activeTaskId)
  );

  const handleSubmitTask = () => {
    if (!activeTaskId || !submission.trim()) return;
    
    setIsEvaluating(true);
    
    setTaskStates(prev => prev.map(t => {
      if (t.taskId === activeTaskId) {
        return { ...t, status: 'submitted' };
      }
      return t;
    }));

    setTimeout(() => {
      const score = Math.floor(Math.random() * 20) + 75;
      const strengths = [
        "Well-structured approach",
        "Clear understanding of problem",
        "Excellent analysis",
        "Strong practical thinking"
      ];
      const improvements = [
        "Could add more specific metrics",
        "Consider risk mitigation strategies",
        "Include implementation timeline",
        "Add stakeholder communication plan"
      ];
      const nextSteps = [
        "Proceed to Phase 2",
        "Review this feedback",
        "Apply insights to next phase",
        "Document your learnings"
      ];

      const feedback = {
        strengths: [strengths[Math.floor(Math.random() * strengths.length)]],
        improvements: [improvements[Math.floor(Math.random() * improvements.length)]],
        nextSteps: [nextSteps[Math.floor(Math.random() * nextSteps.length)]]
      };
      
      setTaskStates(prev => {
        const updated = prev.map((t) => {
          if (t.taskId === activeTaskId) {
            return {
              ...t,
              status: 'completed' as const,
              score,
              evaluatingFeedback: feedback
            };
          }
          return t;
        });

        // Check if phase is complete
        const currentPhaseIdx = caseStudy.phases.findIndex((p: any) =>
          p.tasks.some((t: any) => t.id === activeTaskId)
        );
        
        const currentPhase = caseStudy.phases[currentPhaseIdx];
        const allPhaseComplete = currentPhase?.tasks.every((t: any) =>
          updated.find(ts => ts.taskId === t.id)?.status === 'completed'
        );

        if (allPhaseComplete && currentPhaseIdx < caseStudy.phases.length - 1) {
          setCompletedPhases(prev => {
            if (!prev.includes(currentPhaseIdx)) {
              return [...prev, currentPhaseIdx];
            }
            return prev;
          });

          const nextPhase = caseStudy.phases[currentPhaseIdx + 1];
          return updated.map(t => {
            if (nextPhase?.tasks.some((pt: any) => pt.id === t.taskId)) {
              return { ...t, status: 'active' as const };
            }
            return t;
          });
        }

        return updated;
      });

      const currentIndex = allTasks.findIndex((t: any) => t.id === activeTaskId);
      if (currentIndex < allTasks.length - 1) {
        for (let i = currentIndex + 1; i < allTasks.length; i++) {
          const taskState = getTaskState(allTasks[i].id);
          if (taskState?.status !== 'locked') {
            setActiveTaskId(allTasks[i].id);
            break;
          }
        }
      }

      setSubmission('');
      setIsEvaluating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] to-[#1a1f3a] text-slate-200">
      {/* Header */}
      <div className="border-b border-slate-700/50 sticky top-0 z-40 bg-[#0b1120]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/student/case-studies">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Cases
                </Button>
              </Link>
              <div>
                <h1 className="text-lg font-bold text-white">{caseStudy.title}</h1>
                <p className="text-xs text-slate-400 capitalize">{caseStudy.domain}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#a3e635]">{Math.round(progressPercent)}%</p>
              <p className="text-xs text-slate-400">Complete</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 bg-slate-900/50 border border-slate-700/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#a3e635] data-[state=active]:text-black">
              Overview
            </TabsTrigger>
            <TabsTrigger value="phases" className="data-[state=active]:bg-[#a3e635] data-[state=active]:text-black">
              Phases & Tasks
            </TabsTrigger>
            <TabsTrigger value="progress" className="data-[state=active]:bg-[#a3e635] data-[state=active]:text-black">
              Progress
            </TabsTrigger>
          </TabsList>

          {/* OVERVIEW TAB */}
          <TabsContent value="overview" className="mt-8 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Phases', value: caseStudy.phases.length },
                { label: 'Tasks', value: totalTasks },
                { label: 'Duration', value: `${caseStudy.estimatedHours}h` },
                { label: 'Difficulty', value: `${caseStudy.difficulty}/10` }
              ].map(stat => (
                <Card key={stat.label} className="bg-slate-900/50 border-slate-700/50">
                  <CardContent className="pt-6 text-center">
                    <p className="text-3xl font-bold text-[#a3e635]">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-2">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#a3e635]" />
                  Problem Statement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">{caseStudy.problemStatement}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-400 mb-2">Industry Context</p>
                    <p className="text-sm text-slate-300">{caseStudy.industryContext}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-400 mb-2">Business Impact</p>
                    <p className="text-sm text-slate-300">{caseStudy.businessImpact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-900/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-lg">Constraints</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {caseStudy.constraints.map((c, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-300">
                        <span className="text-[#a3e635]">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-lg">Success Criteria</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {caseStudy.successCriteria.map((c, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#a3e635] flex-shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* PHASES & TASKS TAB */}
          <TabsContent value="phases" className="mt-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Phase Sidebar */}
              <div className="space-y-2">
                {caseStudy.phases.map((phase, idx) => {
                  const phaseComplete = completedPhases.includes(idx);
                  const canAccess = idx === 0 || completedPhases.includes(idx - 1);

                  return (
                    <motion.button
                      key={phase.phaseNumber}
                      onClick={() => canAccess && setActiveTab('phases')}
                      disabled={!canAccess}
                      className={cn(
                        'w-full text-left p-4 rounded-lg border-2 transition-all',
                        phaseComplete
                          ? 'border-[#a3e635] bg-[#a3e635]/10'
                          : canAccess
                          ? 'border-slate-700 hover:border-slate-600 bg-slate-900/30'
                          : 'border-slate-700/50 bg-slate-900/20 opacity-60 cursor-not-allowed'
                      )}
                      whileHover={canAccess ? { x: 4 } : {}}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold text-white">Phase {phase.phaseNumber}</p>
                          <p className="text-xs text-slate-400">{phase.title}</p>
                        </div>
                        {phaseComplete ? (
                          <Award className="w-5 h-5 text-[#a3e635]" />
                        ) : !canAccess ? (
                          <Lock className="w-5 h-5 text-slate-600" />
                        ) : null}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Tasks */}
              <div className="lg:col-span-2 space-y-3">
                {allTasks.map(task => {
                  const state = getTaskState(task.id);
                  const isActive = activeTaskId === task.id;

                  return (
                    <motion.button
                      key={task.id}
                      onClick={() => {
                        setActiveTaskId(task.id);
                        setShowTaskModal(true);
                      }}
                      disabled={state?.status === 'locked'}
                      whileHover={state?.status !== 'locked' ? { x: 4 } : {}}
                      className="w-full text-left"
                    >
                      <Card className={cn(
                        'border-2 transition-all',
                        state?.status === 'completed'
                          ? 'bg-[#a3e635]/10 border-[#a3e635]'
                          : state?.status === 'locked'
                          ? 'bg-slate-900/20 border-slate-700/50 opacity-50'
                          : isActive
                          ? 'bg-violet-500/10 border-violet-500'
                          : 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
                      )}>
                        <CardContent className="pt-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="font-semibold text-white">{task.title}</p>
                              <p className="text-xs text-slate-400 mt-1">{task.type}</p>
                              <div className="flex gap-2 mt-2">
                                <Badge variant="secondary" className="text-xs bg-slate-800/50">
                                  {task.estimatedMinutes}m
                                </Badge>
                              </div>
                            </div>
                            {state?.status === 'completed' ? (
                              <div className="text-right">
                                <p className="text-sm font-bold text-[#a3e635]">{state.score}%</p>
                                <CheckCircle2 className="w-5 h-5 text-[#a3e635] mt-1" />
                              </div>
                            ) : state?.status === 'locked' ? (
                              <Lock className="w-5 h-5 text-slate-600" />
                            ) : (
                              <Play className="w-5 h-5 text-slate-500" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* PROGRESS TAB */}
          <TabsContent value="progress" className="mt-8 space-y-6">
            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle>Overall Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-semibold">Case Completion</p>
                    <p className="text-sm font-bold text-[#a3e635]">{Math.round(progressPercent)}%</p>
                  </div>
                  <Progress value={progressPercent} />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 text-center">
                    <p className="text-3xl font-bold text-[#a3e635]">{completedTasks}/{totalTasks}</p>
                    <p className="text-xs text-slate-400 mt-2">Tasks Complete</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 text-center">
                    <p className="text-3xl font-bold text-[#a3e635]">{completedPhases.length}/{caseStudy.phases.length}</p>
                    <p className="text-xs text-slate-400 mt-2">Phases Complete</p>
                  </div>
                  <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/50 text-center">
                    <p className="text-3xl font-bold text-[#a3e635]">
                      {completedTasks > 0 
                        ? Math.round(taskStates.filter(t => t.score).reduce((sum, t) => sum + (t.score || 0), 0) / taskStates.filter(t => t.score).length)
                        : 0}%
                    </p>
                    <p className="text-xs text-slate-400 mt-2">Avg Score</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-slate-700/50">
              <CardHeader>
                <CardTitle>Phase Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {caseStudy.phases.map((phase, idx) => {
                  const phaseComplete = phase.tasks.filter(t => t.id in Object.fromEntries(taskStates.filter(ts => ts.status === 'completed').map(ts => [ts.taskId, ts]))).length;
                  const phaseProgress = Math.round((phaseComplete / phase.tasks.length) * 100);

                  return (
                    <div key={phase.phaseNumber}>
                      <div className="flex justify-between mb-2">
                        <p className="text-sm font-semibold">Phase {phase.phaseNumber}: {phase.title}</p>
                        <span className="text-xs font-bold text-[#a3e635]">{phaseProgress}%</span>
                      </div>
                      <Progress value={phaseProgress} className="h-2" />
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Task Modal */}
      <AnimatePresence>
        {showTaskModal && activeTask && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowTaskModal(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-slate-900/95 rounded-xl border border-slate-700/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-slate-900/95 border-b border-slate-700/50 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">{activeTask.title}</h2>
                  <p className="text-sm text-slate-400 mt-1">{activeTask.description}</p>
                </div>
                <button
                  onClick={() => setShowTaskModal(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Status */}
                {getTaskState(activeTask.id)?.status === 'completed' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="font-semibold text-emerald-400">Completed - {getTaskState(activeTask.id)?.score}%</span>
                    </div>
                  </motion.div>
                )}

                {getTaskState(activeTask.id)?.status === 'submitted' && (
                  <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg animate-pulse">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-amber-400 animate-spin" />
                      <span className="font-semibold text-amber-400">AI is evaluating...</span>
                    </div>
                  </div>
                )}

                {/* Learning Objectives */}
                <div>
                  <h3 className="font-semibold text-white mb-3">Learning Objectives</h3>
                  <ul className="space-y-2">
                    {activePhase?.learningObjectives.map((obj, i) => (
                      <li key={i} className="flex gap-2 text-sm text-slate-300">
                        <Lightbulb className="w-4 h-4 text-[#a3e635] flex-shrink-0 mt-0.5" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expected Output */}
                <div>
                  <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-violet-400" />
                    Expected Output
                  </h3>
                  <p className="text-sm text-slate-300 bg-slate-800/30 p-3 rounded-lg">
                    {activeTask.expectedOutput}
                  </p>
                </div>

                {/* Hints */}
                <div>
                  <button 
                    onClick={() => setShowHints(!showHints)}
                    className="flex items-center gap-2 text-[#a3e635] hover:text-[#bef264] transition-colors"
                  >
                    <Lightbulb className="w-4 h-4" />
                    <span className="text-sm font-medium">{showHints ? 'Hide' : 'Show'} Hints</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", showHints && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {showHints && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-3 p-4 bg-[#a3e635]/10 border border-[#a3e635]/20 rounded-lg space-y-3"
                      >
                        <div>
                          <p className="text-xs font-semibold text-[#a3e635]">Basic</p>
                          <p className="text-sm text-slate-300">{activeTask.hints.basic}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#a3e635]">Intermediate</p>
                          <p className="text-sm text-slate-300">{activeTask.hints.intermediate}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-[#a3e635]">Advanced</p>
                          <p className="text-sm text-slate-300">{activeTask.hints.advanced}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="font-semibold text-white mb-3">Resources</h3>
                  <div className="space-y-2">
                    {activeTask.resources.map((resource: any, i: number) => (
                      <a key={i} href="#" className="block p-3 bg-slate-800/30 hover:bg-slate-800/50 rounded-lg border border-slate-700/50 transition-colors group">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-white group-hover:text-[#a3e635]">{resource.title}</p>
                            <p className="text-xs text-slate-400 capitalize mt-1">{resource.type}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#a3e635]" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Submission */}
                {getTaskState(activeTask.id)?.status !== 'completed' && 
                 getTaskState(activeTask.id)?.status !== 'submitted' && (
                  <div className="space-y-4 pt-6 border-t border-slate-700/50">
                    <h3 className="font-semibold text-white flex items-center gap-2">
                      <Upload className="w-4 h-4 text-violet-400" />
                      Submit Your Work
                    </h3>
                    
                    <Textarea
                      value={submission}
                      onChange={(e) => setSubmission(e.target.value)}
                      placeholder="Share your work, paste links, or explain your approach..."
                      className="min-h-[120px] bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-[#a3e635] resize-none"
                      disabled={isEvaluating}
                    />
                    
                    <Button 
                      onClick={handleSubmitTask}
                      disabled={!submission.trim() || isEvaluating}
                      className="w-full bg-[#a3e635] hover:bg-[#8ecc2a] text-black font-semibold disabled:opacity-50"
                    >
                      {isEvaluating ? (
                        <>
                          <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>⏳</motion.span>
                          <span className="ml-2">Evaluating...</span>
                        </>
                      ) : (
                        <>
                          Submit for Evaluation
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {/* Feedback */}
                {getTaskState(activeTask.id)?.evaluatingFeedback && (
                  <div className="space-y-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50">
                    <div>
                      <p className="text-xs font-semibold text-emerald-400 mb-1">✓ Strengths</p>
                      <p className="text-sm text-slate-300">{getTaskState(activeTask.id)?.evaluatingFeedback?.strengths[0]}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-amber-400 mb-1">→ Improvements</p>
                      <p className="text-sm text-slate-300">{getTaskState(activeTask.id)?.evaluatingFeedback?.improvements[0]}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-400 mb-1">→ Next Steps</p>
                      <p className="text-sm text-slate-300">{getTaskState(activeTask.id)?.evaluatingFeedback?.nextSteps[0]}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
