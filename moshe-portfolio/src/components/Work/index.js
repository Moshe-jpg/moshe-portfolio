import React from "react";
import kiImg from "../../assets/ki-sr.webp";
import mkImg from "../../assets/mk-sr.webp";
import innerPatternImg from "../../assets/ip-sr.webp";
import exerciseImg from "../../assets/rb-sr.webp";

const Work = () => {
  const works = [
    {
      imgSrc: kiImg,
      name: "Kosher Innovations",
      text: "The new Kosher Innovations website. Super Fast, beautifully animated",
      site_href: "https://kosherinnovations.github.io/kosher-lamp/",
      repo_href: "https://github.com/KosherInnovations/kosher-lamp",
      textSide: "right",
    },
    {
      imgSrc: mkImg,
      name: "Mekor Chaim",
      text: "A small feature site built for a post secondary school client in Brooklyn.",
      site_href: "https://moshe-jpg.github.io/mekor-chaim/",
      repo_href: "https://github.com/moshe-jpg/mekor-chaim",
      textSide: "left",
    },
    {
      imgSrc: innerPatternImg,
      name: "InnerPattern",
      text: "A mental health tracker application. Helps keep track of your thoughts and accompanying mood. ",
      site_href: "http://innerpattern.herokuapp.com/",
      repo_href: "https://github.com/Tyl3r-s/InnerPattern",
      textSide: "right",
    },
    {
      imgSrc: exerciseImg,
      name: "Run Buddy",
      text: "A basic webpage built for an online exercise startup. Splendid landing page to display Run Buddy.",
      site_href: "https://moshe-jpg.github.io/run-buddy/",
      repo_href: "https://github.com/Moshe-jpg/run-buddy",
      textSide: "left",
    },
  ];

  return (
    <section id="work">
      <header className="work-header">
        <h1>My Work</h1>
      </header>
      <ul className="works-container">
        {works.map((work, index) => (
          <li key={index} className={`work-item ${work.textSide}`}>
            <div className="desc-container">
              <div className="bg-container">
                <span>{work.name}</span>
                <p>{work.text}</p>
              </div>
            </div>
            <div className="img-container">
              <img src={work.imgSrc} alt={work.text}></img>
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
