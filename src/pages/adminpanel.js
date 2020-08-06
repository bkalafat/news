import React, { useState, useEffect } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import { NEWS_TYPE } from "../utils/constant"
import * as API from "../utils/api"
import Router from 'next/router'

const AdminPanel = (props) => {
  const [newsList, setNewsList] = useState(props.newsList)

  useEffect(() => {
    API.getNewsList().then(result => {
      setNewsList(result)
    })
  },[])

  const navigateForCreate = () => Router.push("/editor/new")
  const navigateForUpdate = news => Router.push("/editor/" + news.id)

  function typeFormatter(cell) {
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
    onClick: (_e, row) => {
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

export const getStaticProps = async () => {
  const newsList = await API.getNewsList()
  return {
    revalidate: 5,
    props: {
      newsList
    }
  }
}

export default AdminPanel
