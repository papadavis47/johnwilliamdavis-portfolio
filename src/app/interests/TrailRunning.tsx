'use client'

import Link from 'next/link'
import { Mountain } from 'lucide-react'
import { css } from 'styled-system/css'
import InterestCard from './InterestCard'

export default function TrailRunning() {
  return (
    <InterestCard icon={Mountain} title="Trail Running" delay={0.2}>
      <p
        className={css({
          color: 'text',
          lineHeight: '1.7',
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
          My love for the mountains inspired{' '}
          <Link
            href="/projects/mountains"
            className={css({
              color: 'primary',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              transition: 'color 200ms',
              _hover: { color: 'secondary' },
            })}
          >
            Mountains{' '}
          </Link>
          &nbsp;-- a terminal-based application for tracking runs and exploring
          trail data.
        </p>
        <p
          className={css({
            color: 'text',
            lineHeight: '1.7',
            mt: '2',
          })}
        >
          I have also recently completed a{' '}
          <Link
            href="https://www.comfortablefeelingdumb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={css({
              color: 'primary',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              transition: 'color 200ms',
              _hover: { color: 'secondary' },
            })}
          >
            web version{' '}
          </Link>
          of Mountains.
        </p>
      </div>

      {/*<div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4',
          mt: '6',
          textAlign: 'center',
        })}
      >
        <div>
          <p
            className={css({
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'secondary',
            })}
          >
            500+
          </p>
          <p className={css({ fontSize: '0.85rem', color: 'text' })}>
            Miles Run
          </p>
        </div>
        <div>
          <p
            className={css({
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'secondary',
            })}
          >
            50K+
          </p>
          <p className={css({ fontSize: '0.85rem', color: 'text' })}>
            Elevation Gain
          </p>
        </div>
        <div>
          <p
            className={css({
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'secondary',
            })}
          >
            25+
          </p>
          <p className={css({ fontSize: '0.85rem', color: 'text' })}>
            Trails Explored
          </p>
        </div>
      </div>*/}
    </InterestCard>
  )
}
