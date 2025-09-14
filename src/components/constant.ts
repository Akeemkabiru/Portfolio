export const projects = [
  {
    title: "AI Writing Assistant",
    description:
      "Helps users rephrase, summarize, or expand text with a simple editor interface powered by free AI APIs.",
    tags: ["Next.js", "TypeScript", "Tailwind", "OpenAI API (free tier)"],
    live: "#",
    code: "#",
    image: "/trek.png",
  },
  {
    title: "Team Productivity Dashboard",
    description:
      "Tracks tasks, deadlines, and team activity in a single dashboard with charts, filters, and exportable reports.",
    tags: ["React", "Next.js", "TypeScript", "Chart.js", "SQLite"],
    live: "#",
    code: "#",
    image: "/trek.png",
  },
  {
    title: "API Playground",
    description:
      "Lightweight tool to test REST and GraphQL endpoints with schema inspection and request history.",
    tags: ["React", "TypeScript", "Tailwind", "GraphQL"],
    live: "#",
    code: "#",
    image: "/trek.png",
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
    role: "Senior Frontend Engineer",
    company: "Haptle",
    date: "Sep 2024 – Present",
    location: "Nigeria",
    type: "Full-time",
    bullets: [
      "Architected and built a multi-step vendor onboarding flow using Next.js, TypeScript, Zustand, and Tailwind CSS, improving conversion rates by 40%",
      "Implemented WebSocket-based real-time updates for bookings, messaging, and events, enhancing user engagement by 60%",
      "Developed customizable settings (withdrawal, dark mode, language) with Yup validation and seamless state management",
      "Led cross-functional collaboration with product and backend teams to align UI features with business requirements",
      "Mentored junior developers and established coding standards and best practices for the frontend team",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Monietab",
    date: "Nov 2023 – Jun 2024",
    location: "Nigeria",
    type: "Full-time",
    bullets: [
      "Architected scalable applications with Next.js using SSR, code splitting, and lazy loading, reducing initial load time by 50%",
      "Managed global and server state with Zustand and React Query for predictable data handling and improved performance",
      "Built modular, accessible UI components with Tailwind CSS and Framer Motion, ensuring WCAG 2.1 compliance",
      "Integrated authentication flows (JWT/OAuth) with protected routes and comprehensive form validation",
      "Optimized bundle size and implemented performance monitoring, achieving 95+ Lighthouse scores",
    ],
  },
  {
    role: "Fullstack Engineer",
    company: "Etherea",
    date: "Jul 2023 – Sep 2023",
    location: "Nigeria",
    type: "Contract",
    bullets: [
      "Designed and implemented RESTful APIs for hotel booking, search, and cancellations with efficient MongoDB schema design",
      "Built real-time syncing with WebSockets to ensure up-to-date booking availability and prevent double bookings",
      "Implemented secure authentication (JWT, refresh tokens, role-based access) with single-device login enforcement",
      "Applied comprehensive security practices including rate limiting, input validation, and HTTPS to protect the platform",
    ],
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
