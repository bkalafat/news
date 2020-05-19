import React from "react"
import Content from "./components/Content"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NewsDetail from "./components/NewsDetail"
import Navigator from "./components/Navigator"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import NewsEditor from "./components/Admin/NewsEditor"
import { SWRConfig } from "swr"
import axios from 'axios'
import { Helmet } from "react-helmet"
import { isMobile } from "react-device-detect"

function App() {
  return (
    <Router>
      <Helmet>
        <title>Haberi Bul</title>
        <meta name="description"
          content="Güncel en son dakika canlı gündem spor magazin flash haber ve haberler ajans HaberiBul.com" />
        <meta charSet="utf-8" />

        <meta
          property="og:url"
          content={"https://haberibul.web.app/"}
        />
        <meta property="og:image" content={`${process.env.PUBLIC_URL}/haberibul.png`} />
        <meta property="og:site_name" content="Haberibul"></meta>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={"haber haberler haberibul haberbul detay bul son dakika"}
        />
        <meta property="og:description" content="Güncel en son dakika canlı gündem spor magazin flash haber ve haberler ajans HaberiBul.com" />
      </Helmet>
      <div className={!isMobile ? "App" : ""} >
        <Navigator />
        <SWRConfig value={{ dedupingInterval: 1000000, fetcher: (url) => axios(url).then(r => r.data) }}>
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
    </Router >
  )
}

export default App
