import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/" component = {Header}/>
        <Route exact path="/" component={Login} />
        <PrivateRoute path = "/bubblepage" component = {BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
