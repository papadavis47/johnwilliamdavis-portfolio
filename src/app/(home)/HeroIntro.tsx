'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { button } from 'styled-system/recipes'
import { Github, Linkedin } from '@/design-system/icons'
import TerminalCard from './TerminalCard'

const positioning =
  'I care most about building software that adds health and happiness to people’s lives. My projects include a legacy vault for fathers, a guilt-free eating tracker, and training tools that live in the terminal. Things are shifting fast in the software industry. My main skill now is adapting to change.'

const socialLinks = [
  { href: 'https://github.com/papadavis47', icon: Github, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/john-william-davis/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
]

export default function HeroIntro() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={css({
          textStyle: 'display',
          color: 'text',
          mb: '3',
        })}
      >
        John William Davis
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={css({
          textStyle: 'subtitle',
          color: 'text.muted',
          mb: '8',
        })}
      >
        Software Engineer
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '6',
          mb: '10',
          maxWidth: 'content',
        })}
      >
        <p className={css({ textStyle: 'prose', color: 'text.muted' })}>
          {positioning}
        </p>
        <TerminalCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={css({
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '3',
          alignItems: 'center',
          sm: { gap: '4' },
        })}
      >
        <Link
          href="/projects"
          className={button({ visual: 'solid', size: 'md' })}
        >
          View Projects
        </Link>

        <Link
          href="/about"
          className={button({ visual: 'outline', size: 'md' })}
        >
          About
        </Link>

        <a
          href="mailto:jwdavisdeveloper@gmail.com"
          className={button({ visual: 'outline', size: 'md' })}
        >
          Get in touch
        </a>

        <div className={css({ display: 'flex', gap: '5', ml: '2' })}>
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={css({
                color: 'text.muted',
                transition: 'color 300ms',
                _hover: { color: 'accent' },
              })}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </>
  )
}
