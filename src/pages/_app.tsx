import type { AppType, AppProps } from "next/app";

import ScreenLoader from "@/components/screen-loader";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ScreenLoader />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
