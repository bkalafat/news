import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { useHistory } from "react-router-dom"

function Slider(props) {
  const history = useHistory()

  const navigateDetail = news =>
    history.push({
      pathname: "/detay/" + news.id,
      state: { news: news }
    })

  return (
    <div className="slider">
      <Carousel autoPlay>
        {props.newsList.map(news => (
          <div
            onClick={() => navigateDetail(news)}
            className="clickable"
            key={news.id}
          >
            <img src={news.imgPath} alt="placeholder"></img>
              <div class="header-text">
                <div class="col-md-12 col-sm-8 col-xs-8 text-center">
                  <h2>
                    <span className="beyaz-manset" >{news.caption}</span>
                  </h2>
                </div>
              </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Slider
