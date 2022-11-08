import React from "react";
import { Slider1, Slider2 } from "../assets/images";
import Brands from "../components/Brands";
import Card from "../components/Card";
import CardCategories from "../components/CardCategories";
import HomeCarousel from "../components/HomeCarousel";
import Promo from "../components/Promo";

export default function Home() {
  return (
    <div className="w-full pt-5 md:px-4 lg:px-12">
      <HomeCarousel />
      <h1 className="mt-10 mb-6 font-bold">Produk Terlaris</h1>
      <div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
            <Card />
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
            <Card />
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
            <Card />
          </div>
          <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
            <Card />
          </div>
        </div>
      </div>
      <div className="mt-6 bg-[#EF6136] ">
        <h1 className="font-sans">Kategori</h1>
        <div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
              <CardCategories />
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
              <CardCategories />
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
              <CardCategories />
            </div>
            <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
              <CardCategories />
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-10 mb-6 font-bold">Shop by Brands</h1>
      <Brands />
      <Promo />
    </div>
  );
}
