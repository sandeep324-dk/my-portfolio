import { motion } from 'framer-motion'
import { skillCategories } from '../data/portfolioData'

function SkillBar({ skill, index }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5 text-sm">
        <span className="text-textLight font-medium">{skill.name}</span>
        <span className="text-textMuted">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.08, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-primary shadow-glow"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">
          My <span className="gradient-text">technical toolkit</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            whileHover={{ rotateX: 2, rotateY: -2 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="glass-card p-6 space-y-5"
          >
            <h3 className="font-display font-semibold text-lg text-secondary mb-2">{category.title}</h3>
            {category.skills.map((skill, i) => (
              <SkillBar skill={skill} index={i} key={skill.name} />
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
