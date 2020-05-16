import React from "react"
import { Link } from "react-router-dom"

const SubNews = props => {
  return (
    <div className="subNews clickable">
      {props.newsList.map(news => (
        <div
          className="col-xs-12 col-sm-12 col-md-4 subNews-child"
          key={news.id}
        >
          <Link
            to={{
              pathname: "/detay/" + news.id,
              state: { news: news }
            }}
            key={news.id}
          >
            <img
              className="shadow resize"
              alt={news.imgAlt}
              src={news.imgPath}
            />
          </Link>

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
