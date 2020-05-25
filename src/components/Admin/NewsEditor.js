import React, { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import * as Const from "../../utils/constant"
import * as API from "../../utils/api"
import { useHistory } from "react-router-dom"
import Resizer from "react-image-file-resizer"
import CKEditor from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
import UploadAdapter from "../../utils/UploadAdapter"

const NewsEditor = () => {
  const fileInput = useRef(null)
  const location = useLocation()
  const history = useHistory()
  const isUpdate = location.state ? (location.state.news ? true : false) : false

  function urlToFile(url, filename, mimeType) {
    return fetch(url)
      .then(res => {
        return res.arrayBuffer()
      })
      .then(buf => {
        return new File([buf], filename, { type: mimeType })
      })
      .then(file => {
        return API.uploadFile(file)
      })
      .then(res => {
        setNews({ ...newNews, imgPath: res.data.fileUrl })
        setSubmitting(true)
      })
  }

  const { news } = isUpdate ? location.state : Const.DEFAULT_NEWS
  const [isSubmitting, setSubmitting] = useState(false)
  const [newNews, setNews] = useState(news)
  const [selectedFile, setSelectedFile] = useState(null)

  useEffect(() => {
    if (isSubmitting) {
      if ("id" in newNews) {
        API.updateNews(newNews).then(res => {
          history.push("/AdminPanel")
        })
      } else {
        API.createNews(newNews).then(res => {
          history.push("/AdminPanel")
        })
      }
    }
    if (isSubmitting) setSubmitting(false)
  }, [isSubmitting, newNews, history])

  const handleSubmit = event => {
    event.preventDefault()
    if (selectedFile) {
      Resizer.imageFileResizer(
        selectedFile,
        900,
        500,
        "JPEG",
        100,
        0,
        uri => {
          urlToFile(uri, selectedFile.name, "image/jpeg").then(() => {})
        },
        "base64"
      )
    } else if (isUpdate) {
      setSubmitting(true)
    }
  }

  const fileSelectorHandler = event => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <div>
      <div className="center">
        <Button
          variant={selectedFile ? "info" : "primary"}
          onClick={() => fileInput.current.click()}
        >
          {isUpdate ? "Fotoğrafı Güncelle" : "Fotoğraf Ekle"}
        </Button>
        <p>{selectedFile ? selectedFile.name : "Fotoğraf Seç"}</p>
      </div>
      <input
        ref={fileInput}
        style={{ display: "none" }}
        id="imageSelector"
        type="file"
        onChange={fileSelectorHandler}
      />

      <div className="centerFlex">
        <Form onSubmit={handleSubmit} className="col-md-10 col-xl-10">
          <Form.Group>
            <Form.Label>Kategori</Form.Label>
            <Form.Control
              value={newNews.category}
              onChange={e => setNews({ ...newNews, category: e.target.value })}
              as="select"
            >
              {Object.values(Const.Categories).map(c => (
                <option value={c.key}>{c.value}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Tip</Form.Label>
            <Form.Control
              value={newNews.type}
              onChange={e => setNews({ ...newNews, type: e.target.value })}
              as="select"
            >
              <option value={Const.NEWS_TYPE}>Manşet</option>
              <option value={Const.HEADLINE}>Alt Manşet</option>
              <option value={Const.SUB_NEWS_TYPE}>Alt Haber</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Check
              onChange={e =>
                setNews({
                  ...newNews,
                  isSecondPageNews: e.target.checked
                })
              }
              checked={newNews.isSecondPageNews}
              type="checkbox"
              label="İkinci sayfa haberi"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Başlık</Form.Label>
            <Form.Control
              value={newNews.caption}
              onChange={e => setNews({ ...newNews, caption: e.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Özet</Form.Label>
            <Form.Control
              value={newNews.summary}
              onChange={e => setNews({ ...newNews, summary: e.target.value })}
              as="textarea"
              rows="2"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>İçerik</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              data={newNews.content}
              onInit={editor => {
                editor.plugins.get(
                  "FileRepository"
                ).createUploadAdapter = loader => {
                  return new UploadAdapter(loader)
                }
              }}
              onChange={(_e, editor) => {
                setNews({ ...newNews, content: editor.getData() })
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Durum</Form.Label>
            <Form.Control
              value={newNews.isActive}
              onChange={e => setNews({ ...newNews, isActive: e.target.value })}
              as="select"
            >
              <option value={true}>Aktif</option>
              <option value={false}>Pasif</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Öncelik</Form.Label>
            <Form.Control
              type="number"
              value={newNews.priority}
              onChange={e =>
                setNews({
                  ...newNews,
                  priority: Number.parseInt(e.target.value)
                })
              }
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {isUpdate ? "Güncelle" : "Ekle"}
          </Button>

          <Button variant="warning" onClick={() => history.push("/AdminPanel")}>
            Geri
          </Button>

          {isUpdate && (
            <Button
              variant="danger"
              onClick={() =>
                API.deleteNews(newNews.id).then(function (res) {
                  history.push("/AdminPanel")
                })
              }
            >
              Sil
            </Button>
          )}
        </Form>
      </div>
    </div>
  )
}

export default NewsEditor
