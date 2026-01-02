'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  Crown,
  CreditCard,
  User,
  Mail,
  Phone,
  Lock,
  ChevronLeft,
  CheckCircle,
  AlertCircle,
  Loader2,
  Shield,
  Coins,
  Zap,
  TrendingUp,
  Rocket,
  Star
} from 'lucide-react'

const subscriptionPlans: Record<string, any> = {
  starter: { 
    name: 'Starter Plus', 
    monthlyPrice: 999, 
    annualPrice: 9590,
    monthlyCoins: 150,
    icon: Zap,
    color: 'from-blue-500 to-cyan-500'
  },
  growth: { 
    name: 'Growth Pack', 
    monthlyPrice: 1999, 
    annualPrice: 19190,
    monthlyCoins: 400,
    icon: TrendingUp,
    color: 'from-violet-500 to-purple-600'
  },
  pro: { 
    name: 'Pro Builder', 
    monthlyPrice: 3499, 
    annualPrice: 33590,
    monthlyCoins: 800,
    icon: Rocket,
    color: 'from-amber-500 to-orange-500'
  }
}

function SubscriptionCheckoutPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const planId = searchParams.get('plan') as keyof typeof subscriptionPlans
  const billingCycle = (searchParams.get('billing') || 'monthly') as 'monthly' | 'annual'
  const plan = subscriptionPlans[planId]

  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  // Personal Information
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
  })

  // Card Information
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  })

  useEffect(() => {
    if (!plan) {
      router.push('/student/subscription')
    }
  }, [plan, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target
    
    if (name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()
      value = value.slice(0, 19)
    }
    
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '')
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4)
      }
      value = value.slice(0, 5)
    }
    
    if (name === 'cvv') {
      value = value.replace(/\D/g, '').slice(0, 4)
    }
    
    setCardData(prev => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.phone) {
      setError('Please fill in all required personal information')
      return false
    }
    
    if (!cardData.cardNumber || !cardData.expiryDate || !cardData.cvv || !cardData.cardName) {
      setError('Please fill in all card information')
      return false
    }
    
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!validateForm()) {
      return
    }

    setIsProcessing(true)

    try {
      const amount = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice

      // Mock payment processing (2 second delay)
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Generate mock tracking ID
      const trackingId = `MOCK_SUB_${Date.now()}_${Math.random().toString(36).substring(2, 10).toUpperCase()}`

      // Redirect to success page
      router.push(
        `/student/subscription/checkout/success?` +
        `tracking=${trackingId}&` +
        `amount=${amount}&` +
        `plan=${plan.name}&` +
        `billing=${billingCycle}&` +
        `coins=${plan.monthlyCoins}`
      )
    } catch (error) {
      console.error('Payment error:', error)
      setError('Payment failed. Please try again.')
      setIsProcessing(false)
    }
  }

  if (!plan) return null

  const Icon = plan.icon
  const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice
  const savings = billingCycle === 'annual' ? plan.monthlyPrice * 12 - plan.annualPrice : 0

  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        Back to Plans
      </button>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Complete Your Subscription</h1>
          <p className="text-slate-400">Secure checkout powered by SafePay</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#111927] border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-violet-500/20 rounded-lg">
                    <User className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Personal Information</h2>
                    <p className="text-sm text-slate-400">Required for your subscription account</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-[#0b1120] border border-slate-700 rounded-lg focus:border-violet-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-[#0b1120] border border-slate-700 rounded-lg focus:border-violet-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+92 300 1234567"
                      className="w-full px-4 py-3 bg-[#0b1120] border border-slate-700 rounded-lg focus:border-violet-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Karachi"
                      className="w-full px-4 py-3 bg-[#0b1120] border border-slate-700 rounded-lg focus:border-violet-500 focus:outline-none"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium mb-2">Address</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street address"
                      className="w-full px-4 py-3 bg-[#0b1120] border border-slate-700 rounded-lg focus:border-violet-500 focus:outline-none"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Card Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#111927] border border-slate-800 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-amber-500/20 rounded-lg">
                    <CreditCard className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Payment Information</h2>
                    <p className="text-sm text-slate-400">Secure and encrypted</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Cardholder Name *</label>
                    <input
                      type="text"
                      name="cardName"
                      value={cardData.cardName}
                      onChange={handleCardChange}
                      placeholder="Name on card"
                      className="w-full px-4 py-3 bg-[#0b1120] border border-slate-700 rounded-lg focus:border-amber-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Card Number *</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardData.cardNumber}
                      onChange={handleCardChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 bg-[#0b1120] border border-slate-700 rounded-lg focus:border-amber-500 focus:outline-none font-mono"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date *</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={cardData.expiryDate}
                        onChange={handleCardChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 bg-[#0b1120] border border-slate-700 rounded-lg focus:border-amber-500 focus:outline-none font-mono"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV *</label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardData.cvv}
                        onChange={handleCardChange}
                        placeholder="123"
                        className="w-full px-4 py-3 bg-[#0b1120] border border-slate-700 rounded-lg focus:border-amber-500 focus:outline-none font-mono"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-green-400 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Your card information is encrypted and secure</span>
                  </div>
                </div>
              </motion.div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                type="submit"
                disabled={isProcessing}
                className="w-full px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 rounded-xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Lock className="w-6 h-6" />
                    Subscribe for ₨{price.toLocaleString()}/{billingCycle === 'annual' ? 'year' : 'month'}
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-slate-400">
                By subscribing, you agree to automatic renewal. Cancel anytime.
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-[#111927] border border-slate-800 rounded-xl p-6 sticky top-8"
            >
              <h3 className="text-xl font-bold mb-6">Subscription Summary</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-4 p-4 bg-[#0b1120] rounded-lg">
                  <div className={`p-3 bg-gradient-to-br ${plan.color} rounded-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{plan.name}</div>
                    <div className="text-sm text-slate-400 capitalize">{billingCycle} billing</div>
                  </div>
                </div>

                <div className="space-y-3 py-4 border-y border-slate-800">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Plan Price</span>
                    <span className="font-medium">₨{price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Billing Cycle</span>
                    <span className="font-medium capitalize">{billingCycle}</span>
                  </div>
                  {savings > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-400">Annual Savings</span>
                      <span className="text-green-400 font-medium">₨{savings}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold">Total Today</span>
                  <span className="text-2xl font-bold text-violet-400">₨{price.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-start gap-2">
                  <Coins className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>{plan.monthlyCoins} coins per month</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Access to premium content</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Email support included</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0b1120] flex items-center justify-center"><div className="text-white">Loading...</div></div>}>
      <SubscriptionCheckoutPage />
    </Suspense>
  )
}
