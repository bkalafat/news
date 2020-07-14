import React from "react"
import  Link  from "next/link"
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
          <LazyLoadImage
              className="stretchImg shadow"
              alt={news.imgAlt}
              src={news.imgPath}
            />
          <Link
            href="/[category]/[id]"
            as={news.url.includes("/") ? news.url : "detay/" + news.url}
          >
            <a>
            </a>
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
