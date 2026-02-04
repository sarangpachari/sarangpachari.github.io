import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center text-3xl font-light tracking-tight"
      >
        Get In <span className="text-neutral-500">Touch</span>
      </motion.h2>

      <div className="flex flex-col items-center gap-8 text-center bg-neutral-900/10 p-12 rounded-3xl border border-neutral-800/50 backdrop-blur-sm max-w-2xl mx-auto shadow-2xl">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center justify-center gap-4 text-neutral-400 group">
            <div className="p-3 bg-neutral-800/50 rounded-xl border border-neutral-700/30 group-hover:border-purple-500/50 transition-colors">
              <FaMapMarkerAlt className="text-purple-400" />
            </div>
            <p className="text-sm lg:text-base tracking-wide">{CONTACT.address}</p>
          </div>

          <div className="flex items-center justify-center gap-4 text-neutral-400 group">
            <div className="p-3 bg-neutral-800/50 rounded-xl border border-neutral-700/30 group-hover:border-cyan-500/50 transition-colors">
              <FaPhoneAlt className="text-cyan-400" />
            </div>
            <p className="text-sm lg:text-base tracking-wide"><a href="tel:+917012981845">{CONTACT.phoneNo}</a></p>
          </div>

          <div className="flex items-center justify-center gap-4 group">
            <div className="p-3 bg-neutral-800/50 rounded-xl border border-neutral-700/30 group-hover:border-pink-500/50 transition-colors">
              <FaEnvelope className="text-pink-400" />
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-sm lg:text-lg text-neutral-300 hover:text-white transition-colors border-b border-neutral-700 hover:border-white pb-1"
            >
              {CONTACT.email}
            </a>
          </div>
        </motion.div>

        <motion.p
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="mt-8 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-xl lg:text-2xl font-semibold tracking-tight leading-relaxed max-w-md mx-auto"
        >
          Let's collaborate and turn your ideas into digital reality!
        </motion.p>
      </div>
    </section>
  );
};

export default Contact;
