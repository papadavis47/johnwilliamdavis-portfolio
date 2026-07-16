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
          maxWidth: 'content',
        })}
      >
        I work across the stack: Next.js, Astro, and TanStack on the frontend,
        with Node, Rust, and Python on the backend and in systems work.
      </p>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          maxWidth: 'content',
          mt: '4',
        })}
      >
        Lately I&apos;ve been exploring Turso, the embedded SQLite platform, and
        adopting Panda CSS, a design token system for styling.
      </p>
    </motion.section>
  )
}
