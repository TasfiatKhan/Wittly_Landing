import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#2B1B20',
          2: '#33202A',
          3: '#3D2530',
        },
        surface: {
          DEFAULT: '#3A232A',
          2: '#452A33',
        },
        accent: {
          DEFAULT: '#E0893D',
          2: '#EDA968',
        },
        gold: '#E8C97A',
        ink: {
          DEFAULT: '#FBF1E6',
          muted: '#D8C4B2',
          faint: '#A98F79',
        },
        safe: '#5A8F6B',
        playful: '#DE9AAE',
        assertive: '#E2604A',
      },
      fontFamily: {
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        ticker: 'ticker 28s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'float-badge': 'float-badge 6s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-12px) rotate(-1deg)' },
        },
        'float-badge': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.7)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
