import { useEffect } from "react";
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 35, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-concrete text-ink antialiased">

      {/* ── Scroll progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-50 bg-accent"
        style={{ scaleX }}
      />

      {/* ── Grid background ── */}
      <div className="fixed inset-0 -z-10 grid-bg" aria-hidden="true" />

      {/* ── Page content ── */}
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-6 lg:px-12 max-w-6xl">
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
