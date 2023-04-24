import React from "react";
import memoji from "../../assets/moshe-emoji.png";
import EmailSection from "../EmailSection";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import phone from "../../assets/phone.png";
import gmail from "../../assets/gmail.png";

const Contact = () => {
  const imgArray = [
    {
      imgSrc: linkedin,
      altTag: "Moshe's LinkedIn Profile",
      href: "https://www.linkedin.com/in/moshe-gadol/",
    },
    {
      imgSrc: github,
      altTag: "Moshe's Github Profile",
      href: "https://github.com/Moshe-jpg",
    },
    {
      imgSrc: phone,
      altTag: "Call Moshe",
      href: "tel:647-571-2494",
    },
    {
      imgSrc: gmail,
      altTag: "Email Moshe",
      href: "mailto:mobgadol@gmail.com",
    },
  ];

  return (
    <>
      <section id="contact">
        <div className="contact-layout-container">
          <div className="contact-container">
            <header className="contact-form-header">
              <h2>We Should Connect</h2>
            </header>
            <article>
              <ul>
                <li className="moshe-info">
                  <span>Moshe Gadol</span>
                  <span>Toronto, Ontario</span>
                  <span>Canada</span>
                </li>
                <li className="contact-info">
                  <a href={imgArray[2].href}>
                    <img
                      src={imgArray[2].imgSrc}
                      alt={imgArray[2].altTag}
                    ></img>
                    647-571-2494
                  </a>
                  <a href={imgArray[3].href}>
                    <img
                      src={imgArray[3].imgSrc}
                      alt={imgArray[3].altTag}
                    ></img>
                    Mobgadol@gmail.com
                  </a>
                </li>
                <li className="social-info">
                  <span>
                    You can also connect with me on LinkedIn or check out my
                    Github:
                  </span>
                  <div className="social-links">
                    <a href={imgArray[0].href} target="_blank" rel="noreferrer">
                      <img
                        src={imgArray[0].imgSrc}
                        alt={imgArray[0].altTag}
                      ></img>
                    </a>
                    <a href={imgArray[1].href} target="_blank" rel="noreferrer">
                      <img
                        src={imgArray[1].imgSrc}
                        alt={imgArray[1].altTag}
                      ></img>
                    </a>
                  </div>
                </li>
              </ul>
            </article>
          </div>
          <div className="img-container">
            <img src={memoji} alt="Moshe Gadol Memoji"></img>
          </div>
        </div>
      </section>
      <EmailSection />
    </>
  );
};

export default Contact;
