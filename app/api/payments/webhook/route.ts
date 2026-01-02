import { NextRequest, NextResponse } from 'next/server';
import { safePayClient } from '@/lib/safepay/client';

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    
    console.log('SafePay Webhook received:', payload);

    // Verify the payment
    if (payload.trackingId) {
      const verification = await safePayClient.verifyPayment(payload.trackingId);
      
      if (verification && verification.status === 'paid') {
        // Handle successful payment
        const metadata = verification.metadata || {};
        
        // TODO: Update user's coin balance or subscription in database
        // Example:
        // if (metadata.coinPackage) {
        //   await updateUserCoins(metadata.userId, metadata.coins);
        // }
        // if (metadata.planId) {
        //   await updateUserSubscription(metadata.userId, metadata.planId);
        // }

        console.log('✅ Payment verified:', {
          trackingId: verification.trackingId,
          amount: verification.amount,
          metadata,
        });

        return NextResponse.json({ 
          success: true, 
          message: 'Payment processed successfully' 
        });
      }
    }

    return NextResponse.json({ 
      success: false, 
      message: 'Payment verification failed' 
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { success: false, error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
