'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle2, Coins, Download, Home, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

function SuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  useEffect(() => {
    // Get order details from URL params
    const trackingId = searchParams.get('tracking');
    const amount = searchParams.get('amount');
    const planName = searchParams.get('plan');
    const billingCycle = searchParams.get('billing');
    const monthlyCoins = searchParams.get('coins');

    if (trackingId) {
      setOrderDetails({
        trackingId,
        amount: parseInt(amount || '0'),
        planName: planName || 'Subscription',
        billingCycle: billingCycle || 'monthly',
        monthlyCoins: parseInt(monthlyCoins || '0'),
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        time: new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        nextBillingDate: new Date(
          Date.now() + (billingCycle === 'annual' ? 365 : 30) * 24 * 60 * 60 * 1000
        ).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
      });
    }
  }, [searchParams]);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading subscription details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-amber-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Subscription Activated! 🎉
          </h1>
          <p className="text-gray-600">
            Welcome to {orderDetails.planName}
          </p>
        </motion.div>

        {/* Order Summary Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-6"
        >
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Subscription Confirmation
            </h2>
            <p className="text-sm text-gray-500">
              Activated on {orderDetails.date} at {orderDetails.time}
            </p>
          </div>

          {/* Subscription Details */}
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">Monthly Coins</p>
                <div className="flex items-center gap-2">
                  <Coins className="w-8 h-8 text-amber-500" />
                  <span className="text-4xl font-bold text-gray-900">
                    {orderDetails.monthlyCoins}
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-2">
                  ✓ Coins added to your account
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">
                  {orderDetails.billingCycle === 'annual' ? 'Annual' : 'Monthly'} Payment
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  ₨{orderDetails.amount.toLocaleString()}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/50 rounded-lg p-3">
              <Calendar className="w-4 h-4" />
              <span>Next billing date: {orderDetails.nextBillingDate}</span>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Plan</span>
              <span className="font-semibold text-gray-900">
                {orderDetails.planName}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Billing Cycle</span>
              <span className="text-gray-900 capitalize">
                {orderDetails.billingCycle}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Tracking ID</span>
              <span className="font-mono text-sm text-gray-900">
                {orderDetails.trackingId}
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Payment Method</span>
              <span className="text-gray-900">SafePay (Mock)</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Status</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
          </div>

          {/* Download Receipt */}
          <button className="w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            Download Receipt
          </button>
        </motion.div>

        {/* What's Included */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6"
        >
          <h3 className="font-semibold text-gray-900 mb-4">Your Subscription Benefits</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">{orderDetails.monthlyCoins} Coins Every Month</p>
                <p className="text-sm text-gray-600">
                  Automatically added to your account each billing cycle
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Premium Content Access</p>
                <p className="text-sm text-gray-600">
                  Unlock exclusive case studies and resources
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Cancel Anytime</p>
                <p className="text-sm text-gray-600">
                  No commitment - manage your subscription in settings
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Email Support</p>
                <p className="text-sm text-gray-600">
                  Priority support from our team
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => router.push('/student')}
            className="flex-1 py-3 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Dashboard
          </button>
          <button
            onClick={() => router.push('/student/subscription')}
            className="flex-1 py-3 px-6 bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
          >
            Manage Subscription
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mock Payment Notice */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            🎭 <strong>Demo Mode:</strong> This is a mock subscription for demonstration purposes. 
            No real transaction was processed.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SubscriptionCheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
