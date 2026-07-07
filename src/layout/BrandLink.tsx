'use client'

import Link from 'next/link'
import { css } from 'styled-system/css'
import { merriweather } from '@/app/fonts'

function BrandLink() {
  return (
    <Link
      href="/"
      aria-label="John William Davis — home"
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        color: 'primary',
        transition: 'opacity 200ms',
        _hover: { opacity: 0.7 },
      })}
    >
      <svg
        viewBox="0 0 100 100"
        width="52"
        height="52"
        aria-hidden="true"
        className={css({ display: 'block' })}
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fill="currentColor"
          fontFamily={merriweather.style.fontFamily}
          fontWeight={700}
          fontSize="19"
          letterSpacing="0.75"
        >
          JWD
        </text>
      </svg>
    </Link>
  )
}

export default BrandLink
