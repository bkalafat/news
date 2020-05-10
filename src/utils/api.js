import { getEnvironmentUrl } from "./helper";

export function createNews(news) {
  news.createDate = new Date().toISOString();
  news.updateDate = new Date().toISOString();
  news.expireDate = new Date().toISOString();

  return fetch(getEnvironmentUrl() + "news", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(news),
  })
    .then((res) => res.json())
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}

export function updateNews(news) {
  news.updateDate = new Date().toISOString();

  fetch(getEnvironmentUrl() + "news/" + news.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(news),
  })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
}
