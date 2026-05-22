// ── Networking & Telecommunications — Page Data ──
// All content: no lorem ipsum, no placeholders.
// Images: Unsplash URLs per pattern.

export const networkingTelecomData = {
  // ═══ HERO ═══
  hero: {
    headline: "Enterprise Networks That Never Drop a Packet — or a Call",
    subline:
      "From SD-WAN to unified communications — we architect, deploy, and manage the connectivity fabric that keeps your business running at wire speed.",
    imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1920&q=85",
    imageAlt: "Enterprise network infrastructure with fiber optic connections",
    badge: "NETWORKING & TELECOMMUNICATIONS",
    cta: {
      primary: "Book a Free Network Assessment",
      primaryHref: "/contact?service=networking-telecom",
      secondary: "Download Network Architecture Guide",
      secondaryHref: "/resources/network-guide",
    },
    socialProof: "10,000+ Miles of Fiber Deployed",
  },

  // ═══ TRUST BAR / STATS ═══
  stats: [
    { value: "10", suffix: "Gbps+", label: "Throughput Delivered" },
    { value: "5", suffix: "ms", label: "Edge Latency" },
    { value: "99.999", suffix: "%", label: "Network Uptime SLA" },
    { value: "500", suffix: "+", label: "Sites Connected" },
  ],

  // ═══ OVERVIEW + PROBLEM ═══
  overview: {
    sectionLabel: "THE CHALLENGE",
    headline: "Your Network Is the Nervous System of Your Business — It Shouldn't Be a Bottleneck",
    subline:
      "Three networking and telecom challenges that cost enterprises millions in lost productivity — and how we engineer around each one.",
    rows: [
      {
        imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Enterprise data center network corridor",
        heading: "What Is Enterprise Networking & Telecommunications?",
        body: "Enterprise networking and telecommunications encompass the full connectivity stack: WAN and LAN infrastructure, SD-WAN orchestration, fiber and broadband circuits, unified communications (VoIP, video conferencing, contact center), wireless networks, and network security. We design, procure, deploy, and manage this entire fabric — so your people, applications, and customers are always connected at wire speed.",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Fiber optic cables with light transmission",
        heading: "Why Does Network Performance Matter Now?",
        body: "Hybrid work, cloud migration, and real-time collaboration have made the network the single most critical infrastructure layer. One hour of WAN downtime costs enterprises an average of $300,000 in lost revenue and productivity. Sub-5ms latency is now table stakes for financial trading, telemedicine, and industrial IoT. Legacy MPLS circuits and consumer-grade broadband can't keep up — and they're bleeding your budget dry.",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Modern office with wireless connectivity",
        heading: "What Sets Enterprise-Grade Networking Apart?",
        body: "The difference is architectural intent. Consumer-grade networks react to failure; enterprise networks prevent it. We design redundant topologies with automated failover, QoS policies that prioritize voice and video, zero-trust network access for every endpoint, and centralized orchestration that gives you a single pane of glass across every site, circuit, and carrier.",
      },
    ],
    painPoints: [
      {
        title: "Legacy MPLS Circuits Costing a Fortune While Limiting Cloud Access",
        desc: "MPLS was designed for hub-and-spoke traffic patterns when applications lived in your data center. Today's cloud-first, SaaS-heavy workloads get backhauled through a single bottleneck — adding latency and burning budget. Our SD-WAN architectures save 40-60% over MPLS while improving cloud application performance by 3x.",
        imageSrc: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?auto=format&fit=crop&w=800&q=85",
      },
      {
        title: "Unified Communications That Fragment Instead of Unify",
        desc: "Disconnected VoIP, video conferencing, chat, and contact center platforms create communication silos — not a unified experience. Call quality suffers on under-provisioned networks. We deploy carrier-grade UC platforms with QoS-engineered networks that guarantee MOS scores above 4.2 on every call.",
        imageSrc: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=85",
      },
      {
        title: "Wireless Networks That Collapse Under Density",
        desc: "Open-plan offices, warehouses, and campuses with hundreds of concurrent devices overwhelm consumer-grade APs. Dead zones, roaming drops, and RF interference frustrate users and cripple productivity. Our Wi-Fi 6E/7 designs handle 1,000+ simultaneous clients per floor with seamless roaming and per-application QoS.",
        imageSrc: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=85",
      },
    ],
  },

  // ═══ SERVICES GRID (8 sub-services) ═══
  services: [
    {
      title: "SD-WAN Architecture & Deployment",
      desc: "Application-aware routing across MPLS, broadband, 5G, and satellite links — with centralized orchestration, zero-touch provisioning, and automated failover that converges in under 100ms.",
      imageSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=85",
      tag: "SD-WAN",
    },
    {
      title: "LAN & Campus Switching Infrastructure",
      desc: "Multi-gigabit access layer switching with 25/100G backbone. Stackable, redundant, and managed from a single console — designed for zero-downtime maintenance and wire-speed throughput.",
      imageSrc: "https://images.unsplash.com/photo-1603732551681-2e91159b9dc2?auto=format&fit=crop&w=800&q=85",
      tag: "LAN",
    },
    {
      title: "Wi-Fi 6E/7 Enterprise Wireless",
      desc: "High-density wireless design with AI-driven RF optimization, seamless roaming, WPA3-Enterprise security, and per-SSID QoS policies. Designed for 1,000+ concurrent clients without degradation.",
      imageSrc: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=85",
      tag: "Wireless",
    },
    {
      title: "Unified Communications & VoIP",
      desc: "Carrier-grade voice, video, messaging, and contact center on a single platform. QoS-engineered networks guarantee crystal-clear calls with MOS scores above 4.2 — every conversation, every time.",
      imageSrc: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=85",
      tag: "UC/VoIP",
    },
    {
      title: "Fiber & Broadband Circuit Procurement",
      desc: "We negotiate DIA, wavelength, and broadband circuits across 200+ carriers — leveraging aggregate buying power to deliver enterprise-grade connectivity at 30-50% below market rates.",
      imageSrc: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=85",
      tag: "Circuits",
    },
    {
      title: "Network Security & Zero-Trust Access",
      desc: "Next-gen firewalls, network segmentation, 802.1X, NAC, and zero-trust network access integrated directly into the fabric — not bolted on as an afterthought. Every port, every packet, authenticated.",
      imageSrc: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=85",
      tag: "Security",
    },
    {
      title: "5G & Edge Connectivity Solutions",
      desc: "Private 5G networks for campuses, warehouses, and manufacturing floors. Ultra-low latency, massive device density, and complete spectrum control — without touching a public carrier network.",
      imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
      tag: "5G/Edge",
    },
    {
      title: "Network Operations & 24/7 Monitoring",
      desc: "Proactive monitoring of every switch, router, AP, and circuit from our ISO 27001-certified NOC. SNMP, NetFlow, and synthetic testing catch degradation before users notice — and we fix it before they call.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      tag: "NOC",
    },
  ],

  // ═══ HOW IT WORKS / PROCESS ═══
  process: {
    sectionLabel: "OUR METHODOLOGY",
    headline: "From Site Survey to Autonomous Network Operations in Four Phases",
    steps: [
      {
        number: "01",
        title: "Discovery & Site Survey",
        desc: "We audit every circuit, device, and carrier contract across all your sites. RF spectrum analysis, throughput benchmarking, and latency profiling create a complete baseline — gaps and opportunities are quantified with dollar figures.",
        imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
      },
      {
        number: "02",
        title: "Architecture & Design",
        desc: "Our network architects design the target topology — WAN, LAN, wireless, and UC — with detailed BOMs, carrier recommendations, migration sequencing, and a TCO model showing your 3-year savings versus the status quo.",
        imageSrc: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=800&q=85",
      },
      {
        number: "03",
        title: "Deployment & Cutover",
        desc: "Phased rollout with parallel runs — new circuits and equipment are deployed, tested, and validated before old infrastructure is decommissioned. Zero-downtime cutover procedures are rehearsed and executed during approved maintenance windows.",
        imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
      },
      {
        number: "04",
        title: "Operate & Continuously Optimize",
        desc: "24/7 NOC monitoring with automated incident response. Monthly performance reviews track throughput, latency, jitter, and MOS scores. Quarterly business reviews present optimization recommendations with quantified ROI.",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=85",
      },
    ],
  },

  // ═══ DIFFERENTIATORS ═══
  differentiators: {
    sectionLabel: "WHAT SETS US APART",
    headline: "Not All Networks Are Engineered Equal",
    subline:
      "Six capabilities that separate carrier-grade networking from commodity connectivity.",
    items: [
      {
        title: "Carrier-Agnostic Architecture",
        desc: "We don't resell circuits — we design around your needs and negotiate across 200+ carriers to get the best SLA at the best price. No carrier lock-in, no markup on bandwidth.",
        stat: "200+",
        statLabel: "Carrier Partners",
      },
      {
        title: "Sub-100ms WAN Failover",
        desc: "Our SD-WAN designs converge in under 100 milliseconds during circuit failure — voice calls and video conferences stay connected. Users don't notice. Business doesn't stop.",
        stat: "<100ms",
        statLabel: "Failover Convergence",
      },
      {
        title: "MOS Scores Above 4.2, Guaranteed",
        desc: "Mean Opinion Score is the gold standard for voice quality. Our QoS-engineered networks guarantee MOS scores of 4.2+ on every call — contractually, with financial penalties for underperformance.",
        stat: "4.2+",
        statLabel: "MOS Score Guarantee",
      },
      {
        title: "RF-Engineered Wireless Design",
        desc: "We don't guess where APs go — we perform professional RF site surveys with Ekahau spectrum analyzers, modeling coverage, capacity, and interference before a single AP is mounted.",
        stat: "Ekahau",
        statLabel: "RF Survey Technology",
      },
      {
        title: "Zero-Downtime Maintenance Windows",
        desc: "Dual-homed architectures, redundant supervisors, and ISSU (In-Service Software Upgrade) capabilities mean firmware updates and hardware replacements happen during business hours — not at 2 AM.",
        stat: "Zero",
        statLabel: "Downtime Maintenance",
      },
      {
        title: "One Contract, Every Carrier, One Throat to Choke",
        desc: "We manage every carrier relationship — ordering, escalation, SLA enforcement, and invoice reconciliation. When a circuit goes down at 3 AM, you call us. We call them. You go back to sleep.",
        stat: "1",
        statLabel: "Accountability Point",
      },
    ],
  },

  // ═══ CASE STUDY ═══
  caseStudy: {
    label: "CASE STUDY",
    headline: "How a 2,500-Employee Logistics Firm Cut WAN Costs by 62% While Quadrupling Throughput",
    industry: "National Logistics & Supply Chain — 2,500 Employees, 47 Sites",
    challenge:
      "A patchwork of MPLS circuits, consumer-grade broadband, and aging Cisco switches connected 47 warehouses and offices. WAN outages averaged 14 hours per month. Video conferencing was unusable between the two main offices. The annual carrier bill hit $1.8M — and performance was getting worse. A planned acquisition would add 12 more sites in 6 months with no integration plan.",
    solution:
      "Designed and deployed a full SD-WAN fabric across all 47 sites using broadband + DIA underlay with LTE/5G cellular failover. Replaced 300+ aging switches with stackable multi-gigabit platforms. Deployed Wi-Fi 6 across 12 warehouse floors with handheld scanner optimization. Migrated voice to a cloud UC platform with QoS policies engineered per circuit. Completed the 12-site acquisition integration in 19 days — before the acquisition even closed legally.",
    outcome: [
      { metric: "62%", label: "WAN Cost Reduction" },
      { metric: "4x", label: "Throughput Increase" },
      { metric: "99.999%", label: "Uptime Since Cutover" },
    ],
    imageSrc: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=1200&q=85",
    testimonial: {
      quote:
        "We went from 14 hours of WAN downtime a month to zero — for 14 months and counting. MU Technologies didn't just save us $1.1M a year on carrier costs. They made our network a competitive advantage. The acquisition integration that was supposed to take 6 months was done in 19 days.",
      name: "David Okonkwo",
      role: "VP of Infrastructure & Operations",
      company: "Apex Logistics Group",
    },
  },

  // ═══ TECH STACK ═══
  techStack: [
    { name: "Cisco Catalyst", category: "Switching" },
    { name: "Cisco Meraki", category: "SD-WAN/Cloud" },
    { name: "Aruba Networks", category: "Wireless" },
    { name: "Juniper Mist", category: "AI Ops" },
    { name: "Fortinet FortiGate", category: "Firewall" },
    { name: "Palo Alto NGFW", category: "Security" },
    { name: "Microsoft Teams", category: "UC Platform" },
    { name: "Zoom Phone", category: "VoIP" },
    { name: "RingCentral", category: "UCaaS" },
    { name: "SolarWinds NPM", category: "Monitoring" },
    { name: "PRTG", category: "Network Monitoring" },
    { name: "Ekahau", category: "RF Survey" },
  ],

  // ═══ WHY US ═══
  whyUs: {
    sectionLabel: "WHY MU TECHNOLOGIES",
    headline: "Networks Engineered for the Speed Your Business Demands",
    differentiators: [
      {
        title: "15+ Years Architecting Enterprise Networks",
        desc: "We've designed networks for financial trading floors, hospital systems, logistics hubs, and government agencies — environments where a single dropped packet can cost millions.",
        stat: "15+",
        statLabel: "Years Experience",
      },
      {
        title: "Carrier-Agnostic, Client-First Procurement",
        desc: "We save clients 30-50% on circuit costs by running competitive bids across our 200+ carrier relationships. We don't take commissions or kickbacks — the savings flow directly to you.",
        stat: "30-50%",
        statLabel: "Circuit Cost Savings",
      },
      {
        title: "Certified Across Every Major Vendor",
        desc: "Our engineering team holds active CCIE, JNCIE, CWNE, and NSE certifications. We design and deploy Cisco, Aruba, Juniper, Fortinet, and Palo Alto networks at the architect level.",
        stat: "CCIE/JNCIE",
        statLabel: "Engineer Certifications",
      },
      {
        title: "Network + Security, Designed Together",
        desc: "Unlike firms that bolt security onto a network design, we engineer network segmentation, 802.1X, NAC, and zero-trust access as integral components of the fabric from day one.",
        stat: "Integrated",
        statLabel: "NetSec Approach",
      },
    ],
  },

  // ═══ TESTIMONIAL ═══
  testimonial: {
    quote:
      "MU Technologies transformed our network from a weekly fire drill into something we don't think about — because it just works. Our WAN costs dropped 55% and our video conferencing quality went from embarrassing to excellent. The team's depth of networking knowledge is the best I've worked with in 20 years in IT.",
    name: "Sarah Lindqvist",
    role: "Chief Technology Officer",
    company: "Nordic Health Systems",
    imageSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=85",
  },

  // ═══ FAQ ═══
  faqs: [
    {
      q: "What's the difference between SD-WAN and MPLS, and which one do we need?",
      a: "MPLS is a private, carrier-managed network with guaranteed performance but high cost and limited cloud access. SD-WAN is an overlay technology that routes traffic intelligently across multiple underlay circuits (MPLS, broadband, 5G, satellite) based on application requirements. Most enterprises benefit from a hybrid approach: SD-WAN with DIA (Dedicated Internet Access) for cloud/SaaS traffic and a smaller MPLS footprint for latency-sensitive legacy apps. We'll recommend the right mix based on your application profile, site count, and budget — not on carrier commissions.",
    },
    {
      q: "How do you ensure voice and video quality across the network?",
      a: "We implement end-to-end QoS policies that classify, mark, and prioritize real-time traffic at every hop — from the access switch to the WAN edge. VoIP and video get strict-priority queuing with guaranteed bandwidth reservations. We deploy synthetic call testing (Microsoft Teams Call Quality Dashboard or equivalent) that continuously measures MOS scores, jitter, and packet loss. Our SLA guarantees MOS scores above 4.2 — contractually, with financial penalties if we miss the mark.",
    },
    {
      q: "What happens when a circuit goes down?",
      a: "Our SD-WAN architectures detect circuit degradation or failure in under 100ms and automatically reroute traffic to healthy links — without dropping active VoIP calls or video conferences. For single-circuit sites, we deploy LTE/5G cellular backup with automatic failover. Every failover event is logged, analyzed, and reviewed in your monthly operations report. Our Carrier Management team handles the ISP escalation so your team never has to sit on hold with a telco help desk.",
    },
    {
      q: "Can you work with our existing network equipment?",
      a: "Yes — we assess your current hardware against your performance requirements and business roadmap. Equipment with remaining lifecycle and sufficient capability is integrated into the new architecture. End-of-life, end-of-support, or underpowered gear is flagged for replacement with a phased migration plan that aligns with your budget cycle. We never recommend rip-and-replace unless the existing hardware is genuinely a constraint on your business.",
    },
    {
      q: "How do you handle networks across multiple countries and carriers?",
      a: "We operate across 15+ countries with a partner network of in-region engineers and carrier relationships in every major market. Our SD-WAN orchestration platform provides a single pane of glass across all sites, all carriers, and all countries — with unified policy management. Regional compliance (GDPR, data sovereignty, local telecom regulations) is engineered into the design from the start. One dashboard. One team. Global coverage.",
    },
    {
      q: "What does a network assessment involve and how long does it take?",
      a: "A full network assessment takes 2-3 weeks and includes: discovery of all network devices, circuits, and carrier contracts; throughput and latency benchmarking across every WAN link; RF spectrum analysis at every site; configuration audit against best-practice security baselines; and a detailed findings report with prioritized recommendations and 3-year TCO projections. The assessment is free and comes with no obligation — we're confident in what we'll find and what we can improve.",
    },
    {
      q: "Do you provide the hardware, or do we buy it separately?",
      a: "Both models work. Most clients prefer Hardware-as-a-Service (HaaS) bundled into their monthly managed services fee — we procure, deploy, manage, and refresh the equipment, and you pay a predictable monthly cost with no upfront CAPEX. Alternatively, you can purchase hardware directly and we'll deploy and manage it. We're flexible — whatever fits your procurement policies and budget model.",
    },
  ],

  // ═══ CTA FOOTER ═══
  ctaFooter: {
    headline: "Your Network Should Be Your Competitive Advantage — Not Your Biggest Risk",
    subline:
      "Book a free 30-minute consultation with a Senior Network Architect. We'll assess your current WAN, LAN, and communications infrastructure, identify cost savings, and give you a clear modernization roadmap. No pitch. Just engineering.",
    primaryButton: "Book a Free Network Assessment",
    primaryHref: "/contact?service=networking-telecom",
    secondaryButton: "Download Network Architecture Guide",
    secondaryHref: "/resources/network-guide",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
  },
};
