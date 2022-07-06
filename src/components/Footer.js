import "./footer.css";

function Footer() {
  return (
    <footer className="footer" id="footerText">
      <div className="content has-text-centered">
        <a
          className="footText text-left"
          href="https://github.com/Kmac5000"
          target="_blank"
          rel="noreferrer"
        >
          Github : Kmac5000 ---
        </a>
        <a
          className="footText justify-content-end"
          href="https://www.linkedin.com/in/kmac929/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ---
        </a>
        <a
          className="footText"
          href="https://www.instagram.com/riverbat1/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
