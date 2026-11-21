import { useRef } from "react";
import { EXPERIENCES } from "../constants";
import { motion, useInView } from "framer-motion";

function TimelineEntry({ experience, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row gap-6 md:gap-10 group">
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-[calc(28%-1px)] top-6 flex-col items-center" aria-hidden="true">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="w-4 h-4 border-3 border-ink bg-accent z-10"
        />
      </div>

      {/* Year / Date */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="w-full md:w-[28%] md:pr-8 pt-1"
      >
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
          {experience.year}
        </span>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="w-full md:w-[72%]"
      >
        <div className="brutal-card p-6">
          {/* Role & Company */}
          <div className="mb-3">
            <h3 className="font-mono text-lg font-bold text-ink">
              {experience.role}
            </h3>
            <span className="brutal-tag mt-2 text-accent border-accent">
              {experience.company}
            </span>
          </div>

          {/* Description */}
          <p className="text-ink/60 font-body text-sm leading-relaxed mb-4">{experience.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="brutal-tag"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const Experience = () => {
  const lineRef = useRef(null);
  const inView = useInView(lineRef, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-24 section-border" aria-label="Work experience">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent font-bold">// Career</span>
        <h2 className="font-mono text-4xl lg:text-5xl font-extrabold text-ink mt-2 tracking-tight">
          Work History
        </h2>
        <div className="w-16 h-1 bg-accent mt-3" />
      </motion.div>

      {/* Timeline */}
      <div ref={lineRef} className="relative max-w-4xl px-4">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-[28%] top-0 bottom-0 w-[3px] bg-ink/10" aria-hidden="true">
          <motion.div
            initial={{ height: "0%" }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full bg-ink"
          />
        </div>

        <div className="flex flex-col gap-12">
          {EXPERIENCES.map((exp, i) => (
            <TimelineEntry key={i} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
