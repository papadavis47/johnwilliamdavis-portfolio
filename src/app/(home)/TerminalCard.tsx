import { css } from 'styled-system/css'
import { CURRENT_FOCUS } from '@/design-system/current-focus'

const session = [
  { cmd: 'whoami', out: ['john'] },
  { cmd: 'pwd', out: ['/pnw/greater_seattle_area'] },
  { cmd: 'cat languages.txt', out: ['rust  typescript  python'] },
  // versions hand-synced; bump on release
  {
    cmd: 'cargo install --list',
    out: [
      'caleb v0.7.1:',
      '    caleb',
      'mountains v0.9.3:',
      '    mountains',
      'rattlesnake v0.1.0:',
      '    rattlesnake',
    ],
  },
  { cmd: 'echo $EDITOR', out: ['zed --wait'] },
  { cmd: 'ls agent_harnesses/', out: ['delta  amp  claude-code'] },
  {
    cmd: 'git status',
    out: [`on branch ${new Date().getFullYear()}`, CURRENT_FOCUS],
  },
]

const prompt = css({ color: 'accent', mr: '2' })

export default function TerminalCard() {
  return (
    <div
      className={css({
        maxWidth: 'content',
        // extra air above (gap 6 + mt = 32px mobile, 48px desktop); HeroIntro matches it below
        mt: { base: '2', md: '6' },
        bg: 'surface',
        border: '1px solid',
        borderColor: 'border',
        borderRadius: 'control',
        overflow: 'hidden',
      })}
    >
      <div
        className={css({
          display: 'flex',
          gap: '1.5',
          px: '4',
          py: '2.5',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'border',
        })}
      >
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            aria-hidden
            className={css({
              width: '2.5',
              height: '2.5',
              borderRadius: 'full',
              bg: 'text.muted/40',
            })}
          />
        ))}
      </div>

      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '3',
          px: '5',
          py: '4',
          textStyle: 'mono',
          whiteSpace: 'pre-wrap',
        })}
      >
        {session.map(({ cmd, out }) => (
          <div key={cmd}>
            <div className={css({ color: 'text.muted' })}>
              <span aria-hidden className={prompt}>
                $
              </span>
              {cmd}
            </div>
            {out.map((line) => (
              <div
                key={line}
                suppressHydrationWarning
                className={css({ color: 'text' })}
              >
                {line}
              </div>
            ))}
          </div>
        ))}

        <div aria-hidden>
          <span className={prompt}>$</span>
          <span
            className={css({
              display: 'inline-block',
              width: '2',
              height: '4',
              verticalAlign: 'text-bottom',
              bg: 'accent',
              animation: 'blink 1.2s step-end infinite',
            })}
          />
        </div>
      </div>
    </div>
  )
}
