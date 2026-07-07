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
        I enjoy working across the full stack, from crafting intuitive user
        interfaces with React and Vue to designing scalable backend services and
        working with databases. I love exploring new technologies and tools.
      </p>
    </motion.section>
  )
}
