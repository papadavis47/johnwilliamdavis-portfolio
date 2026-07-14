import { ImageResponse } from 'next/og'
import { OG_SIZE, OgFrame, loadOgFonts, og } from '@/design-system/og/og'
import { CURRENT_FOCUS } from '@/design-system/current-focus'

export const alt = 'John William Davis — Software Engineer'
export const size = OG_SIZE
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <OgFrame footerRight="johnwilliamdavis.com">
        <div
          style={{
            fontFamily: 'heading',
            fontSize: 104,
            color: og.text,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          John William Davis
        </div>
        <div style={{ fontSize: 42, color: og.muted, marginTop: 20 }}>
          Software Engineer
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'mono',
            fontSize: 30,
            marginTop: 48,
            lineHeight: 1.5,
          }}
        >
          <div style={{ display: 'flex' }}>
            <span style={{ color: og.accent, marginRight: 16 }}>$</span>
            <span style={{ color: og.muted }}>git status</span>
          </div>
          <div style={{ display: 'flex', color: og.text }}>
            {`on branch ${new Date().getFullYear()}`}
          </div>
          <div style={{ display: 'flex', color: og.text }}>
            {CURRENT_FOCUS}
          </div>
        </div>
      </OgFrame>
    ),
    { ...OG_SIZE, fonts: await loadOgFonts() }
  )
}
