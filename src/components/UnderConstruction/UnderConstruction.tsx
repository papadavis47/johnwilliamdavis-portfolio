import { styled } from '../../../styled-system/jsx';

const StyledSpan = styled.span`
  font-size: 1rem;
  background-color: hsl(58.1, 100%, 69.8%);
`;

const SpanWrapper = styled.p`
  background-color: hsl(58.1, 100%, 69.8%);
  .StyledSpan:hover {
    color: hsl(5.6, 78.1%, 57.1%);
  }
`;

const TotalWrapper = styled.div`
  background-color: hsl(58.1, 100%, 69.8%);
`;

const UnderConstruction = () => {
  return (
    <TotalWrapper>
      <SpanWrapper>
        <StyledSpan>under construction</StyledSpan> 🛠️
      </SpanWrapper>
    </TotalWrapper>
  );
};

export default UnderConstruction;
