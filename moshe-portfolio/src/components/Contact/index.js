import React, { useRef, useEffect } from "react";
import RunContactAnimation from "../../animations/RunContactAnimation";
import EmailSection from "../EmailSection";
import back from "../../assets/back.webp";
import memoji from "../../assets/moshe-emoji.webp";
import linkedin from "../../assets/linkedin.webp";
import github from "../../assets/github.webp";
import phone from "../../assets/phone.webp";
import gmail from "../../assets/gmail.webp";

const Contact = (props) => {
  const { pages = [], setCurrentPage } = props;

  const ContactRef = useRef(null);

  useEffect(() => {
    RunContactAnimation(ContactRef.current);
  });

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

  const scrollToTop = () => {
    const contactElement = document.getElementById("contact");
    contactElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        className="homepage-btn"
        aria-label="Back To Home"
        onClick={() => {
          scrollToTop();
          setTimeout(() => {
            setCurrentPage(pages[0]);
          }, 1000);
        }}
      >
        <img src={back} alt="Back To Homepage"></img>
      </button>
      <section id="contact" ref={ContactRef}>
        <div className="contact-layout-container">
          <div className="contact-container">
            <header className="contact-form-header">
              <h2>Contact Me</h2>
            </header>
            <article>
              <div className="cover"></div>
              <ul>
                <li className="moshe-info">
                  <span className="moshe-name">Moshe Gadol</span>
                  <span>Toronto, Ontario</span>
                  <span>Canada</span>
                </li>
                <li className="contact-info">
                  <a href={imgArray[2].href}>647-571-2494</a>
                  <a href={imgArray[3].href}>Mobgadol@gmail.com</a>
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
            <img
              className="moshe-emoji"
              src={memoji}
              alt="Moshe Gadol Memoji"
            ></img>
          </div>
        </div>
      </section>
      <EmailSection />
    </>
  );
};

export default Contact;
