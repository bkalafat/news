import React from "react"
import SubNewsCard from "./cards/SubNewsCard"
import SquareAd from "./SquareAd"

const SubNews = props => {
  return (
    <div className="subNews clickable">
      {props.newsList.map((news, index) => (
        index % 4 === 0 ? SquareAd() : SubNewsCard(news)
      ))}
    </div>
  )
}

export default SubNews

