import Head from "next/head";

import { type NextPage } from "next";

// import ProfileCard from "@/components/cards/profile";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ali Abu Diab - Senior Software Engineer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      {/* <main className="flex w-full flex-1 flex-col py-[10px]">
        <section className="flex w-full flex-1 flex-wrap gap-3 md:flex-nowrap">
          <ProfileCard />
        </section>
      </main> */}

      <main className="flex h-full w-full flex-1 flex-col items-center justify-center">
        <section className="max-w-lg text-center sm:px-6 sm:py-8">
          <h1 className="mb-4 text-4xl font-semibold text-white">
            Exciting Updates Ahead
          </h1>
          <p className="text-lg text-gray-300">
            The website is currently under development. Please check back soon
            for the latest updates. Stay tuned!
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
