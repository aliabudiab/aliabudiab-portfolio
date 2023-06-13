import { type NextPage } from "next";
import Head from "next/head";

import ProfileCard from "@/components/cards/profile";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ali Abu Diab - Software Engineer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <main className="flex w-full flex-1 flex-col py-[10px]">
        <section className="flex w-full flex-1 flex-wrap gap-3 md:flex-nowrap">
          <ProfileCard />
        </section>
      </main>
    </>
  );
};

export default Home;
