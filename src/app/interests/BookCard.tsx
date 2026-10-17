'use client'

import { useEffect, useId, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { css, cx } from 'styled-system/css'
import type { Book } from './books'

interface BookCardProps {
  book: Book
  index: number
  expanded: boolean
  // fills a row that would otherwise end on an empty slot
  stretched: boolean
  onToggle: () => void
}

// Narrow cards (phones) stack the cover above the title; a title word like
// "Programming" can't fit beside a 120px cover under ~20rem. The query reads
// the list's width (Reading sets `containerType`); from md the list splits
// into two columns but each is still wide enough to sit side by side.
//
// Lift and tilt use the individual `translate`/`rotate` properties, not
// `transform`: motion's layout animation owns `transform` inline and would
// clobber a CSS transform on the same element.
const cardBase = css({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  columnGap: '4',
  '@container (min-width: 20rem)': {
    gridTemplateColumns: 'auto minmax(0, 1fr)',
  },
  alignItems: 'start',
  p: '4',
  bg: 'bg',
  border: '1px solid',
  borderColor: 'border',
  borderRadius: 'control',
  // clears the sticky header when a closed card is scrolled back into view
  scrollMarginTop: 'calc(token(sizes.navHeight) + token(spacing.4))',
  transition: 'border-color 200ms, box-shadow 200ms, translate 200ms',
  '&:hover, &:has(:focus-visible)': {
    borderColor: 'accent/40',
    boxShadow: 'hover',
  },
  _motionSafe: {
    '&:hover, &:has(:focus-visible)': { translate: '0 -2px' },
  },
})

const cardExpanded = css({
  gridColumn: '1 / -1',
  borderColor: 'accent/40',
})

const cardStretched = css({ gridColumn: '1 / -1' })

const coverBase = css({ gridColumn: '1', gridRow: '1', width: '120px' })
const coverExpanded = css({ md: { gridRow: '1 / span 2', width: '180px' } })

const coverImage = css({
  width: '100%',
  height: 'auto',
  borderRadius: 'sm',
  boxShadow: 'lifted',
  transition: 'rotate 200ms, translate 200ms',
  _motionSafe: {
    '.group:is(:hover, :has(:focus-visible)) &': {
      rotate: '-2deg',
      translate: '0 -2px',
    },
  },
})

const toggle = css({
  gridColumn: '1',
  gridRow: '2',
  mt: '4',
  '@container (min-width: 20rem)': { gridColumn: '2', gridRow: '1', mt: '0' },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1',
  textAlign: 'left',
  // last resort if a title word still outgrows its column
  overflowWrap: 'break-word',
  cursor: 'pointer',
  borderRadius: 'sm',
  _focusVisible: {
    outline: '2px solid',
    outlineColor: 'accent',
    outlineOffset: '4px',
  },
})

// Collapsed, the button's hit area stretches over the whole card so the
// cover and padding are tappable too. Expanded, the overlay drops so the
// notes stay selectable; the title block alone closes the card.
const toggleStretched = css({
  _after: {
    content: '""',
    position: 'absolute',
    inset: '0',
    borderRadius: 'control',
  },
})

// Reads as a link so the card's tappability is obvious, not a muted label.
const hint = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '1.5',
  mt: '3',
  textStyle: 'body',
  color: 'accent',
  textUnderlineOffset: '3px',
  transition: 'color 200ms',
  '.group:is(:hover, :has(:focus-visible)) &': {
    color: 'accent.hover',
    textDecoration: 'underline',
  },
})

const notes = css({
  gridColumn: '1 / -1',
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
  maxWidth: 'content',
  pt: '4',
  // extra room under the last line so long notes don't end flush on the edge
  pb: '6',
  md: { gridColumn: '2' },
})

const noteParagraphs = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
})

const noteLabel = css({
  textStyle: 'caption',
  color: 'text.muted',
  textTransform: 'uppercase',
  mb: '1',
})

const noteBody = css({ textStyle: 'prose', color: 'text' })

