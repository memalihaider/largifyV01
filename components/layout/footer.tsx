"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github, Mail, Building2, GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-lab-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Largify</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Technology and innovation services for businesses, institutes, and governments. One Company. Two Engines. One Ecosystem.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-lab-primary hover:border-lab-primary/50 transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-lab-primary hover:border-lab-primary/50 transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-lab-primary hover:border-lab-primary/50 transition-all">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-corporate-primary/10 rounded-lg">
                <Building2 className="w-4 h-4 text-corporate-primary" />
              </div>
              <h4 className="font-bold text-white">Services</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/ero" className="text-slate-400 hover:text-corporate-primary transition-colors">
                  ERO System
                </Link>
              </li>
              <li>
                <Link href="/services/cybersecurity" className="text-slate-400 hover:text-corporate-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link href="/services/software" className="text-slate-400 hover:text-corporate-primary transition-colors">
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-slate-400 hover:text-corporate-primary transition-colors">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Innovation Lab */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-lab-primary/10 rounded-lg">
                <GraduationCap className="w-4 h-4 text-lab-primary" />
              </div>
              <h4 className="font-bold text-white">Innovation Lab</h4>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-lab-primary transition-colors">
                  For Students
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-lab-primary transition-colors">
                  For Institutes
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-slate-400 hover:text-lab-primary transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-lab-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-white mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">Subscribe to our newsletter for the latest insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-lab-primary/50 w-full"
              />
              <button className="bg-lab-primary hover:bg-lab-primary/90 text-white p-2 rounded-lg transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Largify Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>

  );
}