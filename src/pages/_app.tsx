import type { AppType, AppProps } from "next/app";

import Header from "@/components/header";
import ScreenLoader from "@/components/screen-loader";
import Footer from "@/components/footer";

import "@/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col overflow-y-auto p-[10px]">
      <Header />
      <ScreenLoader />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
