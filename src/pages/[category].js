import React from "react"
import SubSliderPage from "../components/SubSliderPage"
import SubNews from "../components/SubNews"
import {
  HEADLINE,
  NEWS_TYPE,
  SUB_NEWS_TYPE
} from "../utils/constant"
import { getEnvironmentUrl, getDummyNews, getCategoryByTo } from "../utils/helper"
import useSWR from "swr"
import Layout from "../components/Layout"
import Head from "next/head"
import { useRouter } from 'next/router'

const CategoryNews = () => {
  const { data, error } = useSWR(getEnvironmentUrl() + "news")
  const dummyNews = getDummyNews()
  // const router = useRouter()
  // const { category } = router.query
  // debugger
  // console.log(category)


  if ( !error || !data) {
    return (
      <div>yükleniyor</div>
    )
  }
  else {
    if (!data && data.length === 0)
    return (<Layout>
      <Head>
        <title>Test no data</title>
      </Head></Layout>)
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
      <Layout>
        <Head>
          <title>{category} no data</title>
        </Head>
        <div className="center">
          <h2>{categoryObj.value}</h2>
        </div>
        <div className="centerFlex">
          <div className="col-md-10 col-xl-10 noPadding">
            <SubSliderPage newsList={sliderNewsList.slice(0, 13)} />
          </div>
          <SubNews newsList={subNewsList.slice(0, 32)}></SubNews>
        </div>
      </Layout>
    )
  }
}

export default CategoryNews


  // else {
  //   if (!data && data.length === 0) return <div />
  //   const to = location.pathname.split("/")[1]
  //   const category = getCategoryByTo(to)
  //   const newsList = data.filter(news => news.category === category.key)
  //   const mainNews = newsList
  //     .filter(
  //       news =>
  //         news.isActive && (news.type === NEWS_TYPE || news.type === HEADLINE)
  //     )
  //     .sort(function (a, b) {
  //       return a.priority - b.priority
  //     })
  //   const sliderNewsList = mainNews

  //   const extraNews = mainNews.slice(13, 26)

  //   const tempNewsList = newsList
  //     .filter(news => news.isActive && news.type === SUB_NEWS_TYPE)
  //     .concat(extraNews)
  //     .sort(function (a, b) {
  //       return a.priority - b.priority
  //     })
  //   const subNewsList = tempNewsList

  //   return (
  //     <div>
  //       <div className = "center">
  //         <h2>{category.value}</h2>
  //       </div>
  //       <div className="centerFlex">
  //         <div className="col-md-10 col-xl-10 noPadding">
  //           <SubSliderPage newsList={sliderNewsList.slice(0, 13)} />
  //         </div>
  //         <SubNews newsList={subNewsList.slice(0, 32)}></SubNews>
  //       </div>
  //     </div>
  //   )
  // }
