import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Share from "./Share"
import * as API from "../utils/api"
import { Helmet } from "react-helmet"

const NewsDetail = () => {
  let location = useLocation()
  const [news, setNews] = useState()

  useEffect(() => {
    if (location.state && location.state.news) {
      setNews(location.state.news)
    } else {
      const urlItems = location.pathname.split("/")
      const id = urlItems[urlItems.length - 1]

      API.getNews(id).then(
        result => {
          setNews(result)
        },
        error => {
          console.log(error)
        }
      )
    }
  }, [location.state, location.pathname])

  if (news) {
    return (
      <div>
        <Helmet>
          <title>{news.caption} haber haberler detay bul</title>
          <meta charSet="utf-8" />

          <meta
            property="og:url"
            content={"https://haberibul.web.app/detay/" + news.id}
          />
          <meta property="og:description" content={news.caption} />
          <meta property="og:image" content={news.imgPath} />

          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={news.caption + "haber haberler detay bul"}
          />
          <meta property="og:description" content={news.caption} />
        </Helmet>
        <div className="newsDetail">
          <h1 className="spaceAround">{news.caption}</h1>
          <p className="lead spaceAround">{news.summary}</p>
          <img
            className="col-md-6 col-xs-12 col-sm-12 detailImg"
            src={news.imgPath}
            alt={news.imgAlt}
          />
          <Share news={news}></Share>
        </div>
        <div
          className="container"
          onContextMenu={e => e.preventDefault()}
          dangerouslySetInnerHTML={{
            __html: "<div class='container content'" + news.content + "</div>"
          }}
        />
      </div>
    )
  } else return <div />
}

export default NewsDetail
