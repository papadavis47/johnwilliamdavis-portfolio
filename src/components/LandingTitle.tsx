import { styled } from '../../styled-system/jsx';
import { merriweather } from '../app/fonts';

const TitleWrapper = styled.div`
  margin-top: -75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: merriweather;
  color: hsl(0, 0%, 20%);
  font-weight: 400;
`;

const TitleMain = styled.h1`
  font-size: 2rem;
  &:hover {
    color: hsl(209.6, 100%, 55.9%);
  }
  @media screen and (min-width: 640px) {
    font-size: 3rem;
  }
  transition: color 900ms;
`;

const SubtitleMain = styled.h2`
  font-size: 1.25rem;
  &:hover {
    color: hsl(142.2, 100%, 59.8%);
  }
  @media screen and (min-width: 640px) {
    font-size: 2rem;
  }
  transition: color 500ms;
`;

const SubtitleSecondary = styled.h3`
  font-size: 1.25rem;
  &:hover {
    color: hsl(5.6, 78.1%, 57.1%);
  }
  @media screen and (min-width: 640px) {
    font-size: 2rem;
  }
  transition: color 700ms;
`;

const StyledSpan = styled.span`
  font-size: 1.25rem;
  text-transform: capitalize;
  &:hover {
    background-color: hsl(58.1, 100%, 69.8%);
  }
`;

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
  );
}

export default LandingTitle;
