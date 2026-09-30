export const profile = {
  name: "Jenkins Uwagbai",
  role: "Software Developer",
  email: "jenkinsu@hotmail.com",
  location: "Lagos, Nigeria (UTC+1)",
  cv: "/Jenkins_Uwagbai_CV.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/jenkx60" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jenkins-uwagbai/" },
    { label: "X", href: "https://x.com/iamjenkinsb" },
    { label: "WhatsApp", href: "https://wa.me/2349131779025" },
    { label: "TikTok", href: "https://www.tiktok.com/@_jenkx_dev" },
  ],
};

export type Role = {
  company: string;
  title: string;
  period: string;
  mode: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "Reboot Codes",
    title: "Software Developer",
    period: "Mar 2026 to now",
    mode: "Remote, contract",
    current: true,
    points: [
      "Built a Discord-based job-application platform (Next.js, Node.js, PostgreSQL/Supabase) that replaced manual candidate screening and sends every applicant live status updates. Recruiter admin time is down an estimated 35 to 50%.",
      "Built a WordPress page-discovery and site-scanning tool (Go, React, Tailwind, Wails). A scan now takes about 10 minutes instead of a manual multi-step process.",
      "Set up automated unit, integration and system tests, cutting manual QA effort by an estimated 25%.",
      "Wrote internal documentation that shortens onboarding for new engineers and cuts repeat support questions.",
    ],
  },
  {
    company: "Qred Technologies",
    title: "Frontend Developer",
    period: "Mar 2026 to now",
    mode: "Remote, contract",
    current: true,
    points: [
      "Set up production deployment (domains, SSL, environments) with near-zero downtime.",
      "Added monitoring, logging and error tracking so production issues are found sooner.",
      "Improved page speed and Core Web Vitals by an estimated 35% with React, Vite and Tailwind CSS.",
      "Hardened security through secure configuration, API protection and access control.",
      "Automated manual business operations with Zoho and Supabase workflows.",
    ],
  },
  {
    company: "Coconut Africa",
    title: "Frontend Developer",
    period: "Apr 2025 to Feb 2026",
    mode: "Hybrid",
    points: [
      "Implemented the end-to-end banking flow, supporting 50 new user transactions and onboarding events.",
      "Built event-driven, API-integrated systems for real-time updates from external services.",
      "Cut page load time by an estimated 35% and turned the design system into responsive components with about 90% WCAG AA coverage.",
      "Adopted AI development tools (v0, Bolt, Cursor, Copilot), shortening feature delivery by an estimated 45%.",
    ],
  },
  {
    company: "Webxela Inc",
    title: "Frontend Developer (Intern)",
    period: "Jan to May 2025",
    mode: "Internship",
    points: [
      "Shipped interactive React, Next.js and Tailwind components to production with designers and backend developers.",
      "Improved page load performance by an estimated 80% through targeted optimization.",
    ],
  },
  {
    company: "Karengold Industries Nigeria Limited",
    title: "IT Support",
    period: "Feb 2019 to Feb 2025",
    mode: "Remote",
    points: [
      "Supported 25 staff at a 4.53/5 satisfaction rating, resolving 82% of issues independently.",
      "Provisioned 150+ user accounts and deployed 100+ Windows laptops with zero setup escalations.",
    ],
  },
];

export type Project = {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  href?: string;
  hrefLabel?: string;
  note?: string;
  image?: string;
  stages?: string[];
  badges?: string;
};

