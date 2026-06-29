# MaxGreen Energy — Project Brief for Claude Code

## What This Project Is

A full redesign of **maxgreenenergy.com.pk** — Pakistan's solar energy company — from WordPress/Elementor to a modern **Next.js 15** website. The site is fully built and deployed on **Vercel** connected to GitHub (`abdullahshekha/maxgreen`, branch: `main`).

---

## Tech Stack

| Tool | Version | Notes |
|------|---------|-------|
| Next.js | 15.3.9 (App Router) | TypeScript, no Pages Router |
| React | 19 | |
| Tailwind CSS | 3.4 | Config in `tailwind.config.ts` |
| Font | Montserrat | Loaded via `next/font/google`, class: `font-montserrat` |
| Icons | lucide-react | Only use lucide — no other icon lib |
| Email | emailjs-com | ContactForm — credentials NOT yet configured |
| Images | next/image | Always use `<Image>` from next/image |

**Why 15.3.9:** Vercel blocked earlier version (15.3.2) due to CVE-2025-66478. Always keep Next.js at latest 15.x.

**Run the project:**
```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build check — must pass before every commit
```

---

## Folder Structure

```
MaxGreen/
├── public/
│   └── images/
│       ├── background-hero.jpeg  ← Homepage hero banner image
│       ├── Hero-Image.png        (old hero — unused)
│       ├── MaxGreen-logo.png
│       ├── clients/              (10 client logos for marquee)
│       ├── gallery/              (20 installation photos → /gallery/)
│       ├── projects/             (6 project photos → /projects/)
│       ├── inner/                (inner page photos)
│       └── blogs/                (10 blog featured images)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← Root layout + WhatsApp button + SurveyPopup
│   │   ├── page.tsx              ← Homepage
│   │   ├── globals.css
│   │   ├── about/page.tsx
│   │   ├── solutions/page.tsx
│   │   ├── solar-system-for-home/page.tsx
│   │   ├── commercial/page.tsx
│   │   ├── industrial/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── contact-us/page.tsx
│   │   ├── cost-estimator/page.tsx
│   │   ├── solar-solutions-company-karachi/page.tsx
│   │   ├── solar-solutions-lahore-company/page.tsx
│   │   ├── solar-solutions-islamabad/page.tsx
│   │   └── blogs/
│   │       ├── data.ts           ← All blog data (Blog[] array, sorted by date)
│   │       ├── page.tsx          ← Blog listing (server component)
│   │       ├── BlogsList.tsx     ← Client component — category filter + cards
│   │       └── [slug]/page.tsx   ← Dynamic blog post (SSG via generateStaticParams)
│   │
│   └── components/
│       ├── SurveyPopup.tsx       ← "use client" — free survey modal (5s delay)
│       ├── ui/
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   └── PageHero.tsx      ← Reusable dark-green hero for inner pages
│       │
│       └── sections/
│           ├── Hero.tsx
│           ├── Stats.tsx         (exists but REMOVED from homepage — do not re-add)
│           ├── Solutions.tsx
│           ├── Process.tsx
│           ├── Journey.tsx       (exists but REMOVED from homepage — do not re-add)
│           ├── ClientLogos.tsx
│           ├── Testimonials.tsx
│           ├── Calculator.tsx
│           ├── WhyUs.tsx
│           ├── FAQ.tsx
│           └── ContactForm.tsx
│
├── Blogs/                        ← Original WordPress HTML saves (source files only)
├── Inner-Pages/                  ← Original WordPress HTML saves (source files only)
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── .gitignore
```

---

## Homepage Section Order

**Current order (do not change without instruction):**
1. Navbar
2. Hero
3. ClientLogos — "Our Clients"
4. Testimonials — "Real Stories"
5. Solutions — "What We Offer"
6. Process — "How It Works"
7. Calculator
8. WhyUs — "Why MaxGreen" (real project data, divided Karachi/Lahore)
9. FAQ
10. ContactForm
11. Footer

**Removed from homepage:** Stats (repetitive), Journey (not suitable for Pakistani market)

---

## Design System

### Colors — IMPORTANT: Custom palette, NOT default Tailwind green

```css
green-600  #92c31e   ← Main brand color (yellow-green, H=78°)
green-700  #7aa319   ← Button hover
green-950  #243108   ← Dark section backgrounds
gray-950   #030712   ← Footer background
white                ← Main page background
gray-50    #f9fafb   ← Alternate section background
gray-900   #111827   ← Primary text
gray-500   #6b7280   ← Body/description text
```

**Never use blue, orange, or purple as primary colors.**

### Typography
- **Font:** Montserrat only (`font-montserrat` on body)
- **Headings:** `font-extrabold` (800 weight)
- **Section labels:** `text-green-600 font-bold text-sm tracking-widest uppercase`
- **Body:** `text-gray-500 text-lg leading-relaxed`

### Spacing & Layout
- Max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section padding: `py-20 sm:py-28`
- Cards: `rounded-2xl` or `rounded-3xl`
- CTA buttons: `rounded-full` | Form buttons: `rounded-xl`

### Section Header Pattern
```tsx
<div className="text-center mb-16">
  <span className="inline-block text-green-600 font-bold text-sm tracking-widest uppercase mb-3">
    Short Label
  </span>
  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5">
    Main Heading
  </h2>
  <p className="text-gray-500 text-lg max-w-2xl mx-auto">Supporting description.</p>
</div>
```

### Primary CTA Button
```tsx
<Link href="/contact-us/" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
  Get a Free Consultation
</Link>
```

---

## Rules & Conventions

