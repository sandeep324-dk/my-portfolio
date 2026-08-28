import { useEffect, useState } from 'react'

/**
 * Lightweight typewriter effect — cycles through a list of words,
 * typing and deleting each one. No external dependency required.
 */
export default function useTypewriter(words, { typingSpeed = 90, deletingSpeed = 45, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    const current = words[index % words.length]

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const t = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pause])

  useEffect(() => {
    setText(words[index % words.length].substring(0, subIndex))
  }, [subIndex, index, words])

  return text
}
