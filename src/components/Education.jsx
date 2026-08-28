import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi2'
import { education } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-eyebrow">Education</span>
        <h2 className="section-title">
          Academic <span className="gradient-text">background</span>
        </h2>
      </motion.div>

      <div className="max-w-2xl mx-auto relative pl-10">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-primary" />
        {education.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative mb-8 last:mb-0"
          >
            <span className="absolute -left-10 top-1 w-8 h-8 rounded-full glass border border-secondary/40 flex items-center justify-center text-secondary">
              <HiAcademicCap size={16} />
            </span>
            <div className="glass-card p-6">
              <p className="text-sm text-secondary font-medium mb-1">{edu.duration}</p>
              <h3 className="font-display font-semibold text-lg text-textLight mb-1">{edu.degree}</h3>
              <p className="text-textMuted text-sm">{edu.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
