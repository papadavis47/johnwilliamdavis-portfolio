import LandingTitle from '@/components/LandingTitle'
import { styled } from '@pigment-css/react'

const Wrapper = styled('div')({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 36px',
})

export default function Home() {
  return (
    <Wrapper>
      <LandingTitle />
    </Wrapper>
  )
}
