import React from "react";
import Slider from "./Slider"
import SubNews from "./SubNews"
import newsList from "../utils/dummyData"
import * as constant from "../utils/constant"


const News = () => {

  const sliderNewsList = newsList.filter(news => news.isActive && news.type === constant.NEWS_TYPE).sort(function(a, b){return a.priority - b.priority}).slice(0,10);
  const subNewsList = newsList.filter(news => news.isActive && news.type === constant.SUB_NEWS_TYPE).sort(function(a, b){return a.priority - b.priority}).slice(0,9);

  return (
    <div className="container" >
      <Slider newsList={sliderNewsList} ></Slider>
      <SubNews newsList ={subNewsList} ></SubNews>
    </div>
  );
}

export default News;