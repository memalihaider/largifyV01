'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Coins, ArrowRight, AlertCircle, X } from 'lucide-react';
import { Button } from './button';
import Link from 'next/link';

interface InsufficientCoinsModalProps {
  isOpen: boolean;
  onClose: () => void;
  requiredCoins: number;
  currentCoins: number;
  featureName: string;
  coinsShortage: number;
}

export function InsufficientCoinsModal({
  isOpen,
  onClose,
  requiredCoins,
  currentCoins,
  featureName,
  coinsShortage
}: InsufficientCoinsModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="relative bg-[#111927] border border-slate-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-500/20 rounded-full">
                <AlertCircle className="w-12 h-12 text-amber-400" />
              </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl font-bold text-center mb-3">Not Enough Coins</h2>
            
            <p className="text-slate-400 text-center mb-6">
              To access <span className="text-white font-semibold">{featureName}</span>, you need more coins.
            </p>

            {/* Coins Display */}
            <div className="bg-slate-900/50 rounded-xl p-6 mb-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Your Balance</span>
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-amber-400" />
                  <span className="text-xl font-bold text-amber-400">{currentCoins}</span>
                </div>
              </div>
              
              <div className="h-px bg-slate-800" />
              
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Required</span>
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-slate-400" />
                  <span className="text-xl font-bold text-slate-400">{requiredCoins}</span>
                </div>
              </div>
            </div>

            {/* Shortage Highlight */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-red-400" />
                  <span className="font-bold text-red-400">
                    {coinsShortage} more coins needed
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <Link href="/student/coins" className="block w-full">
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 flex items-center justify-center gap-2">
                  <Coins className="w-5 h-5" />
                  Buy Coins Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              
              <button
                onClick={onClose}
                className="w-full px-4 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
              >
                Maybe Later
              </button>
            </div>

            {/* Info */}
            <p className="text-xs text-slate-500 text-center mt-4">
              💡 Tip: Subscribe to a plan to get monthly coins automatically
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
