import React, { useState, useEffect } from "react"
import BootstrapTable from "react-bootstrap-table-next"
import { NEWS_TYPE } from "../utils/constant"
import * as API from "../utils/api"
import Router from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/client'

const AdminPanel = (props) => {
  const [session, loading] = useSession()
  const [newsList, setNewsList] = useState(props.newsList)

  useEffect(() => {
    API.getNewsList().then(result => {
      setNewsList(result)
    })
  }, [])

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
      dataField: "createDate",
      text: "Oluşturma tarihi",
      sort: true
    },
    {
      dataField: "isActive",
      text: "Durum"
    }
  ]

  const defaultSorted = [
    {
      dataField: "createDate",
      order: "desc"
    }
  ]

  const rowEvents = {
    onClick: (_e, row) => {
      navigateForUpdate(row)
    }
  }
  if (newsList) {
    const admins = ["kalafatburak@gmail.com", "mircolakoglu@gmail.com"];
    return <div className="center-item">
      {!session &&  <>
        Not admins signed in <br />
        <button onClick={signIn}>Sign in</button>
      </>}
      {session && admins.includes(session.user.email) && <>
        Signed in as {session.user.email} <br />
        <button onClick={signOut}>Sign out</button> <br />

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
        /></>}
    </div>

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
