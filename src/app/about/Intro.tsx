'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { link } from 'styled-system/recipes'
import { itemVariants } from './skill-data'
import { introParagraphs } from './content'

export default function Intro() {
  return (
    <motion.section
      variants={itemVariants}
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '4',
        maxWidth: 'content',
      })}
    >
      {introParagraphs.map((paragraph) => (
        <p
          key={paragraph}
          className={css({ textStyle: 'prose', color: 'text' })}
        >
          {paragraph}
        </p>
      ))}
      <p className={css({ textStyle: 'prose', color: 'text' })}>
        We have a beautiful{' '}
        <Link
          href="https://nala-the-astronaut.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className={link()}
        >
          golden retriever
        </Link>{' '}
        at home, and I spend as much free time as possible outdoors, especially
        hiking and trail running.
      </p>
    </motion.section>
  )
}
