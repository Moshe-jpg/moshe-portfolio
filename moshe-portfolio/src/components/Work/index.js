import React, { useRef, useEffect } from "react";
import RunWorkAnimation from "../../animations/RunWorkAnimation";
// import LazyLoad from "react-lazyload";
import kiImg from "../../assets/ki-sr.webp";
import kiMobile from "../../assets/ki-mobile.webp";
import mkImg from "../../assets/mk-sr.webp";
import mkMobile from "../../assets/mk-mobile.webp";
import innerPatternImg from "../../assets/ip-sr.webp";
import ipMobile from "../../assets/ip-mobile.webp";
import ttecImg from "../../assets/ttec-logo.webp";
import click from "../../assets/click.webp";

const Work = () => {
  const isMobile = window.innerWidth < 768;

  const WorkRef = useRef(null);

  useEffect(() => {
    RunWorkAnimation(WorkRef.current);
  }, []);

  const works = [
    {
      imgSrc: ttecImg,
      imgMobile: ttecImg,
      name: "Coming Soon - TTEC",
      site_href: "#",
      repo_href: "",
    },
    {
      imgSrc: kiImg,
      imgMobile: kiMobile,
      name: "Kosher Innovations",
      site_href: "https://kosherinnovations.github.io/kosher-lamp/",
      repo_href: "https://github.com/KosherInnovations/kosher-lamp",
    },
    {
      imgSrc: mkImg,
      imgMobile: mkMobile,
      name: "Mekor Chaim",
      site_href: "https://moshe-jpg.github.io/mekor-chaim/",
      repo_href: "https://github.com/moshe-jpg/mekor-chaim",
    },
    {
      imgSrc: innerPatternImg,
      imgMobile: ipMobile,
      name: "Inner Pattern",
      site_href: "http://innerpattern.herokuapp.com/",
      repo_href: "https://github.com/Tyl3r-s/InnerPattern",
    },
  ];

  return (
    <section id="work" ref={WorkRef}>
      <header className="work-header">
        <h1>My Work</h1>
      </header>
      <ul className="works-container">
        {works.map((work, index) => (
          <li key={index} className={`work-item`}>
            {/* <DescContainer name={work.name} /> */}
            <div className="desc-container">
              <div className="bg-container">
                <h2>{work.name}</h2>
              </div>
            </div>
            <div className="img-container">
              <img
                id="click"
                src={click}
                alt="Click this container"
                width="100" height="100"
              ></img>
              {/* <LazyLoad height={200} offset={400}> */}
              <img
                className="desc-container-img"
                src={isMobile ? work.imgMobile : work.imgSrc}
                alt={work.name}
                width="100" height="100"
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
    </section>
  );
};

export default Work;
