'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { css } from '../../styled-system/css'
import { merriweather } from '@/app/fonts'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/interests', label: 'Interests' },
]

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={css({
        position: 'sticky',
        top: 0,
        zIndex: 100,
        bg: 'surface',
        borderBottom: '1px solid',
        borderColor: 'muted/20',
      })}
    >
      <nav
        aria-label="Main navigation"
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          mx: 'auto',
          px: '4',
          py: '3',
        })}
      >
        <Link
          href="/"
          className={`${merriweather.className} ${css({
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'text',
            textDecoration: 'none',
            transition: 'color 200ms',
            _hover: { color: 'primary' },
          })}`}
        >
          John William Davis
        </Link>

        <div
          className={css({
            display: 'none',
            alignItems: 'center',
            gap: '6',
            md: { display: 'flex' },
          })}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={css({
                color: 'text',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 200ms',
                _hover: { color: 'primary' },
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
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={css({
              overflow: 'hidden',
              bg: 'surface',
              borderTop: '1px solid',
              borderColor: 'muted/20',
              md: { display: 'none' },
            })}
          >
            <div
              className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
                px: '4',
                py: '4',
              })}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={css({
                    color: 'text',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    py: '2',
                    transition: 'color 200ms',
                    _hover: { color: 'primary' },
                  })}
                >
                  {link.label}
                </Link>
              ))}
              <div className={css({ pt: '2' })}>
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navigation
