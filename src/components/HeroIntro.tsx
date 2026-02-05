'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { css } from '../../styled-system/css'
import { merriweather } from '@/app/fonts'

export default function HeroIntro() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`${merriweather.className} ${css({
          fontSize: '2rem',
          fontWeight: '700',
          color: 'text',
          mb: '3',
          sm: { fontSize: '2rem' },
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
        Software Engineer
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
          textAlign: 'justify',
          sm: { fontSize: '1.2rem' },
        })}
      >
        I build performant applications and web experiences with modern tools
        and technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={css({
          display: 'flex',
          flexDirection: 'row',
          gap: '3',
          alignItems: 'flex-start',
          sm: { gap: '4' },
        })}
      >
        <Link href="/projects">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className={css({
              px: '5',
              py: '2.5',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'white',
              bg: 'primary',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background 200ms',
              _hover: { opacity: 0.9 },
              sm: { px: '8', py: '3', fontSize: '1rem' },
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
              px: '5',
              py: '2.5',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'primary',
              bg: 'transparent',
              border: '2px solid',
              borderColor: 'primary',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 200ms',
              _hover: { bg: 'primary', color: 'white' },
              sm: { px: '8', py: '3', fontSize: '1rem' },
            })}
          >
            About Me
          </motion.button>
        </Link>
      </motion.div>
    </>
  )
}
