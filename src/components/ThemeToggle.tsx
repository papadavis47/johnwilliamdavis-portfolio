'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { css } from '../../styled-system/css'

const buttonStyles = css({
  cursor: 'pointer',
  padding: '2',
  borderRadius: 'md',
  border: 'none',
  backgroundColor: 'transparent',
  color: 'text',
  transition: 'background-color 200ms',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  _hover: {
    backgroundColor: 'surface',
  },
})

const iconStyles = css({
  width: '5',
  height: '5',
})

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className={buttonStyles} aria-label="Toggle theme" disabled>
        <div className={iconStyles} />
      </button>
    )
  }

  const cycleTheme = () => {
    if (theme === 'system') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('system')
    }
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      className={buttonStyles}
      onClick={cycleTheme}
      aria-label={`Current theme: ${theme}. Click to toggle.`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? 'dark' : 'light'}
          initial={{ rotate: -90, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          exit={{ rotate: 90, scale: 0 }}
          transition={{ duration: 0.2 }}
          className={iconStyles}
        >
          {isDark ? <Moon size={20} /> : <Sun size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
