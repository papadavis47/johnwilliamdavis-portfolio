'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowLeft, Mountain } from 'lucide-react'
import { Github } from '@/design-system/icons'
import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { button } from 'styled-system/recipes'
import PageContainer from '@/design-system/PageContainer'
import TechStack from '@/design-system/TechStack'
import type { Project } from '../projects'

const sectionHeading = css({
  textStyle: 'h2',
  color: 'text',
  mb: '4',
})

const sectionProse = css({
  textStyle: 'prose',
  color: 'text',
  maxWidth: 'content',
})

const inlineCode = css({
  textStyle: 'code',
  bg: 'surface',
  px: '1',
  py: '0.5',
  borderRadius: 'tag',
})

// Renders copy with `backtick`-delimited spans as inline <code>. Odd-index
// segments are the code spans. Strings without backticks render as one segment.
function InlineCode({ text }: { text: string }) {
  return text.split('`').map((part, i) =>
    i % 2 === 1 ? (
      <code key={i} className={inlineCode}>
        {part}
      </code>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  )
}

const heroImage = css({
  width: '14',
  height: '14',
  borderRadius: 'control',
  objectFit: 'contain',
  flexShrink: 0,
})

const heroIcon = css({
  color: 'accent',
  flexShrink: 0,
})

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
          {project.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.logo.src}
              alt={project.logo.alt}
              width={56}
              height={56}
              className={heroImage}
            />
          ) : (
            <Mountain size={48} aria-hidden className={heroIcon} />
          )}
          <h1 className={css({ textStyle: 'h1', color: 'text' })}>
            {project.title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className={css({ mb: '8' })}
        >
          <TechStack items={project.techStack} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className={css({
            textStyle: 'prose',
            color: 'text',
            mb: '10',
            maxWidth: 'content',
          })}
        >
          {project.description}
        </motion.p>

        <Section title="Why I built it" delay={0.5}>
          <p className={sectionProse}>{project.why}</p>
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
              <li
                key={feature}
                className={css({ textStyle: 'prose', color: 'text' })}
              >
                <InlineCode text={feature} />
              </li>
            ))}
          </ul>
        </Section>

        {project.screenshot && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 }}
            className={css({ mb: '10' })}
          >
            <Image
              src={project.screenshot.src}
              alt={project.screenshot.alt}
              width={project.screenshot.width}
              height={project.screenshot.height}
              className={css({
                width: '100%',
                height: 'auto',
                borderRadius: 'control',
              })}
            />
          </motion.div>
        )}

        <Section title="Tech notes" delay={0.7}>
          <p className={sectionProse}>
            <InlineCode text={project.techNotes} />
          </p>
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
              Visit Site
            </a>
          )}
        </motion.div>
      </motion.article>
    </PageContainer>
  )
}
