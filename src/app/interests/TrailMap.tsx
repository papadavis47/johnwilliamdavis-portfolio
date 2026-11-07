'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'motion/react'
import { Mountain } from 'lucide-react'
import { css, cx } from 'styled-system/css'

interface TrailPhoto {
  src: string
  alt: string
  width: number
  height: number
  caption: string
}

const selfie: TrailPhoto = {
  src: '/images/trail/with-my-daughter.webp',
  alt: 'John William Davis and his daughter smiling in a selfie on a trail, with evergreens and an overcast sky behind them',
  width: 1600,
  height: 1200,
  caption: 'Out on the trail with my daughter',
}
const trail1: TrailPhoto = {
  src: '/images/trail/trail-1.webp',
  alt: 'A narrow dirt singletrack winding through dense green undergrowth in a Pacific Northwest forest',
  width: 1200,
  height: 1600,
  caption: 'Singletrack',
}
const oldGrowth: TrailPhoto = {
  src: '/images/trail/old-growth.webp',
  alt: 'Looking up at tall, straight conifers with sunlight filtering through the canopy',
  width: 1200,
  height: 1600,
  caption: 'Within the tall firs',
}
const ferns: TrailPhoto = {
  src: '/images/trail/fern-singletrack.webp',
  alt: 'A dirt trail curving downhill between thick ferns and mossy trees',
  width: 1200,
  height: 1600,
  caption: 'More singletrack',
}
const summitPhoto: TrailPhoto = {
  src: '/images/trail/summit.webp',
  alt: 'A forested hilltop with a radio tower under a deep blue sky, seen across a rocky clearing',
  width: 1200,
  height: 1600,
  caption: 'Topping out',
}
const blowdown: TrailPhoto = {
  src: '/images/trail/blowdown.webp',
  alt: 'Fallen trees lying across a forest trail amid green undergrowth',
  width: 1600,
  height: 1200,
  caption: 'Blowdown',
}
const trailBreak: TrailPhoto = {
  src: '/images/trail/trail-break.webp',
  alt: 'Legs and blue running shoes stretched out in sunny grass at the edge of an evergreen forest',
  width: 1200,
  height: 1600,
  caption: 'A breather',
}
const trail2: TrailPhoto = {
  src: '/images/trail/trail-2.webp',
  alt: 'Low sun breaking through evergreens and casting long shadows across a forest trail',
  width: 1200,
  height: 1600,
  caption: 'Late light',
}

// Landscapes run full width; portraits pair up either side of the trail, and
// share an aspect ratio, so each pair lines up without cropping.
type Row =
  | { kind: 'wide'; photo: TrailPhoto }
  | { kind: 'pair'; photos: [TrailPhoto, TrailPhoto] }

const rows: Row[] = [
  { kind: 'wide', photo: selfie },
  { kind: 'pair', photos: [trail1, oldGrowth] },
  { kind: 'pair', photos: [ferns, trail2] },
  { kind: 'wide', photo: blowdown },
  { kind: 'pair', photos: [trailBreak, summitPhoto] },
]

// Bleeds partway into the card's padding on desktop so the photos get the
// width; the trail stays dead center either way.
const map = css({ my: '8', mx: { md: '-4' } })
const track = css({ position: 'relative' })

// Every row shares one column template so the spine column lines up down the
// whole list. Phones: spine on the left edge, photo beside it.
const columns = {
  gridTemplateColumns: {
    base: '2.5rem minmax(0, 1fr)',
    md: 'minmax(0, 1fr) 2.5rem minmax(0, 1fr)',
  },
  columnGap: { base: '3', md: '0' },
} as const

// Phones: one photo per grid row, all beside the spine. Desktop: a pair sits
// either side of it; a wide photo spans all three columns and the trail
// passes behind it.
const pairRow = css({
  ...columns,
  display: 'grid',
  gridTemplateAreas: {
    base: '"spine a" "spine b"',
    md: '"a spine b"',
  },
  rowGap: '8',
  py: { base: '4', md: '5' },
})
const wideRow = css({
  ...columns,
  display: 'grid',
  gridTemplateAreas: { base: '"spine a"', md: '"a a a"' },
  position: 'relative',
  zIndex: '1',
  py: { base: '4', md: '5' },
})

const spineAnchor = css({ gridArea: 'spine' })

const figure = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '3',
})
const areaA = css({ gridArea: 'a', pr: { md: '3' } })
const areaB = css({ gridArea: 'b', pl: { md: '3' } })
// Same fill as the card, so the trail passing behind the row is hidden under
// the caption too, not just the photo.
const areaWide = css({ gridArea: 'a', bg: 'surface' })

