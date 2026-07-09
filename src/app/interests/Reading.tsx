'use client'

import Image from 'next/image'
import { Book } from 'lucide-react'
import { css } from 'styled-system/css'
import InterestCard from './InterestCard'

const books = [
  {
    title: 'Liferider',
    author: 'Laird Hamilton & Gabrielle Reece',
    coverSrc: '/images/books/liferider.jpg',
  },
  {
    title: 'Natural Born Heroes',
    author: 'Christopher McDougall',
    coverSrc: '/images/books/natural-born-heroes.jpg',
  },
  {
    title: 'Rust In Action',
    author: 'Tim McNamara',
    coverSrc: '/images/books/rust-in-action.jpg',
  },
  {
    title: 'The Forever War',
    author: 'Dexter Filkins',
    coverSrc: '/images/books/the-forever-war.jpg',
  },
  {
    title: 'The Things They Carried',
    author: "Tim O'Brien",
    coverSrc: '/images/books/the-things-they-carried.jpg',
  },
  {
    title: 'Programming TypeScript',
    author: 'Boris Cherny',
    coverSrc: '/images/books/programming-typescript.jpg',
  },
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
        I love reading books on diverse subjects: technical, fiction and
        nonfiction. Here are a some of my favorites.
      </p>

      <ul
        className={css({
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '4',
          listStyle: 'none',
          p: '0',
          md: { gridTemplateColumns: 'repeat(2, 1fr)' },
        })}
      >
        {books.map((book) => (
          <li
            key={book.title}
            className={css({
              display: 'grid',
              gridTemplateColumns: '82px 1fr',
              gap: '4',
              alignItems: 'start',
              bg: 'muted/10',
              borderRadius: '8px',
              p: '4',
              transition: 'background 200ms',
              _hover: { bg: 'muted/20' },
            })}
          >
            <Image
              src={book.coverSrc}
              alt={`${book.title} book cover`}
              width={82}
              height={124}
              className={css({
                width: '82px',
                height: '124px',
                objectFit: 'cover',
                borderRadius: '4px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.18)',
              })}
            />
            <div>
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
            </div>
          </li>
        ))}
      </ul>
    </InterestCard>
  )
}
