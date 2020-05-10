import React from "react"
import { useHistory } from "react-router-dom"

const NewsList = (props) => {
  const history = useHistory()
  const navigateForCreate = () =>
    history.push({
      pathname: "/NewsEditor",
    })

  const navigateForUpdate = (news) =>
    history.push({
      pathname: "/NewsEditor",
      state: { news: news },
    })

  return (
    <div className="center">
      {props.newsList.map((news) => (
        <li
          className="clickable"
          onClick={() => navigateForUpdate(news)}
          key={news.id}
        >
          {news.caption}
        </li>
      ))}

      <input
        onClick={navigateForCreate}
        type="submit"
        value="Yeni Haber Ekle"
      />
    </div>
  )
}

export default NewsList
