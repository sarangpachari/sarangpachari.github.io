import logo from "../assets/sarang-logo.png";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="relative z-50 py-6 flex items-center justify-between border-b border-neutral-900/50 backdrop-blur-md sticky top-0 bg-neutral-950/20 px-4 -mx-4 lg:mx-0 lg:px-0">
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          src={logo}
          alt="Sarang Logo"
          className="mx-2 h-8 w-auto cursor-pointer filter brightness-110"
        />
      </div>

      <div className="flex items-center gap-4 lg:gap-6 text-xl lg:text-2xl">
        <motion.a
          whileHover={{ y: -4, color: "#0077B5" }}
          href="https://www.linkedin.com/in/sarangpachari/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 p-2 hover:bg-neutral-800/50 rounded-full transition-all"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, color: "#FFF" }}
          href="https://github.com/sarangpachari"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 p-2 hover:bg-neutral-800/50 rounded-full transition-all"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, color: "#25D366" }}
          href="https://wa.me/+917012981845"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 p-2 hover:bg-neutral-800/50 rounded-full transition-all"
        >
          <FaWhatsapp />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
