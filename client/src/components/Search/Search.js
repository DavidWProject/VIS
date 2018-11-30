import React from "react";
import "./Search.css";
import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';

class Search extends React.Component {

    searchJob = () => {
        // Remove the 'www.' to cause a CORS error (and see the error state)
        axios.get(`https://jobs.search.gov/jobs/search.json?query=nursing+jobs`)
          .then(res => {
            // Transform the raw data by extracting the nested posts
            console.log(res);
    
            // Update state to trigger a re-render.
            // Clear any errors, and turn off the loading indiciator.

          })
          .catch(err => {
            // Something went wrong. Save the error in state and re-render.
            this.setState({
              loading: false,
              error: err
            });
          });
    }


    

    render() {
        return (
            <Container>
                <Row>
                    <Col size="lg-12">
                        <input className="inputField" type="text" placeholder="E.g. Nursing jobs in NY" onKeyDown={this.searchJob}></input>
                    </Col>
                </Row>

                <Row>
                    <Col size="lg-12">
                        <div id="results"></div>
                    </Col>
                </Row>
            </Container>
        );
      }
}

export default Search;