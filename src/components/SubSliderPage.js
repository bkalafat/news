import React from "react"
import Link from "next/link"
import { isMobile, BrowserView, MobileView } from "react-device-detect"
import Slider from "react-slick"
import { Arrow } from "../utils/sliderItem"

const SubSliderPage = props => {
  var settings = {
    dots: true,
    arrows: !isMobile,
    lazyLoad: true,
    infinite: true,
    slidesToShow: isMobile ? 2 : 3,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <Slider {...settings}>
        {props.newsList.map(news => (
          <div key={news.id} className="ratio">
            <img
              className="imgRatio spaceAround"
              src={news.imgPath}
              alt={news.imgAlt}
            />
            <Link
              href={news.url.includes("/") ? news.url : "detay/" + news.url}

              key={news.id}
            >
              <a>

                <div className="header-text">
                  <div className="col-md-12 col-sm-8 col-xs-8 text-center">
                    <BrowserView>
                      <h5>
                        <span className="beyaz-manset">{news.caption}</span>
                      </h5>
                    </BrowserView>
                    <MobileView>
                      <h10>
                        <span className="beyaz-manset">{news.caption}</span>
                      </h10>
                    </MobileView>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SubSliderPage
