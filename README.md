# 🎓 Nexus — Learning Management System

A full-stack LMS platform for creating, publishing, and purchasing courses — built with Next.js 14, Prisma, Stripe, and Mux.

🌐 **Live Demo:** [nexus-gamma-smoky.vercel.app](https://nexus-gamma-smoky.vercel.app)

---

## ✨ Features

### 👩‍🎓 For Students
- Browse and search the course catalogue
- Purchase courses securely via Stripe
- Stream video lessons via Mux
- Mark chapters as complete and track progress
- Celebrate course completion with confetti 🎉
- Personal dashboard showing enrolled and in-progress courses

### 👨‍🏫 For Teachers
- Dedicated dashboard with earnings analytics
- Create and edit courses — title, description, image, category, price
- Rich-text chapter descriptions (React Quill)
- Drag-and-drop chapter reordering
- Video upload with automatic HLS transcoding via Mux
- Image and attachment uploads via UploadThing
- Publish / unpublish courses and individual chapters

### 🔐 Auth & Security
- Authentication via Clerk (sign-up, sign-in, sessions)
- Middleware-protected routes
- Stripe webhook verification for purchase events

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
