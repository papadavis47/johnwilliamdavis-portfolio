'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { link } from 'styled-system/recipes'
import Typewriter from '@/design-system/Typewriter'
import HeroActions from './HeroActions'
import TerminalCard from './TerminalCard'
import { heroParagraphs, processLinkLabel } from './content'

export default function HeroIntro() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={css({
          textStyle: 'display',
          color: 'text',
          mb: '3',
        })}
      >
        John William Davis
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={css({
          textStyle: 'subtitle',
          color: 'text',
          mb: '8',
        })}
      >
        {/* Stacked on phones, one dotted line from sm up, so a wrap never strands the dot */}
        <span className={css({ display: 'block', sm: { display: 'inline' } })}>
          Software Engineer
        </span>{' '}
        <span
          aria-hidden="true"
          className={css({
            display: 'none',
            color: 'text.muted',
            mx: '1.5',
            sm: { display: 'inline' },
          })}
        >
          ·
        </span>{' '}
        <span
          className={css({
            display: 'block',
            textStyle: 'subtitleMono',
            color: 'accent',
            sm: { display: 'inline' },
          })}
        >
          <Typewriter text="Rust & TypeScript" duration={0.9} delay={0.6} />{' '}
          <Typewriter
            text="(mostly)"
            duration={0.5}
            delay={2.4}
            className={css({ color: 'text.muted', fontSize: { base: 'md', md: 'lg' } })}
          />
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '6',
          // matches the space above TerminalCard: 32px mobile, 48px desktop
          mb: { base: '8', md: '12' },
          maxWidth: 'content',
        })}
      >
        {heroParagraphs.map((paragraph) => (
          <p
            key={paragraph}
            className={css({ textStyle: 'prose', color: 'text.muted' })}
          >
            {paragraph}
          </p>
        ))}
        <p className={css({ textStyle: 'prose' })}>
          <Link href="/process" className={link()}>
            {processLinkLabel}
          </Link>
        </p>
        <TerminalCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <HeroActions />
      </motion.div>
    </>
  )
}
