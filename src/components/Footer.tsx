'use client'

import { css } from '../../styled-system/css'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'motion/react'

const socialLinks = [
  { href: 'https://github.com/papadavis47', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/johnwilliamdavis47', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:jwdavisdeveloper@gmail.com', icon: Mail, label: 'Email' },
]

function Footer() {
  return (
    <footer className={css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      padding: '2rem',
      borderTop: '1px solid',
      borderColor: 'muted/20',
      bg: 'surface',
      color: 'muted',
    })}>
      <div className={css({
        display: 'flex',
        gap: '1.5rem',
      })}>
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            aria-label={label}
            className={css({
              color: 'muted',
              transition: 'color 300ms',
              _hover: {
                color: 'primary',
              },
            })}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={22} />
          </motion.a>
        ))}
      </div>
      <p className={css({
        fontSize: '0.875rem',
        fontFamily: 'merriweather',
      })}>
        © 2025 John William Davis
      </p>
    </footer>
  )
}

export default Footer
