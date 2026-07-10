'use client'

import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { Github } from '@/design-system/icons'
import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { button, tag } from 'styled-system/recipes'
import PageContainer from '@/design-system/PageContainer'
import type { Project } from '../projects'

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <PageContainer>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Link
            href="/projects"
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2',
              color: 'text.muted',
              textDecoration: 'none',
              fontSize: 'sm',
              transition: 'color 200ms',
              mb: '8',
              _hover: { color: 'accent' },
            })}
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={css({
            textStyle: 'h1',
            color: 'text',
            mb: '6',
          })}
        >
          {project.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className={css({
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2',
            mb: '8',
          })}
        >
          {project.techStack.map((tech) => (
            <span key={tech} className={tag()}>
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className={css({
            textStyle: 'prose',
            color: 'text',
            mb: '10',
          })}
        >
          {project.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className={css({
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4',
          })}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={button({ visual: 'outline', size: 'sm' })}
            >
              <Github size={18} />
              View on GitHub
            </a>
          )}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={button({ visual: 'solid', size: 'sm' })}
            >
              <ExternalLink size={18} />
              Visit Site
            </a>
          )}
        </motion.div>
      </motion.article>
    </PageContainer>
  )
}
