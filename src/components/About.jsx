import { useRef, useEffect, useState } from "react";
import aboutImg from "../assets/sarang_coding.png";
import { ABOUT_TEXT } from "../constants";
import { motion, useInView } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";

const STATS = [
  { value: 2,  suffix: "+", label: "Years of Experience" },
  { value: 4,  suffix: "+", label: "Business Applications" },
  { value: 9,  suffix: "+",  label: "Service pages developed" },
];

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = () => {
      start++;
      setCount(start);
      if (start < value) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-mono text-4xl lg:text-5xl font-extrabold text-ink">
      {count}{suffix}
    </span>
  );
}

const SKILL_CARDS = [
  { icon: FaServer,    label: "Backend",  sub: "Node & Express" },
  { icon: FaMobileAlt, label: "Frontend", sub: "React & Tailwind" },
  { icon: FaDatabase,  label: "Database", sub: "MongoDB & PG" },
  { icon: FaCode,      label: "APIs",     sub: "REST & Auth" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Person",
    name: "Sarang P Achari",
    description: ABOUT_TEXT,
    address: { "@type": "PostalAddress", addressLocality: "Kochi", addressRegion: "Kerala", addressCountry: "India" },
    knowsAbout: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Full Stack Development"],
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 section-border" aria-label="About me">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Section heading */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="mb-16"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent font-bold">// Who I Am</span>
        <h2 className="font-mono text-4xl lg:text-5xl font-extrabold text-ink mt-2 tracking-tight">
          About Me
        </h2>
        <div className="w-16 h-1 bg-accent mt-3" />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

        {/* ── Image side ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="w-full lg:w-5/12"
        >
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-ink" />
            <div className="relative border-3 border-ink overflow-hidden bg-concrete">
              <img
                src={aboutImg}
                alt="Sarang P Achari coding – Full Stack Developer"
                loading="lazy"
                className="w-full max-w-sm mx-auto block grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>

        {/* ── Text side ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="w-full lg:w-7/12 flex flex-col gap-8"
        >
          {/* Stat counters */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map(({ value, suffix, label }) => (
              <div key={label} className="brutal-card p-5 text-center">
                <AnimatedCounter value={value} suffix={suffix} />
                <p className="font-mono text-[10px] text-ink/50 mt-1 font-semibold uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>

          {/* Skill mini-cards */}
          <div className="grid grid-cols-2 gap-3">
            {SKILL_CARDS.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="brutal-card p-4 flex items-center gap-3"
              >
                <div className="p-2.5 border-2 border-ink bg-accent/10">
                  <Icon className="text-accent text-xl" />
                </div>
                <div>
                  <p className="font-mono text-sm font-bold text-ink">{label}</p>
                  <p className="font-mono text-[10px] text-ink/50">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bio text */}
          <p className="text-ink/70 font-body text-sm lg:text-base leading-relaxed">
            {ABOUT_TEXT}
          </p>

          {/* Status badge */}
          <div>
            <span className="brutal-tag text-accent border-accent">
              ● Open for Opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
