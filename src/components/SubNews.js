import React from "react"
import SubNewsCard from "./cards/SubNewsCard"

const SubNews = props => {
  return (
    <div className="subNews clickable">
      {props.newsList.map(news => (
        SubNewsCard(news)
      ))}
    </div>
  )
}

export default SubNews

