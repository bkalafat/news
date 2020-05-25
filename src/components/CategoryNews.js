import React from "react"
import SubSliderPage from "./SubSliderPage"
import { useLocation } from "react-router-dom"
import SubNews from "./SubNews"
import {
  HEADLINE,
  NEWS_TYPE,
  SUB_NEWS_TYPE
} from "../utils/constant"
import { getEnvironmentUrl, getDummyNews, getCategoryByTo } from "../utils/helper"
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
    const to = location.pathname.split("/")[1]
    const category = getCategoryByTo(to)
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
      <div>
        <div className = "center">
          <h2>{category.value}</h2>
        </div>
        <div className="centerFlex">
          <Helmet>
            <title>{category.value ? category.value : "Haberibul.com"}</title>
            <meta
              name="description"
              content={
                category.value +
                " Güncel en son dakika canlı gündem spor magazin flash haber ve haberler ajans HaberiBul.com"
              }
            />
            <meta charSet="utf-8" />
            <meta
              property="url"
              content={"https://haberibul.com/" + category.to}
            />
            <meta
              property="og:url"
              content={"https://haberibul.com/" + category.to}
            />
            <meta
              property="og:description"
              content={
                category.value +
                " Güncel en son dakika canlı gündem spor magazin flash haber ve haberler ajans HaberiBul.com"
              }
            />
          </Helmet>

          <div className="col-md-10 col-xl-10 noPadding">
            <SubSliderPage newsList={sliderNewsList.slice(0, 13)} />
          </div>
          <SubNews newsList={subNewsList.slice(0, 32)}></SubNews>
        </div>
      </div>
    )
  }
}

export default CategoryNews
