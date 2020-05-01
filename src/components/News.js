import React from "react";
import Navigator from "./Navigator"
import Slider from "./Slider"
import SubNews from "./SubNews"
import newsList from "../utils/dummyData"

const News = () => {

  const sliderNewsList = newsList.filter(news => news.isActive).sort(function(a, b){return a.priority - b.priority}).slice(0,10);

  return (
    <div className="container" >
      <Slider newsList={sliderNewsList} ></Slider>
      <SubNews></SubNews>
    </div>
  );
}

export default News;