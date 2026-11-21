import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const fadeUp  = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CONTACT_ITEMS = [
  { icon: FaMapMarkerAlt, label: "Location", value: CONTACT.address, href: null },
  { icon: FaPhoneAlt,     label: "Phone",    value: CONTACT.phoneNo, href: "tel:+917012981845" },
  { icon: FaEnvelope,     label: "Email",    value: CONTACT.email,   href: `mailto:${CONTACT.email}` },
];

const SOCIALS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sarangpachari/", label: "LinkedIn" },
  { icon: FaGithub,   href: "https://github.com/sarangpachari",            label: "GitHub" },
  { icon: FaWhatsapp, href: "https://wa.me/+917012981845",                  label: "WhatsApp" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 section-border" aria-label="Contact Sarang">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent font-bold">// Reach Out</span>
        <h2 className="font-mono text-4xl lg:text-5xl font-extrabold text-ink mt-2 tracking-tight">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-accent mt-3" />
      </motion.div>

      {/* Contact card */}
      <div className="max-w-3xl">
        <div className="brutal-card p-10 lg:p-14">

          {/* Big headline */}
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="font-mono text-2xl lg:text-3xl font-extrabold text-ink mb-10 leading-snug"
          >
            Let's build something<br />
            <span className="text-accent">great together.</span>
          </motion.p>

          {/* Contact info */}
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <motion.div key={label} variants={fadeUp}
                className="brutal-card p-5 flex flex-col items-center gap-3 flex-1 text-center"
              >
                <div className="p-3 border-2 border-ink bg-accent/10">
                  <Icon className="text-accent text-xl" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink/40 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="font-mono text-xs text-ink hover:text-accent transition-colors font-semibold">
                      {value}
                    </a>
                  ) : (
                    <p className="font-mono text-xs text-ink font-semibold">{value}</p>
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
            viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.5 }}
            className="brutal-btn brutal-btn-primary mb-8"
          >
            <FaEnvelope />
            Send Me an Email →
          </motion.a>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-[2px] bg-ink/10" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink/30">or connect on</span>
            <div className="flex-1 h-[2px] bg-ink/10" />
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="p-3 border-2 border-ink bg-concrete text-ink hover:bg-ink hover:text-concrete shadow-brutal-sm hover:shadow-brutal transition-all duration-150 text-xl"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
