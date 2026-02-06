'use client'

import { motion } from 'motion/react'
import { css } from '../../../styled-system/css'
import type { Skill } from './skill-data'
import { itemVariants } from './skill-data'

export default function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = skill.icon
  return (
    <motion.div
      variants={itemVariants}
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '2',
        px: '4',
        py: '2',
        bg: 'surface',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'muted/20',
        transition: 'all 200ms',
        _hover: {
          borderColor: 'primary',
          transform: 'translateY(-2px)',
        },
      })}
    >
      <Icon size={18} className={css({ color: 'primary', flexShrink: 0 })} />
      <span
        className={css({
          fontSize: '0.9rem',
          color: 'text',
          whiteSpace: 'nowrap',
        })}
      >
        {skill.name}
      </span>
    </motion.div>
  )
}
