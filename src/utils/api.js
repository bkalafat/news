import { getEnvironmentUrl, setDefaultValues } from "./helper"
import axios from "axios"
import * as Const from "./constant"


export const getNews = id => {
  return fetch(getEnvironmentUrl() + "news/" + id).then(res => res.json())
}

export const getNewsByUrl = url => {
  return fetch(getEnvironmentUrl() + "news/"  + url).then(res => res.json())
}

export function createNews(news) {
  setDefaultValues(news)

  return fetch(getEnvironmentUrl() + "news", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(news)
  })
    .then(res => res.json())
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
    })
}

export function updateNews(news) {
  news.updateDate = new Date().toISOString()
  news.url = news.caption.toLowerCase();

  return fetch(getEnvironmentUrl() + "news/" + news.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(news)
  })
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
    })
}

export function deleteNews(id) {
  return fetch(getEnvironmentUrl() + "news/" + id, {
    method: "DELETE"
  })
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
    })
}

export function uploadImage(news) {
  setDefaultValues(news)

  return fetch(getEnvironmentUrl() + "news", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(news)
  })
    .then(res => res.json())
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
    })
}

export const uploadFile = file => {
  const formData = new FormData()
  formData.append("image", file, file.name)
  return axios.post(Const.UPLOAD_FILE_PATH, formData).then(res => {
    return res
  })
}
