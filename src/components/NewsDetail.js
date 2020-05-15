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
          <title>Page 2</title>
          <meta
            name="description"
            content={news.caption}
          />
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
          dangerouslySetInnerHTML={{
            __html: "<div class='container content'" + news.content + "</div>"
          }}
        />
      </div>
    )
  } else return <div />
}

export default NewsDetail
