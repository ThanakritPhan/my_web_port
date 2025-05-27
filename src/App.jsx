import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Build a Spotify Connected App",
    description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    imageUrl: "https://user-images.githubusercontent.com/10154383/257998800-35756c10-5088-41ad-971b-90115657830e.png", // URL รูปภาพตัวอย่าง (เหมือนใน screenshot ของคุณ)
    projectUrl: "https://spotify-app.com", // ลิงก์ไปยังโปรเจกต์จริง
    technologies: ["Node.js", "Express", "React", "Spotify API", "Styled Components"],
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "The website you are currently viewing. Built with React, Tailwind CSS, and Framer Motion for a smooth, responsive, and animated user experience.",
    imageUrl: "https://via.placeholder.com/320x180.png?text=Portfolio+Site", // Placeholder image
    projectUrl: "#",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },
  // เพิ่มโปรเจกต์อื่นๆ ตามต้องการ
];

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const experiences = [
  {
    id: 1,
    role: "Software Developer ( Internship )",
    company: "Advice IT Infinite",
    year: "2024 — 2025",
    description:
      "Developed a web application for Manpower HR Management encompassing the full Software Development Life Cycle ( SDLC ) from requirements gathering to testing",
    skills: ["JavaScript", "HTML", "CSS","PHP","Laravel","MySQL"],
  },
  {
    id: 2,
    role: "Mobile Developer ( Internship )",
    company: "Innovative Software Consulting",
    year: "2024",
    description:
      "Develop a function for a mobile application for identity verification using face recognition, and develop the mobile application according to OWASP standards",
    skills: ["Dart","Flutter"],
  },
];

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none ml-1 translate-y-px"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function App() {
  return (
    <div className="bg-[#0a192f] text-gray-300 font-sans min-h-screen flex justify-center px-4 py-20">
      <div className="w-full max-w-7xl flex flex-col md:flex-row md:relative gap-12">
        {/* Sidebar (40%) */}
        <aside className="w-full md:fixed md:left-[calc(50vw-640px)] md:top-20 md:w-[512px] md:h-[calc(100vh-5rem)] md:overflow-y-auto space-y-6 self-start z-10">
          <div className="text-white text-5xl font-bold">THANAKRIT PHANHINKRONG</div>
          <p className="text-gray-400 text-sm leading-relaxed">
            I am a fourth-year computer engineering student with a keen interest 
            in software development. I am eager to apply the skills and knowledge 
            I have acquired in my studies to real-world scenarios. My goal is to 
            gain practical experience and improve my knowledge in the field.
          </p>
          <nav className="space-y-2">
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="block text-teal-400 text-sm hover:underline"
              >
                {sec.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content (60%) */}
        <main className="w-full md:ml-[548px] md:w-[768px] space-y-24 scroll-smooth">
          {/* Experience Section */}
          <section id="experience" className="space-y-10 scroll-mt-24">
            <h1 className="text-3xl font-bold text-white">Experience</h1>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="flex flex-col md:flex-row md:space-x-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-teal-400 font-mono text-sm md:w-1/5 mb-2 md:mb-0">
                  {exp.year}
                </div>
                <div className="md:w-2/3 space-y-2">
                  <h2 className="text-lg font-semibold text-white">
                    {exp.role} · <span className="text-teal-400">{exp.company}</span>
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
          </section>

          {/* Projects Section - ปรับปรุงใหม่ */}
          <section id="projects" className="space-y-10 scroll-mt-24">
            <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
            <div className="space-y-12"> {/* Container สำหรับ project cards */}
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="group flex flex-col sm:flex-row gap-x-6 gap-y-4 p-4 rounded-lg bg-[#112240] hover:bg-[#192d4e] transition-colors duration-300 shadow-lg"
                >
                  {/* Image Thumbnail */}
                  <div className="w-full sm:w-48 md:w-56 shrink-0">
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${project.title}`}>
                      <img
                        src={project.imageUrl}
                        alt={`Thumbnail for ${project.title}`}
                        className="rounded-md w-full h-auto object-cover aspect-[16/10] border-2 border-slate-700 group-hover:border-teal-500/70 transition-all duration-300"
                      />
                    </a>
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium text-slate-200 mb-2">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-300 focus-visible:text-teal-300 transition-colors inline-flex items-center font-semibold"
                      >
                        <span>{project.title}</span>
                        <ArrowIcon />
                      </a>
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    {project.technologies && project.technologies.length > 0 && (
                      <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                        {project.technologies.map((tech) => (
                          <li key={tech}>
                            <div className="bg-teal-400/10 text-teal-300 px-3 py-1 text-xs font-medium rounded-full">
                              {tech}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
