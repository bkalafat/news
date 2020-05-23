import React from "react"
import Content from "./components/Content"
import CategoryNews from "./components/CategoryNews"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NewsDetail from "./components/NewsDetail"
import Navigator from "./components/Navigator"
import AdminPanel from "./components/Admin/AdminPanel"
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
        <meta property="fb:app_id" content={3316757751690015} />
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
              <AdminPanel />
            </Route>
            <Route path="/NewsEditor">
              <NewsEditor />
            </Route>
            <Route path="/ekonomi">
              <CategoryNews />
            </Route>
            <Route path="/spor">
              <CategoryNews />
            </Route>
            <Route path="/magazin">
              <CategoryNews />
            </Route>
            <Route path="/teknoloji">
              <CategoryNews />
            </Route>
            <Route path="/saglik">
              <CategoryNews />
            </Route>
            <Route path="/tarif">
              <CategoryNews />
            </Route>
            <Route path="/yoresel">
              <CategoryNews />
            </Route>
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </SWRConfig>
        <Footer />
      </div>
    </Router>
  )
}

export default App

const NoMatchPage = () => {
  return (
    <div className="center">
      <h3>404 - Sayfa Bulunamadı.</h3>
    </div>
  )
}
