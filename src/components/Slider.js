import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useHistory } from "react-router-dom";

function Slider(props) {


  const history = useHistory()

  const navigateDetail = (news) => history.push({
    pathname: '/NewsDetail',
    state: { news: news }
  })

  return (
    <div className="slider">
      <Carousel autoPlay>
        {props.newsList.map((news) => (
          <div
            onClick={() => navigateDetail(news)}
            className="clickable-image"
            key={news.id}
          >
            <img src={news.imgPath} alt="placeholder"></img>
            <p className="legend">{news.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
