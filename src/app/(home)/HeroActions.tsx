'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { css, cx } from 'styled-system/css'
import { button } from 'styled-system/recipes'
import { emailHref, resumeHref, socialLinks } from '@/design-system/contact'

// Phones: the buttons share one width in a 2×2 grid, socials on their own
// row below. From md: one row, About dropped (see mobileOnly).
const actions = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3',
  md: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '4' },
})

// Two columns at most, one when a cell would drop below View Projects' width
// (8.75rem), e.g. 320px phones. maxWidth keeps the cells button-sized on a
// portrait tablet.
const buttons = css({
  display: 'grid',
  gridTemplateColumns:
    'repeat(auto-fit, minmax(max(8.75rem, calc(50% - token(spacing.3) / 2)), 1fr))',
  gap: '3',
  maxWidth: '26rem',
  md: { display: 'flex', flexWrap: 'wrap', gap: '4', maxWidth: 'none' },
})

// Narrower padding on phones so View Projects fits a half-width cell.
const buttonPad = css({ px: '4', md: { px: '6' } })

// About only where the header hides its links (below md, the drawer); from md
// the nav shows About anyway. Keep in step with Navigation's breakpoint.
const mobileOnly = css({ md: { display: 'none' } })

// 44px tap target: 10px padding around a 24px icon. The negative margin puts
// the first glyph on the buttons' left edge despite its padding.
const socials = css({ display: 'flex', ml: '-2.5', md: { ml: '0' } })

const socialLink = css({
  display: 'inline-flex',
  p: '2.5',
  color: 'accent',
  transition: 'color 300ms',
  _hover: { color: 'accent.hover' },
})

export default function HeroActions() {
  return (
    <div className={actions}>
      <div className={buttons}>
        <Link
          href="/projects"
          className={cx(button({ visual: 'solid', size: 'md' }), buttonPad)}
        >
          View Projects
        </Link>

        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cx(button({ visual: 'outline', size: 'md' }), buttonPad)}
        >
          View Resume
        </a>

        <Link
          href="/about"
          className={cx(
            button({ visual: 'outline', size: 'md' }),
            buttonPad,
            mobileOnly,
          )}
        >
          About
        </Link>

        <a
          href={emailHref}
          className={cx(button({ visual: 'outline', size: 'md' }), buttonPad)}
        >
          Get in touch
        </a>
      </div>

      <div className={socials}>
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={socialLink}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon size={24} />
          </motion.a>
        ))}
      </div>
    </div>
  )
}
