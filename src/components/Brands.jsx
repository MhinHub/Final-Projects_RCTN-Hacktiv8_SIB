import React from "react";
import {
  Brand1,
  Brand10,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
  Brand9,
} from "../assets/dummy";

function Brands() {
  return (
    <div className="carousel-center carousel rounded-box  space-x-4">
      <div className="carousel-item">
        <img src={Brand1} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={Brand2} className="rounded-box" />
      </div>

      <div className="carousel-item">
        <img src={Brand3} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={Brand4} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={Brand5} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={Brand6} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={Brand7} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={Brand8} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={Brand9} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={Brand10} className="rounded-box" />
      </div>
    </div>
  );
}

export default Brands;
