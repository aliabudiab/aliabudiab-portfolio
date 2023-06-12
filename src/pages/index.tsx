import { type NextPage } from "next";
import Head from "next/head";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Typewriter from "typewriter-effect";

import { EmailIcon } from "@/components/icons";
import SocialLink from "@/components/links/social";

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
      <div className="flex h-screen min-h-screen flex-col bg-black p-[10px]">
        <Header />
        <main className="mx-auto w-full max-w-[1440px] flex-1 py-20">
          <section className="flex h-full w-full flex-col items-start justify-start bg-black lg:w-1/2">
            <div className="linear-bg flex h-full w-full  flex-col justify-between rounded-[30px]">
              <div className="flex w-full items-center justify-between">
                <p className="text-sm font-normal text-white">Contact me</p>

                <SocialLink
                  key="Email"
                  href="mailto:aliabudiab112@gmail.com"
                  title="Email"
                  icon={<EmailIcon />}
                />
              </div>

              <div>
                <div className="mb-6">
                  <h1 className="text-5xl tracking-[-0.05em] text-white md:text-7xl">
                    <Typewriter
                      options={{
                        strings: [
                          "Proficient",
                          "Analytical",
                          "Productive",
                          "Adaptable",
                          "Precise",
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 25,
                      }}
                    />
                  </h1>
                  <div></div>
                </div>
                <div className="custom-color w-full text-left text-sm font-normal">
                  <p>
                    Acoustic system and{" "}
                    <u className="text-white">technological research</u> in the
                    processes of creating materials for the construction of
                    factories.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex h-auto w-full max-w-full flex-1 flex-col justify-end p-0">
              <div className="m-0 flex w-full flex-col items-center justify-center p-0">
                <div className="flex w-full items-center justify-center p-0">
                  <div className="custom-border flex h-20 w-auto flex-1 flex-col items-start justify-center bg-[#2e2e2e] px-[30px]">
                    <h2 className="h-auto justify-start text-left text-xl font-medium leading-[1] text-white">
                      Hi there 👋 This is Ali Abu Diab
                    </h2>
                  </div>

                  <div className="relative flex items-center justify-center p-0">
                    <div className="absolute bottom-0 left-0 right-auto top-auto m-0 h-[40px] w-[40px] max-w-full bg-[#2e2e2e]"></div>
                    <div className="z-[2] flex h-20 w-20 flex-col items-start justify-end rounded-full bg-black"></div>
                    <div className="image-wrapper absolute bottom-auto left-auto right-0 top-0 z-[3] m-0 flex h-[70px] w-[70px] flex-col items-center justify-center rounded-full">
                      <div className="custom-before relative h-[62px] w-[62px] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="custom-radius flex h-auto w-full flex-col items-start justify-between bg-[#2e2e2e] px-[30px] py-5">
                  <div className="flex h-auto w-full flex-col items-center justify-center p-0">
                    <div className="custom-main-color h-auto w-full p-0 text-left text-sm font-normal leading-[1.4]">
                      <p className="text-justify ">
                        A Software Engineer with 3+ years of experience in
                        building and maintaining visually stunning,
                        user-friendly, and responsive websites. Proficient in{" "}
                        <u className="text-white">HTML</u>,{" "}
                        <u className="text-white">CSS</u>, and{" "}
                        <u className="text-white">JavaScript</u>, as well as{" "}
                        <u className="text-white">modern libraries </u> and{" "}
                        <u className="text-white">frameworks</u>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
