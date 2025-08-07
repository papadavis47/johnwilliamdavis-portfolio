import { merriweather } from '../app/fonts.ts'
import { css } from '../../styled-system/css'

function LandingTitle() {
  return (
    <div className={css({
      marginTop: '-75px',
      lineHeight: '1.75',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'hsl(0, 0%, 20%)',
    })}>
      <h1 className={css({
        fontFamily: 'merriweather',
        fontWeight: '400',
        fontSize: '1.75rem',
        transition: 'color 900ms',
        _hover: {
          color: 'hsl(209.6, 100%, 55.9%)',
        },
        sm: {
          fontSize: '2.5rem',
        },
      })}>John William Davis</h1>
      <h2 className={css({
        fontFamily: 'merriweather',
        fontWeight: '400',
        fontSize: '1.1rem',
        transition: 'color 500ms',
        _hover: {
          color: 'hsl(142.2, 100%, 59.8%)',
        },
        sm: {
          fontSize: '1.75rem',
        },
      })}>TypeScript / Rust / Go Developer</h2>
      <h3 className={css({
        fontFamily: 'merriweather',
        fontWeight: '400',
        fontSize: '1.2rem',
        transition: 'color 700ms',
        _hover: {
          color: 'hsl(5.6, 78.1%, 57.1%)',
        },
        sm: {
          fontSize: '1.75rem',
        },
      })}>Portfolio</h3>
      <p>
        <span className={css({
          fontFamily: 'merriweather',
          fontSize: '1.1rem',
          textTransform: 'capitalize',
          _hover: {
            backgroundColor: 'hsl(58.1, 100%, 69.8%)',
          },
        })}>under construction</span> 🛠️
      </p>
    </div>
  )
}

export default LandingTitle
