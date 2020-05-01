import React from "react";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsDetail from "./components/NewsDetail";
import Navigator from "./components/Navigator"

function App() {
  return (
    <Router>
      <Navigator/>
      <Switch>
        <Route exact path="/">
          <News />
        </Route>
        <Route path="/NewsDetail">
          <NewsDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
