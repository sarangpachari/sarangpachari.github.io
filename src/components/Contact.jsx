import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const fadeUp  = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } },
};

const CONTACT_ITEMS = [
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: CONTACT.address,
    href: null,
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.3)",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: CONTACT.phoneNo,
    href: "tel:+917012981845",
    color: "#34d399",
    glow: "rgba(52,211,153,0.3)",
  },
  {
    icon: FaEnvelope,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    color: "#f472b6",
    glow: "rgba(244,114,182,0.3)",
  },
];

const SOCIALS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sarangpachari/", label: "LinkedIn",  color: "#0077B5" },
  { icon: FaGithub,   href: "https://github.com/sarangpachari",            label: "GitHub",   color: "#ffffff" },
  { icon: FaWhatsapp, href: "https://wa.me/+917012981845",                  label: "WhatsApp", color: "#25D366" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 border-b border-white/[0.04]" aria-label="Contact Sarang">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-violet-400 font-semibold">Reach Out</span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3">
          Get In <span className="shimmer-text">Touch</span>
        </h2>
      </motion.div>

      {/* Aurora banner card */}
      <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-40"
          style={{ background: "linear-gradient(135deg, #7c3aed40, #06b6d440, #ec489930)" }} />

        <div className="relative glass rounded-3xl border border-white/[0.08] p-10 lg:p-14 text-center">
          {/* Big headline */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-display text-2xl lg:text-3xl font-bold shimmer-text mb-10 leading-snug"
          >
            Let's build something great together
          </motion.p>

          {/* Contact info */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
          >
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, color, glow }) => (
              <motion.div key={label} variants={fadeUp}
                className="glass glass-hover rounded-2xl p-5 flex flex-col items-center gap-3 min-w-[150px] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 group"
              >
                <div
                  className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${glow}20`, boxShadow: `0 0 20px ${glow}` }}
                >
                  <Icon style={{ color }} className="text-xl" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-xs text-neutral-300 hover:text-white transition-colors font-medium">
                      {value}
                    </a>
                  ) : (
                    <p className="text-xs text-neutral-300 font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.a
            id="contact-email-btn"
            href={`mailto:${CONTACT.email}`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn-glow inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-sm text-white mb-8"
            style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
          >
            <FaEnvelope />
            Send Me an Email
          </motion.a>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/[0.06]" />
            <span className="text-[10px] uppercase tracking-widest text-neutral-600">or connect on</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {SOCIALS.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank" rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="p-3.5 glass glass-hover rounded-xl border border-white/[0.06] text-neutral-400 hover:text-white transition-all duration-200 text-xl"
                style={{ "--hover-color": color }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
