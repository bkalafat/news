import * as Const from "./constant"
import slugify from "slugify"
import { NewsType } from "../types/NewsType"

export function getEnvironmentUrl() {
  return process.env.NEXT_PUBLIC_API_PATH
}

export function setDefaultValues(news: NewsType) {
  news.subjects = ["haber"]
  news.authors = ["Mustafa Çolakoğlu"]
  news.createDate = new Date().toISOString()
  news.updateDate = new Date().toISOString()
  news.expressDate = new Date().toISOString()
  news.url = "#"
  news.viewCount = 0
  news.priority = 300

  return news
}

export const getCategoryByTo = (to: string) => {
  return Object.values(Const.Categories).find(c => c.to === to)
}

export const getCategoryToByKey = (key: string) => {
  const categories = Object.values(Const.Categories)
  const category = categories.find(c => c.key === key)
  return category ? category.to : "new"
}

export const getUrl = (news: NewsType) => {
  return "https://haberibul.com/" + getCategoryToByKey(news.category) + "/" + slugify(news.caption) + "/" + news.id
}

export const sortCreateDateDesc = () => {
  return function (a: NewsType, b: NewsType) {
    return new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
  }
}

export const getAdmins = () => {
  return ["kalafatburak@gmail.com", "mircolakoglu@gmail.com"];
}
