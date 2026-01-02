# 🔑 Quick Login Reference

## Quick Access Link
**Login Page**: `http://localhost:3000/auth/login`

---

## ⚡ Fastest Login Options

### Click Quick Buttons on Login Page
1. Click **Student** button → Auto-fills student@example.com
2. Click **Mentor** button → Auto-fills mentor@example.com
3. Click **Corporate** button → Auto-fills corporate@example.com
4. Click **Admin** button → Auto-fills admin@largifylab.com
5. Click "Sign In" → Redirects to dashboard

### Default Password for All Non-Admin Accounts
```
password123
```

### Admin Password
```
admin@123
```

---

## 👥 All Available Credentials

### 🎓 STUDENTS (Password: password123)

| Name | Email | Dashboard |
|------|-------|-----------|
| Aman Kumar | student@example.com | /dashboard/student |
| Priya Sharma | priya.sharma@example.com | /dashboard/student |
| Rajesh Patel | rajesh.patel@example.com | /dashboard/student |

### 👨‍🏫 MENTORS (Password: password123)

| Name | Email | Dashboard |
|------|-------|-----------|
| Dr. Vikram Singh | mentor@example.com | /dashboard/mentor |
| Kavya Desai | mentor.kavya@example.com | /dashboard/mentor |
| Arun Verma | mentor.arun@example.com | /dashboard/mentor |

### 🏢 CORPORATE (Password: password123)

| Company | Email | Dashboard |
|---------|-------|-----------|
| TechCorp Ventures | corporate@example.com | /dashboard/corporate |
| MegaSoft Innovation | innovation@megasoft.com | /dashboard/corporate |
| FinTech Global | partnerships@fintech-global.com | /dashboard/corporate |

### 🛡️ ADMIN (Password: admin@123)

| Name | Email | Dashboard |
|------|-------|-----------|
| Admin Portal | admin@largifylab.com | /dashboard/admin |
| Support Admin | support@largifylab.com | /dashboard/admin |

---

## 🚀 Quick Test Steps

1. **Visit Login**: Go to `/auth/login`
2. **Quick Login**: Click any role button (Student/Mentor/Corporate/Admin)
3. **Sign In**: Click the "Sign In" button
4. **View Dashboard**: Get redirected to role-specific dashboard
5. **View Profile**: Click user avatar in navbar to see profile
6. **Logout**: Click "Sign Out" in user dropdown menu

---

## 🎯 Portal Access After Login

### Student Portal Features
After login as student:
- Navigate to `/dashboard/student`
- Access features:
  - ✅ Onboarding (4-step enrollment)
  - ✅ Domain Selection (5 domains)
  - ✅ Nano-niche Selection (22 niches)
  - ✅ Skill Assessment (5-question quiz)
  - ✅ Case Studies (3 complete cases)
  - ✅ Case Execution (3 tabs with AI evaluation)

### Mentor Portal
After login as mentor:
- View assigned students
- Monitor case study progress
- Provide feedback
- Track mentee metrics

### Corporate Portal
After login as corporate:
- View partnership opportunities
- Propose case studies
- Access startup ecosystem
- Generate reports

### Admin Portal
After login as admin:
- User management
- System analytics
- Content management
- Platform configuration

---

## 🔐 Session & Storage

### After Successful Login
Two items stored in browser localStorage:
1. **auth_user** - Complete user object (JSON)
2. **auth_token** - Encoded session token

### How to Check
Open Browser DevTools → Application → Local Storage:
```javascript
// auth_user
{
  id: "student-001",
  email: "student@example.com",
  role: "student",
  name: "Aman Kumar",
  ...
}

// auth_token
eyJzdHVkZW50LTAwMSI6MTczNDA5NjAwMDAwMH0=
```

### Session Cleanup
- Logout clears both auth_user and auth_token
- Session restored on page reload if not logged out
- Browser back button doesn't auto-logout

---

## 🆘 Troubleshooting

### "Invalid email or password"
- Check credentials list above
- Ensure password matches (case-sensitive)
- Note: Admin uses `admin@123`, others use `password123`

### Can't access dashboard after login
- Check localStorage has auth_user
- Browser might need refresh
- Clear cache and reload page

### Quick login buttons don't work
- Try manual entry instead
- Check that page fully loaded
- Refresh and try again

### Lost login session
- Check if logged out (navbar shows Sign In button)
- Check localStorage is not cleared
- Try logging in again

### Wrong dashboard redirect
- Verify you logged in with correct role
- Each role has different dashboard:
  - Student → /dashboard/student
  - Mentor → /dashboard/mentor
  - Admin → /dashboard/admin
  - Corporate → /dashboard/corporate

---

## 📱 Mobile Access

All login features work on mobile:
- Full-width responsive design
- Touch-friendly buttons
- Mobile-optimized form
- Smaller credential list (collapsible)

---

## 🎓 Demo Walk-through

### For First-Time Users
1. Visit `/auth/login`
2. Read "View All Demo Credentials" section
3. Choose a role that interests you
4. Click the role's quick login button
5. Click "Sign In"
6. Explore that role's dashboard

### For Feature Testing
1. Login as **Student** to test case studies
2. Login as **Mentor** to monitor students
3. Login as **Admin** to manage system
4. Logout and test protected routes

### For Role Comparison
1. Login as Student → Explore `/dashboard/student`
2. Logout
3. Login as Mentor → Explore `/dashboard/mentor`
4. Logout and compare features

---

## 🔄 Session Behavior

| Action | Behavior |
|--------|----------|
| Login | Redirects to role dashboard |
| Refresh Page | Stays logged in (session restored) |
| Close Tab | Session persists (localStorage) |
| Browser Back | Can go back but still logged in |
| Logout | Clears session, redirects to home |
| Visit /auth/login while logged in | Can still view login page |
| Try /dashboard/student without login | Redirects to /auth/login |

---

## 💡 Pro Tips

- **Quick Switching**: Logout and click different role button to quickly test all portals
- **Profile Check**: After login, click user avatar to see full profile details
- **Role Verification**: User avatar dropdown shows "Student", "Mentor", "Admin", or "Corporate Partner"
- **Password Reset**: Currently not implemented (development demo)
- **Email Verification**: Not required for demo accounts
- **Account Creation**: Use registration page (`/auth/register`) for new users

---

## ✅ Everything Ready!

✅ Login system fully implemented  
✅ All credentials working  
✅ Dashboard redirects correct  
✅ Session persistence enabled  
✅ Mobile responsive  
✅ Build verified  

Start testing now: `/auth/login`

---

**Updated**: December 31, 2025
