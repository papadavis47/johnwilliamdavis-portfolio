'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import PageContainer from '@/design-system/PageContainer'
import { containerVariants, itemVariants } from './skill-data'
import Intro from './Intro'
import Skills from './Skills'
import Technologies from './Technologies'

export default function AboutContent() {
  return (
    <PageContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '12',
        })}
      >
        <motion.h1
          variants={itemVariants}
          className={css({ textStyle: 'h1', color: 'text' })}
        >
          About
        </motion.h1>

        <Intro />
        <Skills />
        <Technologies />
      </motion.div>
    </PageContainer>
  )
}
