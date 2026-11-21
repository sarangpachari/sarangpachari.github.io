import { FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";

const TECH_STACK = [
  { icon: <FaReact      />, name: "React",      delay: 0    },
  { icon: <FaNodeJs     />, name: "Node.js",    delay: 0.05 },
  { icon: <SiMongodb    />, name: "MongoDB",    delay: 0.1  },
  { icon: <SiPostgresql />, name: "PostgreSQL", delay: 0.15 },
  { icon: <SiExpress    />, name: "Express",    delay: 0.2  },
  { icon: <IoLogoJavascript />, name: "JavaScript", delay: 0.25 },
  { icon: <RiTailwindCssFill />, name: "Tailwind", delay: 0.3 },
  { icon: <FaHtml5      />, name: "HTML5",      delay: 0.35 },
  { icon: <FaCss3Alt    />, name: "CSS3",       delay: 0.4  },
  { icon: <FaGitAlt     />, name: "Git",        delay: 0.45 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Technologies = () => {
  return (
    <section id="technologies" className="py-24 section-border" aria-label="Tech stack">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent font-bold">// My Toolkit</span>
        <h2 className="font-mono text-4xl lg:text-5xl font-extrabold text-ink mt-2 tracking-tight">
          Tech Stack
        </h2>
        <div className="w-16 h-1 bg-accent mt-3" />
        <p className="mt-4 text-ink/50 font-body text-sm max-w-md">
          Technologies I use to craft high-performance, scalable web experiences.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl"
      >
        {TECH_STACK.map(({ icon, name }) => (
          <motion.div key={name} variants={cardVariants}>
            <div className="brutal-card flex flex-col items-center gap-3 p-5 group cursor-default select-none">
              <span className="text-4xl lg:text-5xl text-ink group-hover:text-accent transition-colors duration-200">
                {icon}
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60 group-hover:text-ink transition-colors duration-200">
                {name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
