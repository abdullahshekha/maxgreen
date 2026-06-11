# MaxGreen Energy — Project Brief for Claude Code

## What This Project Is

A full redesign of **maxgreenenergy.com.pk** — Pakistan's solar energy company — from WordPress/Elementor to a modern **Next.js 15** website. The goal is a fast, mobile-first, production-ready site deployed via **Vercel** connected to **GitHub**.

The homepage is already fully built. Your job is to continue from there — inner pages, fixes, polish, and deployment prep.

---

## Tech Stack

| Tool | Version | Notes |
|------|---------|-------|
| Next.js | 15 (App Router) | TypeScript, no Pages Router |
| React | 19 | |
| Tailwind CSS | 3.4 | Config in `tailwind.config.ts` |
| Font | Montserrat | Loaded via `next/font/google` |
| Icons | lucide-react | Only use lucide — no other icon lib |
| Email | emailjs-com | For contact forms — no backend |
| Images | next/image | Always use `<Image>` from next/image |

**Run the project:**
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check
```

---

## Folder Structure

```
MaxGreen/
├── public/
│   └── images/
│       ├── Hero-Image.png
│       ├── Consultation.png
│       ├── Installation.png
│       ├── Maintenance.png
│       ├── MaxGreen-logo.png
│       └── clients/
│           ├── subway-client.png
│           ├── soorty-client.png
│           ├── outfitters-client.jpg
│           ├── zellbury-client.jpg
│           ├── the-lyceum-client.png
│           ├── saya-client.jpg
│           ├── karachi-public-school-client.png
│           ├── karachi-broast-client.jpg
│           ├── jb.saeed-client.jpg
│           └── britlite-client.png
│
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Root layout, Montserrat font, metadata
│   │   ├── page.tsx          ← Homepage — imports all sections
│   │   └── globals.css       ← Tailwind base + custom CSS
│   │
│   └── components/
│       ├── ui/
│       │   ├── Navbar.tsx    ← Sticky, transparent→solid on scroll, mobile hamburger
│       │   └── Footer.tsx    ← Dark footer, 6-column, social links
│       │
│       └── sections/
│           ├── Hero.tsx          ← Full-screen, Hero-Image.png, 2 CTAs
│           ├── Stats.tsx         ← Dark green band, 4 metrics (placeholders)
│           ├── Solutions.tsx     ← 3 cards: Residential, Commercial, Industrial
│           ├── Process.tsx       ← 3-step alternating layout with images
│           ├── Journey.tsx       ← 7-step horizontal stepper / vertical mobile
│           ├── ClientLogos.tsx   ← Infinite CSS marquee, all 10 client logos
│           ├── Testimonials.tsx  ← 6 YouTube embeds on dark green bg
│           ├── Calculator.tsx    ← Interactive solar calculator
│           ├── WhyUs.tsx         ← 2-col feature list
│           ├── FAQ.tsx           ← Accordion, 6 questions
│           └── ContactForm.tsx   ← EmailJS form, 2-col layout
│
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── .gitignore
```

---

## Design System

### Colors (green palette — strictly follow these)

```css
/* Primary */
green-600  #16a34a   ← Main brand color, buttons, accents
green-700  #15803d   ← Button hover states
green-950  #052e16   ← Dark section backgrounds (Stats, Testimonials, ContactForm)

/* Supporting */
white                ← Main page background
gray-50  #f9fafb    ← Alternate section background
gray-900 #111827    ← Primary text
gray-500 #6b7280    ← Body/description text
gray-950 #030712    ← Footer background
```

**Never use blue, orange, or purple as primary colors.** They appear in Solutions cards only as secondary accents — don't extend this elsewhere.

### Typography

- **Font:** Montserrat only — accessed via `font-montserrat` class or inherited from body
- **Headings:** `font-extrabold` (800 weight)
- **Section labels:** `text-green-600 font-bold text-sm tracking-widest uppercase`
- **Body:** `text-gray-500 text-lg leading-relaxed`
- **Don't mix fonts.**

### Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-20 sm:py-28`
- Card border radius: `rounded-2xl` or `rounded-3xl` for cards/forms
- Buttons: `rounded-full` for CTAs, `rounded-xl` for form buttons

### Components Patterns

**Section header block (use this pattern for every section):**
```tsx
<div className="text-center mb-16">
  <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
    Short Label
  </span>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
    Main Heading
  </h2>
  <p className="text-gray-500 text-lg max-w-2xl mx-auto">
    Supporting description.
  </p>
</div>
```

**Primary CTA button:**
```tsx
<a href="#get-quote" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
  Get a Free Consultation
</a>
```

**Card style:**
```tsx
<div className="rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
```

---

## Rules & Conventions

1. **Always use `"use client"` directive** at the top of any component that uses `useState`, `useEffect`, event handlers, or browser APIs.
2. **Always use `<Image>` from `next/image`** — never a plain `<img>` tag.
3. **Always use `<Link>` from `next/link`** for internal navigation.
4. **No inline styles.** Tailwind classes only.
5. **Mobile-first.** Write base styles for mobile, then `sm:`, `md:`, `lg:` overrides.
6. **Accessibility:** Every image needs an `alt` attribute. Interactive elements need `aria-label` if they have no visible text.
7. **Apostrophes in JSX:** Use `&apos;` or `{" ' "}` — never a raw `'` inside JSX text (it causes ESLint errors).
8. **Ampersands in JSX:** Use `&amp;` — never a raw `&`.
9. **File naming:** PascalCase for components (`Hero.tsx`), kebab-case for routes.
10. **One component per file.** Export as `default`.

