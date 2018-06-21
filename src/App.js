import React, { Component } from 'react';
//import { app } from "./store";
import { Container } from "semantic-ui-react";
import './App.css';
import { Route } from "react-router-dom";
import showHashs from "./pages/showHashs";
import moderateHashs from "./pages/moderateHashs";

class App extends Component {
  render() {
    return (
      <Container>
        <Route exact path="/" component={showHashs} />
        <Route exact path="/moderate" component={moderateHashs} />
      </Container>
    );
  }
}

export default App;
