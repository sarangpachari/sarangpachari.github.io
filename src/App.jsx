import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 35, restDelta: 0.001 });

  // Parallax orb positions
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  // Cursor glow
  const cursorRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased bg-[#0a0a0f]">

      {/* ── Cursor glow ── */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] rounded-full mix-blend-screen"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: 380,
          height: 380,
          transform: "translate(-50%,-50%)",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          transition: "left 0.08s linear, top 0.08s linear",
        }}
      />

      {/* ── Scroll progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #7c3aed, #06b6d4, #ec4899)",
          boxShadow: "0 0 16px rgba(124,58,237,0.8)",
        }}
      />

      {/* ── Animated aurora background ── */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Base */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />

        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.18),transparent)]" />

        {/* Parallax orbs */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[5%] left-[8%] w-[600px] h-[600px] rounded-full"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-full bg-violet-700/20 blur-[140px] animate-aurora" />
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="absolute top-[40%] right-[5%] w-[500px] h-[500px] rounded-full"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-full bg-cyan-600/15 blur-[120px] animate-aurora [animation-delay:6s]" />
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-[10%] left-[25%] w-[400px] h-[400px] rounded-full"
          aria-hidden="true"
        >
          <div className="w-full h-full rounded-full bg-pink-600/10 blur-[100px] animate-aurora [animation-delay:12s]" />
        </motion.div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />

        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.025] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* ── Page content ── */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-6 lg:px-12">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
