'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
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
        borderRadius: 'control',
        border: '1px solid',
        borderColor: 'border',
        transition: 'border-color 200ms, transform 200ms',
        _hover: {
          borderColor: 'accent/40',
          transform: 'translateY(-2px)',
        },
      })}
    >
      <Icon size={18} className={css({ color: 'accent', flexShrink: 0 })} />
      <span
        className={css({
          fontFamily: 'mono',
          fontSize: 'sm',
          color: 'text',
          whiteSpace: 'nowrap',
        })}
      >
        {skill.name}
      </span>
    </motion.div>
  )
}
