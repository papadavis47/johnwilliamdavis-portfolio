'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { link } from 'styled-system/recipes'
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

        <Link href="/projects" className={link()}>
          All projects →
        </Link>
      </motion.section>
    </PageContainer>
  )
}
