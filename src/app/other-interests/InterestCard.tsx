'use client'

import { type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { css } from '../../styled-system/css'
import { merriweather } from '@/app/fonts'

interface InterestCardProps {
  icon: LucideIcon
  title: string
  delay?: number
  children: React.ReactNode
}

const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
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
      className={css({
        bg: 'surface',
        borderRadius: '12px',
        p: '8',
        border: '1px solid',
        borderColor: 'muted/20',
      })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '3',
          mb: '4',
        })}
      >
        <Icon size={28} className={css({ color: 'secondary' })} />
        <h2
          className={`${merriweather.className} ${css({
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'text',
          })}`}
        >
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  )
}
