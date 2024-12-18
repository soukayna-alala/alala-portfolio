import styles from "./Header.module.css";
import { MobileNav } from "./MobileNav/MobileNav.tsx";
import { Links } from "./Links/Links.tsx";

export function Header() {
  const { name, header, bigScreenNav } = styles;

  return (
    <>
      <header className={header}>
        <span className={name}>SOUKAYNA ALALA</span>
        <div className={bigScreenNav}>
          <Links />
        </div>
        <MobileNav />
      </header>
    </>
  );
}
