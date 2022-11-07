import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "../pages/Galery";
import ListProducts from "../pages/ListProducts";

export default function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<ListProducts />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
    </Routes>
  );
}
