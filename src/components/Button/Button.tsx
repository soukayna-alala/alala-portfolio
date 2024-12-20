import { Props } from "./interfaces.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

export function Button({ label, icon, className }: Props) {
  return (
    <a className={classNames(className)}>
      <span>{label}</span>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
    </a>
  );
}
