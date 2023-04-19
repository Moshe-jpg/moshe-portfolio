import React, { useState } from "react";
import favicon from "../../assets/favicon.ico";
import menuBar from "../../assets/menu.png";

const Navbar = (props) => {
  const { pages = [], setCurrentPage } = props;
  const [active, setActive] = useState("nav-menu");
  const [original, turned] = useState("menu-btn");

  const navToggler = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");
    original === "menu-btn"
      ? turned("menu-btn turned-btn")
      : turned("menu-btn");
  };


  return (
    <nav className="navbar">
      <a href="/moshe-portfolio">
        <img src={favicon} alt="Home icon" className="navigation-logo"></img>
      </a>
      <ul className={active}>
        <li
          className="nav-link"
          onClick={() => {
            setActive("nav-menu");
            turned("menu-btn");
            setTimeout(() => {
              setCurrentPage(pages[0]);
            }, 1000);
          }}
          title="Home"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          Home
        </li>
        <li
          className="nav-link"
          id="nav1"
          onClick={() => {
            setActive("nav-menu");
            turned("menu-btn");
            setTimeout(() => {
              setCurrentPage(pages[1]);
            }, 1000);
          }}
          title="My Work"
          rel="noopener noreferrer"
          tabIndex="0"
        >
         My Work
        </li>
        <li
          className="nav-link"
          id="nav2"
          onClick={() => {
            setActive("nav-menu");
            turned("menu-btn");
            setTimeout(() => {
              setCurrentPage(pages[2]);
            }, 1000);
          }}
          title="Let's Talk"
          rel="noopener noreferrer"
          tabIndex="0"
        >
          Let's Talk
        </li>
      </ul>
      <div onClick={navToggler} className="toggler">
        <img
          rel="prefetch"
          src={menuBar}
          alt="open menu"
          className={original}
        ></img>
      </div>
    </nav>
  );
};

export default Navbar;
