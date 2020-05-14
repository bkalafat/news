import * as API from "./api"
import Resizer from "react-image-file-resizer"

export default class UploadAdapter {
  constructor(loader) {
    this.loader = loader
  }
  upload() {
    return this.loader.file.then(
      file =>
        new Promise(resolve => {
          this.uploadJpeg(resolve, file)
        })
    )
  }

  uploadJpeg(resolve, file) {
    Resizer.imageFileResizer(
      file,
      600,
      300,
      "JPEG",
      100,
      0,
      uri => {
        return this.urlToFile(resolve, uri, file.name, "image/jpeg")
      },
      "base64"
    )
  }
  abort() {
    console.log("aborted")
  }

  urlToFile(resolve, url, filename, mimeType) {
    fetch(url)
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
        resolve({
          default: res.data.fileUrl
        })
      })
  }
}
