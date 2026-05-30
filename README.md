# 🎓 Nexus — Learning Management System

> A full-stack LMS for creating, publishing, and purchasing courses — built with Next.js 14, Prisma, Stripe, and Mux.

🌐 **Live Demo:** [nexus-gamma-smoky.vercel.app](https://nexus-gamma-smoky.vercel.app)

---

## ✨ Features

### 👩‍🎓 For Students
- Browse and search the course catalogue
- Purchase courses securely via Stripe
- Stream video lessons via Mux
- Track progress with a visual progress bar
- Celebrate course completion with confetti 🎉

### 👨‍🏫 For Teachers
- Earnings analytics dashboard
- Create & edit courses (title, description, image, price, category)
- Rich-text chapter editor (React Quill)
- Drag-and-drop chapter reordering
- Video upload with automatic HLS transcoding (Mux)
- Image & file uploads (UploadThing)
- Publish / unpublish courses and chapters

### 🔐 Auth & Security
- Authentication via Clerk (sign-up, sign-in, sessions)
- Middleware-protected routes
- Stripe webhook verification

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + shadcn/ui + Radix UI |
| Auth | Clerk |
| ORM | Prisma |
| Database | MySQL (Aiven Cloud) |
| Video | Mux |
| File Upload | UploadThing |
| Payments | Stripe |
| Forms | React Hook Form + Zod |
| State | Zustand |
| Charts | Recharts |
| Deployment | Vercel |

---

## 📁 Project Structure
nexus-lms/
├── app/
│   ├── (auth)/         # Sign-in / Sign-up
│   ├── (dashboard)/    # Student & teacher dashboard
│   ├── (course)/       # Course viewer & video player
│   └── api/            # API routes (courses, webhook, uploadthing)
├── actions/            # Server actions
├── components/         # Shared UI components
├── hooks/              # Custom React hooks
├── lib/                # Prisma, Stripe, Mux clients
├── prisma/             # Database schema
├── public/             # Static assets
├── scripts/            # Seed scripts
└── middleware.ts       # Clerk auth middleware

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- MySQL database
- Accounts: Clerk, Mux, UploadThing, Stripe

### Installation

```bash
git clone https://github.com/Juhainah/Nexus-Learning-Mnagement-System.git
cd Nexus-Learning-Mnagement-System
npm install
cp .env.example .env
# Fill in your environment variables
npx prisma db push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🔑 Environment Variables

See `.env.example` for the full list. Key variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
UPLOADTHING_SECRET=
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_TEACHER_ID=
```

---

## ☁️ Deployment

Deployed on **Vercel**. Add all env variables in Vercel project settings before deploying.

---

Built with ❤️ by [Juhainah](https://github.com/Juhainah)
