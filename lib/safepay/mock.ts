/**
 * Mock SafePay Payment System
 * For demonstration and testing purposes only
 * Simulates payment processing without real transactions
 */

export interface MockPaymentResponse {
  success: boolean;
  trackingId: string;
  status: 'PAID' | 'PENDING' | 'FAILED';
  amount: number;
  currency: string;
  message: string;
  timestamp: string;
}

/**
 * Simulate payment processing delay
 */
const simulateDelay = (ms: number = 2000) => 
  new Promise(resolve => setTimeout(resolve, ms));

/**
 * Generate a mock tracking ID
 */
const generateMockTrackingId = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 10).toUpperCase();
  return `MOCK_${timestamp}_${random}`;
};

/**
 * Mock payment initialization
 * Simulates creating a payment session without calling real API
 */
export async function mockInitiatePayment(data: {
  amount: number;
  currency?: string;
  orderId: string;
  metadata?: Record<string, any>;
}): Promise<MockPaymentResponse> {
  // Simulate API delay
  await simulateDelay(1500);

  const trackingId = generateMockTrackingId();

  // Simulate 95% success rate (5% random failures for testing)
  const isSuccess = Math.random() > 0.05;

  if (isSuccess) {
    return {
      success: true,
      trackingId,
      status: 'PAID',
      amount: data.amount,
      currency: data.currency || 'PKR',
      message: 'Mock payment processed successfully',
      timestamp: new Date().toISOString(),
    };
  } else {
    return {
      success: false,
      trackingId,
      status: 'FAILED',
      amount: data.amount,
      currency: data.currency || 'PKR',
      message: 'Mock payment failed (random failure for testing)',
      timestamp: new Date().toISOString(),
    };
  }
}

/**
 * Mock payment verification
 * Simulates verifying a payment status
 */
export async function mockVerifyPayment(trackingId: string): Promise<MockPaymentResponse> {
  await simulateDelay(1000);

  // Mock verification always returns success for existing tracking IDs
  if (trackingId.startsWith('MOCK_')) {
    return {
      success: true,
      trackingId,
      status: 'PAID',
      amount: 0,
      currency: 'PKR',
      message: 'Mock payment verified successfully',
      timestamp: new Date().toISOString(),
    };
  }

  return {
    success: false,
    trackingId,
    status: 'FAILED',
    amount: 0,
    currency: 'PKR',
    message: 'Invalid tracking ID',
    timestamp: new Date().toISOString(),
  };
}

/**
 * Mock webhook payload generator
 * Simulates SafePay webhook notifications
 */
export function generateMockWebhook(data: {
  trackingId: string;
  amount: number;
  orderId: string;
  status: 'PAID' | 'PENDING' | 'FAILED';
  metadata?: Record<string, any>;
}) {
  return {
    tracker: {
      id: data.trackingId,
    },
    data: {
      state: data.status,
      amount: data.amount,
      currency: 'PKR',
      reference: data.orderId,
      metadata: data.metadata,
      created_at: new Date().toISOString(),
    },
    event: 'payment.succeeded',
  };
}

/**
 * Check if mock mode is enabled
 */
export function isMockPaymentEnabled(): boolean {
  return process.env.NEXT_PUBLIC_MOCK_PAYMENTS === 'true';
}

/**
 * Console logger for mock payments (helps with debugging)
 */
export function logMockPayment(action: string, data: any) {
  if (isMockPaymentEnabled()) {
    console.log('🎭 [MOCK PAYMENT]', action, JSON.stringify(data, null, 2));
  }
}
