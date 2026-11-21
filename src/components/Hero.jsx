import { useRef } from "react";
import { HERO_CONTENT, HERO_TITLE_NAME } from "../constants";
import profilePic from "../assets/sarangProfile.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiChevronDown } from "react-icons/hi";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY   = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
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
      className="relative min-h-[90vh] flex items-center pb-20 pt-10 section-border"
      aria-label="Hero section"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12">

        {/* ── Text side ── */}
        <motion.div
          style={{ y: textY, opacity }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <motion.div variants={stagger} initial="hidden" animate="visible" className="w-full">

            {/* Status badge */}
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-accent" style={{ animation: "cursor-blink 1.2s infinite" }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
                Available for Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-mono text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1] tracking-tighter text-ink mb-4"
            >
              {HERO_TITLE_NAME}
            </motion.h1>

            {/* Animated role */}
            <motion.div variants={fadeUp} className="mb-6 h-12 lg:h-14">
              <TypeAnimation
                sequence={[
                  "Software Engineer",  2000,
                  "Full Stack Engineer",     2000,
                  "Frontend Engineer",      2000,
                  "React.js Developer",   2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono text-xl sm:text-2xl lg:text-3xl font-bold text-accent"
                cursor={true}
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="max-w-xl text-ink/70 font-body text-sm sm:text-base leading-relaxed mb-8"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                id="hero-contact-btn"
                href="#contact"
                className="brutal-btn brutal-btn-primary"
              >
                Get In Touch →
              </a>

              <a
                id="hero-projects-btn"
                href="#projects"
                className="brutal-btn brutal-btn-secondary"
              >
                Explore Works ↗
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Image side ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Hard shadow frame */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-ink" />
            <div className="relative max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] overflow-hidden border-3 border-ink bg-concrete">
              <img
                src={profilePic}
                alt="Sarang P Achari – Full Stack MERN Developer"
                loading="eager"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              {/* Terminal-style label */}
              <div className="absolute bottom-0 left-0 right-0 bg-ink text-concrete font-mono text-[10px] px-3 py-2 tracking-wider">
                <span className="text-accent">$</span> whoami → sarang_pachari
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hidden md:absolute bottom-0 md:bottom-6 left-1/2 -translate-x-1/2 md:flex flex-col items-center gap-1 text-ink/40"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <HiChevronDown className="text-xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
