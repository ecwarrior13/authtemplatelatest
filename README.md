# AIsemble Project Template

A production-ready Next.js starter template for AIsemble projects with Supabase authentication and database integration.

## Features

- **Next.js 15+** with App Router and React 19
- **TypeScript** for type safety
- **Supabase** for authentication and database
- **shadcn/ui** components with Tailwind CSS v4
- **Authentication Methods:**
  - Email/Password
  - Google OAuth
  - Magic Link (OTP)
- **Dashboard** with collapsible sidebar
- **Landing Page** with hero section, features, and footer
- **Professional Design** with AIsemble branding

## Getting Started

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Set Up Supabase

This template comes pre-configured with Supabase integration. The following environment variables are already set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- Database connection strings

### 3. Run Database Migrations

Execute the SQL script to set up the user trigger:

\`\`\`bash

# The trigger automatically creates user records in public.users table

# when someone signs up via Supabase Auth

\`\`\`

The trigger is located in `scripts/001_setup_users_trigger.sql` and can be executed directly from v0.

### 4. Configure Google OAuth (Optional)

If you want to enable Google authentication:

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Providers
3. Enable Google and add your OAuth credentials

### 5. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

\`\`\`
app/
├── auth/
│ ├── login/ # Login page with email/password, Google, and OTP
│ ├── sign-up/ # Sign up page
│ ├── verify-email/ # Email verification message
│ └── error/ # Auth error page
├── dashboard/
│ ├── layout.tsx # Dashboard layout with sidebar
│ ├── page.tsx # Main dashboard
│ ├── portfolio/ # Portfolio management
│ ├── dividends/ # Dividend tracking
│ ├── analytics/ # AI-powered analytics
│ └── settings/ # User settings
├── layout.tsx # Root layout
├── page.tsx # Landing page
└── globals.css # Global styles with AIsemble branding

components/
├── navigation.tsx # Landing page navigation
├── footer.tsx # Landing page footer
├── dashboard-sidebar.tsx # Collapsible dashboard sidebar
└── ui/ # shadcn/ui components

lib/
└── supabase/
├── client.ts # Browser client
├── server.ts # Server client
└── proxy.ts # Middleware proxy

proxy.ts # Next.js middleware for auth
scripts/ # SQL migration scripts
\`\`\`

## Database Schema

The `public.users` table structure:

\`\`\`sql
create table public.users (
id uuid not null,
full_name text null,
email text null,
constraint users_pkey primary key (id),
constraint users_id_fkey foreign key (id) references auth.users (id)
);
\`\`\`

Row Level Security (RLS) is enabled with policies for users to manage their own data.

## Customization

### Branding

The template uses AIsemble branding with:

- **Primary Color:** Cyan/turquoise (oklch(0.55 0.15 200))
- **Accent Color:** Orange (oklch(0.65 0.18 45))
- **Typography:** Geist Sans and Geist Mono

Update `app/globals.css` to change the color scheme.

### Add New Pages

Create new pages in the `app/dashboard/` directory. They will automatically use the dashboard layout with sidebar.

### Modify Authentication

All authentication logic is in `app/auth/`. The Supabase client helpers are in `lib/supabase/`.

## Environment Variables

The following environment variables are available:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Public anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key (server-side only)
- `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` - OAuth redirect URL for development

## Deployment

This template is ready to deploy to Vercel:

1. Push to GitHub
2. Import to Vercel
3. Environment variables are already configured
4. Deploy!

## License

MIT
