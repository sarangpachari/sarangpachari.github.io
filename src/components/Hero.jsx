import { HERO_CONTENT, HERO_ROLE, HERO_TITLE_NAME } from "../constants";
import profilePic from "../assets/sarangProfile2.png";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const container = (delay) => ({
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.8, ease: "easeOut" },
  },
});

const Hero = () => {
  // JSON-LD for AEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": HERO_TITLE_NAME,
    "jobTitle": HERO_ROLE,
    "description": HERO_CONTENT,
    "url": window.location.href,
  };

  return (
    <section id="hero" className="border-b border-neutral-900 pb-16 lg:mb-24 pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-5xl sm:text-6xl font-extralight tracking-tight lg:mt-8 lg:text-7xl xl:text-8xl text-white"
            >
              {HERO_TITLE_NAME}
            </motion.h1>

            <motion.div
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="h-12 lg:h-16"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'MERN Stack Expert',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Freelance Developer',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                  bg-clip-text text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-transparent font-medium"
              />
            </motion.div>

            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-6 max-w-xl text-neutral-400 font-light text-sm sm:text-base lg:text-lg leading-relaxed tracking-wide"
            >
              {HERO_CONTENT}
            </motion.p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <motion.a
                variants={container(0.9)}
                initial="hidden"
                animate="visible"
                href="#contact"
                className="relative group px-8 py-3 bg-white text-black rounded-full font-semibold transition-all duration-300 hover:bg-neutral-200 overflow-hidden"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
              </motion.a>

              <motion.a
                variants={container(1.1)}
                initial="hidden"
                animate="visible"
                href="https://drive.google.com/file/d/1txYcaT13n4St5jyBzSbtC6-J9dNfDyth/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border border-neutral-700 rounded-full text-white font-medium hover:bg-neutral-900 transition-all duration-300 flex items-center gap-2"
              >
                Resume
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group"
          >
            {/* Animated Ring Around Image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

            <div className="relative max-w-xs sm:max-w-sm lg:max-w-md overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
              <motion.img
                initial={{ filter: "grayscale(100%)" }}
                animate={{ filter: "grayscale(20%)" }}
                whileHover={{ filter: "grayscale(0%)", scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={profilePic}
                alt={HERO_TITLE_NAME}
                loading="eager"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
