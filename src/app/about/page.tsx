// import Image from "next/image";
import styles from "./about.module.css";

// about page
export default function Page() {
  return (
    <>
      <div className={styles.about}>
        <picture>
          <source
            srcSet="https://res.cloudinary.com/do9qt3sjt/image/upload/v1710699832/jmc-background-m_ixd7r6.jpg"
            media="(max-width: 640px)"
          />
          <img
            className={styles.about__img}
            src="https://res.cloudinary.com/do9qt3sjt/image/upload/v1710727878/jmc-about_atbn2j.jpg"
            alt=""
          />
        </picture>
        <div className={styles.about__content}>
          <h1>About Me</h1>
          <p>
            Need a savvy communications consultant? You’ve come to the right
            place!
          </p>
          <h2>Below is a list of services I provide:</h2>
          <ul>
            <li>
              <h3>Integrated Communications Planning</h3>
              <p>
                Create, refine, and execute integrated communications programs
                to create meaningful connections to your brand.
              </p>
            </li>
            <li>
              <h3>Writing and Storytelling</h3>
              <p>
                Develop a breadth of content such as patient stories, listicles,
                press releases, fact sheets, FAQs, and more.
              </p>
            </li>
            <li>
              <h3>Crisis Communications</h3>
              <p>
                Help your organization navigate a variety of issues, from
                product recalls to corporate reputation matters.
              </p>
            </li>
            <li>
              <h3>Messaging and Narrative Development</h3>
              <p>
                Develop and refine your organization’s internal and external
                messages to create a story to help you reach your target
                audiences.
              </p>
            </li>
            <li>
              <h3>Media Strategy and Outreach</h3>
              <p>
                Create and implement earned media programs and pitches for
                national, local, and trade media coverage.
              </p>
            </li>
          </ul>
          <p>
            Please feel free to contact me via this form or at
            jessmasuga@hotmail.com to discuss opportunities to work together.
          </p>
        </div>
      </div>

      <div className="banner wBorderBottom">
        <div className={styles.content__quote}>
          <figure>
            <blockquote>
              “Good communication is the bridge between confusion and clarity.”
            </blockquote>
            <figcaption>— Nat Turner</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
