// lib/mock-data/student-portal.ts
// Complete Student Portal Case Study Engine with Advanced Features

export type StudentDomain = 
  | "cybersecurity" 
  | "ai" 
  | "development" 
  | "ecommerce" 
  | "marketing";

export type StudentNanoNiche = 
  | "web-security" | "soc-operations" | "cloud-security" | "grc-compliance" | "threat-intel"
  | "business-automation" | "nlp-chatbots" | "computer-vision" | "ai-healthcare" | "ai-finance"
  | "saas-fullstack" | "mobile-apps" | "enterprise-systems" | "api-backend" | "devops"
  | "shopify-d2c" | "supply-chain" | "payment-checkout" | "marketplace"
  | "performance-marketing" | "seo-systems" | "crm-funnels" | "marketing-automation";

export type CaseStudyLevel = "beginner" | "intermediate" | "advanced";

export type TaskType = "learning" | "exercise" | "submission" | "discussion" | "group-work";

export type TaskStatus = "locked" | "active" | "in-progress" | "submitted" | "completed";

export interface CaseStudyTask {
  id: string;
  phase: number;
  title: string;
  description: string;
  type: TaskType;
  objectives: string[];
  expectedOutput: string;
  hints: {
    basic: string;
    intermediate: string;
    advanced: string;
  };
  resources: {
    title: string;
    url: string;
    type: "video" | "article" | "tool" | "template";
  }[];
  estimatedMinutes: number;
}

export interface CaseStudyPhase {
  phaseNumber: number;
  title: string;
  description: string;
  learningObjectives: string[];
  tasks: CaseStudyTask[];
  estimatedHours: number;
  successCriteria: string[];
}

