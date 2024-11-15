import styles from "./MobileNav.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Links } from "../Links/Links.tsx";

export function MobileNav() {
  const { mobileNav, bars, navBar } = styles;

  return (
    <nav className={mobileNav}>
      <div>
        <FontAwesomeIcon className={bars} icon={faBars} />
        <nav className={navBar}>
          <Links />
        </nav>
      </div>
    </nav>
  );
}
