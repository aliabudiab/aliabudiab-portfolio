import { FC } from "react";

import BaseCard from "@/components/cards/base";
import SocialLink from "@/components/links/social";
import { EmailIcon } from "@/components/icons";
import BaseDescription from "@/components/base-description";

import Typewriter from "typewriter-effect";

import styles from "./profile-card.module.css";

// TODO: Refactor the function to enhance its dynamic capabilities and improve its flexibility with different prop inputs
const ProfileCard: FC = () => {
  return (
    <BaseCard>
      <div className="flex w-full flex-1 flex-col justify-between rounded-[30px] bg-brown-gradient px-[30px] py-10">
        <div className="flex w-full justify-end h-[45px]">
          <SocialLink
            key="Email"
            href="mailto:hello@aliabudiab.com"
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
          </div>
          <div className="w-full text-left">
            <BaseDescription
              description="In the realm of [Software Engineering], I
              am recognized for my [proficiency], [analytical thinking],
              [productivity], [adaptability], and [precision]. Collaborating with my
              qualified teammates, we strive to deliver exceptional solutions,
              solve intricate problems, meet critical deadlines, embrace
              cutting-edge technologies, and ensure the utmost precision in code
              craftsmanship. Together, we continuously push the boundaries of
              innovation and excellence."
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex h-auto w-full max-w-full flex-col justify-end">
        <div className="w-full">
          <div className="flex w-full">
            <div className="flex h-20 w-auto flex-1 items-center justify-start rounded-b-none rounded-t-[30px] bg-[#2e2e2e] px-[30px]">
              <h2 className="h-auto justify-start text-left text-xl font-medium leading-[1] text-white">
                Hi there 👋 This is Ali Abu Diab
              </h2>
            </div>

            <div className="relative flex">
              <div className="absolute bottom-0 left-0 h-10 w-10 max-w-full bg-[#2e2e2e]"></div>
              <div className="z-[2] h-20 w-20 rounded-full bg-black"></div>
              <div className="absolute right-0 top-0 z-[3] flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-[#ffffff4d] bg-transparent">
                <div
                  className={`${styles["img-bg"]} relative h-[62px] w-[62px] rounded-full`}
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-[30px] rounded-tl-none bg-[#2e2e2e] px-[30px] py-5 text-left">
            <BaseDescription
              description="A Software Engineer with 3+ years of experience in building and
              maintaining visually stunning, user-friendly, and responsive websites. Proficient in [HTML], [CSS], and [JavaScript], 
              as well as [modern libraries] and [frameworks]."
            />
          </div>
        </div>
      </div>
    </BaseCard>
  );
};

export default ProfileCard;
