'use client'

import Link from 'next/link'
import { Mountain } from 'lucide-react'
import { css } from 'styled-system/css'
import { link } from 'styled-system/recipes'
import InterestCard from './InterestCard'

export default function TrailRunning() {
  return (
    <InterestCard icon={Mountain} title="Trail Running" delay={0.2}>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '6',
          maxWidth: '65ch',
        })}
      >
        Trail running is my way of disconnecting from screens and reconnecting
        with nature and with my own body. On a beautiful trail, the noise of a
        complicated world quiets. There are few things more core to who we
        humans are as a species than moving on foot across a landscape.
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
          My love for the mountains inspired{' '}
          <Link href="/projects/mountains" className={link()}>
            Mountains
          </Link>{' '}
          &mdash; a terminal-based application for tracking runs and exploring
          trail data.
        </p>
        <p className={css({ textStyle: 'body', color: 'text', mt: '2' })}>
          I have also recently completed a{' '}
          <Link
            href="https://www.comfortablefeelingdumb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={link()}
          >
            web version
          </Link>{' '}
          of Mountains.
        </p>
      </div>
    </InterestCard>
  )
}
