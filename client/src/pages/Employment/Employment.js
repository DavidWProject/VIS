import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import Search from "../../components/Search";

const Employment = () => (
  <Container>
    <Row>
      <Col size="lg-12">
      <h2 className="text-center">Employment / Job Listings</h2>
      <h3 className="text-center">
        Search the U.S. Government Job Listing Below
      </h3>
      <Search />
      </Col>
    </Row>
    <Footer />
  </Container>
);

export default Employment;
