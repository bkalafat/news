import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom"
import { BrowserView, MobileView } from "react-device-detect"

function Slider(props) {
  return (
    <div className="slider">
      <Carousel autoPlay>
        {props.newsList.map(news => (
          <Link
            to={{
              pathname: "/detay/" + news.id,
              state: { news: news }
            }}
            key={news.id}
          >
            <div>
              <img
                onContextMenu={e => e.preventDefault()}
                src={news.imgPath}
                alt="placeholder"
              ></img>
              <div class="header-text">
                <div class="col-md-12 col-sm-8 col-xs-8 text-center">
                  <BrowserView>
                    <h1>
                      <span className="beyaz-manset">{news.caption}</span>
                    </h1>
                  </BrowserView>
                  <MobileView>
                    <h5>
                      <span className="beyaz-manset">{news.caption}</span>
                    </h5>
                  </MobileView>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
