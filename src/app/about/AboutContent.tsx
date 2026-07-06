'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { merriweather } from '@/app/fonts'
import { containerVariants, itemVariants } from './skill-data'
import Intro from './Intro'
import Skills from './Skills'
import Technologies from './Technologies'

export default function AboutContent() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={css({
        maxWidth: '800px',
        mx: 'auto',
        px: '4',
        py: '12',
        md: { py: '16' },
      })}
    >
      <motion.h1
        variants={itemVariants}
        className={`${merriweather.className} ${css({
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'text',
          mb: '8',
          md: { fontSize: '3rem' },
        })}`}
      >
        About
      </motion.h1>

      <Intro />
      <Skills />
      <Technologies />
    </motion.main>
  )
}
