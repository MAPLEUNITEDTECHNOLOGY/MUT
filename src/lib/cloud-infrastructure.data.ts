// ── Cloud Infrastructure & Strategic Economics — Page Data ──
// All content: no lorem ipsum, no placeholders.
// Images: local assets in /public/images/services/cloud/

const CLOUD_IMG = '/images/services/cloud';

export const cloudInfrastructureData = {
  // ═══ HERO ═══
  hero: {
    headline: "Enterprise Cloud Infrastructure Built for Scale, Speed & Security",
    subline:
      "From migration to optimization — we architect cloud environments that outperform, outscale, and outlast the competition.",
    imageSrc: `${CLOUD_IMG}/hero_bg_cloud.png`,
    imageAlt: "Enterprise data center with blue server rack lighting",
    badge: "CLOUD INFRASTRUCTURE & STRATEGIC ECONOMICS",
    cta: {
      primary: "Book a Free Cloud Assessment",
      primaryHref: "/contact?service=cloud",
      secondary: "Download Cloud Migration Checklist",
      secondaryHref: "/resources/cloud-checklist",
    },
    socialProof: "500+ Enterprise Migrations Delivered",
  },

  // ═══ TRUST BAR / STATS ═══
  stats: [
    { value: "60", suffix: "%", label: "Avg Cost Reduction" },
    { value: "99.99", suffix: "%", label: "Uptime SLA" },
    { value: "3", suffix: "x", label: "Faster Deployment" },
    { value: "500", suffix: "+", label: "Migrations Delivered" },
  ],

  // ═══ PAIN POINTS / PROBLEM ═══
  painPoints: {
    sectionLabel: "THE CHALLENGE",
    headline: "What's Holding Your Infrastructure Back?",
    subline:
      "Three recurring problems that cost enterprises millions — and how we eliminate each one at the root.",
    points: [
      {
        title: "Unpredictable Cloud Bills Eating Into Your Margins",
        desc: "The spinning meter effect. Idle resources, over-provisioned VMs, and untracked shadow IT drain budgets without delivering proportional value. Our FinOps governance framework gives every dollar a job description — and a performance review.",
        icon: "DollarSign",
      },
      {
        title: "Legacy Infrastructure Slowing Down Your Deployment Cycles",
        desc: "When it takes two weeks to provision a server, your competitors ship features while you're still filling out change request forms. We collapse deployment lead times from weeks to minutes with infrastructure-as-code and automated delivery pipelines.",
        icon: "Server",
      },
      {
        title: "Security Gaps Leaving Your Data Exposed Across Environments",
        desc: "Multi-cloud sprawl creates blind spots. Misconfigurations, inconsistent policies, and orphaned resources become breach vectors. We implement unified security governance with continuous compliance monitoring — across every account, region, and provider.",
        icon: "ShieldAlert",
      },
    ],
  },

  // ═══ SERVICES GRID (8 sub-services) ═══
  services: [
    {
      title: "Cloud Strategy & Blueprinting",
      desc: "Architectural roadmaps aligned to your business goals — not vendor quotas. We assess workloads, model TCO, and design the right multi-cloud topology before a single VM is provisioned.",
      imageSrc: `${CLOUD_IMG}/card_strategy_blueprint.png`,
      tag: "Architecture",
    },
    {
      title: "Seamless Cloud Migration and Workload Deployment",
      desc: "Lift-and-shift, re-platform, or full refactor — our migration factory moves workloads without downtime using automated cutover orchestration and real-time data validation.",
      imageSrc: `${CLOUD_IMG}/card_cloud_migration.png`,
      tag: "Migration",
    },
    {
      title: "Managed Cloud Operations and 24/7 Support",
      desc: "Round-the-clock monitoring, incident response, patch management, and performance tuning from our ISO 27001-certified NOC. We run your cloud so your team can run the business.",
      imageSrc: `${CLOUD_IMG}/card_cloud_operations.png`,
      tag: "Managed",
    },
    {
      title: "Hybrid and Multi-Cloud Orchestration",
      desc: "AWS, Azure, GCP, or on-premises — one control plane to govern them all. We unify identity, networking, and policy across every environment you operate.",
      imageSrc: `${CLOUD_IMG}/Hybrid%20%26%20Multi-Cloud%20Orchestration.png`,
      tag: "Multi-Cloud",
    },
    {
      title: "Advanced Cloud Security and Compliance Governance",
      desc: "CIS-benchmarked hardening, automated compliance scanning (SOC 2, HIPAA, PCI-DSS, GDPR), and continuous threat detection baked into your cloud operating model.",
      imageSrc: `${CLOUD_IMG}/Cloud%20Security%20%26%20Compliance.png`,
      tag: "Security",
    },
    {
      title: "Backup, Disaster Recovery, and Business Continuity",
      desc: "Cross-region replication, immutable backups, and automated failover runbooks that restore critical workloads in minutes — tested quarterly, not just documented.",
      imageSrc: `${CLOUD_IMG}/Backup%20%26%20Disaster%20Recovery.png`,
      tag: "Resilience",
    },
    {
      title: "DevOps Automation and Infrastructure as Code (IaC)",
      desc: "Terraform, Pulumi, and Ansible-driven provisioning with CI/CD pipelines that deploy infrastructure changes through the same gates as application code. No snowflakes, no drift.",
      imageSrc: `${CLOUD_IMG}/DevOps%20%26%20IaC%20Automation.png`,
      tag: "DevOps",
    },
    {
      title: "Cloud Modernization and Legacy System Upgrades",
      desc: "Decompose monoliths into microservices, containerize with Kubernetes, and migrate databases to cloud-native engines — all while the existing system stays online.",
      imageSrc: `${CLOUD_IMG}/Cloud%20Modernization.png`,
      tag: "Modernize",
    },
  ],

  // ═══ HOW IT WORKS / PROCESS ═══
  process: {
    sectionLabel: "OUR METHODOLOGY",
    headline: "From Assessment to Autonomous Operations in Four Phases",
    steps: [
      {
        number: "01",
        title: "Discovery & Baseline",
        desc: "We audit your current infrastructure spend, performance metrics, and security posture. You get a 360-degree assessment with concrete recommendations — not a generic report.",
        imageSrc: `${CLOUD_IMG}/card_strategy_blueprint.png`,
      },
      {
        number: "02",
        title: "Architecture & Design",
        desc: "Our solution architects design the target-state topology — network, compute, storage, identity, and security — with detailed TCO projections and migration sequencing.",
        imageSrc: `${CLOUD_IMG}/card_cloud_migration.png`,
      },
      {
        number: "03",
        title: "Migration & Implementation",
        desc: "Automated workload migration with zero-data-loss guarantees. We execute in waves, validating each phase before proceeding — your business never feels the transition.",
        imageSrc: `${CLOUD_IMG}/card_cloud_operations.png`,
      },
      {
        number: "04",
        title: "Operate & Optimize",
        desc: "24/7 managed operations with continuous cost optimization, performance right-sizing, and security hardening. Every quarter we present savings realized and improvements made.",
        imageSrc: `${CLOUD_IMG}/Cloud%20Modernization.png`,
      },
    ],
  },

  // ═══ CASE STUDY ═══
  caseStudy: {
    label: "CASE STUDY",
    headline: "From 14-Hour Deployments to Continuous Delivery: A Cloud Transformation Story",
    industry: "Mid-Size Financial Services Firm — 1,200 Employees",
    challenge:
      "Legacy on-premises infrastructure caused 14-hour deployment cycles and a $2.1M annual infrastructure overrun. The DevOps team spent 60% of each sprint on environment provisioning instead of building features. Compliance audits took weeks due to fragmented logging and manual evidence collection.",
    solution:
      "Designed and executed a full AWS migration using blue-green deployment patterns with zero production downtime. Implemented infrastructure-as-code with Terraform, automated CI/CD pipelines with GitHub Actions, and a centralized compliance dashboard that maps every resource to its SOC 2 control. Migrated 47 workloads across 3 phased waves over 10 weeks.",
    outcome: [
      { metric: "87%", label: "Reduction in Deployment Time" },
      { metric: "$1.4M", label: "Annual Infrastructure Savings" },
      { metric: "99.99%", label: "Uptime Since Migration" },
    ],
    imageSrc: `${CLOUD_IMG}/Case%20Study%20Background.png`,
    testimonial: {
      quote:
        "MU Technologies didn't just migrate our workloads — they transformed how our engineering team operates. We went from 14-hour deployment windows to pushing code in under 10 minutes. The compliance dashboard alone saves us 40 hours every audit cycle.",
      name: "Priya Venkatesh",
      role: "VP of Engineering",
      company: "Apex Financial Services",
    },
  },

  // ═══ TECH STACK ═══
  techStack: [
    { name: "Amazon Web Services", category: "Public Cloud" },
    { name: "Microsoft Azure", category: "Public Cloud" },
    { name: "Google Cloud Platform", category: "Public Cloud" },
    { name: "Kubernetes", category: "Orchestration" },
    { name: "Terraform", category: "IaC" },
    { name: "Docker", category: "Containers" },
    { name: "Ansible", category: "Automation" },
    { name: "Prometheus", category: "Monitoring" },
    { name: "Grafana", category: "Observability" },
    { name: "GitHub Actions", category: "CI/CD" },
    { name: "Pulumi", category: "IaC" },
    { name: "Vault", category: "Secrets Management" },
  ],

  // ═══ WHY US ═══
  whyUs: {
    sectionLabel: "WHY MU TECHNOLOGIES",
    headline: "Cloud Engineering That Goes Beyond the Console",
    differentiators: [
      {
        title: "Vendor-Agnostic Architecture",
        desc: "We design for your business outcome, not AWS credits. Our multi-cloud approach prevents lock-in and optimizes cost across providers.",
        stat: "3-Cloud",
        statLabel: "Average Deployment",
      },
      {
        title: "FinOps-First Economics",
        desc: "Every architecture decision starts with a cost model. Our FinOps practice has recovered an average of $2.4M in wasted cloud spend per enterprise client.",
        stat: "$2.4M",
        statLabel: "Avg. Waste Recovered",
      },
      {
        title: "Security Baked In, Not Bolted On",
        desc: "CIS-hardened baseline images, automated compliance dashboards, and continuous threat detection are standard — not add-ons — in every engagement.",
        stat: "100%",
        statLabel: "Compliance Audit Pass Rate",
      },
      {
        title: "24/7 NOC With Actual Humans",
        desc: "Our ISO 27001-certified Network Operations Center is staffed by senior engineers — not chatbots. Average incident acknowledgment: under 4 minutes.",
        stat: "<4 min",
        statLabel: "Incident Acknowledgment",
      },
    ],
  },

  // ═══ TESTIMONIAL ═══
  testimonial: {
    quote:
      "The FinOps visibility alone paid for the engagement within six months. We went from guessing about our cloud spend to managing it with surgical precision. Our CFO now quotes their monthly reports in board meetings.",
    name: "Dr. Sarah Okafor",
    role: "Chief Information Officer",
    company: "MedFirst Health Network",
    imageSrc: "/images/cio-headshot.png",
  },

  // ═══ FAQ ═══
  faqs: [
    {
      q: "Is the cloud secure for storing sensitive patient and medical data?",
      a: "Absolutely. We architect environments that meet HIPAA, GDPR, and SOC 2 compliance requirements — with encryption at rest and in transit, role-based access controls, immutable audit logging, and automated compliance scanning. Our healthcare clients routinely pass HITRUST and FDA audits on cloud-hosted infrastructure we manage.",
    },
    {
      q: "Will moving to the cloud increase my monthly IT budget?",
      a: "In the short term, there may be a transitional overlap — but our FinOps practice targets 30-60% total cost reduction within the first 12 months. We eliminate idle resources, right-size every workload, implement reserved-instance strategies, and install cost anomaly detection. Most clients see net savings by month four.",
    },
    {
      q: "Can we still use our existing local software while moving some services to the cloud?",
      a: "Yes — that's the definition of hybrid cloud. We design architectures where on-premises applications and cloud services coexist seamlessly, connected through secure SD-WAN or ExpressRoute links. You migrate at your pace, workload by workload, with no forced rip-and-replace.",
    },
    {
      q: "How long does a typical migration take?",
      a: "It depends on complexity and volume. A small-to-mid-sized business with 5-10 workloads typically completes migration in 4-8 weeks. Enterprise-scale migrations with hundreds of workloads are phased over 3-6 months. Either way, we provide a detailed timeline during the Discovery phase — and we've never missed a go-live date.",
    },
    {
      q: "What happens if our local internet goes down?",
      a: "We design for this scenario from day one. Depending on your architecture, we implement SD-WAN with automatic LTE/5G failover, local caching servers for critical applications, or full offline-capable edge computing. For the most critical workloads, we deploy a local resilience node that keeps operations running during WAN outages and syncs back when connectivity is restored.",
    },
  ],

  // ═══ CTA FOOTER ═══
  ctaFooter: {
    headline: "Your Cloud Journey Starts With a Conversation",
    subline:
      "Book a free 30-minute session with a Senior Cloud Architect. No pitch. No slide deck. Just an honest assessment of your current infrastructure and a clear path forward.",
    primaryButton: "Book a Free Cloud Assessment",
    primaryHref: "/contact?service=cloud",
    secondaryButton: "Download Cloud Migration Checklist",
    secondaryHref: "/resources/cloud-checklist",
    imageSrc: `${CLOUD_IMG}/Team%20%20CTA%20Background.png`,
  },

  // ═══ IMAGE MANIFEST (all local assets used on this page) ═══
  imageManifest: [
    { src: `${CLOUD_IMG}/hero_bg_cloud.png`, usage: "Hero background", size: "963 KB" },
    { src: `${CLOUD_IMG}/problem_bg_cloud.png`, usage: "Pain Points section background", size: "834 KB" },
    { src: `${CLOUD_IMG}/card_strategy_blueprint.png`, usage: "Services grid — Cloud Strategy & Blueprinting", size: "799 KB" },
    { src: `${CLOUD_IMG}/card_cloud_migration.png`, usage: "Services grid — Migration + Process step 2", size: "939 KB" },
    { src: `${CLOUD_IMG}/card_cloud_operations.png`, usage: "Services grid — Managed Ops + Process step 3", size: "870 KB" },
    { src: `${CLOUD_IMG}/Hybrid%20%26%20Multi-Cloud%20Orchestration.png`, usage: "Services grid — Hybrid & Multi-Cloud", size: "1.8 MB" },
    { src: `${CLOUD_IMG}/Cloud%20Security%20%26%20Compliance.png`, usage: "Services grid — Cloud Security", size: "2.2 MB" },
    { src: `${CLOUD_IMG}/Backup%20%26%20Disaster%20Recovery.png`, usage: "Services grid — Backup & DR", size: "2.2 MB" },
    { src: `${CLOUD_IMG}/DevOps%20%26%20IaC%20Automation.png`, usage: "Services grid — DevOps & IaC", size: "1.9 MB" },
    { src: `${CLOUD_IMG}/Cloud%20Modernization.png`, usage: "Services grid — Modernization + Process step 4", size: "1.9 MB" },
    { src: `${CLOUD_IMG}/Case%20Study%20Background.png`, usage: "Case Study section background", size: "2.2 MB" },
    { src: `${CLOUD_IMG}/Team%20%20CTA%20Background.png`, usage: "CTA Footer background", size: "2.0 MB" },
    { src: "/images/cio-headshot.png", usage: "Testimonial portrait", size: "678 KB" },
  ],
};
