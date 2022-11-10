import React from "react";
import { Dummy1 } from "../assets/dummy";
import Card from "../components/Card";

const ListProducts = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-12 gap-6">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <Card
            key={index}
            img={Dummy1}
            category="men's clothing"
            title="Foldsack No. 1 Backpack, Fits 15 Laptops"
            rate="4.3"
            count="123"
            price={109.95}
          />
        ))}
      </div>
    </div>
  );
};

export default ListProducts;
