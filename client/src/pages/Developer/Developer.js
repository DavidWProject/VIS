import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";

const Developer = () => (
  <Container>
    <meta name="Developer's Resource" content="This is where developers can create a more friendly website for the visually impaired."></meta>
    <Row>
      <Col size="lg-12">
      <h2 className="text-center">Helpful Developers Tips and Tools</h2>
      </Col>
    </Row>
    <Row>
      <Col size="lg-12">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">5 General UX Tips</h3>
        </div>
      </div>
      <div className="card">
        <ol className="list-group list-group-flush text-center">
          <li className="list-group-item"><p>Don’t only rely on color to convey a message</p></li>
          <li className="list-group-item"><p>Keep your color palette limited to 2 or 3 colors</p></li>
          <li className="list-group-item"><p>Use texture and patterns to show contrast</p></li>
          <li className="list-group-item"><p>Carefully select any contrasting colors and shades</p></li>
          <li className="list-group-item"><p>Avoid using bad color combinations</p></li>
        </ol>
      </div>
      </Col>
    </Row>
    <Row>
      <Col size="lg-12">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Tools</h3>
          </div>
        </div>
        <div className="card">
          <ol className="list-group list-group-flush text-center">
          <li className="list-group-item"><a href="https://developers.google.com/web/tools/lighthouse/" target="_blank">Google Accessibility Tool - Lighthouse</a></li>
          </ol>
      </div>
      </Col>
    </Row>
    <Footer />
  </Container>
);

export default Developer;
