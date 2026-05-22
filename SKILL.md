---
name: it-premium-page-builder
description: >
  Use this skill whenever building, completing, or enhancing pages for an Enterprise IT/Tech Solutions
  company website. Triggers on: service pages (Cloud, Cybersecurity, DevOps, Managed IT, etc.),
  landing pages, about/team pages, case study pages, contact pages, or any page requiring premium
  IT industry content, professional imagery strategy, conversion-optimized layout, and enterprise-grade
  UX. Always use this skill before writing any page component, section, or layout for an IT company site.
  This skill enforces no-SVG illustration rules, real photography strategy, and token-efficient
  page-by-page implementation patterns.
---

# IT Premium Page Builder — Claude Code Skill

A specialized skill for building conversion-optimized, enterprise-grade IT company service pages.
Designed for token efficiency: each page is built in isolated, self-contained phases.

---

## 0. Pre-Flight Checklist (run before EVERY page)

Before writing a single line of code:

```
□ Read the DESIGN_SYSTEM.md in project root (colors, fonts, spacing tokens)
□ Read the PAGE_MANIFEST.md to find the skeleton file path for this page
□ Identify the page's PRIMARY conversion goal (Lead Gen / Demo / Call / Download)
□ Select 6–10 Unsplash image URLs using the Image Strategy guide below
□ Draft the content outline (H1 → Hero CTA → 3 pillars → services grid → proof → CTA)
□ Confirm framework (Next.js/React/Astro/HTML) and component library in use
□ Check existing Header/Footer components — import, never re-create
```

---

## 1. Page Architecture Blueprint

Every service page MUST follow this section order. Do not deviate:

```
[1]  HERO              — Full-viewport, cinematic background photo + headline + dual CTA
[2]  TRUST BAR         — Client logos or stat counters (social proof above fold)
[3]  OVERVIEW+PROBLEM  — MERGED: What this service is & why it matters (alternating
                          image/text layout) flowing into 3 pain-point cards below
[4]  SERVICES GRID     — 6–9 sub-service cards, each with real photo + micro-copy
[5]  HOW IT WORKS      — Numbered process steps (3–5 steps), timeline or stepper UI
[6]  DIFFERENTIATORS   — Key capability highlights, icon-free — use photos
[7]  CASE STUDY        — 1 featured case study with stats (client, challenge, outcome)
[8]  TECH STACK        — Logo grid of technologies/platforms used (real brand logos via CDN)
[9]  WHY US            — Why choose this company specifically: credentials, certifications,
                          team depth, awards, SLAs, guarantees — with real team/office photos
[10] TESTIMONIALS      — 2–3 client quotes with name, title, company, headshot
[11] FAQ               — 5–7 questions, accordion, SEO-optimized answers
[12] BOTTOM CTA        — Full-width CTA band with urgency + primary action button
```

### Section 3 — OVERVIEW + PROBLEM (Merged) Detail
```
PART A — OVERVIEW (alternating layout, 2–3 rows):
  Row 1: Image LEFT  | Text RIGHT  → "What is [Service]?"  (define the service clearly)
  Row 2: Image RIGHT | Text LEFT   → "Why does it matter?" (business impact, stakes)
  Row 3: Image LEFT  | Text RIGHT  → "What sets great [Service] apart?" (differentiating angle)
  Each row: real full photo (aspect-ratio 16/9, rounded-xl) + headline + 2–3 para body

PART B — PROBLEM (3 pain-point cards, flows beneath overview):
  Thin divider or dark band separating parts A and B
  3 cards side by side: each with real photo, problem title, 2-sentence body
  Tone: empathetic, not alarmist — "Here's what holds most businesses back"
```

### Section 9 — WHY US Detail
```
Layout: 2-part section
  TOP: Full-width dark band with 4–6 credential/stat highlights
       (e.g. "ISO 27001 Certified" | "15+ Years Experience" | "500+ Clients" | "24/7 Support")
  BOTTOM: 3-column cards — each card has:
       • Real photo (team at work / office / project delivery)
       • Bold short title ("Certified Experts", "Proven Methodology", "Guaranteed SLAs")
       • 2–3 sentence body — specific, not generic
       • Optional: logo badge (certification, award, partnership)
  NO SVGs, NO generic icon grids — photos + credentials only
```

