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
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4500,
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
    <div style={{ marginBottom: 5 }}>
      <Slider {...settings}>
        {props.newsList.map(news => (
          <div key={news.id} className="ratio">
            <Link
              to={{
                pathname: news.url.includes("/") ? news.url : "detay/" + news.url,
                state: { news: news }
              }}
              target={isMobile ? "_self" : "_blank"}
              key={news.id}
            >
              <img className="imgRatio" src={news.imgPath} alt={news.imgAlt} />
              <div className="header-text">
                <div className="col-md-12 col-sm-8 col-xs-8 noPadding text-center">
                  <BrowserView>
                    <h4>
                      <span className="beyaz-manset">{news.caption}</span>
                    </h4>
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
