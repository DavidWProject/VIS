import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";
import { Col, Row, Container } from "../../components/Grid";

const NavTabs = () => (
  <Container>
    <Row>
      <Col size="lg-12">
        <ul className="nav nav-tabs">
          
            <li className="nav-item col-lg-3">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                Home
              </Link>
            </li>
          
            <li className="nav-item col-lg-3">
              <Link
                to="/about"
                className={
                  window.location.pathname === "/about" ? "nav-link active" : "nav-link"
                }
              >
                Employment
              </Link>
            </li>
    
            <li className="nav-item col-lg-3">
              <Link
                to="/blog"
                className={
                  window.location.pathname === "/blog" ? "nav-link active" : "nav-link"
                }
              >
                Developers
              </Link>
            </li>
      
          <li className="nav-item col-lg-3">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
              }
            >
                Resources
            </Link>
          </li>
        
          {/* <li className="nav-item">
            <Link
              to="/contact/learn"
              className={
                window.location.pathname === "/contact/learn" ? "nav-link active" : "nav-link"
              }
            >
              Learn
            </Link>
          </li> */}
        </ul>
      </Col>
    </Row>
  </Container>
);

export default NavTabs;
