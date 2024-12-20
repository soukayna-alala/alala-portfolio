import { Props } from "./interfaces.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import styles from "./Button.module.css";

export function Button({
  label,
  disabled,
  icon,
  className,
  href,
  variant = "primary",
  target,
  size = "regular",
  isAnchor = false,
  type,
}: Props) {
  const { btn, primary, secondary, btnIcon, small, regular } = styles;
  const variantClass = variant === "primary" ? primary : secondary;
  const sizeClass = size === "small" ? small : regular;
  const props = {
    className: classNames(btn, variantClass, sizeClass, className),
    href: href,
    target: target,
    disabled: disabled,
    type: type,
  };
  const innerJsx = (
    <>
      {label}
      {icon ? <FontAwesomeIcon className={btnIcon} icon={icon} /> : null}
    </>
  );
  const anchorJsx = <a {...props}>{innerJsx}</a>;
  const btnJsx = <button {...props}>{innerJsx}</button>;

  return <>{isAnchor ? anchorJsx : btnJsx}</>;
}
