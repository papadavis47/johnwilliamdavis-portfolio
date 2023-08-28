const TitleWrapper = styled.div`
  // The following margin is to pull up content to eye level
  margin-top: -75px;
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

  /* font-family: "Abril Fatface", cursive; */
  /*  */
  /* position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  max-width: 600px;
  max-height: 600px;
  margin: auto; */

  /*  */

  /* Playing with a transition here below */

  .title {
    transition: color 500ms;
  }

  .paragraph {
    transition: color 700ms;
  }

  .subtitle {
    transition: color 900ms;
  }

  /* End transitions */

  .paragraph:hover {
    color: hsl(209.6, 100%, 55.9%);
  }

  .subtitle:hover {
    color: hsl(142.2, 100%, 59.8%);
  }

  .title:hover {
    color: hsl(5.6, 78.1%, 57.1%);
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export default TitleWrapper;
