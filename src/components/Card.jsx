import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

function Card({ img, category, title, count, rate, price, onClick }) {
  return (
    <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
      <div className="w-full max-w-sm rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
        <Link to="/detailproduct" >
          <img
            className="h-52 rounded-t-lg pl-7 lg:h-56"
            src={img}
            alt="product image"
          />
          <div>
            <h5 className="font-sans text-lg font-semibold tracking-tight text-['#171520'] md:text-xl lg:text-xl">
              {title}
            </h5>
            <h5 className="font-sans text-sm tracking-tight text-gray-400 ">
              {category}
            </h5>
          </div>
        </Link>
        <div className="px-5 pb-5">
          <div className="mt-2.5 mb-2 flex items-center md:mb-3">
            <AiFillStar color="#FFD600" size={22} />
            <span className="mr-2 ml-3 rounded py-0.5 text-xs font-semibold text-['#1B4B66'] md:text-sm lg:text-base">
              {rate}
            </span>
            <span className="mr-2 ml-2 rounded py-0.5 text-xs font-semibold text-['#1B4B66'] md:text-sm lg:text-base">
              {count} Ulasan
            </span>
          </div>
          <div className="flex sm:items-center sm:justify-between">
            <div className="mb-1 font-sans text-lg font-semibold text-gray-900 sm:mr-3 sm:mb-0 md:text-2xl lg:text-2xl">
              ${price}
            </div>
            <BsCartPlus
              size={30}
              className="ml-auto w-6 md:w-10 lg:w-12"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
