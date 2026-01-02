/**
 * SafePay Payment Gateway Integration
 * Pakistan-first payment solution for Largify
 */

export interface SafePayPaymentRequest {
  amount: number;
  currency: 'PKR';
  description: string;
  webhookUrl?: string;
  redirectUrl?: string;
  metadata?: {
    userId?: string;
    planId?: string;
    coinPackage?: string;
    [key: string]: any;
  };
}

export interface SafePayPaymentResponse {
  success: boolean;
  paymentUrl?: string;
  trackingId?: string;
  error?: string;
  message?: string;
}

export interface SafePayWebhookPayload {
  trackingId: string;
  status: 'paid' | 'pending' | 'failed' | 'cancelled';
  amount: number;
  currency: string;
  metadata?: Record<string, any>;
  createdAt: string;
}

class SafePayClient {
  private publicKey: string;
  private secretKey: string;
  private baseUrl: string;

  constructor() {
    this.publicKey = process.env.NEXT_PUBLIC_SAFEPAY_PUBLIC_KEY || '';
    this.secretKey = process.env.SAFEPAY_SECRET_KEY || '';
    this.baseUrl = process.env.NEXT_PUBLIC_SAFEPAY_BASE_URL || 'https://api.getsafepay.com';

    if (!this.publicKey || !this.secretKey) {
      console.warn('⚠️ SafePay credentials not configured');
    }
  }

  /**
   * Create a payment checkout session
   */
  async createPayment(request: SafePayPaymentRequest): Promise<SafePayPaymentResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/order/v1/init`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.secretKey}`,
        },
        body: JSON.stringify({
          environment: process.env.NODE_ENV === 'production' ? 'production' : 'sandbox',
          client: this.publicKey,
          amount: request.amount,
          currency: request.currency,
          order_id: `LGF-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          description: request.description,
          webhook_url: request.webhookUrl || `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/webhook`,
          redirect_url: request.redirectUrl || `${process.env.NEXT_PUBLIC_APP_URL}/student/coins?status=success`,
          cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/student/coins?status=cancelled`,
          metadata: request.metadata,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        return {
          success: false,
          error: error.message || 'Payment initialization failed',
        };
      }

      const data = await response.json();
      
      return {
        success: true,
        paymentUrl: data.checkout_url || data.url,
        trackingId: data.tracking_id || data.token,
        message: 'Payment session created successfully',
      };
    } catch (error) {
      console.error('SafePay payment error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Payment failed',
      };
    }
  }

  /**
   * Verify payment status
   */
  async verifyPayment(trackingId: string): Promise<SafePayWebhookPayload | null> {
    try {
      const response = await fetch(`${this.baseUrl}/order/v1/track/${trackingId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.secretKey}`,
        },
      });

      if (!response.ok) {
        return null;
      }

      return await response.json();
    } catch (error) {
      console.error('SafePay verification error:', error);
      return null;
    }
  }

  /**
   * Client-side payment initialization (using public key only)
   */
  getPublicKey(): string {
    return this.publicKey;
  }

  /**
   * Format amount to PKR format
   */
  formatAmount(amount: number): string {
    return `₨${amount.toLocaleString('en-PK')}`;
  }
}

// Singleton instance
export const safePayClient = new SafePayClient();

/**
 * Client-side hook for payment initialization
 */
export function useSafePay() {
  const initiatePayment = async (request: SafePayPaymentRequest) => {
    try {
      // Call our API route which uses the server-side client
      const response = await fetch('/api/payments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const data = await response.json();

      if (data.success && data.paymentUrl) {
        // Redirect to SafePay checkout
        window.location.href = data.paymentUrl;
      } else {
        throw new Error(data.error || 'Payment initialization failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      throw error;
    }
  };

  return { initiatePayment };
}
