import Image from "next/image";
import styles from "./home.module.css";

// homepage
export default function Page() {
  return (
    <>

      <div className={styles.hero}>
        <div className={styles.hero__content}>
          <div className={styles.hero__heading}>
            <img src="https://res.cloudinary.com/do9qt3sjt/image/upload/v1710642006/jessica-masuga_ktzf5n.jpg" alt="Jessica Masuga." />
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
        <picture>
          <source srcSet="https://res.cloudinary.com/do9qt3sjt/image/upload/v1710699832/jmc-background-m_ixd7r6.jpg" media="(max-width: 640px)" />
          <img className={styles.hero__img} src="https://res.cloudinary.com/do9qt3sjt/image/upload/v1710695822/jmc-background-d_bfkhgo.jpg" alt="" />
        </picture>
      </div>

      <div className="banner">
        <div className={styles.content__contact}>
          <h2>
            Contact Me
          </h2>
          <p>
            My inbox is always open, you can contact me via this form or at jessmasuga@hotmail.com.
          </p>
        </div>
      </div>

      <div className={`${styles.wrap} ${styles.campaign}`}>
        <div className={styles.content__campaign}>
          <h2>
            Campaigns & Efforts
          </h2>
          <p>
            Explore a featured selection of my campaigns and efforts below.
          </p>
        </div>
        <img src="https://res.cloudinary.com/do9qt3sjt/image/upload/v1710643849/campaigns-and-efforts-placeholder_hucrcr.png" alt="" />
      </div>

    </>
  );
}
