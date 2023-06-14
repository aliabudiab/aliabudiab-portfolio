import { FC, memo } from "react";

import {
  HighlightTextProps,
  BaseDescriptionProps,
} from "./base-description.types";

const HighlightText: FC<HighlightTextProps> = ({ text, highlightColor }) => {
  return <span style={{ color: highlightColor }}>{text}</span>;
};

const BaseDescription: FC<BaseDescriptionProps> = ({
  description,
  highlightColor = "#ffffff",
  customClasses = "",
}) => {
  const classes = `text-justify text-sm font-normal text-[#ffffffb3] ${customClasses}`;

  const regex = /\[([\w\s]+)\]/g;
  const matches = description.match(regex);

  if (!matches) {
    // No matches found, render the description as is
    return <p className={classes}>{description}</p>;
  }

  const segments = description.split(regex);

  return (
    <p className={classes}>
      {segments.map((segment, index) => {
        if (matches && matches.includes(`[${segment}]`)) {
          return (
            <HighlightText
              key={index}
              text={segment}
              highlightColor={highlightColor}
            />
          );
        }

        return segment;
      })}
    </p>
  );
};

export default memo(BaseDescription);
