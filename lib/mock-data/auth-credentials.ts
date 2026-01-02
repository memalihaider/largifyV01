// Mock User Credentials for Development/Demo
import { User } from "@/lib/types/database";

export interface MockUser extends User {
  password: string;
}

export const mockUsers: MockUser[] = [
  // Student Users
  {
    id: "student-001",
    email: "student@example.com",
    password: "password123",
    role: "student",
    name: "Aman Kumar",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=student1",
    bio: "Aspiring full-stack developer passionate about innovation",
    location: "Bangalore, India",
    created_at: new Date("2025-09-15"),
    updated_at: "2025-12-31",
  },
  {
    id: "student-002",
    email: "priya.sharma@example.com",
    password: "password123",
    role: "student",
    name: "Priya Sharma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=student2",
    bio: "AI and machine learning enthusiast",
    location: "Mumbai, India",
    created_at: new Date("2025-10-01"),
    updated_at: "2025-12-31",
  },
  {
    id: "student-003",
    email: "rajesh.patel@example.com",
    password: "password123",
    role: "student",
    name: "Rajesh Patel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=student3",
    bio: "Cybersecurity researcher and developer",
    location: "Delhi, India",
    created_at: new Date("2025-08-20"),
    updated_at: "2025-12-31",
  },

  // Mentor Users
  {
    id: "mentor-001",
    email: "mentor@example.com",
    password: "password123",
    role: "mentor",
    name: "Dr. Vikram Singh",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mentor1",
    bio: "Tech mentor with 15+ years in AI and startups",
    location: "San Francisco, USA",
    created_at: new Date("2025-06-01"),
    updated_at: "2025-12-31",
  },
  {
    id: "mentor-002",
    email: "mentor.kavya@example.com",
    password: "password123",
    role: "mentor",
    name: "Kavya Desai",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mentor2",
    bio: "Product management and growth strategy expert",
    location: "Singapore",
    created_at: new Date("2025-07-10"),
    updated_at: "2025-12-31",
  },
  {
    id: "mentor-003",
    email: "mentor.arun@example.com",
    password: "password123",
    role: "mentor",
    name: "Arun Verma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mentor3",
    bio: "Full-stack development and DevOps specialist",
    location: "Bangalore, India",
    created_at: new Date("2025-05-15"),
    updated_at: "2025-12-31",
  },

  // Corporate Users
  {
    id: "corporate-001",
    email: "corporate@example.com",
    password: "password123",
    role: "corporate",
    name: "TechCorp Ventures",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=corporate1",
    bio: "B2B SaaS platform provider and investor",
    location: "New York, USA",
    created_at: new Date("2025-04-01"),
    updated_at: "2025-12-31",
  },
  {
    id: "corporate-002",
    email: "innovation@megasoft.com",
    password: "password123",
    role: "corporate",
    name: "MegaSoft Innovation",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=corporate2",
    bio: "Enterprise software solutions and startup ecosystem builder",
    location: "Seattle, USA",
    created_at: new Date("2025-05-01"),
    updated_at: "2025-12-31",
  },
  {
    id: "corporate-003",
    email: "partnerships@fintech-global.com",
    password: "password123",
    role: "corporate",
    name: "FinTech Global",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=corporate3",
    bio: "Financial technology solutions and startup accelerator",
    location: "London, UK",
    created_at: new Date("2025-06-15"),
    updated_at: "2025-12-31",
  },

  // Admin User
  {
    id: "admin-001",
    email: "admin@largifylab.com",
    password: "admin@123",
    role: "admin",
    name: "Admin Portal",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
    bio: "Platform administrator with full access",
    location: "India",
    created_at: new Date("2025-01-01"),
    updated_at: "2025-12-31",
  },
  {
    id: "admin-002",
    email: "support@largifylab.com",
    password: "admin@123",
    role: "admin",
    name: "Support Admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin2",
    bio: "Platform support and moderation team",
    location: "India",
    created_at: new Date("2025-02-01"),
    updated_at: "2025-12-31",
  },
];

/**
 * Authenticate user with email and password
 * @param email - User email
 * @param password - User password
 * @returns User object if credentials are valid, null otherwise
 */
export const authenticateUser = (email: string, password: string): User | null => {
  const user = mockUsers.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );

  if (!user) {
    return null;
  }

  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

/**
 * Get user by email
 * @param email - User email
 * @returns User object or null
 */
export const getUserByEmail = (email: string): User | null => {
  const user = mockUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return null;
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

/**
 * Get user by ID
 * @param id - User ID
 * @returns User object or null
 */
export const getUserById = (id: string): User | null => {
  const user = mockUsers.find((u) => u.id === id);
  if (!user) return null;
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

/**
 * Get all users by role
 * @param role - User role
 * @returns Array of users with given role
 */
export const getUsersByRole = (role: string): User[] => {
  return mockUsers
    .filter((u) => u.role === role)
    .map((u) => {
      const { password: _, ...userWithoutPassword } = u;
      return userWithoutPassword;
    });
};
