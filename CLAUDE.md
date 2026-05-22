# CLAUDE.md — MU Technologies
# Auto-loaded by Claude Code CLI on every run.
# Lives at: PROJECT ROOT (same level as src/, package.json)
# ─────────────────────────────────────────────────────────────────

## ROLE
Senior Next.js Developer + UI/UX Designer. Enterprise IT company website.
Production-ready code only. No placeholders. No TODOs. No lorem ipsum.
No explanations unless I ask "explain this". Return DIFF for edits, full
file for new files only.

## PROJECT — MU TECHNOLOGIES
- Company: MU Technologies — Enterprise IT & Tech Solutions
- Framework: Next.js 14 App Router
- Language: TypeScript (strict)
- Styles: Tailwind CSS — tokens in src/app/globals.css
- Brand constants: src/lib/constants.ts — read this before every page build
- Animations: Framer Motion or IntersectionObserver (no external anim libs)
- Images: Real Unsplash URLs only — pattern below. NO SVG illustrations.

## EXACT FILE STRUCTURE
```
src/
├── app/
│   ├── layout.tsx              ← Root layout (Inter font + globals)
│   ├── page.tsx                ← Homepage
│   ├── globals.css             ← Brand tokens + animations + utilities
│   ├── sitemap.ts              ← Update base URL before launch
│   ├── robots.ts
│   ├── case-studies/
│   │   ├── finance/page.tsx
│   │   ├── healthcare/page.tsx
│   │   └── logistics/page.tsx
│   ├── heritage/page.tsx
│   └── (inner)/                ← Route group — ALL service/info pages live here
│       ├── layout.tsx          ← Wraps InnerHeader + InnerFooter automatically
│       ├── services/
│       │   ├── page.tsx                        ← Services overview (exists)
│       │   ├── ai-transformation/page.tsx      ← NEEDS BUILDING
│       │   ├── cloud-economics/page.tsx        ← NEEDS BUILDING
│       │   ├── managed-services/page.tsx       ← NEEDS BUILDING
│       │   ├── network-architecture/page.tsx   ← NEEDS BUILDING
│       │   ├── zero-trust/page.tsx             ← NEEDS BUILDING
│       │   └── soc-as-a-service/page.tsx       ← NEEDS BUILDING
│       ├── industries/page.tsx
│       ├── about/page.tsx
│       ├── insights/page.tsx
│       └── contact/page.tsx
├── components/
│   ├── Header.tsx              ← Homepage only — scroll-aware + mega-menu
│   ├── InnerHeader.tsx         ← All (inner)/ pages — sticky, already in layout
│   ├── InnerFooter.tsx         ← All (inner)/ pages — 4-col, already in layout
│   └── shared/                 ← 18 reusable section components (see below)
└── lib/
    └── constants.ts            ← Brand colors, nav routes, service metadata
```

## CRITICAL ROUTING RULE
Service pages live inside `src/app/(inner)/services/[slug]/page.tsx`
The `(inner)/layout.tsx` ALREADY wraps InnerHeader + InnerFooter.
NEVER import or add InnerHeader/InnerFooter inside a service page — they
are injected by the layout automatically.
NEVER use Header.tsx on any (inner)/ page — that is homepage-only.

## SHARED COMPONENTS — /components/shared/ — IMPORT ONLY, NEVER REBUILD
HeroSection.tsx           → Section 1  — full viewport photo + headline + dual CTA
TrustBar.tsx              → Section 2  — client logos + stat counters
OverviewAndProblem.tsx    → Section 3  — alternating overview rows + problem cards
ServicesGrid.tsx          → Section 4  — wrapper grid
ServiceCard.tsx           → Section 4  — individual service card
HowItWorks.tsx            → Section 5  — process steps wrapper
ProcessStep.tsx           → Section 5  — individual step
DifferentiatorsSection.tsx→ Section 6
CaseStudySection.tsx      → Section 7
TechStackSection.tsx      → Section 8
WhyUsSection.tsx          → Section 9
TestimonialsSection.tsx   → Section 10 — wrapper
TestimonialCard.tsx       → Section 10 — individual card
FAQSection.tsx            → Section 11 — wrapper + JSON-LD schema
FAQAccordion.tsx          → Section 11 — accordion logic
CTABand.tsx               → Section 12
SectionHeader.tsx         → Used across all sections
StatCounter.tsx           → Used in sections 1, 2, 7, 9

## PAGE ARCHITECTURE — 12 SECTIONS, THIS ORDER ALWAYS
[1]  HERO              [2]  TRUST BAR         [3]  OVERVIEW+PROBLEM
[4]  SERVICES GRID     [5]  HOW IT WORKS      [6]  DIFFERENTIATORS
[7]  CASE STUDY        [8]  TECH STACK        [9]  WHY US
[10] TESTIMONIALS      [11] FAQ               [12] BOTTOM CTA

## BUILD PHASES (one per CLI run)
P1 Scaffold  →  P2 Hero  →  P3 Sections 2-4  →  P4 Sections 5-6
P5 Sections 7-9  →  P6 Sections 10-12  →  P7 Polish

## HARD RULES — NEVER VIOLATE
1. NO <svg> illustrations — real Unsplash URLs only (never placeholder.com)
2. NO hard-coded hex colors — read globals.css tokens and use them
3. NO lorem ipsum — professional enterprise IT copy always
4. ONE phase per run — stop and wait after each phase
5. Return DIFF (not full file) when editing existing code
6. Hero image: fetchpriority="high" — all below-fold images: loading="lazy"
7. Service page.tsx files stay under 80 lines — all content lives in data files
8. Always export Next.js metadata (title max 60 chars, description max 155 chars)
9. FAQ sections always include JSON-LD FAQPage schema
10. (inner)/ pages: NEVER import Header.tsx, InnerHeader.tsx, or InnerFooter.tsx
11. Read src/lib/constants.ts before building any page — use its values
12. Read src/app/globals.css before any styling — use its CSS variables

## UNSPLASH IMAGE PATTERN
https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={W}&q=85
Hero: w=1920 | Section rows: w=1200 | Cards: w=800 | Avatars: w=200

## DATA FILE PATTERN
Every service page has a matching data file:
src/data/[slug].json  ← ALL content: copy, images, stats, FAQs, case study
Page file imports from data file. Page stays thin (under 80 lines).

## ─── STATUS — UPDATE AS YOU BUILD ───────────────────────────────

### Shared Components
- [ ] All 18 shared components built at /components/shared/

### Service Pages (inside src/app/(inner)/services/)
- [ ] ai-transformation
- [ ] cloud-economics
- [x] managed-services (P1 scaffold done — 12 section components built)
- [ ] Software Development
- [ ] network-architecture
- [x] networking-telecom (P1 scaffold done — 12 section components built)
- [ ] Cyber Security
- [ ] Digital Marketing
- [ ] CCTV Camera

### Other Inner Pages
- [ ] industries        (src/app/(inner)/industries/page.tsx)
- [ ] about             (src/app/(inner)/about/page.tsx)
- [ ] insights          (src/app/(inner)/insights/page.tsx)
- [ ] contact           (src/app/(inner)/contact/page.tsx)

### Pre-Launch (from DEPLOYMENT.md)
- [ ] Replace placeholder testimonials with real client quotes
- [ ] Connect contact form (Formspree / SendGrid API route)
- [ ] Update sitemap.ts base URL to actual domain
- [ ] Run Lighthouse audit — target 90+ all categories
- [ ] Verify all navigation links (no dead href="#")
- [ ] Add Google Analytics / Tag Manager