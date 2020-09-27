import { useState } from "react"
import Share from "../../../components/Share"
import * as API from "../../../utils/api"
import * as Const from "../../../utils/constant"
import * as Helper from "../../../utils/helper"
import Layout from "../../../components/Layout"
import Head from "next/head"
import { useRouter } from 'next/router'
import slugify from 'slugify'

const genericKeywords = "haberi bul, haber bul, haberibul, haberbul, haber, güncel haberler, son dakika haberleri, en son haber, Türkiye, siyaset, güncel, spor, ekonomi, gazete manşetleri, "
const NewsDetail = (props) => {
  const [news, setNews] = useState(props.news)
  const router = useRouter()
  const { id } = router.query
  if (news == null || news.length < 1)
    API.getNews(id).then(
      news => {
        setNews(news)
        API.increaseViewCount(news)
      },
      error => {
        console.log(error)
      }
    )
  if (news && news.createDate) {
    let [y, m, d, hh, mm, ss, ms] = news.createDate.match(/\d+/g)
    let date = new Date(Date.UTC(y, m - 1, d, hh, mm, ss, ms))
    let formatted = date.toLocaleString()
    const url = Helper.getUrl(news)
    return (
      <Layout>
        <Head>
          <title>{news.caption}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="title" content={news.caption} />
          <meta name="description" content={news.summary} />
          <meta property="og:image" content={news.imgPath} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={news.caption} />
          <meta property="og:description" content={news.summary} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={url} />
          <meta property="twitter:title" content={news.caption} />
          <meta property="twitter:description" content={news.summary + " #haberibul"} />
          <meta name="keywords" content={news.keywords ? news.keywords + genericKeywords  : news.caption.split(' ').join(', ') + genericKeywords} />
          <script async src='https://www.googletagmanager.com/gtag/js?id=G-9SC61J35JK'></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', 'G-9SC61J35JK');
              `
          }}>
        </script>



        </Head>
        <div className="newsDetail">
          <h1 className="spaceAround">{news.caption}</h1>
          <p className="lead spaceAround">{news.summary}</p>
          <img
            className="col-md-6 col-xs-12 col-sm-12 detailImg"
            src={news.imgPath}
            alt={news.imgAlt}
          />
          <Share news={news}></Share>
        </div>
        <div
          className="container"
          onContextMenu={e => e.preventDefault()}
          dangerouslySetInnerHTML={{
            __html:
              "<div class='container content center-item  text-center'" +
              news.content +
              "</div>"
          }}
        />
        <div className='container content center-item  text-center'>
          <time className="time" dateTime={news.createDate}>Haber Giriş:{formatted} - Görüntülenme Sayısı:{news.viewCount ? news.viewCount : 1}</time>
        </div>
      </Layout>
    )
  } else return <Layout>
    <Head>
      <title>Detay</title>
    </Head>
  </Layout>
}

export async function getStaticPaths() {
  const newsList = await API.getNewsList()
  let paths = []

  paths = newsList.map((news) => ({
    params: { category: Helper.getCategoryToByKey(news.category), slug: slugify(news.caption), id: news.id }
  }))
  paths.push({ params: { category: 'new', slug: 'new', id: 'new' } })
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  let news = Const.DEFAULT_NEWS;
  if (params.id && params.id != 'new') {
    news = await API.getNews(params.id)
  }
  return {
    revalidate: 10,
    props: {
      news
    }
  }
}

export default NewsDetail