import React from "react";
import "./Search.css";
import { Col, Row, Container } from "../../components/Grid";
import axios from 'axios';

class Search extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         searchOption: ' ',
    //     };
    // }

    searchJob = (event) => {
        
        this.setState ({
            searchOption: this.state.searchOption
        })

        this.setState({
            [event.target.name]: event.target.value
        })

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {

  

            console.log(this.setState.search); 
            
            // axios.get(`https://jobs.search.gov/jobs/search.json?query=nursing+jobs`)
            // .then(res => {
            // // Transform the raw data by extracting the nested posts
            //     console.log(res.data);
            //     // Update state to trigger a re-render.
            //     // Clear any errors, and turn off the loading indiciator.
            //     })
            //     .catch(err => {
            //     // Something went wrong. Save the error in state and re-render.
            //     this.setState({
            //         loading: false,
            //         error: err
            //     });
            // })
            // .catch(err => {
            // // Something went wrong. Save the error in state and re-render.
            //     this.setState({
            //         loading: false,
            //         error: err
            //     });
            // });
        }
 
    }


    constructor(props) {
        super(props);
        this.state = {
            search: '',
            post: [], 
            loading: true,
            error: null
        };
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })

        if (e.keyCode === 13) {

            console.log(this.setState.search); 
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const form = {
            search: this.state.search
        }

        this.setState({
            search: ''
        })

        axios.get(`https://jobs.search.gov/jobs/search.json?query=` + this.state.search)
            .then(res => {
                
                console.log(posts)
                const posts = res.data; 
                // Transform the raw data by extracting the nested posts
                // Update state to trigger a re-render.
                // Clear any errors, and turn off the loading indiciator.
                this.setState({
                    search: '',
                    posts,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                // Something went wrong. Save the error in state and re-render.
                this.setState({
                    loading: false,
                    error: err
                });
            });

        
    }

    renderLoading() {
        return <div></div>;
    }

    renderError() {
        return (
          <p className="noListings">
            Sorry, but no currently listings available for that position.
          </p>
        );
    }

    renderPosts() {
        if(this.state.error) {
          return this.renderError();
        }

  
        return (
            <div>
            {this.state.posts.map(post =>
                <a href={post.url} target="_blank" key={post.id}>
                    <div className="listings">
                        <p className="listingDetails">Job Title: {post.position_title} </p>
                        <p className="listingDetails">Date Posted: {post.start_date} </p>
                        <p className="listingDetails">Expires: {post.end_date} </p>
                    </div>
                </a>
            )}
            </div>
        );
  
    }

    enterKey = (e) => {

        if (e.keyCode === 13) {

            const form = {
                search: this.state.search
            }

            this.setState({
                search: ''
            })

            axios.get(`https://jobs.search.gov/jobs/search.json?query=` + this.state.search)
            .then(res => {
                console.log(res.data); 
                const posts = res.data; 

                if (res.data.length === 0) {
                    document.getElementById("results").innerHTML("Sorry no listings here"); 
                }
                // Transform the raw data by extracting the nested posts
                // Update state to trigger a re-render.
                // Clear any errors, and turn off the loading indiciator.
                this.setState({
                    search: '',
                    posts,
                    loading: false,
                    error: null
                });
            })
            .catch(err => {
                // Something went wrong. Save the error in state and re-render.
                this.setState({
                    loading: false,
                    error: err
                });
            });

        }
    }

    render() {
        const defaultMessage = this.state.search
        return (
            <Container>
                <Row>
                    <Col size="lg-12">

                        <input className="inputField" type="text" name='search' value={this.state.search}  onChange={(e) => this.handleChange(e)} onKeyDown={e => this.enterKey(e)} placeholder="E.g. Nursing jobs in NY"/>
                        <button className="searchField" onClick={(e) => this.onSubmit(e)}>Search</button>  
                    </Col>
                </Row>

                <Row>
                    <Col size="lg-12">
                        <div id="results">
                        {this.state.loading ?
                        this.renderLoading()
                        : this.renderPosts()}
                        </div>
                    </Col>
                </Row>
            </Container>
        

        );
      }
}

export default Search;