import React from "react"
import SliderPage from "./SliderPage"
import SubSliderPage from "./SubSliderPage"
import SubNews from "./SubNews"
import * as constant from "../utils/constant"
import { Helmet } from "react-helmet"

const News = props => {
  const { newsList } = props

  if (!newsList && newsList.length === 0) return <div />

  const mainNews = newsList
    .filter(news => news.isActive && news.type === constant.NEWS_TYPE)
    .sort(function (a, b) {
      return a.priority - b.priority
    })
  const sliderNewsList = mainNews.slice(0, 13)

  const subNewsList = newsList
    .filter(news => news.isActive && news.type === constant.SUB_NEWS_TYPE)
    .sort(function (a, b) {
      return a.priority - b.priority
    })
    .slice(0, 32)
  const extraNews = mainNews.slice(13, 26)

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
        <SubSliderPage newsList={extraNews} />
      </div>
      <SubNews newsList={subNewsList}></SubNews>
    </div>
  )
}

export default News
