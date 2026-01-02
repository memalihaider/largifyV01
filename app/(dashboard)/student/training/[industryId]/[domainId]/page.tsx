'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Clock,
  Target,
  ArrowRight,
  CheckCircle,
  Circle,
  Play,
  FileText,
  Video,
  Code,
  Brain,
  Award,
  Lock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NanoSkill {
  id: string;
  name: string;
  description: string;
  modules: number;
  duration: string;
  status: 'available' | 'in-progress' | 'completed' | 'locked';
  progress?: number;
}

interface DomainData {
  id: string;
  name: string;
  description: string;
  industryId: string;
  industryName: string;
  nanoSkills: NanoSkill[];
}

// Sample data for domains
const domainsData: Record<string, Record<string, DomainData>> = {
  'it': {
    'cybersecurity': {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Protect systems and networks from digital attacks. Learn to identify vulnerabilities, implement security measures, and respond to incidents.',
      industryId: 'it',
      industryName: 'Information Technology',
      nanoSkills: [
        { id: 'network-security', name: 'Network Security Fundamentals', description: 'Understand network protocols and security', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'ethical-hacking', name: 'Ethical Hacking Basics', description: 'Learn penetration testing techniques', modules: 6, duration: '4 hours', status: 'available' },
        { id: 'security-tools', name: 'Security Tools & Software', description: 'Master essential security tools', modules: 4, duration: '2.5 hours', status: 'available' },
        { id: 'incident-response', name: 'Incident Response', description: 'Handle security incidents effectively', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'compliance', name: 'Security Compliance', description: 'Navigate GDPR, SOC2, and more', modules: 4, duration: '2.5 hours', status: 'locked' },
        { id: 'cloud-security', name: 'Cloud Security', description: 'Secure cloud infrastructure', modules: 6, duration: '4 hours', status: 'locked' },
        { id: 'threat-intel', name: 'Threat Intelligence', description: 'Analyze and predict threats', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'security-audit', name: 'Security Auditing', description: 'Conduct comprehensive audits', modules: 4, duration: '2 hours', status: 'locked' }
      ]
    },
    'ai-ml': {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      description: 'Build intelligent systems that learn and adapt. Master the fundamentals of AI, neural networks, and practical ML applications.',
      industryId: 'it',
      industryName: 'Information Technology',
      nanoSkills: [
        { id: 'ml-fundamentals', name: 'Machine Learning Fundamentals', description: 'Core ML concepts and algorithms', modules: 6, duration: '4 hours', status: 'available' },
        { id: 'python-ml', name: 'Python for ML', description: 'Python libraries for machine learning', modules: 5, duration: '3.5 hours', status: 'available' },
        { id: 'neural-networks', name: 'Neural Networks', description: 'Deep learning architecture basics', modules: 7, duration: '5 hours', status: 'available' },
        { id: 'nlp', name: 'Natural Language Processing', description: 'Process and analyze text data', modules: 6, duration: '4 hours', status: 'locked' },
        { id: 'computer-vision', name: 'Computer Vision', description: 'Image recognition and processing', modules: 6, duration: '4 hours', status: 'locked' },
        { id: 'model-deployment', name: 'Model Deployment', description: 'Deploy ML models to production', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'mlops', name: 'MLOps Fundamentals', description: 'ML operations and pipelines', modules: 5, duration: '3.5 hours', status: 'locked' },
        { id: 'gen-ai', name: 'Generative AI', description: 'Build with LLMs and generative models', modules: 8, duration: '5 hours', status: 'locked' },
        { id: 'ai-ethics', name: 'AI Ethics & Responsibility', description: 'Ethical AI development', modules: 4, duration: '2 hours', status: 'locked' },
        { id: 'ai-products', name: 'AI Product Development', description: 'Build AI-powered products', modules: 6, duration: '4 hours', status: 'locked' }
      ]
    },
    'web-dev': {
      id: 'web-dev',
      name: 'Web & App Development',
      description: 'Create modern web and mobile applications. From frontend to backend, master the full development stack.',
      industryId: 'it',
      industryName: 'Information Technology',
      nanoSkills: [
        { id: 'html-css', name: 'HTML & CSS Mastery', description: 'Foundation of web development', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'javascript', name: 'JavaScript Essentials', description: 'Core JavaScript programming', modules: 7, duration: '5 hours', status: 'available' },
        { id: 'react', name: 'React Development', description: 'Build modern React applications', modules: 8, duration: '6 hours', status: 'available' },
        { id: 'nextjs', name: 'Next.js Framework', description: 'Full-stack React framework', modules: 6, duration: '4 hours', status: 'available' },
        { id: 'nodejs', name: 'Node.js Backend', description: 'Server-side JavaScript', modules: 6, duration: '4 hours', status: 'locked' },
        { id: 'databases', name: 'Database Design', description: 'SQL and NoSQL databases', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'api-design', name: 'API Design', description: 'RESTful and GraphQL APIs', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'mobile-dev', name: 'Mobile Development', description: 'React Native basics', modules: 6, duration: '4 hours', status: 'locked' },
        { id: 'testing', name: 'Testing & QA', description: 'Unit and integration testing', modules: 4, duration: '2.5 hours', status: 'locked' },
        { id: 'deployment', name: 'Deployment & CI/CD', description: 'Deploy and automate releases', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'performance', name: 'Web Performance', description: 'Optimize for speed', modules: 4, duration: '2 hours', status: 'locked' },
        { id: 'security-web', name: 'Web Security', description: 'Secure web applications', modules: 4, duration: '2.5 hours', status: 'locked' }
      ]
    },
    'devops': {
      id: 'devops',
      name: 'DevOps & Cloud',
      description: 'Automate deployment and manage cloud infrastructure. Bridge development and operations for faster delivery.',
      industryId: 'it',
      industryName: 'Information Technology',
      nanoSkills: [
        { id: 'linux', name: 'Linux Fundamentals', description: 'Command line and system admin', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'docker', name: 'Docker & Containers', description: 'Containerization basics', modules: 6, duration: '4 hours', status: 'available' },
        { id: 'kubernetes', name: 'Kubernetes Basics', description: 'Container orchestration', modules: 7, duration: '5 hours', status: 'available' },
        { id: 'ci-cd', name: 'CI/CD Pipelines', description: 'Automate build and deploy', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'aws', name: 'AWS Essentials', description: 'Amazon Web Services basics', modules: 8, duration: '6 hours', status: 'locked' },
        { id: 'terraform', name: 'Infrastructure as Code', description: 'Terraform and IaC', modules: 5, duration: '3.5 hours', status: 'locked' },
        { id: 'monitoring', name: 'Monitoring & Logging', description: 'Observability stack', modules: 4, duration: '2.5 hours', status: 'locked' },
        { id: 'gitops', name: 'GitOps Practices', description: 'Git-based operations', modules: 4, duration: '2 hours', status: 'locked' },
        { id: 'security-devops', name: 'DevSecOps', description: 'Security in DevOps', modules: 5, duration: '3 hours', status: 'locked' }
      ]
    },
    'data-eng': {
      id: 'data-eng',
      name: 'Data Engineering',
      description: 'Design and build data pipelines and systems. Transform raw data into actionable insights.',
      industryId: 'it',
      industryName: 'Information Technology',
      nanoSkills: [
        { id: 'sql-advanced', name: 'Advanced SQL', description: 'Complex queries and optimization', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'python-data', name: 'Python for Data', description: 'Data manipulation with Python', modules: 6, duration: '4 hours', status: 'available' },
        { id: 'etl', name: 'ETL Processes', description: 'Extract, transform, load', modules: 5, duration: '3.5 hours', status: 'available' },
        { id: 'data-warehouse', name: 'Data Warehousing', description: 'Design data warehouses', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'spark', name: 'Apache Spark', description: 'Big data processing', modules: 6, duration: '4 hours', status: 'locked' },
        { id: 'streaming', name: 'Data Streaming', description: 'Real-time data pipelines', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'data-quality', name: 'Data Quality', description: 'Ensure data accuracy', modules: 4, duration: '2 hours', status: 'locked' }
      ]
    }
  },
  'business': {
    'startup-mgmt': {
      id: 'startup-mgmt',
      name: 'Startup Management',
      description: 'Launch and grow your startup from idea to scale. Learn the frameworks used by successful founders.',
      industryId: 'business',
      industryName: 'Business & Entrepreneurship',
      nanoSkills: [
        { id: 'idea-validation', name: 'Idea Validation', description: 'Test ideas before building', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'business-model', name: 'Business Model Design', description: 'Create sustainable models', modules: 6, duration: '4 hours', status: 'available' },
        { id: 'mvp', name: 'MVP Development', description: 'Build minimum viable products', modules: 5, duration: '3.5 hours', status: 'available' },
        { id: 'customer-discovery', name: 'Customer Discovery', description: 'Find and understand customers', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'pitching', name: 'Pitching & Storytelling', description: 'Communicate your vision', modules: 4, duration: '2.5 hours', status: 'locked' },
        { id: 'fundraising', name: 'Fundraising Basics', description: 'Raise capital effectively', modules: 6, duration: '4 hours', status: 'locked' },
        { id: 'team-building', name: 'Team Building', description: 'Build founding teams', modules: 4, duration: '2.5 hours', status: 'locked' },
        { id: 'scaling', name: 'Scaling Operations', description: 'Grow without breaking', modules: 5, duration: '3.5 hours', status: 'locked' },
        { id: 'exit-strategy', name: 'Exit Strategies', description: 'Plan for success', modules: 4, duration: '2 hours', status: 'locked' },
        { id: 'legal-startup', name: 'Legal for Startups', description: 'Navigate legal basics', modules: 4, duration: '2.5 hours', status: 'locked' }
      ]
    },
    'product-mgmt': {
      id: 'product-mgmt',
      name: 'Product Management',
      description: 'Lead product strategy and roadmap execution. Bridge business, design, and engineering.',
      industryId: 'business',
      industryName: 'Business & Entrepreneurship',
      nanoSkills: [
        { id: 'product-strategy', name: 'Product Strategy', description: 'Define product direction', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'user-research', name: 'User Research', description: 'Understand user needs', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'roadmapping', name: 'Roadmapping', description: 'Plan product evolution', modules: 4, duration: '2.5 hours', status: 'available' },
        { id: 'prioritization', name: 'Prioritization Frameworks', description: 'Decide what to build', modules: 4, duration: '2 hours', status: 'locked' },
        { id: 'metrics', name: 'Product Metrics', description: 'Measure product success', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'agile-pm', name: 'Agile for PMs', description: 'Agile product management', modules: 4, duration: '2.5 hours', status: 'locked' },
        { id: 'stakeholder', name: 'Stakeholder Management', description: 'Align stakeholders', modules: 3, duration: '2 hours', status: 'locked' },
        { id: 'launch', name: 'Product Launch', description: 'Go-to-market execution', modules: 4, duration: '2.5 hours', status: 'locked' }
      ]
    }
  },
  'marketing': {
    'paid-ads': {
      id: 'paid-ads',
      name: 'Paid Advertising',
      description: 'Master Facebook, Google, and social ads. Drive growth through paid acquisition channels.',
      industryId: 'marketing',
      industryName: 'Marketing & Growth',
      nanoSkills: [
        { id: 'fb-ads', name: 'Facebook Ads Mastery', description: 'Meta advertising platform', modules: 7, duration: '5 hours', status: 'available' },
        { id: 'google-ads', name: 'Google Ads', description: 'Search and display ads', modules: 6, duration: '4 hours', status: 'available' },
        { id: 'ad-creative', name: 'Ad Creative Design', description: 'Create converting ads', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'audience', name: 'Audience Targeting', description: 'Find the right audience', modules: 4, duration: '2.5 hours', status: 'locked' },
        { id: 'retargeting', name: 'Retargeting Strategies', description: 'Re-engage visitors', modules: 4, duration: '2 hours', status: 'locked' },
        { id: 'ad-analytics', name: 'Ad Analytics', description: 'Measure and optimize', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'budget', name: 'Budget Management', description: 'Optimize ad spend', modules: 4, duration: '2 hours', status: 'locked' },
        { id: 'tiktok-ads', name: 'TikTok Ads', description: 'Short-form video ads', modules: 4, duration: '2.5 hours', status: 'locked' }
      ]
    },
    'seo': {
      id: 'seo',
      name: 'SEO Systems',
      description: 'Rank higher and drive organic traffic. Build sustainable search visibility.',
      industryId: 'marketing',
      industryName: 'Marketing & Growth',
      nanoSkills: [
        { id: 'seo-fundamentals', name: 'SEO Fundamentals', description: 'Core SEO concepts', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'keyword-research', name: 'Keyword Research', description: 'Find winning keywords', modules: 4, duration: '2.5 hours', status: 'available' },
        { id: 'on-page', name: 'On-Page SEO', description: 'Optimize page content', modules: 5, duration: '3 hours', status: 'available' },
        { id: 'technical-seo', name: 'Technical SEO', description: 'Site structure and speed', modules: 5, duration: '3 hours', status: 'locked' },
        { id: 'link-building', name: 'Link Building', description: 'Build quality backlinks', modules: 4, duration: '2.5 hours', status: 'locked' },
        { id: 'local-seo', name: 'Local SEO', description: 'Rank in local search', modules: 3, duration: '2 hours', status: 'locked' },
        { id: 'seo-tools', name: 'SEO Tools & Analytics', description: 'Master SEO tools', modules: 4, duration: '2.5 hours', status: 'locked' }
      ]
    }
  }
};