const frame = css({
  overflow: 'hidden',
  borderRadius: 'control',
  boxShadow: 'lifted',
  bg: 'surface',
})
const image = css({ display: 'block', width: '100%', height: 'auto' })

const caption = css({ display: 'flex', alignItems: 'baseline', gap: '3' })
// Captions hug the trail: a photo left of the spine aligns its caption right.
const captionRight = css({ md: { justifyContent: 'flex-end' } })
const captionCenter = css({ md: { justifyContent: 'center' } })
const waypointNumber = css({ textStyle: 'mono', color: 'accent' })
const captionText = css({
  textStyle: 'prose',
  color: 'text.muted',
})

const spineSvg = css({
  position: 'absolute',
  inset: '0',
  overflow: 'visible',
  pointerEvents: 'none',
})
const trailAhead = css({ stroke: 'border' })
const trailWalked = css({ stroke: 'accent' })

const dot = css({
  position: 'absolute',
  width: '4',
  height: '4',
  translate: '-50% -50%',
  borderRadius: 'full',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'accent',
  bg: 'surface',
  display: 'grid',
  placeItems: 'center',
  pointerEvents: 'none',
})
const dotFill = css({
  width: '2',
  height: '2',
  borderRadius: 'full',
  bg: 'accent',
})

const capRow = css({
  ...columns,
  display: 'grid',
  gridTemplateAreas: { base: '"spine label"', md: '". spine label"' },
  alignItems: 'center',
})
const capMarker = css({ gridArea: 'spine', justifySelf: 'center' })
const capLabel = css({
  gridArea: 'label',
  textStyle: 'mono',
  color: 'text.muted',
  px: { md: '3' },
})
const trailhead = css({
  display: 'block',
  width: '3',
  height: '3',
  borderRadius: 'full',
  bg: 'accent',
})
const summit = css({
  display: 'grid',
  placeItems: 'center',
  width: '10',
  height: '10',
  borderRadius: 'full',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: 'accent',
  bg: 'surface',
  color: 'accent',
})

interface Geometry {
  w: number
  h: number
  // spine center x
  c: number
  // waypoint dot y positions; a dot is dropped where a photo covers the spine
  dots: number[]
}

// Reads the laid-out positions back from the DOM: the spine column's center
// and each photo's vertical middle. The path is drawn in real pixels from
// these, so stroke width and dashes never warp.
function useTrailGeometry() {
  const ref = useRef<HTMLDivElement>(null)
  const [geo, setGeo] = useState<Geometry | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => {
      const box = el.getBoundingClientRect()
      const anchor = el.querySelector('[data-spine]')?.getBoundingClientRect()
      if (!anchor) return
      const c = anchor.left + anchor.width / 2 - box.left
      const dots: number[] = []
      el.querySelectorAll('[data-waypoint]').forEach((node) => {
        const r = node.getBoundingClientRect()
        const coversSpine = r.left - box.left < c && r.right - box.left > c
        const y = Math.round(r.top + r.height / 2 - box.top)
        if (!coversSpine && !dots.some((d) => Math.abs(d - y) < 4)) dots.push(y)
      })
      setGeo({ w: box.width, h: box.height, c, dots })
    }
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, geo] as const
}

// One S-bend between each pair of stops (top, every dot, bottom): out to the
// right, back through center, out to the left, back to center. Each bend ends
// on the tangent the next one starts with, so the trail reads as one line.
function trailPath({ h, c, dots }: Geometry) {
  const a = 16
  const stops = [0, ...dots, h]
  let d = `M ${c} 0`
  for (let i = 1; i < stops.length; i++) {
    const y0 = stops[i - 1]
    const span = stops[i] - y0
    const y = (t: number) => y0 + span * t
    d += ` C ${c + a} ${y(0.15)}, ${c + a} ${y(0.35)}, ${c} ${y(0.5)}`
    d += ` C ${c - a} ${y(0.65)}, ${c - a} ${y(0.85)}, ${c} ${y(1)}`
  }
  return d
}

function Dot({
  x,
  y,
  h,
  progress,
  still,
}: {
  x: number
  y: number
  h: number
  progress: MotionValue<number>
  still: boolean
}) {
  // fills as the drawn line reaches it
  const fill = useTransform(progress, [(y - 12) / h, (y + 4) / h], [0, 1])
  return (
    <span className={dot} style={{ left: x, top: y }} aria-hidden="true">
      <motion.span className={dotFill} style={{ scale: still ? 1 : fill }} />
    </span>
  )
}

