import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Updated projects data structure for multiple images
const projects = [
  {
    id: 1,
    title: "ManPower HR Management",
    description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React.js, Styled Components, and more.",
    imageUrls: [ // Changed from imageUrl to imageUrls and made it an array
      "images/mp_hr_management/home.png",
      "images/mp_hr_management/request_detail.png",
      "images/mp_hr_management/form1.png",
      "images/mp_hr_management/form2.png",
      "images/mp_hr_management/form3.png",
      "images/mp_hr_management/form4.png",
      "images/mp_hr_management/report.png",
      "images/mp_hr_management/report_detail.png",
      "images/mp_hr_management/approve1.png",
      "images/mp_hr_management/approve2.png",
      "images/mp_hr_management/approve3.png",
    ],
    projectUrl: "https://github.com/SaranLilly/MPRequestHR",
    technologies: ["PHP","HTML", "CSS","Javascript","Laravel","Vuetify 2","MySQL","Git","Github"],
  },
  {
    id: 2,
    title: "Real-Time Streaming Protocol ( RTSP )",
    description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React.js, Styled Components, and more.",
    imageUrls: [ // Changed from imageUrl to imageUrls and made it an array
      "images/advice_python/tracking.png",
      "images/advice_python/in-out.png",
      "images/advice_python/in-out_web.png",
      "images/advice_python/desktop_rtsp.png",
    ],
    projectUrl: "https://drive.google.com/drive/folders/1zoPFM2DENfNy4fc2at-P4G9pfK4WcPk1?usp=sharing",
    technologies: ["Python", "HTML", "CSS","Javascript","Flask"],
  },
  {
    id: 3,
    title: "Health-Insurance",
    description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React.js, Styled Components, and more.",
    imageUrls: [ // Changed from imageUrl to imageUrls and made it an array
      "images/health_insurance/home.png"
    ],
    projectUrl: "https://github.com/paiizxqh/health-insurance",
    technologies: ["Python", "HTML", "CSS","Javascript","React.js","Github"],
  },
  {
    id: 4,
    title: "E-Commerce Web Application",
    description: "The website you are currently viewing. Built with React.js, Tailwind CSS, and Framer Motion for a smooth, responsive, and animated user experience.",
    imageUrls: [ // Even if one image, keep it as an array for consistency
      "images/ecommerce/login.png",
      "images/ecommerce/home.png",
      "images/ecommerce/promotion.png",
      "images/ecommerce/purchase_promotion.png",
      "images/ecommerce/product.png",
      "images/ecommerce/board.png",
      "images/ecommerce/history.png",
      "images/ecommerce/notification.png",
      "images/ecommerce/cart.png",
      "images/ecommerce/purchase.png",
      "images/ecommerce/manage_member.png",
      "images/ecommerce/manage_check.png",
      "images/ecommerce/manage_product.png",
      "images/ecommerce/manage_promotion1.png",
      "images/ecommerce/manage_promotion2.png",
    ],
    projectUrl: "https://github.com/ThanakritPhan/SE_66_4",
    technologies: ["PHP","HTML", "CSS","Javascript","Laravel","MySQL","Git","Github"],
  },
  {
    id: 5,
    title: "Watermark by Text Web Application",
    description: "The website you are currently viewing. Built with React.js, Tailwind CSS, and Framer Motion for a smooth, responsive, and animated user experience.",
    imageUrls: [ // Even if one image, keep it as an array for consistency
      "images/watermark_by_text/register.png",
      "images/watermark_by_text/login.png",
      "images/watermark_by_text/home.png",
      "images/watermark_by_text/profile.png",
      "images/watermark_by_text/upload.png",
    ],
    projectUrl: "https://github.com/paiizxqh/watermark-by-text",
    technologies: ["Python","HTML", "CSS","Javascript","React.js","MongoDB","Flask","Git","Github"],
  },
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
    skills: ["PHP","Python","HTML", "CSS","Javascript","Laravel","React-Native","Flask","MySQL","Git","Github"],
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

// 2. ProjectImageModal Component
function ProjectImageModal({ isOpen, onClose, images, currentImage, setCurrentImage, projectTitle }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = ''; // Restore background scroll
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = ''; // Ensure scroll is restored on unmount
    };
  }, [isOpen, onClose]);

  if (!images || images.length === 0) return null; // Don't render if no images

  const handleNext = () => {
    setCurrentImage(prev => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage(prev => (prev - 1 + images.length) % images.length);
  };

  // Image transition variants for Framer Motion
  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };
  const [direction, setDirection] = useState(0);


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Close on backdrop click
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-[#0e2038] p-4 sm:p-6 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col relative"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside modal content
      >
        <div className="flex justify-between items-center mb-4">
            <h2 id="modal-title" className="text-xl text-slate-200 font-semibold truncate">
                {projectTitle}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-3xl leading-none p-1 -mr-1"
              aria-label="Close image gallery"
            >
              ×
            </button>
        </div>

        <div className="relative flex-grow flex items-center justify-center overflow-hidden mb-4 min-h-[200px] sm:min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.img
              key={currentImage} // Important for AnimatePresence to detect changes
              src={images[currentImage]}
              alt={`Image ${currentImage + 1} of ${images.length} for ${projectTitle}`}
              className="max-w-full max-h-[60vh] sm:max-h-[65vh] object-contain rounded shadow-lg"
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              // Add drag for swipe (optional advanced feature)
              // drag="x"
              // dragConstraints={{ left: 0, right: 0 }}
              // dragElastic={1}
              // onDragEnd={(e, { offset, velocity }) => {
              //   const swipe = Math.abs(offset.x) * velocity.x;
              //   if (swipe < -10000) {
              //     setDirection(1); handleNext();
              //   } else if (swipe > 10000) {
              //     setDirection(-1); handlePrev();
              //   }
              // }}
            />
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700">
            <button
              onClick={() => { setDirection(-1); handlePrev(); }}
              className="bg-teal-600/60 hover:bg-teal-500/80 text-teal-100 px-4 py-2 rounded text-sm transition-colors disabled:opacity-50"
              aria-label="Previous image"
            >
              Prev
            </button>
            <span className="text-sm text-gray-400">
              {currentImage + 1} / {images.length}
            </span>
            <button
              onClick={() => { setDirection(1); handleNext(); }}
              className="bg-teal-600/60 hover:bg-teal-500/80 text-teal-100 px-4 py-2 rounded text-sm transition-colors disabled:opacity-50"
              aria-label="Next image"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function App() {
  // 3. State for Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectImages, setSelectedProjectImages] = useState([]);
  const [selectedProjectTitle, setSelectedProjectTitle] = useState('');
  const [currentImageIndexInModal, setCurrentImageIndexInModal] = useState(0);

  const openImageModal = (images, title, startIndex = 0) => {
    setSelectedProjectImages(images);
    setSelectedProjectTitle(title);
    setCurrentImageIndexInModal(startIndex);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
    // Optional: Reset state after a delay to allow exit animation
    // setTimeout(() => {
    //   setSelectedProjectImages([]);
    //   setSelectedProjectTitle('');
    // }, 300); // Match modal exit transition duration
  };


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
        <main className="w-full md:ml-[560px] md:w-[768px] space-y-24 scroll-smooth">
          {/* Experience Section */}
          <section id="experience" className="space-y-10 scroll-mt-24">
            <h1 className="text-3xl font-bold text-white">Experience</h1>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="group flex flex-col md:flex-row md:space-x-8 p-4 rounded-lg hover:bg-[#112240]/60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-teal-400 font-mono text-sm md:w-1/4 mb-2 md:mb-0 pt-1"> {/* Adjusted width slightly for better alignment */}
                  {exp.year}
                </div>
                <div className="md:w-3/4 space-y-2">
                  <h2 className="text-lg font-semibold text-white group-hover:text-teal-300 transition-colors">
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

          {/* Projects Section - Updated for Modal */}
          <section id="projects" className="space-y-10 scroll-mt-24">
            <h1 className="text-3xl font-bold text-white mb-8">Projects</h1>
            <div className="space-y-12">
              {projects.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="group flex flex-col sm:flex-row gap-x-6 gap-y-4 p-4 rounded-lg bg-[#0f2744] hover:bg-[#143050] transition-all duration-300 shadow-lg"
                >
                  {/* Image Thumbnail - Click to open modal */}
                  <div
                    className="w-full sm:w-48 md:w-56 shrink-0 cursor-pointer relative overflow-hidden rounded-md border-2 border-slate-700 group-hover:border-teal-500/70 transition-all duration-300"
                    onClick={() => openImageModal(project.imageUrls, project.title)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openImageModal(project.imageUrls, project.title); }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View image gallery for ${project.title}`}
                  >
                    <img
                      src={project.imageUrls[0]} // Display the first image as thumbnail
                      alt={`Thumbnail for ${project.title}. Click to view gallery.`}
                      className="w-full h-auto object-cover aspect-[16/10] transition-transform duration-300 group-hover:scale-105"
                    />
                     {project.imageUrls.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                            {project.imageUrls.length} photos
                        </div>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium text-slate-200 mb-2">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-300 focus-visible:text-teal-300 transition-colors inline-flex items-center font-semibold group-hover:text-teal-300"
                        onClick={(e) => e.stopPropagation()} // Prevent modal open if clicking the link specifically
                         aria-label={`${project.title} (opens in a new tab)`}
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

      {/* 4. Render Modal using AnimatePresence */}
      <AnimatePresence>
        {isModalOpen && (
          <ProjectImageModal
            isOpen={isModalOpen}
            onClose={closeImageModal}
            images={selectedProjectImages}
            currentImage={currentImageIndexInModal}
            setCurrentImage={setCurrentImageIndexInModal}
            projectTitle={selectedProjectTitle}
          />
        )}
      </AnimatePresence>
    </div>
  );
}