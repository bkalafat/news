import SubSlider from "./SubSlider"
import SubNews from "./SubNews"
import {
  HEADLINE,
  NEWS_TYPE,
  SUB_NEWS_TYPE
} from "../utils/constant"
import { getEnvironmentUrl, getCategoryByTo, sortCreateDateDesc } from "../utils/helper"
import useSWR from "swr"
import Head from "next/head"
import { useRouter } from 'next/router'
import SquareAd from "./SquareAd"
import { NewsType } from "../types/NewsType"


const CategoryNews = () => {
  const { data, error } = useSWR<NewsType[], any>(getEnvironmentUrl() + "news/get")
  const router = useRouter()
  const { category }  = router.query
  const categoryUrl = Array.isArray(category) ? category[0] : category;

  if (error || !data || categoryUrl == undefined) {
    return (
      <div><Head>{categoryUrl}</Head><div>Yükleniyor...</div></div>
    )
  }
  else {
    if (!data && data.length === 0)
      return (<div><Head>{categoryUrl}</Head><div>Haber bulunamadı</div></div>)

    const categoryObj = getCategoryByTo(categoryUrl)
    const newsList = data.filter(news => news.category === categoryObj.key)
    const mainNews = newsList
      .filter(
        news =>
          news.isActive && (news.type === NEWS_TYPE || news.type === HEADLINE)
      )
      .sort(sortCreateDateDesc())
    const sliderNewsList = mainNews

    const extraNews = mainNews.slice(13, 26)

    const tempNewsList = newsList
      .filter(news => news.isActive && news.type === SUB_NEWS_TYPE)
      .concat(extraNews)
      .sort(sortCreateDateDesc())
    const subNewsList = tempNewsList

    let upperCaseCategory = categoryUrl;
    upperCaseCategory = `${upperCaseCategory[0].toUpperCase()}${upperCaseCategory.substring(1)}`;

    return (
      <div>
        <Head>
          <title>{upperCaseCategory + " haberibul Son dakika " + upperCaseCategory + " gelişmeleri"}</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="title" content="Haberibul.com" />
          <meta name="description" content={categoryObj.value + " haberlerini bulabileceğiniz haberi bul sayfası."} />
          <meta property="og:image" content="/logo512.png" />
          <meta property="og:url" content={"https://haberibul.com/" + categoryObj.to} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={"https://haberibul.com" + categoryObj.to} />
          <meta property="og:title" content="Haberibul.com" />
          <meta property="og:description" content={categoryObj.value + " haberlerini bulabileceğiniz haberi bul sayfası."} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={"https://haberibul.com/" + categoryObj.to} />
          <meta property="twitter:title" content="Haberibul.com" />
          <meta property="twitter:description" content={categoryObj.value + " haberlerini bulabileceğiniz haberi bul sayfası."} />
        </Head>
        <div className="center">
          <h2>{categoryObj.value}</h2>
        </div>
        <div className="centerFlex">
          <div className="col-md-10 col-xl-10 noPadding">
            <SubSlider newsList={sliderNewsList.slice(0, 13)} />
          </div>
          <SquareAd />
          <SubNews newsList={subNewsList.slice(0, 32)}></SubNews>
        </div>
      </div>
    )
  }
}

export default CategoryNews