import React from "react";
import contactFormStyle from "./contactform.module.css";

const ContactForm = () => {
  return (
    <div className={contactFormStyle.container}>
      <p className={contactFormStyle.heading}>Please let us know how we can help you!</p>
      <form className={contactFormStyle.surveyForm}>
        <label htmlFor="fname" id="name-label">
          First Name
        </label>
        <br />
        <input
          type="text"
          id="fname"
          className={contactFormStyle.inputBox}
          name="fname"
          placeholder="Enter First your name"
          required="required"
        />
        <br />
        <br />

        <label htmlFor="lname" id="name-label">
          Last Name
        </label>
        <br />
        <input
          type="text"
          id="lname"
          className={contactFormStyle.inputBox}
          name="lname"
          placeholder="Enter Last your name"
          required="required"
        />
        <br />
        <br />

        <label htmlFor="email" id="email-label">
          Email
        </label>
        <br />
        <input
          type="email"
          id="email"
          className={contactFormStyle.inputBox}
          name="email"
          placeholder="Enter your email"
          required="required"
        />
        <br />
        <br />

        <label htmlFor="textarea">Message</label>
        <br />
        <textarea
          className={contactFormStyle.textarea}
          rows={10}
          placeholder="Enter your request/brief here..."
          defaultValue={""}
        />
        <br />
        <br />

        <button value="Request Quote" className={contactFormStyle.submit} disabled>
          Submit
        </button>
      </form>
      </div>
  );
};

export default ContactForm;
