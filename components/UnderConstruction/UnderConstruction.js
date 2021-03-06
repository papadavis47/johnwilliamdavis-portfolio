import styled from "styled-components";

const UnderConstruction = () => {
  return (
    <StyledSpan>
      <p>
        <span className='highlight'>Under Construction</span> 🛠️
      </p>
    </StyledSpan>
  );
};

const StyledSpan = styled.div`
  span {
    font-size: 1rem;
  }

  .highlight:hover {
    background-color: hsl(58.1, 100%, 69.8%);
    font-size: 1.2rem;
  }

  @media screen and (max-width: 500px) {
    span {
      font-size: 1rem;
    }
  }
`;

export default UnderConstruction;
