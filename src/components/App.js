import React from "react";
import Header from "./Header";
import Home from "./Home";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Store> */}
      <Router>
        <Header />
        <div className="photo-bg">
          <Home />
          {/* <Route exact path="/" component={Home} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/product" component={Product} /> */}
        </div>
      </Router>
      {/* </Store> */}
    </div>
  );
}

export default App;
