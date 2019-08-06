import React from "react";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Store>
        <Router>
          <Header />
          <div className="photo-bg">
            <Route exact path="/" component={Home} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/product" component={Product} />
          </div>
        </Router>
      </Store>
    </div>
  );
}

export default App;
