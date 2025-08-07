import LandingTitle from '@/components/LandingTitle'
import { css } from '../../styled-system/css'

export default function Home() {
  return (
    <div className={css({
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 36px',
    })}>
      <LandingTitle />
    </div>
  )
}
