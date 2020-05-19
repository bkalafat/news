import React, { useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Link } from "react-router-dom"
import { isMobile, BrowserView, MobileView } from "react-device-detect"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Arrow, Dots, Paging } from "../utils/sliderItem"

const SliderPage = props => {
  const [currentIndex, setCurrentIndex] = useState(0)

  var settings = {
    dots: true,
    dotsClass: "dotsClass",
    arrows: !isMobile,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    beforeChange: (_prev, next) => {
      setCurrentIndex(next)
    },
    appendDots: Dots(),
    customPaging: index => {
      return Paging(index, currentIndex)
    }
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <Slider {...settings}>
        {props.newsList.map(news => (
          <div className="ratio">
            <Link
              to={{
                pathname: "/detay/" + news.id,
                state: { news: news }
              }}
              key={news.id}
            >
              <img className="imgRatio" src={news.imgPath} alt="placeholder" />
              <div class="header-text">
                <div class="col-md-12 col-sm-8 col-xs-8 noPadding text-center">
                  <BrowserView>
                    <h1>
                      <span className="beyaz-manset">{news.caption}</span>
                    </h1>
                  </BrowserView>
                  <MobileView>
                    <h7>
                      <span className="beyaz-manset">{news.caption}</span>
                    </h7>
                  </MobileView>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderPage
