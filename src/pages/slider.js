import React from "react";
import { useState } from "react";
import './slider.css'

function Slider () {
  let images = [
    "https://funart.top/uploads/posts/2021-03/1617041523_45-p-oboi-krasivie-foto-prirodi-52.jpg",
    "https://mirpozitiva.ru/wp-content/uploads/2019/11/1477469601_nature_gora.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg",
    "https://pibig.info/uploads/posts/2021-06/1623548137_46-pibig_info-p-samaya-krasivaya-priroda-v-mire-priroda-kr-47.jpg",
    "https://w.forfun.com/fetch/13/13bdc6be06334e59bb4a77663e67eb88.jpeg",
  ];
  let [index, setIndex] = useState(0);
  let len = images.length - 1;

  function toggleNext() {
    if (index < len) setIndex(index + 1);
  }

  function togglePrev() {
    if (index > 0) setIndex(index - 1);
  }

  function handelDots(image) {
    let ind = images.indexOf(image);
    setIndex(ind);
  }
  
  return (
    <div id="slider-content">
      <h1>Beautiful Nature</h1>
      <div id="slider">
        <div id="wrapper">
          <span onClick={togglePrev} className="left">
            &lt;
          </span>
          <img src={images[index]} alt="" />
          <span onClick={toggleNext} className="right">
            &gt;
          </span>
        </div>
      </div>
      <div id="navigation">
        {images.map((image) => {
          return <span onClick={() => handelDots(image)} id="dot"></span>;
        })}
      </div>
    </div>
  );
}

export default Slider;
