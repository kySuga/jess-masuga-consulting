// components
import ContactForm from "../components/contactForm";

// contact page
export default function Contact() {
  return (
    <>
      <div className="banner secondary">
        <h1>
          Contact Me
        </h1>
        <p>
          Use the form below or email me at jessmasuga@hotmail.com
        </p>
      </div>

      <ContactForm />
    </>
  );
}
