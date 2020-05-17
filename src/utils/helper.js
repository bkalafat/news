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
  news.createDate = new Date().toISOString()
  news.updateDate = new Date().toISOString()
  news.expireDate = new Date().toISOString()

  return news
}

export const deviceBaseStyle = (
  isMobile,
  wideStyle,
  mobileStyle,
  commonStyle
) => {
  let style = commonStyle + " "
  if (isMobile) {
    style = style + mobileStyle
  } else {
    style = style + wideStyle
  }

  return style
}
