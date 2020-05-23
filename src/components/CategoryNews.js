import React from "react"
import SubSliderPage from "./SubSliderPage"
import { useLocation } from "react-router-dom"
import SubNews from "./SubNews"
import {
  Categories,
  HEADLINE,
  NEWS_TYPE,
  SUB_NEWS_TYPE
} from "../utils/constant"
import { getEnvironmentUrl, getDummyNews } from "../utils/helper"
import { Helmet } from "react-helmet"
import useSWR from "swr"

const CategoryNews = () => {
  let location = useLocation()
  const { data, error } = useSWR(getEnvironmentUrl() + "news")
  const dummyNews = getDummyNews()
  if (error || !data) {
    return (
      <div>
        <div className="col-md-10 col-xl-10 noPadding">
          <SubSliderPage newsList={dummyNews.slice(0, 13)} />
        </div>
        <SubNews newsList={dummyNews.slice(0, 13)}></SubNews>
      </div>
    )
  } else {
    if (!data && data.length === 0) return <div />
    const to = "/" + location.pathname.split("/")[1]
    const category = Object.values(Categories).find(c => c.to === to)
    const newsList = data.filter(news => news.category === category.key)
    const mainNews = newsList
      .filter(
        news =>
          news.isActive && (news.type === NEWS_TYPE || news.type === HEADLINE)
      )
      .sort(function (a, b) {
        return a.priority - b.priority
      })
    const sliderNewsList =
      mainNews.length > 2
        ? mainNews
        : mainNews.concat(
            dummyNews
              .filter(n => n.type === NEWS_TYPE)
              .slice(0, 3 - mainNews.length)
          )

    const extraNews = mainNews.slice(13, 26)

    const tempNewsList = newsList
      .filter(news => news.isActive && news.type === SUB_NEWS_TYPE)
      .concat(extraNews)
      .sort(function (a, b) {
        return a.priority - b.priority
      })
    const subNewsList =
      tempNewsList > 3
        ? tempNewsList
        : tempNewsList.concat(
            dummyNews
              .filter(n => n.type === SUB_NEWS_TYPE)
              .slice(0, 4 - tempNewsList.length)
          )

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
          <SubSliderPage newsList={sliderNewsList.slice(0, 13)} />
        </div>
        <SubNews newsList={subNewsList.slice(0, 32)}></SubNews>
      </div>
    )
  }
}

export default CategoryNews