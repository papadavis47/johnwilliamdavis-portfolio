'use client'

import { useId, useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
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

// Lift and tilt use the individual `translate`/`rotate` properties, not
// `transform`: motion's layout animation owns `transform` inline and would
// clobber a CSS transform on the same element.
const cardBase = css({
  position: 'relative',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  columnGap: '4',
  alignItems: 'start',
  p: '4',
  bg: 'bg',
  border: '1px solid',
  borderColor: 'border',
  borderRadius: 'control',
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
  gridColumn: '2',
  gridRow: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1',
  textAlign: 'left',
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

const chevron = css({ transition: 'rotate 200ms' })
const chevronOpen = css({ rotate: '180deg' })

const notes = css({
  gridColumn: '1 / -1',
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
  maxWidth: 'content',
  pt: '4',
  md: { gridColumn: '2' },
})

const noteLabel = css({
  textStyle: 'caption',
  color: 'text.muted',
  textTransform: 'uppercase',
  mb: '1',
})

const noteBody = css({ textStyle: 'prose', color: 'text' })

export default function BookCard({
  book,
  index,
  expanded,
  stretched,
  onToggle,
}: BookCardProps) {
  const notesId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const refocus = useRef(false)

  // Opening and closing reorders the list, and React may move this card's
  // node to do it; a moved node drops focus, so hand it back.
  useLayoutEffect(() => {
    if (!refocus.current) return
    refocus.current = false
    if (document.activeElement !== buttonRef.current) {
      buttonRef.current?.focus({ preventScroll: true })
    }
  }, [expanded])

  const handleClick = () => {
    refocus.current = document.activeElement === buttonRef.current
    onToggle()
  }

  return (
    <motion.li
      layout
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cx(
        'group',
        cardBase,
        expanded && cardExpanded,
        stretched && cardStretched,
      )}
    >
      <motion.div
        layout
        className={cx(coverBase, expanded && coverExpanded)}
      >
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
        <span className={hint}>
          {expanded ? 'Hide notes' : 'My notes'}
          <ChevronDown
            size={18}
            aria-hidden
            className={cx(chevron, expanded && chevronOpen)}
          />
        </span>
      </motion.button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="notes"
            id={notesId}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className={notes}
          >
            <div>
              <p className={noteLabel}>Summary</p>
              <p className={noteBody}>{book.summary}</p>
            </div>
            <div>
              <p className={noteLabel}>Why I read it</p>
              <p className={noteBody}>{book.takeaway}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}