// Default data for domains not explicitly defined
const getDefaultDomain = (industryId: string, domainId: string): DomainData => ({
  id: domainId,
  name: domainId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
  description: 'Master essential skills in this domain through structured learning paths.',
  industryId: industryId,
  industryName: industryId.charAt(0).toUpperCase() + industryId.slice(1),
  nanoSkills: [
    { id: 'skill-1', name: 'Fundamentals', description: 'Core concepts and basics', modules: 5, duration: '3 hours', status: 'available' },
    { id: 'skill-2', name: 'Intermediate Skills', description: 'Build on the basics', modules: 6, duration: '4 hours', status: 'available' },
    { id: 'skill-3', name: 'Practical Application', description: 'Apply in real scenarios', modules: 5, duration: '3.5 hours', status: 'available' },
    { id: 'skill-4', name: 'Advanced Techniques', description: 'Master advanced concepts', modules: 6, duration: '4 hours', status: 'locked' },
    { id: 'skill-5', name: 'Industry Best Practices', description: 'Learn from experts', modules: 4, duration: '2.5 hours', status: 'locked' },
    { id: 'skill-6', name: 'Capstone Project', description: 'Real-world project', modules: 3, duration: '4 hours', status: 'locked' }
  ]
});

export default function DomainPage() {
  const router = useRouter();
  const params = useParams();
  const industryId = params.industryId as string;
  const domainId = params.domainId as string;
  
  const domain = domainsData[industryId]?.[domainId] || getDefaultDomain(industryId, domainId);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const toggleSkill = (skillId: string) => {
    setSelectedSkills(prev => 
      prev.includes(skillId) 
        ? prev.filter(id => id !== skillId)
        : [...prev, skillId]
    );
  };

  const availableSkills = domain.nanoSkills.filter(s => s.status === 'available');
  const lockedSkills = domain.nanoSkills.filter(s => s.status === 'locked');

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-200 font-sans">
      {/* Header */}
      <div className="border-b border-slate-800/50 mb-8 pb-6">
        <Button
          onClick={() => router.push(`/student/training/${industryId}`)}
          variant="ghost"
          className="text-slate-400 hover:text-white mb-6 flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to {domain.industryName}
        </Button>
        
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{domain.industryName}</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-xs font-bold text-[#a3e635] uppercase tracking-widest">{domain.name}</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{domain.name}</h1>
          <p className="text-slate-400 text-lg max-w-2xl">{domain.description}</p>
        </div>
      </div>

      {/* Learning Path Progress */}
      <div className="bg-gradient-to-r from-[#111927] to-[#1a1f3a] border border-slate-800 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Your Learning Path</h2>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg">
            <CheckCircle className="w-4 h-4 text-[#a3e635]" />
            <span className="text-sm text-white">Industry Selected</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-lg">
            <CheckCircle className="w-4 h-4 text-[#a3e635]" />
            <span className="text-sm text-white">Domain Selected</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center gap-2 bg-[#a3e635]/20 border border-[#a3e635]/30 px-3 py-2 rounded-lg">
            <span className="text-sm text-[#a3e635] font-medium">Choose Nano-Skills</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-600" />
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg opacity-50">
            <span className="text-sm text-slate-400">Start Learning</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Nano-Skills', value: domain.nanoSkills.length, icon: <Target className="w-4 h-4" /> },
          { label: 'Total Modules', value: domain.nanoSkills.reduce((acc, s) => acc + s.modules, 0), icon: <BookOpen className="w-4 h-4" /> },
          { label: 'Total Duration', value: `${domain.nanoSkills.reduce((acc, s) => acc + parseFloat(s.duration), 0).toFixed(0)}h`, icon: <Clock className="w-4 h-4" /> },
          { label: 'Certificate', value: '1 Track', icon: <Award className="w-4 h-4" /> }
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#111927] border border-slate-800 rounded-lg p-4 flex items-center gap-3">
            <div className="text-[#a3e635]">{stat.icon}</div>
            <div>
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Selection Info */}
      {selectedSkills.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#a3e635]/10 border border-[#a3e635]/30 rounded-lg p-4 mb-6 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#a3e635]" />
            <span className="text-white font-medium">{selectedSkills.length} nano-skill(s) selected</span>
          </div>
          <Button 
            onClick={() => router.push(`/student/training/${industryId}/${domainId}/learn?skills=${selectedSkills.join(',')}`)}
            className="bg-[#a3e635] hover:bg-[#bef264] text-black font-bold"
          >
            Start Learning
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      )}

      {/* Available Nano-Skills */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Available Nano-Skills 
          <span className="text-sm font-normal text-slate-500 ml-2">Select skills to start learning</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableSkills.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card 
                className={cn(
                  "bg-[#111927] border-slate-800 cursor-pointer transition-all",
                  selectedSkills.includes(skill.id) 
                    ? "border-[#a3e635] ring-1 ring-[#a3e635]/20" 
                    : "hover:border-slate-700"
                )}
                onClick={() => toggleSkill(skill.id)}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all",
                      selectedSkills.includes(skill.id)
                        ? "border-[#a3e635] bg-[#a3e635]"
                        : "border-slate-600"
                    )}>
                      {selectedSkills.includes(skill.id) && (
                        <CheckCircle className="w-4 h-4 text-black" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{skill.name}</h3>
                      <p className="text-sm text-slate-500 mb-3">{skill.description}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {skill.modules} modules
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {skill.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Locked Nano-Skills */}
      {lockedSkills.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5 text-slate-600" />
            Locked Nano-Skills 
            <span className="text-sm font-normal text-slate-500 ml-2">Complete available skills to unlock</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lockedSkills.map((skill, idx) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="bg-[#111927]/50 border-slate-800/50 opacity-60">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Lock className="w-3 h-3 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-400 mb-1">{skill.name}</h3>
                        <p className="text-sm text-slate-600 mb-3">{skill.description}</p>
                        <div className="flex items-center gap-4 text-xs text-slate-600">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {skill.modules} modules
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {skill.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
