import React from "react";
import { Slider1, Slider2, Slider3 } from "../assets/images";

function Carousel() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={Slider1} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide2" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={Slider2} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide3" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={Slider3} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide1" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
