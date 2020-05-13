import React from "react"
import Content from "./components/Content"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NewsDetail from "./components/NewsDetail"
import Navigator from "./components/Navigator"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import NewsEditor from "./components/Admin/NewsEditor"
import ContentEditor from "./components/Admin/ContentEditor"

function App() {
  return (
    <Router>
      <div className="App">
        <Navigator />
        <Switch>
          <Route exact path="/">
            <Content isAdmin={false} />
          </Route>
          <Route path="/NewsDetail">
            <NewsDetail />
          </Route>
          <Route path="/AdminPanel">
            <Content isAdmin={true} />
          </Route>
          <Route path="/NewsEditor">
            <NewsEditor />
          </Route>
          <Route path="/ContentEditor">
            <ContentEditor />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
