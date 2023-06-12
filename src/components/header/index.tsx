import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo.png";

import SocialLink from "@/components/links/social";
import BaseLink from "@/components/links/base";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

import styles from "./header.module.css";

const Header: FC = () => {
  const socialLinks = [
    {
      href: "https://linkedin.com/in/aliabudiab",
      title: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    {
      href: "https://github.com/aliabudiab",
      title: "GitHub",
      icon: <GithubIcon />,
    },
  ];

  return (
    <header className="w-full">
      <nav className={styles.nav}>
        <Link href="/" className={styles["logo-link"]}>
          <Image
            src={Logo}
            title="Website Logo"
            alt="Logo"
            width={45}
            height={45}
            style={{ objectFit: "contain" }}
            loading="lazy"
            className="h-full w-full rounded-full"
          />
        </Link>

        <div className="flex gap-x-[3px]">
          {socialLinks.map(({ href, title, icon }) => (
            <SocialLink key={title} href={href} title={title} icon={icon} />
          ))}

          <BaseLink
            href="https://drive.google.com/file/d/1PX0L2bsX6zSbIoAdwPdDlXwsJnI_SODn/view?usp=sharing"
            linkClassName="flex h-full items-center justify-center rounded-[30px] border-[1px] border-[#999] bg-[#ffffff33] px-6 text-sm tracking-[-0.03em] text-[#c5c5c5] hover:bg-white hover:text-black"
            target="_blank"
            tabIndex={0}
          >
            Download Resume
          </BaseLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
