import React from "react";
import "./project.css";
import { Container, Row, Col } from "react-bootstrap";

const portfolioImages = [
  {
    img: "portfolio-images/TeamBuilderImg.png",
    desctiption: "",
    link: "portfolio-images/TeamBuilderImg.png",
  },
  {
    img: "portfolio-images/learncrypt1.png",
    desctiption: "",
    link: "https://thawing-mesa-35152.herokuapp.com",
  },
  {
    img: "portfolio-images/Bach1.png",
    desctiption: "",
    link: "https://sabotmbt.github.io/ClassProject1/",
  },
  {
    img: "portfolio-images/PWAtexteditor.png",
    desctiption: "",
    link: "https://desolate-brushlands-55244.herokuapp.com/",
  },
  {
    img: "portfolio-images/weather-dashboard.png",
    desctiption: "",
    link: "https://kmac5000.github.io/Weather_Dashboard/",
  },
  {
    img: "portfolio-images/multichoicegame.png",
    desctiption: "",
    link: "https://kmac5000.github.io/Timed_Quiz/",
  },
];

function Projects() {
  return (
    <section className="App-header">
      <Container id="projects-area">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> My Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 projectItemsBrowse">
          {portfolioImages.map((data, i) => {
            return (
              <div key={i} className="projectItem">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.desctiption}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
