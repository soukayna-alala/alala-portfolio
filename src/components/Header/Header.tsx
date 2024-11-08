import styles from "./Header.module.css";
import { Link } from "react-scroll";

export function Header() {
  const { cursor, name, container, mainContainer } = styles;

  return (
    <header className={mainContainer}>
      <p className={name}>
        SOUKAYNA
        <br /> ALALA
      </p>

      <nav className={container}>
        <Link
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className={cursor}
        >
          About Me
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={cursor}
        >
          Skills
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={cursor}
        >
          Projects
        </Link>
        <Link
          to="contacts"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className={cursor}
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
}
