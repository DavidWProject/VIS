import React from "react";
import Footer from "../../components/Footer";
import { Col, Row, Container } from "../../components/Grid";

const Learn = () => (
  <Container>
    <Row>
      <Col size="lg-12">
        <div className="card mt-3">
          <div className="card-body">
          <h2 className="text-center"><a href="https://www.doleta.gov/business/incentives/opptax/" target="_blank">Work Opportunity Tax Credit for Employers</a></h2>
          </div>
        </div>
        <div className="card">
            <ol className="list-group list-group-flush text-center">
            <h3 className="list-group-item"><a href="https://www.doleta.gov/business/incentives/opptax/" target="_blank">The Work Opportunity Tax Credit (WOTC) is a Federal tax credit available to employers for hiring individuals from certain target groups who have consistently faced significant barriers to employment.</a></h3>
            </ol>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Learn;
