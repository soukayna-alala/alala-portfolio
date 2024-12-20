import styles from "./MobileNav.module.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Links } from "../Links/Links.tsx";
import { useState } from "react";

export function MobileNav() {
  const { mobileNav, menuBar, XBar } = styles;
  const [displayNav, setDisplayNav] = useState(false);

  return (
    <>
      {!displayNav ? (
        <FontAwesomeIcon
          className={menuBar}
          icon={faBars}
          onClick={() => setDisplayNav(true)}
        />
      ) : null}

      {displayNav ? (
        <nav className={mobileNav}>
          <FontAwesomeIcon
            className={XBar}
            icon={faXmark}
            onClick={() => setDisplayNav(false)}
          />
          <Links />
        </nav>
      ) : null}
    </>
  );
}
