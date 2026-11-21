import { useState, useEffect } from "react";
import logo from "../assets/sarang-logo.png";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

const SOCIALS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sarangpachari/", label: "LinkedIn" },
  { icon: FaGithub,   href: "https://github.com/sarangpachari",            label: "GitHub" },
  { icon: FaWhatsapp, href: "https://wa.me/+917012981845",                  label: "WhatsApp" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  // Highlight active section
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 transition-all duration-300 border-b-3 border-ink ${
        scrolled
          ? "bg-concrete/95 backdrop-blur-sm shadow-[0_4px_0_0_#111111]"
          : "bg-concrete"
      }`}
    >
      {/* Logo */}
      <a
        href="#hero"
        className="flex items-center gap-3 cursor-pointer group"
        aria-label="Sarang P Achari – home"
      >
        <img
          src={logo}
          alt="Sarang Logo"
          className="h-8 w-auto"
        />
        <span className="hidden sm:block font-mono text-xs font-bold uppercase tracking-widest text-ink">
          Sarang<span className="text-accent">.</span>
        </span>
      </a>

      {/* Desktop nav links */}
      <ul className="hidden md:flex items-center gap-0">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = activeSection === href.replace("#", "");
          return (
            <li key={href}>
              <a
                href={href}
                className={`relative px-4 py-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors duration-200 border-b-2 ${
                  isActive
                    ? "text-accent border-accent"
                    : "text-ink border-transparent hover:text-accent hover:border-accent"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Socials + Mobile toggle */}
      <div className="flex items-center gap-2">
        {SOCIALS.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 text-ink hover:text-accent transition-colors duration-200 text-lg"
          >
            <Icon />
          </a>
        ))}

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 ml-2 border-2 border-ink font-mono text-xs font-bold"
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-3 border-ink shadow-brutal md:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="border-b border-ink/10">
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-6 py-4 font-mono text-sm font-semibold uppercase tracking-wider text-ink hover:bg-accent hover:text-white transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
