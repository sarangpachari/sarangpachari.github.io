import { useRef } from "react";
import { EXPERIENCES } from "../constants";
import { motion, useInView } from "framer-motion";

const fadeLeft  = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };
const fadeRight = { hidden: { opacity: 0, x:  40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22,1,0.36,1] } } };

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
          transition={{ delay: 0.3, duration: 0.4 }}
          className="w-3 h-3 rounded-full border-2 border-violet-500 bg-violet-500/30 shadow-[0_0_12px_rgba(124,58,237,0.8)] z-10"
        />
      </div>

      {/* Year / Date */}
      <motion.div
        initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeLeft}
        className="w-full md:w-[28%] md:pr-8 pt-1"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
          {experience.year}
        </span>
      </motion.div>

      {/* Card */}
      <motion.div
        initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeRight}
        className="w-full md:w-[72%]"
      >
        <div className="glass glass-hover rounded-2xl p-6 border border-white/[0.06] hover:border-violet-500/20 transition-all duration-300 shadow-lg group-hover:shadow-violet-500/5">
          {/* Role & Company */}
          <div className="mb-3">
            <h3 className="font-display text-lg font-semibold text-white group-hover:text-violet-200 transition-colors duration-300">
              {experience.role}
            </h3>
            <span className="inline-block mt-1 px-3 py-0.5 text-xs font-semibold rounded-full"
              style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa", border: "1px solid rgba(124,58,237,0.3)" }}>
              {experience.company}
            </span>
          </div>

          {/* Description */}
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">{experience.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[11px] font-medium tracking-wide text-cyan-300 rounded-lg transition-all duration-200 hover:bg-cyan-400/10"
                style={{ background: "rgba(6,182,212,0.07)", border: "1px solid rgba(6,182,212,0.2)" }}
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
    <section id="experience" className="py-28 border-b border-white/[0.04]" aria-label="Work experience">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-semibold">Career</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
          Work <span className="shimmer-text">History</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div ref={lineRef} className="relative max-w-4xl mx-auto px-4">
        {/* Vertical glowing line */}
        <div className="hidden md:block absolute left-[28%] top-0 bottom-0 w-px bg-white/[0.04]" aria-hidden="true">
          <motion.div
            initial={{ height: "0%" }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="w-full rounded-full"
            style={{ background: "linear-gradient(to bottom, transparent, #7c3aed80, #06b6d450, transparent)" }}
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
