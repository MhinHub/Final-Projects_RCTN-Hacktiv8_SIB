import React from "react";
import { Dummy1 } from "../assets/dummy";
import {
  ImageCategories1,
  ImageCategories2,
  ImageCategories3,
  ImageCategories4,
} from "../assets/images";
import Brands from "../components/Brands";
import Card from "../components/Card";
import CardCategories from "../components/CardCategories";
import HomeCarousel from "../components/HomeCarousel";
import Promo from "../components/Promo";
import { getProducts } from "../api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProducts } from "../redux/actions/productAction";
import products from "../redux/reducers/products";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    getListProductsResult,
    getListProductsLoading,
    getListProductsError,
  } = useSelector((state) => state.ProductsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // panggil acyion getListProducts
    console.log("1. use effect component did mount");

    dispatch(getListProducts());
  }, [dispatch]);

  return (
    <div className="w-full pt-5 md:px-4 lg:px-12">
      <HomeCarousel />
      <h1 className="mt-10 mb-6 font-bold">Produk Terlaris</h1>

      <div className="grid grid-cols-12 gap-6">
        {getListProductsResult ? (
          getListProductsResult.map((products) => {
            return (
              <Card
                key={products.id}
                img={products.image}
                title={products.title}
                category={products.category}
                rate={products.rating.rate}
                count={products.rating.count}
                price={products.price}
              />
            );
          })
        ) : getListProductsLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{getListProductsError ? getListProductsError : "Data Kosong"}</p>
        )}
      </div>

      <div>
        <div className="mt-6 rounded-xl bg-[#EF6136] pb-6">
          <h1 className=" pl-6 font-sans text-white">Kategori</h1>
          <div>
            <div className="grid grid-cols-12 gap-4 px-6">
              <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
                <CardCategories img={ImageCategories1} title="men's clothing" />
              </div>
              <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
                <CardCategories img={ImageCategories2} title="men's clothing" />
              </div>
              <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
                <CardCategories img={ImageCategories3} title="men's clothing" />
              </div>
              <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
                <CardCategories img={ImageCategories4} title="men's clothing" />
              </div>
            </div>
          </div>
        </div>
        <h1 className="mt-10 mb-6 font-bold">Shop by Brands</h1>
        <Brands />
        <Promo />
      </div>
    </div>
  );
};

export default Home;
