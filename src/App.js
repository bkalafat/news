import React from "react"
import Content from "./components/Content"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NewsDetail from "./components/NewsDetail"
import Navigator from "./components/Navigator"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import NewsEditor from "./components/Admin/NewsEditor"
import { SWRConfig } from "swr"
import axios from "axios"
import { Helmet } from "react-helmet"
import { isMobile } from "react-device-detect"

function App() {
  return (
    <Router>
      <Helmet titleTemplate="%s - Haberi bul" defaultTitle="Haberi bul">
        <meta http-equiv="content-language" content="tr" />
        <meta property="og:type" content="website" />
        <meta charSet="utf-8" />
      </Helmet>
      <div className={!isMobile ? "App" : ""}>
        <Navigator />
        <SWRConfig
          value={{
            dedupingInterval: 1000000,
            fetcher: url => axios(url).then(r => r.data)
          }}
        >
          <Switch>
            <Route exact path="/">
              <Content isAdmin={false} />
            </Route>
            <Route path="/detay">
              <NewsDetail />
            </Route>
            <Route path="/AdminPanel">
              <Content isAdmin={true} />
            </Route>
            <Route path="/NewsEditor">
              <NewsEditor />
            </Route>
          </Switch>
        </SWRConfig>
        <Footer />
      </div>
    </Router>
  )
}

export default App