export const featured: Project[] = [
  {
    name: "Developer Toolkit",
    kind: "Chrome Extension",
    description:
      "Right-click any element on any page to copy its HTML, its computed CSS or a unique CSS selector. A small toast confirms each copy, so inspecting and reusing a component takes seconds.",
    stack: ["JavaScript", "Chrome Extensions (Manifest V3)", "Service Worker", "DOM APIs"],
    badges: "Extension",
    // note: "Built for Reboot Codes. Private, walkthrough on request.",
    stages: ["Right-click", "Pick a tool", "Copied"],
  },
  {
    name: "Discord Job Pipeline",
    kind: "Hiring automation",
    description:
      "An event-driven candidate tracker that moves applicants through each stage and messages them automatically, with an admin dashboard for the hiring team. It replaced a fully manual screening process.",
    stack: ["Next.js", "Node.js", "Discord API", "PostgreSQL", "Supabase"],
    // note: "Built for Reboot Codes. Private, walkthrough on request.",
    stages: ["Applied", "Shortlisted", "Hired"],
  },
  {
    name: "WordPress Site Scanner",
    kind: "Internal auditing tool",
    description:
      "A desktop tool that finds every page on a WordPress site and scans it, cutting page discovery time by an estimated 50%.",
    stack: ["Go", "React", "Tailwind CSS", "Wails"],
    note: "Built for Reboot Codes. Internal, screenshots on request.",
    stages: ["Page discovery", "Site scan"],
  },
  {
    name: "Coconut Africa",
    kind: "Growth platform for African retail brands",
    description:
      "Global shipping, business compliance, multi-currency banking and packaging in one product. I built the banking flow and the accessible component system.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Zustand", "TanStack Query"],
    href: "https://withcoconut.com/",
    hrefLabel: "Visit withcoconut.com",
    image: "/projects/coconut.png",
  },
  {
    name: "Rally",
    kind: "Event planning for group chats",
    description:
      "Turns a group chat into a plan: a multi-step event creation flow, attendee management and real-time payout tracking.",
    stack: ["Next.js", "TypeScript", "Zustand", "Supabase"],
    href: "https://rally-v1.netlify.app/",
    hrefLabel: "Open the live app",
    image: "/projects/rally.png",
  },
  {
    name: "Football Live Now",
    kind: "Scores and fixtures",
    description:
      "Live scores, fixtures and league updates for the major leagues, shown in the visitor's own timezone.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Supabase", "Zustand"],
    href: "https://livenow1.netlify.app/",
    hrefLabel: "Open the live app",
    image: "/projects/livenow.png",
  },
];

export const more: Project[] = [
  {
    name: "Yayyu Store",
    kind: "Shopify e-commerce app",
    description: "Browse and buy products with a Shopify-backed catalogue.",
    stack: ["Next.js", "Shopify", "Tailwind CSS"],
    href: "https://github.com/jenkx60/yayyu_product.git",
    hrefLabel: "Source",
  },
  {
    name: "UI Mitra",
    kind: "Design agency website",
    description: "Services, portfolio and testimonials for a UI/UX agency.",
    stack: ["React", "Framer Motion", "Tailwind CSS"],
    href: "http://ui-mitra.netlify.app/",
    hrefLabel: "Live",
  },
  {
    name: "Lexp AI",
    kind: "Lead generation platform",
    description: "Finds and converts prospects from LinkedIn and Twitter.",
    stack: ["React", "TypeScript", "AI integration"],
    href: "https://lexp.webxela.com/",
    hrefLabel: "Live",
  },
  {
    name: "Typing Master",
    kind: "Speed test",
    description: "Typing test with real-time WPM and generated words.",
    stack: ["Next.js"],
    href: "https://jenkx-typing-test.netlify.app/",
    hrefLabel: "Live",
  },
  {
    name: "SecurePass",
    kind: "Password generator",
    description: "Strong passwords with customizable rules.",
    stack: ["JavaScript", "HTML/CSS"],
    href: "https://password-generator-474.netlify.app/",
    hrefLabel: "Live",
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "React", "Next.js", "TypeScript", "JavaScript", "Vite", "Tailwind CSS",
      "Framer Motion", "ShadCN / Radix UI", "Zustand", "TanStack Query", "React Router", "Chrome Extensions (Manifest V3)",
    ],
  },
  {
    group: "Backend and data",
    items: ["Node.js", "PostgreSQL", "Supabase", "Go", "API integration", "Discord API", "Zoho"],
  },
  {
    group: "Engineering practice",
    items: [
      "Unit, integration and system testing", "Performance optimization",
      "Deployment, SSL and monitoring", "Application security", "Code review",
      "Technical documentation", "Developer tooling", "Agile / Scrum",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "VS Code", "Cursor", "Copilot", "v0", "Bolt"],
  },
];
