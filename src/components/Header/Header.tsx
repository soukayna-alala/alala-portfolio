import styles from "./Header.module.css";

export function Header() {
  const { container } = styles;

  return (
    <header>
      <div className={container}>
        <div>About Me</div>
        <div>Skills</div>
        <div>Projects</div>
        <div>Contacts</div>
      </div>
    </header>
  );
}
