'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MousePointerClick, PenLine } from 'lucide-react'
import { css } from 'styled-system/css'
import InterestCard from './InterestCard'

export default function Writing() {
  return (
    <InterestCard icon={PenLine} title="Writing" delay={0.4}>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '4',
          maxWidth: '65ch',
        })}
      >
        Writing helps me clarify what I actually think. The process of putting
        ideas into words, whether on paper or on a screen, tends to reveal
        whether I really know something. Writing, while difficult to do well, is
        like exercise - pushups for the brain.
      </p>

      <p
        className={css({
          textStyle: 'small',
          color: 'text.muted',
          display: 'flex',
          alignItems: 'center',
          gap: '2',
          mb: '3',
        })}
      >
        <MousePointerClick size={16} aria-hidden="true" />
        Click on image to go to my blog
      </p>

      <Link
        href="https://www.comfortablefeelingdumb.com/"
        target="_blank"
        rel="noopener noreferrer"
        className={css({
          display: 'block',
          maxWidth: '600px',
          mb: '3',
          border: '1px solid',
          borderColor: 'border',
          borderRadius: 'control',
          overflow: 'hidden',
          boxShadow: 'hover',
          transition: 'border-color 200ms, transform 200ms, box-shadow 200ms',
          _hover: {
            borderColor: 'accent/40',
            transform: 'translateY(-4px)',
            boxShadow: 'lifted',
          },
        })}
      >
        <Image
          src="/images/writing/blog-screenshot.webp"
          alt="Landing page of my blog, Comfortable Feeling Dumb"
          width={1440}
          height={900}
          sizes="(max-width: 768px) 100vw, 600px"
          className={css({ width: '100%', height: 'auto', display: 'block' })}
        />
      </Link>
    </InterestCard>
  )
}
