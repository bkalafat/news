import React from "react"
import { useLocation } from "react-router-dom"

const NewsDetail = () => {
  let location = useLocation()
  const { news } = location.state

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
      </div>
      <div
        className="container"
        dangerouslySetInnerHTML={{
          __html: "<div class='container content'" + news.content + "</div>"
        }}
      />
    </div>
  )
}

export default NewsDetail
