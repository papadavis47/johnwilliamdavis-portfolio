'use client'

import Link from 'next/link'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { motion } from 'motion/react'
import { css } from '../../../../styled-system/css'
import { merriweather } from '@/app/fonts'

type Project = {
  slug: string
  title: string
  description: string
  techStack: string[]
  github?: string
  url?: string
}

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={css({
        maxWidth: '800px',
        mx: 'auto',
        px: '4',
        py: '8',
      })}
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
            color: 'muted',
            textDecoration: 'none',
            fontSize: '0.95rem',
            transition: 'color 200ms',
            mb: '8',
            _hover: { color: 'primary' },
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
        className={`${merriweather.className} ${css({
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'text',
          mb: '6',
          lineHeight: '1.2',
          md: { fontSize: '3rem' },
        })}`}
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
          <span
            key={tech}
            className={css({
              px: '3',
              py: '1',
              bg: 'primary/10',
              color: 'primary',
              borderRadius: 'full',
              fontSize: '0.85rem',
              fontWeight: '500',
            })}
          >
            {tech}
          </span>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className={css({
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: 'text',
          mb: '8',
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
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2',
              px: '5',
              py: '3',
              bg: 'text',
              color: 'bg',
              borderRadius: 'lg',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'opacity 200ms',
              _hover: { opacity: 0.85 },
            })}
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
            className={css({
              display: 'inline-flex',
              alignItems: 'center',
              gap: '2',
              px: '5',
              py: '3',
              bg: 'primary',
              color: 'white',
              borderRadius: 'lg',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'opacity 200ms',
              _hover: { opacity: 0.85 },
            })}
          >
            <ExternalLink size={18} />
            Visit Site
          </a>
        )}
      </motion.div>
    </motion.article>
  )
}
