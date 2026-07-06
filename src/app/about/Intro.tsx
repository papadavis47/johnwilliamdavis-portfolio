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
        I wrote my first line of code in 2017 - having come to this profession
        as a result of wanting a craft that I could grow with and never fully
        master. I am driven to build software and tools that add to
        society&apos;s quality of life. I enjoy the building software and I see
        the act of engineering as part of a larger process to help people to
        live happier and more productive lives.
      </p>
      <p
        className={css({
          textStyle: 'prose',
          color: 'text',
          mb: '4',
        })}
      >
        I am happily married and I am the father of three teenage children. We
        have a beautiful golden retriever at home, and I love the outdoors -
        including trail running.
      </p>
    </motion.section>
  )
}
