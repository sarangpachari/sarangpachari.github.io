import aboutImg from "../assets/sarang_coding.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from "react-icons/fa";

const About = () => {
  // JSON-LD for Search Engines
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Sarang P Achari",
      "description": ABOUT_TEXT,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kochi",
        "addressRegion": "Kerala",
        "addressCountry": "India"
      },
      "knowsAbout": ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "Full Stack Development"]
    }
  };

  return (
    <section id="about" className="border-b border-neutral-900 pb-20 lg:pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl lg:text-5xl font-light tracking-tight"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap items-center">
        {/* Visual Element Side */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 lg:p-12 mb-10 lg:mb-0"
        >
          <div className="relative group flex items-center justify-center">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500 -z-10 animate-pulse"></div>

            <img
              className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full max-w-sm border border-neutral-800"
              src={aboutImg}
              alt="Sarang P Achari - Full Stack Developer"
              loading="lazy"
            />

            {/* Skill Mini-Cards (Floating) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 lg:-right-4 p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl hidden sm:block"
            >
              <FaCode className="text-cyan-400 text-3xl" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 lg:-left-4 p-4 bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl hidden sm:block"
            >
              <FaDatabase className="text-purple-400 text-3xl" />
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content Side */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col gap-6 px-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors">
                <FaServer className="mb-2 text-pink-400" />
                <h3 className="text-sm font-semibold">Backend</h3>
                <p className="text-xs text-neutral-400">Node & Express</p>
              </div>
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors">
                <FaMobileAlt className="mb-2 text-orange-400" />
                <h3 className="text-sm font-semibold">Frontend</h3>
                <p className="text-xs text-neutral-400">React & Tailwind</p>
              </div>
            </div>

            <p className="text-neutral-300 font-light text-base leading-relaxed whitespace-pre-line tracking-wide">
              {ABOUT_TEXT}
            </p>

            <div className="pt-4">
              <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
                Open for Opportunities
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
