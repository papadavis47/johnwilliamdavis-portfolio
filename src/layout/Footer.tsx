'use client'

import { css } from 'styled-system/css'
import { FileText, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { emailHref, resumeHref, socialLinks } from '@/design-system/contact'

const footerLinks = [
  ...socialLinks,
  { href: emailHref, icon: Mail, label: 'Email' },
  { href: resumeHref, icon: FileText, label: 'Resume' },
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
          // 44px tap targets (10px padding around a 24px icon); the negative
          // margin cancels that padding so the glyphs keep their old spot,
          // first one on the copyright's left edge
          className={css({
            display: 'flex',
            gap: '1',
            m: '-2.5',
          })}
        >
          {footerLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className={css({
                display: 'inline-flex',
                p: '2.5',
                color: 'text.muted',
                transition: 'color 300ms',
                _hover: {
                  color: 'accent',
                },
              })}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
        <p
          suppressHydrationWarning
          className={css({
            textStyle: 'small',
            fontFamily: 'heading',
          })}
        >
          © {new Date().getFullYear()} John William Davis
        </p>
      </div>
    </footer>
  )
}

export default Footer
