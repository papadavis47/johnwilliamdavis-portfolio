'use client'

import { PenLine } from 'lucide-react'
import { css } from 'styled-system/css'
import InterestCard from './InterestCard'

export default function Writing() {
  return (
    <InterestCard icon={PenLine} title="Writing" delay={0.4}>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '6',
          maxWidth: '65ch',
        })}
      >
        Writing helps me clarify what I actually think. The process of putting
        ideas into words, whether on paper or on a screen, tends to reveal
        whether I really know something. Writing, while difficult to do well, is
        like exercise - pushups for the brain.
      </p>

      <div
        className={css({
          bg: 'bg',
          border: '1px solid',
          borderColor: 'border',
          borderRadius: 'control',
          p: '5',
        })}
      >
        <p className={css({ textStyle: 'body', color: 'text' })}>
          I write publicly on my blog here.
        </p>
      </div>
    </InterestCard>
  )
}
