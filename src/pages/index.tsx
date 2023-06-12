import { FC } from "react";
import { type NextPage } from "next";
import Head from "next/head";

import SocialLink from "@/components/links/social";
import { EmailIcon } from "@/components/icons";

import Typewriter from "typewriter-effect";

const Home: NextPage = () => {
  const ProfileCard: FC = () => (
    <div className="flex h-full w-full flex-col items-start justify-start bg-black lg:w-1/2">
      <div className="linear-bg flex w-full flex-1 flex-col justify-between rounded-[30px]">
        <div className="flex w-full items-center justify-between">
          <p className="text-sm font-normal text-white">Contact me</p>
          <SocialLink
            key="Email"
            href="mailto:aliabudiab112@gmail.com"
            title="Email"
            target=""
            icon={<EmailIcon />}
          />
        </div>

        <div className="mt-10">
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
          <div className="w-full text-left text-sm font-normal text-[#ffffffb3]">
            <p>
              Acoustic system and{" "}
              <u className="text-white">technological research</u> in the
              processes of creating materials for the construction of factories.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex h-auto w-full max-w-full flex-col justify-end">
        <div className="w-full">
          <div className="flex w-full">
            <div className="custom-border flex h-20 w-auto flex-1 items-center justify-start bg-[#2e2e2e] px-[30px]">
              <h2 className="h-auto justify-start text-left text-xl font-medium leading-[1] text-white">
                Hi there 👋 This is Ali Abu Diab
              </h2>
            </div>

            <div className="relative flex">
              <div className="absolute bottom-0 left-0 h-10 w-10 max-w-full bg-[#2e2e2e]"></div>
              <div className="z-[2] h-20 w-20 rounded-full bg-black"></div>
              <div className="image-wrapper absolute right-0 top-0 z-[3] flex h-[70px] w-[70px] items-center justify-center rounded-full">
                <div className="custom-before relative h-[62px] w-[62px] rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="w-full rounded-[30px] rounded-tl-none bg-[#2e2e2e] px-[30px] py-5 text-left">
            <p className="text-justify text-sm font-normal leading-[1.4] text-[#ffffffb3]">
              A Software Engineer with 3+ years of experience in building and
              maintaining visually stunning, user-friendly, and responsive
              websites. Proficient in <u className="text-white">HTML</u>,{" "}
              <u className="text-white">CSS</u>, and{" "}
              <u className="text-white">JavaScript</u>, as well as{" "}
              <u className="text-white">modern libraries </u> and{" "}
              <u className="text-white">frameworks</u>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Ali Abu Diab - Software Engineer</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <main className="mx-auto w-full max-w-[1440px] flex-1 py-[10px]">
        <section className="h-[100%] w-full">
          <ProfileCard />
        </section>
      </main>
    </>
  );
};

export default Home;
