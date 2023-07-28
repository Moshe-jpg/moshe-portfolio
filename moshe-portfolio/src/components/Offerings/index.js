import React, { useRef, useEffect } from "react";
import RunOfferingsAnimation from "../../animations/RunOfferingsAnimation";
import storyTellingImg from "../../assets/visual-storytelling.webp";
import responsiveImg from "../../assets/responsive.webp";
import socialMediaImg from "../../assets/social-media.webp";
import animationImg from "../../assets/animation.webp";
import seoImg from "../../assets/seo-2.webp";
import speedImg from "../../assets/speed.webp";

const Offerings = () => {
  const OfferingRef = useRef(null);

  useEffect(() => {
    RunOfferingsAnimation(OfferingRef.current);
  }, []);

  const offerings = [
    {
      title: "Visual Storytelling",
      description:
        "Creating powerful visual narratives that convey your brand's message",
      textSide: "left",
      imgSide: "right",
      imgSrc: storyTellingImg,
      altTag: "Visual Storytelling",
      headerNumber: "one",
      pNumber: "one",
      imgNumber: "one",
    },
    {
      title: "Responsive Designs",
      description:
        "Transforming website layouts to fit any screen size with ease",
      textSide: "right",
      imgSide: "left",
      imgSrc: responsiveImg,
      altTag: "Responsive Designs",
      headerNumber: "two",
      pNumber: "two",
      imgNumber: "two",
    },
    {
      title: "Social Content",
      description:
        "Specializing your social media strategy to widen your audience",
      textSide: "left",
      imgSide: "right",
      imgSrc: socialMediaImg,
      altTag: "Social Media Content",
      headerNumber: "three",
      pNumber: "three",
      imgNumber: "three",
    },
    {
      title: "Flawless Animations",
      description:
        "Adding a touch of magic to your website with stunning animations",
      textSide: "right",
      imgSide: "left",
      imgSrc: animationImg,
      altTag: "Flawless Animations",
      headerNumber: "four",
      pNumber: "four",
      imgNumber: "four",
    },
    {
      title: "SEO Optimization",
      description:
        "Maximizing your visibility in search engines with effective SEO strategies",
      textSide: "left",
      imgSide: "right",
      imgSrc: seoImg,
      altTag: "SEO Optimization",
      headerNumber: "five",
      pNumber: "five",
      imgNumber: "five",
    },
    {
      title: "Lightning Fast Speeds",
      description:
        "Optimizing your site for speed to ensure a smooth user experience",
      textSide: "right",
      imgSide: "left",
      imgSrc: speedImg,
      altTag: "Lightning Fast Speeds",
      headerNumber: "six",
      pNumber: "six",
      imgNumber: "six",
    },
  ];

  return (
    <section id="offerings">
      <header className="offerings-header">
        <h1>
          <span>What Do I Offer?</span>
        </h1>
      </header>
      <ul className="offerings-container">
        {offerings.map((offering, index) => (
          <li key={index} className={`offering-item ${offering.textSide}`}>
            <div className="desc-container">
              <header className={`${offering.headerNumber}`}>
                <span>{offering.title}</span>
              </header>
              <p className={`${offering.pNumber}`}>
                <span>{offering.description}</span>
              </p>
            </div>
            <div className="img-container">
              <img
                width="100"
                height="100"
                src={offering.imgSrc}
                alt={offering.altTag}
                className={`${offering.imgSide}`}
              ></img>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Offerings;
