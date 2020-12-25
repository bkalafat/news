import React from "react"
import SubNewsCard from "./cards/SubNewsCard"
import SquareAd from "./SquareAd"

const SubNews = props => {
  return (
    <div className="subNews clickable">
      {props.newsList.map((news, index) => (
        [SubNewsCard(news), index % 3 === 0 && SquareAd()]
      ))}
    </div>
  )
}

export default SubNews

