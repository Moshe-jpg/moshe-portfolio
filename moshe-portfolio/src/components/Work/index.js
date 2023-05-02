import React, { useRef, useEffect } from "react";
import RunWorkAnimation from "../../animations/RunWorkAnimation";
// import LazyLoad from "react-lazyload";
import kiImg from "../../assets/ki-sr.webp";
import kiMobile from "../../assets/ki-mobile.webp";
import mkImg from "../../assets/mk-sr.webp";
import mkMobile from "../../assets/mk-mobile.webp";
import innerPatternImg from "../../assets/ip-sr.webp";
import ipMobile from "../../assets/ip-mobile.webp";
import exerciseImg from "../../assets/rb-sr.webp";
import rbMobile from "../../assets/rb-mobile.webp";
import click from "../../assets/click.webp";

const Work = (props) => {
  const { pages = [], setCurrentPage } = props;
  const isMobile = window.innerWidth < 768;

  const WorkRef = useRef(null);

  useEffect(() => {
    RunWorkAnimation(WorkRef.current);
  }, []);

  const works = [
    {
      imgSrc: kiImg,
      imgMobile: kiMobile,
      name: "Kosher Innovations",
      site_href: "https://kosherinnovations.github.io/kosher-lamp/",
      repo_href: "https://github.com/KosherInnovations/kosher-lamp",
      textSide: "right",
    },
    {
      imgSrc: mkImg,
      imgMobile: mkMobile,
      name: "Mekor Chaim",
      site_href: "https://moshe-jpg.github.io/mekor-chaim/",
      repo_href: "https://github.com/moshe-jpg/mekor-chaim",
      textSide: "left",
    },
    {
      imgSrc: innerPatternImg,
      imgMobile: ipMobile,
      name: "InnerPattern",
      site_href: "http://innerpattern.herokuapp.com/",
      repo_href: "https://github.com/Tyl3r-s/InnerPattern",
      textSide: "right",
    },
    {
      imgSrc: exerciseImg,
      imgMobile: rbMobile,
      name: "Run Buddy",
      site_href: "https://moshe-jpg.github.io/run-buddy/",
      repo_href: "https://github.com/Moshe-jpg/run-buddy",
      textSide: "left",
    },
  ];

  const scrollToTop = () => {
    const homeElement = document.getElementById("home");
    homeElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="work" ref={WorkRef}>
      <header className="work-header">
        <h1>My Work</h1>
      </header>
      <ul className="works-container">
        {works.map((work, index) => (
          <li key={index} className={`work-item ${work.textSide}`}>
            <div className="desc-container">
              <div className="bg-container">
                <h4>{work.name}</h4>
              </div>
            </div>
            <div className="img-container">
              <img id="click" src={click} alt="Click this container"></img>
              {/* <LazyLoad height={200} offset={400}> */}
              <img
                className="desc-container-img"
                src={isMobile ? work.imgMobile : work.imgSrc}
                alt={work.text}
                width="100"
              ></img>
              {/* </LazyLoad> */}
              <div className="visit-btn-container">
                <a
                  href={work.site_href}
                  target="_blank"
                  rel="noreferrer"
                  alt={`Visit ${work.name} site`}
                >
                  Visit {work.name} Site
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="lets-talk-btn">
        <button
          onClick={() => {
            scrollToTop();
            setTimeout(() => {
              setCurrentPage(pages[1]);
            }, 1000);
          }}
        >
          Let's Talk
        </button>
      </div>
    </section>
  );
};

export default Work;
