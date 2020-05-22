import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import Share from "./Share"
import * as API from "../utils/api"
import { replaceNonWordsAsDash } from "../utils/helper"
import { Helmet } from "react-helmet"

const NewsDetail = () => {
  let location = useLocation()
  const [news, setNews] = useState()

  useEffect(() => {
    if (location.state && location.state.news) {
      setNews(location.state.news)
    } else {
      const urlItems = location.pathname.split("/")
      const dashCaption = urlItems[urlItems.length - 1]

      API.getNewsByUrl(dashCaption).then(
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
          <title>{news.caption} haber haberler haberi bul haberibul.com</title>
          <meta
            property="og:url"
            content={
              "https://haberibul.com/detay/" +
              news.caption.split(" ").join("-").toLowerCase()
            }
          />
          <meta
            property="url"
            content={
              "https://haberibul.com/detay/" +
              news.caption.split(" ").join("-").toLowerCase()
            }
          />
          <meta property="description" content={news.caption} />
          <meta property="og:description" content={news.caption} />
          <meta property="og:image" content={news.imgPath} />
          <meta property="og:site_name" content="Haberibul" />
          <meta property="keywords" content={(news.caption, ",")} />
          <meta property="og:keywords" content={(news.caption, ",")} />
          <meta
            property="og:title"
            content={
              news.caption +
              "haber haberler haberibul haberbul detay bul son dakika"
            }
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
            __html:
              "<div class='container content center-item  text-center'" +
              news.content +
              "</div>"
          }}
        />
      </div>
    )
  } else return <div />
}

//TODO bkalafat detay sayfada resimler ortada yazılar sola yaslı kalsın.

export default NewsDetail
