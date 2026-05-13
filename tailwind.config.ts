import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0F0E0C',
          2: '#151410',
          3: '#1C1A16',
        },
        surface: {
          DEFAULT: '#232018',
          2: '#2B2720',
        },
        accent: {
          DEFAULT: '#C4956A',
          2: '#D4A574',
        },
        gold: '#E8C97A',
        ink: {
          DEFAULT: '#F0EBE3',
          muted: '#B8AFA4',
          faint: '#7A7168',
        },
        safe: '#5A8F6B',
        playful: '#7B6FA8',
        assertive: '#B85C4A',
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
