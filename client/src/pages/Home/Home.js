import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Form from "../../components/Form";
import Book from "../../components/Book";
import Footer from "../../components/Footer";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(() =>
        this.setState({
          books: [],
          message: "No New Books Found, Try a Different Query"
        })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="lg-12">
            <h2 className="text-center">V.I.S. provides a simple assessible online resource for the visually impared. </h2>
            <p>Here we strive to help those who are visually impaired by various resouces implimented on this website. 
            By having a simple, and easy to navigate user interface, users can navigate the website in a fast and convienent manner. 
            We offer a variety of resources to the visually impaired such as job listings and visibility for employers to contact you for employment. 
            </p>            
          </Col>
        </Row>
        <Row>
          <Col size="lg-12">
          <h2 className="text-center">V.I.S. also provides resources for developers to create interfaces for the Visually Impaired. </h2>
          <p>Resources gathered here are to help developers employ excellent coding practices and standards that provide accessbility to those who are visually impaired. </p>
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }
}

export default Home;
