# MakeMyDocuments — Next.js Redesign

A redesigned landing page for [makemydocuments.com](https://www.makemydocuments.com/), built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **shadcn-style** UI primitives.

## Tech Stack

- **Next.js 14** — App Router, JavaScript
- **Tailwind CSS** — utility-first styling with custom theme tokens
- **shadcn/ui–style components** — `Button`, `Card`, `Badge` (handcrafted, no CLI needed)
- **lucide-react** — icons
- **class-variance-authority + tailwind-merge** — variant management

## Getting Started

```bash
cd C:\Users\admin\Projects\makemydocumentsnextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
makemydocumentsnextjs/
├── app/
│   ├── globals.css         # Tailwind base + theme tokens
│   ├── layout.js           # Root layout with Inter + Poppins fonts
│   └── page.js             # Homepage composition
├── components/
│   ├── sections/           # Page sections
│   │   ├── navbar.jsx
│   │   ├── hero.jsx
│   │   ├── services.jsx
│   │   ├── process.jsx
│   │   ├── why-choose-us.jsx
│   │   ├── testimonials.jsx
│   │   ├── cta.jsx
│   │   └── footer.jsx
│   └── ui/                 # shadcn-style primitives
│       ├── button.jsx
│       ├── card.jsx
│       └── badge.jsx
├── lib/
│   └── utils.js            # cn() helper
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

## Sections Included

1. **Navbar** — sticky, glass-blur on scroll, mobile menu
2. **Hero** — gradient headline, status-card mockup, floating badge, stats strip
3. **Services** — 6-card grid with gradient icons (Educational, Personal, Commercial, Apostille, Translation, Embassy)
4. **Process** — 4-step animated journey
5. **Why Choose Us** — 6 trust signals with hover effects
6. **Testimonials** — 3 client cards with avatar initials and 5-star ratings
7. **CTA** — gradient banner with quick-enquiry form
8. **Footer** — multi-column with contact info and socials

## Customization

- **Colors**: edit CSS variables in `app/globals.css` (HSL values for `--primary`, `--accent`, etc.)
- **Fonts**: swap fonts in `app/layout.js`
- **Content**: each section keeps its data in a local array at the top of the file — easy to edit
- **Add shadcn components**: run `npx shadcn@latest init` then `npx shadcn@latest add <component>` if you want the official CLI workflow

## Build for Production

```bash
npm run build
npm start
```
