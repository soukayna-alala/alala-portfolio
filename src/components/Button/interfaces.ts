import { AnchorHTMLAttributes } from "react";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  icon?: IconDefinition;
  variant?: Variant;
  // size: string;
}

export type Variant = "primary" | "secondary";
