import { css, cx } from 'styled-system/css'
import { tag } from 'styled-system/recipes'

const row = css({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2',
})

export default function TechStack({
  items,
  className,
}: {
  items: readonly string[]
  className?: string
}) {
  return (
    <div className={cx(row, className)}>
      {items.map((item) => (
        <span key={item} className={tag()}>
          {item}
        </span>
      ))}
    </div>
  )
}
