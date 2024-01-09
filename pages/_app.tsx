import { Fragment } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>cilanding</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
