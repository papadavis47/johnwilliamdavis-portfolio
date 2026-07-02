'use client'

import { motion } from 'motion/react'
import { css } from '../../styled-system/css'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className={css({ flex: 1 })}
    >
      {children}
    </motion.div>
  )
}
