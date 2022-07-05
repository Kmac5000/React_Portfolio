import * as React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";

import "./Header.css";

function Header() {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="container-fluid">
        <h1 className="navbar-text">
          <a href="/" alt="home" id="navName">
            Keith MacNeil
          </a>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarText"> */}
        <div className="justify-content-end" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link" aria-current="page">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </header>
  );
}

export default Header;
