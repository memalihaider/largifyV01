'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar } from '@/components/ui/avatar';
import {
  Calendar,
  Users,
  Star,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  FileText,
  BarChart3,
  Plus
} from 'lucide-react';
import { getMockUser, mockMentorSessions, getMockMentorSessions, mockStartups, mockStats } from '@/lib/mock-data';

export default function MentorDashboard() {
  const currentUser = getMockUser('mentor-1');
  const mentorStats = mockStats.dashboard.mentor;
  const sessions = getMockMentorSessions('startup-1');

  const stats = [
    { label: 'Active Mentees', value: mentorStats.activeMentees.toString(), icon: Users },
    { label: 'Sessions This Month', value: mentorStats.sessionsThisMonth.toString(), icon: Calendar },
    { label: 'Impact Score', value: mentorStats.impactScore.toString(), icon: TrendingUp },
    { label: 'Success Rate', value: `${mentorStats.successRate}%`, icon: CheckCircle2 }
  ];

  const getSessionStatusColor = (status: string) => {
    switch(status) {
      case 'scheduled': return 'bg-blue-500/20 text-blue-400';
      case 'completed': return 'bg-green-500/20 text-green-400';
      case 'cancelled': return 'bg-red-500/20 text-red-400';
      default: return 'bg-slate-500/20 text-slate-400';
    }
  };

  const getHealthColor = (health: number | undefined) => {
    if (!health) return 'bg-slate-500/20 text-slate-400';
    if (health >= 75) return 'bg-green-500/20 text-green-400';
    if (health >= 50) return 'bg-yellow-500/20 text-yellow-400';
    return 'bg-red-500/20 text-red-400';
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 heading-gradient">Welcome, {currentUser?.name}</h1>
          <p className="text-white/80">Manage your mentorship and impact startups</p>
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

        {/* Tabs */}
        <Tabs defaultValue="sessions" className="space-y-6">
          <TabsList className="bg-slate-800 border-b border-slate-700">
            <TabsTrigger value="sessions">Sessions</TabsTrigger>
            <TabsTrigger value="startups">Assigned Startups</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Sessions Tab */}
          <TabsContent value="sessions" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Upcoming Sessions */}
              <div className="lg:col-span-2">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5" /> Upcoming Sessions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {sessions
                      .filter(s => s.status === 'scheduled')
                      .map((session) => {
                        const scheduledDate = session.scheduled_at ? new Date(session.scheduled_at) : new Date();
                        return (
                        <div key={session.id} className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h4 className="font-semibold text-white">Startup Mentoring</h4>
                              <p className="text-sm text-slate-400 mt-1">{scheduledDate.toLocaleDateString()} at {scheduledDate.toLocaleTimeString()}</p>
                            </div>
                            <Badge className="bg-blue-500/20 text-blue-400">scheduled</Badge>
                          </div>
                          <p className="text-sm text-slate-300 mb-3">{session.ai_prep_summary || 'No preparation summary available'}</p>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-violet-600 hover:bg-violet-700">
                              <MessageSquare className="w-3 h-3 mr-1" /> Join
                            </Button>
                            <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">View Details</Button>
                          </div>
                        </div>
                      );
                      })}
                    {sessions.filter(s => s.status === 'scheduled').length === 0 && (
                      <p className="text-slate-400 text-center py-8">No upcoming sessions scheduled</p>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Session Stats */}
              <div className="space-y-6">
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-violet-400 mb-2">{mentorStats.sessionsThisMonth}</p>
                    <p className="text-xs text-slate-400">sessions completed</p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white text-sm">Hours Contributed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-green-400 mb-2">{mentorStats.hoursContributed}</p>
                    <p className="text-xs text-slate-400">total mentoring hours</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Completed Sessions */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> Completed Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {sessions
                  .filter(s => s.status === 'completed')
                  .map((session) => {
                    const sessionDate = session.scheduled_at ? new Date(session.scheduled_at) : new Date();
                    return (
                    <div key={session.id} className="p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white">Startup Mentoring</h4>
                        <div className="flex items-center gap-2">
                          {session.feedback_rating && (
                            <div className="flex items-center gap-1">
                              {[...Array(session.feedback_rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mb-2">{sessionDate.toLocaleDateString()}</p>
                      {session.mentor_notes && (
                        <p className="text-sm text-slate-300">{session.mentor_notes}</p>
                      )}
                    </div>
                  );
                  })}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Startups Tab */}
          <TabsContent value="startups" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5" /> Assigned Startups
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockStartups.map((startup) => (
                  <div key={startup.id} className="p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-white">{startup.name}</h4>
                        <p className="text-xs text-slate-400 mt-1">{startup.description}</p>
                      </div>
                      <Badge className={getHealthColor(startup.health_score)}>
                        Health: {startup.health_score}%
                      </Badge>
                    </div>
                    <div className="flex gap-4 text-xs text-slate-400 mb-3">
                      <span>Stage: <span className="text-white font-medium">{startup.stage}</span></span>
                      <span>Team: <span className="text-white font-medium">3 members</span></span>
                      <span>Last active: <span className="text-white font-medium">2 days ago</span></span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                        <MessageSquare className="w-3 h-3 mr-1" /> Message
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
                        View Dashboard
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-6">
                  <Avatar 
                    src={currentUser?.avatar}
                    fallback={currentUser?.name}
                    size="lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{currentUser?.name}</h3>
                    <p className="text-slate-400 mb-4">{currentUser?.bio}</p>
                    <div className="flex gap-2">
                      <Badge className="bg-violet-500/20 text-violet-400">Verified Mentor</Badge>
                      <Badge className="bg-green-500/20 text-green-400">{mentorStats.successRate}% Success Rate</Badge>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-6">
                  <h4 className="font-semibold text-white mb-4">Expertise Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {mentorStats.expertiseAreas.map((area, i) => (
                      <Badge key={i} variant="outline" className="border-slate-600 text-slate-300">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-700 pt-6">
                  <h4 className="font-semibold text-white mb-4">Statistics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-slate-400 text-sm">Years as Mentor</p>
                      <p className="text-2xl font-bold text-white">8</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Total Mentees</p>
                      <p className="text-2xl font-bold text-white">24</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Successful Exits</p>
                      <p className="text-2xl font-bold text-white">5</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Avg Rating</p>
                      <p className="text-2xl font-bold text-yellow-400">4.8/5</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-violet-600 hover:bg-violet-700">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
