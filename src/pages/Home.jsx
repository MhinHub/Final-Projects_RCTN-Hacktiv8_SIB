import React from "react";
import { Slider1, Slider2 } from "../assets/images";
import Brands from "../components/Brands";
import Card from "../components/Card";
import CardCategories from "../components/CardCategories";
import HomeCarousel from "../components/HomeCarousel";

export default function Home() {
  return (
    <div className="w-full pt-5 md:px-4 lg:px-12">
      <HomeCarousel />
      <h1 className="mb-6 font-bold">Produk Terlaris</h1>
      <div className="">
        <Card />
      </div>
      <div className="bg-[#EF6136]">
        <h1 className="font-sans ">Kategori</h1>
        <div>
          <CardCategories />
        </div>
      </div>
      <h1 className="mb-6 font-bold">Shop by Brands</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, illo!
      </p>
      <Brands />
    </div>
  );
}
