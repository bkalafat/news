import Resizer from "react-image-file-resizer"
import axios from "axios"
import * as Const from "./constant"

export default class UploadAdapter {
  loader: any
  constructor(loader: any) {
    this.loader = loader
  }
  upload() {
    return this.loader.file.then(
      (file: any) =>
        new Promise(resolve => {
          this.uploadJpeg(resolve, file)
        })
    )
  }

  uploadJpeg(resolve: any, file: any) {
    Resizer.imageFileResizer(
      file,
      900,
      500,
      "JPEG",
      100,
      0,
      uri => {
        return this.urlToFile(resolve, uri, file.name + '.webp', "WEBP")
      },
      "base64"
    )
  }
  abort() {
    console.log("aborted")
  }

  uploadFile = (file: any) => {
    const formData = new FormData()
    formData.append("image", file, file.name)
    return axios
      .post(Const.UPLOAD_FILE_PATH, formData, {
        onUploadProgress: (progressEvent: any) => {
          this.loader.uploadTotal = progressEvent.total
          this.loader.uploaded = progressEvent.loaded
        }
      })
      .then(res => {
        return res
      })
  }

  urlToFile(resolve: any, url: any, filename: any, mimeType: any) {
    fetch(url)
      .then(res => {
        return res.arrayBuffer()
      })
      .then(buf => {
        return new File([buf], filename, { type: mimeType })
      })
      .then(file => {
        return this.uploadFile(file)
      })
      .then(res => {
        resolve({
          default: res.data.fileUrl
        })
      })
  }
}
