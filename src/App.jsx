import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { motion, useScroll, useSpring } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 origin-left z-50 capitalize shadow-[0_0_15px_rgba(168,85,247,0.5)]"
        style={{ scaleX }}
      />

      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Background System */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-neutral-950">
        {/* Main Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

        {/* Animated Background Blobs */}
        <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[140px] animate-pulse delay-700" />
        <div className="absolute top-[40%] right-[20%] w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
