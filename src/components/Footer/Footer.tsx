import styles from "./Footer.module.css";

const linkedin = "https://www.linkedin.com/in/soukayna-alala/";
const email = "soukayna.alala45@gmail.com";
const git = "https://github.com/soukayna-alala";
const phone = "+447496322120";

export function Footer() {
  const { footer, container } = styles;
  return (
    <footer className={footer}>
      <div className={container}>
        <a href={linkedin}>Linkedin</a>
        <a href={git}>Git</a>
        <a href={email}>Email</a>
        <a href={phone}>Phone</a>
      </div>
    </footer>
  );
}
