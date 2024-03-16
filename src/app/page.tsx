import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <div className={styles.logo__wrapper}>
            <a className={styles.logo} href="/">Jessica Masuga Consulting</a>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.nav__ul}>
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">My Work</a></li>
              <li><a href="/">Contact</a></li>
              <li><a href="/">Blog</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> */}

      {/* <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <div className={styles.hero__heading}>
            <img src="https://res.cloudinary.com/do9qt3sjt/image/upload/v1710558135/jessica-masuga_zkllpa.png" alt="Jessica Masuga." />
            <h1>
              Jessica Masuga Consulting
            </h1>
          </div>
          <p>
            I’m an expert storyteller who creates a broad range of impactful, high-quality healthcare communications programs. My focus is on building emotional connections between my clients and their key audiences because great communications efforts are rooted in the stories we tell.
          </p>
          <p>
            I have more than 20 years of experience leading corporate and product communication programs; 15 years of corporate healthcare communications experience and 9 years of PR agency experience.
          </p>
          <p>
            I specialize in integrated communications for healthcare companies including biotech, medtech, medical device, pharma, and nonprofits. I’m ready to support any size program in partnership with your organization.
          </p>
        </div>
        <img className={styles.hero__img} src="https://res.cloudinary.com/do9qt3sjt/image/upload/v1710562438/jmc-background_wf1mh2.jpg" alt="" />
      </div>

      <div className={styles.contact__wrap}>
        <div className={styles.contact__content}>
          <h2>
            Contact Me
          </h2>
          <p>
            My inbox is always open, you can contact me via this form or at jessmasuga@hotmail.com.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
