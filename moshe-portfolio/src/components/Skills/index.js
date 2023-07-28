import React from "react";
// import LazyLoad from "react-lazyload";
import gsapImg from "../../assets/gsap-logo.webp";
import cssImg from "../../assets/css.webp";
import bootstrapImg from "../../assets/bootstrap.webp";
import expressImg from "../../assets/express.webp";
import githubImg from "../../assets/github.webp";
import htmlImg from "../../assets/html.webp";
import javascriptImg from "../../assets/javascript.webp";
import jqueryImg from "../../assets/jquery.webp";
import mongodbImg from "../../assets/mongodb.webp";
import mongooseImg from "../../assets/mongoose.webp";
import mysqlImg from "../../assets/mysql.webp";
import nodeImg from "../../assets/node.webp";
import reactImg from "../../assets/react.webp";
import tailwindImg from "../../assets/tailwind.webp";

const Skills = () => {
  const logos = [
    {
      imgSrc: reactImg,
      altTag: "React.js",
    },
    {
      imgSrc: gsapImg,
      altTag: "GreenSock Animation Platform (GSAP)",
    },
    {
      imgSrc: javascriptImg,
      altTag: "JavaScript",
    },
    {
      imgSrc: htmlImg,
      altTag: "HTML",
    },
    {
      imgSrc: cssImg,
      altTag: "CSS",
    },
    {
      imgSrc: githubImg,
      altTag: "Github",
    },
    {
      imgSrc: bootstrapImg,
      altTag: "Bootstrap",
    },
    {
      imgSrc: nodeImg,
      altTag: "Node.js",
    },
    {
      imgSrc: expressImg,
      altTag: "Express.js",
    },
    {
      imgSrc: jqueryImg,
      altTag: "JQuery",
    },
    {
      imgSrc: tailwindImg,
      altTag: "Tailwind.css",
    },
    {
      imgSrc: mongooseImg,
      altTag: "Mongoose.js",
    },
    {
      imgSrc: mongodbImg,
      altTag: "MongoDB",
    },

    {
      imgSrc: mysqlImg,
      altTag: "MySQL",
    },
  ];

  return (
    <section id="skills">
      <div className="logos">
        <div className="logos-slide">
          {logos.map((logo, i) => {
            return (
              <img
                src={logo.imgSrc}
                alt={logo.altTag}
                width="100" height="100"
                key={i}
                title={logo.altTag}
              ></img>
            );
          })}
        </div>
        <div className="logos-slide">
          {logos.map((logo, i) => {
            return (
              <img
                src={logo.imgSrc}
                alt={logo.altTag}
                width="100" height="100"
                key={i}
                title={logo.altTag}
              ></img>
            );
          })}
        </div>
        <div className="logos-slide">
          {logos.map((logo, i) => {
            return (
              <img
                src={logo.imgSrc}
                alt={logo.altTag}
                width="100" height="100"
                key={i}
                title={logo.altTag}
              ></img>
            );
          })}
        </div>
        <div className="logos-slide">
          {logos.map((logo, i) => {
            return (
              <img
                src={logo.imgSrc}
                alt={logo.altTag}
                width="100" height="100"
                key={i}
                title={logo.altTag}
              ></img>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
