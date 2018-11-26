import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Saved from "./pages/Saved";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NavTabs from "./components/NavTabs";
import NoMatch from "./pages/NoMatch";


const App = () => (
  <Router>
    <div>
      <Header />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch> */}
      
      <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;
