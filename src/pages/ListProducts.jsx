import React from "react";
import Card from "../components/Card";

const ListProducts = () => {
  return (
    <div className="p-10">
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
        <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
          <Card />
        </div>
        <div className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-3">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
