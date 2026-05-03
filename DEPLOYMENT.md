# MU Technologies — Deployment Guide

## File Structure Overview
```
src/
├── app/
│   ├── layout.tsx              # Root layout (Inter font, globals)
│   ├── page.tsx                # Homepage (all 6 phases)
│   ├── globals.css             # Brand tokens, animations, utilities
│   ├── sitemap.ts              # Dynamic sitemap generation
│   ├── robots.ts               # Crawler instructions
│   ├── case-studies/           # Case study subpages (legacy routes)
│   │   ├── finance/page.tsx
│   │   ├── healthcare/page.tsx
│   │   └── logistics/page.tsx
│   ├── heritage/page.tsx       # Heritage subpage
│   └── (inner)/                # Route group for inner pages
│       ├── layout.tsx          # Shared InnerHeader + InnerFooter
│       ├── services/
│       │   ├── page.tsx        # Services overview
│       │   ├── ai-transformation/page.tsx
│       │   ├── cloud-economics/page.tsx
│       │   ├── managed-services/page.tsx
│       │   ├── network-architecture/page.tsx
│       │   ├── zero-trust/page.tsx
│       │   └── soc-as-a-service/page.tsx
│       ├── industries/page.tsx
│       ├── about/page.tsx
│       ├── insights/page.tsx
│       └── contact/page.tsx
├── components/
│   ├── Header.tsx              # Homepage scroll-aware header + mega-menu
│   ├── InnerHeader.tsx         # Sticky header for inner pages
│   └── InnerFooter.tsx         # 4-column footer for inner pages
└── lib/
    └── constants.ts            # Brand colors, nav routes, service metadata
```

## Running Locally
```bash
npm install
npm run dev
# Opens at http://localhost:3000
```

## Building for Production
```bash
npm run build
npm run start   # Preview production build locally
```

### Build Checks
- All pages should compile with `✓ Compiled successfully`
- Verify page count matches expected routes (16+ pages)
- Check for zero TypeScript errors in output
- All static pages should show `○ (Static)` indicator

## Environment Variables
No environment variables are required for the current build. As external integrations are added (CMS, analytics, forms), document them here:
```
# Future:
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# SENDGRID_API_KEY=SG.xxxxxxx
```

## Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Framework Preset: **Next.js** (auto-detected)
3. Build Command: `npm run build` (default)
4. Output Directory: `.next` (default)
5. Deploy

### Netlify
1. Build Command: `npm run build`
2. Publish Directory: `.next`
3. Install the `@netlify/plugin-nextjs` adapter

## Known Placeholder Sections
- `/services/*` detail pages: Service capability lists need real content and imagery
- `/insights` articles: Currently hardcoded; needs CMS integration (Strapi/Sanity)
- `/contact` form: Frontend-only; needs API route or form service (Formspree, SendGrid)
- Case study subpages: Narrative content is realistic placeholder text
- Client testimonials on homepage: Replace with real client quotes when available
- All `/* ADD: */` comments in code mark specific placeholder locations

## Pre-Launch Checklist
- [ ] Replace placeholder testimonials with real client quotes
- [ ] Connect contact form to email service
- [ ] Add real article content or CMS integration
- [ ] Update `sitemap.ts` base URL to actual domain
- [ ] Verify all images load on production
- [ ] Run Lighthouse audit (target: 90+ all categories)
- [ ] Test on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Check console for errors on every page
- [ ] Verify all navigation links work (no dead `href="#"`)
- [ ] Add Google Analytics / Tag Manager
- [ ] SEO: Verify meta titles and descriptions on all pages
- [ ] Test mega-menu on desktop and mobile drawer
