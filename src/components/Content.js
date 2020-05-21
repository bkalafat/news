import React from "react"
import News from "./News"
import NewsList from "./Admin/NewsList"
import { getDummyNews } from "../utils/helper"
import useSWR from "swr"
import { getEnvironmentUrl } from "../utils/helper"

const Content = props => {
  const { data, error } = useSWR(getEnvironmentUrl() + "news")
  const dummyNews = getDummyNews()

  if (error) {
    console.log(error.message)
    return <News newsList={dummyNews} />
  } else if (!data) {
    if (props.isAdmin) return <NewsList newsList={dummyNews} />
    else return <News newsList={dummyNews} />
  } else {
    if (props.isAdmin) return <NewsList newsList={data} />
    else return <News newsList={data} />
  }
}

export default Content
