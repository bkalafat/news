import { useState, useEffect } from "react"
import SubSliderPage from "../components/SubSliderPage"
import SubNews from "../components/SubNews"
import {
  HEADLINE,
  NEWS_TYPE,
  SUB_NEWS_TYPE
} from "../utils/constant"
import { getEnvironmentUrl, getCategoryByTo } from "../utils/helper"
import useSWR from "swr"
import Head from "next/head"
import { useRouter } from 'next/router'


const CategoryNews = () => {
  const { data, error } = useSWR(getEnvironmentUrl() + "news")
  const router = useRouter()
  const { category } = router.query
  console.log(category)

  if (error || !data || category == undefined) {
    return (
      <div><Head>{category}</Head><div>Yükleniyor...</div></div>
    )
  }
  else {
    if (!data && data.length === 0)
      return (<div><Head>{category}</Head><div>Haber bulunamadı</div></div>)

    const categoryObj = getCategoryByTo(category)
    const newsList = data.filter(news => news.category === categoryObj.key)
    const mainNews = newsList
      .filter(
        news =>
          news.isActive && (news.type === NEWS_TYPE || news.type === HEADLINE)
      )
      .sort(function (a, b) {
        return a.priority - b.priority
      })
    const sliderNewsList = mainNews

    const extraNews = mainNews.slice(13, 26)

    const tempNewsList = newsList
      .filter(news => news.isActive && news.type === SUB_NEWS_TYPE)
      .concat(extraNews)
      .sort(function (a, b) {
        return a.priority - b.priority
      })
    debugger
    const subNewsList = tempNewsList
    return (
      <div>
        <Head>{category}</Head>
        <div className="center">
          <h2>{categoryObj.value}</h2>
        </div>
        <div className="centerFlex">
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