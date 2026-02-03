'use client'

import Link from 'next/link'
import { Book, Mountain, PenLine } from 'lucide-react'
import { css } from '../../../styled-system/css'
import { merriweather } from '@/app/fonts'
import InterestCard from '@/components/InterestCard'

const books = [
  { title: 'The Pragmatic Programmer', author: 'David Thomas & Andrew Hunt' },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Abelson & Sussman',
  },
  { title: 'The Art of Unix Programming', author: 'Eric S. Raymond' },
]

export default function OtherInterestsContent() {
  return (
    <main
      className={css({
        maxWidth: '900px',
        mx: 'auto',
        px: '4',
        py: '12',
      })}
    >
      <h1
        className={`${merriweather.className} ${css({
          fontSize: '2.5rem',
          fontWeight: '700',
          color: 'text',
          mb: '12',
          textAlign: 'center',
        })}`}
      >
        Other Interests
      </h1>

      <div
        className={css({ display: 'flex', flexDirection: 'column', gap: '16' })}
      >
        <InterestCard icon={Book} title="Reading">
          <p
            className={css({
              color: 'text',
              lineHeight: '1.7',
              mb: '6',
              maxWidth: '65ch',
            })}
          >
            I enjoy reading technical books that deepen my understanding of
            software engineering principles and practices. Here are some
            favorites that have shaped how I think about building software.
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

        <InterestCard icon={PenLine} title="Writing" delay={0.4}>
          <p
            className={css({
              color: 'text',
              lineHeight: '1.7',
              mb: '6',
              maxWidth: '65ch',
            })}
          >
            Writing has always been a way for me to clarify my thoughts and
            share ideas with others. Whether it&apos;s technical documentation,
            blog posts, or personal reflections, putting words to paper helps me
            process complex concepts and communicate more effectively.
          </p>

          <div
            className={css({
              bg: 'muted/10',
              borderRadius: '8px',
              p: '5',
            })}
          >
            <p
              className={css({
                color: 'text',
                lineHeight: '1.7',
              })}
            >
              I believe that clear writing reflects clear thinking. The
              discipline of organizing ideas into coherent prose has made me a
              better engineer and collaborator.
            </p>
          </div>
        </InterestCard>
        <InterestCard icon={Mountain} title="Trail Running" delay={0.2}>
          <p
            className={css({
              color: 'text',
              lineHeight: '1.7',
              mb: '6',
              maxWidth: '65ch',
            })}
          >
            When I&apos;m not coding, you&apos;ll find me on the trails. Trail
            running is my way of disconnecting from screens and reconnecting
            with nature. The challenge of varied terrain keeps both mind and
            body engaged.
          </p>

          <div
            className={css({
              bg: 'muted/10',
              borderRadius: '8px',
              p: '5',
            })}
          >
            <p
              className={css({
                color: 'text',
                lineHeight: '1.7',
              })}
            >
              My love for the mountains inspired{' '}
              <Link
                href="/projects/mountains"
                className={css({
                  color: 'primary',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  transition: 'color 200ms',
                  _hover: { color: 'secondary' },
                })}
              >
                Mountains
              </Link>
              , a terminal-based application for tracking runs and exploring
              trail data.
            </p>
          </div>

          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '4',
              mt: '6',
              textAlign: 'center',
            })}
          >
            <div>
              <p
                className={css({
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'secondary',
                })}
              >
                500+
              </p>
              <p className={css({ fontSize: '0.85rem', color: 'text' })}>
                Miles Run
              </p>
            </div>
            <div>
              <p
                className={css({
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'secondary',
                })}
              >
                50K+
              </p>
              <p className={css({ fontSize: '0.85rem', color: 'text' })}>
                Elevation Gain
              </p>
            </div>
            <div>
              <p
                className={css({
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: 'secondary',
                })}
              >
                25+
              </p>
              <p className={css({ fontSize: '0.85rem', color: 'text' })}>
                Trails Explored
              </p>
            </div>
          </div>
        </InterestCard>
      </div>
    </main>
  )
}
