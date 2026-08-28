/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#06B6D4',
        accent: '#8B5CF6',
        bgDark: '#0F172A',
        bgDark2: '#111827',
        textLight: '#F8FAFC',
        textMuted: '#94A3B8',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #06B6D4 50%, #8B5CF6 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      boxShadow: {
        glow: '0 0 40px rgba(37, 99, 235, 0.35)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.35)',
        'glow-violet': '0 0 40px rgba(139, 92, 246, 0.35)',
        card: '0 8px 32px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        gradientShift: 'gradientShift 8s ease infinite',
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundSize: {
        200: '200% 200%',
      },
    },
  },
  plugins: [],
}
