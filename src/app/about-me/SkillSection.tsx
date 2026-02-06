'use client'

import { motion } from 'motion/react'
import { css } from '../../../styled-system/css'
import { merriweather } from '@/app/fonts'
import type { SkillCategory } from './skill-data'
import { containerVariants, itemVariants } from './skill-data'
import SkillBadge from './SkillBadge'

export default function SkillSection({ category }: { category: SkillCategory }) {
  const CategoryIcon = category.icon
  return (
    <motion.div
      variants={itemVariants}
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '4',
      })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '3',
        })}
      >
        <CategoryIcon size={22} className={css({ color: 'secondary' })} />
        <h3
          className={`${merriweather.className} ${css({
            fontSize: '1.25rem',
            fontWeight: '700',
            color: 'text',
          })}`}
        >
          {category.title}
        </h3>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className={css({
          display: 'flex',
          flexWrap: 'wrap',
          gap: '3',
        })}
      >
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  )
}
