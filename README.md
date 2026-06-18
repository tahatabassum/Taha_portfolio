# Taha Tabassum — AI Engineer & Full-Stack Developer Portfolio

This repository hosts the static, premium developer portfolio website for Taha Tabassum, built with React, TypeScript, Tailwind CSS, and Vite. The design is tailored to startup founders, recruiters, and clients, focusing on engineering depth and SaaS aesthetics.

## 🚀 Live Demo
Visit the live portfolio website here: [Taha Tabassum Portfolio](https://github.com/tahatabassum/Taha_portfolio)

---

## 🛠️ Technology Stack
- **Frontend Core**: React 19, TypeScript
- **Styling**: Tailwind CSS, Google Fonts (Inter & Outfit)
- **Development Tooling**: Vite, ESLint
- **Icons**: Lucide React & Custom inline SVGs
- **Deployment Platform**: Optimized for Vercel / static edge hosting

---

## 📂 Project Architecture

```
portfolio/
├── public/                 # Static assets (favicons, images, public resources)
│   └── taha.png            # Profile Photo
├── src/
│   ├── components/         # Modular Section Components
│   │   ├── ui/             # Reusable UI Elements (Card, Badge, Button)
│   │   ├── About.tsx       # Bio & Tech Stacks
│   │   ├── Education.tsx   # Academic degree
│   │   ├── FeaturedProject.tsx # Advantage AI Case Study
│   │   ├── Footer.tsx      # Contact details & Profiles
│   │   ├── Hero.tsx        # Hero banner & Photo container
│   │   ├── Navbar.tsx      # Responsive sticky navigation
│   │   ├── Philosophy.tsx  # Development Philosophy
│   │   ├── Projects.tsx    # Other Projects grid
│   │   └── Skills.tsx      # Skills Directory
│   ├── App.tsx             # Main entry point orchestrating all layouts
│   ├── index.css           # Global CSS variables, scrollbars & keyframes
│   └── main.tsx            # DOM renderer entrypoint
├── index.html              # HTML entrypoint, SEO tags & Google Fonts
├── tailwind.config.js      # Tailwind configurations & custom theme colors
└── vite.config.ts          # Vite build config
```

---

## 🌟 Featured Projects

### 1. **Advantage AI — Marketing Creative Audit SaaS**
A digital marketing creative auditing platform that helps performance marketing agencies identify creative weaknesses before campaign launch.
* **Tech Stack**: FastAPI, React, Python, Docker, OpenCV, Selenium, Gemini AI.
* **Engineering Challenges Addressed**:
  - High-fidelity chronological frame extraction using OpenCV for sequence prompt evaluations.
  - Undetected-chromedriver Selenium workflows to extract blob-based Meta library ad streams.
  - Chromium process optimization inside Docker containers to run stably on low-resource cloud hosts.

### 2. **ResumeAI**
AI-powered resume builder leveraging Gemini AI to compose and optimize professional resumes.
* **Tech Stack**: React, TypeScript, Node.js, Express.js, Gemini AI, JWT Authentication.

### 3. **Jarvis Voice Assistant**
Desktop voice assistant integrating workflow automation, OS shell control, speech synthesis, and face recognition.
* **Tech Stack**: FastAPI, Python, React, Gemini API, Groq API, OpenCV, SpeechRecognition, Three.js.

---

## 💻 Local Setup & Development

### 1. Clone the repository
```bash
git clone https://github.com/tahatabassum/Taha_portfolio.git
cd Taha_portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser to view the dev environment.

### 4. Create Production Static Build
```bash
npm run build
```
The static files will build directly into the `/dist` directory, ready to deploy.

### 5. Preview Production Build Locally
```bash
npm run preview
```
Previews the built code on [http://localhost:4173/](http://localhost:4173/).

---

## 📄 License
This project is open-source and available under the MIT License.
