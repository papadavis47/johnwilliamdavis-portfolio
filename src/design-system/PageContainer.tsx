import { cva } from 'styled-system/css'

const container = cva({
  base: {
    mx: 'auto',
    px: '6',
    pb: { base: '20', md: '24' },
  },
  variants: {
    width: {
      content: { maxWidth: 'content' },
      wide: { maxWidth: 'contentWide' },
    },
    hero: {
      true: { pt: { base: '20', md: '28' } },
      false: { pt: { base: '12', md: '16' } },
    },
  },
  defaultVariants: { width: 'content', hero: false },
})

interface PageContainerProps {
  width?: 'content' | 'wide'
  hero?: boolean
  children: React.ReactNode
}

export default function PageContainer({
  width = 'content',
  hero = false,
  children,
}: PageContainerProps) {
  return <div className={container({ width, hero })}>{children}</div>
}
