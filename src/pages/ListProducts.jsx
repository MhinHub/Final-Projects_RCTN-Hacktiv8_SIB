import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { getListProducts } from "../redux/actions/productAction";

const ListProducts = () => {
  const {
    getListProductsResult,
    getListProductsLoading,
    getListProductsError,
  } = useSelector((state) => state.ProductsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
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
