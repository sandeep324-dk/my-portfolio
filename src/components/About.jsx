import { motion } from 'framer-motion'
import { aboutParagraphs, aboutStats } from '../data/portfolioData'
import useCountUp from '../hooks/useCountUp'

function StatCard({ stat, index }) {
  const { ref, value } = useCountUp(stat.value)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 text-center"
    >
      <p className="text-3xl sm:text-4xl font-display font-bold gradient-text">
        {value}
        {stat.suffix}
      </p>
      <p className="text-textMuted text-sm mt-2">{stat.label}</p>
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-eyebrow">About Me</span>
        <h2 className="section-title">
          Turning ideas into <span className="gradient-text">working software</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 space-y-5"
        >
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="text-textMuted leading-relaxed">
              {p}
            </p>
          ))}
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {aboutStats.map((stat, i) => (
            <StatCard stat={stat} index={i} key={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
