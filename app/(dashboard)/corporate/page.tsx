'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, 
  TrendingUp,
  Target,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  BarChart3,
  DollarSign
} from 'lucide-react';
import { mockStartups, mockStats, getMockCorporateProblems, getMockPilotProjects } from '@/lib/mock-data';

export default function CorporateDashboard() {
  const corporateStats = mockStats.dashboard.corporate;
  const problemStatements = getMockCorporateProblems('corp-1');
  const pilotProjects = getMockPilotProjects();

  const stats = [
    { label: 'Problem Statements', value: corporateStats.problemStatements.toString(), icon: Target },
    { label: 'Active Matches', value: corporateStats.activeMatches.toString(), icon: TrendingUp },
    { label: 'Active Pilots', value: corporateStats.activePilots.toString(), icon: CheckCircle2 },
    { label: 'Success Rate', value: `${corporateStats.successRate}%`, icon: TrendingUp }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 heading-gradient">Corporate Partnership Hub</h1>
            <p className="text-white/80">Connect with innovative startups to solve business challenges</p>
          </div>
          <Button className="bg-violet-600 hover:bg-violet-700">
            <Plus className="w-4 h-4 mr-2" /> Post Problem Statement
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

        {/* Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5" /> Innovation Spend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-400">PKR {(corporateStats.innovationSpend / 1000000).toFixed(1)}M</p>
              <p className="text-sm text-slate-400 mt-2">Total allocation for partnerships</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> Deals in Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-violet-400">{corporateStats.dealsInProgress}</p>
              <p className="text-sm text-slate-400 mt-2">Negotiations underway</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="matches" className="space-y-6">
          <TabsList className="bg-slate-800 border-b border-slate-700">
            <TabsTrigger value="matches">Startup Matches</TabsTrigger>
            <TabsTrigger value="pilots">Active Pilots</TabsTrigger>
            <TabsTrigger value="problems">Problem Statements</TabsTrigger>
          </TabsList>

          {/* Matches Tab */}
          <TabsContent value="matches" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Matched Startups</CardTitle>
                <CardDescription className="text-slate-400">AI-matched startups for your problem statements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockStartups.slice(0, 3).map((startup) => (
                  <div key={startup.id} className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white">{startup.name}</h4>
                        <p className="text-xs text-slate-400 mt-1">{startup.description}</p>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400">
                        92% Match
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-sm text-slate-400 mb-3">
                      <span>Stage: <span className="text-white font-medium capitalize">{startup.stage}</span></span>
                      <span>Team: <span className="text-white font-medium">3 members</span></span>
                      <span>Raised: <span className="text-white font-medium">PKR {(startup.funding_raised || 0).toLocaleString()}</span></span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                        <MessageSquare className="w-3 h-3 mr-1" /> Message
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                        Propose Pilot
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pilots Tab */}
          <TabsContent value="pilots" className="space-y-4">
            {pilotProjects.map((pilot) => (
              <Card key={pilot.id} className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
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

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-slate-400 text-sm">Project Progress</p>
                        <p className="text-sm font-semibold text-white">{pilot.success_percentage}%</p>
                      </div>
                      <Progress value={pilot.success_percentage || 0} className="h-3" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-slate-400">Budget</p>
                        <p className="font-semibold text-white">PKR {(pilot.budget || 0).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Timeline</p>
                        <p className="font-semibold text-white">6 weeks</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Deliverables</p>
                        <p className="font-semibold text-white text-right">
                          {pilot.expected_deliverables?.split(',').length || 0}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                        View Dashboard
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                        Track Milestones
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Problems Tab */}
          <TabsContent value="problems" className="space-y-4">
            {problemStatements.length > 0 ? (
              problemStatements.map((problem) => (
                <Card key={problem.id} className="bg-slate-800 border-slate-700">
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{problem.title}</h3>
                        <p className="text-sm text-slate-400 mt-2">{problem.description}</p>
                        <p className="text-xs text-slate-500 mt-2">{problem.business_context}</p>
                      </div>
                      <Badge className={problem.is_active ? 'bg-green-500/20 text-green-400' : 'bg-slate-500/20 text-slate-400'}>
                        {problem.is_active ? 'Active' : 'Closed'}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-slate-400">Budget Range</p>
                        <p className="font-semibold text-white">PKR {(problem.budget_range_max || 0).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Timeline</p>
                        <p className="font-semibold text-white">{problem.timeline_months} months</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Matches</p>
                        <p className="font-semibold text-white">{problem.match_count}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Views</p>
                        <p className="font-semibold text-white">{problem.views_count}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                        View Matches
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                        Edit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="pt-6 text-center py-12">
                  <p className="text-slate-400 mb-4">No problem statements yet</p>
                  <Button className="bg-violet-600 hover:bg-violet-700">
                    <Plus className="w-4 h-4 mr-2" /> Post Your First Problem
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
