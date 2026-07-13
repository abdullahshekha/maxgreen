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
| Email | nodemailer + cPanel SMTP | Server-side via `/api/contact` route — see Email System section |
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
│       ├── MaxGreen-logo.png
│       ├── maxgreen-favicon.png  ← Favicon + OpenGraph/Twitter share image (set in layout.tsx metadata)
│       ├── clients/              (10 client logos for marquee)
│       ├── gallery/              (20 installation photos → /gallery/)
│       ├── projects/             (7 project photos → /projects/)
│       ├── inner/                (inner page photos, incl. about-us-main/residential-main/lahore-main/islamabad-main.jpeg)
│       ├── team/                 (taha-alam.jpeg — author bio photo)
│       ├── solar/                ← Hero background images for inner pages — 9 unique images, no sharing
│       │   ├── about-us.jpeg     → About Us hero
│       │   ├── commercial.jpeg   → Commercial hero
│       │   ├── industrial.jpeg   → Industrial hero
│       │   ├── islamabad.jpeg    → Islamabad hero
│       │   ├── lahore.jpeg       → Lahore hero
│       │   ├── residential.jpeg  → Solutions hero
│       │   ├── solar-system-for-home.jpeg → Solar System for Home hero
│       │   ├── karachi.jpeg      → Karachi hero
│       │   └── projects.jpeg     → Projects hero
│       └── blogs/                (109 blog featured images)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            ← Root layout + WhatsApp button + SurveyPopup
│   │   ├── page.tsx              ← Homepage
│   │   ├── globals.css
│   │   ├── api/
│   │   │   └── contact/route.ts  ← POST endpoint — sends both emails via nodemailer/SMTP
│   │   ├── about/page.tsx
│   │   ├── solutions/page.tsx
│   │   ├── solar-system-for-home/page.tsx
│   │   ├── commercial/page.tsx
│   │   ├── industrial/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── contact-us/page.tsx
│   │   ├── cost-estimator/page.tsx  ← SolarCalculator + ContactForm (both required for #get-quote anchor to work)
│   │   ├── solar-solutions-company-karachi/page.tsx
│   │   ├── solar-solutions-lahore-company/page.tsx
│   │   ├── solar-solutions-islamabad/page.tsx
│   │   ├── author/taha-alam/page.tsx  ← Syed Taha Alam Shah bio page, linked from blog post bylines
│   │   └── blogs/
│   │       ├── data.ts           ← All blog data (Blog[] array, sorted by date) — 109 blogs
│   │       ├── page.tsx          ← Blog listing (server component)
│   │       ├── BlogsList.tsx     ← Client component — category filter + cards
│   │       └── [slug]/page.tsx   ← Dynamic blog post (SSG via generateStaticParams)
│   │
│   └── components/
│       ├── SurveyPopup.tsx       ← "use client" — free survey modal (5s delay)
│       ├── ui/
│       │   ├── Navbar.tsx
│       │   ├── Footer.tsx
│       │   └── PageHero.tsx      ← Reusable dark-green hero — supports bgImage prop
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
├── More Blogs/                   ← 99 blogs already uploaded (source files only)
├── Inner-Pages/                  ← Original WordPress HTML saves (source files only)
├── Solar_images/                 ← Source images (already copied to public/images/solar/)
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
8. WhyUs — "Why MaxGreen"
9. FAQ
10. ContactForm
11. Footer

**Removed from homepage:** Stats (repetitive), Journey (not suitable for Pakistani market)

**Hero subtext (updated 2026-07-13):** "Maxgreen Energy is a top-rated solar company in Pakistan, with 9+ years of experience it provides custom NEPRA Compliant structures making sure your electricity bills drop to ZERO." — in `src/components/sections/Hero.tsx`.

---

## Site-Wide Numbers — CRITICAL

Always use these exact numbers everywhere on the site. Never use any other values.

| Stat | Correct value | Never use |
|------|--------------|-----------|
| Solar installations | **2100+** | 2000+, 1500+ |
| Years of experience | **9+** | 10+, 8+ |
| Cities served | **3** | — |
| After-sales service | **2 Years** | — |
| Total capacity (Projects page) | **14 MW+** | 2 MW+ |

---

## PageHero Component

`src/components/ui/PageHero.tsx` — reusable for all inner pages.

Props: `breadcrumb`, `breadcrumbHref?`, `title`, `subtitle?`, `bgImage?`

**`bgImage` prop:** optional path to a photo from `public/images/solar/`. Rendered at `opacity-20` behind the dot overlay and gradient. All inner pages now use this, each with its own unique image (no sharing between pages).

**Gradient overlay:** matches the homepage `Hero.tsx` opacity exactly — `bg-gradient-to-r from-green-950/90 via-green-900/75 to-green-900/40`. Keep these in sync if either changes.

```tsx
<PageHero
  breadcrumb="About Us"
  title="Page Title"
  subtitle="Supporting text."
  bgImage="/images/solar/about-us.jpeg"
/>
```

---

## Email System

Contact form and survey popup both send email via `src/app/api/contact/route.ts` (server-side, `nodemailer` + cPanel SMTP) — **not** EmailJS (removed, package uninstalled).

**How it works:**
- POST body: `{ name, phone, email?, city, capacity?, message? }` — `name`, `phone`, `city` required; `email`/`capacity`/`message` optional.
- Sends a **sales notification** (all fields) to every address in `SALES_NOTIFY_EMAILS`.
- If `email` was provided, also sends a **client auto-reply** ("query received, rep will follow up in 24–48 hours") to that address. Skipped silently if no email (e.g. SurveyPopup doesn't collect one).

**Env vars required** (`.env.local` locally, Vercel Environment Variables in production — must be added there too or the live site can't send):
```
SMTP_HOST=mail.maxgreenenergy.com.pk
SMTP_PORT=465
SMTP_USER=sales@maxgreenenergy.com.pk
SMTP_PASSWORD=<cpanel mailbox password>
SALES_NOTIFY_EMAILS=sales@maxgreenenergy.com.pk,brandsmen.pk@gmail.com,tahashah085@gmail.com
```

**Known quirk:** `mail.maxgreenenergy.com.pk`'s SSL cert is issued for the shared-hosting domain (`registrar-servers.com`), not the mailbox's own domain, so `nodemailer` needs `tls: { rejectUnauthorized: false }` in the transporter config or the connection fails with an `ESOCKET` cert mismatch. Don't remove that option without re-verifying SMTP still connects.

**Callers of `/api/contact`:**
- `ContactForm.tsx` — main quote form (homepage, cost-estimator page)
- `SurveyPopup.tsx` — free survey modal (no email field, so client auto-reply is skipped, sales notification still sent)

**Capacity auto-fill:** `Calculator.tsx` dispatches a `window` CustomEvent named `solar-estimate` with `{ capacity: "<N> kW" }` after "Calculate My System" runs. `ContactForm.tsx` listens for it and pre-fills the "Solar Capacity Required" field. This is why `ContactForm` must be present on any page that also renders `Calculator` — they communicate via this global event, not props.

---

## WhyUs Section (homepage)

No Karachi/Lahore city split. Single stat: **2100+ Projects All Over Pakistan**.

5 project cards (unified list):
1. MM Oils — 1 MW Industrial (Karachi) — real photo now used: `mm-oils-main.jpg`
2. Karachi Public School — 2 Campuses · 15 kW each
3. Askari 2 Residential Community · 10 kW
4. DHA Phase 6 — Residential Installations · **6–20 kW**
5. Commercial & Office Buildings · **20–50 kW**

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
- Exports `blogs: Blog[]` (sorted newest first) — **109 blogs total**
- Exports `getBlogBySlug(slug)`
- Each `Blog` has: `slug`, `title`, `metaDescription`, `date`, `category`, `author`, `featuredImage`, `readTime`, `sections: BlogSection[]`
- `BlogSection.type`: `"h2" | "h3" | "h4" | "p" | "ul" | "ol" | "table"`
- `ul`/`ol` items separated by `" || "` in `content`
- `table` format: `"H1 | H2 || R1C1 | R1C2"` (first row = headers, ` | ` = cells, ` || ` = rows)

**To add a new blog:** append to the array in `data.ts`. The listing page and static params update automatically.

**Blog categories:** Commercial | Residential | Industrial

**Author:** All 109 blogs credit `author: "Taha Alam"` (Syed Taha Alam Shah, Co-Founder). The byline on `[slug]/page.tsx` links to `/author/taha-alam/`, a dedicated bio page with his photo (`public/images/team/taha-alam.jpeg`) and full bio text. Byline text stays short ("Taha Alam") — don't expand it to the full name.

---

## Projects Page

`src/app/projects/page.tsx` — 10 project cards. 2026-07-03 update replaced two generic placeholder entries ("Commercial Complex Installation", "Rooftop Solar System") with 5 real completed installations, all in Karachi:
- Sheikh Tube Mill — 700 kW On-Grid (Industrial, Sungrow technology partner)
- Qaim Automotive — 260 kW On-Grid (Industrial)
- Subway (Rashid Minhas Road) — 25 kW On-Grid (Commercial)
- Karachi Broast (Rashid Minhas Road) — 20 kW On-Grid (Commercial)
- Hotel County Inn — 70 kW On-Grid (Commercial)

Images for these live in `public/images/projects/` (sheikh-tube-mill.png, qaim-automotive.jpg, subway.webp, karachi-broast.webp, hotel-county-inn.jpeg).

---

## Favicon & Social Share Image

`public/images/maxgreen-favicon.png` is wired up in `src/app/layout.tsx`'s `metadata` export:
- `icons.icon` / `icons.shortcut` / `icons.apple` — favicon everywhere
- `openGraph.images` and `twitter.images` — social share preview image

Added 2026-07-13, replacing a root-level copy of the same file (deleted — real copy lives under `public/images/`). If the favicon/share image needs to change, only edit this one file/reference; don't create a second copy at the repo root.

---

## What Still Needs To Be Done

### Priority 1 — Must Do Before Launch

- [x] **Contact form + SurveyPopup email delivery** — done 2026-07-09. Server-side `/api/contact` route via `nodemailer`/SMTP. See Email System section above.

### Priority 2 — Tracking & SEO

- [ ] **Google Tag Manager** — GTM ID: `GTM-56F3Q5JB` → add to `src/app/layout.tsx`
- [ ] **Facebook Pixel** — Pixel ID: `2338526033244683` → add to `src/app/layout.tsx`
- [ ] **robots.txt + sitemap.xml** — use `next-sitemap` package (109 blog slugs to include)
- [ ] **Google Analytics 4** — add GA4 tag in `layout.tsx`

### Priority 3 — Blogs

- [ ] **Remaining blogs from `Blogs/` folder** — waiting for client feedback on existing 109 live blogs
  - Source files in `Blogs/` folder (WordPress HTML saves)
  - Same Python extraction process used for `More Blogs/`

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
| Facebook | https://www.facebook.com/share/18smy6akyA/?mibextid=wwXIfr |
| Instagram | https://www.instagram.com/maxgreenenergypakistan?igsh=dHJtc2VzeTE5c2Fs |
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

**Unused variable after removing a section**
If you remove a section that used a `const` array, delete the array too or the ESLint build will fail.

**City pages must not break down the 2,100+ figure**
Karachi/Lahore/Islamabad location pages must always cite the single Pakistan-wide **2,100+** installations stat (see Site-Wide Numbers). Never invent a city-specific count like "500+ Lahore installations" or "2,100 in Karachi alone" — client corrected this 2026-07-09.

**Missing blog featured image**
If a blog's `featuredImage` points at the logo placeholder (`/images/blogs/Max-Green-Logo-01.png`), the real image usually still exists in the original WordPress export — check `More Blogs/<Blog Title>_files/` or `Blogs/<Blog Title>_files/` for a numeric-named `.jpg` (the actual featured photo; everything else in that folder is site scripts/CSS). Copy it into `public/images/blogs/<slug>.jpg` and update `data.ts`.
