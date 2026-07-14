import { css } from 'styled-system/css'

const facts = [
  { label: 'location', value: 'Greater Seattle' },
  { label: 'languages', value: 'TypeScript · Rust · Python' },
  { label: 'tools', value: 'Zed · Claude Code · Amp' },
  { label: 'currently', value: 'refining Sokay · building this site in the open' },
]

export default function FactsCard() {
  return (
    <dl
      className={css({
        display: 'grid',
        gridTemplateColumns: 'max-content 1fr',
        columnGap: '6',
        rowGap: '2',
        maxWidth: 'content',
        bg: 'surface',
        border: '1px solid',
        borderColor: 'border',
        borderRadius: 'control',
        px: '5',
        py: '4',
        textStyle: 'mono',
      })}
    >
      {facts.map(({ label, value }) => (
        <div key={label} className={css({ display: 'contents' })}>
          <dt className={css({ color: 'text.muted' })}>{label}</dt>
          <dd className={css({ color: 'text' })}>{value}</dd>
        </div>
      ))}
    </dl>
  )
}
