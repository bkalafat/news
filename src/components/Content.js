import React from "react"
import News from "./News"
import NewsList from "./Admin/NewsList"
import ReactLoading from "react-loading"
import useSWR from "swr"
import { getEnvironmentUrl } from "../utils/helper"

const Content = props => {
  const { data, error } = useSWR(getEnvironmentUrl() + "news")

  if (error) {
    console.log(error.message)
    return <div className="centerFlex">Haberler getirilemedi.</div>
  } else if (!data) {
    return (
      <div className="centerFlex">
        <ReactLoading type="spokes" color="#099FEF" />
      </div>
    )
  } else {
    if (props.isAdmin) return <NewsList newsList={data} />
    else return <News newsList={data} />
  }
}

export default Content
