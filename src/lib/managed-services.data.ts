// ── Managed IT Services — Page Data ──
// All content: no lorem ipsum, no placeholders.
// Images: Unsplash URLs per pattern.

const MGMT_IMG = '/images/services/managed';

export const managedServicesData = {
  // ═══ HERO ═══
  hero: {
    headline: "Your Entire IT Department — Delivered as a Service",
    subline:
      "24/7 NOC monitoring, help desk, on-site engineering, and vCIO strategy — everything you need to run enterprise IT without building an enterprise IT team.",
    imageSrc: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "IT support operations center with monitoring dashboards",
    badge: "MANAGED IT SERVICES & INFRASTRUCTURE OPERATIONS",
    cta: {
      primary: "Book a Free Operations Assessment",
      primaryHref: "/contact?service=managed",
      secondary: "Download NOC Service Catalog",
      secondaryHref: "/resources/managed-services-catalog",
    },
    socialProof: "50,000+ Endpoints Under Management",
  },

  // ═══ TRUST BAR / STATS ═══
  stats: [
    { value: "50", suffix: "K+", label: "Endpoints Monitored" },
    { value: "15", suffix: "min", label: "Mean Time to Resolution" },
    { value: "97", suffix: "%", label: "First-Call Resolution Rate" },
    { value: "40", suffix: "%", label: "Operational Cost Reduction" },
  ],

  // ═══ OVERVIEW + PROBLEM ═══
  overview: {
    sectionLabel: "THE CHALLENGE",
    headline: "IT Operations Shouldn't Be a Distraction From Your Mission",
    subline:
      "Three recurring pain points that drain productivity, inflate budgets, and expose the business to risk — and how our managed services eliminate each one.",
    rows: [
      {
        imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "IT support engineer assisting end user",
        heading: "What Are Managed IT Services?",
        body: "Managed IT Services give you a fully staffed IT department — help desk, network operations center, on-site engineers, and a virtual CIO — for a predictable monthly fee. We monitor your infrastructure 24/7, resolve issues before users notice, and align technology decisions with business goals. It's enterprise-grade IT without the enterprise headcount.",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Real-time network monitoring dashboard",
        heading: "Why Does It Matter Now?",
        body: "Every hour of downtime costs mid-market enterprises an average of $260,000. The IT talent shortage means critical positions sit unfilled for months. And reactive break-fix IT — where you only call someone when something's already broken — is the most expensive way to run technology. Managed services flip the model: proactive, predictable, and purpose-built for business continuity.",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "IT technician performing on-site maintenance",
        heading: "What Sets Great Managed Services Apart?",
        body: "The difference between a commodity MSP and a true IT partner is depth. We don't just reset passwords and patch servers — we provide senior infrastructure architects, security engineers, and a vCIO who presents quarterly technology roadmaps to your board. Every client gets a named account team, not a ticket queue.",
      },
    ],
    painPoints: [
      {
        title: "Unplanned Downtime Killing Productivity",
        desc: "The average enterprise loses 545 production hours per year to IT outages. Reactive break-fix models mean every incident is a fire drill — and your team's productivity burns while you wait for a technician to call back. Our proactive monitoring catches 83% of issues before they impact users.",
        imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
      },
      {
        title: "The IT Talent Shortage Is Real — and Expensive",
        desc: "Cybersecurity engineers command $180K+ salaries. Network architects have 90-day hiring cycles. For most mid-market firms, building a full IT team internally means either breaking the budget or leaving critical roles unfilled. We give you instant access to 50+ certified engineers across every discipline.",
        imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=85",
      },
      {
        title: "Unpredictable IT Costs Derailing Your Budget",
        desc: "Break-fix IT is a financial black box. Emergency calls, after-hours rates, and unbudgeted hardware failures turn IT from a line item into a liability. Our fixed-fee managed services model gives you predictable monthly costs with SLA-backed guarantees — no surprises, no inflated invoices.",
        imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
      },
    ],
  },

  // ═══ SERVICES GRID (8 sub-services) ═══
  services: [
    {
      title: "24/7 Help Desk & End-User Support",
      desc: "Multi-channel support — phone, email, chat, and self-service portal — with 97% first-call resolution. Your users get a live engineer in under 60 seconds, every time.",
      imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=85",
      tag: "Support",
    },
    {
      title: "Network Operations Center (NOC) Monitoring",
      desc: "24/7/365 infrastructure monitoring from our ISO 27001-certified NOC. We watch your servers, networks, endpoints, and cloud workloads — and we respond to P1 incidents in under 15 minutes.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      tag: "Monitoring",
    },
    {
      title: "Patch Management & Vulnerability Remediation",
      desc: "Automated discovery, testing, and deployment of OS and application patches across your entire fleet. Zero-day vulnerabilities are prioritized and patched within SLA — not left open for weeks.",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=85",
      tag: "Security",
    },
    {
      title: "IT Asset Lifecycle Management",
      desc: "From procurement to decommissioning — we track every device, license, and warranty. Automated refresh cycles prevent end-of-life surprises, and centralized asset intelligence eliminates shadow IT.",
      imageSrc: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?auto=format&fit=crop&w=800&q=85",
      tag: "Assets",
    },
    {
      title: "On-Site Engineering & Field Services",
      desc: "When remote support isn't enough, our field engineers are on-site within 4 hours — hardware replacement, network cabling, office moves, and hands-on troubleshooting at every location.",
      imageSrc: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=85",
      tag: "Field Services",
    },
    {
      title: "Virtual CIO (vCIO) & Technology Strategy",
      desc: "A senior technology executive embedded in your leadership team. Quarterly business reviews, budget planning, roadmap development, and board-ready presentations — aligned to your growth goals.",
      imageSrc: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=85",
      tag: "Strategy",
    },
    {
      title: "Backup, Disaster Recovery & Business Continuity",
      desc: "Automated backups with immutable storage, cross-site replication, and quarterly DR testing. When disaster strikes, your critical systems are back online in minutes — not days.",
      imageSrc: "https://images.unsplash.com/photo-1606778303062-80ba2dbccf08?auto=format&fit=crop&w=800&q=85",
      tag: "Resilience",
    },
    {
      title: "IT Procurement & Vendor Management",
      desc: "We negotiate hardware, software, and telco contracts on your behalf — leveraging our aggregate purchasing power across 200+ clients to secure pricing most enterprises can't get on their own.",
      imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=85",
      tag: "Procurement",
    },
  ],

  // ═══ HOW IT WORKS / PROCESS ═══
  process: {
    sectionLabel: "OUR METHODOLOGY",
    headline: "From Onboarding to Autonomous Operations in Four Phases",
    steps: [
      {
        number: "01",
        title: "Environment Discovery & Onboarding",
        desc: "We deploy our monitoring agents across your infrastructure and run a complete audit — every device, application, and dependency mapped. You get a 360-degree baseline report within 72 hours of kickoff.",
        imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
      },
      {
        number: "02",
        title: "Baseline & Alerting Configuration",
        desc: "We establish performance baselines, configure monitoring thresholds, and build your alerting playbook. Every alert has a documented response procedure — no alert fatigue, no false positives.",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      },
      {
        number: "03",
        title: "Steady-State Operations & Incident Response",
        desc: "24/7 NOC coverage begins. Our engineers resolve incidents, execute patching cycles, manage backups, and handle end-user support — all governed by SLA-backed response and resolution commitments.",
        imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=85",
      },
      {
        number: "04",
        title: "Continuous Improvement & Strategic Planning",
        desc: "Monthly performance reviews and quarterly vCIO sessions identify optimization opportunities, budget planning, and technology roadmap updates. Your IT environment gets better every quarter — guaranteed.",
        imageSrc: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=85",
      },
    ],
  },

  // ═══ DIFFERENTIATORS ═══
  differentiators: {
    sectionLabel: "WHAT SETS US APART",
    headline: "Not All Managed Services Are Created Equal",
    subline:
      "Six capabilities that separate enterprise-grade managed IT from commodity outsourced support.",
    items: [
      {
        title: "ISO 27001-Certified NOC",
        desc: "Our Network Operations Center is ISO 27001:2022 certified — not just 'aligned.' Annual third-party audits validate our security controls, access management, and incident response procedures.",
        stat: "ISO 27001",
        statLabel: "Certified NOC",
      },
      {
        title: "Named Account Team, Not Just a Ticket Queue",
        desc: "Every client gets a dedicated Technical Account Manager, a named support engineer, and a vCIO. You'll know exactly who is responsible for your environment — no anonymous help desk rotations.",
        stat: "3-Person",
        statLabel: "Core Account Team",
      },
      {
        title: "Sub-15-Minute P1 Response — Guaranteed",
        desc: "Our P1 incident response SLA is contractually guaranteed with financial penalties. Average acknowledgment time across all clients in 2025: 3.7 minutes. Average resolution: 12.4 minutes.",
        stat: "<15 min",
        statLabel: "P1 Response SLA",
      },
      {
        title: "Proactive, Not Reactive",
        desc: "Our monitoring platform catches 83% of issues before they cause user-visible impact. Automated remediation playbooks resolve common incidents without human intervention — you never even know they happened.",
        stat: "83%",
        statLabel: "Issues Caught Proactively",
      },
      {
        title: "Full-Stack Engineering Depth",
        desc: "We don't just reset passwords. Our team includes certified network engineers, cloud architects, security analysts, and database administrators — senior talent most mid-market firms can't afford to hire directly.",
        stat: "50+",
        statLabel: "Senior Engineers on Staff",
      },
      {
        title: "Quarterly Business Reviews With Your Board",
        desc: "Your vCIO doesn't just manage tickets — they present technology strategy, budget analysis, and roadmap recommendations at your quarterly board meetings. IT becomes a strategic asset, not a cost center.",
        stat: "4x/Year",
        statLabel: "Board-Level QBRs",
      },
    ],
  },

  // ═══ CASE STUDY ═══
  caseStudy: {
    label: "CASE STUDY",
    headline: "How a 900-Employee Manufacturer Eliminated Downtime and Cut IT Costs by 42%",
    industry: "Mid-Size Manufacturing Firm — 900 Employees, 3 Sites",
    challenge:
      "The internal IT team of four couldn't keep up with help desk tickets, leaving employees waiting an average of 8 hours for basic support. Server patching was months behind schedule. A 6-hour network outage in Q2 cost the company an estimated $1.2M in lost production. The CFO was ready to approve a $2.4M internal team expansion — but the CEO wanted to explore alternatives first.",
    solution:
      "We deployed a full managed services engagement: 24/7 NOC monitoring across all three sites, a dedicated help desk team with 60-second phone answer targets, automated patch management with zero-touch deployment, on-site engineering support with a 4-hour SLA, and a fractional vCIO reporting directly to the CEO. Onboarding was completed in 22 days with zero disruption to operations.",
    outcome: [
      { metric: "42%", label: "Annual IT Cost Reduction" },
      { metric: "99.97%", label: "Uptime Since Engagement" },
      { metric: "4 min", label: "Avg. Help Desk Response" },
    ],
    imageSrc: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=1200&q=85",
    testimonial: {
      quote:
        "We were about to spend $2.4M expanding our internal IT team. MU Technologies gave us a better result for 58% less — and our employees finally have the IT support experience they deserve. The vCIO quarterly reviews alone have been transformative for our technology planning.",
      name: "Marcus Chen",
      role: "Chief Operating Officer",
      company: "Apex Precision Manufacturing",
    },
  },

  // ═══ TECH STACK ═══
  techStack: [
    { name: "Microsoft 365", category: "Productivity" },
    { name: "Microsoft Azure", category: "Cloud" },
    { name: "ServiceNow", category: "ITSM" },
    { name: "ConnectWise", category: "RMM" },
    { name: "Datto", category: "Backup & DR" },
    { name: "Cisco Meraki", category: "Networking" },
    { name: "CrowdStrike", category: "Endpoint Security" },
    { name: "Microsoft Intune", category: "MDM" },
    { name: "IT Glue", category: "Documentation" },
    { name: "Zabbix", category: "Monitoring" },
    { name: "PRTG", category: "Network Monitoring" },
    { name: "Veeam", category: "Backup" },
  ],

  // ═══ WHY US ═══
  whyUs: {
    sectionLabel: "WHY MU TECHNOLOGIES",
    headline: "Enterprise IT Operations, Delivered at Mid-Market Economics",
    differentiators: [
      {
        title: "15+ Years Managing Enterprise IT",
        desc: "We've been running IT operations since 2010. Our processes are battle-tested across 200+ enterprise environments — from 50-seat professional services firms to 5,000-seat manufacturing floors.",
        stat: "200+",
        statLabel: "Enterprise Clients",
      },
      {
        title: "Fixed-Fee, SLA-Backed Pricing",
        desc: "No surprise invoices. No after-hours billing. No emergency call-out fees. Every engagement has defined SLAs with financial penalties for missed targets — accountability is built into the contract.",
        stat: "100%",
        statLabel: "SLA Compliance Rate",
      },
      {
        title: "Security-First Operations",
        desc: "ISO 27001-certified NOC. SOC 2 Type II audited. Every engineer holds at least one active security certification (CISSP, Security+, CEH). Security posture management is standard — not an add-on SKU.",
        stat: "ISO/SOC 2",
        statLabel: "Dual Certified",
      },
      {
        title: "One Partner, One Invoice, Zero Finger-Pointing",
        desc: "Help desk, NOC, field services, procurement, vCIO, and security — all from one provider. When an issue spans networking, servers, and end-user support, there's one team accountable for resolving it.",
        stat: "1",
        statLabel: "Accountability Point",
      },
    ],
  },

  // ═══ TESTIMONIAL ═══
  testimonial: {
    quote:
      "Before MU Technologies, our IT was a fire drill every other week. Now I get a monthly executive summary and a quarterly roadmap presentation for my board. Our help desk satisfaction scores went from 2.3 to 4.8 out of 5 in six months. The team's responsiveness is remarkable.",
    name: "Dr. Rebecca Torres",
    role: "Chief Financial Officer",
    company: "Meridian Health Partners",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=85",
  },

  // ═══ FAQ ═══
  faqs: [
    {
      q: "What exactly is included in your Managed IT Services?",
      a: "Our engagement includes 24/7 NOC monitoring, unlimited help desk support (phone, email, chat, portal), patch management, endpoint security, backup and disaster recovery, IT asset lifecycle management, on-site engineering with a 4-hour SLA, vendor management and procurement, and a fractional vCIO who delivers quarterly business reviews. Every engagement is scoped to your environment — you only pay for what you need.",
    },
    {
      q: "How quickly do you respond to critical issues?",
      a: "Our P1 incident response SLA is under 15 minutes, with an average acknowledgment time of 3.7 minutes across all clients in 2025. For P2 incidents, response is under 1 hour. Help desk calls are answered by a live engineer — not a phone tree — in under 60 seconds on average. These metrics are contractually guaranteed with financial penalties for missed targets.",
    },
    {
      q: "We already have an internal IT person. Can you supplement rather than replace them?",
      a: "Absolutely — that's one of our most common engagement models. We handle NOC monitoring, help desk overflow, patching, security, and backup management so your internal IT staff can focus on strategic projects, business applications, and user experience. Your existing team stays in place; we become their force multiplier. Many clients retain a small internal IT leadership function while we run day-to-day operations.",
    },
    {
      q: "How do you handle on-site support across multiple locations?",
      a: "We maintain a network of field engineers across 15 major metropolitan areas, with a standard 4-hour on-site SLA for hardware replacement and hands-on troubleshooting. For offices outside our metro coverage zones, we partner with certified local technicians under our quality management framework. Every field visit is tracked, documented, and reviewed by your account team.",
    },
    {
      q: "What does the vCIO service actually deliver?",
      a: "Your dedicated virtual CIO delivers: monthly technology operations reports with KPIs, quarterly business reviews presented to leadership, annual IT budget planning and forecasting, technology roadmap development aligned to business goals, vendor contract negotiation and management, compliance gap analysis, and strategic advisory on digital transformation initiatives. It's a genuine C-suite technology partner — not a glorified account manager.",
    },
    {
      q: "Can you support our remote and hybrid workforce?",
      a: "Yes — this is core to our modern managed services model. We deploy and manage endpoint security, device management (MDM), VPN and Zero Trust Network Access, cloud productivity suites (Microsoft 365, Google Workspace), and secure remote access. Our help desk supports users wherever they work — office, home, or on the road. Every endpoint is monitored, patched, and secured regardless of location.",
    },
    {
      q: "What's the onboarding process and how long does it take?",
      a: "Onboarding typically takes 2-4 weeks depending on environment complexity. Phase 1 (Week 1): agent deployment, network discovery, asset inventory. Phase 2 (Week 2): baseline performance metrics, alerting configuration, documentation build-out. Phase 3 (Weeks 3-4): parallel run — we monitor and respond alongside your existing team, validating processes and tuning alert thresholds. By the end of Week 4, we're fully operational with no gaps in coverage.",
    },
  ],

  // ═══ CTA FOOTER ═══
  ctaFooter: {
    headline: "Your IT Operations Should Run Like a Utility — Always On, Always Reliable",
    subline:
      "Book a free 30-minute consultation with a Senior Solutions Architect. We'll assess your current IT operations, identify cost savings, and give you a clear picture of what managed services would look like in your environment. No pitch. Just engineering.",
    primaryButton: "Book a Free Operations Assessment",
    primaryHref: "/contact?service=managed",
    secondaryButton: "Download NOC Service Catalog",
    secondaryHref: "/resources/managed-services-catalog",
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
  },
};
