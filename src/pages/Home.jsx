import React from "react";
import { Slider1, Slider2 } from "../assets/images";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="w-full pt-5">
      <div className="px-16">
        <Carousel />
      </div>
      <div className="pl-5">
        <h1 className="text-lg">Produk Terlaris</h1>
        <div className="grid grid-cols-4 gap-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
