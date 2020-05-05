import React, { useState, useEffect } from "react";
import News from "./News"

const Content = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsList, setNewsList] = useState([]);

  const prodUrl = "http://haberibul.northeurope.azurecontainer.io/api/"
  const devUrl = "https://localhost:5001/api/news"
  let url = devUrl

  if (process.env.NODE_ENV === 'production') {
    url = prodUrl
  }


  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setNewsList(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
  }, []);

  if (error) {
    return <div>Sayfa Yüklenemedi: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Sayfa Yükleniyor</div>;
  } else {
    return <News newsList={newsList} />;
  }
};

export default Content;
