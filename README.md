🧩 Overview

Nexus is a modern, full-featured Learning Management System where teachers can create and publish courses with video content, and students can browse, purchase, and track their learning progress. It supports role-based access, a rich course editor, video streaming, payment processing, and an analytics dashboard — all in a clean, responsive UI.
🌐 Live: nexus-gamma-smoky.vercel.app

✨ Features
👩‍🎓 Student Experience

Browse and search the course catalogue
Purchase courses securely via Stripe
Stream video lessons via Mux
Mark chapters as complete and track progress with a visual progress bar
Celebrate course completion with confetti 🎉
Personal dashboard showing enrolled and in-progress courses

👨‍🏫 Teacher / Admin Experience

Dedicated teacher dashboard with earnings analytics (Recharts)
Full course creation & editing — title, description, image, category, price
Rich-text chapter descriptions powered by React Quill
Drag-and-drop chapter reordering via @hello-pangea/dnd
Video upload and automatic processing / HLS transcoding via Mux
Image & attachment uploads via UploadThing
Publish / unpublish courses and individual chapters
Role-based access — teacher IDs configured via environment variable

🔐 Auth & Security

Authentication handled entirely by Clerk (sign-up, sign-in, session management)
Middleware-protected routes
Stripe webhook verification for purchase events


🛠 Tech Stack
LayerTechnologyFrameworkNext.js 14 (App Router)LanguageTypeScriptStylingTailwind CSS + shadcn/ui + Radix UIAuthClerkORMPrismaDatabaseMySQL (hosted on Aiven Cloud)VideoMux (upload + HLS streaming)File UploadUploadThingPaymentsStripeFormsReact Hook Form + ZodStateZustandChartsRechartsRich TextReact QuillDrag & Drop@hello-pangea/dndData Table@tanstack/react-tableDeploymentVercel

📁 Project Structure
nexus-lms/
├── app/                    # Next.js App Router pages & API routes
│   ├── (auth)/             # Sign-in / Sign-up pages (Clerk)
│   ├── (dashboard)/        # Student & teacher dashboard
│   ├── (course)/           # Course viewer (chapters, video player)
│   └── api/                # API route handlers
│       ├── courses/        # Course CRUD
│       ├── webhook/        # Stripe webhook listener
│       └── uploadthing/    # UploadThing file handlers
├── actions/                # Server actions (data fetching helpers)
├── components/             # Shared UI components
│   ├── ui/                 # shadcn/ui primitives
│   └── ...                 # Custom components (editor, player, navbar, etc.)
├── hooks/                  # Custom React hooks
├── lib/                    # Utility libraries (Prisma client, Stripe, Mux, etc.)
├── prisma/
│   └── schema.prisma       # Database schema
├── public/                 # Static assets
├── scripts/                # Utility / seeding scripts
├── middleware.ts            # Clerk auth middleware
├── next.config.js
├── tailwind.config.js
└── package.json

🚀 Getting Started
Prerequisites

Node.js ≥ 18
npm / yarn / pnpm
A MySQL database (local or cloud — e.g. Aiven, PlanetScale, Railway)
Accounts for: Clerk, Mux, UploadThing, Stripe

Installation
bash# 1. Clone the repository
git clone https://github.com/Juhainah/Nexus-Learning-Mnagement-System.git
cd Nexus-Learning-Mnagement-System

# 2. Install dependencies
npm install

# 3. Copy and fill in environment variables
cp .env.example .env
# Edit .env with your actual keys (see section below)

# 4. Push the database schema
npx prisma db push

# 5. Start the development server
npm run dev
Open http://localhost:3000 in your browser.

🔑 Environment Variables
Create a .env file in the root of the project with the following variables:
env# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Database (MySQL)
DATABASE_URL='mysql://user:password@host:port/database?sslmode=REQUIRED'

# UploadThing (file & image uploads)
UPLOADTHING_SECRET=sk_live_...
UPLOADTHING_APP_ID=...

# Mux (video upload & streaming)
MUX_TOKEN_ID=...
MUX_TOKEN_SECRET=...

# Stripe (payments)
STRIPE_API_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Teacher Role — comma-separated Clerk user IDs
NEXT_PUBLIC_TEACHER_ID=user_abc123,user_def456


🗄 Database Setup
Nexus uses Prisma with a MySQL database. After filling in DATABASE_URL:
bash# Push schema to your database (development)
npx prisma db push

# Open Prisma Studio to inspect data
npx prisma studio

# Generate Prisma Client (runs automatically on npm install via postinstall script)
npx prisma generate

☁️ Deployment
The app is deployed on Vercel.

Push the repository to GitHub.
Import the project into Vercel.
Add all environment variables from .env into the Vercel project settings.
Deploy — Vercel will run npm run build automatically.

For Stripe webhooks in production, point your Stripe webhook endpoint to:
https://your-domain.vercel.app/api/webhook

📄 License
This project is licensed under the ISC License.
