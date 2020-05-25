import * as Const from "./constant"

export function getEnvironmentUrl() {
  let url = "https://haberibul.azurewebsites.net/api/"

  if (process.env.NODE_ENV === "production") {
    url = "https://haberibul.azurewebsites.net/api/"
  }

  return url
}

export function setDefaultValues(news) {
  news.subjects = ["Covid", "Türkiye"]
  news.authors = ["Mustafa Çolakoğlu", "Burak Kalafat"]
  news.url = getCategory(news).to + "/" + replaceNonWordsWith(news.caption, "-")
  news.createDate = new Date().toISOString()
  news.updateDate = new Date().toISOString()
  news.expireDate = new Date().toISOString()

  return news
}

export const replaceNonWordsWith = (text, char) => {
  return text
    ? text
        .replace(/Ğ/gim, "g")
        .replace(/Ü/gim, "u")
        .replace(/Ş/gim, "s")
        .replace(/I/gim, "i")
        .replace(/İ/gim, "i")
        .replace(/Ö/gim, "o")
        .replace(/Ç/gim, "c")
        .replace(/ğ/gim, "g")
        .replace(/ü/gim, "u")
        .replace(/ş/gim, "s")
        .replace(/ı/gim, "i")
        .replace(/ö/gim, "o")
        .replace(/ç/gim, "c")
        .replace(/[^A-Za-z0-9]/g, char)
        .toLowerCase()
    : ""
}

export const getDummyNews = () => {
  let news = []

  for (var index = 0; index < 13; index++) {
    news.push({
      id: index,
      category: "Placeholder",
      type: "news",
      caption: "Haberibul.com",
      summary: "Haberibul.com",
      imgPath: "https://via.placeholder.com/300x180?text=Haberibul.com",
      imgAlt: "Haberi bul",
      content: "Haberi bul",
      subjects: ["haberi bul"],
      authors: ["Mustafa Çolakoğlu", "Burak Kalafat"],
      createdDate: "2020-04-23T18:25:43.511Z",
      updateDate: "2020-05-01T14:35:43.511Z",
      expressDate: "2020-05-01T14:35:43.511Z",
      priority: 1,
      isActive: true,
      url: "#"
    })
  }

  for (var subIndex = 0; subIndex < 12; subIndex++) {
    news.push({
      id: subIndex,
      category: "Placeholder",
      type: "subNews",
      caption: "Haberibul.com",
      summary: "Haberibul.com",
      imgPath: "https://via.placeholder.com/300x180?text=Haberibul.com",
      imgAlt: "Haberi bul",
      content: "Haberi bul",
      subjects: ["haberi bul"],
      authors: ["Mustafa Çolakoğlu", "Burak Kalafat"],
      createdDate: "2020-04-23T18:25:43.511Z",
      updateDate: "2020-05-01T14:35:43.511Z",
      expressDate: "2020-05-01T14:35:43.511Z",
      priority: 1,
      isActive: true,
      url: "#"
    })
  }

  return news
}

const getCategory = news => {
  return Object.values(Const.Categories).find(c => c.key === news.category)
}

export const getCategoryByTo = to => {
  return Object.values(Const.Categories).find(c => c.to === to)
}
