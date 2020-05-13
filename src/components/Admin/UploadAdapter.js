import * as API from "../../utils/api"
import Resizer from "react-image-file-resizer"

export default class UploadAdapter {
  constructor(loader) {
    // CKEditor 5's FileLoader instance.
    this.loader = loader
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(file => new Promise( ( resolve, reject ) => {
      this.uploadJpeg(resolve, file)
    }))
  }

  uploadJpeg(resolve, file) {
    Resizer.imageFileResizer(
      file,
      500,
      400,
      "JPEG",
      100,
      0,
      uri => {
        return this.urlToFile(resolve, uri, file.name, "image/jpeg")
      },
      "base64"
    )
  }

  // Aborts the upload process.
  abort() {
    console.log("aborted")
  }

  //   // Example implementation using XMLHttpRequest.
  //   _initRequest() {
  //     const xhr = (this.xhr = new XMLHttpRequest())

  //     xhr.open("POST", this.url, true)
  //     xhr.responseType = "json"
  //   }

  //   // Initializes XMLHttpRequest listeners.
  //   _initListeners(resolve, reject) {
  //     const xhr = this.xhr
  //     const loader = this.loader
  //     const genericErrorText = "Couldn't upload file:" + ` ${loader.file.name}.`

  //     xhr.addEventListener("error", () => reject(genericErrorText))
  //     xhr.addEventListener("abort", () => reject())
  //     xhr.addEventListener("load", () => {
  //       const response = xhr.response

  //       if (!response || response.error) {
  //         return reject(
  //           response && response.error ? response.error.message : genericErrorText
  //         )
  //       }

  //       // If the upload is successful, resolve the upload promise with an object containing
  //       // at least the "default" URL, pointing to the image on the server.
  //       resolve({
  //         default: response.url
  //       })
  //     })

  //     if (xhr.upload) {
  //       xhr.upload.addEventListener("progress", evt => {
  //         if (evt.lengthComputable) {
  //           loader.uploadTotal = evt.total
  //           loader.uploaded = evt.loaded
  //         }
  //       })
  //     }
  //   }

  //   // Prepares the data and sends the request.
  //   _sendRequest() {
  //     const data = new FormData()

  //     data.append("upload", this.loader.file)

  //     this.xhr.send(data)
  //   }

  urlToFile(resolve, url, filename, mimeType) {
    fetch(url)
      .then(res => {
        return res.arrayBuffer()
      })
      .then(buf => {
        return new File([buf], filename, { type: mimeType })
      })
      .then(file => {
        //TODO bkalafat ilerleme sürecini uploadFile'dan alabiliriz.
        // loader.uploadTotal = evt.total
        // loader.uploaded = evt.loaded
        return API.uploadFile(file)
      })
      .then(res => {
        resolve ({
          default: res.data.fileUrl
        })
      })
  }
}
