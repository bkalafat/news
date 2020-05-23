export const NEWS_TYPE = "news"
export const SUB_NEWS_TYPE = "subNews"
export const UPLOAD_FILE_PATH =
  "https://us-central1-news-26417.cloudfunctions.net/uploadFile"
export const DEFAULT_NEWS = {
  news: {
    type: "news",
    category: "",
    caption: "",
    summary: "",
    content:
      "<h2>(Başlık)</h2<p></p><p></p><p>İçerik oluştur...</p><p>(Kopyala yapıştır ile direk sayfa alabilirsin)</p><p></p><p></p>",
    isActive: true,
    priority: 1,
    imgPath: "https://via.placeholder.com/500x250?text=HABER",
    imgAlt: "haber"
  }
}

export const Categories = Object.freeze({
  GENERAL: { key: "General", value: "Son Dakika" },
  SPORT: { key: "Sport", value: "Spor" },
  MAGAZINE: { key: "magazine", value: "Magazin" },
  TECH: { key: "Tech", value: "Teknoloji" },
  HEALTH: { key: "Health", value: "Sağlık" },
  RECIPE: { key: "Recipe", value: "Tarif" },
  LOCAL: { key: "Local", value: "Yöresel" }
})
