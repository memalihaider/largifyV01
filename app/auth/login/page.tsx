"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { authenticateUser, mockUsers } from "@/lib/mock-data/auth-credentials";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (!email || !password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    const user = authenticateUser(email, password);

    if (!user) {
      setError("Invalid email or password. Please try again.");
      setIsLoading(false);
      return;
    }

    // Store user session in localStorage
    localStorage.setItem("auth_user", JSON.stringify(user));
    localStorage.setItem("auth_token", btoa(`${user.id}:${Date.now()}`));

    setIsLoading(false);

    // Redirect based on user role
    const redirectPaths: Record<string, string> = {
      student: "/student",
      mentor: "/mentor",
      admin: "/admin",
      corporate: "/corporate",
    };

    const redirectPath = redirectPaths[user.role] || "/";
    router.push(redirectPath);
  };

  const quickLogin = (userEmail: string) => {
    setEmail(userEmail);
    setPassword("password123");
  };

  const quickLoginAdmin = () => {
    setEmail("admin@largifylab.com");
    setPassword("admin@123");
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center p-4 overflow-hidden">
      {/* Unified Background System */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated Pulses */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lab-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-corporate-primary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      {/* Login Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center p-3 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl mb-4 shadow-2xl"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-lab-primary rounded-lg flex items-center justify-center">
                <LogIn className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Largify</span>
            </div>
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400">Sign in to your account to continue</p>
        </div>

        <Card className="bg-slate-900/40 backdrop-blur-xl border-slate-800/50 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-lab-primary to-corporate-primary" />
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400 flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  {error}
                </motion.div>
              )}

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-lab-primary transition-colors" />
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      className="pl-11 bg-slate-950/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-lab-primary/50 focus:ring-lab-primary/20 transition-all h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-sm font-medium text-slate-300">Password</label>
                    <Link href="#" className="text-xs text-lab-primary hover:text-lab-secondary transition-colors">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-lab-primary transition-colors" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                      className="pl-11 pr-11 bg-slate-950/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-lab-primary/50 focus:ring-lab-primary/20 transition-all h-12 rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-linear-to-r from-lab-primary to-corporate-primary hover:from-lab-primary/90 hover:to-corporate-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-lab-primary/20 transition-all duration-300 group"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>Sign In</span>
                    <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-800/50">
              <p className="text-center text-slate-400 text-sm">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-lab-primary font-semibold hover:text-lab-secondary transition-colors">
                  Create one for free
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Login Helper */}
        <div className="mt-8">
          <button
            onClick={() => setShowCredentials(!showCredentials)}
            className="w-full py-3 px-4 bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 rounded-xl text-slate-400 text-sm hover:bg-slate-800/50 transition-all flex items-center justify-center gap-2"
          >
            <div className={`w-2 h-2 rounded-full ${showCredentials ? 'bg-lab-primary' : 'bg-slate-600'}`} />
            {showCredentials ? "Hide Test Credentials" : "Show Test Credentials"}
          </button>

          {showCredentials && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 grid grid-cols-2 gap-3"
            >
              {mockUsers.map((user) => (
                <button
                  key={user.id}
                  onClick={() => quickLogin(user.email)}
                  className="p-3 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl text-left hover:border-lab-primary/30 transition-all group"
                >
                  <p className="text-xs font-bold text-white capitalize mb-1 group-hover:text-lab-primary transition-colors">{user.role}</p>
                  <p className="text-[10px] text-slate-500 truncate">{user.email}</p>
                </button>
              ))}
              <button
                onClick={quickLoginAdmin}
                className="p-3 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl text-left hover:border-corporate-primary/30 transition-all group"
              >
                <p className="text-xs font-bold text-white mb-1 group-hover:text-corporate-primary transition-colors">Admin</p>
                <p className="text-[10px] text-slate-500 truncate">admin@largifylab.com</p>
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
