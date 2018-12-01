import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "../Learn";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";

const Resource = props => (
  <Container>
    <meta name="Resouce Page" content="There are a generous amount of resources such as government grants that can be utilized by the visually impaired."></meta>
      <Row>
        <Col size="lg-12">
        <h2 className="text-center">Resource Page</h2>
        </Col>
      </Row>
      <Row>
        <Col size="lg-12">
        <div className="card mt-3">
          <div className="card-body">
          <h2 className="text-center"><a href="https://www.ntac.blind.msstate.edu/information-and-resources/ncsab/" target="_blank">Website to State and Territory Vocational Rehabilitation Programs</a></h2>
          </div>
        </div>
        </Col>
      </Row>
      <Row>
        <Col size="lg-12">
        <div className="card mt-3">
          <div className="card-body">
          <h2 className="text-center"><a href="https://www.enhancedvision.com/grants-and-assistive-programs.html#Q1.3" target="_blank">Link to Government Assistance and Grants for the Visually Impaired</a></h2>
          </div>
        </div>
        </Col>
      </Row>
      <Row>
        <Col size="lg-12">
        <div className="card mt-3">
          <div className="card-body">
          <h2 className="text-center"><a href="https://sandysview1.wordpress.com/2016/10/06/top-5-benefits-of-hiring-people-with-disabilities/" target="_blank">Top 5 Reasons why Employers should hire Visually Impaired Individuals</a></h2>
          </div>
        </div>
        </Col>
      </Row>
      <Row>
      <Link to={`${props.match.url}/learn`} role="button" className="btn btn-link">
        Learn More
      </Link>{" "}
      <Link to="/Resource" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />
      </Row>
      <Row className="mt-2">
        <Col size="lg-12">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center"><a href="http://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" target="_blank">A few facts about Blindness and vision impairment from the World Health Organization</a></h3>
            </div>
          </div>
          <div className="card">
            <ol className="list-group list-group-flush text-center">
              <li className="list-group-item"><p>Globally, it is estimated that approximately 1.3 billion people live with some form of vision impairment.</p></li>
              <li className="list-group-item"><p>With regards to distance vision, 188.5 million people have mild vision impairment, 217 million have moderate to severe vision impairment, and 36 million people are blind.</p></li>
              <li className="list-group-item"><p>With regards to near vision, 826 million people live with a near vision impairment </p></li>
              <li className="list-group-item"><p>Approximately 80% of all vision impairment globally is considered avoidable.</p></li>
              <li className="list-group-item"><p>The majority of people with vision impairment are over the age of 50 years.</p></li>
            </ol>
          </div>
        </Col>
      </Row>

    <Footer />
  </Container>
);

export default Resource;
