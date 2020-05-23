import React from "react"
import { Link } from "react-router-dom"
import { BrowserView, MobileView, isMobile } from "react-device-detect"
import { LazyLoadImage } from "react-lazy-load-image-component"

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
              pathname: "/detay/" + news.url,
              state: { news: news }
            }}
            target={isMobile ? "_self" : "_blank"}
          >
            <LazyLoadImage
              className="stretchImg shadow"
              alt={news.imgAlt}
              src={news.imgPath}
            />
          </Link>

          <div className="sub-header-text">
            <div className={isMobile ? "text-center" : "col-md-12 text-center"}>
              <BrowserView>
                <h2 className="h4">
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
