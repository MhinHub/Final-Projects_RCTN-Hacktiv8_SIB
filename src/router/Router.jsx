import React from "react";
import { Route, Routes } from "react-router-dom";
import ListProducts from "../pages/ListProducts.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import Home from "../pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/detail-product" element={<ProductPage />} /> */}
      <Route path="/products" element={<ListProducts />} />
      <Route path="/detailproduct" element={<ProductPage />} />

      {/* <Route path="/" element={<ProductPage />} /> */}
      <Route path="/" element={<ListProducts />} />
    </Routes>
  );
}
