import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

const SOCIALS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sarangpachari/", label: "LinkedIn"  },
  { icon: FaGithub,   href: "https://github.com/sarangpachari",            label: "GitHub"   },
  { icon: FaWhatsapp, href: "https://wa.me/+917012981845",                  label: "WhatsApp" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-10 border-t-3 border-ink bg-ink text-concrete">

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left: credit */}
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs font-bold uppercase tracking-widest">
            © {currentYear} Sarang P Achari
          </p>
          <p className="font-mono text-[10px] text-concrete/50 tracking-wider">
            Full Stack MERN Developer · Kochi, India
          </p>
        </div>

        {/* Center: socials */}
        <div className="flex gap-2">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank" rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 border-2 border-concrete/30 text-concrete/60 hover:text-accent hover:border-accent transition-all duration-200 text-lg"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Right: back to top */}
        <a
          href="#hero"
          aria-label="Back to top"
          className="p-2.5 border-2 border-concrete/30 text-concrete/60 hover:text-accent hover:border-accent transition-all duration-200"
        >
          <HiArrowUp className="text-lg" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
