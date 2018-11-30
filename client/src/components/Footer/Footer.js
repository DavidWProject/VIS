/* global location */
/* eslint no-restricted-globals: ["off", "location"] */

import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../../components/Grid";

class Footer extends React.Component {
  
  changeThemeDark = () => {
    var active = document.getElementsByClassName("active"); 
    var navlink = document.getElementsByClassName("nav-link"); 
    var navTabs = document.getElementsByTagName("a");

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; 
    document.body.style.fontWeight = "900"; 
    active[0].style.backgroundColor = "black"; 
    active[0].style.color = "white";

    for (var i = 0; i < navTabs.length; i++) {
      navTabs[i].style.color = "white";
    }

  }


  revertDefault = () => {
    var active = document.getElementsByClassName("active"); 
    var navlink = document.getElementsByClassName("nav-link"); 
    var navTabs = document.getElementsByTagName("a");

    document.body.style.backgroundColor = "";
    document.body.style.color = ""; 
    document.body.style.fontWeight = ""; 
    active[0].style.backgroundColor = ""; 
    active[0].style.color = "";

    for (var i = 0; i < navTabs.length; i++) {
      navTabs[i].style.color = "";
    }
  }

  changeThemeLight = () => {
    var active = document.getElementsByClassName("active"); 
    var navlink = document.getElementsByClassName("nav-link"); 
    var navTabs = document.getElementsByTagName("a");

    document.body.style.backgroundColor = "#d5e2f8";
    document.body.style.color = "black"; 
    document.body.style.fontWeight = "900"; 
    active[0].style.backgroundColor = "#d5e2f8";
    active[0].style.color = "black"; 


    for (var i = 0; i < navTabs.length; i++) {
      navTabs[i].style.color = "black";
    }
  }

  changeThemeYellow = () => {
    var navTabs = document.getElementsByTagName("a");
    var active = document.getElementsByClassName("active");
    var navlink = document.getElementsByClassName("nav-link"); 

    document.body.style.backgroundColor = "black";
    document.body.style.color = "yellow"; 
    document.body.style.fontWeight = "900"; 
    active[0].style.backgroundColor = "black"; 
    active[0].style.color = "black"; 
    
    for (var i = 0; i < navTabs.length; i++) {
      navTabs[i].style.color = "yellow";
    }
  }

  handleClickIncrease = () => {
    switch(document.body.style.zoom) {
      case "":
        document.body.style.zoom = "120%";
        break;
      case "120%":
        document.body.style.zoom = "140%";
        break;
      case "80%":
        document.body.style.zoom = "90%";
        break;
      case "90%":
        document.body.style.zoom = "100%";
        break;
      case "100%":
        document.body.style.zoom = "120%";
        break;
    }
  }

  handleClickDecrease = () => {
    switch(document.body.style.zoom) {
      case "":
        document.body.style.zoom = "90%";
        break;
      case "90%":
        document.body.style.zoom = "80%";
        break;
      case "100%":
        document.body.style.zoom = "90%";
        break;
      case "120%":
        document.body.style.zoom = "100%";
        break;
      case "140%":
        document.body.style.zoom = "120%";
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
                <button className="increase-size" onClick={this.changeThemeDark}>Dark Mode</button>
                  <p className="text-center">Color Change</p>
                <button className="decrease-size" onClick={this.revertDefault}>Default Layout</button>
              </div>
            </Col>
            <Col size="lg-4">
              <div className="theme">
                <button className="increase-size" onClick={this.changeThemeLight}>Light Blue Theme</button>
                  <p className="text-center">Color Change</p>
                <button className="decrease-size" onClick={this.changeThemeYellow}>Dark Yellow Theme</button>
              </div>
            </Col>
          </Row>
          <Row>
          <Col size="lg-12">
            
            <h3>
              <i className="fa fa-github-square github" aria-hidden="true"> Proudly built using React.js</i>
            </h3>
          </Col>
          </Row>
        </footer>
      </Container>
    );
  }
}

export default Footer;
