'use client'

import { type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { css, cx } from 'styled-system/css'
import { card } from 'styled-system/recipes'

interface InterestCardProps {
  icon: LucideIcon
  title: string
  delay?: number
  children: React.ReactNode
}

// Tighter than the recipe's 24px on phones so nested content (book cards)
// has room; text and cards keep sharing one left edge.
const panel = css({ p: { base: '4', md: '8' } })

const sectionAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export default function InterestCard({
  icon: Icon,
  title,
  delay = 0,
  children,
}: InterestCardProps) {
  return (
    <motion.section
      {...sectionAnimation}
      transition={{ duration: 0.5, delay }}
      className={cx(card(), panel)}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '3',
          mb: '4',
        })}
      >
        <Icon size={28} className={css({ color: 'accent' })} />
        <h2 className={css({ textStyle: 'h2', color: 'text' })}>{title}</h2>
      </div>
      {children}
    </motion.section>
  )
}
