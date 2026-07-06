'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
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
            textStyle: 'prose',
            color: 'text',
            mb: '4',
          })}
        >
          I wrote my first line of code in 2017 - having come to this profession
          as a result of wanting a craft that I could grow with and never fully
          master. I am driven to build software and tools that add to society's
          quality of life. I enjoy the building software and I see the act of
          engineering as part of a larger process to help people to live happier
          and more productive lives.
        </p>
        <p
          className={css({
            textStyle: 'prose',
            color: 'text',
            mb: '4',
          })}
        >
          I am happily married and I am the father of three teenage children. We
          have a beautiful golden retriever at home, and I love the outdoors -
          including trail running.
        </p>

        <p
          className={css({
            textStyle: 'prose',
            color: 'text',
          })}
        >
          I enjoy working across the full stack, from crafting intuitive user
          interfaces with React and Next.js to designing scalable backend
          services and databases. I love exploring new technologies and tools.
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
