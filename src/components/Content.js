import React from "react"
import News from "./News"
import { getDummyNews } from "../utils/helper"
import useSWR from "swr"
import { getEnvironmentUrl } from "../utils/helper"

const Content = () => {
  const { data, error } = useSWR(getEnvironmentUrl() + "news")
  const dummyNews = getDummyNews()

  if (error) {
    console.log(error.message)
    return <News newsList={dummyNews} />
  } else if (!data) {
    return <News newsList={dummyNews} />
  } else {
    return <News newsList={data} />
  }
}

export default Content
