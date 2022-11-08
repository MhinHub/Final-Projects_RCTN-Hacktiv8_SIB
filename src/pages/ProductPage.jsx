import React from "react";
import { Dummy1 } from "../assets/dummy";
import { AiFillStar } from "react-icons/ai";

const ProductPage = () => {
  return (
    <div>
      <div class="container mx-auto px-5 py-24">
        <div class="mx-auto flex flex-wrap lg:w-4/5">
          <img
            alt="ecommerce"
            class="w-full rounded border border-gray-200 object-cover object-center lg:w-1/2"
            src={Dummy1}
          />
          <div class="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h1 class="mb-1 text-3xl font-semibold text-gray-900">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h1>
            <h2 class="title-font my-3 text-sm tracking-widest text-gray-500">
              men's clothing
            </h2>
            <div class="mb-4 flex">
              <span class="flex items-center">
                <AiFillStar color="#FFD600" size={22} />
                <span class="ml-3 text-gray-600">4.3 </span>
                <span class="ml-3 text-gray-600">| </span>
                <span class="ml-3 text-gray-600">23 Ulasan </span>
              </span>
            </div>
            <span class="title-font text-2xl font-bold text-gray-900">
              $58.00
            </span>
            <div class="mt-2 mb-5 flex items-center border-b-2 border-gray-200 pb-5"></div>
            <p class="leading-relaxed">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
            

            <div class="mt-10 flex">
              <button class="flex rounded border-0 bg-[#EF6136] py-2 px-6 text-white hover:bg-[#D63B0C] focus:outline-none">
                + Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
