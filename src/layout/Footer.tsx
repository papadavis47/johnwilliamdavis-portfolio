'use client'

import { css } from 'styled-system/css'
import { Mail } from 'lucide-react'
import { Github, Linkedin } from '@/design-system/icons'
import { motion } from 'motion/react'

const socialLinks = [
  { href: 'https://github.com/papadavis47', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/john-william-davis/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:jwdavisdeveloper@gmail.com', icon: Mail, label: 'Email' },
]

function Footer() {
  return (
    <footer
      className={css({
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: 'border',
        bg: 'surface',
        color: 'text.muted',
      })}
    >
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '4',
          maxWidth: 'contentWide',
          mx: 'auto',
          px: '6',
          py: '8',
        })}
      >
        <div
          className={css({
            display: 'flex',
            gap: '6',
          })}
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className={css({
                color: 'text.muted',
                transition: 'color 300ms',
                _hover: {
                  color: 'accent',
                },
              })}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
        <p
          className={css({
            textStyle: 'small',
            fontFamily: 'heading',
          })}
        >
          © 2026 John William Davis
        </p>
      </div>
    </footer>
  )
}

export default Footer
