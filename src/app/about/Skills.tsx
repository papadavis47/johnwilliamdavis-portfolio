'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { merriweather } from '@/app/fonts'
import { itemVariants } from './skill-data'

export default function Skills() {
  return (
    <motion.section
      variants={itemVariants}
      className={css({
        mb: '12',
      })}
    >
      <h2
        className={`${merriweather.className} ${css({
          fontSize: '1.75rem',
          fontWeight: '700',
          color: 'text',
          mb: '8',
          md: { fontSize: '2rem' },
        })}`}
      >
        Skills
      </h2>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
        })}
      >
        I work across the stack — Next.js, Astro, and TanStack on the frontend,
        with Node, Rust, and Python for backend and systems work. Lately
        I&apos;ve been digging into Tailwind v4&apos;s design token system and
        Pigment CSS for styling.
      </p>
    </motion.section>
  )
}
