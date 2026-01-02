# Largify Venture Lab - App Structure

## 📁 Application Structure

The application has been reorganized into a clean, standard Next.js App Router structure with route groups for better organization.

```
app/
├── (public)/                    # Public website pages
│   ├── about/                   # About page (/about)
│   ├── contact/                 # Contact page (/contact)
│   ├── how-it-works/            # How it works page (/how-it-works)
│   └── page.tsx                 # Landing page (/)
├── (dashboard)/                 # Dashboard portals
│   ├── admin/                   # Admin dashboard (/admin)
│   ├── corporate/               # Corporate dashboard (/corporate)
│   ├── mentor/                  # Mentor dashboard (/mentor)
│   └── student/                 # Student dashboard (/student)
├── auth/                        # Authentication pages
│   ├── login/                   # Login page (/auth/login)
│   └── register/                # Register page (/auth/register)
├── favicon.ico                  # Favicon
├── globals.css                  # Global styles
└── layout.tsx                   # Root layout
```

## 🎯 Route Groups

### `(public)` - Public Website
Contains all marketing and informational pages that are accessible without authentication:
- **Landing Page** (`/`) - Main marketing page with features, pricing, and CTA
- **About** (`/about`) - Company story, mission, vision, and team
- **How It Works** (`/how-it-works`) - Product walkthrough for all 4 user roles
- **Contact** (`/contact`) - Contact form and support information

### `(dashboard)` - User Portals
Contains all authenticated dashboard pages for the 4 user roles:
- **Student Dashboard** (`/student`) - Idea submission, team management, validation
- **Mentor Dashboard** (`/mentor`) - Session management, startup assignments
- **Admin Dashboard** (`/admin`) - Cohort analytics, pipeline monitoring
- **Corporate Dashboard** (`/corporate`) - Deal flow, pilot project management

### `auth` - Authentication
Contains login and registration pages for user authentication.

## 🔧 Benefits of This Structure

### 1. **Clear Separation**
- Public website is completely separate from authenticated portals
- Easy to identify which pages require authentication

### 2. **Scalability**
- Easy to add new public pages in `(public)` folder
- Easy to add new dashboard roles in `(dashboard)` folder
- Route groups don't affect URL structure

### 3. **Organization**
- Related pages are grouped together
- No more mixing public and private pages in the same directory

### 4. **Maintenance**
- Easier to apply different layouts or middleware to different sections
- Clearer mental model for developers

## 🚀 URL Structure

The route groups don't affect the URL paths - they remain the same:

```
Public Pages:
/                     -> (public)/page.tsx
/about                -> (public)/about/page.tsx
/contact              -> (public)/contact/page.tsx
/how-it-works         -> (public)/how-it-works/page.tsx

Dashboard Pages:
/student              -> (dashboard)/student/page.tsx
/mentor               -> (dashboard)/mentor/page.tsx
/admin                -> (dashboard)/admin/page.tsx
/corporate            -> (dashboard)/corporate/page.tsx

Auth Pages:
/auth/login           -> auth/login/page.tsx
/auth/register        -> auth/register/page.tsx
```

## 📝 Next.js Route Groups

Route groups are a Next.js feature that allow you to organize your routes without affecting the URL structure. The parentheses `()` indicate a route group:

- `(public)` - Groups public website pages
- `(dashboard)` - Groups dashboard portal pages

Route groups are ignored in the URL path, so `/student` still works even though the file is at `app/(dashboard)/student/page.tsx`.

## 🔄 Migration Notes

This reorganization maintains all existing functionality while providing better structure:

- ✅ All routes work exactly the same
- ✅ No changes to component imports or navigation
- ✅ Build process unchanged
- ✅ All mock data and functionality preserved
- ✅ TypeScript types and interfaces unchanged

## 🎨 Future Enhancements

With this structure, you can easily:

1. **Add Layouts**: Create different layouts for public vs dashboard pages
2. **Add Middleware**: Apply different middleware rules to route groups
3. **Add Loading States**: Different loading UI for public vs dashboard
4. **Add Error Boundaries**: Separate error handling for different sections

## 📋 File Structure Summary

```
✅ Public Website: app/(public)/
✅ Student Portal: app/(dashboard)/student/
✅ Mentor Portal: app/(dashboard)/mentor/
✅ Admin Portal: app/(dashboard)/admin/
✅ Corporate Portal: app/(dashboard)/corporate/
✅ Auth Pages: app/auth/
✅ Shared Layout: app/layout.tsx
✅ Global Styles: app/globals.css
```

This structure provides a solid foundation for scaling the application while maintaining clean, organized code.</content>
<parameter name="filePath">/Users/macbookpro/Desktop/largifylab/APP_STRUCTURE.md