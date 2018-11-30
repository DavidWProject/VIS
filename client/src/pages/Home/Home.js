import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Footer from "../../components/Footer";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Home extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col size="lg-12">
            <h2 className="text-center">V.I.S. provides a simple accessible online resource for the visually impaired. </h2>
            <p>Here we strive to help those who are visually impaired by various resources implemented on this website. 
              By having a simple, and easy to navigate user interface, users can navigate the website in a fast and convenient manner. 
              We offer a variety of resources to the visually impaired such as job listings and visibility for employers to contact you for employment.
            </p>            
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
          <h2 className="text-center">V.I.S. also provides resources for developers to create interfaces for the Visually Impaired. </h2>
          <p>Resources gathered here are to help developers employ excellent coding practices and standards that provide accessibility to those who are visually impaired. </p>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
