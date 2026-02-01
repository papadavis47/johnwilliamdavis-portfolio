'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Home } from 'lucide-react'
import { css } from '../../styled-system/css'
import { merriweather } from '@/app/fonts'

export default function NotFound() {
  return (
    <main
      className={css({
        minHeight: '100vh',
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
          maxWidth: '500px',
        })}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${merriweather.className} ${css({
            display: 'block',
            fontSize: '6rem',
            fontWeight: '700',
            color: 'primary',
            mb: '2',
            sm: { fontSize: '8rem' },
          })}`}
        >
          404
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${merriweather.className} ${css({
            fontSize: '1.75rem',
            fontWeight: '700',
            color: 'text',
            mb: '4',
            sm: { fontSize: '2.25rem' },
          })}`}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={css({
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: 'muted',
            mb: '8',
          })}
        >
          Sorry, the page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={css({
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2',
                px: '6',
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
              <Home size={20} />
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  )
}
