import { styled } from '../../styled-system/jsx';
import { merriweather } from './fonts';

const TitleWrapper = styled.div`
  margin-top: -75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: merriweather;
  color: hsl(0, 0%, 20%);
  min-height: 100%;
  font-weight: 300;
`;

const TitleMain = styled.h1`
  font-size: 3rem;
`;

const SubtitleMain = styled.h2`
  font-size: 2rem;
`;

const SubtitleSecondary = styled.h3`
  font-size: 2rem;
`;

const StyledSpan = styled.span`
  font-size: 1rem;
  text-transform: capitalize;
`;

export default function Home() {
  return (
    <TitleWrapper>
      <TitleMain>John William Davis</TitleMain>
      <SubtitleMain>TypeScript Developer</SubtitleMain>
      <SubtitleSecondary>Portfolio</SubtitleSecondary>
      {/* <UnderConstruction /> */}
      <p>
        <StyledSpan>under construction</StyledSpan> 🛠️
      </p>
    </TitleWrapper>
  );
}
