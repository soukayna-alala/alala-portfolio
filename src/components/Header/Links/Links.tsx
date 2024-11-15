import styles from "./Links.module.css";
import { Link } from "react-scroll";

export function Links() {
  const { container, link } = styles;

  return (
    <nav className={container}>
      <Link
        to="aboutMe"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className={link}
      >
        About Me
      </Link>
      <Link
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={link}
      >
        Skills
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={link}
      >
        Projects
      </Link>
      <Link
        to="contacts"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className={link}
      >
        Contacts
      </Link>
    </nav>
  );
}
