import React from "react"
import { useHistory } from "react-router-dom"
import BootstrapTable from "react-bootstrap-table-next"
import { NEWS_TYPE } from "../../utils/constant"

const AdminPanel = props => {
  const history = useHistory()
  const navigateForCreate = () =>
    history.push({
      pathname: "/NewsEditor"
    })

  const navigateForUpdate = news =>
    history.push({
      pathname: "/NewsEditor",
      state: { news: news }
    })

  function typeFormatter(cell, row) {
    if (cell === NEWS_TYPE) {
      return "Ana Haber"
    } else {
      return "Alt Haber"
    }
  }

  const columns = [
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
        data={props.newsList}
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

export default AdminPanel
