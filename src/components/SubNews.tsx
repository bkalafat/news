import React from "react"
import { NewsType } from "../types/NewsType"
import SubNewsCard from "./cards/SubNewsCard"

const SubNews = props => {
  const newsList : NewsType[] = props.newsList
  return (
    <div className="subNews clickable">
      {newsList.map((news) => (
        SubNewsCard(news)
      ))}
    </div>
  )
}

export default SubNews

