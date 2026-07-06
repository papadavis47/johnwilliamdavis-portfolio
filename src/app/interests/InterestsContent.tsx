import { css } from 'styled-system/css'
import { merriweather } from '@/app/fonts'
import Reading from './Reading'
import Writing from './Writing'
import TrailRunning from './TrailRunning'

export default function InterestsContent() {
  return (
    <main
      className={css({
        maxWidth: '900px',
        mx: 'auto',
        px: '4',
        py: '12',
      })}
    >
      <h1
        className={`${merriweather.className} ${css({
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'text',
          mb: '12',
          textAlign: 'center',
        })}`}
      >
        Interests
      </h1>

      <div
        className={css({ display: 'flex', flexDirection: 'column', gap: '16' })}
      >
        <Reading />
        <Writing />
        <TrailRunning />
      </div>
    </main>
  )
}
