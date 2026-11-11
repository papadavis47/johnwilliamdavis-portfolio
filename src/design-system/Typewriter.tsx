import type { CSSProperties } from 'react'
import { css, cx } from 'styled-system/css'

// Types `text` out one character per step after `delay`. Clipped, not
// removed, so screen readers get the full text at once; reduced motion shows
// it immediately. Timing rides in CSS vars because Panda extracts statically.
// Shared by the home hero subtitle and the /process loop heading.
const typewriter = css({
  display: 'inline-block',
  _motionSafe: {
    animation:
      'typewriter var(--typewriter-duration) steps(var(--typewriter-steps)) var(--typewriter-delay) both',
  },
})

export default function Typewriter({
  text,
  duration,
  delay,
  className,
}: {
  text: string
  /** seconds */
  duration: number
  /** seconds */
  delay: number
  className?: string
}) {
  return (
    <span
      className={cx(typewriter, className)}
      style={
        {
          '--typewriter-steps': text.length,
          '--typewriter-duration': `${duration}s`,
          '--typewriter-delay': `${delay}s`,
        } as CSSProperties
      }
    >
      {text}
    </span>
  )
}
