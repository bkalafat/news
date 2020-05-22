export function getEnvironmentUrl() {
  let url = "https://localhost:5001/api/"

  if (process.env.NODE_ENV === "production") {
    url = "https://haberibul.azurewebsites.net/api/"
  }

  return url
}

export function setDefaultValues(news) {
  news.subjects = ["Covid", "Türkiye"]
  news.authors = ["Mustafa Çolakoğlu", "Burak Kalafat"]
  news.url = news.caption.replace(/[^A-Za-z0-9]/g, '-').toLowerCase();
  news.createDate = new Date().toISOString()
  news.updateDate = new Date().toISOString()
  news.expireDate = new Date().toISOString()

  return news
}


export const getDummyNews = () => {

  let news = []

  for (var index = 0; index < 13; index++) {
    news.push(
      {
        id: index,
        category: "Placeholder",
        type: "news",
        caption: "Haberibul.com",
        summary: "Haberibul.com",
        imgPath: "https://via.placeholder.com/300x180?text=Haberibul.com",
        imgAlt: "Haberi bul",
        content:
          "Haberi bul",
        subjects: ["haberi bul"],
        authors: ["Mustafa Çolakoğlu", "Burak Kalafat"],
        createdDate: "2020-04-23T18:25:43.511Z",
        updateDate: "2020-05-01T14:35:43.511Z",
        expressDate: "2020-05-01T14:35:43.511Z",
        priority: 1,
        isActive: true,
        url: "haberibul"
      }
    )
  }

  for (var subIndex = 0; subIndex < 12; subIndex++) {
    news.push(
      {
        id: subIndex,
        category: "Placeholder",
        type: "subNews",
        caption: "Haberibul.com",
        summary: "Haberibul.com",
        imgPath: "https://via.placeholder.com/300x180?text=Haberibul.com",
        imgAlt: "Haberi bul",
        content:
          "Haberi bul",
        subjects: ["haberi bul"],
        authors: ["Mustafa Çolakoğlu", "Burak Kalafat"],
        createdDate: "2020-04-23T18:25:43.511Z",
        updateDate: "2020-05-01T14:35:43.511Z",
        expressDate: "2020-05-01T14:35:43.511Z",
        priority: 1,
        isActive: true,
        url: "haberibul"
      }
    )
  }

  return news
}
