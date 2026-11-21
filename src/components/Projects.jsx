import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: PROJECTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      url: p.liveLink || undefined,
      programmingLanguage: p.technologies,
    },
  })),
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 section-border" aria-label="Portfolio projects">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }} />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent font-bold">// Portfolio</span>
        <h2 className="font-mono text-4xl lg:text-5xl font-extrabold text-ink mt-2 tracking-tight">
          Projects
        </h2>
        <div className="w-16 h-1 bg-accent mt-3" />
        <p className="mt-4 text-ink/50 font-body text-sm max-w-md">
          Real-world applications I've designed, built, and shipped.
        </p>
      </motion.div>

      {/* Project grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={index} variants={cardAnim}>
            <article className="group h-full flex flex-col brutal-card overflow-hidden">

              {/* Image */}
              <div className="relative overflow-hidden bg-ink/5 h-44 border-b-2 border-ink">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Type badge */}
                {project.type && (
                  <span className="absolute top-3 left-3 brutal-tag bg-accent text-white border-ink">
                    {project.type}
                  </span>
                )}

                {/* Action links */}
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.gitLink && (
                    <a
                      href={project.gitLink}
                      target="_blank" rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="p-2 bg-concrete border-2 border-ink text-ink hover:bg-ink hover:text-concrete transition-colors duration-200"
                    >
                      <LuGithub className="text-sm" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank" rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="p-2 bg-accent border-2 border-ink text-white hover:bg-ink transition-colors duration-200"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                {/* Org */}
                {project.organization && (
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-ink/40 uppercase tracking-wider">
                    <HiOutlineOfficeBuilding className="text-xs" />
                    {project.organization}
                  </div>
                )}

                {/* Title */}
                <h3 className="font-mono text-sm font-bold text-ink leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-ink/50 font-body text-xs leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="brutal-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
