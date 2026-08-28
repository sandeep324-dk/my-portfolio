import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiBars3, HiXMark } from 'react-icons/hi2'
import { navLinks, personal } from '../data/portfolioData'
import RippleButton from './RippleButton'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.to)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bgDark/70 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <nav className="section-container !py-0 flex items-center justify-between">
        <button
          onClick={() => scrollTo('home')}
          className="font-display font-bold text-xl tracking-tight text-textLight"
        >
          <span className="gradient-text">{personal.logo}</span>
        </button>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => scrollTo(link.to)}
                className={`nav-link ${active === link.to ? 'active text-textLight' : ''}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <RippleButton as="a" href={personal.resumeUrl} download className="btn-primary !py-2.5 !px-6 text-sm">
            Resume
          </RippleButton>
        </div>

        <button
          className="lg:hidden text-textLight"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <HiXMark size={26} /> : <HiBars3 size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-bgDark/95 backdrop-blur-xl border-t border-white/10 mt-4"
          >
            <ul className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => scrollTo(link.to)}
                    className={`block w-full text-left py-3 text-base ${
                      active === link.to ? 'text-secondary' : 'text-textMuted'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <RippleButton as="a" href={personal.resumeUrl} download className="btn-primary w-full text-sm">
                  Resume
                </RippleButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
