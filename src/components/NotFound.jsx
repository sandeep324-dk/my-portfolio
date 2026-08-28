import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RippleButton from './RippleButton'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-7xl sm:text-8xl font-display font-extrabold gradient-text mb-4"
      >
        404
      </motion.h1>
      <p className="text-textMuted max-w-md mb-8">
        This page wandered off somewhere between the frontend and the backend. Let's get you home.
      </p>
      <RippleButton as={Link} to="/" className="btn-primary">
        Back to Home
      </RippleButton>
    </section>
  )
}
