import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="logo__wrapper">
          <a className="logo" href="/">Jessica Masuga Consulting</a>
        </div>
        <nav className="nav">
          <ul className="nav__ul">
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
