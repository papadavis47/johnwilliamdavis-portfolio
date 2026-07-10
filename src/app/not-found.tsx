'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Home } from 'lucide-react'
import { css } from 'styled-system/css'
import { button } from 'styled-system/recipes'
import PageContainer from '@/design-system/PageContainer'

export default function NotFound() {
  return (
    <PageContainer hero>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={css({ textAlign: 'center' })}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={css({
            display: 'block',
            fontFamily: 'heading',
            fontWeight: '700',
            fontSize: { base: '7xl', md: '8xl' },
            lineHeight: '1.1',
            color: 'accent',
            mb: '2',
          })}
        >
          404
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={css({
            textStyle: 'h1',
            color: 'text',
            mb: '4',
          })}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={css({
            textStyle: 'prose',
            color: 'text.muted',
            mb: '8',
          })}
        >
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="/" className={button({ visual: 'solid', size: 'md' })}>
            <Home size={20} />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </PageContainer>
  )
}
