import { getEnvironmentUrl, setDefaultValues } from "./helper"
import axios from "axios"
import fetch from 'isomorphic-unfetch'
import * as Const from "./constant"
import { NewsType } from "../types/NewsType"

export const getNewsList = (): Promise<NewsType[]> => {
  return fetch(getEnvironmentUrl() + "news/get").then(res => res.json())
}

export const getNews = (id: string): Promise<NewsType> => {
  return fetch(getEnvironmentUrl() + "news/get/" + id).then(res => res.json())
}

export const getNewsBySlug = (slug: string): Promise<NewsType> => {
  return fetch(getEnvironmentUrl() + "news/GetBySlug/" + slug).then(res => res.json())
}

export function createNews(news: NewsType) {
  setDefaultValues(news)

  return fetch(getEnvironmentUrl() + "news/post", {
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

export function updateNews(news: NewsType) {
  news.updateDate = new Date().toISOString()
  news.imgAlt = news.caption

  return fetch(getEnvironmentUrl() + "news/put/" + news.id, {
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

export function deleteNews(id: string) {
  return fetch(getEnvironmentUrl() + "news/delete/" + id, {
    method: "DELETE"
  })
    .then(response => {
      return response
    })
    .catch(error => {
      console.log(error)
    })
}

export const uploadFile = (file: File) => {
  const formData = new FormData()
  formData.append("image", file, file.name)
  return axios.post(Const.UPLOAD_FILE_PATH, formData).then(res => {
    return res
  })
}
