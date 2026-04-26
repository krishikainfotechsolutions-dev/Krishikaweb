
# Krishika Infotech Solutions — Premium SPA Portfolio

A bold, dark-themed single-page site (black + yellow) built to convert visitors into WhatsApp leads.

## Design System

- Background: `#0B0B0B` (deep black), surfaces `#111` / `#161616`
- Accent: `#FFD600` (bright yellow) — used strategically on CTAs, hover glows, highlights only
- Text: White primary, light grey (`#A1A1AA`) secondary
- Typography: Bold display font (Inter / Space Grotesk) for headings, clean sans for body
- Tokens added to `index.css` + `tailwind.config.ts` (HSL variables, custom shadows for yellow glow, keyframes for fade/scale/slide/glow-pulse)
- Motion: Framer Motion — smooth, sharp easing (`[0.22, 1, 0.36, 1]`), scroll-reveal via `whileInView`

## Page Structure (single `Index.tsx` composing modular sections)

1. **Navbar** — sticky, transparent → blurred on scroll, yellow "Get Quote" CTA
2. **Hero**
   - Animated subtle grid + particles background (CSS + lightweight canvas)
   - Minimal Three.js floating element (single low-poly torus/icosahedron, slow rotation, capped DPR for perf)
   - Headline: "We build websites that grow your business"
   - Sub: Kanpur-based web studio · Static from ₹6500 · Dynamic from ₹9000
   - Primary yellow CTA → WhatsApp, secondary ghost CTA → "View Work"
3. **About** — Founders Krish Agarwal & Vaishanavi as cards with hover lift + yellow border glow
4. **Services** — 3 cards (Business, E-commerce, Portfolio Websites) with animated icons (Lucide), yellow border glow on hover
5. **Pricing** — Two tiers (Static ₹6500+, Dynamic ₹9000+), Dynamic highlighted with yellow outline + glow + "Most Popular" badge, each with WhatsApp CTA
6. **Portfolio** — Dark grid, image tiles, hover → zoom + yellow translucent overlay with project name (placeholder projects ready to swap)
7. **Why Choose Us** — Bullet grid with yellow icons (Speed, SEO, Support, Affordable, Modern Stack, Local)
8. **Process** — 5-step vertical/horizontal timeline with animated progress line that fills on scroll
9. **Testimonials** — Auto-sliding card carousel (Embla), pause on hover
10. **Contact** — Two-column: contact form (name, phone, message) + direct contact info; submit opens WhatsApp with prefilled message (EmailJS optional, deferred)
11. **Footer** — Logo, quick links, socials, copyright
12. **Floating WhatsApp button** — fixed bottom-right, yellow, pulse animation, prefilled message

## WhatsApp Integration

- Single helper `openWhatsApp(message)` → `https://wa.me/<number>?text=<encoded>`
- Used by: Hero CTA, Pricing CTAs (prefilled with plan name), Contact form submit, Floating button
- Phone number placeholder configurable in one constant (user can update)

## Technical Details

- Stack: React 18 + Vite + TypeScript + Tailwind (already in project), add `framer-motion`, `three`, `@react-three/fiber@^8.18`, `@react-three/drei@^9.122.0`, `embla-carousel-react`
- File layout:
  ```text
  src/
    components/
      Navbar.tsx
      Hero.tsx
      HeroScene.tsx        (R3F minimal)
      About.tsx
      Services.tsx
      Pricing.tsx
      Portfolio.tsx
      WhyChooseUs.tsx
      Process.tsx
      Testimonials.tsx
      Contact.tsx
      Footer.tsx
      WhatsAppFloat.tsx
      SectionHeading.tsx
    lib/
      whatsapp.ts
      site.ts              (business info constants)
  pages/Index.tsx          (composes all sections)
  ```
- Performance: lazy-load Three scene with `React.lazy` + Suspense, `dpr={[1, 1.5]}`, `frameloop="demand"` where possible, images use `loading="lazy"`, motion respects `prefers-reduced-motion`
- SEO: update `index.html` title, meta description, OG tags, JSON-LD `LocalBusiness` schema (Kanpur, India)
- Responsive: mobile-first; hamburger menu on Navbar; pricing/services stack on small screens
- README.md updated with setup, customization (phone number, founders, projects), and deploy notes

## Out of Scope (can be added later)

- Real EmailJS/Firebase form delivery (form currently routes to WhatsApp; wiring EmailJS needs your service/template/public keys)
- Real portfolio images (placeholders used)
- CMS / blog
