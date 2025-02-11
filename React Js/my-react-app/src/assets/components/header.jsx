import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="Header container">
      header
      <Link
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/"
      >
        Home
      </Link>{" "}
      |
      <Link
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        to="/AboutUs"
      >
        About
      </Link>
    </div>
  );
};

export default header;
