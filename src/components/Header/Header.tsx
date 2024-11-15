import styles from "./Header.module.css";
import { Link } from "react-scroll";
import { MobileNav } from "./MobileNav/MobileNav.tsx";

export function Header() {
  const { link, name, container, mainContainer } = styles;

  return (
    <header className={mainContainer}>
      <span className={name}>
        SOUKAYNA
        <br /> ALALA
      </span>

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
      <MobileNav />
    </header>
  );
}
