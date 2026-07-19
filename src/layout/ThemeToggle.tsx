'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { css } from 'styled-system/css'

const buttonStyles = css({
  cursor: 'pointer',
  padding: '2',
  borderRadius: 'control',
  border: 'none',
  backgroundColor: 'transparent',
  color: 'text',
  transition: 'background-color 200ms',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // The nav is already `surface`, so the hover chip needs `border` to register.
  _hover: {
    backgroundColor: 'border',
  },
})

const iconStyles = css({
  width: '5',
  height: '5',
})

type ThemeToggleProps = {
  onToggle?: () => void
}

function ThemeToggle({ onToggle }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    // Mount guard: avoids next-themes hydration mismatch by deferring
    // theme-dependent render to the client. Intentional one-shot setState.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className={buttonStyles} aria-label="Toggle theme" disabled>
        <div className={iconStyles} />
      </button>
    )
  }

  const isDark = resolvedTheme === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'

  const toggleTheme = () => {
    setTheme(nextTheme)
    onToggle?.()
  }

  return (
    <button
      className={buttonStyles}
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme} theme`}
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
