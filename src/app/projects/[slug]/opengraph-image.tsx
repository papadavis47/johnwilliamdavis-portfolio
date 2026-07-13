import { notFound } from 'next/navigation'
import { ImageResponse } from 'next/og'
import { OG_SIZE, OgFrame, loadOgFonts, og } from '@/design-system/og/og'
import { projects } from '../projects'

export const alt = 'Project — John William Davis'
export const size = OG_SIZE
export const contentType = 'image/png'

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return new ImageResponse(
    (
      <OgFrame footerLeft="John William Davis" footerRight="johnwilliamdavis.com">
        <div
          style={{
            fontFamily: 'heading',
            fontSize: project.title.length > 20 ? 64 : 80,
            color: og.text,
            letterSpacing: '-0.015em',
            lineHeight: 1.1,
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontSize: 34,
            color: og.muted,
            marginTop: 18,
            lineHeight: 1.35,
          }}
        >
          {project.summary}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 36 }}>
          {project.techStack.map((tech) => (
            <div
              key={tech}
              style={{
                display: 'flex',
                fontFamily: 'mono',
                fontSize: 24,
                color: og.pillFg,
                backgroundColor: og.pillBg,
                padding: '8px 18px',
                borderRadius: 8,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </OgFrame>
    ),
    { ...OG_SIZE, fonts: await loadOgFonts() }
  )
}
