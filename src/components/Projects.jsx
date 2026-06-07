import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const TILT_OPTIONS = { max: 8, perspective: 1200, scale: 1.02, speed: 500, reset: true };

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.22,1,0.36,1] } },
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
    <section id="projects" className="py-28 border-b border-white/[0.04]" aria-label="Portfolio projects">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }} />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-semibold">Portfolio</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
          Featured <span className="shimmer-text">Projects</span>
        </h2>
        <p className="mt-4 text-neutral-500 text-sm max-w-md mx-auto">
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
            <Tilt options={TILT_OPTIONS} className="h-full">
              <article className="group relative h-full flex flex-col glass glass-hover rounded-2xl border border-white/[0.06] hover:border-violet-500/25 overflow-hidden transition-all duration-300 shadow-xl hover:shadow-violet-500/10">

                {/* Image */}
                <div className="relative overflow-hidden bg-neutral-900/60 h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/90 via-[#0a0a0f]/20 to-transparent" />

                  {/* Type badge */}
                  {project.type && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-violet-300 rounded-lg"
                      style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(124,58,237,0.35)" }}>
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
                        className="p-2 glass rounded-lg text-neutral-300 hover:text-white hover:border-white/20 transition-all duration-200 border border-white/[0.08]"
                      >
                        <LuGithub className="text-sm" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank" rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="p-2 glass rounded-lg text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-200 border border-white/[0.08]"
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
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                      <HiOutlineOfficeBuilding className="text-xs" />
                      {project.organization}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-display text-base font-semibold text-neutral-100 group-hover:text-violet-200 transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-500 text-xs leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-medium tracking-wide text-purple-300 rounded-md"
                        style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
