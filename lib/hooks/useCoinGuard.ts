import { useState, useCallback } from 'react';
import { COIN_COSTS } from '@/lib/coin-costs';

interface UseCoinGuardProps {
  currentCoins: number;
  onCoinUpdate?: (newBalance: number) => void;
}

interface CoinTransaction {
  costType: keyof typeof COIN_COSTS;
  subType: string;
  amount: number;
  success: boolean;
  newBalance?: number;
}

export function useCoinGuard({ currentCoins, onCoinUpdate }: UseCoinGuardProps) {
  const [balance, setBalance] = useState(currentCoins);
  const [lastTransaction, setLastTransaction] = useState<CoinTransaction | null>(null);

  /**
   * Check if user has enough coins for a feature
   */
  const canAfford = useCallback((costType: keyof typeof COIN_COSTS, subType: string): boolean => {
    const costs = COIN_COSTS[costType] as Record<string, number>;
    const cost = costs[subType] || 0;
    return balance >= cost;
  }, [balance]);

  /**
   * Deduct coins from balance
   */
  const deductCoins = useCallback((costType: keyof typeof COIN_COSTS, subType: string): boolean => {
    const costs = COIN_COSTS[costType] as Record<string, number>;
    const cost = costs[subType] || 0;

    if (balance < cost) {
      setLastTransaction({
        costType,
        subType,
        amount: cost,
        success: false,
        newBalance: balance
      });
      return false;
    }

    const newBalance = balance - cost;
    setBalance(newBalance);
    
    setLastTransaction({
      costType,
      subType,
      amount: cost,
      success: true,
      newBalance
    });

    onCoinUpdate?.(newBalance);
    return true;
  }, [balance, onCoinUpdate]);

  /**
   * Add coins to balance (from subscription, rewards, etc.)
   */
  const addCoins = useCallback((amount: number): void => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    onCoinUpdate?.(newBalance);
  }, [balance, onCoinUpdate]);

  /**
   * Get cost of a feature
   */
  const getCost = useCallback((costType: keyof typeof COIN_COSTS, subType: string): number => {
    const costs = COIN_COSTS[costType] as Record<string, number>;
    return costs[subType] || 0;
  }, []);

  /**
   * Check if coins are zero
   */
  const isOutOfCoins = (): boolean => {
    return balance === 0;
  };

  /**
   * Get coins needed to continue (from 0)
   */
  const getMinimumCoinsNeeded = (): number => {
    // Minimum purchase should be 100 coins
    return 100;
  };

  return {
    balance,
    setBalance,
    canAfford,
    deductCoins,
    addCoins,
    getCost,
    isOutOfCoins,
    getMinimumCoinsNeeded,
    lastTransaction
  };
}
