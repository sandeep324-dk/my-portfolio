import { motion } from 'framer-motion'
import {
  FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub,
} from 'react-icons/fa'
import { SiSpringboot, SiMongodb, SiMysql } from 'react-icons/si'
import { HiArrowDown } from 'react-icons/hi2'
import useTypewriter from '../hooks/useTypewriter'
import { personal } from '../data/portfolioData'
import RippleButton from './RippleButton'

const techIcons = [
  { Icon: FaJava, name: 'Java', color: '#f89820', pos: 'top-2 left-6' },
  { Icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F', pos: 'top-1/4 -right-4' },
  { Icon: FaReact, name: 'React', color: '#61DAFB', pos: 'bottom-1/3 -left-6' },
  { Icon: FaNodeJs, name: 'Node.js', color: '#68A063', pos: 'bottom-6 right-4' },
  { Icon: SiMongodb, name: 'MongoDB', color: '#4DB33D', pos: 'top-8 right-1/4' },
  { Icon: SiMysql, name: 'MySQL', color: '#4479A1', pos: 'bottom-1/4 left-1/4' },
  { Icon: FaGitAlt, name: 'Git', color: '#F05032', pos: 'top-1/2 -left-8' },
  { Icon: FaGithub, name: 'GitHub', color: '#ffffff', pos: 'bottom-2 left-1/3' },
]

export default function Hero() {
  const typed = useTypewriter(personal.roles)

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 lg:pt-20">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <div className="section-container grid lg:grid-cols-2 gap-16 items-center !py-0">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-lg text-textMuted mb-3">Hello 👋</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold leading-tight mb-4">
            I'm <span className="gradient-text">{personal.name}</span>
          </h1>
          <div className="h-10 mb-6">
            <span className="text-xl sm:text-2xl font-display font-semibold text-secondary">
              {typed}
              <span className="border-r-2 border-secondary ml-1 animate-pulse" />
            </span>
          </div>
          <p className="text-textMuted text-base sm:text-lg leading-relaxed max-w-xl mb-10">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <RippleButton as="a" href={personal.resumeUrl} download className="btn-primary">
              Download Resume
            </RippleButton>
            <RippleButton
              as="button"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              View Projects
            </RippleButton>
            <RippleButton
              as="button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline"
            >
              Hire Me
            </RippleButton>
          </div>
        </motion.div>

        {/* Right — profile + floating icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center h-[420px] sm:h-[480px]"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute -inset-3 rounded-full bg-gradient-primary bg-200 animate-gradientShift blur-md opacity-70" />
            <div className="absolute inset-0 rounded-full glass border border-white/20 flex items-center justify-center overflow-hidden">
              <img
                src="/avatar.png"
                alt="Sandeep D K"
                className="w-full h-full object-cover"
              />
            </div>

            {techIcons.map(({ Icon, name, color, pos }, i) => (
              <motion.div
                key={name}
                className={`absolute ${pos} w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center animate-float`}
                style={{ animationDelay: `${i * 0.4}s` }}
                title={name}
                whileHover={{ scale: 1.2 }}
              >
                <Icon size={22} color={color} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-textMuted hover:text-secondary transition-colors"
        aria-label="Scroll to About"
      >
        <HiArrowDown size={24} />
      </motion.button>
    </section>
  )
}
