import { useRef, useEffect, useState } from "react";
import aboutImg from "../assets/sarang_coding.png";
import { ABOUT_TEXT } from "../constants";
import { motion, useInView } from "framer-motion";
import { Tilt } from "react-tilt";
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";

const TILT_OPTIONS = { max: 10, perspective: 1000, scale: 1.02, speed: 500, reset: true };

const STATS = [
  { value: 1,  suffix: "+", label: "Year Experience" },
  { value: 7,  suffix: "+", label: "Projects Shipped" },
  { value: 2,  suffix: "",  label: "Companies" },
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
    <span ref={ref} className="font-display text-4xl lg:text-5xl font-bold text-white">
      {count}{suffix}
    </span>
  );
}

const SKILL_CARDS = [
  { icon: FaServer,   color: "text-pink-400",    label: "Backend",  sub: "Node & Express" },
  { icon: FaMobileAlt, color: "text-orange-400", label: "Frontend", sub: "React & Tailwind" },
  { icon: FaDatabase, color: "text-cyan-400",    label: "Database", sub: "MongoDB & PG" },
  { icon: FaCode,     color: "text-violet-400",  label: "APIs",     sub: "REST & Auth" },
];

const fadeLeft  = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } } };
const fadeRight = { hidden: { opacity: 0, x:  60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22,1,0.36,1] } } };
const fadeUp    = { hidden: { opacity: 0, y:  30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

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
    <section id="about" className="py-28 border-b border-white/[0.04]" aria-label="About me">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />

      {/* Section heading */}
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
        className="text-center mb-20"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-semibold">Who I Am</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
          About <span className="shimmer-text">Me</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap items-center gap-16 lg:gap-8">

        {/* ── Image side ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}
          className="w-full lg:w-5/12"
        >
          <Tilt options={TILT_OPTIONS} className="relative group">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-violet-600/25 to-cyan-600/15 blur-2xl group-hover:blur-xl transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-neutral-950/60 shadow-2xl">
              <img
                src={aboutImg}
                alt="Sarang P Achari coding – Full Stack Developer"
                loading="lazy"
                className="w-full max-w-sm mx-auto block grayscale-[40%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/70 via-transparent to-transparent" />
            </div>

            {/* Floating icon badges */}
            <motion.div
              animate={{ y: [0,-12,0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 p-4 glass rounded-2xl shadow-xl border border-white/[0.08] hidden sm:flex"
            >
              <FaCode className="text-cyan-400 text-3xl" />
            </motion.div>
            <motion.div
              animate={{ y: [0,12,0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 p-4 glass rounded-2xl shadow-xl border border-white/[0.08] hidden sm:flex"
            >
              <FaDatabase className="text-violet-400 text-3xl" />
            </motion.div>
          </Tilt>
        </motion.div>

        {/* ── Text side ── */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
          className="w-full lg:w-6/12 flex flex-col gap-8"
        >
          {/* Stat counters */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map(({ value, suffix, label }) => (
              <div key={label} className="glass glass-hover rounded-2xl p-5 text-center border border-white/[0.06] transition-all duration-300">
                <AnimatedCounter value={value} suffix={suffix} />
                <p className="text-xs text-neutral-500 mt-1 font-medium uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>

          {/* Skill mini-cards */}
          <div className="grid grid-cols-2 gap-3">
            {SKILL_CARDS.map(({ icon: Icon, color, label, sub }) => (
              <div
                key={label}
                className="glass glass-hover rounded-xl p-4 flex items-center gap-3 border border-white/[0.05] hover:border-white/[0.12] transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-white/[0.04] group-hover:bg-white/[0.08] transition-colors">
                  <Icon className={`${color} text-xl`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-200">{label}</p>
                  <p className="text-[11px] text-neutral-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bio text */}
          <p className="text-neutral-400 font-light text-sm lg:text-base leading-relaxed tracking-wide">
            {ABOUT_TEXT}
          </p>

          {/* Open badge */}
          <div>
            <span className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-400/[0.08] rounded-full border border-cyan-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-glow-pulse" />
              Open for Opportunities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
