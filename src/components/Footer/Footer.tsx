import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactForm } from "../ContactForm/ContactForm.tsx";
import classNames from "classnames";

const linkedin = "https://www.linkedin.com/in/soukayna-alala/";
const email = "soukayna.creative.dev@gmail.com";
const git = "https://github.com/soukayna-alala";
const phone = "+447496322120";

export function Footer() {
  const {
    footer,
    container,
    contactMe,
    main,
    contactFormContainer,
    iconContainer,
    icon,
  } = styles;
  return (
    <footer className={footer} id="contacts">
      <main className={main}>
        <div className={container}>
          <h4 className={contactMe}>Contact me</h4>

          <a href={email}>
            <FontAwesomeIcon className={icon} icon={faPaperPlane} />
            {email}
          </a>
          <a href={phone}>
            <FontAwesomeIcon className={icon} icon={faPhone} />
            {phone}
          </a>
          <div className={iconContainer}>
            <a href={git}>
              <FontAwesomeIcon className={icon} icon={faGithub} />
            </a>
            <a href={linkedin}>
              <FontAwesomeIcon className={icon} icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className={contactFormContainer}>
          <ContactForm />
        </div>
      </main>
    </footer>
  );
}
