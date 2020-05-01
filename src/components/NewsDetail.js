import React from "react";
import { useLocation } from "react-router-dom";

const NewsDetail = () => {
  let location = useLocation();
  const { news } = location.state;

  return (
    <div className="newsDetail">
      <h1 className="spaceAround" >{news.caption}</h1>
      <p className="lead spaceAround">{news.summary}</p>
      <img className="spaceAround detailImg" src={news.imgPath} alt={news.imgAlt} />
      <p className="spaceAround" >{news.content}</p>
    </div>
  );
};

export default NewsDetail;
