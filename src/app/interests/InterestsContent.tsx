'use client'

import Link from 'next/link'
import { Book, Mountain, PenLine } from 'lucide-react'
import { css } from 'styled-system/css'
import { merriweather } from '@/app/fonts'
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

export default function InterestsContent() {
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
        Interests
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

        <InterestCard icon={PenLine} title="Writing" delay={0.4}>
          <p
            className={css({
              color: 'text',
              lineHeight: '1.7',
              mb: '6',
              maxWidth: '65ch',
            })}
          >
            Writing is a way for me to clarify my thoughts and express myself at
            the same time. The process of putting ideas into words on a page,
            whether paper or digial, is one of the most human things we can do
            now in this age of LLMs. I like to remind myself that writing, while
            difficult to do well, is like exercise - pushups for the brain.
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
              I write publicly on my blog here.
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
            Trail running is my way of disconnecting from screens and
            reconnecting with nature. It&apos;s a way to find peace in a
            complicated world. There are few things more core to who we humans
            are as a species than moving on foot across a landscape. Varied
            terrain keeps both mind and body engaged.
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
                Mountains{' '}
              </Link>
              &nbsp;-- a terminal-based application for tracking runs and
              exploring trail data.
            </p>
            <p
              className={css({
                color: 'text',
                lineHeight: '1.7',
                mt: '2',
              })}
            >
              I have also recently completed a{' '}
              <Link
                href="https://github.com/papadavis47/mountains-web"
                className={css({
                  color: 'primary',
                  textDecoration: 'underline',
                  textUnderlineOffset: '3px',
                  transition: 'color 200ms',
                  _hover: { color: 'secondary' },
                })}
              >
                web version{' '}
              </Link>
              of Mountains.
            </p>
          </div>

          {/*<div
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
          </div>*/}
        </InterestCard>
      </div>
    </main>
  )
}
