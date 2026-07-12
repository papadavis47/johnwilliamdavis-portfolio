'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Mountain } from 'lucide-react'
import { css, cx } from 'styled-system/css'
import { link } from 'styled-system/recipes'
import InterestCard from './InterestCard'

const photoStyles = css({
  width: '100%',
  height: 'auto',
  borderRadius: 'control',
  boxShadow: 'lifted',
})

// The downward nudge only reads once the pair sits side by side.
const offsetStyles = css({ sm: { mt: '10' } })

const photos = [
  {
    src: '/images/trail/trail-1.webp',
    alt: 'A narrow dirt singletrack winding through dense green undergrowth in a Pacific Northwest forest',
  },
  {
    src: '/images/trail/trail-2.webp',
    alt: 'Low sun breaking through evergreens and casting long shadows across a forest trail',
  },
]

export default function TrailRunning() {
  return (
    <InterestCard icon={Mountain} title="Trail Running" delay={0.2}>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '6',
          maxWidth: '65ch',
        })}
      >
        Trail running is my way of disconnecting from screens and reconnecting
        with nature and with my own body. On a beautiful trail, the noise of a
        complicated world quiets. There are few things more core to who we
        humans are as a species than moving on foot across a landscape.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
        className={css({
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '5',
          maxWidth: { base: '520px', md: '100%' },
          mb: '8',
          sm: { gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' },
        })}
      >
        {photos.map((photo, index) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={600}
            height={800}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 250px, 420px"
            className={cx(photoStyles, index === 1 && offsetStyles)}
          />
        ))}
      </motion.div>

      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          maxWidth: '65ch',
        })}
      >
        My love for the mountains inspired{' '}
        <Link href="/projects/mountains" className={link()}>
          Mountains
        </Link>{' '}
        &mdash; a terminal-based application for tracking runs and exploring
        trail data.
      </p>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          maxWidth: '65ch',
          mt: '4',
        })}
      >
        I have also recently completed a{' '}
        <Link
          href="https://github.com/papadavis47/mountains-web"
          target="_blank"
          rel="noopener noreferrer"
          className={link()}
        >
          web version
        </Link>{' '}
        of Mountains.
      </p>
    </InterestCard>
  )
}
