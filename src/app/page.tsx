// import LandingPageTitle from '../components/LandingPageTitle';
// import UnderConstruction from '../components/UnderConstruction';
import { styled } from '../../styled-system/jsx';

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleMain = styled.h1`
  font-size: 3rem;
  color: hsl(209.6, 100%, 55.9%);
`;

export default function Home() {
  return (
    <TitleWrapper>
      {/* <LandingPageTitle /> */}
      {/* <UnderConstruction /> */}
      <TitleMain>John William Davis</TitleMain>
      <h2>TypeScript Developer</h2>
      <p>Portfolio</p>
    </TitleWrapper>
  );
}
