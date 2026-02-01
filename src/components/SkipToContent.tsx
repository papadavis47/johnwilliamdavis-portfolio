'use client'

import { css } from '../../styled-system/css'

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className={css({
        position: 'absolute',
        top: '-100%',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        px: '4',
        py: '2',
        bg: 'primary',
        color: 'white',
        fontWeight: '600',
        textDecoration: 'none',
        borderRadius: 'md',
        transition: 'top 0.2s',
        _focus: {
          top: '4',
          outline: '2px solid',
          outlineColor: 'primary',
          outlineOffset: '2px',
        },
      })}
    >
      Skip to content
    </a>
  )
}
