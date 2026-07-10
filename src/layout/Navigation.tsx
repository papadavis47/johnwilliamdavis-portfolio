'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { css } from 'styled-system/css'
import ThemeToggle from '@/layout/ThemeToggle'
import BrandLink from '@/layout/BrandLink'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/interests', label: 'Interests' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const filteredNavLinks = navLinks.filter((link) => link.href !== pathname)

  return (
    <header
      className={css({
        position: 'sticky',
        top: 0,
        zIndex: 100,
        height: 'navHeight',
        bg: 'surface',
        // Longhands, not `borderBottom: '1px solid'` + `borderColor` — Panda
        // emits the directional shorthand last, resetting the color to
        // currentColor (a near-white hairline in dark mode).
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'border',
      })}
    >
      <nav
        aria-label="Main navigation"
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          maxWidth: 'contentWide',
          mx: 'auto',
          px: '6',
        })}
      >
        <BrandLink />

        <div
          className={css({
            display: 'none',
            alignItems: 'center',
            gap: '6',
            md: { display: 'flex' },
          })}
        >
          {filteredNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={css({
                color: 'text',
                textDecoration: 'none',
                fontSize: 'sm',
                transition: 'color 200ms',
                _hover: { color: 'accent' },
              })}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: '2',
            color: 'text',
            bg: 'transparent',
            border: 'none',
            cursor: 'pointer',
            md: { display: 'none' },
          })}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className={css({
                position: 'fixed',
                inset: 0,
                top: 'token(sizes.navHeight)',
                bg: 'black/40',
                zIndex: 40,
                md: { display: 'none' },
              })}
            />
            <motion.div
              id="mobile-menu"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className={css({
                position: 'fixed',
                top: 'token(sizes.navHeight)',
                left: 0,
                bottom: 0,
                width: '280px',
                bg: 'surface',
                // Elevated above the scrim, not outlined — a border here would
                // cross the header's bottom hairline at the drawer's corner.
                boxShadow: 'lifted',
                zIndex: 50,
                md: { display: 'none' },
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2',
                  px: '6',
                  py: '6',
                })}
              >
                {filteredNavLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={css({
                        display: 'block',
                        color: 'text',
                        textDecoration: 'none',
                        fontSize: 'lg',
                        py: '3',
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                        borderBottomColor: 'border',
                        transition: 'color 200ms',
                        _hover: { color: 'accent' },
                      })}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + filteredNavLinks.length * 0.05 }}
                  className={css({ pt: '4' })}
                >
                  <ThemeToggle />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation
