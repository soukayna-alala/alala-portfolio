import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactForm } from "../ContactForm/ContactForm.tsx";

const linkedin = "https://www.linkedin.com/in/soukayna-alala/";
const email = "soukayna.alala45@gmail.com";
const git = "https://github.com/soukayna-alala";
const phone = "+447496322120";

export function Footer() {
  const { footer, container, contacts, main } = styles;
  return (
    <footer className={footer} id="contacts">
      <h4 className={contacts}>Contacts</h4>
      <main className={main}>
        <div className={container}>
          <a href={email}>
            <FontAwesomeIcon icon={faPaperPlane} />
            soukayna.creative.dev@gmail.com
          </a>
          <a href={phone}>
            <FontAwesomeIcon icon={faPhone} />
            +447496322120
          </a>
          <a href={git}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <div>
          <ContactForm />
        </div>
      </main>
    </footer>
  );
}
