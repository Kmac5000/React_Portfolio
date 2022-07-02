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
        {/* <a class="navbar-brand" href="#">
          Navbar w/ text
        </a> */}
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
        {/* <div class="collapse navbar-collapse" id="navbarText"> */}
        <div className="justify-content-end" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#about-area">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects-area">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-area">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
