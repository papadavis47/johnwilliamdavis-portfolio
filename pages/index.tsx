import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import LandingPageTitle from "../components/LandingPageTitle";
import UnderConstruction from "../components/UnderConstruction";

const TempLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function Home() {
  return (
    <TempLayout>
      <Head>
        <title>John William Davis Portfolio</title>
        <meta
          name='description'
          content='Porfolio website for John William Davis - Software Engineer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingPageTitle />
      <UnderConstruction />
    </TempLayout>
  );
}
