'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Github } from '@/design-system/icons'
import { motion } from 'motion/react'
import { css, cx } from 'styled-system/css'
import { card, tag } from 'styled-system/recipes'
import type { Project } from './projects'

export default function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={css({ height: '100%' })}
    >
      <Link
        href={`/projects/${project.slug}`}
        className={cx(
          card({ interactive: true }),
          css({
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            textDecoration: 'none',
          }),
        )}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3',
            mb: '3',
          })}
        >
          <h2 className={css({ textStyle: 'h3', color: 'text' })}>
            {project.title}
          </h2>
          {project.url && (
            <ExternalLink
              size={18}
              className={css({ color: 'text.muted', flexShrink: 0 })}
            />
          )}
          {project.github && (
            <Github
              size={18}
              className={css({ color: 'text.muted', flexShrink: 0 })}
            />
          )}
        </div>

        <p
          className={css({
            textStyle: 'small',
            color: 'text.muted',
            mb: '4',
          })}
        >
          {project.summary}
        </p>

        <div
          className={css({
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2',
            mt: 'auto',
          })}
        >
          {project.techStack.map((tech) => (
            <span key={tech} className={tag()}>
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  )
}
