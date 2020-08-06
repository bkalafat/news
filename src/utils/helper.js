import * as Const from "./constant"

export function getEnvironmentUrl() {
  return process.env.NEXT_PUBLIC_API_PATH
}

export function setDefaultValues(news) {
  news.subjects = ["haber"]
  news.authors = ["Mustafa Çolakoğlu"]
  news.createDate = new Date().toISOString()
  news.updateDate = new Date().toISOString()
  news.expireDate = new Date().toISOString()
  news.url = "#"
  news.viewCount = 0

  return news
}


export const getDummyNews = () => {
  let news = []

  for (var index = 0; index < 13; index++) {
    news.push({
      id: index,
      category: "General",
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
      viewCount: 5,
      isActive: true,
      url: "#"
    })
  }

  for (var subIndex = 0; subIndex < 12; subIndex++) {
    news.push({
      id: subIndex,
      category: "General",
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
      viewCount: 1,
      priority: 1,
      isActive: true,
      url: "#"
    })
  }

  return news
}


export const getCategoryByTo = to => {
  return Object.values(Const.Categories).find(c => c.to === to)
}

export const getCategoryToByKey = key => {
  const categories = Object.values(Const.Categories)
  const category = categories.find(c => c.key === key)
  return category ? category.to : "new"
}
