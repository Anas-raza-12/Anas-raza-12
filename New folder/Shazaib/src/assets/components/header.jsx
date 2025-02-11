import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/image/Frame.png";

const Header = () => {
  return (
    <header className="header">
      <div className="top-line">
        <img width="40px" src={logo} alt="Company Logo" />
      </div>
      <nav className="nav-links">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          to="/"
          aria-label="Home"
        >
          Home
        </NavLink>
        <span className="separator">|</span>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
          to="/AboutUs"
          aria-label="About Us"
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
