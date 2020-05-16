import React from "react"
import { useHistory } from "react-router-dom"

const SubNews = props => {
  const history = useHistory()

  const navigateDetail = news =>
    history.push({
      pathname: "/detay/" + news.id,
      state: { news: news }
    })

  return (
    <div className="subNews clickable">
      {props.newsList.map(news => (
        <div
          className="col-xs-12 col-sm-12 col-md-4 subNews-child"
          onClick={() => navigateDetail(news)}
          key={news.id}
        >
          <img className="shadow resize" alt={news.imgAlt} src={news.imgPath} />

          <div class="sub-header-text">
            <div class="col-md-12 col-sm-8 col-xs-8 text-center">
              <h4>
                <span>{news.caption}</span>
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SubNews
