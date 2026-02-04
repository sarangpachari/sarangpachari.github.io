import { FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill, RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiMongodb, SiPostgresql } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -8 },
  animate: {
    y: [8, -8],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const techStack = [
    { icon: <RiReactjsLine className="text-4xl lg:text-5xl text-cyan-400" />, duration: 2.5, name: "React" },
    { icon: <FaNodeJs className="text-4xl lg:text-5xl text-green-500" />, duration: 3, name: "Node.js" },
    { icon: <SiMongodb className="text-4xl lg:text-5xl text-green-600" />, duration: 5, name: "MongoDB" },
    { icon: <SiPostgresql className="text-4xl lg:text-5xl text-blue-400" />, duration: 2, name: "PostgreSQL" },
    { icon: <SiExpress className="text-4xl lg:text-5xl text-white" />, duration: 6, name: "Express" },
    { icon: <IoLogoJavascript className="text-4xl lg:text-5xl text-yellow-400" />, duration: 3.5, name: "JavaScript" },
    { icon: <RiTailwindCssFill className="text-4xl lg:text-5xl text-cyan-400" />, duration: 4, name: "Tailwind" },
    { icon: <FaHtml5 className="text-4xl lg:text-5xl text-orange-500" />, duration: 2.8, name: "HTML5" },
    { icon: <FaGitAlt className="text-4xl lg:text-5xl text-orange-600" />, duration: 4.5, name: "Git" },
  ];

  return (
    <section id="technologies" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl font-light tracking-tight"
      >
        Core <span className="text-neutral-500">Tech Stack</span>
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-6 lg:gap-8"
      >
        {techStack.map((tech, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <motion.div
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              className="relative group p-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity rounded-2xl" />
              {tech.icon}
            </motion.div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;
