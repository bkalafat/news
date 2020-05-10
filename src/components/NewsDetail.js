import React from "react"
import { useLocation } from "react-router-dom"

const NewsDetail = () => {
  let location = useLocation()
  const { news } = location.state

  return (
    <div className="newsDetail">
      <h1 className="spaceAround" >{news.caption}</h1>
      <p className="lead spaceAround">{news.summary}</p>
      <img className="col-md-6 col-xs-12 col-sm-12 detailImg" src={news.imgPath} alt={news.imgAlt} />
      <p className="spaceAround" >{news.content}</p>
    </div>
  )
}

export default NewsDetail
