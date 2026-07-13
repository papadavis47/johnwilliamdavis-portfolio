import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import type { ReactNode } from 'react'

// Hex mirrors of the dark-theme semantic tokens in panda.config.ts — satori
// (the ImageResponse renderer) cannot parse oklch. If a ramp step moves,
// re-derive these from the oklch values noted here.
export const og = {
  bg: '#1c1f26', // bg            neutralDark.900  oklch(0.24 0.014 262)
  text: '#e3e6ec', // text        neutralDark.200  oklch(0.925 0.008 262)
  muted: '#9da2ab', // text.muted neutralDark.400  oklch(0.71 0.014 262)
  accent: '#d89d82', // accent    accent.300       oklch(0.745 0.080 45)
  emphasis: '#a65832', // accent.emphasis accent.500 oklch(0.545 0.115 45)
  pillBg: '#6d3113', // accent.subtle   accent.800 oklch(0.390 0.095 45)
  pillFg: '#f4cab7', // accent.subtleFg accent.200 oklch(0.87 0.055 45)
}

export const OG_SIZE = { width: 1200, height: 630 }

// WOFF (not woff2 — satori can't read it), static instances, latin subset.
// Registered under role names ('heading'/'body'/'mono'), mirroring the panda
// font tokens — swapping a face later means changing only this function.
export async function loadOgFonts() {
  const dir = join(process.cwd(), 'src/design-system/og/fonts')
  const [heading, body, mono] = await Promise.all([
    readFile(join(dir, 'fraunces-latin-700.woff')),
    readFile(join(dir, 'plex-sans-latin-400.woff')),
    readFile(join(dir, 'plex-mono-latin-400.woff')),
  ])
  return [
    { name: 'heading', data: heading, weight: 700 as const, style: 'normal' as const },
    { name: 'body', data: body, weight: 400 as const, style: 'normal' as const },
    { name: 'mono', data: mono, weight: 400 as const, style: 'normal' as const },
  ]
}

// Card chrome shared by every OG image: charcoal ground, rust keyline top,
// content in the middle, footer row pinned to the bottom. Footer is two
// slots separated by a flexGrow spacer — satori drops space-between /
// margin:auto here, so the spacer does the spreading.
export function OgFrame({
  children,
  footerLeft,
  footerRight,
}: {
  children: ReactNode
  footerLeft?: ReactNode
  footerRight?: ReactNode
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: og.bg,
        padding: '64px 80px 56px',
        fontFamily: 'body',
      }}
    >
      <div
        style={{
          display: 'flex',
          width: 96,
          height: 8,
          backgroundColor: og.emphasis,
          borderRadius: 4,
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          fontFamily: 'mono',
          fontSize: 26,
        }}
      >
        <div style={{ display: 'flex', color: og.text }}>{footerLeft}</div>
        <div style={{ display: 'flex', flexGrow: 1 }} />
        <div style={{ display: 'flex', color: og.accent }}>{footerRight}</div>
      </div>
    </div>
  )
}
