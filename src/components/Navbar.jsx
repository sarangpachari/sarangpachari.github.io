import logo from "../assets/sarang-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between pt-5">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 h-6" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sarangpachari/">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <FaLinkedin />
          </motion.div>
        </a>

        <a href="https://github.com/sarangpachari">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaGithub />
          </motion.div>
        </a>

        <a href="">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FaInstagram />
          </motion.div>
        </a>

        <a href="https://wa.me/+917012981845">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <FaWhatsapp />
          </motion.div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
