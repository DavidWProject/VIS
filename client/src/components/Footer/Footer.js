/* global location */
/* eslint no-restricted-globals: ["off", "location"] */

import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";

class Footer extends React.Component {
  
  changeThemeDark = () => {
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "red"; 
  }

  handleClickIncrease = () => {
    // if (document.body.style.zoom = "") {
    //   document.body.style.zoom = "120%";
    //   console.log("1");
    //   return;
    // }

    // if (document.body.style.zoom = "90%") {
    //   document.body.style.zoom = "100%"
    //   console.log("2");
    //   return;
    // }

    switch(document.body.style.zoom) {
      case "":
        document.body.style.zoom = "120%";
        console.log("1");
        break;
      case "120%":
        document.body.style.zoom = "140%";
        console.log("2");
        break;
      case "80%":
        document.body.style.zoom = "90%";
        console.log("3");
        break;
      case "90%":
        document.body.style.zoom = "100%";
        console.log("4");
        break;
      case "100%":
        document.body.style.zoom = "120%";
        console.log("5");
        break;
    }
  }

  handleClickDecrease = () => {
    switch(document.body.style.zoom) {
      case "":
        document.body.style.zoom = "90%";
        console.log("1");
        break;
      case "90%":
        document.body.style.zoom = "80%";
        console.log("2");
        break;
      case "120%":
        document.body.style.zoom = "100%";
        console.log("3");
        break;
      case "140%":
        document.body.style.zoom = "120%";
        console.log("4");
        break;
    }   
  }

  render() {
    return (
      <Container>
        <footer>
          <Row>
            <Col size="lg-4">
              <div className="theme">
                <button className="increase-size" onClick={this.handleClickIncrease}>+</button>
                  <p className="text-center">Zoom</p>
                <button className="decrease-size" onClick={this.handleClickDecrease}>-</button>
              </div>
            </Col>
            <Col size="lg-4">
              <div className="theme">
                <button className="increase-size" onClick={this.changeThemeDark}>Dark Theme</button>
                  <p className="text-center">Color Change</p>
                <button className="decrease-size">-</button>
              </div>
            </Col>
            <Col size="lg-4">
              <div className="theme">
                <button className="increase-size" onClick={this.changeThemeDark}>Dark Theme</button>
                  <p className="text-center">Color Change</p>
                <button className="decrease-size">-</button>
              </div>
            </Col>
          </Row>
          <Row>
          <Col size="lg-12">
            
            <p>
              <i className="fa fa-github-square github" aria-hidden="true"> Proudly built using React.js</i>
            </p>
          </Col>
          </Row>
        </footer>
      </Container>
    );
  }


}

export default Footer;
