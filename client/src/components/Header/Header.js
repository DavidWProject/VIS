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
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
              <Link className="navbar-brand" to="/">
                Visually Impaired Services
              </Link>
              <button
                onClick={this.toggleNav}
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                      to="/"
                    >
                      Search
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                      to="/saved"
                    >
                      Saved
                    </Link>
                  </li>
                </ul>
              </div> */}
            </nav>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;