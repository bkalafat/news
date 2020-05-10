import React from "react"
import { useHistory } from "react-router-dom"

const NewsList = (props) => {
  const history = useHistory()
  const navigateEditor = () =>
    history.push({
      pathname: "/NewsEditor",
    })

  return (
    <div className="center">
      {props.newsList.map((news) => (
        <li key={news.id}>{news.caption}</li>
      ))}

      <input onClick={navigateEditor} type="submit" value="Yeni Haber Ekle" />
    </div>
  )
}

export default NewsList
