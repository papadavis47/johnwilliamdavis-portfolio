'use client'

import { motion } from 'motion/react'
import { css } from '../../styled-system/css'
import HeroIntro from '@/components/HeroIntro'

export default function HomeContent() {
  return (
    <main
      className={css({
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        px: '4',
        pt: '12',
        pb: '12',
        sm: { pt: '24' },
        md: { pt: '32' },
        bg: 'bg',
      })}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={css({
          textAlign: 'left',
          maxWidth: '700px',
        })}
      >
        <HeroIntro />
      </motion.div>
    </main>
  )
}
