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
        <div className="col-xs-12 col-sm-12 col-md-4 subNews-child" onClick={() => navigateDetail(news)} key={news.id}>
          <img className="shadow resize" alt={news.imgAlt} src={news.imgPath} />
        </div>
      ))}
    </div>
  );
};

export default SubNews;
