import React from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Engineer",
    company: "Klaviyo",
    year: "2024 — PRESENT",
    description:
      "Build and maintain critical components used to construct Klaviyo’s frontend. Collaborate with cross-functional teams to ensure accessibility best practices.",
    skills: ["JavaScript", "React", "TypeScript", "Storybook"],
  },
  {
    id: 2,
    role: "Lead Engineer",
    company: "Upstatement",
    year: "2018 — 2024",
    description:
      "Led development of high-quality websites and digital products for various clients. Focused on accessibility and scalable design systems.",
    skills: ["Next.js", "SCSS", "WordPress", "PHP"],
  },
];

export default function App() {
  return (
    <div className="bg-[#ff0000] w-5/6 mx-auto">
      <div className="bg-[#0a192f] text-gray-300 font-sans h-screen">
        <div className="flex h-full">
          {/* Sidebar */}
          <aside className="w-1/4 p-10 hidden md:flex flex-col space-y-6 fixed h-full">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="uppercase text-sm font-medium tracking-widest text-gray-400 hover:text-white transition-colors"
              >
                {sec.label}
              </a>
            ))}
          </aside>

          {/* Main Content */}
          <main className="md:ml-1/4 w-full ml-0 h-screen px-6 py-16 scroll-smooth space-y-32">
            {/* About Section */}
            <section id="about" className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-4">About</h1>
              <p className="text-gray-400 leading-relaxed">
                I build accessible, pixel-perfect digital experiences for the web.
              </p>
            </section>

            {/* Experience Section */}
            <section id="experience" className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Experience</h1>

              <div className="space-y-16">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    className="flex flex-col md:flex-row md:space-x-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-teal-400 font-mono text-sm md:w-1/4 mb-2 md:mb-0">
                      {exp.year}
                    </div>
                    <div className="md:w-3/4 space-y-2">
                      <h2 className="text-lg font-semibold text-white">
                        {exp.role} ·{" "}
                        <span className="text-teal-400">{exp.company}</span>
                      </h2>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                      <div className="flex flex-wrap mt-2 gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-[#112240] text-teal-400 px-3 py-1 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
              <p className="text-gray-400 leading-relaxed">
                Here are some projects I’ve worked on recently…
              </p>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
