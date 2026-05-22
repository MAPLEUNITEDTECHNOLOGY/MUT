# MU Technologies â€” Design System

> **Living reference** for every color, type scale, spacing rule, component pattern, and animation convention used across the codebase. Update this document whenever you introduce a new token or pattern.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Elevation & Shadows](#5-elevation--shadows)
6. [Borders & Radii](#6-borders--radii)
7. [Backgrounds & Surfaces](#7-backgrounds--surfaces)
8. [Motion & Animation](#8-motion--animation)
9. [Component Patterns](#9-component-patterns)
10. [Utility Classes](#10-utility-classes)
11. [Icon System](#11-icon-system)
12. [Page Architecture](#12-page-architecture)
13. [Responsive Breakpoints](#13-responsive-breakpoints)
14. [Writing Style & Copy Conventions](#14-writing-style--copy-conventions)

---

## 1. Brand Identity

**Company:** MU Technologies  
**Tagline:** *Engineering the Future of Enterprise IT*  
**Positioning:** Premium B2B enterprise IT infrastructure, cloud, and cybersecurity firm headquartered in Stockholm, Sweden.

### Logotype
```
MU  TECHNOLOGIES
^^  ^^^^^^^^^^^^^
Red  White / Light-weight, wide tracking
```

| Element        | Value                                      |
|----------------|--------------------------------------------|
| "MU" color     | `#e01030` (brand red)                      |
| "TECHNOLOGIES" | `text-white`, `font-light`, `tracking-widest` |
| Font weight    | `font-black` for "MU", `font-light` for subtitle |
| Size (nav)     | `text-[20px]`                              |

**Usage rule:** Never separate "MU" from "TECHNOLOGIES" on one line if space permits. Always render "MU" in brand red.

---

## 2. Color System

### 2.1 Tailwind Custom Colors (`tailwind.config.ts`)

```ts
brand: {
  dark:    '#060d1f',   // Primary dark background
  dark2:   '#0d1b3e',   // Secondary dark surface
  light:   '#faf8ff',   // Off-white page background
  red:     '#e01030',   // Primary accent / CTA
  redDark: '#b00c25',   // Red hover / gradient end
}
```

### 2.2 CSS Custom Properties (`globals.css`)

```css
--color-brand-navy:  #0F172A;   /* Deep navy */
--color-brand-red:   #e01030;   /* Brand red */
--obsidian-dark:     #020617;   /* Deepest dark */
--metallic-light:    #f8fafc;   /* Metallic white */
--brand-cyan:        #e01030;   /* Accent cyan (AI / data contexts) */
--brand-indigo:      #6366f1;   /* Accent indigo (AI / data contexts) */
```

### 2.3 Raw Hex Values Used in Components

| Token                  | Hex          | Usage                                      |
|------------------------|--------------|--------------------------------------------|
| Dark Navy (primary)    | `#060d1f`    | Main dark bg, nav, footer, mobile drawer   |
| Dark Navy (deep)       | `#0a0f1e`    | Gradient start for mega-menu left pane     |
| Deep Dark              | `#080c18`    | Gradient end for mega-menu                 |
| Navy Hero              | `#0f1a37`    | Hero bg, section headings, CTA button bg   |
| Brand Red              | `#e01030`    | CTAs, accents, active nav, section labels  |
| Brand Red Dark         | `#b40022`    | Gradient-from for CTA buttons              |
| Brand Red Hover        | `#c00d28`    | Footer CTA hover                           |
| Off-white Page         | `#faf8ff`    | Page background (light pages)              |
| Soft Light Grey        | `#eff3f7`    | Section alternating background             |
| Form Panel             | `#f2f3ff`    | Quote / pullquote backgrounds              |
| Emerald Status         | `#34d399`    | "All systems operational" indicator        |

### 2.4 Semantic Color Usage

| Context                      | Color                                    |
|------------------------------|------------------------------------------|
| Page background (light)      | `#faf8ff` / `bg-[#faf8ff]`              |
| Section alt background       | `#eff3f7` / `bg-[#eff3f7]`              |
| Dark sections                | `#060d1f` / `bg-[#060d1f]`              |
| Dark hero                    | `#0f1a37` / `bg-[#0f1a37]`              |
| Primary CTA button           | gradient `from-[#b40022] to-[#e01030]`  |
| Primary CTA hover            | `shadow-[0_0_24px_rgba(224,16,48,0.5)]` |
| Section eyebrow label        | `text-[#e01030]`                         |
| Body text (dark bg)          | `text-white/50` â†’ `text-white/40`        |
| Body text (light bg)         | `text-slate-600` / `text-slate-500`      |
| Heading text (light bg)      | `text-[#0f1a37]`                         |
| Heading text (dark bg)       | `text-white`                             |
| Muted text (dark bg)         | `text-white/20` â†’ `text-white/30`        |
| Dividers (dark bg)           | `border-white/[0.06]`                    |
| Dividers (light bg)          | `border-slate-200` / `border-gray-100`  |
| Link hover (light)           | `hover:text-[#e01030]`                   |
| Status Online                | `text-emerald-400` + pulsing dot         |

---

## 3. Typography

### 3.1 Font Stack

**Single font family across all roles:**

```ts
fontFamily: {
  headline: ['Inter', 'sans-serif'],
  body:     ['Inter', 'sans-serif'],
  label:    ['Inter', 'sans-serif'],
  sans:     ['Inter', 'sans-serif'],
}
```

`Inter` is loaded via Google Fonts. The `font-serif` class appears once in the CTA banner form title â€” that is an intentional one-off contrast moment.

### 3.2 Type Scale

| Role                     | Size                                  | Weight      | Tracking              | Example                         |
|--------------------------|---------------------------------------|-------------|----------------------|---------------------------------|
| **Hero H1**              | `clamp(2.5rem, 6vw, 5.5rem)`          | `font-black` | `tracking-tighter`   | "IT Infrastructure Built for Scale" |
| **Section H2 (large)**   | `text-5xl md:text-6xl xl:text-7xl`    | `font-black` | `tracking-tight`     | "What We Deliver."              |
| **Section H2 (medium)**  | `text-4xl md:text-5xl lg:text-6xl`    | `font-black` | `tracking-tight`     | "Enterprise IT, engineeredâ€¦"    |
| **Section H2 (standard)**| `text-3xl md:text-4xl`               | `font-black` | `tracking-tight`     | "Certified. Audited. Proven."   |
| **Card H3 / H4**         | `text-2xl lg:text-3xl`               | `font-black` | `tracking-tight`     | Service card titles             |
| **Sub-heading H3**       | `text-xl`                             | `font-black` | `tracking-tight`     | Sidebar methodology title       |
| **Nav links**            | `text-[13px]`                         | `font-semibold` | `tracking-wider uppercase` | "Services", "About Us"   |
| **Eyebrow label**        | `text-[10px]` or `text-[9px]`        | `font-black` | `tracking-[0.2emâ€“0.3em] uppercase` | "Service Capability"  |
| **Body copy**            | `text-base md:text-lg`               | `font-medium` | â€”                   | Section paragraphs              |
| **Card body**            | `text-sm lg:text-base`               | `font-semibold` | â€”                 | Service card descriptions       |
| **Footer / legal**       | `text-[10px]`                         | `font-bold` | `tracking-[0.1â€“0.15em] uppercase` | Copyright             |
| **Caption / micro**      | `text-[9px]`                          | `font-black` | `tracking-[0.2em] uppercase` | "Protocol 01"              |
| **Stats numbers**        | `text-4xl`                            | `font-black` | â€”                   | "250+", "99.99%"               |

### 3.3 Line Heights

| Context          | Value            |
|------------------|------------------|
| Hero / display   | `leading-[1.05]` |
| Headings         | `leading-tight`  |
| Body paragraphs  | `leading-relaxed`|
| Compact labels   | `leading-snug`   |

### 3.4 Text Effects

```css
/* Hero text shadow */
.hero-text-shadow {
  text-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

/* Gradient text (cyanâ†’indigo) */
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-[#e01030];
}

/* Red gradient text on dark */
bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-[#e01030]

/* White gradient text (hero) */
bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-red-500/50
```

### 3.5 Selection Color

```tsx
// Applied on page wrapper
selection:bg-[#b40022] selection:text-white
```

---

## 4. Spacing & Layout

### 4.1 Container

```tsx
max-w-[1920px] mx-auto
max-w-7xl mx-auto          // Inner content pages (ServicePageTemplate)
```

### 4.2 Horizontal Padding (Responsive Rhythm)

| Breakpoint | Class                           |
|------------|---------------------------------|
| Mobile     | `px-6`                          |
| Tablet     | `md:px-12`                      |
| Desktop    | `lg:px-24`                      |
| Nav bar    | `px-8 md:px-12`                 |

### 4.3 Vertical Padding (Section Rhythm)

| Context              | Value                      |
|----------------------|----------------------------|
| Full sections        | `py-24 md:py-32`           |
| Compact sections     | `py-20 lg:py-24`           |
| Hero                 | `h-screen min-h-[640px]`   |
| Card internal        | `p-8 md:p-10 lg:p-12`      |
| Form                 | `p-10 md:p-14`             |
| Footer pre-CTA band  | `py-14 md:py-16`           |
| Footer grid          | `py-16 md:py-20`           |
| Footer trust bar     | `py-8`                     |
| Footer legal bar     | `py-7`                     |
| Nav height           | `h-[76px]`                 |

### 4.4 Gap Scale

| Context                   | Value              |
|---------------------------|--------------------|
| Section gap (flex row)    | `gap-12 lg:gap-20` |
| Card grid gap             | `gap-10 lg:gap-16` |
| Mega-menu grid            | `gap-x-6 gap-y-3`  |
| Footer grid               | `gap-12 lg:gap-8`  |
| CTA button gap            | `gap-4`            |
| Social icons              | `gap-3`            |
| Nav links                 | `gap-1`            |
| Eyebrow (line + text)     | `gap-2` â€“ `gap-4`  |

---

## 5. Elevation & Shadows

| Level         | Class / Value                                                                 | Usage                           |
|---------------|-------------------------------------------------------------------------------|---------------------------------|
| **Flat**      | No shadow                                                                      | Dividers, text-only sections    |
| **Subtle**    | `shadow-sm`                                                                    | Service icon thumbnails         |
| **Card**      | `shadow-[0_12px_40px_rgba(4,9,20,0.06)]`                                      | Light bg service cards          |
| **Card hover**| `shadow-[0_20px_50px_rgba(4,9,20,0.12)]`                                      | Hovered service cards           |
| **Panel**     | `shadow-[0_8px_40px_rgba(0,0,0,0.04)]` / `shadow-xl`                          | Form panel, stats card          |
| **Mega-menu** | `shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]`| Dropdown panels                 |
| **Nav scroll**| `shadow-[0_8px_32px_rgba(0,0,0,0.4)]`                                         | Sticky nav after scroll         |
| **CTA glow**  | `hover:shadow-[0_0_24px_rgba(224,16,48,0.5)]`                                 | Red CTA buttons on hover        |
| **Hover red glow** | `hover:shadow-[0_12px_40px_rgba(224,16,48,0.08)]`                       | Mega-menu item hover            |
| **Green glow**| `shadow-[0_0_10px_rgba(52,211,153,0.5)]`                                      | Status indicator dot            |

---

## 6. Borders & Radii

### 6.1 Border Radius Scale

| Token                 | Class              | Usage                               |
|-----------------------|--------------------|-------------------------------------|
| Full pill             | `rounded-full`     | Badges, eyebrow labels, ghost btns  |
| Extra large           | `rounded-3xl`      | Service cards, image containers     |
| Large                 | `rounded-2xl`      | Mega-menu, cert cards, mobile drawer|
| Medium                | `rounded-xl`       | Form inputs, nav items, icon boxes  |
| Standard              | `rounded-lg`       | CTA buttons, form container         |
| Small                 | `rounded-md`       | Social icons                        |

### 6.2 Border Colors

| Context              | Value                         |
|----------------------|-------------------------------|
| Dark surface divider | `border-white/[0.06]`         |
| Lighter dark divider | `border-white/[0.04]`         |
| Card border (light)  | `border-slate-200`            |
| Card border (white)  | `border-gray-100`             |
| Red accent border    | `border-[#e01030]/20`         |
| Glass border         | `border-white/10`             |
| Ghost button         | `border-white/[0.05]`         |
| Input focus          | `focus:border-[#0f1a37]`      |
| Input default        | `border-slate-200`            |

### 6.3 Accent Line Pattern

A recurring brand detail: a **2px gradient line** sits at the top of mega-menus and panels:

```tsx
<div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0a0f1e] via-[#e01030] to-slate-200 z-10" />
```

A smaller 1px horizontal rule decorates section headings:

```tsx
<div className="h-px w-8 bg-[#e01030]" />           // Eyebrow line
<div className="w-10 h-px bg-[#e01030]" />           // Capabilities eyebrow
<div className="w-8 h-[2px] bg-gradient-to-r from-[#e01030] to-[#b00c25]" />  // Service page
```

Footer column headers use a `w-3 h-px bg-[#e01030]` rule.

---

## 7. Backgrounds & Surfaces

### 7.1 Surface Types

| Name              | Classes / Values                                               | Used in                     |
|-------------------|----------------------------------------------------------------|-----------------------------|
| **Page (light)**  | `bg-[#faf8ff]`                                                 | Main page wrapper           |
| **Section alt**   | `bg-[#eff3f7]`                                                 | WhoWeAre, CTABanner         |
| **Primary dark**  | `bg-[#060d1f]`                                                 | CoreCapabilities, Footer    |
| **Hero dark**     | `bg-[#0f1a37]`                                                 | HeroSection, ServicePageHero|
| **Card white**    | `bg-white`                                                     | Service cards, panels       |
| **Form background** | `bg-slate-50`                                                | Input fields                |
| **Pullquote**     | `bg-[#f2f3ff]`                                                 | ServicePageTemplate         |
| **Glass (dark)**  | `glass-card` â†’ `backdrop-blur-md bg-white/5 border border-white/10` | Dark overlays        |
| **Glass (light)** | `glass-card-light` â†’ `backdrop-blur-md bg-slate-50/40 border border-slate-200/50` | Light overlays |

### 7.2 Background Textures

Three recurring texture patterns are overlaid at low opacity:

```tsx
// Dot grid (light) â€” WhoWeAreSection
style={{ backgroundImage: 'radial-gradient(#64748b 2px, transparent 2px)', backgroundSize: '40px 40px' }}
className="absolute inset-0 opacity-20"

// Dot grid (white on dark) â€” ServicePageTemplate hero, TrustCompliance
style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
className="absolute inset-0 opacity-10"

// Line grid (white on dark) â€” CoreCapabilitiesSection
style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
className="absolute opacity-[0.03]"

// Scan-lines (Footer)
style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.012) 1px, rgba(255,255,255,0.012) 2px)' }}
```

### 7.3 Radial Glow Overlays

Used to add depth to dark sections (always `pointer-events-none`):

```tsx
// Mega-menu red glow
<div className="absolute top-0 right-0 w-64 h-64 bg-[#e01030]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

// TrustCompliance center glow
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(224,16,48,0.04)_0%,transparent_70%)] pointer-events-none" />

// Cert card hover glow
<div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.05)_0%,transparent_70%)] pointer-events-none" />

// Footer bottom edge
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#e01030]/30 to-transparent" />
```

---

## 8. Motion & Animation

### 8.1 Libraries

- **Framer Motion** via `motion/react` â€” all complex UI transitions
- **CSS keyframes** â€” marquee, crossfade, slide-in

### 8.2 CSS Keyframes

```css
/* Mobile drawer entry */
@keyframes slideInLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0);     opacity: 1; }
}
.animate-[slideInLeft_0.35s_cubic-bezier(0.16,1,0.3,1)]

/* Ticker marquee */
@keyframes marquee {
  0%   { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
.animate-marquee { animation: marquee 25s linear infinite; }
.animate-marquee:hover { animation-play-state: paused; }

/* Crossfade image cycle (4 images, 16s loop) */
@keyframes cf4FadeInOut {
  0%   { opacity: 0; }
  5%   { opacity: 1; }
  25%  { opacity: 1; }
  30%  { opacity: 0; }
  100% { opacity: 0; }
}
/* Stagger offsets: 0s, 4s, 8s, 12s */
```

### 8.3 Framer Motion Variants

```ts
// Mega-menu panel
megaMenuVariants = {
  hidden:  { opacity: 0, y: -8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1,
             transition: { duration: 0.25, ease: [0.25,0.46,0.45,0.94], staggerChildren: 0.03, delayChildren: 0.06 }},
  exit:    { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.18, ease: 'easeIn' }}
}

// Mega-menu list items (staggered)
itemVariants = {
  hidden:  { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: 'easeOut' }}
}

// Industries / simple dropdown
dropdownVariants = {
  hidden:  { opacity: 0, y: 10, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: [0.16,1,0.3,1] }},
  exit:    { opacity: 0, y: 5, scale: 0.98, transition: { duration: 0.15, ease: 'easeIn' }}
}

// Individual service items (scroll-stagger)
transition: { delay: idx * 0.05 + 0.1, duration: 0.4, ease: [0.16,1,0.3,1] }
```

### 8.4 BlurText Animation

`<BlurText>` in [`src/components/ui/BlurText.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/ui/BlurText.tsx):

```ts
initial:    { opacity: 0, filter: 'blur(20px)', y: 20 }
whileInView:{ opacity: 1, filter: 'blur(0px)',  y: 0  }
transition: { duration: 0.8, delay: delay/1000 + i*0.05, ease: [0.22,1,0.36,1] }
viewport:   { once: true }
```

### 8.5 Micro-Interaction Easing

| Easing token                      | Use case                                  |
|-----------------------------------|-------------------------------------------|
| `cubic-bezier(0.16, 1, 0.3, 1)`   | Dropdowns, card hover (spring-like)       |
| `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Mega-menu panel open               |
| `cubic-bezier(0.22, 1, 0.36, 1)`  | BlurText entrance                         |
| `ease-[cubic-bezier(0.16,1,0.3,1)]` | Nav logo slide / link reveal           |
| `ease-[cubic-bezier(0.22,1,0.36,1)]` | Mobile drawer open                    |
| `duration-200`                    | Fast hover states (nav items)             |
| `duration-300`                    | Standard hover transitions                |
| `duration-500`                    | Card hover, glass panel transitions       |
| `duration-700` / `duration-[700ms]` | Logo position glide on scroll         |

### 8.6 Hover Interaction Patterns

```tsx
// Card lift
hover:-translate-y-1   transition-all duration-500

// CTA button press
hover:scale-[1.02]   active:scale-[0.97]   hover:scale-[1.03]

// Text link shift
hover:pl-1   transition-all duration-200    // Footer links indent

// Arrow icon reveal
opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300
```

---

## 9. Component Patterns

### 9.1 Section Eyebrow

Every section begins with an eyebrow that establishes context:

```tsx
// Left-aligned (most sections)
<div className="flex items-center gap-4 mb-6">
  <div className="h-px w-8 bg-[#e01030]" />
  <span className="text-[#e01030] text-[10px] font-bold tracking-[0.2em] uppercase">
    Who We Are
  </span>
</div>

// Centered (TrustCompliance)
<div className="flex items-center justify-center gap-4 mb-5">
  <div className="h-px w-8 bg-[#e01030]" />
  <span className="text-[#e01030] text-[11px] font-black tracking-[0.3em] uppercase">
    Trust & Compliance
  </span>
  <div className="h-px w-8 bg-[#e01030]" />
</div>

// Icon-only prefix (CoreCapabilities)
<h2 className="text-[#e01030] text-xs font-bold tracking-[0.3em] uppercase mb-8 flex items-center gap-4">
  <div className="w-10 h-px bg-[#e01030]" /> Our Services
</h2>
```

### 9.2 Primary CTA Button

```tsx
<Link
  href="/contact"
  className="relative overflow-hidden bg-gradient-to-br from-[#b40022] to-[#e01030]
             text-white px-10 py-4 lg:py-5 rounded-lg text-[13px] font-black
             tracking-widest uppercase shadow-xl transition-all
             hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(224,16,48,0.4)]
             active:scale-[0.98]"
>
  Schedule a Consultation
</Link>
```

### 9.3 Ghost / Outline Button

```tsx
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
              bg-white/[0.03] hover:bg-white/[0.08] text-white text-[13px]
              font-medium transition-all duration-300
              border border-white/[0.05] hover:border-white/[0.15] group/btn">
  Explore All Services
  <ArrowRightIcon className="group-hover/btn:translate-x-0.5 transition-all duration-300" />
</a>
```

### 9.4 Text CTA Link

```tsx
<a className="inline-flex items-center gap-2 text-[#e01030] font-bold
              hover:text-[#0f1a37] transition-colors uppercase tracking-widest
              text-xs pb-1 border-b-2 border-[#e01030] hover:border-[#0f1a37]">
  Learn More About Us <span className="text-lg leading-none">â†’</span>
</a>
```

### 9.5 Service Card (CoreCapabilities)

```tsx
<div className="bg-white flex flex-col md:flex-row rounded-3xl overflow-hidden
                shadow-[0_12px_40px_rgba(4,9,20,0.06)] border border-slate-200
                group hover:shadow-[0_20px_50px_rgba(4,9,20,0.12)]
                hover:-translate-y-1 transition-all duration-500">
  {/* Image Side */}
  <div className="relative h-56 md:h-auto md:w-5/12 overflow-hidden bg-[#0a1128]">
    <img className="w-full h-full object-cover group-hover:scale-[1.05]
                    transition-transform duration-[1.5s] ease-out" />
    {/* Protocol badge */}
    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1
                    rounded-full text-[9px] font-black tracking-widest uppercase
                    text-white border border-white/10">
      Protocol 01
    </div>
  </div>
  {/* Text Side */}
  <div className="p-8 md:p-10 lg:p-12 bg-white md:w-7/12 flex flex-col justify-center">
    <span className="text-[#e01030] text-[9px] font-black tracking-[0.25em] uppercase mb-3">
      {highlight}
    </span>
    <h4 className="text-2xl lg:text-3xl font-black text-[#0f1a37] tracking-tight mb-4
                   group-hover:text-[#e01030] transition-colors">
      {title}
    </h4>
    <p className="text-slate-500 text-sm lg:text-base leading-relaxed font-semibold mb-6">
      {desc}
    </p>
    <Link className="inline-flex items-center gap-2 text-[#0f1a37] font-black
                     text-[10px] uppercase tracking-[0.15em] hover:text-[#b40022]
                     transition-colors group/link">
      Learn More <span className="group-hover/link:translate-x-1 transition-transform">â†’</span>
    </Link>
  </div>
</div>
```

### 9.6 Certification / Glass Card (dark bg)

```tsx
<div className="group relative bg-white/[0.03] backdrop-blur-sm
                border border-white/[0.06] rounded-2xl p-6 md:p-8
                hover:bg-white/[0.07] hover:border-white/[0.12]
                transition-all duration-500 text-center flex flex-col items-center">
  {/* Hover glow overlay */}
  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[radial-gradient(ellipse_at_center,rgba(224,16,48,0.05)_0%,transparent_70%)]
                  pointer-events-none" />
  {/* Icon box */}
  <div className="w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.08]
                  flex items-center justify-center mb-5 text-white/50
                  group-hover:text-[#e01030] group-hover:border-[#e01030]/20
                  group-hover:bg-[#e01030]/[0.06] transition-all duration-500">
    {icon}
  </div>
  {/* Status badge */}
  <span className="text-[9px] font-black tracking-[0.2em] uppercase text-[#e01030]
                   bg-[#e01030]/10 border border-[#e01030]/15 rounded-full px-3 py-1">
    Certified
  </span>
</div>
```

### 9.7 Form Input Pattern

```tsx
<label className="text-slate-400 text-[10px] font-bold uppercase tracking-widest ml-1">
  Full Name
</label>
<input
  className="w-full bg-slate-50 border border-slate-200 rounded-lg
             px-4 py-3.5 text-[#0f1a37] text-sm
             focus:border-[#0f1a37] outline-none transition-all
             placeholder:text-slate-300"
/>
```

### 9.8 Sticky Two-Column Layout (CoreCapabilities)

```tsx
// Left: sticky dark pane (40%)
<div className="lg:w-[40%] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center">

// Right: scrollable light stack (60%)
<div className="lg:w-[60%] bg-[#eff3f7] shadow-[-20px_0_50px_rgba(0,0,0,0.2)]">
```

### 9.9 Mega-Menu Structure

Two-pane layout: left dark pane (32%) + right light pane (68%).

- **Left pane:** Dark gradient, brand intro text, ghost CTA button, status indicator
- **Right pane:** Light `bg-slate-50`, 2-column grid of service links with thumbnail + label + description
- **Top accent:** 2px gradient line from navy â†’ red â†’ slate
- **Trigger:** hover (200ms delay to close), click also toggles

### 9.10 "All Systems Operational" Indicator

Appears in nav (left pane), CoreCapabilities sticky column, and footer:

```tsx
<div className="flex items-center gap-2.5">
  <div className="w-[8px] h-[8px] rounded-full bg-emerald-400
                  shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
  <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.15em]">
    All Systems Operational
  </span>
</div>
```

The pulsing variant used in other places:
```tsx
<div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
```

---

## 10. Utility Classes

Defined in [`globals.css`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/app/globals.css):

| Class              | Effect                                                             |
|--------------------|--------------------------------------------------------------------|
| `.hero-text-shadow`| `text-shadow: 0 4px 12px rgba(0,0,0,0.5)`                         |
| `.no-scrollbar`    | Hides webkit scrollbar                                             |
| `.glass-card`      | `backdrop-blur-md bg-white/5 border border-white/10`               |
| `.glass-card-light`| `backdrop-blur-md bg-slate-50/40 border border-slate-200/50`      |
| `.border-glow`     | On hover: `box-shadow: 0 0 20px rgba(224,16,48,0.3); border-color: rgba(224,16,48,0.5)` |
| `.text-gradient`   | `bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-[#e01030]` |
| `.animate-marquee` | Horizontal infinite scroll (25s linear), pauses on hover          |
| `.hover:bg-white/8`| `rgba(255,255,255,0.08)` background on hover                       |

---

## 11. Icon System

Icons are **inline SVGs** â€” no external icon library. Consistent props:

```tsx
const props = {
  width: "20", height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}
```

| Name       | Used for                           |
|------------|------------------------------------|
| `Cpu`      | AI & Transformation                |
| `Cloud`    | Cloud Infrastructure               |
| `Shield`   | Cybersecurity / Zero Trust         |
| `Network`  | Network Architecture               |
| `Lock`     | Zero Trust / Security              |
| `Eye`      | SOC / Monitoring                   |
| `RefreshCw`| Disaster Recovery                  |
| `ChevronDown` | Dropdowns                       |
| `ArrowRight`  | CTAs, "Learn More" links        |
| `Menu`     | Mobile hamburger                   |

Navigation service links also include a small **image thumbnail** (40Ã—40px, `rounded-xl`, `object-cover`) sourced from `/images/svc_*.jpg`.

---

## 12. Page Architecture

### 12.1 Light Inner Pages

```tsx
// Layout wrapper
<div className="bg-[#faf8ff] text-[#0f1a37] antialiased
                selection:bg-[#b40022] selection:text-white min-h-screen">
  <InnerHeader />   {/* Fixed dark nav, always visible */}
  <main className="pt-[76px]">  {/* Offset for fixed header height */}
    {/* Page content */}
  </main>
  <Footer />
</div>
```

### 12.2 Home Page

```tsx
<div className="min-h-screen bg-[#faf8ff] text-[#0f1a37] antialiased
                selection:bg-[#b40022] selection:text-white">
  <Header />   {/* Transparent â†’ dark on scroll */}
  <main>
    <HeroSection />           {/* Dark, full-bleed, h-screen */}
    <WhoWeAreSection />       {/* Light (#eff3f7) */}
    <CoreCapabilitiesSection />{/* Dark (#060d1f) */}
    <CaseStudiesSection />    {/* Light */}
    <GlobalNetworkSection />  {/* Dark or neutral */}
    <TrustComplianceSection />{/* Dark (#060d1f) */}
    <CTABannerSection />      {/* Light (#eff3f7) */}
  </main>
  <Footer />
</div>
```

Sections alternate **dark / light** to create visual rhythm.

### 12.3 Service Pages (Template)

Used via [`ServicePageTemplate`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/services/ServicePageTemplate.tsx):

```
bg-[#faf8ff] pt-[76px] pb-32
  â”œâ”€â”€ Hero banner (dark #0f1a37, dot-grid texture, h1 + subtitle)
  â”œâ”€â”€ Stats card (white, negative-margin overlap, 3-col grid)
  â””â”€â”€ 12-column grid
       â”œâ”€â”€ Left 7/12: Overview + pullquote
       â””â”€â”€ Right 5/12: Sticky methodology steps + CTA
```

### 12.4 Header Variants

| Component       | Behavior                                                     |
|-----------------|--------------------------------------------------------------|
| `Header.tsx`    | Transparent on load â†’ `bg-[#060d1f]/95 blur-xl` on scroll. Logo animates from center â†’ left. Nav links fade in. Hamburger fades out on scroll. |
| `InnerHeader.tsx`| Always `bg-[#060d1f]/95 blur-xl`. Logo left-aligned. Active route highlighted in `text-[#e01030]`. |

---

## 13. Responsive Breakpoints

Standard Tailwind breakpoints used throughout:

| Breakpoint | Min-width | Usage                                                |
|------------|-----------|------------------------------------------------------|
| `sm`       | 640px     | 2-column grids, button rows, form layouts            |
| `md`       | 768px     | Larger type, horizontal card layouts, footer switch  |
| `lg`       | 1024px    | Desktop nav visible, sticky columns, two-pane layouts|
| `xl`       | 1280px    | Wider type scale bumps                               |

Max container: `max-w-[1920px]` â€” the site is designed to look great on ultra-wide monitors without ever becoming too wide.

---

## 14. Writing Style & Copy Conventions

### Tone
- **Authoritative, precise, enterprise.** No fluff.
- Short sentences. Active voice.
- Avoid "leveraging" and "synergy" â€” prefer concrete verbs: *design, deploy, manage, protect, scale*.

### Heading Style
- Sentence case for full headings: `"Enterprise IT, engineered for what comes next."`
- Fragments used deliberately: `"What We Deliver."` `"Certified. Audited. Proven."`
- Numbers/stats in headings use `+` suffix: `"250+ Enterprise Clients"`

### Label / Eyebrow Style
- ALL CAPS, tight tracking, small size
- Always preceded by a short red horizontal rule or red accent

### CTA Copy
- Imperative, specific: `"Schedule a Consultation"`, `"Request Consultation"`, `"Get Started"`
- Button text in ALL CAPS: `"CONTACT US"`, `"SCHEDULE A CONSULTATION"`
- Secondary links use â†’ arrow: `"Explore All Services â†’"`

### Status Indicators
- Uptime: `"99.99% Uptime SLA"`
- Operations: `"24/7 NOC â€” â— ONLINE"` (emerald dot)
- System: `"All Systems Operational"`

---

## Appendix: Key File Reference

| File | Purpose |
|------|---------|
| [`tailwind.config.ts`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/tailwind.config.ts) | Color and font tokens |
| [`src/app/globals.css`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/app/globals.css) | CSS variables, utility classes, keyframes |
| [`src/components/Header.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/Header.tsx) | Scroll-aware home header + mega-menu |
| [`src/components/InnerHeader.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/InnerHeader.tsx) | Static dark header for inner pages |
| [`src/components/Footer.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/Footer.tsx) | Full footer with newsletter, links, certs |
| [`src/components/home/HeroSection.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/home/HeroSection.tsx) | Hero + stats marquee |
| [`src/components/home/CoreCapabilitiesSection.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/home/CoreCapabilitiesSection.tsx) | Sticky 2-column service showcase |
| [`src/components/home/WhoWeAreSection.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/home/WhoWeAreSection.tsx) | About section with crossfade images |
| [`src/components/home/TrustComplianceSection.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/home/TrustComplianceSection.tsx) | Certification glass cards |
| [`src/components/home/CTABannerSection.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/home/CTABannerSection.tsx) | Contact form section |
| [`src/components/services/ServicePageTemplate.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/services/ServicePageTemplate.tsx) | Reusable service detail page |
| [`src/components/ui/BlurText.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/ui/BlurText.tsx) | Scroll-triggered blur-in text animation |
| [`src/components/ui/CustomCursor.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/ui/CustomCursor.tsx) | Custom cursor component |
| [`src/components/ui/GridPattern.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/ui/GridPattern.tsx) | Reusable background grid |
| [`src/components/services/ai/AIHero.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/services/ai/AIHero.tsx) | AI page parallax hero with scroll-driven `y` transform |
| [`src/components/services/ai/SolutionPillars.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/services/ai/SolutionPillars.tsx) | Scroll-snap stacking card layout for AI solutions |
| [`src/components/home/CaseStudiesSection.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/home/CaseStudiesSection.tsx) | Bento editorial 3-col case study grid |
| [`src/components/home/GlobalNetworkSection.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/components/home/GlobalNetworkSection.tsx) | Serif-contrast global presence section |
| [`src/app/(pages)/services/page.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/app/(pages)/services/page.tsx) | Services hub â€” grid + process timeline + inline CTA |
| [`src/app/(pages)/services/ai-transformation/page.tsx`](file:///c:/Users/admin/Documents/github/MUT-main/MUT-main/src/app/(pages)/services/ai-transformation/page.tsx) | AI page orchestrator â€” obsidian palette, `whileInView` sections |

---

## 15. Advanced Component Patterns

### 15.1 Bento Editorial Card Grid (CaseStudiesSection)

A 3-column grid mixing **light** and **dark** card variants for visual editorial rhythm. The center card is always dark â€” used as a cinematic "centerpiece".

```tsx
// Light card (default)
<div className="group relative bg-white rounded-3xl p-8 shadow-sm border border-slate-100
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:-translate-y-1
                transition-all duration-500 overflow-hidden flex flex-col">

  {/* Industry badge */}
  <span className="bg-[#0f1a37] text-white text-[10px] font-black tracking-widest uppercase
                   px-3 py-1 rounded border border-black/10">Finance</span>

  {/* Arrow CTA â€” animates right on hover */}
  <span className="text-[#e01030] font-black text-xl group-hover:translate-x-2 transition-transform duration-300">â†’</span>

  {/* Key Metric footer */}
  <div className="border-t border-slate-100 pt-6 mt-auto">
    <span className="block text-[#e01030] text-[10px] font-black tracking-[0.2em] uppercase mb-1">Key Metric</span>
    <span className="text-4xl font-black text-[#0f1a37] tracking-tighter">0.04ms</span>
    <span className="block text-xs font-bold text-slate-400 mt-1">Transaction Latency</span>
  </div>

  {/* Full-card invisible link overlay */}
  <a href="/case-studies/finance" className="absolute inset-0 z-20" aria-label="View case study" />
</div>

// Dark centerpiece card
<div className="group relative bg-[#060d1f] rounded-3xl p-8 border border-white/10
                hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col
                shadow-[0_20px_50px_rgba(6,13,31,0.3)]">
  {/* Radial gradient background that scales on hover */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,...)]
                  group-hover:scale-105 transition-transform duration-1000 pointer-events-none" />
  {/* White-toned metric */}
  <span className="text-4xl font-black text-white tracking-tighter">100%</span>
  <span className="block text-xs font-bold text-white/40 mt-1">HIPAA Compliance</span>
</div>
```

**Key Metric display pattern** â€” used at the bottom of every case study card:
```
[Red eyebrow]  Key Metric
[Big number]   0.04ms / 42% / 100%
[Grey label]   Transaction Latency
```

### 15.2 Breadcrumb Navigation

Used in service page heroes (AI transformation, services hub):

```tsx
// Dark hero breadcrumb (standard red/white)
<div className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]
                flex items-center justify-center gap-3">
  <Link href="/" className="hover:text-white transition-colors">Home</Link>
  <span className="text-white/20">/</span>
  <span className="text-[#e01030] tracking-[0.25em]">Services</span>
</div>

// AI page breadcrumb (cyan accent)
<div className="flex items-center gap-3 text-[#e01030] text-[11px] font-bold
                uppercase tracking-[0.2em]">
  <Link href="/">HOME</Link>
  <span className="text-[#e01030]/40">/</span>
  <Link href="/services">SERVICES</Link>
  <span className="text-[#e01030]/40">/</span>
  <span className="text-[#e01030]">AI & AUTOMATION</span>
</div>
```

### 15.3 Process Timeline (Horizontal 4-Step)

Used in the Services Hub page methodology section:

```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
  {/* Connecting line behind */}
  <div className="hidden md:block absolute top-[28px] left-0 w-full h-[2px] bg-white/[0.05] -z-10" />

  {steps.map((step, i) => (
    <div className="flex flex-col items-center text-center group">
      {/* Numbered circle */}
      <div className="w-14 h-14 rounded-full bg-[#0b1529] border border-white/10
                      flex items-center justify-center text-white/40 font-black text-lg
                      group-hover:bg-[#e01030] group-hover:text-white group-hover:border-[#e01030]
                      transition-all duration-300 z-10">
        {step.s}
      </div>
      <h4 className="text-white font-black text-xl mb-3 mt-6">{step.t}</h4>
      <p className="text-white/50 text-sm font-medium leading-relaxed max-w-[240px] mx-auto">{step.d}</p>
    </div>
  ))}
</div>
```

### 15.4 Inline Sentence CTA

A full-sentence interactive CTA link. Used on the Services Hub page:

```tsx
<Link href="/contact"
  className="group inline-flex flex-col md:flex-row items-center gap-4
             text-2xl md:text-3xl font-black tracking-tight text-white/50 hover:text-white transition-colors">
  Ready to transform your stack?
  <span className="text-[#e01030] group-hover:-translate-y-0.5 transition-transform
                   flex items-center gap-2 border-b-2 border-[#e01030]/20
                   group-hover:border-[#e01030] pb-1">
    Talk to an architect
    <svg className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                    transition-all duration-300" .../>
  </span>
</Link>
```

### 15.5 Secondary Outlined CTA Button (Light)

```tsx
<Link href="/insights"
  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black
             tracking-widest text-[12px] uppercase border border-white/20 text-white
             hover:border-[#e01030]/60 hover:bg-white/[0.04] transition-all duration-300">
  Read Our Insights
</Link>
```

### 15.6 Services Hub Card (Light Grid)

Used on `/services` page â€” icon box + description + footer CTA link:

```tsx
<Link className="bg-white border border-gray-100 rounded-[24px] p-8 md:p-10 shadow-sm
                 hover:shadow-xl hover:-translate-y-1 hover:border-[#e01030]/30
                 transition-all duration-300 flex flex-col group h-full">
  {/* Masked icon box */}
  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center mb-8
                  border border-gray-100 group-hover:bg-[#e01030]/5
                  group-hover:border-[#e01030]/20 transition-colors">
    <div className="w-5 h-5 bg-[#0f1a37] group-hover:bg-[#e01030] transition-colors rounded-sm"
         style={{ WebkitMask: '...' }} />
  </div>
  <h3 className="text-xl md:text-2xl font-black tracking-tight text-[#0f1a37] mb-4">{title}</h3>
  <p className="text-gray-500 font-medium leading-relaxed mb-10 flex-grow text-[15px]">{desc}</p>
  {/* Footer link */}
  <div className="flex items-center gap-2 pt-6 border-t border-gray-100 mt-auto
                  text-[#0f1a37] font-bold text-sm tracking-wide
                  group-hover:text-[#e01030] transition-colors">
    Explore Capability <span className="text-lg group-hover:translate-x-1 transition-transform">â†’</span>
  </div>
</Link>
```

---

## 16. AI Transformation Page â€” Design Language

The `/services/ai-transformation` page uses a **distinct sub-palette** that differs from the standard site. It operates in "Obsidian Mode" with cyan as the primary accent instead of red.

### 16.1 AI Page Palette

| Token              | Value          | Usage                                |
|--------------------|----------------|--------------------------------------|
| Obsidian dark      | `#020617`      | Page base / footer gradients         |
| AI dark card       | `#0B0F19`      | Solution card backgrounds            |
| AI surface         | `#0a1128`      | Secondary panels                     |
| AI hero panel      | `#050b1a`      | Social proof badge background        |
| Metallic light     | `#F8FAFC`      | SolutionPillars section bg           |
| **Cyan accent**    | `#e01030`      | Breadcrumbs, status dots, tags       |
| Cyan (Tailwind)    | `cyan-400/500/600` | Labels, check icons, pill borders |
| Indigo accent      | `indigo-400/600` | Gradient endpoints, icons           |
| Emerald accent     | `emerald-400`  | Workflow automation icon             |
| Amber accent       | `amber-400`    | Predictive analytics icon            |
| Rose accent        | `rose-400`     | Custom AI models icon                |
| Purple accent      | `purple-400`   | Document intelligence icon           |

### 16.2 AI Page Selection Color

```tsx
// AI Transformation page wrapper
<div className="relative bg-white selection:bg-red-600/30">
```

### 16.3 Scroll-Driven Parallax Hero

```tsx
const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

// Background image scrolls at 20% of viewport scroll rate (parallax)
<motion.div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: '...', y }} />
```

### 16.4 AI Feature Tag / Badge

```tsx
<div className="flex items-center gap-3 bg-[#0a1128]/40 border border-white/5
                rounded-full px-5 py-2 backdrop-blur-sm">
  <div className="w-1.5 h-1.5 rounded-full bg-[#e01030] shadow-[0_0_8px_rgba(224,16,48,0.8)]" />
  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-300">
    ENTERPRISE AI & TRANSFORMATION
  </span>
</div>
```

### 16.5 Stacking Scroll Cards (SolutionPillars)

A `sticky` + `h-[100dvh]` scroll-snap pattern where each card sticks at `top-0` as the user scrolls, with the previous card scaling down and darkening:

```tsx
// Container (one per card)
<div ref={containerRef} className="h-[100dvh] sticky top-0 flex items-center justify-center">

  <motion.div style={{ scale }}>  {/* Shrinks to 0.95 as it's scrolled past */}
    {/* Darkening overlay for depth */}
    <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-black z-50 pointer-events-none" />

    {/* Card: dark bg-[#0B0F19], rounded-[2.5rem], 50/50 image+content split */}
    ...
  </motion.div>
</div>
```

**Side navigation pill** tracks which card is active with a spring-animated cyan dot:

```tsx
<motion.div
  className="w-2 h-10 rounded-full bg-red-600 shadow-[0_0_15px_rgba(224,16,48,0.5)]"
  animate={{ y: activeCard * 64 }}
  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
/>
```

### 16.6 ROI / Stat Badge (AI Cards)

```tsx
<span className="text-xs font-black uppercase tracking-[0.2em] text-red-500
                 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
  40% OPEX Reduction
</span>
```

### 16.7 AI Card Feature List

```tsx
<div className="flex items-start gap-3">
  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
  <span className="text-sm text-slate-300 font-medium">{feature}</span>
</div>
```

> **Note:** `CheckCircle2` and `ArrowRight` from `lucide-react` are used in the AI page components â€” the **only** place an external icon library is used. All other icons are custom inline SVGs.

### 16.8 AI Page Section Wrappers (whileInView)

Every section below the hero uses scroll-triggered entrance:

```tsx
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.8 }}
>
  <SectionComponent />
</motion.section>
```

### 16.9 Section Flow (Obsidian Alternation)

```
Dark  â†’ AIHero          bg-cover photo, obsidian overlay
Dark  â†’ StatsTicker     bg-[#020617] marquee
Light â†’ SolutionPillars bg-[#F8FAFC] stacking cards
Dark  â†’ ROICalculator   bg-[#020617]
Light â†’ DeliveryProcess bg-[#F8FAFC]
Mixed â†’ AIFAQ           light/dark
Dark  â†’ FinalCTA        bg-[#020617]
```

---

## 17. Custom Cursor

Used on the AI Transformation page (`CustomCursor` component):

```tsx
// mix-blend-difference creates an "invert" effect against any background
<motion.div
  className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full
             pointer-events-none z-[9999] mix-blend-difference"
  style={{ x, y, translateX: '-50%', translateY: '-50%',
           scale: isHovered ? 2.5 : 1 }}
>
  <div className="absolute inset-0 bg-white rounded-full blur-[2px] opacity-50" />
</motion.div>
```

- **Spring config:** `{ damping: 25, stiffness: 700 }` â€” snappy but not instant
- **Hover trigger:** `<a>`, `<button>`, `<input>`, or `.interactive` class â†’ scales `2.5Ã—`
- **Blend mode:** `mix-blend-difference` (renders white dot that inverts whatever is underneath)

---

## 18. GlobalNetworkSection â€” Serif Contrast Moment

The one instance of a serif typeface in the codebase is intentional â€” a **typographic contrast** to create editorial variation:

```tsx
<h2 className="text-5xl md:text-6xl lg:text-[68px] font-light text-[#1f2937]
               tracking-tight leading-[1.05] mb-8"
    style={{ fontFamily: 'Georgia, serif' }}>
  Global<br />Presence,<br />Local Expertise
</h2>
```

| Decision              | Why                                                              |
|-----------------------|------------------------------------------------------------------|
| `Georgia, serif`      | Humanist warmth vs. the mechanical precision of Inter elsewhere  |
| `font-light`          | Contrast against the `font-black` headings throughout the site  |
| `text-[#1f2937]`      | Warm dark grey (not full navy), reinforcing the softer tone     |
| `bg-slate-50`         | Neutral light background â€” not the usual `#eff3f7` or `#faf8ff` |

**Rule:** Do not add more serif instances. This is a deliberate one-off.

---

## 19. Z-Index Stack

| Layer                      | Z-index         |
|----------------------------|-----------------|
| Custom cursor              | `z-[9999]`      |
| Mega-menu panel            | `z-[120]`       |
| Mobile drawer              | `z-[100â€“110]`   |
| Inner nav                  | `z-[100]`       |
| Home nav                   | `z-50`          |
| Section content            | `z-10` / `z-20` |
| Card overlay links         | `z-20`          |
| Background textures/glows  | `z-0`           |
| Pointer-events-none layers | `z-0` or inline |

---

*Last updated: May 2026 â€” generated from source audit of MUT-main.*

