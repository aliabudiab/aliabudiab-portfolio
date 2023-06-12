import type { AppType, AppProps } from "next/app";

import Header from "@/components/header";
import ScreenLoader from "@/components/screen-loader";
import Footer from "@/components/footer";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex h-screen min-h-screen flex-col overflow-y-auto p-[10px]">
      <Header />
      <ScreenLoader />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
