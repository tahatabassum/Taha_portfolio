# Taha Tabassum — AI Engineer & Full-Stack Developer Portfolio v2

A high-performance, full-stack developer portfolio and project management platform built for **Taha Tabassum** (AI Engineer & Full-Stack Developer) using **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Prisma ORM**, **Resend Email API**, and **Framer Motion**.

---

## 🌐 Live Demo & Deployment
- **Live Website**: [https://taha-portfolio-xi.vercel.app/](https://taha-portfolio-xi.vercel.app/)
- **GitHub Repository**: [https://github.com/tahatabassum/Taha_portfolio](https://github.com/tahatabassum/Taha_portfolio)

---

## ✨ Key Features & Architecture

- **Next.js 14 App Router**: Server-rendered pages, static generation, API routes (`/api/projects`, `/api/contact`, `/api/admin/login`).
- **Balanced Multi-Color Palette**: Modern Light SaaS Aesthetic incorporating a balanced ratio of **Pure White** (`#ffffff`), **Royal Blue** (`#2563eb`), **Emerald Green** (`#10b981`), and **Sunset Orange** (`#f97316`).
- **Prisma Database Persistence**: Type-safe database queries powering dynamic project management (supports SQLite locally and Vercel Postgres / Neon in production).
- **Protected Admin Dashboard (`/admin`)**: Single-password protected portal (`ADMIN_PASSWORD`) with constant-time authentication (`crypto.timingSafeEqual`) and HTTP-only session cookies to publish and delete projects.
- **Interactive Contact Form (Resend API)**: Direct email dispatch to `tahatabassum9@gmail.com` with `Reply-To` set to the visitor's email, IP rate limiting, and honeypot bot trap protection.
- **Framer Motion Micro-Animations**: Smooth scroll-triggered reveal animations honoring `prefers-reduced-motion`.
- **Pre-Deployment Security Controls**: Strict Content-Security-Policy (CSP), HSTS, X-Frame-Options, X-Content-Type-Options headers, and HTML entity escaping.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router), React 19 |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v3, PostCSS, Google Fonts (`Inter` & `Outfit`) |
| **Database & ORM** | Prisma ORM, SQLite / Vercel Postgres |
| **Email Service** | Resend API (`resend` SDK) |
| **Animations** | Framer Motion (`framer-motion`) |
| **Deployment** | Vercel Serverless Edge Platform |

---

## 📂 Directory Structure

```
portfolio/
├── prisma/                      # Database schema & seed scripts
│   ├── schema.prisma            # Project data model definition
│   └── seed.ts                  # Database seeder (ResumeAI, Jarvis)
├── public/                      # Static public assets (images, icons)
│   └── taha.png                 # Developer profile photo
├── src/
│   ├── app/                     # Next.js 14 App Router Pages & APIs
│   │   ├── admin/               # Protected Admin Dashboard & Login routes
│   │   │   ├── login/           # Admin authentication login page
│   │   │   └── page.tsx         # Admin project management dashboard
│   │   ├── api/                 # Serverless API routes
│   │   │   ├── admin/           # Authentication endpoints
│   │   │   ├── contact/         # Resend contact form email API
│   │   │   └── projects/        # Projects GET, POST, DELETE endpoints
│   │   ├── projects/            # All Projects Archive page (/projects)
│   │   ├── globals.css          # Tailwind base, utilities & gradient tokens
│   │   ├── layout.tsx           # Root HTML layout, SEO meta & fonts
│   │   └── page.tsx             # Homepage entrypoint
│   ├── components/              # UI Section Components
│   │   ├── ui/                  # Atomic primitives (Card, Badge)
│   │   ├── About.tsx            # Bio & core engineering strengths
│   │   ├── AnimationWrapper.tsx # Framer Motion scroll reveal wrapper
│   │   ├── Education.tsx        # Academic degree card (BS CS UAF)
│   │   ├── FeaturedProject.tsx  # Advantage AI SaaS Flagship Case Study
│   │   ├── Footer.tsx           # Contact details & Resend form
│   │   ├── Hero.tsx             # Headline banner, stats & photo container
│   │   ├── LatestProjects.tsx   # Dynamic homepage project grid
│   │   ├── Navbar.tsx           # Sticky responsive navigation bar
│   │   ├── Philosophy.tsx       # AI Development Philosophy essay
│   │   └── Skills.tsx           # 6-Category Skills Directory
│   └── lib/                     # Helper modules (Prisma, Auth, RateLimit)
│       ├── auth.ts              # Constant-time session verification
│       ├── prisma.ts            # Singleton Prisma client instance
│       ├── rateLimit.ts         # In-memory IP rate limiter
│       └── utils.ts             # Class merging & array parsing helpers
├── .env.example                 # Environment variable template
├── next.config.mjs              # Next.js & HTTP Security Headers config
├── PROJECT_DETAILS.md           # Architecture documentation reference
├── security_audit.md            # Pre-deployment security checklist audit
└── tailwind.config.js           # Tailwind theme tokens & color definitions
```

---

## 💻 Local Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/tahatabassum/Taha_portfolio.git
cd Taha_portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Update `.env` values:
```env
DATABASE_URL="file:./dev.db"
ADMIN_PASSWORD="admin@123456tt@p"
RESEND_API_KEY="re_your_resend_key_here"
CONTACT_TO_EMAIL="tahatabassum9@gmail.com"
```

### 4. Initialize Database & Seed Content
```bash
npx prisma db push
npx tsx prisma/seed.ts
```

### 5. Launch Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Admin Access & Security Controls

- **Admin Portal**: Access directly via [http://localhost:3000/admin](http://localhost:3000/admin) (or `/admin` on live site).
- **Authentication**: Enter your configured `ADMIN_PASSWORD`.
- **Security Features**:
  - Constant-time string comparison (`crypto.timingSafeEqual`) to block timing attacks.
  - IP-based rate limiting (5 login attempts per 15 mins, 3 contact form submissions per 10 mins).
  - Honeypot bot trap field filtering out automated spam.
  - Server-side input bounds checking and HTML entity escaping.

---

## 🚀 Production Build & Deployment

To test the optimized production build locally:
```bash
npm run build
npm start
```

### Deploying to Vercel
1. Connect your repository to Vercel.
2. Configure environment variables in Vercel settings:
   - `DATABASE_URL` (Vercel Postgres / Neon / Supabase connection string)
   - `ADMIN_PASSWORD` (Strong production admin password)
   - `RESEND_API_KEY` (Your Resend API Key)
   - `CONTACT_TO_EMAIL` (`tahatabassum9@gmail.com`)
3. Click **Deploy** — Vercel will automatically execute `prisma generate && next build`.

---

## 📄 License
This project is open-source under the MIT License.
