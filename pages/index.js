import Head from "next/head";
import Image from "next/image";
import { SiteTitleWrapper } from "../styled-wrappers/SiteTitleWrapper.js";

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
      <SiteTitleWrapper>
        <h1 className='title'>John William Davis</h1>
        <h2 className='subtitle'>Front End Developer</h2>
        <p className='paragraph'>Portfolio</p>
        <p>
          <span className='highlight'>Under Construction</span> 🛠️
        </p>
      </SiteTitleWrapper>
    </div>
  );
}
