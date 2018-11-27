import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Container fluid>
    <meta name="Page not found" content="I'm sorry for the inconvience, No matches found or error in the page."></meta>

    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1 className="text-center">404 Page Not Found</h1>
          <h1 className="text-center">
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
