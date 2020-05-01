import React from "react";
import { useHistory } from "react-router-dom";

const SubNews = (props) => {

  const history = useHistory()

  const navigateDetail = (news) => history.push({
    pathname: '/NewsDetail',
    state: { news: news }
  })

  return (
    <div className="subNews clickable-image">
      {props.newsList.map((news) => (
        <div onClick={() => navigateDetail(news)} key={news.id}>
          <img className="subNews-child" alt={news.imgAlt} src={news.imgPath} />
        </div>
      ))}
    </div>
  );
};

export default SubNews;
