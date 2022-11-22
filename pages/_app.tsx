import type { AppProps } from "next/app";
import GlobalStyles from "../globals/GlobalStyles";
import "../globals/_app.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
