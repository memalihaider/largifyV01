"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, ReactElement, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ClipboardCheck, 
  Sparkles, 
  Briefcase, 
  School, 
  Database, 
  Bot, 
  BookOpen,
  ArrowRight,
  Building2,
  Shield,
  Code,
  Lightbulb,
  Globe,
  Brain,
  Smartphone,
  TrendingUp,
  Search,
  LayoutGrid,
  Lock,
  Rocket,
  Command,
  Zap,
  Palette,
  Cloud,
  BarChart,
  Blocks,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  isLoggedIn?: boolean;
  userRole?: string;
}

interface ServiceItem {
  title: string;
  description: string;
  icon: ReactElement;
  href: string;
}

interface ProductItem {
  title: string;
  description: string;
  icon: ReactElement;
  href: string;
}

export function Navbar({ isLoggedIn = false, userRole }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/how-it-works", label: "Solutions" },
    { href: "/pricing", label: "Innovation Lab" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const services: ServiceItem[] = [
    {
      title: "Web Development",
      description: "Build responsive, fast-loading websites that work seamlessly across all devices.",
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      href: "/services/web-development"
    },
    {
      title: "AI Solutions",
      description: "Harness the power of AI to automate tasks and analyze data for business growth.",
      icon: <Brain className="w-6 h-6 text-violet-600" />,
      href: "/services/ai-solutions"
    },
    {
      title: "Mobile App Development",
      description: "Develop intuitive and high-performance apps for iOS and Android platforms.",
      icon: <Smartphone className="w-6 h-6 text-emerald-600" />,
      href: "/services/mobile-development"
    },
    {
      title: "Cybersecurity Services",
      description: "Protect your systems, networks, and data from evolving online threats.",
      icon: <Shield className="w-6 h-6 text-red-600" />,
      href: "/services/cybersecurity"
    },
    {
      title: "Custom ERP, CRM, & POS",
      description: "Tailored systems to streamline operations and optimize transactions.",
      icon: <LayoutGrid className="w-6 h-6 text-indigo-600" />,
      href: "/services/custom-systems"
    },
    {
      title: "Digital Marketing & SEO",
      description: "Boost your online visibility and attract more customers with expert strategies.",
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      href: "/services/marketing-seo"
    },
    {
      title: "UI/UX Design",
      description: "Create intuitive and engaging user experiences that drive conversion.",
      icon: <Palette className="w-6 h-6 text-pink-600" />,
      href: "/services/ui-ux"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for your growing business needs.",
      icon: <Cloud className="w-6 h-6 text-sky-500" />,
      href: "/services/cloud"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights for better decision making.",
      icon: <BarChart className="w-6 h-6 text-teal-500" />,
      href: "/services/data-analytics"
    },
    {
      title: "Blockchain",
      description: "Secure, transparent, and decentralized solutions for modern problems.",
      icon: <Blocks className="w-6 h-6 text-orange-500" />,
      href: "/services/blockchain"
    },
    {
      title: "DevOps Services",
      description: "Streamline development and operations for faster delivery cycles.",
      icon: <Cpu className="w-6 h-6 text-cyan-600" />,
      href: "/services/devops"
    },
    {
      title: "IT Consulting",
      description: "Strategic technology guidance to help you achieve your business goals.",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      href: "/services/consulting"
    }
  ];

  const products: ProductItem[] = [
    {
      title: "Exam Generator",
      description: "Automated question paper generation and assessment tool.",
      icon: <ClipboardCheck className="w-6 h-6 text-blue-500" />,
      href: "/products/exam-generator"
    },
    {
      title: "Beauty Saloon Management",
      description: "Complete solution for salon appointments and inventory.",
      icon: <Sparkles className="w-6 h-6 text-pink-500" />,
      href: "/products/beauty-saloon"
    },
    {
      title: "Business ERP System",
      description: "Integrated management of core business processes.",
      icon: <Briefcase className="w-6 h-6 text-slate-700" />,
      href: "/products/business-erp"
    },
    {
      title: "School Management System",
      description: "Comprehensive platform for educational institutions.",
      icon: <School className="w-6 h-6 text-orange-500" />,
      href: "/products/school-management"
    },
    {
      title: "ERP System",
      description: "Enterprise resource planning for large scale operations.",
      icon: <Database className="w-6 h-6 text-indigo-500" />,
      href: "/products/erp"
    },
    {
      title: "AI Business Developer",
      description: "AI-driven insights and automation for business growth.",
      icon: <Bot className="w-6 h-6 text-violet-500" />,
      href: "/products/ai-developer"
    },
    {
      title: "LMS System",
      description: "Learning management system for online education.",
      icon: <BookOpen className="w-6 h-6 text-emerald-500" />,
      href: "/products/lms"
    }
  ];

  const dashboardLink = {
    student: "/dashboard/student",
    mentor: "/dashboard/mentor",
    admin: "/dashboard/admin",
    corporate: "/dashboard/corporate",
  }[userRole as string] || "/dashboard";

  return (
    <>
      {/* Backdrop for closing dropdowns */}
      {(isServicesOpen || isProductsOpen) && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
          onClick={() => {
            setIsServicesOpen(false);
            setIsProductsOpen(false);
          }}
        />
      )}
      
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 py-4",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div className={cn(
        "container mx-auto transition-all duration-500",
        scrolled ? "max-w-6xl" : "max-w-7xl"
      )}>
        <div className={cn(
          "relative flex items-center justify-between h-14 sm:h-16 px-4 rounded-2xl border transition-all duration-500 overflow-hidden",
          scrolled 
            ? "bg-slate-950/80 backdrop-blur-xl border-slate-800/50 shadow-2xl shadow-black/50" 
            : "bg-slate-950/40 backdrop-blur-md border-white/5"
        )}>
          {/* Ambient Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-white/5 blur-3xl -z-10 pointer-events-none" />
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-lab-primary/20">
              <Image 
                src="/logo.png" 
                alt="Largify Labs" 
                fill 
                className="object-cover"
              />
            </div>
           
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-xl border border-white/5 backdrop-blur-sm z-50">
            <div className="relative">
              <button 
                onClick={() => {
                  setIsServicesOpen(!isServicesOpen);
                  setIsProductsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer relative overflow-hidden",
                  isServicesOpen ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                {isServicesOpen && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  Services
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isServicesOpen && "rotate-180")} />
                </span>
              </button>
            </div>

            <div className="relative">
              <button 
                onClick={() => {
                  setIsProductsOpen(!isProductsOpen);
                  setIsServicesOpen(false);
                }}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer relative overflow-hidden",
                  isProductsOpen ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                {isProductsOpen && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  Products
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isProductsOpen && "rotate-180")} />
                </span>
              </button>
            </div>
            
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-bold transition-all relative overflow-hidden",
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3 z-50">
            <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all">
              <Search className="w-5 h-5" />
            </button>
            
            <div className="h-6 w-[1px] bg-white/10 hidden sm:block mx-2" />

            {isLoggedIn ? (
              <Link href={dashboardLink}>
                <Button size="sm" className="bg-white text-slate-950 hover:bg-slate-200 font-bold transition-all rounded-xl px-6 h-10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)]">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/auth/login" className="hidden sm:block">
                  <Button size="sm" variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 font-bold">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button size="sm" className="bg-linear-to-r from-lab-primary to-corporate-primary hover:opacity-90 text-white shadow-lg shadow-lab-primary/20 transition-all rounded-xl px-6 h-10 font-bold relative overflow-hidden group">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started <Zap className="w-4 h-4 fill-current" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                </Link>
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-300 hover:text-white transition-colors relative z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Services Mega Menu Dropdown */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full px-4 pt-2"
          >
            <div className="container mx-auto max-w-6xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-4 bg-slate-950/50 p-5 border-r border-slate-800">
                  <div className="p-2.5 bg-corporate-primary/10 rounded-xl inline-block mb-3">
                    <Building2 className="w-6 h-6 text-corporate-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">Enterprise Services</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    Professional technology and security services designed for businesses, institutes, and governments.
                  </p>
                  <div className="space-y-3">
                    <Link 
                      href="/features" 
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-corporate-primary/20 flex items-center justify-center text-corporate-primary group-hover:scale-110 transition-transform">
                        <Rocket className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">Service Roadmap</p>
                        <p className="text-[10px] text-slate-500">View our implementation process</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-8 p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {services.map((service, i) => (
                      <Link 
                        key={i} 
                        href={service.href}
                        className="group p-3 rounded-xl hover:bg-white/5 transition-all flex gap-3 border border-transparent hover:border-slate-800"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-corporate-primary group-hover:text-white transition-all duration-300">
                          {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5" } as any)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white group-hover:text-corporate-primary transition-colors mb-0.5">
                            {service.title}
                          </h4>
                          <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
                    <p className="text-sm text-slate-500 font-medium">Need a custom solution?</p>
                    <Link 
                      href="/contact" 
                      className="text-sm font-bold text-corporate-primary hover:text-white transition-colors flex items-center gap-2"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Talk to an expert <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Products Mega Menu Dropdown */}
      <AnimatePresence>
        {isProductsOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full px-2 pt-2"
          >
            <div className="container mx-auto max-w-7xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-4 bg-slate-950/50 p-6 border-r border-slate-800">
                  <div className="p-3 bg-lab-primary/10 rounded-2xl inline-block mb-4">
                    <Rocket className="w-8 h-8 text-lab-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Innovation Lab</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Explore our suite of enterprise-grade software solutions designed to streamline your operations and drive growth.
                  </p>
                  <div className="p-3 rounded-xl bg-linear-to-br from-lab-primary/20 to-transparent border border-lab-primary/20">
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles className="w-3 h-3 text-lab-primary" />
                      <span className="text-[10px] font-bold text-lab-primary uppercase tracking-wider">New Release</span>
                    </div>
                    <p className="text-sm font-bold text-white mb-0.5">AI Business Developer v2.0</p>
                    <p className="text-[10px] text-slate-400 mb-3">Now with advanced predictive analytics.</p>
                    <Link 
                      href="/products/ai-developer" 
                      className="text-[10px] font-bold text-white bg-lab-primary px-2.5 py-1 rounded-md inline-block"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="lg:col-span-8 p-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {products.map((product, i) => (
                      <Link 
                        key={i} 
                        href={product.href}
                        className="group p-3 rounded-xl hover:bg-white/5 transition-all flex flex-col gap-2 border border-transparent hover:border-slate-800"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <div className="shrink-0 w-8 h-8 rounded-lg bg-slate-800/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-lab-primary group-hover:text-white transition-all duration-300">
                          {React.cloneElement(product.icon as React.ReactElement, { className: "w-4 h-4" } as any)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white group-hover:text-lab-primary transition-colors mb-0.5">
                            {product.title}
                          </h4>
                          <p className="text-slate-400 text-[10px] leading-relaxed line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 w-screen h-screen z-40 bg-slate-950/98 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-8 pb-10">
              {/* Mobile Services */}
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] px-2"
                >
                  Services
                </motion.p>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((service, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                    >
                      <Link
                        href={service.href}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-slate-800 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-corporate-primary group-hover:scale-110 transition-transform">
                          {React.cloneElement(service.icon as ReactElement<any>, { className: "w-5 h-5" })}
                        </div>
                        <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{service.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile Products */}
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] px-2"
                >
                  Products
                </motion.p>
                <div className="grid grid-cols-1 gap-2">
                  {products.map((product, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + (i * 0.05) }}
                    >
                      <Link
                        href={product.href}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-slate-800 group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-lg bg-slate-800/50 flex items-center justify-center text-lab-primary group-hover:scale-110 transition-transform">
                          {React.cloneElement(product.icon as ReactElement<any>, { className: "w-5 h-5" })}
                        </div>
                        <span className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{product.title}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Mobile Company Links */}
              <div className="space-y-4">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] px-2"
                >
                  Company
                </motion.p>
                <div className="grid grid-cols-1 gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.05) }}
                    >
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-lg font-bold text-slate-300 hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {!isLoggedIn && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 border-t border-slate-800 flex flex-col gap-4"
                >
                  <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full justify-center h-12 border-slate-700 text-white hover:bg-white/5 font-bold rounded-xl">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/register" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full justify-center h-12 bg-linear-to-r from-lab-primary to-corporate-primary hover:opacity-90 text-white border-none font-bold rounded-xl shadow-lg shadow-lab-primary/20">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
    </>
  );
}