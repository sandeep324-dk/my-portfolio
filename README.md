# Sandeep D K — Portfolio

A dark-premium, animated personal portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Stack

- React 18 + Vite
- Tailwind CSS (custom dark-premium design tokens)
- Framer Motion (page/scroll animations)
- React Router (routing + 404 page)
- React Icons
- @emailjs/browser (contact form)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Before you deploy — 3 things to set up

1. **Resume PDF** — drop your resume into `public/resume.pdf` (or update `resumeUrl` in `src/data/portfolioData.js`). The Navbar and Hero "Download Resume" buttons link to this path.

2. **Contact form (EmailJS)** — the form in `src/components/Contact.jsx` is wired to EmailJS but needs your own keys:
   - Create a free account at https://www.emailjs.com
   - Create an Email Service and a Template with fields `user_name`, `user_email`, `subject`, `message`
   - Open `src/components/Contact.jsx` and replace:
     ```js
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
     ```

3. **Open Graph image** — add a 1200×630 image at `public/og-image.png` for nice link previews on LinkedIn/Twitter/WhatsApp.

## Editing content

Everything text-based (name, roles, projects, skills, education, certifications, links) lives in one file:

```
src/data/portfolioData.js
```

Change it there and every section updates automatically.

## Project structure

```
src/
  components/     Navbar, Hero, About, Skills, Projects, Education,
                   Certifications, Contact, Footer, ScrollProgress,
                   ScrollToTop, CursorSpotlight, RippleButton, Loader, NotFound
  data/           portfolioData.js  ← single source of truth for content
  hooks/          useTypewriter.js, useCountUp.js
  pages/          Home.jsx
  App.jsx         routing + layout shell
  main.jsx        entry point
  index.css       Tailwind layers + custom design utilities
```

## Deploying to Vercel

**Option A — Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — Git + Vercel dashboard**
1. Push this project to a GitHub repository.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Click Deploy.

Every push to your main branch will auto-deploy after this.

## Notes

- Colors, spacing and animation timings are defined as design tokens in `tailwind.config.js` — change them once, they apply everywhere.
- Reduced-motion users automatically get animations minimized (see the `prefers-reduced-motion` block in `src/index.css`).
- The cursor spotlight and 3D card tilt are automatically disabled on touch devices.
