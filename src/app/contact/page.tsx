"use client"

import styles from "./contact.module.css"

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
      <div className="form__wrap">
        <form id="contact-form" action="">
          <div className="form__element">
            <label htmlFor="name">Name <span className="size-adj">(required)</span></label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form__element">
            <label htmlFor="email">Email <span className="size-adj">(required)</span></label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form__element">
            <label htmlFor="message">Message <span className="size-adj">(required)</span></label>
            <textarea id="message" name="message"></textarea>
          </div>
        </form>
        <p className="size-adj">
          This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
        </p>
        <button type="submit" form="contact-form" value="Send">Send</button>
      </div>
    </>
  );
}
