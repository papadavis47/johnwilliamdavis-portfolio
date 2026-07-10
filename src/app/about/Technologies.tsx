'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { skillCategories, itemVariants } from './skill-data'
import SkillSection from './SkillSection'

export default function Technologies() {
  return (
    <motion.section variants={itemVariants}>
      <h2
        className={css({
          textStyle: 'h2',
          color: 'text',
          mb: '8',
        })}
      >
        Tech I Know Well
      </h2>
      <div
        className={css({
          display: 'grid',
          gap: '10',
          gridTemplateColumns: '1fr',
          md: { gridTemplateColumns: 'repeat(2, 1fr)' },
        })}
      >
        {skillCategories.map((category) => (
          <SkillSection key={category.title} category={category} />
        ))}
      </div>
    </motion.section>
  )
}
