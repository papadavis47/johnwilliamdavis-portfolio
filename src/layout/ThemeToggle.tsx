'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'
import { css } from 'styled-system/css'

const buttonStyles = css({
  cursor: 'pointer',
  // 12px around a 20px glyph = a 44px target, matching the menu button beside
  // it. Invisible at rest (transparent bg); only the hover chip shows the box.
  padding: '3',
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

function ThemeToggle() {
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

  return (
    <button
      className={buttonStyles}
      onClick={() => setTheme(nextTheme)}
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
          {/* The glyph is the destination, not the current state, matching the
              aria-label: a moon in light mode means "tap for dark". */}
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

export default ThemeToggle
