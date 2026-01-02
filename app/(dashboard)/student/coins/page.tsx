'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Coins,
  Plus,
  Gift,
  TrendingUp,
  Star,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  CreditCard,
  Wallet,
  Shield
} from 'lucide-react'

const coinPackages = [
  {
    id: 'starter',
    coins: 100,
    price: 500,
    currency: 'PKR',
    popular: false,
    bonus: 0,
    perCoin: 5
  },
  {
    id: 'value',
    coins: 250,
    price: 1100,
    currency: 'PKR',
    popular: true,
    bonus: 50,
    perCoin: 4.4,
    savings: 12
  },
  {
    id: 'pro',
    coins: 500,
    price: 2000,
    currency: 'PKR',
    popular: false,
    bonus: 100,
    perCoin: 4,
    savings: 20
  },
  {
    id: 'premium',
    coins: 1000,
    price: 3500,
    currency: 'PKR',
    popular: false,
    bonus: 300,
    perCoin: 3.5,
    savings: 30
  }
]

const coinEarningMethods = [
  {
    title: 'Daily Streak',
    description: 'Complete lessons for 7 consecutive days',
    reward: '50 coins',
    icon: Zap,
    difficulty: 'Easy'
  },
  {
    title: 'Beginner Track Completion',
    description: 'Finish entire beginner track in any domain',
    reward: '30 coins',
    icon: CheckCircle2,
    difficulty: 'Medium'
  },
  {
    title: 'Referral Program',
    description: 'Invite friends who complete their first lesson',
    reward: '20 coins per referral',
    icon: Gift,
    difficulty: 'Easy'
  },
  {
    title: 'Institute Challenges',
    description: 'Participate in sponsored challenges',
    reward: 'Varies',
    icon: TrendingUp,
    difficulty: 'Medium'
  }
]

export default function CoinsPage() {
  const router = useRouter()
  const [selectedPackage, setSelectedPackage] = useState<string | null>('value')
  const [currentBalance] = useState(450)

  const handlePurchase = (pkg: typeof coinPackages[0]) => {
    // Redirect to checkout page with package details
    router.push(`/student/coins/checkout?package=${pkg.id}`)
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
        className="mb-8"
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
                <Coins className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">Largify Coins</h1>
                <p className="text-slate-400">Unlock premium lessons and challenges</p>
              </div>
            </div>
          </div>

          {/* Current Balance */}
          <div className="bg-[#111927] border border-slate-800 rounded-xl p-6">
            <div className="text-slate-400 text-sm mb-2">Current Balance</div>
            <div className="flex items-center gap-2">
              <Coins className="w-6 h-6 text-amber-400" />
              <span className="text-3xl font-bold">{currentBalance}</span>
              <span className="text-slate-400">coins</span>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-bold mb-3">How Largify Coins Work</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-violet-500/20 rounded-lg mt-1">
                <Star className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <div className="font-medium mb-1">Unlock Content</div>
                <div className="text-sm text-slate-400">Access intermediate and advanced lessons</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-500/20 rounded-lg mt-1">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="font-medium mb-1">No Expiry</div>
                <div className="text-sm text-slate-400">Coins never expire, use them anytime</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-500/20 rounded-lg mt-1">
                <Zap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="font-medium mb-1">Earn More</div>
                <div className="text-sm text-slate-400">Complete challenges to earn bonus coins</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Coin Packages */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Buy Largify Coins</h2>
        <div className="grid grid-cols-4 gap-6">
          {coinPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`relative bg-[#111927] border-2 rounded-xl p-6 cursor-pointer transition-all ${
                selectedPackage === pkg.id
                  ? 'border-violet-500 scale-105'
                  : pkg.popular
                  ? 'border-amber-500/50'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-bold">
                  BEST VALUE
                </div>
              )}

              <div className="text-center mb-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Coins className="w-8 h-8 text-amber-400" />
                  <div className="text-4xl font-bold">{pkg.coins}</div>
                </div>
                {pkg.bonus > 0 && (
                  <div className="text-sm text-green-400">+{pkg.bonus} bonus coins</div>
                )}
              </div>

              <div className="text-center mb-4">
                <div className="text-3xl font-bold mb-1">₨{pkg.price}</div>
                <div className="text-xs text-slate-400">₨{pkg.perCoin} per coin</div>
                {pkg.savings && (
                  <div className="text-sm text-violet-400 mt-1">Save {pkg.savings}%</div>
                )}
              </div>

              {selectedPackage === pkg.id && (
                <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-6 h-6 text-violet-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Purchase Button */}
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6"
          >
            <button
              onClick={() => {
                const pkg = coinPackages.find(p => p.id === selectedPackage)
                if (pkg) handlePurchase(pkg)
              }}
              className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl font-medium text-lg transition-all flex items-center justify-center gap-3"
            >
              <CreditCard className="w-6 h-6" />
              <span>
                Continue to Checkout - ₨{coinPackages.find(p => p.id === selectedPackage)?.price}
              </span>
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-center text-sm text-slate-400 mt-3">
              <Shield className="w-4 h-4 inline mr-1" />
              Secure payment powered by SafePay
            </p>
          </motion.div>
        )}
      </div>

      {/* Earn Coins Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Earn Free Coins</h2>
        <div className="grid grid-cols-2 gap-6">
          {coinEarningMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-[#111927] border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-violet-500/10 rounded-xl">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    method.difficulty === 'Easy'
                      ? 'bg-green-500/10 text-green-400 border border-green-500/30'
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {method.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{method.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-amber-400" />
                    <span className="font-bold text-amber-400">{method.reward}</span>
                  </div>
                  <button className="text-violet-400 hover:text-violet-300 text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Coin Usage Info */}
      <div className="bg-[#111927] border border-slate-800 rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Coin Usage Guide</h2>
        <div className="grid grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-3 text-lg">Beginner Level</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div>• All lessons: <span className="text-green-400 font-bold">Free</span></div>
              <div>• Basic challenges: <span className="text-green-400 font-bold">Free</span></div>
              <div>• Community access: <span className="text-green-400 font-bold">Free</span></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg">Intermediate Level</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div>• Lessons: <span className="text-amber-400 font-bold">20-40 coins</span></div>
              <div>• CTF Challenges: <span className="text-amber-400 font-bold">30-50 coins</span></div>
              <div>• Case studies: <span className="text-amber-400 font-bold">25 coins</span></div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-3 text-lg">Advanced Level</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <div>• Lessons: <span className="text-red-400 font-bold">50-70 coins</span></div>
              <div>• Advanced CTF: <span className="text-red-400 font-bold">70-100 coins</span></div>
              <div>• Simulations: <span className="text-red-400 font-bold">80-120 coins</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Upsell */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-8 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 border border-violet-500/30 rounded-xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold mb-3">Want more value?</h3>
        <p className="text-slate-300 mb-6">
          Subscriptions include monthly coin allowances at discounted rates, plus exclusive benefits
        </p>
        <button
          onClick={() => router.push('/student/subscription')}
          className="px-8 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-lg font-medium transition-all inline-flex items-center gap-2"
        >
          View Subscription Plans
          <ArrowRight className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  )
}
