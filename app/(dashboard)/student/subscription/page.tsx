'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Crown,
  Zap,
  Rocket,
  CheckCircle2,
  X,
  ChevronLeft,
  Coins,
  Star,
  Users,
  TrendingUp,
  Award,
  Shield,
  Sparkles
} from 'lucide-react'

interface Feature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

const subscriptionPlans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    monthlyCoins: 0,
    color: 'from-slate-500 to-slate-600',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-700',
    icon: Star,
    popular: false,
    features: [
      { text: 'All beginner level content', included: true },
      { text: 'Basic CTF challenges', included: true },
      { text: 'Community access', included: true },
      { text: 'Progress tracking', included: true },
      { text: 'Monthly coins allowance', included: false },
      { text: 'Intermediate content', included: false },
      { text: 'Advanced content', included: false },
      { text: 'Priority support', included: false },
      { text: 'Career features', included: false }
    ]
  },
  {
    id: 'starter',
    name: 'Starter Plus',
    price: 999,
    monthlyCoins: 150,
    coinValue: 750,
    savings: 25,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    icon: Zap,
    popular: false,
    features: [
      { text: 'Everything in Free', included: true },
      { text: '150 coins per month', included: true, highlight: true },
      { text: '15% discount on coin purchases', included: true },
      { text: 'Limited intermediate content', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced content', included: false },
      { text: 'Team features', included: false },
      { text: 'Career tools', included: false },
      { text: 'Certificate discounts', included: false }
    ]
  },
  {
    id: 'growth',
    name: 'Growth Pack',
    price: 1999,
    monthlyCoins: 400,
    coinValue: 2000,
    savings: 50,
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    icon: TrendingUp,
    popular: true,
    features: [
      { text: 'Everything in Starter Plus', included: true },
      { text: '400 coins per month', included: true, highlight: true },
      { text: '20% discount on coin purchases', included: true },
      { text: 'Full access to all domains', included: true },
      { text: 'Priority labs & challenges', included: true },
      { text: 'Team collaboration tools', included: true },
      { text: 'Certificate discounts (30%)', included: true, highlight: true },
      { text: 'Priority email support', included: true },
      { text: 'Monthly progress reports', included: true }
    ]
  },
  {
    id: 'pro',
    name: 'Pro Builder',
    price: 3499,
    monthlyCoins: 800,
    coinValue: 4000,
    savings: 65,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    icon: Rocket,
    popular: false,
    features: [
      { text: 'Everything in Growth Pack', included: true },
      { text: '800+ coins per month', included: true, highlight: true },
      { text: '30% discount on coin purchases', included: true },
      { text: 'Full platform access', included: true, highlight: true },
      { text: 'Unlimited advanced content', included: true },
      { text: 'All case studies unlocked', included: true },
      { text: 'Career features & portfolio', included: true },
      { text: '1-on-1 mentor sessions', included: true, highlight: true },
      { text: 'Premium certificates (50% off)', included: true },
      { text: 'Priority support (24h response)', included: true }
    ]
  }
]

