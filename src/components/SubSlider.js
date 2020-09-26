import React from "react"
import { isMobile } from "react-device-detect"
import Slider from "react-slick"
import { Arrow } from "../utils/sliderItem"
import SubSliderCard from "./cards/SubSliderCard"

const SubSlider = props => {
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
          SubSliderCard(news)
        ))}
      </Slider>
    </div>
  )
}

export default SubSlider

