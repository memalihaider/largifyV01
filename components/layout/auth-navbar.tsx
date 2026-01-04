// Enhanced Navbar with Authentication
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Menu, X, LogOut, User, Settings, Coins, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/hooks/useAuth";

export function AuthNavbar() {
  const router = useRouter();
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [currentCoins] = useState(450); // Mock current coin balance - in production, fetch from user data

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const dashboardMap = {
    student: "/student",
    mentor: "/mentor",
    admin: "/admin",
    corporate: "/corporate",
  };

  const dashboardLink = user ? dashboardMap[user.role as keyof typeof dashboardMap] || "/" : "/";

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0b1120] to-[#1a1f3a] backdrop-blur-md border-b border-[#a3e635]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="Largify Logo" 
              width={150} 
              height={40} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-[#a3e635] transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {isLoading ? (
              <div className="w-8 h-8 border-2 border-[#a3e635]/20 border-t-[#a3e635] rounded-full animate-spin"></div>
            ) : isAuthenticated && user ? (
              <>
                {/* Coin Balance Display */}
                {user.role === 'student' && (
                  <Link href="/student/coins">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all cursor-pointer ${
                      currentCoins === 0 
                        ? 'bg-red-500/20 border border-red-500/50 hover:bg-red-500/30' 
                        : 'bg-[#a3e635]/20 border border-[#a3e635]/50 hover:bg-[#a3e635]/30'
                    }`}>
                      <Coins className={`w-4 h-4 ${currentCoins === 0 ? 'text-red-400' : 'text-[#a3e635]'}`} />
                      <span className={`text-sm font-bold ${currentCoins === 0 ? 'text-red-400' : 'text-[#a3e635]'}`}>
                        {currentCoins}
                      </span>
                      {currentCoins === 0 && (
                        <AlertCircle className="w-3 h-3 text-red-400 animate-pulse" />
                      )}
                    </div>
                  </Link>
                )}
                
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#a3e635]/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#a3e635]/20 flex items-center justify-center">
                      <User className="w-4 h-4 text-[#a3e635]" />
                    </div>
                    <span className="text-sm text-slate-300 hidden sm:block">{user.name}</span>
                  </button>

                {/* User Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#1a1f3a] border border-[#a3e635]/20 rounded-lg shadow-xl overflow-hidden">
                    <div className="p-4 border-b border-[#a3e635]/10">
                      <p className="text-white font-medium">{user.name}</p>
                      <p className="text-xs text-slate-400">{user.email}</p>
                      <p className="text-xs text-[#a3e635] mt-1 capitalize">
                        {user.role === "corporate" ? "Corporate Partner" : user.role}
                      </p>
                    </div>

                    <div className="p-2 space-y-1">
                      <Link
                        href={dashboardLink}
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center gap-2 px-3 py-2 rounded hover:bg-[#a3e635]/10 text-slate-300 text-sm transition-colors"
                      >
                        <User className="w-4 h-4" />
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          handleLogout();
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 rounded hover:bg-red-500/10 text-red-400 text-sm transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="hidden sm:block">
                  <Button
                    size="sm"
                    className="bg-transparent border border-slate-600 hover:border-[#a3e635] text-slate-300 hover:text-white"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button
                    size="sm"
                    className="bg-[#a3e635] hover:bg-[#91d900] text-[#0b1120] font-medium"
                  >
                    Get Started
                  </Button>
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-slate-300 hover:text-[#a3e635]">
              {mobileMenuOpen ? (
                <X className="h-6 w-6" onClick={() => setMobileMenuOpen(false)} />
              ) : (
                <Menu className="h-6 w-6" onClick={() => setMobileMenuOpen(true)} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-slate-800">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-slate-300 hover:text-[#a3e635] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
