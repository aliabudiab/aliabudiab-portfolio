import { FC, memo } from "react";

import { type BaseCardProps } from "./base-card.types";

const BaseCard: FC<BaseCardProps> = ({ customClasses, children }) => {
  return (
    <div
      className={`flex w-full flex-col items-start justify-start bg-black lg:w-1/2 ${customClasses}`}
    >
      {children}
    </div>
  );
};

export default memo(BaseCard);
