import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

const Projects = () => {
  // JSON-LD for SEO/AEO
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": project.liveLink || undefined,
        "programmingLanguage": project.technologies,
      }
    }))
  };

  return (
    <section id="projects" className="border-b border-neutral-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl lg:text-5xl font-light tracking-tight"
      >
        Featured <span className="text-neutral-500">Projects</span>
      </motion.h2>

      <div className="flex flex-col gap-16 lg:gap-24 px-4">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-col lg:flex-row lg:items-center justify-center gap-10 group">
            {/* Image Side - Comes from Left */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3 flex justify-center"
            >
              <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-auto max-w-[200px] object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0 shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Content Side - Comes from Right */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-2/3 max-w-2xl"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-neutral-100 group-hover:text-purple-800 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    {project.gitLink && (
                      <a
                        href={project.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-white transition-colors p-2 bg-neutral-800/50 rounded-full"
                        title="Source Code"
                      >
                        <LuGithub className="text-xl" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-cyan-400 transition-colors p-2 bg-neutral-800/50 rounded-full"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-neutral-400 font-light text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-1.5 text-xs font-semibold tracking-wide text-purple-300 bg-purple-900/10 border border-purple-900/30 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
