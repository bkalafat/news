import { useState } from "react"
import Share from "../../components/Share"
import * as API from "../../utils/api"
import Layout from "../../components/Layout"
import Head from "next/head"
import { useRouter } from 'next/router'

const NewsDetail = () => {
  const [news, setNews] = useState([])
  const router = useRouter()
  const { id, category } = router.query
  let firstPart = ""
  if (!category || category == undefined) return <div>Haberibul</div>
  if (category !== "detay") firstPart = category + ">"
  const concatUrl = firstPart + id
  if (news == null || news.length < 1)
    API.getNewsByUrl(concatUrl).then(
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
    return (
      <Layout>
        <Head>
          <title>{news.caption}</title>
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
export default NewsDetail
//TODO bkalafat detay sayfada resimler ortada yazılar sola yaslı kalsın.