---

## What Needs To Be Done

### Priority 1 — Before Launch

- [ ] **EmailJS setup** — Open `src/components/sections/ContactForm.tsx` and replace:
  - `YOUR_SERVICE_ID` → your EmailJS service ID
  - `YOUR_TEMPLATE_ID` → your EmailJS template ID
  - `YOUR_PUBLIC_KEY` → your EmailJS public key
  - Create a free account at emailjs.com, connect your Gmail, and set up a template with variables: `from_name`, `phone`, `email`, `city`, `capacity`, `message`

- [ ] **Real stats numbers** — Open `src/components/sections/Stats.tsx` and `src/components/sections/Hero.tsx` and replace placeholder numbers (500+, 10+, etc.) with MaxGreen's actual figures.

- [ ] **Git & Vercel setup**:
  ```bash
  git init
  git add .
  git commit -m "Initial commit: MaxGreen Energy homepage"
  # Create repo on GitHub, then:
  git remote add origin https://github.com/YOUR_USERNAME/maxgreen-energy.git
  git push -u origin main
  # Then connect the GitHub repo to Vercel at vercel.com
  ```

### Priority 2 — Inner Pages to Build

Each inner page should follow the same layout conventions. Build as `src/app/[route]/page.tsx`.

**Pages needed:**
- `/residential` — Residential solar page
- `/commercial` — Commercial solar page
- `/industrial` — Industrial solar page
- `/about` — About Us page (company story, team, certifications)
- `/projects` — Project gallery / portfolio
- `/contact` — Full contact page with map embed
- `/blogs` or `/news-insight` — Blog listing page
- `/solar-geyser` — Product page
- `/karachi` — Location SEO page
- `/lahore` — Location SEO page
- `/cost-estimator` — Standalone calculator page

**Page template to follow:**
```tsx
// src/app/residential/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
// import page-specific sections

export const metadata: Metadata = {
  title: "Residential Solar Systems in Pakistan | MaxGreen Energy",
  description: "...",
};

export default function ResidentialPage() {
  return (
    <main>
      <Navbar />
      {/* Page hero */}
      {/* Sections */}
      <Footer />
    </main>
  );
}
```

### Priority 3 — Enhancements

- [ ] Add `next/image` blur placeholder (`placeholder="blur"` with `blurDataURL`) for hero image to improve LCP score
- [ ] Add `loading="lazy"` to below-the-fold images
- [ ] Set up `robots.txt` and `sitemap.xml` (use `next-sitemap` package)
- [ ] Add Google Tag Manager — GTM ID is `GTM-56F3Q5JB` (from original site)
- [ ] Add Facebook Pixel — Pixel ID is `2338526033244683` (from original site)
- [ ] Add Google Analytics 4 tag
- [ ] Add WhatsApp floating button (bottom-right corner):
  ```tsx
  <a href="https://wa.me/923000341048" target="_blank" rel="noopener noreferrer"
     className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
    {/* WhatsApp SVG icon */}
  </a>
  ```

---

## Key Business Info (use in page copy)

| Field | Value |
|-------|-------|
| Company | MaxGreen Energy (Pvt.) Ltd. |
| Phone | +92 300 034 1048 |
| Email | info@maxgreenenergy.com.pk |
| Karachi Office | 402, 44-C, Lane 5, Bukhari Commercial Area, Phase 6, DHA, Karachi |
| Lahore Office | Building 101, Fairways, DHA Phase 6, Lahore |
| Facebook | https://www.facebook.com/MaxGreenEnergyPk/ |
| Instagram | https://www.instagram.com/maxgreen_energy/ |
| LinkedIn | https://www.linkedin.com/company/maxenergypakistan/ |
| Google Maps embed | Embed ID: `ChIJhVW-RnQ_sz4RsIaXM2jHJlU` |

**Services:** Residential solar, commercial solar, industrial solar, solar geyser, net metering, site assessment, system design, installation, monitoring & maintenance.

**Cities served:** Karachi and Lahore.

**SEO keywords to target:** solar company Pakistan, solar panels Karachi, solar installation Lahore, residential solar Pakistan, commercial solar Pakistan, net metering Pakistan, best solar company Pakistan.

---

## Testimonial YouTube Video IDs

These are already wired into `Testimonials.tsx` but useful for reference:

| Client | Video ID |
|--------|----------|
| Ms. Samana | `2epqFrG6_AU` |
| Shahid Hussain | `1oGUvky7P7A` |
| Siraj Munir | `jKg9OdaLPbw` |
| Aleeya Khan | `buWxf0DOeQI` |
| Mr. Asad | `N2PTm7GSC88` |
| Mr. Zeeshan | `4l8hhIkwWbM` |

---

## Common Issues & Fixes

**"Module not found" for `@/components/...`**
Check that `tsconfig.json` has `"paths": { "@/*": ["./src/*"] }` — it should already be there.

**ESLint error: `'` can be escaped with `&apos;`**
Never put raw apostrophes inside JSX text content. Use `&apos;` or wrap in `{" "}`.

**Image not displaying**
Make sure the file is in the `public/` folder and the path starts with `/` (e.g. `/images/Hero-Image.png`).

**Marquee animation not working**
The `animate-marquee` class is defined in `globals.css` as a raw CSS keyframe (not a Tailwind utility). This is intentional because Tailwind's JIT doesn't support `animation-play-state` pausing on hover easily. Don't move it to Tailwind config.

**Build error: `ReactNode` type**
Ensure `children` prop is typed as `React.ReactNode` in layout components.
