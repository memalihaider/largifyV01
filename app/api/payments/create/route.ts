import { NextRequest, NextResponse } from 'next/server';
import { safePayClient } from '@/lib/safepay/client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { amount, description, metadata, redirectUrl } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { success: false, error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const paymentRequest = {
      amount,
      currency: 'PKR' as const,
      description: description || 'Largify Purchase',
      metadata,
      redirectUrl,
    };

    const result = await safePayClient.createPayment(paymentRequest);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Payment API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Payment failed' 
      },
      { status: 500 }
    );
  }
}
