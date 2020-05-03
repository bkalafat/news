import React, { useState, useEffect } from "react";
import News from "./News"

const Content = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/news")
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
