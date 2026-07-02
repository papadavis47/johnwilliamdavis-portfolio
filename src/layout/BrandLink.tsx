'use client'

import Link from 'next/link'
import { css } from '../../styled-system/css'
import { merriweather } from '@/app/fonts'

function BrandLink() {
  return (
    <Link
      href="/"
      className={`${merriweather.className} ${css({
        fontSize: '1rem',
        fontWeight: '700',
        color: 'text',
        textDecoration: 'none',
        transition: 'color 200ms',
        _hover: { color: 'primary' },
      })}`}
    >
      JWD
    </Link>
  )
}

export default BrandLink
