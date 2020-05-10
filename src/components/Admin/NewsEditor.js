import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import { NEWS_TYPE, SUB_NEWS_TYPE } from "../../utils/constant"
import { createNews, updateNews, deleteNews } from "../../utils/api"
import { useHistory } from "react-router-dom"

const NewsEditor = () => {
  let location = useLocation()
  const history = useHistory()

  const isUpdate = location.state ? (location.state.news ? true : false) : false

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
        },
      }

  const [newNews, setNews] = useState(news)

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

  return (
    <div className="centerFlex">
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
