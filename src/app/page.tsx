import Image from "next/image";
import React from "react";

export default function Home() {
  const projects = [
    {
      title: "Fintech Dashboard",
      description:
        "A modern dashboard for managing transactions, budgets, and analytics. Built with Next.js, TypeScript, and Tailwind.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
      live: "#",
      code: "#",
      image: "https://via.placeholder.com/600x400?text=Fintech+Dashboard",
    },
    {
      title: "Hotel Booking Platform",
      description:
        "A booking system with real-time availability, secure authentication, and smooth UI flows.",
      tags: ["React", "Zustand", "Node.js", "MongoDB"],
      live: "#",
      code: "#",
      image: "https://via.placeholder.com/600x400?text=Hotel+Booking",
    },
    {
      title: "Marketplace for Events",
      description:
        "A platform to hire event professionals, featuring vendor onboarding and customizable settings.",
      tags: ["Next.js", "React Query", "Framer Motion"],
      live: "#",
      code: "#",
      image: "https://via.placeholder.com/600x400?text=Marketplace",
    },
  ];

  // Skills
  const skills = {
    Frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Sass",
    ],
    "State Management": ["Zustand", "Redux.js", "React Query"],
    "Testing & Validation": [
      "Jest",
      "Cypress",
      "React Testing Library",
      "Zod",
      "Yup",
    ],
    "Backend & APIs": ["Node.js", "REST APIs", "MongoDB", "JWT", "OAuth"],
    "Tools & Workflow": ["Git", "GitHub", "Agile/Scrum", "CI/CD", "Sentry"],
  };

  // Experience
  const experiences = [
    {
      role: "Frontend Engineer (Full-time)",
      company: "Haptle",
      date: "Sep 2024 – Present",
      location: "Nigeria",
      bullets: [
        "Built a multi-step vendor onboarding flow using Next.js, TypeScript, Zustand, and Tailwind CSS.",
        "Implemented WebSocket-based updates for bookings, messaging, and events for real-time UI feedback.",
        "Added customizable settings (withdrawal, dark mode, language) with Yup validation.",
        "Collaborated with product and backend teams to align UI features with business requirements.",
      ],
    },
    {
      role: "Frontend Engineer (Full-time)",
      company: "Monietab",
      date: "Nov 2024 – Jun 2025",
      location: "Nigeria",
      bullets: [
        "Architected scalable applications with Next.js using SSR, code splitting, and lazy loading.",
        "Managed global and server state with Zustand and React Query for predictable data handling.",
        "Built modular, accessible UI components with Tailwind CSS and Framer Motion.",
        "Integrated authentication flows (JWT/OAuth) with protected routes and validated forms.",
      ],
    },
    {
      role: "Fullstack Engineer (Contract)",
      company: "Etherea",
      date: "Jul 2025 – Sep 2025",
      location: "Nigeria",
      bullets: [
        "Designed RESTful APIs for hotel booking, search, and cancellations with efficient MongoDB schema design.",
        "Built real-time syncing with WebSockets to ensure up-to-date booking availability.",
        "Implemented secure authentication (JWT, refresh tokens, role-based access) with single-device login enforcement.",
        "Applied security practices like rate limiting, input validation, and HTTPS to protect the platform.",
      ],
    },
  ];

  return (
    <main className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-24 max-w-4xl mx-auto">
        <h2 className="text-lg md:text-xl text-gray-600 mb-2">
          Hi, I’m <span className="font-semibold">Kabiru Akeem</span> 👋
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Frontend Engineer
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed">
          I build scalable, user-friendly web applications with React, Next.js,
          and TypeScript — focusing on performance, clean architecture, and
          smooth user experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-600 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-xl hover:bg-blue-50 transition"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src="/smartchefs.png"
                alt={project.title}
                className="w-full h-48 object-cover"
                width={300}
                height={150}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.live}
                    className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="px-4 py-2 border border-blue-500 text-blue-500 text-sm font-semibold rounded-lg hover:bg-blue-50 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Skills
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, skillList], idx) => (
            <div key={idx}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
          Experience
        </h2>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {exp.role}
                </h3>
                <span className="text-gray-500">
                  {exp.date} | {exp.location}
                </span>
              </div>
              <h4 className="text-gray-700 font-medium mb-2">{exp.company}</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-24 max-w-4xl mx-auto text-center bg-gray-50 rounded-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-8">
          I’m open to remote frontend opportunities. Feel free to reach out via
          email or LinkedIn.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:kabby.dev@outlook.com"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-600 transition"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/kabiruakeem"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-xl hover:bg-blue-50 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/akeemkabiru"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border-2 border-gray-500 text-gray-700 font-semibold rounded-xl hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
