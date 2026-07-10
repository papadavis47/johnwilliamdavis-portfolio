'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { itemVariants } from './skill-data'

export default function Skills() {
  return (
    <motion.section variants={itemVariants}>
      <h2
        className={css({
          textStyle: 'h2',
          color: 'text',
          mb: '6',
        })}
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
        Panda CSS for styling.
      </p>
    </motion.section>
  )
}
