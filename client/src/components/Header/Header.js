import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Col, Row, Container } from "../../components/Grid";

class Header extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnMount() {
    window.removeEventListener("resize", this.updateWidth);
  }

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
