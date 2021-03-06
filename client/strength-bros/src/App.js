import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";

import Landing from "./components/Landing";
import HostGame from "./components/HostGame";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/host-game" component={HostGame} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
