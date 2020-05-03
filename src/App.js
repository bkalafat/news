import React from "react";
import Content from "./components/Content";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsDetail from "./components/NewsDetail";
import Navigator from "./components/Navigator";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route path="/NewsDetail">
            <NewsDetail />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
