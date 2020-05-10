import React, { useState, useEffect } from "react"
import News from "./News"
import NewsList from "./Admin/NewsList"
import { getEnvironmentUrl } from "../utils/helper"
import ReactLoading from "react-loading"

const Content = (props) => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    fetch(getEnvironmentUrl() + "news")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setNewsList(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
          console.log(error)
        }
      )
  }, [])

  if (error) {
    console.log(error.message)
    return <div className="centerFlex">Haberler getirilemedi.</div>
  } else if (!isLoaded) {
    return (
      <div className="centerFlex">
        <ReactLoading type="spokes" color="#099FEF" />
      </div>
    )
  } else {
    if (props.isAdmin) return  <NewsList newsList={newsList} />
    else return <News newsList={newsList} />
  }
}

export default Content
