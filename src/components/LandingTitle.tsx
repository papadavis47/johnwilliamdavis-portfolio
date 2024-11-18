import { merriweather } from '../app/fonts'
import { styled } from '@pigment-css/react'

const TitleWrapper = styled('div')({
  marginTop: '-75px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px',
  fontFamily: 'merriweather',
  color: 'hsl(0, 0%, 20%)',
  fontWeight: '400',
})

const TitleMain = styled('h1')({
  fontSize: '2rem',
  // &:hover {
  //   color: 'hsl(209.6, 100%, 55.9%)',
  // }
  '@media screen and (min-width: 640px)': {
    fontSize: '3rem',
  },
  // transition: color 900ms;
})

const SubtitleMain = styled('h2')({
  fontSize: '1.25rem',
  // &:hover {
  //   color: hsl(142.2, 100%, 59.8%);
  // }
  '@media screen and (min-width: 640px)': {
    fontSize: '2rem',
  },
  // transition: color 500ms;
})

const SubtitleSecondary = styled('h3')({
  fontSize: '1.25rem',
  // &:hover {
  //   color: hsl(5.6, 78.1%, 57.1%);
  // }
  '@media screen and (min-width: 640px)': {
    fontSize: '2rem',
  },
  // transition: color 700ms;
})

const StyledSpan = styled('span')({
  fontSize: '1.25rem',
  textTransform: 'capitalize',
  // &:hover {
  //   background-color: hsl(58.1, 100%, 69.8%);
  // }
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
