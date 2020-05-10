import { NEWS_TYPE } from "./constant"

export function getEnvironmentUrl() {
  let url = "https://localhost:5001/api/"

  if (process.env.NODE_ENV === "production") {
    url = "https://haberibul.azurewebsites.net/api/"
  }

  return url
}

export function setDefaultValues(news) {
  const imgSize = news.type === NEWS_TYPE ? "600x300" : "500x250"
  const imgText = news.caption.split(" ").join("+")
  news.imgPath = "https://via.placeholder.com/" + imgSize + "?text=" + imgText
  news.imgAlt = news.caption
  news.subjects = ["Covid", "Türkiye"]
  news.authors = ["Mustafa Çolakoğlu", "Burak Kalafat"]
  news.createDate = new Date().toISOString()
  news.updateDate = new Date().toISOString()
  news.expireDate = new Date().toISOString()

  return news
}
