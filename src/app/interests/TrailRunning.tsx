'use client'

import Link from 'next/link'
import { Mountain } from 'lucide-react'
import { css } from 'styled-system/css'
import { link } from 'styled-system/recipes'
import InterestCard from './InterestCard'
import TrailMap from './TrailMap'

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

      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          maxWidth: '65ch',
        })}
      >
        Close to home I run or hike the Issaquah Alps: Tiger Mountain, Cougar
        Mountain, and Squak Mountain. Mossy singletrack, towering firs and
        cedars, ferns everywhere, and the occasional clearing that opens onto
        the Cascades. Sometimes my daughter comes along.
      </p>

      <TrailMap />

      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          maxWidth: '65ch',
        })}
      >
        My love for the mountains inspired{' '}
        <Link href="/projects/mountains" className={link()}>
          Mountains
        </Link>
        , a terminal user interface for tracking runs and exploring trail data.
      </p>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          maxWidth: '65ch',
          mt: '4',
        })}
      >
        I am currently working on an early-stage{' '}
        <Link
          href="https://github.com/papadavis47/mountains-web"
          target="_blank"
          rel="noopener noreferrer"
          className={link()}
        >
          web version
        </Link>{' '}
        of Mountains.
      </p>
    </InterestCard>
  )
}