---

## 2. Image Strategy (NO SVG ILLUSTRATIONS — EVER)

### Rule
- ❌ NEVER use `<svg>` decorative illustrations, blob shapes, or icon-only sections
- ❌ NEVER use placeholder images (lorem picsum, via.placeholder.com)
- ✅ ALWAYS use real Unsplash photography with descriptive `alt` text
- ✅ Use `loading="lazy"` on all images below the fold
- ✅ Use `object-fit: cover` on all section background images

### Unsplash URL Pattern
```
https://images.unsplash.com/photo-{PHOTO_ID}?auto=format&fit=crop&w={WIDTH}&q=80
```

### Curated Photo IDs by IT Topic

**Cloud Infrastructure**
- Hero: `1451187580459-43490279c0fa` (server room blue light)
- Services: `1558494949-ef010cbdcc31` (data center corridor)
- Hybrid Cloud: `1544197150-b99a580bb7a8` (abstract network)
- Migration: `1509718443690-d8e2fb3474b7` (cloud abstract)

**Cybersecurity**
- Hero: `1550751827-4bd374c3f58b` (code/security dark)
- SOC: `1563986768609-322da13575f3` (monitoring screens)
- Threat: `1510915361861-e7b6a539f5b4` (digital lock)
- Compliance: `1516321318423-f06f85e504b3` (document/policy)

**DevOps / Software Development**
- Hero: `1461749280684-dccba630e2f6` (code on screen)
- CI/CD: `1537432373600-1b751d8a132e` (terminal dark)
- Agile: `1522071820081-009f0129c71c` (team collaboration)
- QA Testing: `1555066931-4365d14bab8c` (laptop code)

**Managed IT Services**
- Hero: `1573164713988-8665fc963095` (IT support desk)
- Help Desk: `1600880292203-757bb62b4baf` (support agent)
- Monitoring: `1551288049-bebda4e38f71` (dashboard screens)
- On-site: `1581092921461-eab62e97a780` (IT technician)

**Data Analytics / AI / ML**
- Hero: `1504868584819-f8e8b4b6d7e3` (data visualization)
- BI Dashboard: `1543286386-2e659306cd6c` (analytics screen)
- AI/ML: `1677442135703-1787eea5ce01` (neural network)
- Big Data: `1518770660439-4636190af475` (abstract data)

**Network Solutions**
- Hero: `1544197150-b99a580bb7a8` (network cables)
- SD-WAN: `1558618666-fcd25c85cd64` (fiber optic)
- Infrastructure: `1603732551681-2e91159b9dc2` (network rack)
- WiFi/Wireless: `1521295121783-8a321d551ad2` (office wireless)

**Digital Transformation**
- Hero: `1485827404703-89b55fcc595e` (futuristic office)
- Strategy: `1497366216548-37526070297c` (whiteboard strategy)
- Innovation: `1519389950473-47ba0277781c` (modern workspace)
- Change Mgmt: `1522071820081-009f0129c71c` (team meeting)

**IT Consulting**
- Hero: `1553877522-43269d4ea984` (executive meeting)
- vCIO: `1560179707-f14e90ef3623` (C-suite discussion)
- Roadmap: `1568992688065-536aad8a12f6` (planning board)
- Assessment: `1507003211169-0a1dd7228f2d` (analysis work)

**About / Team**
- Hero: `1497366216548-37526070297c` (modern office)
- Culture: `1522202176988-66273c78fd46` (team collaboration)
- Leadership: `1560179707-f14e90ef3623` (professional portrait)

---

## 3. Content Writing Rules

### Headline Formula (H1)
```
[Power Verb] + [Outcome] + [for/without] + [Pain Point]
```
Examples:
- "Accelerate Cloud Migration Without Disrupting Your Operations"
- "Stop Breaches Before They Start With AI-Powered Cybersecurity"
- "Scale Your Infrastructure as Fast as Your Ambitions"

