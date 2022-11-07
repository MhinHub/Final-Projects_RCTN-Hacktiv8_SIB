import React from "react";
import { ImageCategories1 } from "../assets/images";

function CardCategories() {
  return (
    <div className="relative px-5 ">
      <img src={ImageCategories1} alt="" className="rounded-md object-cover" />
      <p className="absolute bottom-4 left-10">men's clothing</p>
    </div>
  );
}

export default CardCategories;
