import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel }  from "react-responsive-carousel";
import Photo from "./Photo";

function Slider() {
  const [items] = useState([
    { id: 1, caption:"Korona Sayıları", path: "https://via.placeholder.com/600x300?text=KORONA" },
    { id: 2, caption:"Libya'da Hafter milislerine ikmal yapan yakıt tankeri ile iki askeri araç vuruldu", path: "https://via.placeholder.com/600x300?text=LİBYA" },
    { id: 3, caption:"İRAN'da korona sayıları", path: "https://via.placeholder.com/600x300?text=İRAN" },
    { id: 4, caption:"Test4 Başlık", path: "https://via.placeholder.com/600x300?text=TEST4" },
    { id: 5, caption:"Test5 Başlık", path: "https://via.placeholder.com/600x300?text=TEST5" },
    { id: 6, caption:"Test6 Başlık", path: "https://via.placeholder.com/600x300?text=TEST6" },
    { id: 7, caption:"Test7 Başlık", path: "https://via.placeholder.com/600x300?text=TEST7" },
    { id: 8, caption:"Test8 Başlık", path: "https://via.placeholder.com/600x300?text=TEST8" },
    { id: 9, caption:"Test9 Başlık", path: "https://via.placeholder.com/600x300?text=TEST9" },
    { id: 10, caption:"Test10 Başlık", path: "https://via.placeholder.com/600x300?text=TEST10" },
  ]);

  return (
    <div className="slider">
      <Carousel autoPlay>
        {items.map((item) => (
          <div key={item.id}><Photo item={item} /></div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;