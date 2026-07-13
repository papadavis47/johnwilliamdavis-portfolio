import { ImageResponse } from 'next/og'
import { OG_SIZE, OgFrame, loadOgFonts, og } from '@/design-system/og/og'

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
      </OgFrame>
    ),
    { ...OG_SIZE, fonts: await loadOgFonts() }
  )
}
