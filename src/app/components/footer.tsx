import Link from "next/link";

export default function Footer() {
  // set date in footer
  const footerDate = new Date();
  const currentYear = footerDate.getFullYear().toString();

  return (
    <footer className="footer">
      <div className="footer__wrap">
        <nav className="footer__nav">
          <ul className="nav__ul">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/my-work">My Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        <div className="footer__content">
          <h2>Jessica Masuga Consulting, LLC</h2>
          <p className="copyright">
            &copy;{" "}
            <time id="footer__date" dateTime={currentYear}>
              {currentYear}
            </time>{" "}
            — Jessica Masuga Consluting, LLC
          </p>
        </div>
      </div>
    </footer>
  );
}
