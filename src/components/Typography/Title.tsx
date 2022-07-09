import React from "react";
import classNames from "classnames";
import { TitleProps } from "./index.d";

function Title({ children, className, level = 1 }: TitleProps) {
  return (
    <div
      className={classNames(
        "typography typography-title",
        `title-${level}`,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Title;
