import styles from "./Header.module.css";

export function Header() {
  const { souka, cursor, name, container, mainContainer } = styles;

  return (
    <header className={mainContainer}>
      <div className={name}>
        <p> Alala</p>
        <p className={souka}>Soukayna</p>
      </div>

      <div className={container}>
        <div className={cursor}>About Me</div>
        <div className={cursor}>Skills</div>
        <div className={cursor}>Projects</div>
        <div className={cursor}>Contacts</div>
      </div>
    </header>
  );
}
