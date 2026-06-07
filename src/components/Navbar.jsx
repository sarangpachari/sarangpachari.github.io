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
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sarangpachari/", label: "LinkedIn",  hoverColor: "#0077B5" },
  { icon: FaGithub,   href: "https://github.com/sarangpachari",            label: "GitHub",   hoverColor: "#ffffff" },
  { icon: FaWhatsapp, href: "https://wa.me/+917012981845",                  label: "WhatsApp", hoverColor: "#25D366" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
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
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`sticky top-0 z-50 flex items-center justify-between px-6 lg:px-12 py-4 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/[0.06] shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        whileHover={{ scale: 1.08, rotate: [0, -4, 4, 0] }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 cursor-pointer"
        aria-label="Sarang P Achari – home"
      >
        <img
          src={logo}
          alt="Sarang Logo"
          className="h-9 w-auto filter brightness-125 drop-shadow-[0_0_8px_rgba(124,58,237,0.6)]"
        />
      </motion.a>

      {/* Desktop nav links */}
      <ul className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = activeSection === href.replace("#", "");
          return (
            <li key={href}>
              <a
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-white/[0.06] border border-white/[0.1]"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Socials */}
      <div className="flex items-center gap-1">
        {SOCIALS.map(({ icon: Icon, href, label, hoverColor }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ y: -3, color: hoverColor }}
            className="p-2.5 rounded-xl text-neutral-400 hover:bg-white/[0.05] transition-all duration-200 text-xl"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
