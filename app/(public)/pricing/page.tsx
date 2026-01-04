'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, Star, Zap, Building, School, User, Sparkles, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Currency = 'USD' | 'AED' | 'PKR' | 'EUR';

interface PriceData {
  USD: number;
  AED: number;
  PKR: number;
  EUR: number;
}

const currencySymbols: Record<Currency, string> = {
  USD: '$',
  AED: 'AED',
  PKR: '₨',
  EUR: '€',
};

const exchangeRates: Record<Currency, number> = {
  USD: 1,
  AED: 3.67,
  PKR: 278,
  EUR: 0.92,
};

const formatPrice = (price: number, currency: Currency): string => {
  const converted = Math.round(price * exchangeRates[currency]);
  return `${currencySymbols[currency]}${converted.toLocaleString()}`;
};

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');
  const [currency, setCurrency] = useState<Currency>('USD');

  const servicePackages = {
    monthly: [
      {
        title: "Starter",
        priceUSD: 499,
        description: "For startups and small businesses testing the waters.",
        features: ["1 Core Service (e.g., Web Dev)", "Basic Support", "Monthly Strategy Call", "Standard Analytics"],
        isPopular: false,
      },
      {
        title: "Growth",
        priceUSD: 1499,
        description: "For growing businesses ready to scale their operations.",
        features: ["Up to 3 Core Services", "Priority Support", "Bi-weekly Strategy Calls", "Advanced Analytics", "Dedicated Account Manager"],
        isPopular: true,
      },
      {
        title: "Enterprise",
        priceUSD: 0,
        description: "For large organizations with complex needs.",
        features: ["All Services Included", "24/7 Dedicated Support", "Weekly Strategy & Dev Calls", "Custom Analytics & BI", "Full Team Integration"],
        isPopular: false,
        isCustom: true,
      },
    ],
    annually: [
        {
            title: "Starter",
            priceUSD: 399,
            description: "For startups and small businesses testing the waters.",
            features: ["1 Core Service (e.g., Web Dev)", "Basic Support", "Monthly Strategy Call", "Standard Analytics"],
            isPopular: false,
          },
          {
            title: "Growth",
            priceUSD: 1199,
            description: "For growing businesses ready to scale their operations.",
            features: ["Up to 3 Core Services", "Priority Support", "Bi-weekly Strategy Calls", "Advanced Analytics", "Dedicated Account Manager"],
            isPopular: true,
          },
          {
            title: "Enterprise",
            priceUSD: 0,
            description: "For large organizations with complex needs.",
            features: ["All Services Included", "24/7 Dedicated Support", "Weekly Strategy & Dev Calls", "Custom Analytics & BI", "Full Team Integration"],
            isPopular: false,
            isCustom: true,
          },
    ]
  };


  const learningPackages = [
    {
      icon: <User className="w-8 h-8 text-white" />,
      title: "For Students",
      priceUSD: 29,
      period: "/month",
      description: "Access our Innovation Lab, get mentorship, and build your portfolio.",
      features: ["Full Access to Lab Resources", "1-on-1 Mentorship Sessions", "Project Collaboration", "Certificate of Completion"],
      buttonText: "Start Learning",
      href: "/auth/register"
    },
    {
        icon: <School className="w-8 h-8 text-white" />,
        title: "For Institutes",
        priceUSD: 0,
        period: "",
        description: "Integrate our Innovation Lab into your curriculum.",
        features: ["Custom Branded Portal", "Bulk Student Licenses", "Instructor Dashboard", "API & LMS Integration"],
        buttonText: "Contact Sales",
        href: "/contact?for=institutes",
        isCustom: true,
    },
    {
        icon: <Building className="w-8 h-8 text-white" />,
        title: "For Universities",
        priceUSD: 0,
        period: "",
        description: "A full-scale partnership to foster innovation on campus.",
        features: ["Campus-wide License", "Faculty Training Programs", "Joint Research Initiatives", "Dedicated Support Team"],
        buttonText: "Partner With Us",
        href: "/contact?for=universities",
        isCustom: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-lab-primary/30">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-40 pb-24 px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-linear-to-b from-slate-900/20 via-slate-950 to-slate-950 -z-10"></div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge className="mb-6 bg-lab-primary/10 text-lab-primary border-lab-primary/30 px-4 py-1.5 backdrop-blur-sm">
            Transparent Pricing
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
            Find the <span className="text-transparent bg-clip-text bg-linear-to-r from-lab-primary to-corporate-primary">Perfect Plan</span>
            <br />
            for Your Goals
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Whether you're a business looking to innovate or a student ready to build, we have a plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
      </motion.section>

      {/* Service Packages Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Service Packages for Businesses
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Flexible, scalable, and powerful service retainers to fuel your company's growth and innovation.
            </p>
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center justify-center gap-2 mx-auto">
                <Globe className="w-5 h-5 text-lab-primary" />
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value as Currency)}
                  className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-white font-semibold hover:border-lab-primary/50 transition-colors"
                >
                  <option value="USD">USD - United States Dollar</option>
                  <option value="AED">AED - United Arab Emirates Dirham</option>
                  <option value="PKR">PKR - Pakistani Rupee</option>
                  <option value="EUR">EUR - Euro</option>
                </select>
              </div>
              <div className="inline-flex items-center bg-slate-900 p-1.5 rounded-full border border-slate-800">
                <button onClick={() => setBillingCycle('monthly')} className={cn("px-6 py-2 text-sm font-bold rounded-full transition-colors", billingCycle === 'monthly' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white')}>Monthly</button>
                <button onClick={() => setBillingCycle('annually')} className={cn("px-6 py-2 text-sm font-bold rounded-full transition-colors relative", billingCycle === 'annually' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white')}>
                  Annually
                  <Badge className="absolute -top-2 -right-2 bg-lab-primary text-slate-950 text-[10px] px-2 py-0.5">Save 20%</Badge>
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {servicePackages[billingCycle].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <Card className={cn(
                  "h-full flex flex-col bg-slate-900/50 border-slate-800 transition-all duration-300",
                  pkg.isPopular ? "border-lab-primary/50 shadow-2xl shadow-lab-primary/10" : "hover:border-slate-700"
                )}>
                  {pkg.isPopular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lab-primary text-slate-950 font-bold">Most Popular</Badge>}
                  <CardHeader className="pt-10">
                    <CardTitle className="text-2xl font-bold text-white mb-2">{pkg.title}</CardTitle>
                    <p className="text-slate-400 text-sm">{pkg.description}</p>
                  </CardHeader>
                  <CardContent className="grow">
                    <div className="mb-8">
                      {pkg.isCustom ? (
                        <span className="text-3xl font-extrabold text-lab-primary">Custom</span>
                      ) : (
                        <>
                          <span className="text-5xl font-extrabold text-white">{formatPrice(pkg.priceUSD, currency)}</span>
                          <span className="text-slate-400">/mo</span>
                        </>
                      )}
                    </div>
                    <ul className="space-y-4">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3 text-slate-300">
                          <Check className="w-5 h-5 text-lab-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6">
                    <Link href={pkg.isCustom ? "/contact" : "/auth/register"} className="w-full">
                      <Button className={cn(
                        "w-full text-lg py-6 rounded-xl font-bold",
                        pkg.isPopular ? "bg-lab-primary text-slate-950 hover:bg-lab-primary/90" : "bg-white/10 text-white hover:bg-white/20"
                      )}>
                        {pkg.isCustom ? "Contact Sales" : "Get Started"}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Packages Section */}
      <section className="py-24 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
              Innovation Lab for Education
            </h2>
            <p className="text-lg text-slate-400">
              Empowering the next generation of builders, thinkers, and innovators.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {learningPackages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full flex flex-col bg-slate-900 border-slate-800 hover:border-corporate-primary/50 transition-all">
                  <CardHeader>
                    <div className="mb-6 p-4 rounded-2xl bg-linear-to-br from-corporate-primary/20 to-transparent text-white w-fit shadow-lg border border-corporate-primary/20">
                        {pkg.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-white">{pkg.title}</CardTitle>
                    <p className="text-slate-400 text-sm pt-2">{pkg.description}</p>
                  </CardHeader>
                  <CardContent className="grow">
                    <div className="mb-6">
                      {pkg.isCustom ? (
                        <span className="text-3xl font-extrabold text-corporate-primary">Custom</span>
                      ) : (
                        <>
                          <span className="text-4xl font-extrabold text-white">{formatPrice(pkg.priceUSD, currency)}</span>
                          {pkg.period && <span className="text-slate-400">{pkg.period}</span>}
                        </>
                      )}
                    </div>
                    <ul className="space-y-3 text-sm">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-slate-300">
                          <Check className="w-4 h-4 mt-1 text-corporate-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6">
                <Link href={pkg.href} className="w-full">
                    <Button className="w-full border-corporate-primary/50 text-corporate-primary hover:bg-corporate-primary/10 hover:text-corporate-primary font-bold py-6 rounded-lg">
                        {pkg.buttonText}
                    </Button>
                </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offers Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
            <div className="relative bg-linear-to-r from-lab-primary/10 via-corporate-primary/10 to-lab-primary/10 p-8 sm:p-12 rounded-3xl border border-slate-800 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-lab-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-corporate-primary/20 rounded-full blur-3xl"></div>
                <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
                    Special Service Offers
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                    Looking for a one-time project? We offer fixed-price packages for common business needs. Get a high-quality, professional solution without a monthly commitment.
                </p>
                <Link href="/services">
                    <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-full px-10 py-7 text-lg shadow-2xl shadow-white/10">
                        Explore Project Packages
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 border-t border-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Can I change my service package later?", a: "Absolutely. You can upgrade, downgrade, or cancel your service package at any time. We believe in flexibility." },
              { q: "What's the difference between Service Packages and Service Offers?", a: "Service Packages are monthly retainers for ongoing work, ideal for businesses that need continuous development, support, and strategy. Service Offers are fixed-price, one-time projects like building a website or developing an app." },
              { q: "Is there a free trial for the Innovation Lab?", a: "We don't offer a traditional free trial, but we do have a 14-day money-back guarantee for our student plan. If you're not satisfied for any reason, we'll provide a full refund." },
              { q: "How does the 'Custom' pricing for Enterprise and Institutes work?", a: "For our custom plans, we work closely with you to understand your specific needs, user volume, and integration requirements. We then prepare a detailed proposal tailored to your organization." },
            ].map((faq, i) => (
              <details key={i} className="p-6 bg-slate-900 rounded-lg border border-slate-800 cursor-pointer group">
                <summary className="flex justify-between items-center font-bold text-lg text-white list-none">
                  {faq.q}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 group-open:bg-lab-primary transition-colors">
                    <ArrowRight className="w-4 h-4 transform group-open:rotate-90 transition-transform" />
                  </div>
                </summary>
                <p className="text-slate-400 mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

