import React from "react"
import News from "./News"
import AdminPanel from "./Admin/AdminPanel"
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
    if (props.isAdmin) return <div/>
    else return <News newsList={dummyNews} />
  } else {
    if (props.isAdmin) return <AdminPanel newsList={data} />
    else return <News newsList={data} />
  }
}

export default Content
