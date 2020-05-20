import React from "react"
import { Link } from "react-router-dom"
import { BrowserView, MobileView, isMobile } from "react-device-detect"

const SubNews = props => {
  return (
    <div className="subNews clickable">
      {props.newsList.map(news => (
        <div
          className="col-xs-12 col-sm-12 col-md-3 subNews-child relativeDiv"
          key={news.id}
        >
          <Link
            to={{
              pathname:
                "/detay/" + news.caption.split(" ").join("-").toLowerCase(),
              state: { news: news }
            }}
            key={news.id}
          >
            <img
              className="stretchImg shadow"
              alt={news.imgAlt}
              src={news.imgPath}
            />
          </Link>

          <div className="sub-header-text">
            <div className={isMobile ? "text-center" : "col-md-12 text-center"}>
              <BrowserView>
                <h4>
                  <span>{news.caption}</span>
                </h4>
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
