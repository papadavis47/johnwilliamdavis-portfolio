'use client'

import { MotionConfig } from 'motion/react'

// motion ignores prefers-reduced-motion unless told; "user" drops transform
// animations for visitors who ask for less motion (opacity fades still run)
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
