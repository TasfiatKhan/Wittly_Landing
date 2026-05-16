'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextValue {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('witly-theme')
    const dark = stored ? stored === 'dark' : false
    setIsDark(dark)
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [])

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev
      localStorage.setItem('witly-theme', next ? 'dark' : 'light')
      document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
