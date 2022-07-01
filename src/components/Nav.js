import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  const [expandNav, setExpandNav] = useState(false);

  const toggleMenu = () => {
    setExpandNav(!expandNav);
  };
  return (
    <div className="navbar">
      <div className="logoContainer">
        <Link to="/" className="logo"></Link>
      </div>
      <div className="navSeparator">
        <div className="line"></div>
      </div>
      <ul className={expandNav ? "nav-menu open" : "nav-menu"}>
        <li className="nav-Item">
          <NavLink to="/" className="nav-link">
            <span className="nav-linkSpan">00</span>Home
          </NavLink>
        </li>
        <li className="nav-Item">
          <NavLink to="/destination" className="nav-link">
            <span className="nav-linkSpan">01</span>Destination
          </NavLink>
        </li>
        <li className="nav-Item">
          <NavLink to="/crew" className="nav-link">
            <span className="nav-linkSpan">02</span>Crew
          </NavLink>
        </li>
        <li className="nav-Item">
          <NavLink to="/technology" className="nav-link">
            <span className="nav-linkSpan">03</span>Technology
          </NavLink>
        </li>
      </ul>
      <div
        className={expandNav ? "hamburger active " : "hamburger"}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Nav;
