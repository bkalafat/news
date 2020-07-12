import React, { useState, useEffect } from "react"
import Share from "../../components/Share"
import * as API from "../../utils/api"

const NewsDetail = () => {
  const [news, setNews] = useState([])


  //const urlItems = location.pathname.split("/")
  // const urlItems = "haberibul.com/gundem/nakit-deste-inde-3--faza-ge-ildi".split("/")
  // let firstPart = ""
  // if (urlItems[urlItems.length - 2] !== "detay")
  //   firstPart = urlItems[urlItems.length - 2] + ">"
  // const concatUrl = firstPart + urlItems[urlItems.length - 1]
  // //TODO bkalafat url daha güzel alınacak pathname'den
  // API.getNewsByUrl(concatUrl).then(
  //   news => {
  //     setNews(news)
  //     API.increaseViewCount(news)
  //   },
  //   error => {
  //     console.log(error)
  //   }
  // )


  if (news && news.createDate) {


    let [y, m, d, hh, mm, ss, ms] = news.createDate.match(/\d+/g)
    let date = new Date(Date.UTC(y, m - 1, d, hh, mm, ss, ms))
    let formatted = date.toLocaleString()

    return (
      <div>
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
        <div class='container content center-item  text-center'>
          <time className="time" datetime={news.createDate}>Haber Giriş:{formatted} - Görüntülenme Sayısı:{news.viewCount ? news.viewCount : 1}</time>
        </div>

      </div>

    )
  } else return <div />
}

//TODO bkalafat detay sayfada resimler ortada yazılar sola yaslı kalsın.

export default NewsDetail