function Spine({
  geo,
  progress,
  still,
}: {
  geo: Geometry
  progress: MotionValue<number>
  // reduced motion: the whole trail is drawn and every dot filled
  still: boolean
}) {
  const clipId = `trail-${useId().replace(/[^\w-]/g, '')}`
  const walkedHeight = useTransform(progress, (p) => p * geo.h)
  const d = trailPath(geo)

  return (
    <>
      <svg
        className={spineSvg}
        width={geo.w}
        height={geo.h}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipId}>
            <motion.rect
              x={0}
              y={0}
              width={geo.w}
              height={still ? geo.h : walkedHeight}
            />
          </clipPath>
        </defs>
        <path
          d={d}
          className={trailAhead}
          strokeWidth={2}
          strokeDasharray="2 7"
          strokeLinecap="round"
        />
        <path
          d={d}
          className={trailWalked}
          strokeWidth={3}
          strokeLinecap="round"
          clipPath={`url(#${clipId})`}
        />
      </svg>
      {geo.dots.map((y) => (
        <Dot
          key={y}
          x={geo.c}
          y={y}
          h={geo.h}
          progress={progress}
          still={still}
        />
      ))}
    </>
  )
}

type Placement = 'left' | 'right' | 'wide'

const placementStyles: Record<Placement, string> = {
  left: cx(figure, areaA),
  right: cx(figure, areaB),
  wide: cx(figure, areaWide),
}
const captionStyles: Record<Placement, string> = {
  left: cx(caption, captionRight),
  right: caption,
  wide: cx(caption, captionCenter),
}
// Pairs slide in from their own side and settle with a slight outward tilt;
// a wide photo scales up in place (no y offset: the trail geometry is read
// from the live layout, and scale and rotate keep each photo's center put).
const entrance: Record<Placement, { x: number; rotate: number }> = {
  left: { x: -24, rotate: -1 },
  right: { x: 24, rotate: 1 },
  wide: { x: 0, rotate: 0 },
}

function Photo({
  photo,
  number,
  placement,
}: {
  photo: TrailPhoto
  number: number
  placement: Placement
}) {
  const { x, rotate } = entrance[placement]
  const wide = placement === 'wide'
  return (
    <motion.figure
      className={placementStyles[placement]}
      initial={{ opacity: 0, x, rotate: rotate * 3, scale: wide ? 0.96 : 1 }}
      whileInView={{ opacity: 1, x: 0, rotate, scale: 1 }}
      whileHover={{ rotate: 0, scale: wide ? 1.01 : 1.02 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
    >
      <div className={frame} data-waypoint>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes={
            wide
              ? '(max-width: 768px) calc(100vw - 7rem), 830px'
              : '(max-width: 768px) calc(100vw - 7rem), 400px'
          }
          className={image}
        />
      </div>
      <figcaption className={captionStyles[placement]}>
        <span className={waypointNumber}>
          {String(number).padStart(2, '0')}
        </span>
        <span className={captionText}>{photo.caption}</span>
      </figcaption>
    </motion.figure>
  )
}

// running photo number across rows: 01 to 08
const rowStart = rows.reduce<number[]>((starts, row, i) => {
  const prev =
    i === 0 ? 1 : starts[i - 1] + (rows[i - 1].kind === 'pair' ? 2 : 1)
  return [...starts, prev]
}, [])

export default function TrailMap() {
  const [ref, geo] = useTrailGeometry()
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 70%'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className={map}>
      <div className={capRow} aria-hidden="true">
        <span className={capMarker}>
          <span className={trailhead} />
        </span>
        <span className={capLabel}>Trailhead</span>
      </div>
      <div ref={ref} className={track}>
        {geo && <Spine geo={geo} progress={progress} still={!!reduceMotion} />}
        <ol>
          {rows.map((row, i) =>
            row.kind === 'wide' ? (
              // no spine anchor here: on desktop this row has no spine column
              <li key={row.photo.src} className={wideRow}>
                <Photo
                  photo={row.photo}
                  number={rowStart[i]}
                  placement="wide"
                />
              </li>
            ) : (
              <li key={row.photos[0].src} className={pairRow}>
                <span className={spineAnchor} data-spine aria-hidden="true" />
                <Photo
                  photo={row.photos[0]}
                  number={rowStart[i]}
                  placement="left"
                />
                <Photo
                  photo={row.photos[1]}
                  number={rowStart[i] + 1}
                  placement="right"
                />
              </li>
            ),
          )}
        </ol>
      </div>
      <div className={capRow} aria-hidden="true">
        <motion.span
          className={capMarker}
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 14 }}
        >
          <span className={summit}>
            <Mountain size={20} />
          </span>
        </motion.span>
        <span className={capLabel}>Summit</span>
      </div>
    </div>
  )
}
