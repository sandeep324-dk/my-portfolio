import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/portfolioData'

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card || window.matchMedia('(pointer: coarse)').matches) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -8
    const rotateY = ((x - rect.width / 2) / rect.width) * 8
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0)'
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card overflow-hidden group transition-transform duration-300 ease-out"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="h-44 relative overflow-hidden bg-gradient-primary bg-200 animate-gradientShift flex items-center justify-center">
        <span className="font-display font-bold text-2xl text-white/90 tracking-wide px-6 text-center">
          {project.title}
        </span>
        <div className="absolute inset-0 bg-bgDark/20 group-hover:bg-bgDark/0 transition-colors duration-300" />
      </div>

      <div className="p-6">
        <h3 className="font-display font-semibold text-xl text-textLight mb-2">{project.title}</h3>
        <p className="text-textMuted text-sm leading-relaxed mb-4">{project.description}</p>

        <ul className="space-y-1.5 mb-4">
          {project.features.map((f) => (
            <li key={f} className="text-sm text-textMuted flex gap-2">
              <span className="text-secondary mt-1">▸</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full border border-white/10 text-secondary bg-secondary/10"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/15 hover:border-secondary hover:text-secondary transition-colors"
          >
            <FaGithub /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-white hover:shadow-glow transition-shadow"
            >
              <FaExternalLinkAlt size={12} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">
          Things I've <span className="gradient-text">built</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard project={project} index={i} key={project.id} />
        ))}
      </div>
    </section>
  )
}
