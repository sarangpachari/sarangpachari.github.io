import { HERO_CONTENT, HERO_ROLE, HERO_TITLE_NAME } from "../constants";
import profilePic from "../assets/sarangProfile.png";
import { motion } from "framer-motion";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay, duration: 0.5 },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-48">
      <div className="flex gap-5 md:gap-0 flex-wrap">
        <div className="w-full flex justify-center lg:w-1/2">
          <div className="flex w-max flex-col lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-5xl sm:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              {HERO_TITLE_NAME}
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-3xl lg:text-6xl tracking-tight text-transparent"
            >
              {HERO_ROLE}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            

            <div className="flex flex-wrap gap-5">
              <motion.button
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                className="border px-4 py-3 w-max hover:text-white"
              >
                <a href="#contact">Get In Touch</a>
              </motion.button>

              <motion.button
                variants={container(2)}
                initial="hidden"
                animate="visible"
                className="border px-4 py-3 w-max hover:text-white animate-pulse"
              >
                <a href="https://drive.google.com/file/d/1pp7uW4QcEx0uPXpSByG3dv5hTT6q5Q1C/view?usp=drive_link">
                  Resume
                </a>
              </motion.button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2">
          <div className="flex justify-center">
            <motion.img
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{delay: 1.5, duration: 1}}
              src={profilePic}
              alt="Sarang.P.Achari"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
