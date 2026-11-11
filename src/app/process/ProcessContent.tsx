'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import PageContainer from '@/design-system/PageContainer'
import Typewriter from '@/design-system/Typewriter'
import { containerVariants, itemVariants } from '@/design-system/motion'
import { intro, sections } from './content'

const heading = css({ textStyle: 'h2', color: 'text' })

const headingRow = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
  columnGap: '3',
})

const asideStyle = css({ textStyle: 'mono', fontSize: 'md', color: 'text.muted' })

const prose = css({ textStyle: 'prose', color: 'text' })

const quote = css({
  textStyle: 'prose',
  color: 'text.muted',
  pl: '4',
  borderLeftWidth: '2px',
  borderLeftStyle: 'solid',
  borderLeftColor: 'accent',
})

export default function ProcessContent() {
  return (
    <PageContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className={css({ display: 'flex', flexDirection: 'column', gap: '12' })}
      >
        <motion.h1
          variants={itemVariants}
          className={css({ textStyle: 'h1', color: 'text' })}
        >
          How I build
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className={css({ textStyle: 'prose', color: 'text', maxWidth: 'content' })}
        >
          {intro}
        </motion.p>

        {sections.map(({ title, aside, paragraphs, quotes, closing }) => (
          <motion.section
            key={title}
            variants={itemVariants}
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '4',
              maxWidth: 'content',
            })}
          >
            {aside ? (
              // aside sits outside the h2 so the heading reads plain "The loop"
              <div className={headingRow}>
                <h2 className={heading}>{title}</h2>
                <Typewriter text={aside} duration={1} delay={1} className={asideStyle} />
              </div>
            ) : (
              <h2 className={heading}>{title}</h2>
            )}
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={prose}>
                {paragraph}
              </p>
            ))}
            {quotes?.map((text) => (
              <blockquote key={text}>
                <p className={quote}>{text}</p>
              </blockquote>
            ))}
            {closing && <p className={prose}>{closing}</p>}
          </motion.section>
        ))}
      </motion.div>
    </PageContainer>
  )
}
