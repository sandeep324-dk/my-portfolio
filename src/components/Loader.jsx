import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-bgDark flex flex-col items-center justify-center gap-4"
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-white/10" />
        <div className="absolute inset-0 rounded-full border-2 border-t-secondary border-r-primary border-b-accent border-l-transparent animate-spin" />
      </div>
      <p className="font-display text-sm tracking-[0.3em] uppercase text-textMuted">Sandeep.dev</p>
    </motion.div>
  )
}
