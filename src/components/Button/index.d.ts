import { ReactElement } from "react";
import { Properties } from "csstype";

export interface Props {
  id?: string;
  variant?: "primary" | "link" | "danger" | "outlined" | "success";
  children?: any;
  className?: string;
  style?: Properties;
  onClick?: () => void;
  disabled?: boolean | undefined;
  href?: string;
  loading?: boolean;
  icon?: ReactElement;
}
