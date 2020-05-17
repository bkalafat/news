import React from "react"
import { Link } from "react-router-dom"
import { BrowserView, MobileView, isMobile } from "react-device-detect"

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

          <div className="sub-header-text">
            <div className={isMobile ? "text-center" : "col-md-12 text-center"}>
              <BrowserView>
                <h2>
                  <span>{news.caption}</span>
                </h2>
              </BrowserView>
              <MobileView>
                <h5>
                  <span>{news.caption}</span>
                </h5>
              </MobileView>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SubNews
