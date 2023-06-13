import { FC, memo } from "react";

const HighlightText: FC<{ text: string }> = ({ text }) => {
  return <u className="text-white">{text}</u>;
};

export default memo(HighlightText);
