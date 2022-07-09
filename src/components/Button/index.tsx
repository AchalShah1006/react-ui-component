import React from "react";
import classNames from "classnames";
import { Props } from "./index.d";

import "./styles.scss";

function Button(props: Props) {
  const {
    id,
    style,
    children,
    className,
    icon,
    disabled = false,
    loading = false,
    variant = "primary",
    onClick,
  } = props;
  return (
    <button
      className={classNames(
        `btn btn-${variant}`,
        className,
        loading && "btn-loading",
        icon && "btn-icon"
      )}
      disabled={disabled || loading}
      style={style}
      type="button"
      onClick={onClick}
      id={id}
    >
      {icon}
      <div>{children}</div>
    </button>
  );
}

export default Button;
