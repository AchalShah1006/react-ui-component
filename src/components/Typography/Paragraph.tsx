import React from "react";
import classNames from "classnames";
import { ParagraphProps } from "./index.d";

function Paragraph({ children, className }: ParagraphProps) {
  return (
    <p className={classNames("typography typography-paragraph", className)}>
      {children}
    </p>
  );
}

export default Paragraph;
