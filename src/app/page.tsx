"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  experiences,
  projects,
  skills,
  staggerContainer,
  staggerItem,
} from "@/components/constant";

export default function Home() {
  return (
    <main className="min-h-screen  text-gray-900 font-sans text-sm ">
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-900">Kabby</div>
            <div className="hidden md:flex space-x-8">
              {["Projects", "About", "Skills", "Experience"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 hover:text-slate-900 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.section
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900"
            variants={staggerItem}
          >
            Frontend Engineer
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={staggerItem}
          >
            I design and deliver high-performance applications that transform
            data into intuitive, reliable user experiences.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={staggerItem}
          >
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Projects
            </motion.a>

            <motion.a
              href="/kabiruakeem-cv.pdf"
              className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      <section id="projects" className="py-16 px-6 granular-gray">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Projects
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative flex flex-col h-full overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <motion.a
                          href={project.live}
                          className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Live Demo
                        </motion.a>
                        <motion.a
                          href={project.code}
                          className="px-6 py-3 bg-primary-500/80 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-primary-600 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Code
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/akeemkabiru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-secondary-800/50 text-secondary-100 font-semibold rounded-lg hover:bg-secondary-800/70 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About</h2>
          </motion.div>
          <div className="flex lg:flex-row flex-col items-center lg:items-start gap-8 bg-white p-6 rounded-lg">
            <Image
              src="/kabby.jpeg"
              alt=""
              width={300}
              height={300}
              className="rounded-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base text-justify space-y-4 hyphens-auto"
            >
              <p>
                I&apos;m Kabiru Akeem, a Frontend Engineer who cares about
                clarity, scalability, and long-term impact. I approach system
                design with an eye for trade-offs, making informed decisions
                that balance performance, usability, and maintainability. For
                me, writing code is only part of the job, the bigger challenge
                is designing systems that evolve gracefully and guiding teams
                toward shared technical standards.
              </p>
              <p>
                I believe great engineering comes from collaboration as much as
                technical skill. I work closely with product and backend teams
                to ensure the frontend is not just functional but aligned with
                the bigger picture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Skills</h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(
              ([category, skillList], categoryIdx) => (
                <motion.div
                  key={categoryIdx}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: categoryIdx * 0.1 }}
                >
                  <h3 className="text-lg font-medium text-slate-900 mb-4">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 px-6 granular-gray">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Experience
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg p-6 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg text-slate-700 font-medium mb-2">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-slate-500 text-sm">
                      <span>{exp.date}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>
                </div>
                <div className="text-slate-600 text-sm leading-relaxed mb-4">
                  <span className="font-semibold">Overview:</span>{" "}
                  <span>{exp.overview}</span>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="text-slate-600 text-sm leading-relaxed"
                    >
                      • {bullet}
                    </li>
                  ))}
                </ul>

                <div className="text-slate-600 text-sm leading-relaxed mt-4">
                  <span className="font-semibold">Impact:</span>{" "}
                  <span>{exp.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Contact Methods */}
              <div className="flex items-center gap-4">
                {[
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                    label: "Email",
                    value: "kabby.dev@outlook.com",
                    href: "mailto:kabby.dev@outlook.com",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    label: "LinkedIn",
                    value: "linkedin.com/in/kabiruakeem",
                    href: "https://linkedin.com/in/kabiruakeem",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                    label: "GitHub",
                    value: "github.com/akeemkabiru",
                    href: "https://github.com/akeemkabiru",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25H21.532L14.14 10.69L22.75 21.75H15.93L10.872 15.36L5.056 21.75H1.766L9.704 12.72L1.5 2.25H8.478L13.06 8.13L18.244 2.25ZM17.048 19.95H18.916L7.58 4.05H5.582L17.048 19.95Z" />
                      </svg>
                    ),
                    label: "X (Twitter)",
                    value: "twitter.com/akemkabiru",
                    href: "https://twitter.com/akemkabiru",
                  },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600">
                      {contact.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Kabiru Akeem
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
