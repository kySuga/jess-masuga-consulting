import Link from "next/link";
import styles from "./headerFooter.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrap}>
        <nav className={styles.footer__nav}>
          <ul className={styles.nav__ul}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/my-work">My Work</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
        <div className={styles.footer__content}>
          <h2>
            Jessica Masuga Consulting, LLC
          </h2>
          <p className={styles.copyright}>
            &copy; <time id={styles.footer__date}>1973</time> — Jessica Masuga Consluting, LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
