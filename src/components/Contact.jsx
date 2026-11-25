import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from 'react-icons/hi2'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { personal } from '../data/portfolioData'
import RippleButton from './RippleButton'

// Fill these in from your EmailJS dashboard: https://www.emailjs.com
const EMAILJS_SERVICE_ID = 'service_chykoo6'
const EMAILJS_TEMPLATE_ID = 'template_v7cxu6s'
const EMAILJS_PUBLIC_KEY = '9zGlHkrWpaBR3P3nU'

const contactDetails = [
  { icon: HiOutlineEnvelope, label: personal.email, href: `mailto:${personal.email}` },
  { icon: HiOutlinePhone, label: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
  { icon: HiOutlineMapPin, label: personal.location, href: null },
]

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        formRef.current?.reset()
        setTimeout(() => setStatus('idle'), 4000)
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      })
  }

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="section-eyebrow">Contact</span>
        <h2 className="section-title">
          Let's build something <span className="gradient-text">great together</span>
        </h2>
        <p className="text-textMuted">Open to full-time roles, internships and collaborations.</p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          {contactDetails.map(({ icon: Icon, label, href }) => {
            const Wrapper = href ? 'a' : 'div'
            return (
              <Wrapper
                key={label}
                href={href || undefined}
                className="glass-card p-5 flex items-center gap-4 hover:border-secondary/40"
              >
                <span className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white shrink-0">
                  <Icon size={18} />
                </span>
                <span className="text-textLight text-sm break-all">{label}</span>
              </Wrapper>
            )
          })}

          <div className="flex gap-4 pt-2">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:text-secondary"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:text-secondary"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 gradient-border glass-card p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm text-textMuted mb-1.5">Name</label>
              <input
                id="name" name="user_name" type="text" required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-textLight focus-visible:border-secondary outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-textMuted mb-1.5">Email</label>
              <input
                id="email" name="user_email" type="email" required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-textLight focus-visible:border-secondary outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm text-textMuted mb-1.5">Subject</label>
            <input
              id="subject" name="subject" type="text" required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-textLight focus-visible:border-secondary outline-none transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-textMuted mb-1.5">Message</label>
            <textarea
              id="message" name="message" rows={5} required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-textLight focus-visible:border-secondary outline-none transition-colors resize-none"
              placeholder="Tell me about the opportunity or project..."
            />
          </div>

          <RippleButton as="button" type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </RippleButton>

          {status === 'success' && (
            <p className="text-sm text-secondary">Message sent — thanks for reaching out! I'll reply soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400">
              Something went wrong. Add your EmailJS service, template and public key in Contact.jsx, or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
