import Head from "next/head";
import Image from "next/image";
import LandingPageTitle from "../components/LandingPageTitle/LandingPageTitle.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>John William Davis Portfolio</title>
        <meta
          name='description'
          content='Porfolio website for John William Davis - Software Engineer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <LandingPageTitle />
    </div>
  );
}
