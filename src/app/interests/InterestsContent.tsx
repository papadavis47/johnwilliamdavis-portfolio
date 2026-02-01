'use client'

import Link from 'next/link'
import { Book, Mountain } from 'lucide-react'
import { motion } from 'motion/react'
import { css } from '../../../styled-system/css'
import { merriweather } from '@/app/fonts'

const books = [
  { title: 'The Pragmatic Programmer', author: 'David Thomas & Andrew Hunt' },
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
  { title: 'Structure and Interpretation of Computer Programs', author: 'Abelson & Sussman' },
  { title: 'The Art of Unix Programming', author: 'Eric S. Raymond' },
]

const sectionAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

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

      <div className={css({ display: 'flex', flexDirection: 'column', gap: '16' })}>
        <motion.section
          {...sectionAnimation}
          className={css({
            bg: 'surface',
            borderRadius: '12px',
            p: '8',
            border: '1px solid',
            borderColor: 'muted/20',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '3',
              mb: '4',
            })}
          >
            <Book
              size={28}
              className={css({ color: 'secondary' })}
            />
            <h2
              className={`${merriweather.className} ${css({
                fontSize: '1.75rem',
                fontWeight: '700',
                color: 'text',
              })}`}
            >
              Reading
            </h2>
          </div>

          <p
            className={css({
              color: 'text',
              lineHeight: '1.7',
              mb: '6',
              maxWidth: '65ch',
            })}
          >
            I enjoy reading technical books that deepen my understanding of software
            engineering principles and practices. Here are some favorites that have
            shaped how I think about building software.
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
        </motion.section>

        <motion.section
          {...sectionAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={css({
            bg: 'surface',
            borderRadius: '12px',
            p: '8',
            border: '1px solid',
            borderColor: 'muted/20',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '3',
              mb: '4',
            })}
          >
            <Mountain
              size={28}
              className={css({ color: 'secondary' })}
            />
            <h2
              className={`${merriweather.className} ${css({
                fontSize: '1.75rem',
                fontWeight: '700',
                color: 'text',
              })}`}
            >
              Trail Running
            </h2>
          </div>

          <p
            className={css({
              color: 'text',
              lineHeight: '1.7',
              mb: '6',
              maxWidth: '65ch',
            })}
          >
            When I&apos;m not coding, you&apos;ll find me on the trails. Trail running is my way
            of disconnecting from screens and reconnecting with nature. The challenge
            of varied terrain keeps both mind and body engaged.
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
              , a terminal-based application for tracking runs and exploring trail data.
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
              <p className={css({ fontSize: '0.85rem', color: 'text' })}>Miles Run</p>
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
              <p className={css({ fontSize: '0.85rem', color: 'text' })}>Elevation Gain</p>
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
              <p className={css({ fontSize: '0.85rem', color: 'text' })}>Trails Explored</p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}
