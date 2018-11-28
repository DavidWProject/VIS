import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "../Learn";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";

const Contact = props => (
  <Container>
    <meta name="Resouce Page" content="There are a generous amount of resources such as government grants that can be utilized by the visually impaired."></meta>
    <Row>
      <Col size="lg-12">
      <h2 className="text-center">Resource Page</h2>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet efficitur.
        In felis nisl, luctus non ante euismod, tincidunt bibendum mi. In a
        molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna posuere,
        eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque
        nec metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla
        facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh dictum
        ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus.
        Etiam vel condimentum magna, quis tempor nulla.
      </p>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
      </Col>
    </Row>
    <Footer />
  </Container>
);

export default Contact;
