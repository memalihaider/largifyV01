'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Target,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  Download,
  Settings
} from 'lucide-react';
import { mockIdeas, mockStartups, mockStats, getMockCorporateProblems, getMockPilotProjects } from '@/lib/mock-data';

export default function AdminDashboard() {
  const adminStats = mockStats.dashboard.admin;
  const stats = [
    { label: 'Total Students', value: adminStats.totalStudents.toString(), icon: Users },
    { label: 'Ideas Submitted', value: adminStats.ideasSubmitted.toString(), icon: Lightbulb },
    { label: 'Validated Startups', value: adminStats.validatedStartups.toString(), icon: CheckCircle2 },
    { label: 'Pilot Ready', value: adminStats.pilotReady.toString(), icon: Target }
  ];

  const problemStatements = getMockCorporateProblems();
  const pilotProjects = getMockPilotProjects();

  const getIdeaStatusDistribution = () => {
    const statuses = mockIdeas.reduce((acc: any, idea) => {
      const status = idea.status || 'draft';
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {});
    return statuses;
  };

  const getStartupStageDistribution = () => {
    const stages = mockStartups.reduce((acc: any, startup) => {
      const stage = startup.stage || 'idea';
      acc[stage] = (acc[stage] || 0) + 1;
      return acc;
    }, {});
    return stages;
  };

  const ideaDistribution = getIdeaStatusDistribution();
  const stageDistribution = getStartupStageDistribution();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 heading-gradient">Admin Dashboard</h1>
            <p className="text-white/80">Cohort analytics and oversight</p>
          </div>
          <Button className="bg-violet-600 hover:bg-violet-700">
            <Download className="w-4 h-4 mr-2" /> Generate Report
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                    </div>
                    <Icon className="w-8 h-8 text-violet-400" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Health Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Average Readiness Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-slate-400">Current Cohort</p>
                    <p className="text-2xl font-bold text-violet-400">{adminStats.avgReadinessScore}%</p>
                  </div>
                  <Progress value={adminStats.avgReadinessScore} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Cohort Health</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-slate-400">Overall Health</p>
                    <p className="text-2xl font-bold text-green-400">{adminStats.cohortHealth}%</p>
                  </div>
                  <Progress value={adminStats.cohortHealth} className="h-3" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pipeline" className="space-y-6">
          <TabsList className="bg-slate-800 border-b border-slate-700">
            <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
            <TabsTrigger value="ideas">Ideas Distribution</TabsTrigger>
            <TabsTrigger value="problems">Corporate Problems</TabsTrigger>
            <TabsTrigger value="pilots">Pilot Projects</TabsTrigger>
          </TabsList>

          {/* Pipeline Tab */}
          <TabsContent value="pipeline" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Startup Pipeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {Object.entries(stageDistribution).map(([stage, count]) => (
                    <div key={stage}>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-slate-300 capitalize">{stage}</p>
                        <p className="text-sm font-semibold text-violet-400">{String(count)} startups</p>
                      </div>
                      <Progress value={(Number(count) / mockStartups.length) * 100} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Ideas */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Ideas (For Review)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockIdeas.filter(i => i.status === 'submitted' || i.status === 'draft').slice(0, 5).map((idea) => (
                    <div key={idea.id} className="p-4 bg-slate-700/50 rounded-lg flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{idea.title}</h4>
                        <p className="text-sm text-slate-400 mt-1">By: {idea.user_id}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">Approve</Button>
                        <Button size="sm" variant="outline" className="border-red-600 text-red-400">Reject</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ideas Distribution */}
          <TabsContent value="ideas" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Idea Status Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(ideaDistribution).map(([status, count]) => (
                    <div key={status}>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-slate-300 capitalize">{status}</p>
                        <p className="text-sm font-semibold text-violet-400">{String(count)} ideas</p>
                      </div>
                      <Progress value={(Number(count) / mockIdeas.length) * 100} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Corporate Problems */}
          <TabsContent value="problems" className="space-y-4">
            {problemStatements.map((problem) => (
              <Card key={problem.id} className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                      <p className="text-sm text-slate-400 mt-2">{problem.description}</p>
                    </div>
                    <Badge className={problem.is_active ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'}>
                      {problem.is_active ? 'Active' : 'Closed'}
                    </Badge>
                  </div>
                  <div className="flex gap-6 text-sm text-slate-400 mb-4">
                    <span>Matches: <span className="text-white font-medium">{problem.match_count}</span></span>
                    <span>Views: <span className="text-white font-medium">{problem.views_count}</span></span>
                    <span>Budget: <span className="text-white font-medium">PKR {problem.budget_range_max?.toLocaleString()}</span></span>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                      View Matches
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Pilot Projects */}
          <TabsContent value="pilots" className="space-y-4">
            {pilotProjects.map((pilot) => (
              <Card key={pilot.id} className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{pilot.title}</h3>
                      <p className="text-sm text-slate-400 mt-2">{pilot.description}</p>
                    </div>
                    <Badge className={`${
                      pilot.status === 'active' ? 'bg-blue-500/20 text-blue-400' :
                      pilot.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {pilot.status}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-slate-400 text-sm">Progress</p>
                        <p className="text-sm font-semibold text-white">{pilot.success_percentage}%</p>
                      </div>
                      <Progress value={pilot.success_percentage || 0} className="h-2" />
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm text-slate-400 mt-4">
                    <span>Budget: <span className="text-white font-medium">PKR {pilot.budget?.toLocaleString()}</span></span>
                    <span>Duration: <span className="text-white font-medium">6 weeks</span></span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
