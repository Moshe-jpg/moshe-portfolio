import React, { useRef, useEffect } from "react";
import Offerings from "../Offerings";
import Work from "../Work";

const Home = (props) => {
  const { pages = [], setCurrentPage } = props;

  const textRef = useRef(null);

  useEffect(() => {
    const textArray = [
      { content: "Innovative Results" },
      { content: "Perfect Animations" },
      { content: "Responsive Designs" },
      { content: "Tailored Solutions" },
      { content: "Custom Created SEO" },
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      textRef.current.textContent = textArray[currentIndex].content;
      currentIndex = (currentIndex + 1) % textArray.length;
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section id="home">
        <header className="home-header">
          <h1 title="Moshe Gadol" alt="Moshe Gadol">
            Moshe Gadol
          </h1>
          <h2>
            {"< "}Front End Web Developer{" />"}
          </h2>
          <div className="container">
            <span className="text first-text">
              I Maximize Your Online Impact With
            </span>
            &nbsp;
            <span className="text second-text" ref={textRef}>
              {/* Add ::before pseudo-element */}
              Phenomenal Details
              <span className="second-text__before"></span>
            </span>
          </div>
        </header>
      </section>
      <Offerings />
      <Work pages={pages} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
