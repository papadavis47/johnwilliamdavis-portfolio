'use client'

import { motion } from 'motion/react'
import { css } from '../../../styled-system/css'
import { merriweather } from '@/app/fonts'
import { skillCategories, containerVariants, itemVariants } from './skill-data'
import SkillSection from './SkillSection'

export default function AboutMeContent() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={css({
        maxWidth: '800px',
        mx: 'auto',
        px: '4',
        py: '12',
        md: { py: '16' },
      })}
    >
      <motion.h1
        variants={itemVariants}
        className={`${merriweather.className} ${css({
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'text',
          mb: '8',
          md: { fontSize: '3rem' },
        })}`}
      >
        About Me
      </motion.h1>

      <motion.section
        variants={itemVariants}
        className={css({
          mb: '12',
        })}
      >
        <p
          className={css({
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'text',
            mb: '4',
          })}
        >
          I&apos;m a software developer passionate about building robust,
          efficient, and maintainable systems. My primary focus is on
          TypeScript, Rust, and Go—languages that offer strong type safety and
          excellent developer experience.
        </p>
        <p
          className={css({
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'muted',
          })}
        >
          I enjoy working across the full stack, from crafting intuitive user
          interfaces with React and Next.js to designing scalable backend
          services and databases. I&apos;m always exploring new technologies and
          approaches to solve complex problems elegantly.
        </p>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2
          className={`${merriweather.className} ${css({
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'text',
            mb: '8',
            md: { fontSize: '2rem' },
          })}`}
        >
          Skills & Technologies
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
    </motion.main>
  )
}
