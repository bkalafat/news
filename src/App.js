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
        <meta name="title" content="Haberibul.com" />
        <meta
          name="description"
          content="Türkiye'nin en güncel, en tarafsız, en doğru haberin adresi haberibul.com. Siyasetten, ekonomiye, tekonoliden, sağlığa en flaş haberleri bul, magazinden, yerel son dakika haberlere kadar en canlı gündem haberleri bul"
        />
        <meta http-equiv="content-language" content="tr" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content={3316757751690015} />
        <meta charSet="utf-8" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HaberibulCom" />
        <meta name="twitter:creator" content="@HaberibulCom" />
        <meta property="og:url" content="https://haberibul.com" />
        <meta property="url" content="https://haberibul.com" />
        <meta
          property="description"
          content="Türkiye'nin en güncel, en tarafsız, en doğru haberin adresi haberibul.com. Siyasetten, ekonomiye, tekonoliden, sağlığa en flaş haberleri bul, magazinden, yerel son dakika haberlere kadar en canlı gündem haberleri bul"
        />
        <meta
          property="og:description"
          content="Türkiye'nin en güncel, en tarafsız, en doğru haberin adresi haberibul.com. Siyasetten, ekonomiye, tekonoliden, sağlığa en flaş haberleri bul, magazinden, yerel son dakika haberlere kadar en canlı gündem haberleri bul"
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/logo512.png`}
        />
        <meta property="og:site_name" content="Haberibul" />
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
              <Content/>
            </Route>
            <Route exact path="/gundem">
              <Content/>
            </Route>
            <Route path="/AdminPanel">
              <AdminPanel />
            </Route>
            <Route path="/NewsEditor">
              <NewsEditor />
            </Route>
            <Route exact path="/ekonomi">
              <CategoryNews />
            </Route>
            <Route exact path="/spor">
              <CategoryNews />
            </Route>
            <Route exact path="/magazin">
              <CategoryNews />
            </Route>
            <Route exact path="/teknoloji">
              <CategoryNews />
            </Route>
            <Route exact path="/saglik">
              <CategoryNews />
            </Route>
            <Route exact path="/tarif">
              <CategoryNews />
            </Route>
            <Route path="/detay/:url">
              <NewsDetail />
            </Route>
            <Route path="/ekonomi/:url">
              <NewsDetail />
            </Route>
            <Route path="/spor/:url">
              <NewsDetail />
            </Route>
            <Route path="/magazin/:url">
              <NewsDetail />
            </Route>
            <Route path="/teknoloji/:url">
              <NewsDetail />
            </Route>
            <Route path="/saglik/:url">
              <NewsDetail />
            </Route>
            <Route path="/tarif/:url">
              <NewsDetail />
            </Route>
            <Route path="/yerel/:url">
              <NewsDetail />
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
