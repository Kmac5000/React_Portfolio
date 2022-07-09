import * as React from "react";
import { Link } from "react-router-dom";
import { Stack, Row, Col } from "react-bootstrap";

import "./Header.css";

function Header() {
  return (
    <Stack>
      <Row className="navbar navbar-expand-sm navbar-light bg-light">
        <nav className="container-fluid">
          <Col>
            <h1 className="navbar-text">
              <a href="/" alt="home" id="navName">
                Keith MacNeil
              </a>
            </h1>
          </Col>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <Col className="container navbarText" id="navbarText">
            <div className="row-" id="navbarText">
              <ul className="container navbar-nav justify-content-end">
                <li className="nav-item ms-0">
                  <Link
                    to="/about"
                    className="nav-link ms-auto"
                    aria-current="page"
                  >
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
                <li className="nav-item">
                  <Link to="/resume" className="nav-link">
                    Resume
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </nav>
      </Row>
    </Stack>
  );
}

export default Header;
