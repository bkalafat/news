import React, { useState, useEffect } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import { NEWS_TYPE } from "../utils/constant"
import * as API from "../utils/api"

const AdminPanel = () => {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    API.getNewsList().then(result => {
      setNewsList(result)
    })
  },[])

  const navigateForCreate = () => console.log("navigated")
    // history.push({
    //   pathname: "/NewsEditor"
    // })

  const navigateForUpdate = news => console.log("navigated")

    // history.push({
    //   pathname: "/NewsEditor",
    //   state: { news: news }
    // })

  function typeFormatter(cell, row) {
    if (cell === NEWS_TYPE) {
      return "Ana Haber"
    } else {
      return "Alt Haber"
    }
  }

  const columns = [
    {
      dataField: "viewCount",
      text: "Görüntülenme",
      sort: true
    },
    {
      dataField: "caption",
      text: "Başık",
      sort: true
    },
    {
      dataField: "type",
      text: "Tip",
      formatter: typeFormatter
    },
    {
      dataField: "category",
      text: "Kategori"
    },
    {
      dataField: "priority",
      text: "Öncelik",
      sort: true
    },
    {
      dataField: "isActive",
      text: "Durum"
    }
  ]

  const defaultSorted = [
    {
      dataField: "priority",
      order: "asc"
    }
  ]

  const rowEvents = {
    onClick: (e, row) => {
      navigateForUpdate(row)
    }
  }
  if (newsList) {
    return (
      <div className="center-item">
        <input
          onClick={navigateForCreate}
          type="submit"
          value="Yeni Haber Ekle"
        />
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={newsList}
          columns={columns}
          defaultSorted={defaultSorted}
          rowEvents={rowEvents}
          striped
          hover
          condensed
        />
      </div>
    )
  }
}

export default AdminPanel
