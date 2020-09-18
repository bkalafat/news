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
        return b.createDate - a.createDate
      })
    const sliderNewsList = mainNews

    const extraNews = mainNews.slice(13, 26)

    const tempNewsList = newsList
      .filter(news => news.isActive && news.type === SUB_NEWS_TYPE)
      .concat(extraNews)
      .sort(function (a, b) {
        return b.createDate - a.createDate
      })
    const subNewsList = tempNewsList
    return (
      <div>
        <Head>
          <title>{category}</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="title" content="Haberibul.com" />
          <meta name="description" content={ categoryObj.value + " haberlerini bulabileceğiniz haberi bul sayfası."} />
          <meta property="og:image" content="/logo512.png" />
          <meta property="og:url" content={"https://haberibul.com/" + categoryObj.to} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={"https://haberibul.com" + categoryObj.to} />
          <meta property="og:title" content="Haberibul.com" />
          <meta property="og:description" content={ categoryObj.value + " haberlerini bulabileceğiniz haberi bul sayfası."} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={"https://haberibul.com/" + categoryObj.to} />
          <meta property="twitter:title" content="Haberibul.com" />
          <meta property="twitter:description" content={ categoryObj.value + " haberlerini bulabileceğiniz haberi bul sayfası."}  />
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
      </div>
    )
  }
}

export default CategoryNews