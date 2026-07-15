'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import PageContainer from '@/design-system/PageContainer'
import ProjectCard from '@/design-system/ProjectCard'
import { projects } from '@/app/projects/projects'
import HeroIntro from './HeroIntro'

const featuredSlugs = ['iwantyoutoknow', 'mountains']
const featured = projects.filter((project) =>
  featuredSlugs.includes(project.slug),
)

export default function HomeContent() {
  return (
    <PageContainer hero>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroIntro />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={css({ mt: { base: '16', md: '20' } })}
      >
        <h2
          className={css({
            textStyle: 'h2',
            color: 'text',
            mb: '8',
          })}
        >
          Selected work
        </h2>

        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridAutoRows: '1fr',
            gap: '6',
            mb: '8',
            md: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          })}
        >
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 5}
            />
          ))}
        </div>

        <Link
          href="/projects"
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2',
            textStyle: 'body',
            fontWeight: 'semibold',
            color: 'accent',
            transition: 'color 200ms',
            _hover: {
              color: 'accent.hover',
              '& span': { transform: 'translateX(4px)' },
            },
          })}
        >
          All projects
          <span
            aria-hidden
            className={css({ transition: 'transform 200ms' })}
          >
            →
          </span>
        </Link>
      </motion.section>
    </PageContainer>
  )
}