### Sub-service Card Copy Template
```
Title:       [Service Name] (2–4 words)
Subtitle:    [Primary benefit, action-oriented] (6–10 words)
Body:        [2 sentences: what it does + key differentiator]
CTA Link:    "Explore [Service Name] →"
Image:       Full-bleed Unsplash photo (aspect-ratio: 4/3)
```

### Stats/Social Proof Numbers (use realistic enterprise benchmarks)
- "99.99% uptime SLA"
- "< 4hr mean time to resolution"
- "40% reduction in IT operational costs"
- "ISO 27001 & SOC 2 Type II Certified"
- "500+ enterprise clients across 20 industries"

### SEO-Optimized FAQ Pattern
```
Q: [Primary keyword phrase as a question?]
A: [40–80 word answer, includes LSI keywords, ends with soft CTA]
```

---

## 4. Component Implementation Rules

### Hero Section
```jsx
// Pattern: Full-viewport photo + overlay gradient + content
// Overlay: linear-gradient(135deg, rgba(0,20,60,0.85) 0%, rgba(0,0,0,0.4) 100%)
// Headline: Clamp font size → clamp(2.5rem, 5vw, 4.5rem)
// CTA buttons: Primary (brand color, filled) + Secondary (white outline)
// Scroll indicator: animated chevron at bottom
// Height: 100vh minimum, 100svh on mobile
```

### Services Grid
```jsx
// 3-column grid on desktop, 2 on tablet, 1 on mobile
// Each card: photo (top, 240px) + gradient overlay on hover
// Hover state: card lifts (translateY -8px) + shadow deepens
// Card body: icon-FREE — use numbered badge or colored tag instead
// Animation: staggered fade-in on scroll (Intersection Observer)
```

### Stats Counter Bar
```jsx
// Dark background band (brand dark color)
// 4 stats across, separator lines between
// Numbers animate count-up on scroll into view
// Use: countUp(0, target, 2000ms) via requestAnimationFrame
```

### Testimonial Cards
```jsx
// Quote mark as large decorative text (not SVG), use CSS ::before
// Client photo: circular, 64px, real Unsplash portrait
// Stars: CSS-only (★★★★★ via content)
// Card background: subtle gradient or glass morphism on dark bg
```

---

## 5. Token-Efficient Implementation Protocol

### Phase Strategy (build in this order, commit between phases)

```
PHASE 1 — SCAFFOLD    : Create page file, import Header/Footer, add section stubs
PHASE 2 — HERO        : Build hero section fully (most impactful, review first)
PHASE 3 — CONTENT     : Trust Bar + Overview & Problem (merged) + Services Grid
PHASE 4 — PROCESS     : How It Works + Differentiators
PHASE 5 — PROOF       : Case Study + Tech Stack + Why Us
PHASE 6 — SOCIAL      : Testimonials + FAQ + Bottom CTA
PHASE 7 — POLISH      : Animations, responsive breakpoints, meta/SEO tags
```

### Token-Saving Rules
1. **Never regenerate** — always edit existing code, never rewrite from scratch
2. **Comment sections** — use `{/* SECTION: Hero */}` so agent finds sections fast
3. **Reuse components** — create once, import everywhere (ServiceCard, StatBadge, etc.)
4. **Batch image decisions** — select ALL images for a page upfront, list them in comments
5. **No placeholder content** — write real copy from the start, not "Lorem ipsum"
6. **CSS variables** — reference design tokens, never hard-code colors or spacing
7. **Stop at phase boundaries** — commit/save after each phase, confirm before continuing

### Shared Components to Build Once (Phase 0)
```
/components/shared/
  ├── HeroSection.jsx             → Section 1
  ├── TrustBar.jsx                → Section 2
  ├── OverviewAndProblem.jsx      → Section 3 (merged: alternating overview + problem cards)
  ├── ServicesGrid.jsx            → Section 4 (wrapper)
  ├── ServiceCard.jsx             → Section 4 (individual card)
  ├── HowItWorks.jsx              → Section 5 (wrapper)
  ├── ProcessStep.jsx             → Section 5 (individual step)
  ├── DifferentiatorsSection.jsx  → Section 6
  ├── CaseStudySection.jsx        → Section 7
  ├── TechStackSection.jsx        → Section 8
  ├── WhyUsSection.jsx            → Section 9
  ├── TestimonialsSection.jsx     → Section 10 (wrapper)
  ├── TestimonialCard.jsx         → Section 10 (individual card)
  ├── FAQSection.jsx              → Section 11 (wrapper)
  ├── FAQAccordion.jsx            → Section 11 (accordion logic)
  ├── CTABand.jsx                 → Section 12
  ├── SectionHeader.jsx           → Used across all sections
  └── StatCounter.jsx             → Used in Sections 1, 2, 7
```

