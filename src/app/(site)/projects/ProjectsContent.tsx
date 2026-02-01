'use client'

import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'motion/react'
import { css } from '../../../../styled-system/css'
import { merriweather } from '@/app/fonts'

const projects = [
  {
    slug: 'comfortable-feeling-dumb',
    title: 'Comfortable Feeling Dumb',
    description: 'Personal blog exploring learning and growth',
    tech: ['Next.js 16', 'Tailwind v4', 'MDX'],
    url: 'https://comfortablefeelingdumb.com',
  },
  {
    slug: 'mountains',
    title: 'Mountains',
    description: 'Terminal UI for tracking trail running adventures',
    tech: ['Rust', 'ratatui', 'libsql'],
    github: 'https://github.com/papadavis47/mountains-tui',
  },
  {
    slug: 'libros',
    title: 'Libros',
    description: 'Terminal UI for managing book collections',
    tech: ['Go', 'Bubble Tea'],
    github: 'https://github.com/papadavis47/libros-tui',
  },
  {
    slug: 'victor-fuentes-art',
    title: 'Victor Fuentes Art',
    description: 'Portfolio for contemporary artist Victor Fuentes',
    tech: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://victorfuentesart.netlify.app',
  },
]

export default function ProjectsContent() {
  return (
    <div
      className={css({
        maxWidth: '900px',
        mx: 'auto',
        px: '4',
        py: '12',
      })}
    >
      <h1
        className={`${merriweather.className} ${css({
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'text',
          mb: '10',
        })}`}
      >
        Projects
      </h1>

      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '6',
          md: { gridTemplateColumns: 'repeat(2, 1fr)' },
        })}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className={css({
                display: 'block',
                p: '6',
                bg: 'surface',
                border: '1px solid',
                borderColor: 'muted/20',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 200ms',
                _hover: {
                  borderColor: 'primary/40',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                },
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: '3',
                })}
              >
                <h2
                  className={`${merriweather.className} ${css({
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: 'text',
                  })}`}
                >
                  {project.title}
                </h2>
                {project.url && (
                  <ExternalLink
                    size={18}
                    className={css({ color: 'muted', flexShrink: 0 })}
                  />
                )}
                {project.github && (
                  <Github
                    size={18}
                    className={css({ color: 'muted', flexShrink: 0 })}
                  />
                )}
              </div>

              <p
                className={css({
                  color: 'muted',
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  mb: '4',
                })}
              >
                {project.description}
              </p>

              <div
                className={css({
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '2',
                })}
              >
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={css({
                      px: '3',
                      py: '1',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      color: 'primary',
                      bg: 'primary/10',
                      borderRadius: '6px',
                    })}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