export default function SubscriptionPage() {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<string>('growth')
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const handleSubscribe = (planId: string) => {
    if (planId === 'free') {
      alert('You are already on the free plan!')
      return
    }

    // Redirect to checkout page with plan and billing cycle
    router.push(`/student/subscription/checkout?plan=${planId}&billing=${billingCycle}`)
  }

  const getAnnualPrice = (monthlyPrice: number) => {
    return Math.floor(monthlyPrice * 12 * 0.8) // 20% annual discount
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Back
      </button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-violet-400 font-medium">Pakistan-First Pricing</span>
        </div>

        <h1 className="text-5xl font-bold mb-4 heading-gradient">Choose Your Learning Path</h1>
        <p className="text-xl text-white/80 mb-8">
          Free entry. Paid acceleration. Serious learning.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 p-1 bg-[#111927] border border-slate-800 rounded-lg">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              billingCycle === 'monthly'
                ? 'bg-violet-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              billingCycle === 'annual'
                ? 'bg-violet-500 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Annual
            <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded">Save 20%</span>
          </button>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-4 gap-6 mb-12">
        {subscriptionPlans.map((plan, index) => {
          const Icon = plan.icon
          const displayPrice = billingCycle === 'annual' && plan.price > 0
            ? getAnnualPrice(plan.price)
            : plan.price

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-[#111927] border-2 rounded-xl p-6 ${
                plan.popular
                  ? 'border-violet-500 scale-105'
                  : plan.borderColor
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full text-xs font-bold">
                  BEST VALUE
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">₨{displayPrice}</span>
                  {plan.price > 0 && (
                    <span className="text-slate-400">/{billingCycle === 'annual' ? 'year' : 'month'}</span>
                  )}
                </div>
                {plan.monthlyCoins > 0 && (
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 font-bold">{plan.monthlyCoins} coins/mo</span>
                  </div>
                )}
                {plan.savings && (
                  <div className="mt-2 text-sm">
                    <span className="text-green-400">Save ₨{plan.savings}+ monthly</span>
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature: Feature, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-3 text-sm ${
                      !feature.included ? 'opacity-40' : ''
                    }`}
                  >
                    {feature.included ? (
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                        feature.highlight ? 'text-violet-400' : 'text-green-400'
                      }`} />
                    ) : (
                      <X className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    )}
                    <span className={feature.highlight && feature.included ? 'text-violet-400 font-medium' : ''}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleSubscribe(plan.id)}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white'
                    : plan.id === 'free'
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-300'
                    : 'bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white'
                }`}
              >
                {plan.id === 'free' ? 'Current Plan' : 'Continue to Checkout'}
              </button>
            </motion.div>
          )
        })}
      </div>

      {/* Value Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-8 mb-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Why Subscriptions Beat Buying Coins Individually</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">₨{subscriptionPlans[2].coinValue}</div>
            <div className="text-slate-400 mb-4">Worth of coins included</div>
            <div className="text-sm text-violet-400">in Growth Pack (₨1,999/mo)</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="p-4 bg-green-500/20 rounded-full">
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2">50%+</div>
            <div className="text-slate-400 mb-4">More value than</div>
            <div className="text-sm text-slate-500">buying coins individually</div>
          </div>
        </div>
      </motion.div>

      {/* Coin Usage Guide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold mb-6 heading-gradient">What Can You Do With Coins?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-6 hover:border-violet-500/50 transition-all">
            <div className="text-3xl mb-2">📚</div>
            <h4 className="font-bold mb-2">Lessons & Courses</h4>
            <p className="text-sm text-slate-400 mb-3">Access exclusive video lectures, documentation, and comprehensive course materials</p>
            <div className="text-amber-400 text-sm font-bold">10-300 coins</div>
          </div>
          
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
            <div className="text-3xl mb-2">💻</div>
            <h4 className="font-bold mb-2">Labs & Practice</h4>
            <p className="text-sm text-slate-400 mb-3">Hands-on development environments and practice projects with real-world scenarios</p>
            <div className="text-cyan-400 text-sm font-bold">20-100 coins</div>
          </div>

          <div className="bg-[#111927] border border-slate-800 rounded-xl p-6 hover:border-purple-500/50 transition-all">
            <div className="text-3xl mb-2">⚔️</div>
            <h4 className="font-bold mb-2">CTF Challenges</h4>
            <p className="text-sm text-slate-400 mb-3">Challenge The Field - compete in domain-specific challenges to validate skills</p>
            <div className="text-purple-400 text-sm font-bold">15-200 coins</div>
          </div>

          <div className="bg-[#111927] border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all">
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="font-bold mb-2">Case Studies</h4>
            <p className="text-sm text-slate-400 mb-3">Real-world business scenarios and problem-solving case studies</p>
            <div className="text-emerald-400 text-sm font-bold">25-100 coins</div>
          </div>
        </div>
      </motion.div>

      {/* FAQ / Additional Info */}
      <div className="grid grid-cols-2 gap-6 mb-12">
        <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-violet-400" />
            Fair & Honest System
          </h3>
          <div className="space-y-3 text-sm text-slate-300">
            <p>✓ Coins cannot buy certificates - only access to learning</p>
            <p>✓ Failed attempts may cost coins - this ensures serious effort</p>
            <p>✓ No pay-to-win mechanics - skill determines success</p>
            <p>✓ Refunds available only for technical issues</p>
          </div>
        </div>

        <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-amber-400" />
            Institute & Enterprise Plans
          </h3>
          <div className="space-y-3 text-sm text-slate-300">
            <p>✓ Bulk coin purchases for student allocation</p>
            <p>✓ Custom pricing for educational institutions</p>
            <p>✓ Usage tracking and analytics dashboard</p>
            <p>✓ Dedicated support and onboarding</p>
          </div>
        </div>
      </div>

      {/* Enterprise CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 rounded-xl p-8 text-center"
      >
        <Award className="w-12 h-12 text-amber-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-3">Looking for Team or Institute Plans?</h3>
        <p className="text-slate-300 mb-6">
          Custom pricing, bulk coins, and dedicated support for teams of 10+
        </p>
        <button
          onClick={() => router.push('/enterprise')}
          className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-lg font-medium transition-all"
        >
          View Enterprise Plans
        </button>
      </motion.div>
    </div>
  )
}
