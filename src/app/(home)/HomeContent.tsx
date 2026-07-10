'use client'

import { motion } from 'motion/react'
import PageContainer from '@/design-system/PageContainer'
import HeroIntro from './HeroIntro'

export default function HomeContent() {
  return (
    <PageContainer hero>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroIntro />
      </motion.div>
    </PageContainer>
  )
}
