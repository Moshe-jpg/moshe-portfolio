import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const contact_number = (Math.random() * 100000) | 0;
    // add the following code to set the value of the hidden input field
    const contactNumberInput = document.createElement("input");
    contactNumberInput.type = "hidden";
    contactNumberInput.name = "contact_number";
    contactNumberInput.value = contact_number;
    form.current.appendChild(contactNumberInput);
    // send the form with the updated form.current
    emailjs
      .sendForm(
        "service_d20m0l2",
        "contact_form",
        form.current,
        "iwUP8eH1NlcSvoxkb"
      )
      .then(
        (result) => {
          console.log(result.text);
          let inputs = document.querySelectorAll("input");
          inputs.forEach((input) => (input.value = ""));
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="email">
      <form ref={form} onSubmit={sendEmail}>
        <div className="inputBox">
          <input
            type="text"
            name="user_name"
            required="required"
            className="input1"
          />
          <span>Name:</span>
        </div>
        <div className="inputBox">
          <input type="email" name="user_email" required="required" />
          <span>Email address:</span>
        </div>
        <div className="inputBox inputBoxMessage">
          <input
            name="message"
            type="text"
            required="required"
            className="inputBoxMessageInput"
          />
          <span>Message:</span>
        </div>
        <div className="inputBoxBtnContainer">
          <button
            type="submit"
            className="inputBoxBtn"
            value="send"
            id="submitBtn"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};
export default EmailSection;
