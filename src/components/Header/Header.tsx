import styles from "./Header.module.css";

export function Header() {
  const { name, container, mainContainer } = styles;

  return (
    <header className={mainContainer}>
      <div className={name}>Soukayna Alala</div>
      <div className={container}>
        <div>About Me</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contacts</div>
      </div>
    </header>
  );
}
