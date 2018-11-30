import React, { Component } from "react";
import "./Header.css";
import { Col, Row, Container } from "../../components/Grid";

class Header extends Component {
  
  render() {
    return (
      <Container>
        <Row>
          <Col size="lg-12">
            <h1 className="header-top">Visually Impaired Services</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
