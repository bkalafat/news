import React from "react"
import { NewsType } from "../types/NewsType"
import SubNewsCard from "./cards/SubNewsCard"

interface ISubNewsProps {
  newsList: NewsType[]
}

const SubNews = (props: ISubNewsProps) => {
  const { newsList } = props
  return (
    <div className="subNews clickable">
      {newsList.map((news) => (
        SubNewsCard(news)
      ))}
    </div>
  )
}

export default SubNews