// Long notes leave the top toggle far behind; this closes from where you
// finished reading.
const bottomClose = css({
  alignSelf: 'flex-start',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '1.5',
  mt: '2',
  textStyle: 'body',
  color: 'accent',
  textUnderlineOffset: '3px',
  cursor: 'pointer',
  borderRadius: 'sm',
  transition: 'color 200ms',
  _hover: { color: 'accent.hover', textDecoration: 'underline' },
  _focusVisible: {
    outline: '2px solid',
    outlineColor: 'accent',
    outlineOffset: '4px',
  },
})

// A blank line in the copy is a paragraph break, as in projects.ts.
function NoteParagraphs({ text }: { text: string }) {
  return (
    <div className={noteParagraphs}>
      {text.split('\n\n').map((paragraph) => (
        <p key={paragraph} className={noteBody}>
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export default function BookCard({
  book,
  index,
  expanded,
  stretched,
  onToggle,
}: BookCardProps) {
  const notesId = useId()
  const cardRef = useRef<HTMLLIElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const refocus = useRef(false)
  const followOnClose = useRef(false)
  const reduceMotion = useReducedMotion()

  // Opening and closing reorders the list, and React may move this card's
  // node to do it; a moved node drops focus, so hand it back.
  useLayoutEffect(() => {
    if (!refocus.current) return
    refocus.current = false
    if (document.activeElement !== buttonRef.current) {
      buttonRef.current?.focus({ preventScroll: true })
    }
  }, [expanded])

  // Closing sends the card back to its original spot, often off screen;
  // follow it there once the layout animation (0.3s) has moved it, since
  // mid-flight its box is still transformed.
  useEffect(() => {
    if (expanded || !followOnClose.current) return
    followOnClose.current = false
    const timer = setTimeout(
      () =>
        cardRef.current?.scrollIntoView({
          block: 'nearest',
          behavior: reduceMotion ? 'auto' : 'smooth',
        }),
      reduceMotion ? 0 : 320,
    )
    return () => clearTimeout(timer)
  }, [expanded, reduceMotion])

  const handleClick = () => {
    refocus.current = document.activeElement === buttonRef.current
    followOnClose.current = expanded
    onToggle()
  }

  // the bottom button unmounts with the notes, so focus goes to the toggle
  const handleBottomClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    refocus.current = document.activeElement === event.currentTarget
    followOnClose.current = true
    onToggle()
  }

  return (
    <motion.li
      ref={cardRef}
      layout
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cx(
        'group',
        cardBase,
        expanded && cardExpanded,
        stretched && cardStretched,
      )}
    >
      <motion.div layout className={cx(coverBase, expanded && coverExpanded)}>
        <Image
          src={book.coverSrc}
          alt={`${book.title} book cover`}
          width={book.width}
          height={book.height}
          sizes="(min-width: 768px) 180px, 120px"
          loading={index < 2 ? 'eager' : undefined}
          className={coverImage}
        />
      </motion.div>

      <motion.button
        layout="position"
        type="button"
        aria-expanded={expanded}
        aria-controls={notesId}
        ref={buttonRef}
        onClick={handleClick}
        className={cx(toggle, !expanded && toggleStretched)}
      >
        <span className={css({ textStyle: 'h3', color: 'text' })}>
          {book.title}
        </span>
        <span className={css({ textStyle: 'small', color: 'text.muted' })}>
          {book.author}
        </span>
        {/* Open, the visible close lives at the bottom of the notes; the title
            block stays the toggle (and keeps aria-expanded) without a label. */}
        {!expanded && (
          <span className={hint}>
            My notes
            <ChevronDown size={18} aria-hidden />
          </span>
        )}
      </motion.button>

      {/* No exit animation: closing also shrinks and moves the card, and notes
          left fading inside it reflow into a tall, narrow column. They fade in
          on open and vanish on close. */}
      {expanded && (
        <motion.div
          id={notesId}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
          className={notes}
        >
          <div>
            <p className={noteLabel}>Summary</p>
            <NoteParagraphs text={book.summary} />
          </div>
          <div>
            <p className={noteLabel}>Why I read it</p>
            <NoteParagraphs text={book.takeaway} />
          </div>
          <button
            type="button"
            aria-label={`Hide notes on ${book.title}`}
            onClick={handleBottomClose}
            className={bottomClose}
          >
            Hide notes
            <ChevronUp size={18} aria-hidden />
          </button>
        </motion.div>
      )}
    </motion.li>
  )
}
