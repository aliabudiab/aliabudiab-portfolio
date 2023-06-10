import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta
          name="description"
          content="Ali Abu Diab Portfolio - Coming Soon"
        />
        <meta
          name="keywords"
          content="Ali Abu Diab, Software Engineer, Portfolio"
        />
      </Head>
      <main className="flex h-screen items-center justify-center">
        <h1 className="text-4xl">Coming soon</h1>
      </main>
    </>
  );
};

export default Home;
