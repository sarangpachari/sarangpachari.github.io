import { useRef } from "react";
import { HERO_CONTENT, HERO_ROLE, HERO_TITLE_NAME } from "../constants";
import profilePic from "../assets/sarangProfile2.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Tilt } from "react-tilt";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi";

const TILT_OPTIONS = {
  reverse: false,
  max: 14,
  perspective: 1000,
  scale: 1.04,
  speed: 600,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const floatingBadges = [
  { icon: <FaReact className="text-cyan-400 text-lg" />, label: "React", top: "8%",  right: "-14%", delay: 0 },
  { icon: <FaNodeJs className="text-green-400 text-lg" />, label: "Node",  bottom: "12%", left: "-14%", delay: 0.5 },
  { icon: <SiMongodb className="text-emerald-400 text-lg" />, label: "Mongo", top: "55%", right: "-18%", delay: 1 },
];

// Stagger children
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageY  = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: HERO_TITLE_NAME,
    jobTitle: "Full Stack MERN Developer",
    description: HERO_CONTENT,
    url: "https://sarangpachari.github.io/",
    sameAs: [
      "https://www.linkedin.com/in/sarangpachari/",
      "https://github.com/sarangpachari",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[92vh] flex items-center pb-20 pt-10 border-b border-white/[0.04]"
      aria-label="Hero section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">

        {/* ── Text side ── */}
        <motion.div
          style={{ y: textY, opacity }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div variants={stagger} initial="hidden" animate="visible" className="w-full">

            {/* Eyebrow badge */}
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-violet-400 font-semibold">
                Available for Work
              </span>
            </motion.div>

            {/* Name – display font */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[88px] font-bold leading-[1.05] tracking-tight text-white mb-4"
            >
              {HERO_TITLE_NAME}
            </motion.h1>

            {/* Animated role */}
            <motion.div variants={fadeUp} className="mb-6 h-12 lg:h-14">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",  2000,
                  "MERN Stack Expert",     2000,
                  "UI/UX Enthusiast",      2000,
                  "Freelance Developer",   2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="shimmer-text font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-neutral-400 font-light text-sm sm:text-base leading-relaxed tracking-wide mb-8"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                id="hero-contact-btn"
                href="#contact"
                className="btn-glow relative group px-8 py-3.5 rounded-full font-semibold text-sm overflow-hidden text-white"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a
                id="hero-resume-btn"
                href="https://drive.google.com/file/d/1txYcaT13n4St5jyBzSbtC6-J9dNfDyth/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover px-8 py-3.5 rounded-full font-semibold text-sm text-white flex items-center gap-2 transition-all duration-300"
              >
                View Resume
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Image side ── */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Spinning gradient ring */}
            <div className="absolute -inset-4 rounded-3xl">
              <div
                className="w-full h-full rounded-3xl animate-spin-slow opacity-30"
                style={{
                  background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)",
                  filter: "blur(18px)",
                }}
              />
            </div>

            {/* Static glow behind */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-violet-600/30 to-cyan-600/20 blur-2xl" />

            {/* 3D Tilt card */}
            <Tilt options={TILT_OPTIONS} className="relative">
              <div className="relative max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] overflow-hidden rounded-2xl border border-white/[0.1] bg-neutral-950/70 shadow-2xl">
                <motion.img
                  initial={{ filter: "grayscale(100%) brightness(0.8)" }}
                  animate={{ filter: "grayscale(30%) brightness(1)" }}
                  whileHover={{ filter: "grayscale(0%) brightness(1.05)", scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                  src={profilePic}
                  alt="Sarang P Achari – Full Stack MERN Developer"
                  loading="eager"
                  className="w-full h-auto object-cover"
                />
                {/* Glass overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-neutral-950/80 to-transparent" />
              </div>
            </Tilt>

            {/* Floating tech badges */}
            {floatingBadges.map(({ icon, label, top, bottom, left, right, delay }) => (
              <motion.div
                key={label}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
                className="absolute glass rounded-xl px-3 py-2 flex items-center gap-2 shadow-xl border border-white/[0.08] hidden sm:flex"
                style={{ top, bottom, left, right }}
              >
                {icon}
                <span className="text-xs font-semibold text-neutral-200">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-600 animate-bounce-y"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <HiChevronDown className="text-xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
