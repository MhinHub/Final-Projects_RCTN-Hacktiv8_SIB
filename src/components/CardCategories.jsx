import React from "react";

function CardCategories({ img, title }) {
  return (
    <div className="relative">
      <img src={img} alt="" className="w-full rounded-md object-cover  " />
      <p className="absolute bottom-4 left-5 text-white drop-shadow">{title}</p>
    </div>
  );
}

export default CardCategories;
