import { css } from 'styled-system/css'
import PageContainer from '@/design-system/PageContainer'
import Reading from './Reading'
import Writing from './Writing'
import TrailRunning from './TrailRunning'

export default function InterestsContent() {
  return (
    <PageContainer>
      <h1
        className={css({
          textStyle: 'h1',
          color: 'text',
          mb: '12',
        })}
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
    </PageContainer>
  )
}
