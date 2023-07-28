import React, { useRef, useEffect } from "react";
import RunFooterAnimation from "../../animations/RunFooterAnimation";
import VanillaTilt from "vanilla-tilt";

const Footer = (props) => {
  const { pages = [], setCurrentPage } = props;

  const footerRef = useRef(null);

  useEffect(() => {
    RunFooterAnimation(footerRef.current);

    const footerLinks = document.querySelectorAll(".footer-btn-container a");

    VanillaTilt.init(
      document.querySelector(
        ".footer-component .footer-statement-container button"
      ),
      {
        max: 20,
        speed: 400,
        perspective: 500,
      }
    );
    VanillaTilt.init(footerLinks, {
      max: 50,
      speed: 400,
      perspective: 500,
    });
  }, []);

  const scrollToTop = () => {
    const top = document.getElementById("top");
    top.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="footer-component" ref={footerRef}>
      <div className="footer-statement-container">
        <h4>
          Discover the power of a website<br></br>tailored to your needs
        </h4>
        <button
          title="Let's Talk"
          onClick={() => {
            scrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[1]);
            }, 500);
          }}
        >
          Let's Talk
        </button>
      </div>
      <div className="footer-btn-container">
        <a
          href="https://www.linkedin.com/in/moshe-gadol/"
          className="footer-btn"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://www.github.com/moshe-jpg"
          className="footer-btn"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="mailto:mobgadol@gmail.com"
          className="footer-btn"
          target="_blank"
          rel="noreferrer"
        >
          Gmail
        </a>
        <a
          href="tel:647-571-2494"
          className="footer-btn"
          target="_blank"
          rel="noreferrer"
        >
          Phone
        </a>
      </div>
      <p>Created By Moshe Gadol</p>
    </footer>
  );
};

export default Footer;
