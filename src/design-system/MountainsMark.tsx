import type { SVGProps } from 'react'

type Props = Omit<SVGProps<SVGSVGElement>, 'width' | 'height'> & {
  size?: number | string
}

// Custom project mark for Mountains, replacing the lucide Mountain fallback.
// A histogram "peak" nodding to the TUI training log's daily-vert bars.
// Uses currentColor + fillOpacity so it inherits the accent token in both
// themes, exactly like the lucide icon it replaces. Bars are vertically
// centered in the 96 viewBox (21 top / 21 bottom) so the mark's optical center
// lines up with adjacent title text. Geometry mirrored in
// ~/priority-projects/mountains-assets for the TUI README and web app.
export function MountainsMark({ size = 24, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <rect x="14" y="59" width="8" height="16" rx="3" fillOpacity={0.4} />
      <rect x="25" y="47" width="8" height="28" rx="3" fillOpacity={0.55} />
      <rect x="36" y="35" width="8" height="40" rx="3" fillOpacity={0.75} />
      <rect x="47" y="21" width="8" height="54" rx="3" />
      <rect x="58" y="35" width="8" height="40" rx="3" fillOpacity={0.75} />
      <rect x="69" y="47" width="8" height="28" rx="3" fillOpacity={0.55} />
      <rect x="80" y="59" width="8" height="16" rx="3" fillOpacity={0.4} />
    </svg>
  )
}
