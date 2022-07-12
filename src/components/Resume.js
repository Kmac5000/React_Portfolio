import "./resume.css";

function Resume() {
  return (
    <section className="App-header" id="about-area">
      <h1>Download Resume Below</h1>
      <h2>Download Resume Below</h2>
      <h3>Download Resume Below</h3>

      <button className="resume-button my-4 rounded-pill bg-danger ">
        <a
          className="text-decoration-none text-reset m-2"
          download="Keith_MacNeil_Resume.pdf"
          target="_blank"
          href="/resume/Resume_Keith2.pdf"
        >
          ✭✭ Download My Resume ✭✭
        </a>
      </button>

      <h4>Download Resume Above</h4>
      <h5>Download Resume Above</h5>
      <h6>Download Resume Above</h6>
    </section>
  );
}

export default Resume;