1. **`"use client"`** at the top of any component using `useState`, `useEffect`, event handlers, or browser APIs.
2. **`<Image>`** from `next/image` — never `<img>`.
3. **`<Link>`** from `next/link` — never `<a>` for internal navigation.
4. **No inline styles** — Tailwind only (exception: WhatsApp button `style={{ backgroundColor: "#25D366" }}`).
5. **Mobile-first** — base styles for mobile, then `sm:`, `md:`, `lg:`.
6. **Apostrophes in JSX:** `&apos;` — never raw `'` inside JSX text.
7. **Ampersands in JSX:** `&amp;` — never raw `&`.
8. **File naming:** PascalCase for components, kebab-case for routes.
9. **One component per file**, exported as `default`.
10. **Desktop-only sticky:** `lg:sticky lg:top-24` not `sticky top-24` (affects mobile).
11. **TypeScript arrays with union types:** cast with `as Blog[]` to avoid widening errors.

---

## Blog Architecture

Blogs live at `/blogs/` (listing) and `/blogs/[slug]/` (individual posts).

**Data file:** `src/app/blogs/data.ts`
- Exports `blogs: Blog[]` (sorted newest first)
- Exports `getBlogBySlug(slug)`
- Each `Blog` has: `slug`, `title`, `metaDescription`, `date`, `category`, `author`, `featuredImage`, `readTime`, `sections: BlogSection[]`
- `BlogSection.type`: `"h2" | "h3" | "h4" | "p" | "ul" | "ol" | "table"`
- `ul`/`ol` items separated by `" || "` in `content`
- `table` format: `"H1 | H2 || R1C1 | R1C2"` (first row = headers, ` | ` = cells, ` || ` = rows)

**To add a new blog:** append to the array in `data.ts`. The listing page and static params update automatically.

**Current blogs (10):** All in `data.ts`, images in `public/images/blogs/`. 113 more blogs pending client approval on these 10 before uploading.

**Blog categories:** Commercial | Residential | Industrial

---

## What Still Needs To Be Done

### Priority 1 — Must Do Before Launch

- [ ] **EmailJS setup** — `src/components/sections/ContactForm.tsx`
  - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`
  - Template variables: `from_name`, `phone`, `email`, `city`, `capacity`, `message`

- [ ] **Connect SurveyPopup to EmailJS** — `src/components/SurveyPopup.tsx`
  - Currently shows thank-you message but doesn't send data anywhere
  - Wire up emailjs send on form submit

- [ ] **Add Islamabad to ContactForm city dropdown** — `src/components/sections/ContactForm.tsx`
  - Currently only has Karachi and Lahore

### Priority 2 — Tracking & SEO

- [ ] **Google Tag Manager** — GTM ID: `GTM-56F3Q5JB` → add to `src/app/layout.tsx`
- [ ] **Facebook Pixel** — Pixel ID: `2338526033244683` → add to `src/app/layout.tsx`
- [ ] **robots.txt + sitemap.xml** — use `next-sitemap` package
- [ ] **Google Analytics 4** — add GA4 tag in `layout.tsx`

### Priority 3 — Blogs

- [ ] **113 more blogs to upload** — waiting for client feedback on the first 10 currently live
  - Source files are in `Blogs/` folder (WordPress HTML saves)
  - Process: extract content → audit for malware → add to `data.ts` → copy images to `public/images/blogs/`
  - Same workflow used for first 10 blogs

### Priority 4 — Nice-to-Have

- [ ] **Solar Geyser page** — `/solar-geyser/` product page
- [ ] **Privacy Policy & Terms pages** — Footer links to `/privacy` and `/terms` (pages don't exist)
- [ ] **Hero LCP optimization** — `placeholder="blur"` on `background-hero.jpeg`

---

## Key Business Info

| Field | Value |
|-------|-------|
| Company | MaxGreen Energy (Pvt.) Ltd. |
| Phone | +92 300 034 1048 |
| Email | sales@maxgreenenergy.com.pk |
| Karachi Office | DHA Phase 6 Bukhari Commercial, Karachi |
| Lahore Office | DHA Phase 6 Fairways, Lahore |
| WhatsApp | https://api.whatsapp.com/send?phone=923099084534&text=Hello%20there!%20I%20am%20contacting%20you%20from%20your%20website%20maxgreenenergy.com.pk |
| Facebook | https://www.facebook.com/MaxGreenEnergyPk/ |
| Instagram | https://www.instagram.com/maxgreen_energy/ |
| LinkedIn | https://www.linkedin.com/company/maxenergypakistan/ |
| GTM ID | GTM-56F3Q5JB |
| Facebook Pixel ID | 2338526033244683 |

**Stats to use site-wide:** 2100+ Solar Installations | 9+ Years Experience | 3 Cities Served | 2 Years Free After-Sales Service

**Cities served:** Karachi, Lahore, Islamabad.

**SEO keywords:** solar company Pakistan, solar panels Karachi, solar installation Lahore, residential solar Pakistan, commercial solar Pakistan, net metering Pakistan, best solar company DHA.

---

## Common Issues & Fixes

**TypeScript error: `string` not assignable to `BlogCategory`**
Arrays of objects with union-type fields get widened by TypeScript. Cast with `([...] as Blog[])`.

**ESLint error: `'` can be escaped with `&apos;`**
Never put raw apostrophes inside JSX text. Use `&apos;` or wrap in `{" "}`.

**`animate-marquee` not working**
Defined in `globals.css` as raw CSS keyframe — intentionally NOT in `tailwind.config`. Don't move it.

**Build error: `ReactNode` type**
Type `children` prop as `React.ReactNode` in layout components.

**Git push 403 error**
Run `gh auth switch --user abdullahshekha` to switch to the correct GitHub account.
