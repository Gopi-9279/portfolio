Gopi Kishan Portfolio
A modern, responsive developer portfolio built with React, Vite, and Tailwind CSS. The site presents Gopi Kishan as an aspiring full-stack MERN developer with a polished hero section, animated background effects, interactive skill showcase, featured projects, resume download, and contact form experience.
Overview
This portfolio is designed to feel fast, professional, and visually engaging across desktop, tablet, and mobile devices. It uses theme-aware styling, smooth animations, glassmorphism cards, responsive layouts, and interactive UI details to create a strong personal brand for a software developer portfolio.
Features
Fully responsive layout for mobile, tablet, and desktop screens
Light and dark theme support with persistent local storage preference
Animated hero section with profile image, magnetic CTA, and floating tech badges
Interactive skills section with a mobile-friendly grid and animated desktop tag cloud
Bento-style about section with education, experience, certifications, and resume download
Featured project carousel powered by Swiper
Contact section with social links, email, phone, and toast feedback
Theme-consistent visual system using Tailwind CSS custom tokens
Background effects using Vanta Birds, stars, and meteor animations
Reduced-motion CSS support for better accessibility
Tech Stack
Category	Technologies
Frontend	React 19, Vite 7
Styling	Tailwind CSS 4, custom CSS theme tokens
Routing	React Router DOM
UI and Icons	Lucide React, Radix Toast
Animation and Effects	Swiper, TagCloud, React Parallax Tilt, Vanta.js, Three.js
Tooling	ESLint, Vite build pipeline

Sections
Hero: Developer introduction, animated role text, profile image, and primary call to action
About: Terminal-inspired bio, education, internship experience, certifications, and resume download
Skills: Technology stack display with responsive mobile grid and desktop tag cloud
Projects: Interactive carousel of featured project cards
Contact: Contact information, social profiles, and message form with toast notification
Project Structure
portfolio/
|-- public/
|   |-- Gopi_logo.png
|   `-- vite.svg
|-- src/
|   |-- assets/
|   |   |-- GopiKishanResume.pdf
|   |   `-- profile.jpeg
|   |-- components/
|   |   |-- AboutSection.jsx
|   |   |-- BirdsBackground.jsx
|   |   |-- ContactSection.jsx
|   |   |-- Footer.jsx
|   |   |-- HeroSection.jsx
|   |   |-- Navbar.jsx
|   |   |-- ProjectsSection.jsx
|   |   |-- SkillsSection.jsx
|   |   |-- StarBackground.jsx
|   |   |-- ThemeToggle.jsx
|   |   `-- ui/
|   |-- hooks/
|   |-- lib/
|   |-- Pages/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
Getting Started
Prerequisites
Install Node.js 18 or newer. Node.js 20+ is recommended for the current Vite toolchain.
Installation
git clone https://github.com/Gopi-9279/portfolio.git
cd portfolio
npm install
Run Locally
npm run dev
Open the local URL printed by Vite, usually:
http://localhost:5173
Build for Production
npm run build
Preview Production Build
npm run preview
Lint
npm run lint
Configuration Notes
Theme colors and animation utilities are defined in src/index.css.
Vanta Birds depends on CDN scripts loaded from index.html.
Resume download uses src/assets/GopiKishanResume.pdf.
The contact form currently displays a toast notification locally; it is not connected to a backend service.
Project links in ProjectsSection.jsx can be updated with real live demo and GitHub repository URLs.
Responsive Design
The portfolio includes responsive design patterns throughout the app:
The navbar switches from desktop links to a full-screen mobile menu.
The hero section uses viewport-safe height and fluid typography.
Skill cards render as a grid on smaller devices and as an animated tag cloud on larger screens.
About, project, and contact sections collapse into single-column layouts on mobile.
Global horizontal overflow protection helps prevent accidental side scrolling.
Deployment
This project can be deployed on any static hosting platform that supports Vite builds, including:
Vercel
Netlify
GitHub Pages
Render Static Sites
For most platforms, use:
Build command: npm run build
Output directory: dist
Contact
Gopi Kishan
Email: gopikishan6719@gmail.com
LinkedIn: gopi-kishan-2844aa314
GitHub: Gopi-9279
X: @GopiKishan84620
Instagram: @gopikishan1729
License
This project is intended for personal portfolio use.