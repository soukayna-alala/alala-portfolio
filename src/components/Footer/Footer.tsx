import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactForm } from "../ContactForm/ContactForm.tsx";
import {
  phone,
  phoneUser,
  git,
  emailForUser,
  email,
  linkedin,
} from "./constants.ts";

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
            {emailForUser}
          </a>
          <a href={phoneUser}>
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
