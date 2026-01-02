# 🚀 SafePay Payment Testing Guide

## Quick Start

### 1. Start Development Server
```bash
cd /Users/macbookpro/Desktop/largifylab
npm run dev
```

### 2. Test Coin Purchase
1. Navigate to: `http://localhost:3000/student/coins`
2. Select any coin package (100, 250, 500, or 1000 coins)
3. Click the large "Purchase" button
4. You'll be redirected to SafePay checkout
5. Use test card: **4242 4242 4242 4242** (sandbox)
6. Complete payment
7. Redirect back to Largify with success status

### 3. Test Subscription
1. Navigate to: `http://localhost:3000/student/subscription`
2. Choose Monthly or Annual billing
3. Click "Subscribe with SafePay" on any plan
4. Redirected to SafePay
5. Complete test payment
6. Return to subscription page with confirmation

---

## ⚙️ Environment Setup Verified

✅ **Public Key:** `sec_a737e13e-7668-4a8b-a792-c3262405572b`
✅ **Secret Key:** Configured in `.env.local` 
✅ **Base URL:** `https://api.getsafepay.com`
✅ **App URL:** `http://localhost:3000`

---

## 🎯 What to Test

### Coin Purchase Flow:
- [ ] 100 coins (₨500) → Basic package
- [ ] 250 coins (₨1,100) → With 50 bonus
- [ ] 500 coins (₨2,000) → With 100 bonus
- [ ] 1000 coins (₨3,500) → With 300 bonus

### Subscription Flow:
- [ ] Starter Plus (₨999/month) → 150 coins
- [ ] Growth Pack (₨1,999/month) → 400 coins
- [ ] Pro Builder (₨3,499/month) → 800 coins
- [ ] Annual billing (20% discount)

### UI States:
- [ ] Loading spinner appears during processing
- [ ] Button disabled prevents double-clicks
- [ ] "Secure payment powered by SafePay" badge visible
- [ ] Error message if payment fails

---

## 📝 Known Limitations (TO-DO)

⚠️ **Balance Not Updated:** Payment completes but coin balance remains static
   - **Why:** Database integration pending
   - **Fix:** Update webhook handler to modify user balance

⚠️ **No Email Confirmation:** Users don't receive receipts
   - **Why:** Email service not integrated
   - **Fix:** Add Resend/SendGrid integration

⚠️ **No Transaction History:** Users can't see past purchases
   - **Why:** Transaction page not created
   - **Fix:** Build `/student/transactions` page

---

## 🔗 Quick Links

- **Coins Page:** http://localhost:3000/student/coins
- **Subscriptions:** http://localhost:3000/student/subscription
- **Dashboard:** http://localhost:3000/student
- **SafePay Dashboard:** https://dashboard.getsafepay.com

---

## 🐛 Troubleshooting

**Payment button not working?**
- Check browser console for errors
- Verify `.env.local` has SafePay keys
- Restart dev server after adding env vars

**Redirect not working?**
- Check `NEXT_PUBLIC_APP_URL` in `.env.local`
- Ensure no trailing slash in URL
- Verify SafePay API is accessible

**Webhook not receiving?**
- Use ngrok for local testing: `ngrok http 3000`
- Update webhook URL in SafePay payment request
- Check `/api/payments/webhook` logs

---

**Ready to Test!** 🎉
