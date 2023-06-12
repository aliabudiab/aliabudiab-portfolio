import { FC, ReactNode, memo } from "react";

interface BaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  linkClassName?: string;
  children?: ReactNode;
}

const BaseLink: FC<BaseLinkProps> = ({
  href,
  rel = "noopener noreferrer",
  children,
  linkClassName,
  ...restProps
}) => {
  return (
    <a href={href} rel={rel} className={linkClassName} {...restProps}>
      {children}
    </a>
  );
};

export default memo(BaseLink);
