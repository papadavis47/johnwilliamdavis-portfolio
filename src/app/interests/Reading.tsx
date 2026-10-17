'use client'

import { useEffect, useRef, useState } from 'react'
import { Book } from 'lucide-react'
import { LayoutGroup, useReducedMotion } from 'motion/react'
import { css } from 'styled-system/css'
import InterestCard from './InterestCard'
import BookCard from './BookCard'
import { books } from './books'

export default function Reading() {
  // one card open at a time; opening another swaps, reopening closes
  const [openTitle, setOpenTitle] = useState<string | null>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const reduceMotion = useReducedMotion()

  // The open book moves to the top of the list (in the DOM, so tab and
  // screen-reader order match what's on screen) and takes the full first row.
  // Closing it puts it back in its original spot.
  const openBook = books.find((book) => book.title === openTitle)
  const closed = books.filter((book) => book !== openBook)
  const ordered = openBook ? [openBook, ...closed] : books

  // If the closed cards are an odd count, the last one would sit alone on its
  // row, so stretch it across the row too.
  const stretchedTitle =
    closed.length % 2 === 1 ? closed.at(-1)?.title : undefined

  // A book opened further down jumps to the top, possibly off screen; bring
  // the list's top back into view. Measured on the list, not the card, since
  // motion's layout animation leaves the card transformed mid-flight.
  useEffect(() => {
    const list = listRef.current
    if (!openTitle || !list) return
    const top = list.getBoundingClientRect().top
    const navHeight = parseFloat(getComputedStyle(list).scrollMarginTop)
    if (top < navHeight) {
      list.scrollIntoView({
        block: 'start',
        behavior: reduceMotion ? 'auto' : 'smooth',
      })
    }
  }, [openTitle, reduceMotion])

  return (
    <InterestCard icon={Book} title="Reading">
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '6',
          maxWidth: '65ch',
        })}
      >
        I love reading books on diverse subjects. These are some of my recent
        favorites:
      </p>

      <LayoutGroup>
        <ul
          ref={listRef}
          className={css({
            display: 'grid',
            // minmax(0, …): a card's min-content never widens the column
            gridTemplateColumns: 'minmax(0, 1fr)',
            // BookCard lays out against this width (cover beside or above)
            containerType: 'inline-size',
            gap: '4',
            // clears the sticky header when scrolled into view
            scrollMarginTop: 'calc(token(sizes.navHeight) + token(spacing.4))',
            listStyle: 'none',
            p: '0',
            md: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
          })}
        >
          {ordered.map((book) => (
            <BookCard
              key={book.title}
              book={book}
              index={books.indexOf(book)}
              expanded={openTitle === book.title}
              stretched={stretchedTitle === book.title}
              onToggle={() =>
                setOpenTitle((open) => (open === book.title ? null : book.title))
              }
            />
          ))}
        </ul>
      </LayoutGroup>
    </InterestCard>
  )
}
