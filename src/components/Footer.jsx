import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi";

const SOCIALS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sarangpachari/", label: "LinkedIn"  },
  { icon: FaGithub,   href: "https://github.com/sarangpachari",            label: "GitHub"   },
  { icon: FaWhatsapp, href: "https://wa.me/+917012981845",                  label: "WhatsApp" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-white/[0.04]">
      {/* Gradient glow line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(6,182,212,0.4), transparent)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-12 flex flex-col items-center gap-6">
        {/* Social links */}
        <div className="flex gap-3">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank" rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ y: -3, scale: 1.12 }}
              className="p-2.5 glass rounded-xl text-neutral-500 hover:text-neutral-200 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-200 text-lg"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Credit */}
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-neutral-600 text-[11px] uppercase tracking-[0.2em] font-medium">
            © {currentYear} Sarang P Achari
          </p>
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-neutral-800" />
            <p className="text-neutral-700 text-[10px] italic font-light tracking-wide">
              Full Stack MERN Developer · Kochi, India
            </p>
            <div className="h-px w-6 bg-neutral-800" />
          </div>
        </div>

        {/* Back to top */}
        <motion.a
          href="#hero"
          aria-label="Back to top"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="p-2.5 glass rounded-xl text-neutral-500 hover:text-violet-400 border border-white/[0.05] hover:border-violet-500/30 transition-all duration-200"
        >
          <HiArrowUp className="text-lg" />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;