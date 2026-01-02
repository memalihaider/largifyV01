'use client';

import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Bell,
  Search,
  Menu,
  HelpCircle,
  Grid,
  User,
  Coins,
  Plus,
  Crown
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Mock user coin balance (in production, fetch from API)
  const [coinBalance] = useState(450);
  const [subscription] = useState<'free' | 'starter' | 'growth' | 'pro'>('free');
  
  const sidebarLinks = [
    { href: "/student", label: "Overview", icon: <LayoutDashboard className="w-5 h-5" /> },
    { href: "/student/team", label: "Team", icon: <Users className="w-5 h-5" /> },
    { href: "/student/settings", label: "Settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen bg-[#0b1120]">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-slate-800/50 bg-[#0b1120]">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 bg-[#a3e635] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">L</span>
            </div>
            <span className="font-bold text-lg text-white">
              Largify <span className="text-slate-500">Lab</span>
            </span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-slate-800 text-white"
                  : "text-slate-500 hover:bg-slate-800/50 hover:text-slate-300"
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Coin Balance & Subscription */}
        <div className="p-4 space-y-3 border-t border-slate-800/50">
          {/* Subscription Badge */}
          {subscription !== 'free' && (
            <div className="px-4 py-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Crown className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 font-bold text-sm capitalize">{subscription} Plan</span>
              </div>
              <p className="text-xs text-slate-400">Active subscription</p>
            </div>
          )}

          {/* Coin Balance */}
          <button
            onClick={() => router.push('/student/coins')}
            className="w-full px-4 py-3 bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-lg hover:border-violet-500/50 transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-500/20 rounded-lg">
                  <Coins className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-white font-bold text-lg">{coinBalance}</span>
              </div>
              <Plus className="w-4 h-4 text-violet-400 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-xs text-slate-400 text-left">Largify Coins</p>
          </button>

          {/* Upgrade CTA */}
          {subscription === 'free' && (
            <button
              onClick={() => router.push('/student/subscription')}
              className="w-full px-4 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium text-sm transition-all"
            >
              Upgrade to Pro
            </button>
          )}

          <Button variant="ghost" className="w-full justify-start gap-3 text-slate-500 hover:text-white hover:bg-slate-800/50">
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#0b1120]">
        {/* Header */}
        <header className="h-16 border-b border-slate-800/50 bg-[#0b1120] flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-[#a3e635] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-lg text-white uppercase tracking-tight">
                Largify <span className="text-slate-500 font-medium">Account</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <HelpCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <Grid className="w-5 h-5" />
            </Button>
            <div className="h-8 w-8 rounded-lg bg-[#a3e635] flex items-center justify-center text-black font-bold text-sm cursor-pointer">
              <User className="w-5 h-5" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
