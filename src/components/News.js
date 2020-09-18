import React from "react"
import SliderPage from "./SliderPage"
import SubSliderPage from "./SubSliderPage"
import SubNews from "./SubNews"
import * as constant from "../utils/constant"

const News = props => {
  const { newsList } = props

  if (!newsList && newsList.length === 0) return <div />

  const mainNews = newsList
    .filter(
      news =>
        !news.isSecondPageNews &&
        news.isActive &&
        news.type === constant.NEWS_TYPE
    )
    .sort(function (a, b) {
      return b.createDate - a.createDate
    })

  const headlines = newsList
    .filter(
      news =>
        !news.isSecondPageNews && news.isActive && news.type === constant.HEADLINE
    )
    .sort(function (a, b) {
      return b.createDate - a.createDate
    })
  const sliderNewsList = mainNews.slice(0, 13)

  const subNewsList = newsList
    .filter(
      news =>
        !news.isSecondPageNews &&
        news.isActive &&
        news.type === constant.SUB_NEWS_TYPE
    )
    .sort(function (a, b) {
      return b.createDate - a.createDate
    })
    .slice(0, 32)
  const extraNews = mainNews.slice(13, 26)
  const subSliderNews = headlines.concat(extraNews).slice(0, 13)

  return (
    <div className="centerFlex">
      <div className="col-md-10 col-xl-10 noPadding">
        <SliderPage newsList={sliderNewsList} />
        <SubSliderPage newsList={subSliderNews} />
      </div>
      <SubNews newsList={subNewsList}></SubNews>
    </div>
  )
}

export default News
