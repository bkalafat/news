import React from "react";
import Slider from "./Slider";
import SubNews from "./SubNews";
import * as constant from "../utils/constant";

const News = (props) => {

  const {newsList} = props

  if (!newsList && newsList.length !== 0) return <div/>

  const sliderNewsList = newsList
    .filter((news) => news.isActive && news.type === constant.NEWS_TYPE)
    .sort(function (a, b) {
      return a.priority - b.priority;
    })
    .slice(0, 10);
  const subNewsList = newsList
    .filter((news) => news.isActive && news.type === constant.SUB_NEWS_TYPE)
    .sort(function (a, b) {
      return a.priority - b.priority;
    })
    .slice(0, 9);

  console.log(subNewsList);

  return (
    <div className="centerFlex">
      <div className="col-md-10 col-xl-10 noPadding">
        <Slider newsList={sliderNewsList}></Slider>
      </div>
      <SubNews newsList={subNewsList}></SubNews>
    </div>
  );
};

export default News;