export interface CaseStudySubmission {
  taskId: string;
  studentId: string;
  content: string;
  submittedAt: Date;
  aiEvaluationScore?: number;
  aiEvaluationFeedback?: {
    strengths: string[];
    improvements: string[];
    nextSteps: string[];
  };
  mentorFeedback?: string;
  revisionsRequested?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  domain: StudentDomain;
  nanoNiche: StudentNanoNiche;
  level: CaseStudyLevel;
  description: string;
  problemStatement: string;
  constraints: string[];
  successCriteria: string[];
  businessImpact: string;
  industryContext: string;
  estimatedHours: number;
  difficulty: number;
  phases: CaseStudyPhase[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface StudentCaseProgress {
  studentId: string;
  caseStudyId: string;
  currentPhase: number;
  completedPhases: number[];
  taskProgress: Map<string, TaskStatus>;
  submissions: CaseStudySubmission[];
  executionPoints: number;
  decisionQualityPoints: number;
  consistencyPoints: number;
  totalScore: number;
  startedAt: Date;
  completedAt?: Date;
}

// ============================================================================
// COMPLETE CASE STUDY DATA
// ============================================================================

export const mockCaseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Securing an SME E-commerce Platform",
    domain: "cybersecurity",
    nanoNiche: "web-security",
    level: "beginner",
    description:
      "Design a comprehensive security architecture for a rapidly growing e-commerce platform serving small and medium enterprises.",
    problemStatement:
      "An SME running an e-commerce platform processes 10K+ transactions daily but lacks a structured security framework. Recent competitor breach has prompted urgent security improvements.",
    constraints: [
      "$5,000 budget for security measures",
      "Small security team (2 people)",
      "99.5% uptime requirement",
      "Must maintain customer experience",
      "Legacy payment system integration",
    ],
    successCriteria: [
      "Complete asset inventory",
      "Documented vulnerability assessment",
      "Security control design document",
      "Client-ready security roadmap",
      "Incident response plan",
    ],
    businessImpact:
      "Reduced security breach risk, improved customer trust, compliance with PCI-DSS, estimated cost savings of $50K annually through risk reduction.",
    industryContext:
      "E-commerce platforms face 45% increase in cyber attacks. SMEs are primary targets due to perceived weak defenses.",
    estimatedHours: 25,
    difficulty: 3,
    phases: [
      {
        phaseNumber: 1,
        title: "Understanding the Security Landscape",
        description:
          "Learn about SME threat landscape, identify critical assets, and understand compliance requirements.",
        learningObjectives: [
          "Identify e-commerce threat models",
          "Map business assets and data flows",
          "Understand basic compliance requirements (PCI-DSS, GDPR basics)",
          "Recognize attack vectors targeting e-commerce",
        ],
        tasks: [
          {
            id: "task-1-1",
            phase: 1,
            title: "Document System Architecture",
            description:
              "Create a detailed diagram of the e-commerce platform's current architecture including payment gateway, customer database, and inventory system.",
            type: "submission",
            objectives: [
              "Identify all system components",
              "Map data flows",
              "Locate sensitive data stores",
            ],
            expectedOutput:
              "Architecture diagram with component descriptions and data flow annotations",
            hints: {
              basic: "Start by listing the main system components: web server, database, payment gateway, etc.",
              intermediate:
                "Include external integrations and third-party services in your diagram",
              advanced:
                "Add security zones and trust boundaries to your architecture",
            },
            resources: [
              {
                title: "E-commerce Architecture Basics",
                url: "#",
                type: "article",
              },
              {
                title: "Creating Architecture Diagrams",
                url: "#",
                type: "video",
              },
              {
                title: "Lucidchart Template",
                url: "#",
                type: "tool",
              },
            ],
            estimatedMinutes: 120,
          },
          {
            id: "task-1-2",
            phase: 1,
            title: "Threat Landscape Analysis",
            description:
              "Research and document threats specific to e-commerce platforms in the SME segment.",
            type: "learning",
            objectives: [
              "Understand OWASP Top 10 threats",
              "Identify SME-specific threats",
              "Recognize payment-related vulnerabilities",
            ],
            expectedOutput:
              "Threat analysis document listing top 10 threats relevant to this platform",
            hints: {
              basic: "Start with OWASP Top 10 - which ones apply to e-commerce?",
              intermediate:
                "Consider threats from both external attackers and internal actors",
              advanced:
                "Include threat actor profiles and motivations for SME e-commerce targets",
            },
            resources: [
              {
                title: "OWASP Top 10",
                url: "#",
                type: "article",
              },
              {
                title: "E-commerce Security Guide",
                url: "#",
                type: "article",
              },
              {
                title: "Threat Modeling Video",
                url: "#",
                type: "video",
              },
            ],
            estimatedMinutes: 90,
          },
        ],
        estimatedHours: 4,
        successCriteria: [
          "Architecture diagram completed with all major components",
          "Threat landscape document identifies 5+ relevant threats",
        ],
      },
      {
        phaseNumber: 2,
        title: "Risk Assessment & Prioritization",
        description:
          "Conduct vulnerability assessment, calculate risk scores, and prioritize security measures.",
        learningObjectives: [
          "Perform vulnerability assessment",
          "Calculate risk using likelihood and impact",
          "Prioritize risks based on business impact",
          "Create risk register",
        ],
        tasks: [
          {
            id: "task-2-1",
            phase: 2,
            title: "Vulnerability Assessment",
            description:
              "Identify specific vulnerabilities in the documented architecture. Use both manual analysis and reference vulnerability databases.",
            type: "exercise",
            objectives: [
              "Identify authentication vulnerabilities",
              "Find data protection gaps",
              "Locate network security weaknesses",
            ],
            expectedOutput:
              "Vulnerability list with severity ratings (Critical, High, Medium, Low)",
            hints: {
              basic:
                "For each component, ask: 'What could go wrong here?' and 'Who could do it?'",
              intermediate:
                "Use CVSS calculator to score vulnerabilities. Consider compensating controls.",
              advanced:
                "Identify chains of vulnerabilities that could lead to critical impact",
            },
            resources: [
              {
                title: "CVSS Calculator",
                url: "#",
                type: "tool",
              },
              {
                title: "Vulnerability Databases (CVE, NVD)",
                url: "#",
                type: "article",
              },
              {
                title: "Vulnerability Assessment Methodology",
                url: "#",
                type: "video",
              },
            ],
            estimatedMinutes: 120,
          },
          {
            id: "task-2-2",
            phase: 2,
            title: "Risk Scoring & Prioritization Matrix",
            description:
              "Create a risk matrix plotting likelihood vs impact for each vulnerability and prioritize controls.",
            type: "submission",
            objectives: [
              "Assess likelihood of each threat",
              "Evaluate potential business impact",
              "Create prioritized risk list",
            ],
            expectedOutput:
              "Risk matrix with 20+ vulnerabilities plotted and prioritized action list",
            hints: {
              basic:
                "Likelihood: How often will this happen? Impact: What damage if it happens?",
              intermediate:
                "Consider probability based on threat actor capability and motivation",
              advanced:
                "Factor in dependencies between vulnerabilities and cascading impacts",
            },
            resources: [
              {
                title: "Risk Assessment Framework",
                url: "#",
                type: "article",
              },
              {
                title: "Excel Risk Matrix Template",
                url: "#",
                type: "template",
              },
            ],
            estimatedMinutes: 100,
          },
        ],
        estimatedHours: 4,
        successCriteria: [
          "Vulnerability list includes 15+ specific vulnerabilities",
          "Risk matrix created with likelihood and impact assessments",
          "Top 5 risks clearly prioritized",
        ],
      },
      {
        phaseNumber: 3,
        title: "Security Design & Implementation Plan",
        description:
          "Design security controls and create a realistic, budget-conscious implementation roadmap.",
        learningObjectives: [
          "Design defense-in-depth controls",
          "Consider prevention, detection, and response",
          "Create implementation roadmap within constraints",
          "Document security architecture",
        ],
        tasks: [
          {
            id: "task-3-1",
            phase: 3,
            title: "Security Controls Design",
            description:
              "Design specific controls to mitigate the top 10 prioritized risks within the $5,000 budget.",
            type: "submission",
            objectives: [
              "Design preventive controls",
              "Plan detective controls",
              "Plan corrective procedures",
            ],
            expectedOutput:
              "Security controls document mapping each top risk to designed controls with cost estimates",
            hints: {
              basic:
                "Think about layered defenses: prevention first, then detection, then response",
              intermediate:
                "Many effective controls are free or low-cost (policies, processes, monitoring)",
              advanced:
                "Balance between technical controls and organizational practices. Optimize for ROI.",
            },
            resources: [
              {
                title: "NIST Cybersecurity Framework",
                url: "#",
                type: "article",
              },
              {
                title: "Defense-in-Depth Strategies",
                url: "#",
                type: "video",
              },
              {
                title: "Security Controls Matrix",
                url: "#",
                type: "template",
              },
            ],
            estimatedMinutes: 120,
          },
        ],
        estimatedHours: 2,
        successCriteria: [
          "Controls documented for all top 10 risks",
          "Budget allocation clearly documented",
          "Implementation timeline provided",
        ],
      },
      {
        phaseNumber: 4,
        title: "Business Impact & Client Presentation",
        description:
          "Quantify business value and create a client-ready security roadmap and incident response plan.",
        learningObjectives: [
          "Calculate security ROI",
          "Create executive summary",
          "Develop incident response plan",
          "Present findings professionally",
        ],
        tasks: [
          {
            id: "task-4-1",
            phase: 4,
            title: "Business Impact Analysis & ROI Calculation",
            description:
              "Calculate potential losses from security breaches and demonstrate ROI of proposed security measures.",
            type: "submission",
            objectives: [
              "Estimate breach costs (data loss, downtime, reputation)",
              "Calculate risk reduction from controls",
              "Present financial case for security investment",
            ],
            expectedOutput:
              "Business impact analysis document with ROI calculations and financial projections",
            hints: {
              basic:
                "Average data breach costs for SME: $200K-500K. Downtime: $10K/hour. Reputation: varies.",
              intermediate:
                "Factor in compliance fines (GDPR: 4% revenue, PCI-DSS: $5-100K per incident)",
              advanced:
                "Include risk transfer through insurance and opportunity cost of delayed growth",
            },
            resources: [
              {
                title: "Cost of Data Breach Studies",
                url: "#",
                type: "article",
              },
              {
                title: "Security ROI Calculator",
                url: "#",
                type: "tool",
              },
            ],
            estimatedMinutes: 90,
          },
          {
            id: "task-4-2",
            phase: 4,
            title: "Client-Ready Security Roadmap & Presentation",
            description:
              "Create a professional 3-phase security roadmap and executive presentation for the client.",
            type: "submission",
            objectives: [
              "Create phased implementation plan",
              "Present to non-technical stakeholders",
              "Include metrics and success indicators",
            ],
            expectedOutput:
              "Professional PowerPoint presentation (8-10 slides) with security roadmap and incident response overview",
            hints: {
              basic:
                "Phase 1: Quick wins (policies, monitoring). Phase 2: Medium-term (tools, training). Phase 3: Long-term (integration).",
              intermediate:
                "Use visuals, avoid jargon, emphasize business benefits not technical details",
              advanced:
                "Include KPIs, milestones, and success metrics for each phase",
            },
            resources: [
              {
                title: "Executive Security Briefing Template",
                url: "#",
                type: "template",
              },
              {
                title: "Incident Response Planning Guide",
                url: "#",
                type: "article",
              },
            ],
            estimatedMinutes: 120,
          },
        ],
        estimatedHours: 3,
        successCriteria: [
          "Business impact analysis completed with clear financial justification",
          "Client presentation created (8-10 professional slides)",
          "Roadmap shows clear prioritization and timeline",
        ],
      },
    ],
    tags: ["cybersecurity", "risk-management", "compliance", "architecture"],
    createdAt: new Date("2025-12-01"),
    updatedAt: new Date("2025-12-01"),
  },
  {
    id: "case-2",
    title: "Building an AI Chatbot for Customer Service",
    domain: "ai",
    nanoNiche: "nlp-chatbots",
    level: "beginner",
    description:
      "Develop an NLP-powered customer service chatbot that reduces support costs while maintaining customer satisfaction.",
    problemStatement:
      "Company receives 500+ support tickets daily with average resolution time of 48 hours. Manual support costs $200K annually and customer satisfaction is declining.",
    constraints: [
      "Budget: $30,000 for development and 6 months hosting",
      "Must integrate with existing ticketing system",
      "Fallback to human agents required",
      "Training data limited to 1,000 historical tickets",
      "Must support both web and WhatsApp",
    ],
    successCriteria: [
      "Handle 50% of simple inquiries automatically",
      "Reduce average resolution time to 4 hours",
      "Maintain 85%+ customer satisfaction",
      "Cost under $50 per resolution",
    ],
    businessImpact:
      "Reduce support costs by 40%, improve response time by 95%, increase customer satisfaction to 90%, enable team scaling without proportional cost increase.",
    industryContext:
      "AI chatbots now handle 25% of customer service globally. ROI typically 300-400% within first year.",
    estimatedHours: 30,
    difficulty: 5,
    phases: [
      {
        phaseNumber: 1,
        title: "Problem Understanding & Data Preparation",
        description:
          "Analyze support tickets, understand customer pain points, and prepare training data.",
        learningObjectives: [
          "Analyze customer support patterns",
          "Understand NLP fundamentals",
          "Prepare and clean training data",
          "Define chatbot scope and limitations",
        ],
        tasks: [
          {
            id: "task-1-1",
            phase: 1,
            title: "Support Ticket Analysis",
            description:
              "Analyze 500 historical support tickets to identify patterns, common issues, and resolution strategies.",
            type: "submission",
            objectives: [
              "Categorize tickets by issue type",
              "Identify most common questions",
              "Estimate automation potential",
            ],
            expectedOutput:
              "Analysis report with ticket breakdown, top 20 questions, and automation feasibility estimate",
            hints: {
              basic:
                "Group tickets: billing, technical, feature requests, etc. What are the top 5 categories?",
              intermediate:
                "For top 20 questions, find multiple variations in wording. Can a bot handle these?",
              advanced:
                "Calculate effort to build bot vs manual support. When does ROI break even?",
            },
            resources: [
              {
                title: "Text Analysis Techniques",
                url: "#",
                type: "article",
              },
              {
                title: "Ticket Categorization Template",
                url: "#",
                type: "template",
              },
            ],
            estimatedMinutes: 150,
          },
          {
            id: "task-1-2",
            phase: 1,
            title: "Training Data Preparation",
            description:
              "Clean, label, and structure 1,000 support tickets for NLP model training.",
            type: "exercise",
            objectives: [
              "Clean text data",
              "Label intent and entities",
              "Balance dataset",
              "Create evaluation set",
            ],
            expectedOutput:
              "CSV file with 800 training examples and 200 test examples properly formatted",
            hints: {
              basic:
                "Remove duplicates, fix typos, standardize formatting. Create 50/50 train-test split.",
              intermediate:
                "Label each ticket with intent (billing_query, technical_help, etc.) and key entities",
              advanced:
                "Balance dataset so each intent has similar representation. Weight by importance.",
            },
            resources: [
              {
                title: "Data Cleaning Best Practices",
                url: "#",
                type: "article",
              },
              {
                title: "Python Data Cleaning Tools",
                url: "#",
                type: "tool",
              },
            ],
            estimatedMinutes: 120,
          },
        ],
        estimatedHours: 5,
        successCriteria: [
          "Analysis identifies top 20 questions automatable by bot",
          "Training dataset prepared with 800+ labeled examples",
          "Automation potential report shows 40-60% feasibility",
        ],
      },
      {
        phaseNumber: 2,
        title: "NLP Model Development & Training",
        description:
          "Train and evaluate NLP models for intent classification and response generation.",
        learningObjectives: [
          "Select appropriate NLP frameworks",
          "Train intent classification models",
          "Create response generation system",
          "Evaluate model performance",
        ],
        tasks: [
          {
            id: "task-2-1",
            phase: 2,
            title: "Intent Classification Model Development",
            description:
              "Build and train an NLP model to classify customer inquiries into predefined intents.",
            type: "submission",
            objectives: [
              "Select NLP framework (spaCy, NLTK, or pre-trained)",
              "Train classification model",
              "Achieve 85%+ accuracy",
              "Document model performance",
            ],
            expectedOutput:
              "Trained model (saved as pickle/joblib), performance metrics report, confusion matrix",
            hints: {
              basic:
                "Use pre-trained models like Intent Classification from Hugging Face. Fine-tune on your data.",
              intermediate:
                "Experiment with different architectures. Measure precision/recall for each intent.",
              advanced:
                "Handle edge cases and low-confidence predictions. Implement confidence thresholds.",
            },
            resources: [
              {
                title: "Hugging Face Transformers",
                url: "#",
                type: "tool",
              },
              {
                title: "Intent Classification Tutorial",
                url: "#",
                type: "video",
              },
              {
                title: "Model Evaluation Metrics",
                url: "#",
                type: "article",
              },
            ],
            estimatedMinutes: 180,
          },
        ],
        estimatedHours: 4,
        successCriteria: [
          "Classification model achieves 85%+ accuracy",
          "All 10+ intents have good precision and recall",
          "Model handles variations in customer wording",
        ],
      },
      {
        phaseNumber: 3,
        title: "Chatbot Integration & Testing",
        description:
          "Build the chatbot interface, integrate with existing systems, and conduct user testing.",
        learningObjectives: [
          "Build conversational interface",
          "Integrate with ticketing system",
          "Implement human handoff",
          "Test with real users",
        ],
        tasks: [
          {
            id: "task-3-1",
            phase: 3,
            title: "Chatbot Implementation & Integration",
            description:
              "Build chatbot UI and integrate with support ticketing system and helpdesk platform.",
            type: "submission",
            objectives: [
              "Create chatbot interface",
              "Integrate NLP model",
              "Connect to ticket system",
              "Implement escalation logic",
            ],
            expectedOutput:
              "Working chatbot with integrations, sample conversation flows documented, API documentation",
            hints: {
              basic:
                "Use frameworks like Rasa, Botkit, or Dialogflow. They handle conversation state.",
              intermediate:
                "Integrate with ticketing API. When bot can't help, create a ticket automatically.",
              advanced:
                "Implement context management, multi-turn conversations, and user satisfaction feedback",
            },
            resources: [
              {
                title: "Rasa Framework",
                url: "#",
                type: "tool",
              },
              {
                title: "Chatbot Development Guide",
                url: "#",
                type: "article",
              },
              {
                title: "Integration Patterns",
                url: "#",
                type: "article",
              },
            ],
            estimatedMinutes: 180,
          },
        ],
        estimatedHours: 5,
        successCriteria: [
          "Chatbot handles 50+ conversation flows",
          "Integration with ticketing system working",
          "Human handoff mechanism implemented",
          "Logging and analytics enabled",
        ],
      },
      {
        phaseNumber: 4,
        title: "Deployment, Evaluation & Business Impact",
        description:
          "Deploy chatbot, measure performance metrics, and calculate business impact and ROI.",
        learningObjectives: [
          "Deploy chatbot to production",
          "Monitor performance metrics",
          "Calculate cost savings",
          "Plan improvements",
        ],
        tasks: [
          {
            id: "task-4-1",
            phase: 4,
            title: "Deployment & Monitoring",
            description:
              "Deploy chatbot to production, set up monitoring dashboards, and track key metrics.",
            type: "submission",
            objectives: [
              "Deploy to production environment",
              "Set up monitoring and logging",
              "Create performance dashboard",
              "Plan updates and improvements",
            ],
            expectedOutput:
              "Deployment guide, monitoring dashboard screenshots, initial metrics report",
            hints: {
              basic:
                "Track: conversations handled, handoff rate, satisfaction score, average resolution time",
              intermediate:
                "Use tools like Datadog, New Relic, or cloud monitoring. Set alerts for issues.",
              advanced:
                "A/B test conversation flows, measure long-term user satisfaction, plan continuous improvement",
            },
            resources: [
              {
                title: "Monitoring & Alerting Best Practices",
                url: "#",
                type: "article",
              },
              {
                title: "Analytics Dashboards",
                url: "#",
                type: "tool",
              },
            ],
            estimatedMinutes: 120,
          },
          {
            id: "task-4-2",
            phase: 4,
            title: "ROI Analysis & Business Impact Report",
            description:
              "Analyze chatbot performance, calculate cost savings, and document business impact.",
            type: "submission",
            objectives: [
              "Calculate cost reduction",
              "Measure customer satisfaction impact",
              "Project long-term ROI",
              "Document success metrics",
            ],
            expectedOutput:
              "Executive report with cost analysis, ROI projections, success metrics, and recommendations",
            hints: {
              basic:
                "Measure: tickets handled automatically (50%), resolution time (48h to 4h), cost per ticket",
              intermediate:
                "Calculate savings from reduced manual support and opportunity cost of faster resolution",
              advanced:
                "Factor in customer lifetime value increase from improved satisfaction and retention gains",
            },
            resources: [
              {
                title: "Chatbot ROI Calculator",
                url: "#",
                type: "tool",
              },
              {
                title: "Financial Impact Analysis",
                url: "#",
                type: "article",
              },
            ],
            estimatedMinutes: 100,
          },
        ],
        estimatedHours: 4,
        successCriteria: [
          "Chatbot successfully handles 50%+ of simple inquiries",
          "Average resolution time reduced to under 4 hours",
          "Customer satisfaction at 85%+",
          "Clear ROI and cost savings documented",
        ],
      },
    ],
    tags: ["ai", "nlp", "chatbot", "customer-service", "automation"],
    createdAt: new Date("2025-12-02"),
    updatedAt: new Date("2025-12-02"),
  },
  {
    id: "case-3",
    title: "Full Stack E-commerce Platform Development",
    domain: "development",
    nanoNiche: "saas-fullstack",
    level: "intermediate",
    description:
      "Build a complete SaaS e-commerce platform with product catalog, shopping cart, payment processing, and seller dashboard.",
    problemStatement:
      "Entrepreneurs need affordable, easy-to-use e-commerce solution with built-in seller tools. Existing solutions are expensive ($500/month) or too complex.",
    constraints: [
      "5-month development timeline",
      "Team of 3 developers",
      "$100K budget",
      "Must support 10K+ concurrent users by month 6",
      "Zero data loss requirement",
      "International payment support",
    ],
    successCriteria: [
      "100+ seller accounts",
      "10,000+ products listed",
      "500+ transactions/day",
      "99.9% uptime",
      "Sub-2 second page load time",
    ],
    businessImpact:
      "Tap into $4.2T e-commerce market, generate $10K+ monthly revenue at 2.9% processing fee, create job opportunities for 100+ sellers.",
    industryContext:
      "SaaS e-commerce platforms growing at 35% annually. Shopify has 4.4M sellers. Market opportunity for niche solutions.",
    estimatedHours: 80,
    difficulty: 8,
    phases: [
      {
        phaseNumber: 1,
        title: "Architecture & Tech Stack Selection",
        description:
          "Design scalable architecture and select appropriate technologies for the SaaS platform.",
        learningObjectives: [
          "Design microservices architecture",
          "Select tech stack based on scalability needs",
          "Plan database design",
          "Design payment integration architecture",
        ],
        tasks: [
          {
            id: "task-1-1",
            phase: 1,
            title: "Architecture Design",
            description:
              "Design a scalable microservices architecture for the e-commerce SaaS platform.",
            type: "submission",
            objectives: [
              "Design service boundaries",
              "Plan API structure",
              "Design database schema",
              "Plan scalability strategy",
            ],
            expectedOutput:
              "Architecture diagram with services, databases, APIs, and scalability plan",
            hints: {
              basic:
                "Core services: User, Product, Order, Payment, Shop (seller). Keep them independent.",
              intermediate:
                "Use event-driven architecture for order processing. Implement service discovery and load balancing.",
              advanced:
                "Plan for sharding, caching strategies, and database replication. Design for 100K concurrent users.",
            },
            resources: [
              {
                title: "Microservices Architecture Pattern",
                url: "#",
                type: "article",
              },
              {
                title: "System Design Guide",
                url: "#",
                type: "article",
              },
              {
                title: "Architecture Diagram Tool",
                url: "#",
                type: "tool",
              },
            ],
            estimatedMinutes: 180,
          },
        ],
        estimatedHours: 6,
        successCriteria: [
          "Clear service boundaries defined",
          "Data flow between services documented",
          "Scalability plan for 10K concurrent users",
        ],
      },
      {
        phaseNumber: 2,
        title: "Core Backend Development",
        description:
          "Build APIs for user management, product catalog, shopping cart, and order processing.",
        learningObjectives: [
          "Develop RESTful APIs",
          "Implement authentication and authorization",
          "Build database layer",
          "Implement caching strategy",
        ],
        tasks: [
          {
            id: "task-2-1",
            phase: 2,
            title: "User & Shop Management APIs",
            description:
              "Build APIs for user registration, authentication, and shop creation for sellers.",
            type: "submission",
            objectives: [
              "Implement user authentication",
              "Create shop management endpoints",
              "Implement role-based access control",
              "Build user dashboard API",
            ],
            expectedOutput:
              "API documentation (Swagger/OpenAPI), postman collection with 20+ endpoints",
            hints: {
              basic:
                "Use JWT for authentication. Create endpoints: /auth/register, /auth/login, /shops, /shops/{id}",
              intermediate:
                "Implement email verification, password reset, two-factor authentication for sellers",
              advanced:
                "Add rate limiting, OAuth for third-party integrations, audit logging for compliance",
            },
            resources: [
              {
                title: "JWT Authentication",
                url: "#",
                type: "article",
              },
              {
                title: "RESTful API Design",
                url: "#",
                type: "article",
              },
              {
                title: "OpenAPI Spec Tool",
                url: "#",
                type: "tool",
              },
            ],
            estimatedMinutes: 200,
          },
          {
            id: "task-2-2",
            phase: 2,
            title: "Product Catalog & Search",
            description:
              "Build product catalog management and full-text search with filtering capabilities.",
            type: "submission",
            objectives: [
              "Implement product CRUD operations",
              "Build full-text search",
              "Create filtering system",
              "Implement inventory management",
            ],
            expectedOutput:
              "APIs for products, search endpoints, inventory management documented",
            hints: {
              basic:
                "Create products table with: name, description, price, inventory, seller_id. Implement CRUD.",
              intermediate:
                "Use Elasticsearch for search. Implement faceted search with filters (price, category, rating)",
              advanced:
                "Add personalization: recommendations based on browsing history, trending products, ML ranking",
            },
            resources: [
              {
                title: "Elasticsearch Tutorial",
                url: "#",
                type: "video",
              },
              {
                title: "Database Optimization",
                url: "#",
                type: "article",
              },
              {
                title: "Full-Text Search Guide",
                url: "#",
                type: "article",
              },
            ],
            estimatedMinutes: 200,
          },
        ],
        estimatedHours: 12,
        successCriteria: [
          "All core APIs functioning with test coverage",
          "Authentication secure and working",
          "Search handles 10K+ products efficiently",
          "Inventory accurately tracked",
        ],
      },
      {
        phaseNumber: 3,
        title: "Payment & Order Processing",
        description:
          "Integrate payment gateway, build order processing system, and implement fulfillment workflow.",
        learningObjectives: [
          "Integrate payment processors",
          "Build order management system",
          "Implement fulfillment workflow",
          "Handle edge cases and errors",
        ],
        tasks: [
          {
            id: "task-3-1",
            phase: 3,
            title: "Payment Gateway Integration & Order Processing",
            description:
              "Integrate Stripe/Razorpay for payments and build complete order processing pipeline.",
            type: "submission",
            objectives: [
              "Integrate payment provider",
              "Implement order creation",
              "Handle payment webhooks",
              "Build order status tracking",
            ],
            expectedOutput:
              "Payment integration tested, order APIs working, webhook handling documented",
            hints: {
              basic:
                "Integrate Stripe or Razorpay. Handle: checkout creation, payment confirmation, refunds",
              intermediate:
                "Implement order state machine: pending → paid → processing → shipped → delivered",
              advanced:
                "Add fraud detection, dispute handling, multi-currency support, payment plan options",
            },
            resources: [
              {
                title: "Stripe API Integration",
                url: "#",
                type: "article",
              },
              {
                title: "Payment Webhook Handling",
                url: "#",
                type: "article",
              },
              {
                title: "PCI Compliance Guide",
                url: "#",
                type: "article",
              },
            ],
            estimatedMinutes: 180,
          },
        ],
        estimatedHours: 10,
        successCriteria: [
          "End-to-end payment flow working",
          "Orders created successfully after payment",
          "Webhooks properly handled",
          "Refunds working",
        ],
      },
      {
        phaseNumber: 4,
        title: "Frontend, Deployment & Launch",
        description:
          "Build customer and seller frontends, deploy to production, and execute launch plan.",
        learningObjectives: [
          "Build responsive frontends",
          "Implement seller dashboard",
          "Deploy to production",
          "Monitor and optimize",
        ],
        tasks: [
          {
            id: "task-4-1",
            phase: 4,
            title: "Customer Frontend Development",
            description:
              "Build responsive e-commerce storefront with product browsing, cart, and checkout.",
            type: "submission",
            objectives: [
              "Build product catalog UI",
              "Implement shopping cart",
              "Create checkout flow",
              "Optimize for mobile",
            ],
            expectedOutput:
              "Fully functional e-commerce storefront deployed, responsive design verified",
            hints: {
              basic:
                "Use React/Vue. Create: product list, product detail, cart, checkout pages",
              intermediate:
                "Implement cart persistence, saved items, favorites, user account pages",
              advanced:
                "Add personalization, reviews, recommendations, one-click checkout, guest checkout",
            },
            resources: [
              {
                title: "React E-commerce Tutorial",
                url: "#",
                type: "video",
              },
              {
                title: "Mobile-First Design",
                url: "#",
                type: "article",
              },
              {
                title: "Performance Optimization",
                url: "#",
                type: "article",
              },
            ],
            estimatedMinutes: 240,
          },
          {
            id: "task-4-2",
            phase: 4,
            title: "Production Deployment & Launch Strategy",
            description:
              "Deploy platform to production, set up monitoring, and execute launch plan.",
            type: "submission",
            objectives: [
              "Deploy infrastructure",
              "Set up monitoring and logging",
              "Execute launch marketing",
              "Handle initial scale",
            ],
            expectedOutput:
              "Deployed platform, monitoring dashboard, launch report with initial metrics",
            hints: {
              basic:
                "Use AWS/GCP/Azure. Deploy: API servers, databases, CDN. Set up backups.",
              intermediate:
                "Implement CI/CD pipeline, monitoring (Datadog), logging (ELK). Auto-scale based on load.",
              advanced:
                "Plan blue-green deployments, chaos engineering for resilience, disaster recovery",
            },
            resources: [
              {
                title: "AWS Deployment Guide",
                url: "#",
                type: "article",
              },
              {
                title: "Infrastructure as Code",
                url: "#",
                type: "article",
              },
              {
                title: "Launch Checklist",
                url: "#",
                type: "template",
              },
            ],
            estimatedMinutes: 200,
          },
        ],
        estimatedHours: 16,
        successCriteria: [
          "E-commerce site live and accessible",
          "100+ initial sellers onboarded",
          "1000+ products listed",
          "Monitoring and alerting active",
          "Initial marketing campaign executed",
        ],
      },
    ],
    tags: ["development", "saas", "ecommerce", "fullstack", "backend"],
    createdAt: new Date("2025-12-03"),
    updatedAt: new Date("2025-12-03"),
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getCaseStudyById = (id: string): CaseStudy | null => {
  return mockCaseStudies.find((cs) => cs.id === id) || null;
};

export const getCaseStudiesByDomain = (
  domain: StudentDomain
): CaseStudy[] => {
  return mockCaseStudies.filter((cs) => cs.domain === domain);
};

export const getCaseStudiesByNanoNiche = (
  nanoNiche: StudentNanoNiche
): CaseStudy[] => {
  return mockCaseStudies.filter((cs) => cs.nanoNiche === nanoNiche);
};

export const getCaseStudiesByLevel = (level: CaseStudyLevel): CaseStudy[] => {
  return mockCaseStudies.filter((cs) => cs.level === level);
};

export const getAllCaseStudies = (): CaseStudy[] => {
  return mockCaseStudies;
};

export const getTaskById = (caseStudyId: string, taskId: string) => {
  const caseStudy = getCaseStudyById(caseStudyId);
  if (!caseStudy) return null;

  for (const phase of caseStudy.phases) {
    const task = phase.tasks.find((t) => t.id === taskId);
    if (task) return task;
  }
  return null;
};

export const getPhaseById = (caseStudyId: string, phaseNumber: number) => {
  const caseStudy = getCaseStudyById(caseStudyId);
  if (!caseStudy) return null;
  return caseStudy.phases.find((p) => p.phaseNumber === phaseNumber) || null;
};

export const calculateCaseStudyProgress = (
  submissions: CaseStudySubmission[]
): {
  totalSubmissions: number;
  submittedTasks: number;
  evaluatedTasks: number;
  averageScore: number;
} => {
  const totalSubmissions = submissions.length;
  const evaluatedTasks = submissions.filter((s) => s.aiEvaluationScore).length;
  const avgScore =
    evaluatedTasks > 0
      ? submissions.reduce((sum, s) => sum + (s.aiEvaluationScore || 0), 0) /
        evaluatedTasks
      : 0;

  return {
    totalSubmissions,
    submittedTasks: submissions.length,
    evaluatedTasks,
    averageScore: Math.round(avgScore),
  };
};

export const generateAIFeedback = (
  taskType: TaskType,
  submissionLength: number
): {
  strengths: string[];
  improvements: string[];
  nextSteps: string[];
} => {
  const strengthList = [
    "Clear problem identification",
    "Good use of supporting data",
    "Logical flow of ideas",
    "Thorough analysis",
    "Creative solution approach",
  ];

  const improvementList = [
    "Include more concrete examples",
    "Expand on the reasoning",
    "Consider alternative approaches",
    "Add quantitative metrics",
    "Strengthen the conclusion",
  ];

  const nextStepsList = [
    "Review feedback and revise submission",
    "Move to next task",
    "Schedule mentor session",
    "Research additional materials",
    "Practice similar problems",
  ];

  return {
    strengths: [strengthList[Math.floor(Math.random() * strengthList.length)]],
    improvements: [
      improvementList[Math.floor(Math.random() * improvementList.length)],
    ],
    nextSteps: [
      nextStepsList[Math.floor(Math.random() * nextStepsList.length)],
    ],
  };
};
