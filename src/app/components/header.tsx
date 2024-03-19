import Link from "next/link";
import styles from "./headerFooter.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.logo__wrapper}>
          <a className={styles.logo} href="/">Jessica Masuga Consulting</a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.nav__ul}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/my-work">My Work</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
