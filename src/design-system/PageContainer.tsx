import { cva } from 'styled-system/css'

// Every route shares one 56rem frame so page headings sit on a single left
// edge, aligned with the nav. Long-form text caps itself at `maxWidth: content`
// (44rem) for reading measure — the frame does not narrow for it.
const container = cva({
  base: {
    mx: 'auto',
    px: '6',
    maxWidth: 'contentWide',
    pb: { base: '20', md: '24' },
  },
  variants: {
    hero: {
      true: { pt: { base: '20', md: '28' } },
      false: { pt: { base: '12', md: '16' } },
    },
  },
  defaultVariants: { hero: false },
})

interface PageContainerProps {
  hero?: boolean
  children: React.ReactNode
}

export default function PageContainer({
  hero = false,
  children,
}: PageContainerProps) {
  return <div className={container({ hero })}>{children}</div>
}
