import React from "react"
import SliderPage from "./SliderPage"
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
    .slice(0, 13)
  const subNewsList = newsList
    .filter(news => news.isActive && news.type === constant.SUB_NEWS_TYPE)
    .sort(function (a, b) {
      return a.priority - b.priority
    })
    .slice(0, 32)

  return (
    <div className="centerFlex">
      <Helmet>
        <title>haberibul.com</title>
        <meta
          name="description"
          content="Güncel en son dakika canlı gündem spor magazin flash haber ve haberler ajans HaberiBul.com"
        />
        <meta charSet="utf-8" />
        <meta property="url" content={"https://haberibul.com"} />
        <meta property="og:url" content={"https://haberibul.com"} />
        <meta
          property="og:description"
          content="Güncel en son dakika canlı gündem spor magazin flash haber ve haberler ajans HaberiBul.com"
        />

        <meta
          name="keywords"
          content="Güncel,en son,son dakika,haberibul.com,haberi,bul,haberibul,canlı,gündem,spor,magazin,flash,haber,trabzon,sürmene,karamba"
        />

        <meta
          name="og:keywords"
          content="Güncel,en son,son dakika,haberibul.com,haberi,bul,haberibul,canlı,gündem,spor,magazin,flash,haber,trabzon,sürmene,karamba"
        />

      </Helmet>
      <div className="col-md-10 col-xl-10 noPadding">
        <SliderPage newsList={sliderNewsList} />
      </div>
      <SubNews newsList={subNewsList}></SubNews>
      <Share news={sliderNewsList ? sliderNewsList[0] : null}></Share>
    </div>
  )
}

export default News
