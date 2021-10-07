import styled from "styled-components";

export const SiteTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*  */
  h1 {
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 0;
  }

  h2 {
    font-size: 2rem;
    font-weight: 100;
    margin-bottom: 0;
  }

  p {
    font-size: 2rem;
    font-weight: 100;
  }

  span {
    font-size: 1rem;
  }

  font-family: "Abril Fatface", cursive;
  /*  */
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  max-width: 600px;
  max-height: 600px;
  margin: auto;

  /*  */

  .special:hover {
    color: hsl(209.6, 100%, 55.9%);
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
    }

    span {
      font-size: 0.75rem;
    }
  }
`;
