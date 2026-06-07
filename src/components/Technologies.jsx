import { FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const TILT_OPTIONS = { max: 20, perspective: 800, scale: 1.08, speed: 400, reset: true };

const TECH_STACK = [
  { icon: <FaReact      />, name: "React",      color: "#06b6d4", glow: "rgba(6,182,212,0.4)",   delay: 0    },
  { icon: <FaNodeJs     />, name: "Node.js",    color: "#22c55e", glow: "rgba(34,197,94,0.4)",   delay: 0.05 },
  { icon: <SiMongodb    />, name: "MongoDB",    color: "#16a34a", glow: "rgba(22,163,74,0.4)",   delay: 0.1  },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#60a5fa", glow: "rgba(96,165,250,0.4)",  delay: 0.15 },
  { icon: <SiExpress    />, name: "Express",    color: "#d4d4d8", glow: "rgba(212,212,216,0.3)", delay: 0.2  },
  { icon: <IoLogoJavascript />, name: "JavaScript", color: "#facc15", glow: "rgba(250,204,21,0.4)", delay: 0.25 },
  { icon: <RiTailwindCssFill />, name: "Tailwind", color: "#38bdf8", glow: "rgba(56,189,248,0.4)", delay: 0.3 },
  { icon: <FaHtml5      />, name: "HTML5",      color: "#f97316", glow: "rgba(249,115,22,0.4)",  delay: 0.35 },
  { icon: <FaCss3Alt    />, name: "CSS3",       color: "#818cf8", glow: "rgba(129,140,248,0.4)", delay: 0.4  },
  { icon: <FaGitAlt     />, name: "Git",        color: "#f97316", glow: "rgba(249,115,22,0.4)",  delay: 0.45 },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.85 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } },
};

const Technologies = () => {
  return (
    <section id="technologies" className="py-28 border-b border-white/[0.04]" aria-label="Tech stack">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-semibold">My Toolkit</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
          Core <span className="shimmer-text">Tech Stack</span>
        </h2>
        <p className="mt-4 text-neutral-500 text-sm max-w-md mx-auto">
          Technologies I use to craft high-performance, scalable web experiences.
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-3xl mx-auto"
      >
        {TECH_STACK.map(({ icon, name, color, glow }) => (
          <motion.div key={name} variants={cardVariants}>
            <Tilt options={TILT_OPTIONS}>
              <div className="group relative flex flex-col items-center gap-3 p-5 glass glass-hover rounded-2xl border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 cursor-default select-none">
                {/* Icon glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `radial-gradient(circle at 50% 40%, ${glow} 0%, transparent 70%)` }}
                />
                {/* Icon */}
                <span
                  className="relative z-10 text-4xl lg:text-5xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color, filter: `drop-shadow(0 0 10px ${glow})` }}
                >
                  {icon}
                </span>
                {/* Label */}
                <span className="relative z-10 text-[11px] font-semibold uppercase tracking-widest text-neutral-400 group-hover:text-neutral-200 transition-colors duration-300">
                  {name}
                </span>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
