"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/layout/navbar";
import { Mail, Lock, User, Building2 } from "lucide-react";

export default function RegisterPage() {
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      // TODO: Implement actual registration with Supabase
      console.log({
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        password: formData.get("password"),
        role,
      });

      // For now, just show a success message
      alert("Account created! Please sign in.");
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center p-4 overflow-hidden pt-20">
      {/* Unified Background System */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated Pulses */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-lab-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-corporate-primary/20 rounded-full blur-[128px] animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-md z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl mb-4 shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-lab-primary rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Largify</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-slate-400">Join the Largify Innovation Lab</p>
        </div>

        <Card className="bg-slate-900/40 backdrop-blur-xl border-slate-800/50 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-lab-primary to-corporate-primary" />
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  {error}
                </div>
              )}

              <div className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-slate-300 ml-1">Full Name</Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-lab-primary transition-colors" />
                    <Input
                      id="fullName"
                      name="fullName"
                      placeholder="Your Name"
                      required
                      className="pl-11 bg-slate-950/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-lab-primary/50 focus:ring-lab-primary/20 transition-all h-12 rounded-xl"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-300 ml-1">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-lab-primary transition-colors" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="pl-11 bg-slate-950/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-lab-primary/50 focus:ring-lab-primary/20 transition-all h-12 rounded-xl"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-slate-300 ml-1">Password</Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within:text-lab-primary transition-colors" />
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      required
                      className="pl-11 bg-slate-950/50 border-slate-800 text-white placeholder:text-slate-600 focus:border-lab-primary/50 focus:ring-lab-primary/20 transition-all h-12 rounded-xl"
                    />
                  </div>
                </div>

                {/* Role Selection */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-slate-300 ml-1">I am a</Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger className="bg-slate-950/50 border-slate-800 text-white h-12 rounded-xl focus:ring-lab-primary/20">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-800 text-white">
                      <SelectItem value="student">Student / Founder</SelectItem>
                      <SelectItem value="mentor">Mentor</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                      <SelectItem value="admin">University Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-center gap-3 text-sm px-1">
                <input type="checkbox" id="terms" required className="rounded border-slate-800 bg-slate-950 text-lab-primary focus:ring-lab-primary/20" />
                <label htmlFor="terms" className="text-slate-400">
                  I agree to the{" "}
                  <Link href="#" className="text-lab-primary hover:text-lab-secondary transition-colors">
                    Terms of Service
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full h-12 bg-linear-to-r from-lab-primary to-corporate-primary hover:from-lab-primary/90 hover:to-corporate-primary/90 text-white font-semibold rounded-xl shadow-lg shadow-lab-primary/20 transition-all duration-300" 
                disabled={loading || !role}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>

              {/* Sign In Link */}
              <div className="pt-4 border-t border-slate-800/50 text-center">
                <p className="text-sm text-slate-400">
                  Already have an account?{" "}
                  <Link href="/auth/login" className="text-lab-primary font-semibold hover:text-lab-secondary transition-colors">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
