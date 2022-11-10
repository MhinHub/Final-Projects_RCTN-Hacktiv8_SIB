import React from "react";
import { Dummy1 } from "../assets/dummy";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProducts } from "../redux/actions/productAction";
import products from "../redux/reducers/products";

const ListProducts = () => {
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
    <div>
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
    </div>
  );
};

export default ListProducts;
