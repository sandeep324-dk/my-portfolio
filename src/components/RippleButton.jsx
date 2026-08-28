export default function RippleButton({ as: Tag = 'button', className = '', children, onClick, ...rest }) {
  const handleClick = (e) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const ripple = document.createElement('span')
    const size = Math.max(rect.width, rect.height)

    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`
    ripple.classList.add('ripple')

    button.appendChild(ripple)
    setTimeout(() => ripple.remove(), 600)

    onClick?.(e)
  }

  return (
    <Tag className={`relative overflow-hidden ${className}`} onClick={handleClick} {...rest}>
      {children}
    </Tag>
  )
}
