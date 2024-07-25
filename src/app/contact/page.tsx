// components
import ContactForm from "../components/contactForm";
import styles from "./contact.module.css";

// contact page
export default function Contact() {
  const email = process.env.NEXT_PUBLIC_EMAIL;

  return (
    <>
      <div className="top-to-bottom__wrap banner secondary">
        <div className="gutter-alley__wrap">
          <h1>Contact Me</h1>
          <p>
            Use the form below or email me at{" "}
            <a className="hover__noLine" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </div>
      </div>

      <div className="top-to-bottom__wrap">
        <div className="gutter-alley__wrap">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
