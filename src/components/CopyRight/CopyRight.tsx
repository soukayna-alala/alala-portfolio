import styles from "./CopyRight.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";

export function CopyRight() {
  const { container, madeWith, text } = styles;

  return (
    <div className={container}>
      <div className={text}>
        {/*<FontAwesomeIcon icon={faCopyright} />*/}
        <span>&copy; Soukayna Alala 2024 </span>
      </div>
      <div className={classNames(madeWith, text)}>
        Made with: HTML5, CSS, TS, REACT
      </div>
    </div>
  );
}
