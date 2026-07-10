'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { button } from 'styled-system/recipes'

const paragraphs = [
  'I live in the Greater Seattle area.',
  'TypeScript, Rust and Python are my primary programming languages.',
  'Zed, Claude Code and Amp are my developer tools of choice.',
  'Things are shifting fast in 2026, and my main skill now is being nimble enough to adapt to new ways of building software.',
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
          gap: '4',
          mb: '10',
        })}
      >
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className={css({ textStyle: 'prose', color: 'text.muted' })}
          >
            {paragraph}
          </p>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={css({
          display: 'flex',
          flexDirection: 'row',
          gap: '3',
          alignItems: 'flex-start',
          sm: { gap: '4' },
        })}
      >
        <Link
          href="/projects"
          className={button({ visual: 'solid', size: 'md' })}
        >
          View Projects
        </Link>

        <Link href="/about" className={button({ visual: 'outline', size: 'md' })}>
          About
        </Link>
      </motion.div>
    </>
  )
}
