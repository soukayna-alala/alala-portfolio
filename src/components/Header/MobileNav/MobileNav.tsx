import styles from "./MobileNav.module.css";

export function MobileNav() {
  const { mobileNav } = styles;

  return (
    <nav>
      <span className={mobileNav}>hello</span>
    </nav>
  );
}