---

## 6. Responsive & Performance Checklist

Before marking a page complete:
```
□ Mobile first CSS (min-width breakpoints)
□ All images have width + height attributes (prevent CLS)
□ Hero image uses fetchpriority="high" (LCP optimization)
□ Below-fold images use loading="lazy"
□ Font display: swap on all @font-face
□ No layout shifts on load (skeleton or fixed heights)
□ Hover states work on touch (not hover-dependent)
□ All CTAs are min 48px tap target on mobile
□ Color contrast passes WCAG AA (4.5:1 text, 3:1 UI)
□ Page title + meta description + OG tags set
```

---

## 7. Page-Specific Content Templates

### Cloud Infrastructure Page
```
H1:  "Enterprise Cloud Infrastructure Built for Scale, Speed & Security"
Tag: "Cloud Solutions"
Pain points: Cost overruns, downtime risk, slow scaling, vendor lock-in
Services:   Cloud Migration, Hybrid Cloud, Cloud-Native Dev, FinOps,
            Disaster Recovery, Cloud Security, Multi-Cloud, Kubernetes
Stats:      "60% avg cost reduction", "99.99% uptime", "3x faster deployment"
```

### Cybersecurity Page
```
H1:  "Zero-Compromise Cybersecurity for the Enterprise"
Tag: "Cybersecurity"
Pain points: Ransomware, compliance gaps, insider threats, breach costs
Services:   SOC-as-a-Service, Pen Testing, SIEM, Zero Trust, DLP,
            Incident Response, Compliance (ISO/SOC2/HIPAA), Threat Intel
Stats:      "< 15min threat detection", "100% compliance record", "500+ audits"
```

### Managed IT Services Page
```
H1:  "Your Entire IT Department — Delivered as a Service"
Tag: "Managed Services"
Pain points: Downtime, talent shortage, unpredictable costs, reactive IT
Services:   24/7 Help Desk, Remote Monitoring, Patch Mgmt, Asset Mgmt,
            IT Procurement, vCIO, On-site Support, Backup & Recovery
Stats:      "< 4hr MTTR", "97% first-call resolution", "40% cost savings"
```

### DevOps & Software Development Page
```
H1:  "Ship Faster, Break Nothing — DevOps & Engineering at Enterprise Scale"
Tag: "DevOps & Engineering"
Pain points: Slow releases, fragile deployments, siloed teams, tech debt
Services:   CI/CD, Containerization, IaC, API Development, QA Automation,
            Legacy Modernization, Microservices, Platform Engineering
Stats:      "10x deployment frequency", "80% fewer incidents", "2x team velocity"
```

### Digital Transformation Page
```
H1:  "Transform Your Business — Before Disruption Transforms It for You"
Tag: "Digital Transformation"
Pain points: Legacy tech, digital laggards, poor CX, manual processes
Services:   Strategy & Roadmap, Process Automation, ERP/CRM, Data Strategy,
            Change Management, UX Design, AI Integration, API Economy
Stats:      "3x ROI avg", "18-month transformation timeline", "92% adoption rate"
```

---

## 8. Quality Gates

A page is only "done" when it passes ALL of these:

| Gate | Check |
|------|-------|
| Content | Every section has real, specific copy (no placeholders) |
| Images | 6+ real Unsplash photos, all with descriptive alt text |
| CTA | At least 3 CTAs per page (hero, mid, bottom) |
| Mobile | Tested at 375px, 768px, 1280px, 1920px |
| SEO | Title, description, H1–H3 hierarchy, FAQ schema |
| Performance | No images >200KB without next/image or lazy loading |
| Accessibility | Focus states visible, all images have alt, form labels present |
| Brand | Uses only design system tokens, consistent with other pages |
