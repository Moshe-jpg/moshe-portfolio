import React, { useState, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import logo from "../../assets/logo.webp";
import menuBar from "../../assets/menu.webp";
import xBar from "../../assets/xbar.png";

const Navbar = (props) => {
  const { pages = [], setCurrentPage } = props;
  const [active, setActive] = useState("nav-menu");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    VanillaTilt.init(document.querySelector(".navbar a img"), {
      max: 30,
      speed: 400,
      perspective: 500,
    });
  }, []);

  const navToggler = () => {
    setActive(active === "nav-menu" ? "nav-menu nav-active" : "nav-menu");
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToWork = () => {
    const workElement = document.getElementById("work");
    workElement.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHome = () => {
    const homeElement = document.getElementById("top");
    homeElement.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    const top = document.getElementById("top");
    top.scrollIntoView({ behavior: "smooth" });
  };

  const handleListItemClick = (callback) => {
    setActive("nav-menu");
    setIsMenuOpen(false);
    callback();
  };

  return (
    <nav className="navbar">
      <a href="/">
        <img
          src={logo}
          alt="Moshe Gadol Logo"
          className="navigation-logo"
        ></img>
      </a>
      <ul className={active}>
        <li
          className="nav-link"
          onClick={() => {
            handleListItemClick(() => {
              setTimeout(() => {
                scrollToTop();
                setCurrentPage(pages[0]);
                setTimeout(() => {
                  scrollToHome();
                }, 500);
              }, 1000);
            });
          }}
          title="Home"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          Home
          <div className="li-overlay">Home</div>
        </li>
        <li
          className="nav-link"
          onClick={() => {
            handleListItemClick(() => {
              setTimeout(() => {
                scrollToTop();
                setCurrentPage(pages[0]);
                setTimeout(() => {
                  scrollToWork();
                }, 500);
              }, 1000);
            });
          }}
          title="My Work"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          My Work
          <div className="li-overlay">My Work</div>
        </li>
        <li
          className="nav-link lets-talk-link"
          onClick={() => {
            handleListItemClick(() => {
              scrollToTop();
              setTimeout(() => {
                setCurrentPage(pages[1]);
              }, 1000);
            });
          }}
          title="Let's Talk"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          Let's Talk
          <div className="li-overlay">Let's Talk</div>
        </li>
      </ul>
      <div onClick={navToggler} className="toggler">
        <img
          width="100"
          height="100"
          rel="prefetch"
          src={isMenuOpen ? xBar : menuBar}
          alt="open menu"
          className={`menu-btn${isMenuOpen ? " turned-btn" : ""}`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
