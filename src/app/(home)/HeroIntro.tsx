'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import HeroActions from './HeroActions'
import TerminalCard from './TerminalCard'
import { heroParagraphs } from './content'

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
          {/* Clipped, not removed, so screen readers get the full line at once */}
          <span
            className={css({
              display: 'inline-block',
              _motionSafe: { animation: 'typewriter 0.9s steps(17) 0.6s both' },
            })}
          >
            Rust &amp; TypeScript
          </span>{' '}
          <span
            className={css({
              display: 'inline-block',
              color: 'text.muted',
              fontSize: { base: 'md', md: 'lg' },
              _motionSafe: { animation: 'typewriter 0.5s steps(8) 2.4s both' },
            })}
          >
            (mostly)
          </span>
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
