'use client'

import { PenLine } from 'lucide-react'
import { css } from 'styled-system/css'
import InterestCard from './InterestCard'

export default function Writing() {
  return (
    <InterestCard icon={PenLine} title="Writing" delay={0.4}>
      <p
        className={css({
          color: 'text',
          lineHeight: '1.7',
          mb: '6',
          maxWidth: '65ch',
        })}
      >
        Writing is a way for me to clarify my thoughts and express myself at the
        same time. The process of putting ideas into words on a page, whether
        paper or digial, is one of the most human things we can do now in this
        age of LLMs. I like to remind myself that writing, while difficult to do
        well, is like exercise - pushups for the brain.
      </p>

      <div
        className={css({
          bg: 'muted/10',
          borderRadius: '8px',
          p: '5',
        })}
      >
        <p
          className={css({
            color: 'text',
            lineHeight: '1.7',
          })}
        >
          I write publicly on my blog here.
        </p>
      </div>
    </InterestCard>
  )
}
