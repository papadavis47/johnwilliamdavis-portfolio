import type { CSSProperties } from 'react'
import { notFound } from 'next/navigation'
import { css, cx } from 'styled-system/css'
import { token } from 'styled-system/tokens'
import { button, card, tag, link } from 'styled-system/recipes'
import PageContainer from '@/design-system/PageContainer'

// Design-system catalog. Gated: 404s on Vercel production, renders in local dev
// and on preview deploys. Everything here reads the real Panda setup, so a token
// or recipe edit shows up on this one page in both themes (flip the toggle).

// Semantic color tokens (never raw ramp steps — same rule as components).
const semanticColors = [
  'bg',
  'surface',
  'text',
  'text.muted',
  'border',
  'accent',
  'accent.hover',
  'accent.emphasis',
  'accent.fg',
  'accent.subtle',
  'accent.subtleFg',
] as const

// Each textStyle needs its own literal css() call so Panda extracts it — a
// runtime `css({ textStyle: name })` in a loop would not be picked up.
const textStyles: { name: string; cls: string }[] = [
  { name: 'display', cls: css({ textStyle: 'display' }) },
  { name: 'h1', cls: css({ textStyle: 'h1' }) },
  { name: 'h2', cls: css({ textStyle: 'h2' }) },
  { name: 'h3', cls: css({ textStyle: 'h3' }) },
  { name: 'subtitle', cls: css({ textStyle: 'subtitle' }) },
  { name: 'prose', cls: css({ textStyle: 'prose' }) },
  { name: 'body', cls: css({ textStyle: 'body' }) },
  { name: 'small', cls: css({ textStyle: 'small' }) },
  { name: 'caption', cls: css({ textStyle: 'caption' }) },
  { name: 'mono', cls: css({ textStyle: 'mono' }) },
  { name: 'code', cls: css({ textStyle: 'code' }) },
]

const radii = ['card', 'control', 'tag'] as const
const shadows = ['hover', 'lifted'] as const

const label = css({ textStyle: 'caption', color: 'text.muted' })
const textColor = css({ color: 'text' })

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className={css({ mt: '14' })}>
      <h2
        className={css({
          textStyle: 'h2',
          color: 'text',
          mb: '6',
          pb: '2',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'border',
        })}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function KitchenSink() {
  if (process.env.VERCEL_ENV === 'production') notFound()

  return (
    <PageContainer>
      <h1 className={css({ textStyle: 'display', color: 'text', mb: '3' })}>
        Kitchen Sink
      </h1>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text.muted',
          maxWidth: 'content',
        })}
      >
        Design-system catalog — recipes, tokens, and typography wired to the
        live Panda setup. Flip the theme toggle to check both themes. This route
        404s on production.
      </p>

      <Section title="Colors">
        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(9rem, 1fr))',
            gap: '4',
          })}
        >
          {semanticColors.map((name) => (
            <div key={name}>
              <div
                className={css({
                  height: '16',
                  borderRadius: 'control',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'border',
                })}
                style={
                  { background: token.var(`colors.${name}`) } as CSSProperties
                }
              />
              <p className={cx(label, css({ mt: '1.5' }))}>{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <div
          className={cx(
            textColor,
            css({ display: 'flex', flexDirection: 'column', gap: '5' }),
          )}
        >
          {textStyles.map(({ name, cls }) => (
            <div key={name}>
              <p className={cx(label, css({ mb: '1' }))}>{name}</p>
              <p className={cls}>The quick brown fox jumps over the lazy dog</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Buttons">
        <div
          className={css({
            display: 'flex',
            flexWrap: 'wrap',
            gap: '4',
            alignItems: 'center',
          })}
        >
          <button className={button({ visual: 'solid', size: 'md' })}>
            Solid md
          </button>
          <button className={button({ visual: 'solid', size: 'sm' })}>
            Solid sm
          </button>
          <button className={button({ visual: 'outline', size: 'md' })}>
            Outline md
          </button>
          <button className={button({ visual: 'outline', size: 'sm' })}>
            Outline sm
          </button>
          <button
            className={button({ visual: 'solid', size: 'md' })}
            disabled
            style={{ opacity: 0.5 }}
          >
            Disabled
          </button>
        </div>
      </Section>

      <Section title="Cards">
        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
            gap: '5',
          })}
        >
          <div className={card()}>
            <p className={cx(label, css({ mb: '2' }))}>card</p>
            <p className={cx(textColor, css({ textStyle: 'prose' }))}>
              A bordered surface panel.
            </p>
          </div>
          <div className={card({ interactive: true })}>
            <p className={cx(label, css({ mb: '2' }))}>card · interactive</p>
            <p className={cx(textColor, css({ textStyle: 'prose' }))}>
              Hover me — lifts on the hover shadow.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Tags, links & inline code">
        <div
          className={css({ display: 'flex', flexWrap: 'wrap', gap: '3', mb: '5' })}
        >
          <span className={tag()}>rust</span>
          <span className={tag()}>ratatui</span>
          <span className={tag()}>libsql</span>
          <span className={tag()}>Turso</span>
        </div>
        <p className={cx(textColor, css({ textStyle: 'prose', mb: '4' }))}>
          An inline{' '}
          <a href="#" className={link()}>
            text link
          </a>{' '}
          inside prose.
        </p>
        <p className={cx(textColor, css({ textStyle: 'prose' }))}>
          The app manages its own{' '}
          <code
            className={css({
              textStyle: 'code',
              bg: 'surface',
              px: '1',
              py: '0.5',
              borderRadius: 'tag',
            })}
          >
            ~/.mountains/
          </code>{' '}
          directory.
        </p>
      </Section>

      <Section title="Radii">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '5' })}>
          {radii.map((name) => (
            <div key={name}>
              <div
                className={css({
                  width: '24',
                  height: '16',
                  bg: 'surface',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'border',
                })}
                style={
                  { borderRadius: token.var(`radii.${name}`) } as CSSProperties
                }
              />
              <p className={cx(label, css({ mt: '1.5' }))}>{name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Shadows">
        <div className={css({ display: 'flex', flexWrap: 'wrap', gap: '8' })}>
          {shadows.map((name) => (
            <div key={name}>
              <div
                className={css({
                  width: '24',
                  height: '16',
                  bg: 'surface',
                  borderRadius: 'control',
                })}
                style={
                  { boxShadow: token.var(`shadows.${name}`) } as CSSProperties
                }
              />
              <p className={cx(label, css({ mt: '2.5' }))}>{name}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageContainer>
  )
}
