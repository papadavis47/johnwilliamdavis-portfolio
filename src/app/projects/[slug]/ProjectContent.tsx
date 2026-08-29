'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import ProjectMark from '@/design-system/ProjectMark'
import { Github } from '@/design-system/icons'
import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { button, link } from 'styled-system/recipes'
import PageContainer from '@/design-system/PageContainer'
import TechStack from '@/design-system/TechStack'
import type { Project } from '../projects'
import { markupSpan, linkSpan } from './markup'

const sectionHeading = css({
  textStyle: 'h2',
  color: 'text',
  mb: '4',
})

// The prose pair every body block shares; blocks that differ compose from it
// rather than respelling it, so a change to one lands everywhere.
const proseBase = css.raw({ textStyle: 'prose', color: 'text' })

const sectionProse = css(proseBase, { maxWidth: 'content' })

const featureText = css(proseBase)

const closingNote = css(proseBase, {
  color: 'text.muted',
  maxWidth: 'content',
  mt: '4',
  fontStyle: 'italic',
})

const inlineCode = css({
  textStyle: 'code',
  bg: 'surface',
  px: '1',
  py: '0.5',
  borderRadius: 'tag',
})

const emphasis = css({
  fontStyle: 'italic',
})

// Splitting on a capturing group keeps the delimited segments in the array, so
// each one is matched by its own wrapper.
function InlineMarkup({ text }: { text: string }) {
  return text.split(markupSpan).map((part, i) => {
    if (/^`[^`]+`$/.test(part)) {
      return (
        <code key={i} className={inlineCode}>
          {part.slice(1, -1)}
        </code>
      )
    }
    if (/^_[^_]+_$/.test(part)) {
      return (
        <em key={i} className={emphasis}>
          {part.slice(1, -1)}
        </em>
      )
    }
    const linkMatch = linkSpan.exec(part)
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className={link()}
        >
          {linkMatch[1]}
        </a>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

function Paragraphs({ text }: { text: string }) {
  return (
    <div
      className={css({ display: 'flex', flexDirection: 'column', gap: '4' })}
    >
      {text.split('\n\n').map((paragraph) => (
        <p key={paragraph} className={sectionProse}>
          <InlineMarkup text={paragraph} />
        </p>
      ))}
    </div>
  )
}

function Section({
  title,
  delay,
  children,
}: {
  title: string
  delay: number
  children: React.ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={css({ mb: '10' })}
    >
      <h2 className={sectionHeading}>{title}</h2>
      {children}
    </motion.section>
  )
}

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

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={css({
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '4',
            mb: '6',
          })}
        >
          <ProjectMark
            project={project}
            size={56}
            alt={project.logo?.alt ?? ''}
          />
          <div className={css({ flex: '1', minWidth: 0 })}>
            <h1 className={css({ textStyle: 'h1', color: 'text' })}>
              {project.title}
            </h1>
            {project.slug === 'sokay' && (
              <p
                className={css({
                  textStyle: 'body',
                  color: 'text.muted',
                  mt: '1',
                })}
              >
                It’<strong className={css({ color: 'accent' })}>s okay</strong>,
                because imperfection is part of the plan.
              </p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className={css({ mb: '8' })}
        >
          <TechStack items={project.techStack} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className={css({ mb: '10' })}
        >
          <Paragraphs text={project.description} />
        </motion.div>

        <Section title="Why I built it" delay={0.5}>
          <Paragraphs text={project.why} />
        </Section>

        <Section title="Key features" delay={0.6}>
          <ul
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '2',
              pl: '5',
              listStyleType: 'disc',
              maxWidth: 'content',
            })}
          >
            {project.features.map((feature) => (
              <li key={feature} className={featureText}>
                <InlineMarkup text={feature} />
              </li>
            ))}
          </ul>
        </Section>

        {project.screenshots && (
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '6',
              mb: '10',
            })}
          >
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.65 + index * 0.08 }}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={screenshot.width}
                  height={screenshot.height}
                  className={css({
                    width: '100%',
                    height: 'auto',
                    borderRadius: 'control',
                  })}
                />
              </motion.div>
            ))}
          </div>
        )}

        <Section title="Tech notes" delay={0.7}>
          <Paragraphs text={project.techNotes} />
          {project.closingNote && (
            <p className={closingNote}>{project.closingNote}</p>
          )}
        </Section>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
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
              Visit App
            </a>
          )}
        </motion.div>
      </motion.article>
    </PageContainer>
  )
}
