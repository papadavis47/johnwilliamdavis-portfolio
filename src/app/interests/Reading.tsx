'use client'

import { Book } from 'lucide-react'
import { css } from 'styled-system/css'
import InterestCard from './InterestCard'

const books = [
  { title: 'Life Rider', author: 'Laird Hamilton & Gabrielle Reece' },
  {
    title: 'Natural Born Heroes',
    author: 'Christopher McDougal',
  },
  {
    title: 'Rust In Action',
    author: 'Tim McNamara',
  },
  { title: 'The Forever War', author: 'Dexter Filkins' },
  { title: 'The Things They Carried', author: "Tim O'Brien" },
  { title: 'Programming TypeScript', author: 'Boris Cherny' },
]

export default function Reading() {
  return (
    <InterestCard icon={Book} title="Reading">
      <p
        className={css({
          color: 'text',
          lineHeight: '1.7',
          mb: '6',
          maxWidth: '65ch',
        })}
      >
        I love reading different kinds of books on many diverse subject:
        technical, fiction and nonfiction. Here are a some of my favorites.
      </p>

      <ul
        className={css({
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4',
          md: { gridTemplateColumns: 'repeat(2, 1fr)' },
        })}
      >
        {books.map((book) => (
          <li
            key={book.title}
            className={css({
              bg: 'muted/10',
              borderRadius: '8px',
              p: '4',
              transition: 'background 200ms',
              _hover: { bg: 'muted/20' },
            })}
          >
            <p
              className={css({
                fontWeight: '600',
                color: 'text',
                mb: '1',
              })}
            >
              {book.title}
            </p>
            <p
              className={css({
                fontSize: '0.9rem',
                color: 'secondary',
              })}
            >
              {book.author}
            </p>
          </li>
        ))}
      </ul>
    </InterestCard>
  )
}
