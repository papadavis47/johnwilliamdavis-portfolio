import { css, cx } from 'styled-system/css'
import { MountainsMark } from './MountainsMark'
import type { Project } from '@/app/projects/projects'

// The project mark, shared by the card and the case-study hero. Logos stay raw
// <img> rather than next/image: they are small SVG/PNG marks the optimizer adds
// nothing to, and the SVGs self-color (they render through <img>, so they can't
// inherit currentColor).
//
// A project whose brand mark is theme-paired sets `logoDark` and gets both
// files rendered, with CSS picking one. next-themes writes class="dark" on
// <html> before first paint (ThemeProvider sets attribute="class"), so the swap
// costs no client state and shows no flash. The hidden variant is display:none,
// which drops it from the accessibility tree, so the shared alt is announced
// once and axe stays quiet in both themes.
const markBase = css({
  borderRadius: 'control',
  objectFit: 'contain',
  flexShrink: 0,
})

const lightOnly = css({ _dark: { display: 'none' } })
const darkOnly = css({ display: 'none', _dark: { display: 'block' } })

// Panda extracts statically, so each slot is its own literal rather than a
// value threaded through at runtime. `fallback` is the MountainsMark size that
// optically matches the box, which is smaller than the box itself: the logos
// fill their square, the glyph does not.
const slots = {
  40: { box: css({ width: '10', height: '10' }), fallback: 32 },
  56: { box: css({ width: '14', height: '14' }), fallback: 48 },
} as const

type Size = keyof typeof slots

export default function ProjectMark({
  project,
  size,
  alt,
}: {
  project: Project
  size: Size
  alt: string
}) {
  const slot = slots[size]

  if (!project.logo) {
    return (
      <MountainsMark
        size={slot.fallback}
        className={css({ color: 'accent', flexShrink: 0 })}
      />
    )
  }

  const dimensions = cx(markBase, slot.box)

  if (!project.logoDark) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.logo.src}
        alt={alt}
        width={size}
        height={size}
        className={dimensions}
      />
    )
  }

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.logo.src}
        alt={alt}
        width={size}
        height={size}
        className={cx(dimensions, lightOnly)}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.logoDark}
        alt={alt}
        width={size}
        height={size}
        className={cx(dimensions, darkOnly)}
      />
    </>
  )
}
