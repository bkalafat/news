import React from "react"
import Slider from "./Slider"
import SubNews from "./SubNews"
import Share from "./Share"
import * as constant from "../utils/constant"
import { Helmet } from "react-helmet"

const News = props => {
  const { newsList } = props

  if (!newsList && newsList.length !== 0) return <div />

  const sliderNewsList = newsList
    .filter(news => news.isActive && news.type === constant.NEWS_TYPE)
    .sort(function (a, b) {
      return a.priority - b.priority
    })
    .slice(0, 10)
  const subNewsList = newsList
    .filter(news => news.isActive && news.type === constant.SUB_NEWS_TYPE)
    .sort(function (a, b) {
      return a.priority - b.priority
    })
    .slice(0, 9)

  console.log(subNewsList)

  return (
    <div className="centerFlex">
      <Helmet>
        <title>Haberi Bul</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/haberibul.png" />
        <meta property="og:url" content={"https://haberibul.web.app/"} />
        <meta
          property="og:description"
          content="Güncel en son dakika canlı gündem spor magazin flash haber ve haberler ajans HaberiBul.com"
        />
        <meta property="og:image" content="%PUBLIC_URL%/haberibul.png" />
        <meta
          name="description"
          content="Güncel en son dakika canlı gündem spor magazin flash haber ve haberler ajans HaberiBul.com"
        />
      </Helmet>
      <div className="col-md-10 col-xl-10 noPadding">
        <Slider newsList={sliderNewsList}></Slider>
      </div>
      <SubNews newsList={subNewsList}></SubNews>
      <Share news={sliderNewsList ? sliderNewsList[0] : null}></Share>
    </div>
  )
}

export default News
