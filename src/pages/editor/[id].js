import { useState, useEffect, useRef } from "react"
import { Form, Button } from "react-bootstrap"
import * as Const from "../../utils/constant"
import * as API from "../../utils/api"
import * as Helper from "../../utils/helper"
import Resizer from "react-image-file-resizer"
import UploadAdapter from "../../utils/UploadAdapter"
import Router, { useRouter } from 'next/router'
import useSWR from 'swr'

const NewsEditor = () => {

  const fileInput = useRef(null)
  const router = useRouter()
  const { id } = router.query
  let news = Const.DEFAULT_NEWS;
  const isUpdate = id && id != 'new';
  if (isUpdate) {
    const { data, error } = useSWR(Helper.getEnvironmentUrl() + "news")
    if (error) console.log(error.message)
    else if (!data) {
      news = Const.DEFAULT_NEWS
    }
    else {
      news = data.filter(news => news.id === id)
    }
  }
  const [newNews, setNews] = useState(isUpdate ? news ? news : Const.DEFAULT_NEWS : Const.DEFAULT_NEWS)

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

  const [isSubmitting, setSubmitting] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setEditorLoaded(true)
    if (isSubmitting) {
      if ("id" in newNews) {
        API.updateNews(newNews).then(res => {
          Router.push("/adminpanel")
        })
      } else {
        API.createNews(newNews).then(res => {
          Router.push("/adminpanel")
        })
      }
    }
    if (isSubmitting) setSubmitting(false)
  }, [isSubmitting, newNews])

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
          urlToFile(uri, selectedFile.name, "image/jpeg").then(() => { })
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
            {editorLoaded ? (<CKEditor
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
            />) : (
                <Form.Control
                  value={newNews.content}
                  onChange={e => setNews({ ...newNews, content: e.target.value })}
                  as="textarea"
                  rows="2"
                />
              )}
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

          <Button style={{ marginRight: 7 }} variant="primary" type="submit">
            {isUpdate ? "Güncelle" : "Ekle"}
          </Button>

          <Button style={{ marginRight: 7 }} variant="warning" onClick={() => Router.push('/adminpanel')}>
            Geri
          </Button>

          {isUpdate && (
            <Button
              variant="danger"
              onClick={() =>
                API.deleteNews(newNews.id).then(function (res) {
                  Router.push("/adminpanel")
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