export const projects = [
  {
    title: "AI Writing Assistant",
    description:
      "Helps users rephrase, summarize, or expand text with a simple editor interface powered by free AI APIs.",
    tags: ["Next.js", "TypeScript", "Tailwind", "OpenAI API (free tier)"],
    live: "https://ai-witing-assistant.vercel.app",
    code: "#",
    image: "/ai.jpg",
  },
  {
    title: "Team Productivity Dashboard",
    description:
      "Tracks tasks, deadlines, and team activity in a single dashboard with charts, filters, and exportable reports.",
    tags: ["React", "Next.js", "TypeScript", "Chart.js", "SQLite"],
    live: "#",
    code: "#",
    image: "/ai.jpg",
  },
  {
    title: "API Playground",
    description:
      "Lightweight tool to test REST and GraphQL endpoints with schema inspection and request history.",
    tags: ["React", "TypeScript", "Tailwind", "GraphQL"],
    live: "#",
    code: "#",
    image: "/ai.jpg",
  },
];

export const skills = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Sass",
    "Framer Motion",
    "D3.js",
  ],
  "State Management": [
    "Zustand",
    "Redux Toolkit",
    "React Query",
    "Context API",
  ],
  "Testing & Validation": [
    "Jest",
    "Cypress",
    "React Testing Library",
    "Zod",
    "Yup",
  ],
  "Backend & APIs": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL (Apollo)",
    "MongoDB",
  ],
  "Tools & Workflow": ["Git", "GitHub", "Agile / Scrum", "CI/CD", "Sentry"],
};

export const experiences = [
  {
    role: "Frontend Engineer",
    company: "Haptle",
    date: "Sep 2024 – Present",
    location: "Nigeria",
    type: "Full-time",
    overview:
      "Haptle is an online marketplace connecting users with vetted vendors for event planning, ensuring secure transactions and quality service.",
    bullets: [
      "Built multi-step vendor onboarding flow (Next.js, TypeScript, Zustand, Tailwind CSS)",
      "Implemented real-time updates for bookings, messaging, and events (WebSockets)",
      "Added customizable settings with Yup validation for better user personalization",
    ],
    impact:
      "Streamlined onboarding and improved user engagement with faster interactions",
  },
  {
    role: "Frontend Engineer",
    company: "Monietab",
    date: "Nov 2023 – Jun 2024",
    location: "Nigeria",
    type: "Full-time",
    overview:
      "Monietab is a fintech platform modernizing savings groups and cooperatives with automated financial management and real-time transparency.",
    bullets: [
      "Architected Next.js app with SSR, code splitting, and lazy loading",
      "Managed global and server state using Zustand and React Query",
      "Built modular, accessible UI components and secure JWT/OAuth authentication flows",
    ],
    impact:
      "Improved performance, accessibility, and security for users across the platform",
  },
  {
    role: "Fullstack Engineer",
    company: "EtherealCorp",
    date: "Jul 2023 – Sep 2023",
    location: "Nigeria",
    type: "Contract",
    overview:
      "EtherealCorp is a hotel booking platform providing real-time availability and secure transactions.",
    bullets: [
      "Designed RESTful APIs for hotel booking with MongoDB indexing",
      "Implemented real-time booking sync using WebSockets",
      "Built secure JWT-based authentication with role-based access",
    ],
    impact:
      "Ensured accurate booking availability and strengthened system security",
  },
];

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
