import React from "react";
import Header from "./Header";
import Home from "./Home";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Inventory from "./Inventory";
import Shipments from "./Shipments";

function App() {
  return (
    <div className="App">
      {/* <Store> */}
      <Router>
        <Header />
        <div className="photo-bg">
          <Route exact path="/" component={Home} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/shipments" component={Shipments} />
        </div>
      </Router>
      {/* </Store> */}
    </div>
  );
}

export default App;
