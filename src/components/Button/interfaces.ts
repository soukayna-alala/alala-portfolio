import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface Props {
  label: string;
  icon?: IconDefinition;
  variant?: Variant;
  size?: Size;
  isAnchor?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  target?: string;
  type?: ButtonType;
  onClick?: () => void;
}

export type Variant = "primary" | "secondary";

export type Size = "small" | "regular";

export type ButtonType = "button" | "submit" | "reset";
