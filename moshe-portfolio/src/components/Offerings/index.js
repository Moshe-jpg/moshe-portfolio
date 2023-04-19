import React from "react";
import storyTellingImg from "../../assets/visual-storytelling.png";
import responsiveImg from "../../assets/responsive.png";
import animationImg from "../../assets/animation.png";
import seoImg from "../../assets/seo.png";
import speedImg from "../../assets/speed.png";

const Offerings = () => {
  const offerings = [
    {
      title: "Visual Storytelling",
      description:
        "Creating powerful visual narratives that convey your brand's message",
      textSide: "left",
      imgSrc: storyTellingImg,
      altTag: "",
    },
    {
      title: "Responsive Designs",
      description:
        "Transforming website layouts to fit any screen size with ease",
      textSide: "right",
      imgSrc: responsiveImg,
      altTag: "",
    },
    {
      title: "Flawless Animations",
      description:
        "Adding a touch of magic to your website with stunning animations",
      textSide: "left",
      imgSrc: animationImg,
      altTag: "",
    },
    {
      title: "SEO Optimization",
      description:
        "Maximizing your visibility in search engines with effective SEO strategies",
      textSide: "right",
      imgSrc: seoImg,
      altTag: "",
    },
    {
      title: "Lightning Fast Speeds",
      description:
        "Optimizing your site for speed to ensure a smooth user experience",
      textSide: "left",
      imgSrc: speedImg,
      altTag: "",
    },
  ];

  return (
    <section id="offerings">
      <header className="offerings-header">
        <h1>What Can I Offer You?</h1>
      </header>
      <ul className="offerings-container">
        {offerings.map((offering, index) => (
          <li key={index} className={`offering-item ${offering.textSide}`}>
            <div className="desc-container">
              <span>{offering.title}</span>
              <p>{offering.description}</p>
            </div>
            <div className="img-container">
              <img src={offering.imgSrc} alt={offering.altTag}></img>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Offerings;
