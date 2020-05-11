import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { NEWS_TYPE, SUB_NEWS_TYPE } from "../../utils/constant"
import { createNews, updateNews, deleteNews } from "../../utils/api"
import { useHistory } from "react-router-dom"
import axios from "axios"
import Resizer from "react-image-file-resizer"

const NewsEditor = () => {
  let location = useLocation()
  const history = useHistory()

  const isUpdate = location.state ? (location.state.news ? true : false) : false

  function urlToFile(url, filename, mimeType) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer()
      })
      .then(function (buf) {
        const img = new File([buf], filename, { type: mimeType })

        const fd = new FormData()
        fd.append("image", img, selectedFile.name)
        axios
          .post(
            "https://us-central1-news-26417.cloudfunctions.net/uploadFile",
            fd
          )
          .then((res) => {
            setNews({ ...newNews, imgPath: res.data.fileUrl })
          })
      })
  }

  const { news } = isUpdate
    ? location.state
    : {
        news: {
          type: "news",
          category: "",
          caption: "",
          summary: "",
          content: "",
          isActive: true,
          priority: 888,
          imgPath: "https://via.placeholder.com/500x250?text=HABER",
          imgAlt: "haber",
        },
      }

  const [newNews, setNews] = useState(news)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    if ("id" in newNews) {
      updateNews(newNews).then(function (res) {
        alert("Güncellendi.")
      })
    } else {
      createNews(newNews).then(function (res) {
        history.push("/AdminPanel")
      })
    }
  }

  const fileSelectorHandler = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const fileUploadHandler = () => {
    Resizer.imageFileResizer(
      selectedFile,
      500,
      400,
      "JPEG",
      100,
      0,
      (uri) => {
        console.log(uri)
        urlToFile(uri, selectedFile.name,"image/jpeg")
      },
      "base64"
    )
  }

  return (
    <div className="centerFlex">
      <input type="file" onChange={fileSelectorHandler} />
      <button onClick={fileUploadHandler}>Yükle</button>
      <Form onSubmit={handleSubmit} className="col-md-10 col-xl-10">
        <Form.Group>
          <Form.Label>Kategori</Form.Label>
          <Form.Control
            value={newNews.category}
            onChange={(e) => setNews({ ...newNews, category: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Tip</Form.Label>
          <Form.Control
            value={newNews.type}
            onChange={(e) => setNews({ ...newNews, type: e.target.value })}
            as="select"
          >
            <option value={NEWS_TYPE}>Ana Haber</option>
            <option value={SUB_NEWS_TYPE}>Alt Haber</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Başlık</Form.Label>
          <Form.Control
            value={newNews.caption}
            onChange={(e) => setNews({ ...newNews, caption: e.target.value })}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Özet</Form.Label>
          <Form.Control
            value={newNews.summary}
            onChange={(e) => setNews({ ...newNews, summary: e.target.value })}
            as="textarea"
            rows="2"
          />
        </Form.Group>

        <br />

        <Form.Group>
          <Form.Label>İçerik</Form.Label>
          <Form.Control
            value={newNews.content}
            onChange={(e) => setNews({ ...newNews, content: e.target.value })}
            as="textarea"
            rows="5"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Durum</Form.Label>
          <Form.Control
            value={newNews.isActive}
            onChange={(e) => setNews({ ...newNews, isActive: e.target.value })}
            as="select"
          >
            <option value={true}>Aktif</option>
            <option value={false}>Pasif</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Öncelik</Form.Label>
          <Form.Control
            value={newNews.priority}
            onChange={(e) =>
              setNews({
                ...newNews,
                priority: Number.parseInt(e.target.value),
              })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {isUpdate ? "Güncelle" : "Ekle"}
        </Button>

        <Button variant="primary" onClick={() => history.push("/AdminPanel")}>
          Geri
        </Button>

        {isUpdate && (
          <Button
            variant="danger"
            onClick={() =>
              deleteNews(newNews.id).then(function (res) {
                history.push("/AdminPanel")
              })
            }
          >
            Sil
          </Button>
        )}
      </Form>
    </div>
  )
}

export default NewsEditor
