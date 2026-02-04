import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-3xl font-light tracking-tight"
      >
        Work <span className="text-neutral-500">History</span>
      </motion.h2>
      <div className="flex flex-col gap-12 max-w-4xl mx-auto px-4">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-col md:flex-row md:justify-between gap-4 group">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/4"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 group-hover:text-purple-400 transition-colors duration-300">
                {experience.year}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-3/4"
            >
              <h3 className="mb-2 text-lg font-medium text-neutral-200 group-hover:text-purple-300 transition-colors duration-300">
                {experience.role} <span className="text-neutral-500 font-light mx-2">|</span>
                <span className="text-sm text-purple-400 font-normal">
                  {experience.company}
                </span>
              </h3>
              <p className="mb-4 text-xs lg:text-sm text-neutral-400 leading-relaxed font-light">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-[10px] font-medium text-purple-300 bg-purple-900/10 border border-purple-900/40 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
