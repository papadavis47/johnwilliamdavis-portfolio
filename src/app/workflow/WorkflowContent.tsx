'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import PageContainer from '@/design-system/PageContainer'
import { containerVariants, itemVariants } from '@/design-system/motion'
import { intro, sections } from './content'

const prose = css({ textStyle: 'prose', color: 'text' })

const quote = css({
  textStyle: 'prose',
  color: 'text.muted',
  pl: '4',
  borderLeftWidth: '2px',
  borderLeftStyle: 'solid',
  borderLeftColor: 'accent',
})

export default function WorkflowContent() {
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

        {sections.map(({ title, paragraphs, quotes, closing }) => (
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
            <h2 className={css({ textStyle: 'h2', color: 'text' })}>{title}</h2>
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
