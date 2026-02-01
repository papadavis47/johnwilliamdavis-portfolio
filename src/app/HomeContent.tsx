'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { css } from '../../styled-system/css'
import { merriweather } from '@/app/fonts'

export default function HomeContent() {
  return (
    <main
      className={css({
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: '4',
        py: '12',
        bg: 'bg',
      })}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={css({
          textAlign: 'center',
          maxWidth: '700px',
        })}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`${merriweather.className} ${css({
            fontSize: '2.5rem',
            fontWeight: '700',
            color: 'text',
            mb: '3',
            sm: { fontSize: '3.5rem' },
            md: { fontSize: '4rem' },
          })}`}
        >
          John William Davis
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${merriweather.className} ${css({
            fontSize: '1.25rem',
            fontWeight: '400',
            color: 'primary',
            mb: '8',
            sm: { fontSize: '1.5rem' },
            md: { fontSize: '1.75rem' },
          })}`}
        >
          TypeScript / Rust / Go Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={css({
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'muted',
            mb: '10',
            sm: { fontSize: '1.2rem' },
          })}
        >
          I build robust, performant applications with modern technologies.
          Passionate about clean code, type safety, and crafting exceptional
          developer experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '4',
            alignItems: 'center',
            sm: { flexDirection: 'row', justifyContent: 'center' },
          })}
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={css({
                px: '8',
                py: '3',
                fontSize: '1rem',
                fontWeight: '500',
                color: 'white',
                bg: 'primary',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background 200ms',
                _hover: { opacity: 0.9 },
              })}
            >
              View Projects
            </motion.button>
          </Link>

          <Link href="/about-me">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={css({
                px: '8',
                py: '3',
                fontSize: '1rem',
                fontWeight: '500',
                color: 'primary',
                bg: 'transparent',
                border: '2px solid',
                borderColor: 'primary',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 200ms',
                _hover: { bg: 'primary', color: 'white' },
              })}
            >
              About Me
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
