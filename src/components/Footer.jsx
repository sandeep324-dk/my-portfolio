import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import { navLinks, personal } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="section-container !py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <button onClick={() => scrollTo('home')} className="font-display font-bold text-lg gradient-text">
          {personal.logo}
        </button>

        <ul className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button onClick={() => scrollTo(link.to)} className="text-sm text-textMuted hover:text-secondary transition-colors">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-textMuted hover:text-secondary transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-textMuted hover:text-secondary transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email" className="text-textMuted hover:text-secondary transition-colors">
            <HiOutlineEnvelope size={18} />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-textMuted pb-8">
        © {year} {personal.name}. All rights reserved. · Designed &amp; developed by {personal.name} ❤️
      </div>
    </footer>
  )
}
