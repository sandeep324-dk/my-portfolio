import { motion } from 'framer-motion'
import { HiCheckBadge } from 'react-icons/hi2'
import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-eyebrow">Certifications</span>
        <h2 className="section-title">
          Verified <span className="gradient-text">learning</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass-card p-6 flex gap-4 items-start"
          >
            <span className="shrink-0 w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center text-white shadow-glow">
              <HiCheckBadge size={22} />
            </span>
            <div>
              <h3 className="font-display font-semibold text-textLight mb-1">{cert.title}</h3>
              <p className="text-textMuted text-sm">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
