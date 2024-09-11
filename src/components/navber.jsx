import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container t my-3 navber">
      <div className="row bg-ligh ">
        <div className="col-lg-2 bg-light d-flex justify-content-center align-items-center logo">
          <img className="bg-light" src="/src/assets/image/logo.png" alt="Logo" />
        </div>
        <div className="col-lg-8 bg-light d-flex justify-content-center align-items-center ul">
          <ul className="d-flex gap-4 ">
            <li><Link className="bg-light"  to="/">HOME</Link></li>
            <li><Link to="/about">ABOUT ME</Link></li>
            <li><Link to="/portfolio">PORTFOLIO</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 bg-light contant-btn d-flex justify-content-center align-items-center">
          <h4 className="bg-dark d-flex justify-content-center rounded py-1 px-3">
            <Link to="/contact" className="text-light bg-drak">LET'S TALK</Link>
          </h4>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
