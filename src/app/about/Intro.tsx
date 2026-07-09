'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { itemVariants } from './skill-data'

export default function Intro() {
  return (
    <motion.section
      variants={itemVariants}
      className={css({
        mb: '12',
      })}
    >
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '4',
        })}
      >
        I wrote my first lines of code in 2017, drawn to programming as a craft
        I could grow with and never fully master. I&apos;m driven to build
        software and tools that add to people&apos;s happiness and quality of
        life.
      </p>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '4',
        })}
      >
        I work mostly in TypeScript, building with Next.js or TanStack. Outside
        of web projects, I usually reach for Rust or Python. For static web
        sites, Astro is my current framework of choice.
      </p>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '4',
        })}
      >
        Outside of my work, I am a happily married father of three teenage
        children. We have a beautiful golden retriever at home, and I spend as
        much free time as possible outdoors, especially hiking and trail
        running.
      </p>
    </motion.section>
  )
}
