export const NEWS_TYPE = "news"
export const HEADLINE = "headline"
export const SUB_NEWS_TYPE = "subNews"
export const UPLOAD_FILE_PATH =
  "https://us-central1-news-26417.cloudfunctions.net/uploadFile"
export const DEFAULT_NEWS = {
  news: {
    type: "news",
    category: "General",
    caption: "new",
    summary: "new",
    content:
      "<h2>(Başlık)</h2<p></p><p></p><p>İçerik oluştur...</p><p>(Kopyala yapıştır ile direk sayfa alabilirsin)</p><p></p><p></p>",
    isActive: true,
    priority: 1,
    imgPath: "https://via.placeholder.com/500x250?text=HABER",
    imgAlt: "haber",
    url: "new/new"
  }
}

export const Categories = Object.freeze({
  GENERAL: { key: "General", value: "Gündem", to: "gundem" },
  ECONOMY: { key: "Economy", value: "Ekonomi", to: "ekonomi" },
  SPORT: { key: "Sport", value: "Spor", to: "spor" },
  MAGAZINE: { key: "magazine", value: "Magazin", to: "magazin" },
  TECH: { key: "Tech", value: "Teknoloji", to: "teknoloji" },
  HEALTH: { key: "Health", value: "Sağlık", to: "saglik" },
  RECIPE: { key: "Recipe", value: "Tarif", to: "tarif" },
  LOCAL: { key: "Local", value: "Yerel", to: "yerel" }
})
