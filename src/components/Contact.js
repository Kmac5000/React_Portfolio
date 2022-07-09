import React, { useState } from "react";
import { Container, Row, Col, Alert, Button, Form } from "react-bootstrap";
import "./contact.css";

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.MAIL_USERNAME,
//     pass: process.env.MAIL_PASSWORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
// });

const ContactMe = () => {
  const [formData, setFormdata] = useState({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormdata({ loading: true });
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="App-header">
      <Container id="contact-area">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4 contact-about">Contact Me</h1>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <Alert
              className={formData.show}
              variant={formData.variant}
              onClose={() => setFormdata({ show: false })}
            ></Alert>
          </Col>
          <Col lg="5" className="mb-5">
            <h2 className="py-4 contact-about">Get in touch</h2>
            <div className="contact-about">
              Email :
              <a href="mailto:riverbatrock@gmail.com"> RiverBatRock@gmail</a>
              <br />
              <br />
            </div>
            <p>{}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <Form onSubmit={handleSubmit} className="contact-form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="What is Your Name?"
                    value={formData.name || ""}
                    type="text"
                    required
                    onChange={handleChange}
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="What is Your Email?"
                    type="email"
                    value={formData.email || ""}
                    required
                    onChange={handleChange}
                  />
                </Col>
              </Row>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="Send Me a Message."
                rows="7"
                value={formData.message}
                required
                onChange={handleChange}
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <Button className="mb-5" id="subButton" type="submit">
                    {formData.loading ? "Sending" : "Send"}
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMe;
