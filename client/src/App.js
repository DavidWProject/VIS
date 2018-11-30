import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Employment from "./pages/Employment";
import Developer from "./pages/Developer";
import Resource from "./pages/Resource";
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
        <Route exact path="/employment" component={Employment} />
        <Route exact path="/developer" component={Developer} />
        <Route path="/resource" component={Resource} />
    </div>
  </Router>
);

export default App;
