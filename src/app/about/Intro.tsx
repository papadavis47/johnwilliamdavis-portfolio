'use client'

import { motion } from 'motion/react'
import { css } from 'styled-system/css'
import { itemVariants } from './skill-data'

export default function Intro() {
  return (
    <motion.section
      variants={itemVariants}
      className={css({
        mb: '12',
      })}
    >
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '4',
        })}
      >
        I wrote my first lines of code in 2017 - having come to computer
        programming as a result of wanting a craft that I could grow with and
        never fully master. I am driven to build software and tools that add to
        society&apos;s quality of life. I enjoy building software and I see the
        act of engineering as part of a larger process to help people live
        happier and more productive lives.
      </p>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '4',
        })}
      >
        I am a happily married father of three teenage children. We have a
        beautiful golden retriever at home, and I love the outdoors - including
        trail running.
      </p>
    </motion.section>
  )
}
