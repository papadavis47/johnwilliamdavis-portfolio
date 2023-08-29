import LandingTitle from '@/components/LandingTitle';
import { styled } from '../../styled-system/jsx';

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 36px;
`;

export default function Home() {
  return (
    <Wrapper>
      <LandingTitle />
    </Wrapper>
  );
}
