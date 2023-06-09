import { FC } from "react";

import { type SocialLinkProps } from "./social-link.types";

import BaseLink from "../base";

import styles from "./social-link.module.css";

const SocialLink: FC<SocialLinkProps> = ({
  href,
  title,
  icon,
  target = "_blank",
}) => {
  return (
    <BaseLink
      title={title}
      key={title}
      href={href}
      {...(target ? {target} : {})}
      tabIndex={0}
      linkClassName={`${styles["social-link"]}`}
    >
      {icon}
    </BaseLink>
  );
};

export default SocialLink;
