import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";

const Developer = () => (
  <Container>
    <meta name="Developer's Resource" content="This is where developers can create a more friendly website for the visually impaired."></meta>
    <Row>
      <Col size="lg-12">
      <h2 className="text-center">Developers</h2>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque
        turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat.
        Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum
        nunc, sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi justo
        laoreet risus, luctus luctus mi lacus sit amet libero. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
        lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat
        accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque vehicula sit
        amet at augue. Maecenas aliquam bibendum congue. Pellentesque semper, lectus non ullamcorper
        iaculis, est ligula suscipit velit, sed bibendum turpis dui in sapien.
      </p>
      </Col>
    </Row>
    <Footer />
  </Container>
);

export default Developer;