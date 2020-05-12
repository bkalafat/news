export const NEWS_TYPE = 'news'
export const SUB_NEWS_TYPE = 'subNews'
export const UPLOAD_FILE_PATH = "https://us-central1-news-26417.cloudfunctions.net/uploadFile"
export const DEFAULT_NEWS = {
    news: {
      type: "news",
      category: "",
      caption: "",
      summary: "",
      content: "",
      isActive: true,
      priority: 88,
      imgPath: "https://via.placeholder.com/500x250?text=HABER",
      imgAlt: "haber"
    }
  }