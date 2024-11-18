import { merriweather } from '../app/fonts'
import { styled } from '@pigment-css/react'

const TitleWrapper = styled('div')({
  marginTop: '-75px',
  lineHeight: '1.75',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'hsl(0, 0%, 20%)',
})

const TitleMain = styled('h1')({
  fontFamily: 'merriweather',
  fontWeight: '400',
  fontSize: '1.75rem',
  '&:hover': {
    color: 'hsl(209.6, 100%, 55.9%)',
  },
  '@media screen and (min-width: 640px)': {
    fontSize: '2.5rem',
  },
  transition: 'color 900ms',
})

const SubtitleMain = styled('h2')({
  fontFamily: 'merriweather',
  fontWeight: '400',
  fontSize: '1.1rem',
  '&:hover': {
    color: 'hsl(142.2, 100%, 59.8%)',
  },
  '@media screen and (min-width: 640px)': {
    fontSize: '1.75rem',
  },
  transition: 'color 500ms',
})

const SubtitleSecondary = styled('h3')({
  fontFamily: 'merriweather',
  fontWeight: '400',
  fontSize: '1.2rem',
  '&:hover': {
    color: 'hsl(5.6, 78.1%, 57.1%)',
  },
  '@media screen and (min-width: 640px)': {
    fontSize: '1.75rem',
  },
  transition: 'color 700ms',
})

const StyledSpan = styled('span')({
  fontFamily: 'merriweather',
  fontSize: '1.1rem',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'hsl(58.1, 100%, 69.8%)',
  },
})

function LandingTitle() {
  return (
    <TitleWrapper>
      <TitleMain>John William Davis</TitleMain>
      <SubtitleMain>TypeScript / Rust / Go Developer</SubtitleMain>
      <SubtitleSecondary>Portfolio</SubtitleSecondary>
      <p>
        <StyledSpan>under construction</StyledSpan> 🛠️
      </p>
    </TitleWrapper>
  )
}

export default LandingTitle
