import React from "react";
import { Dummy1 } from "../assets/dummy";
import { BsCartPlus } from "react-icons/bs";
import { AiFillStar, AiFillStepForward } from "react-icons/ai";

function Card() {
  return (
    <div className="w-full max-w-sm rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <img
          className="w-full rounded-t-lg p-0"
          src={Dummy1}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="font-sans text-lg font-semibold tracking-tight text-['#171520'] md:text-xl lg:text-xl">
            Foldsack No. 1 Backpack, Fits 15 Laptops
          </h5>
          <h5 className="font-sans text-sm tracking-tight text-gray-400 ">
            men's clothing
          </h5>
        </a>
        <div className="mt-2.5 mb-2 flex items-center md:mb-3">
          <AiFillStar color="#FFD600" size={22} />
          <span className="mr-2 ml-3 rounded py-0.5 text-xs font-semibold text-['#1B4B66'] md:text-sm lg:text-base">
            3.9
          </span>
          <span className="mr-2 ml-2 rounded py-0.5 text-xs font-semibold text-['#1B4B66'] md:text-sm lg:text-base">
            43 Ulasan
          </span>
        </div>
        <div className="flex sm:items-center sm:justify-between">
          <div className="mb-1 font-sans text-lg font-semibold text-gray-900 sm:mr-3 sm:mb-0 md:text-2xl lg:text-2xl">
            $599
          </div>
          <BsCartPlus size={30} className="ml-auto w-6 md:w-10 lg:w-12" />
        </div>
      </div>
    </div>
  );
}

export default Card;
