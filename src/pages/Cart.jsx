import React from "react";
import { Dummy1 } from "../assets/dummy";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div>
      <div className="breadcrumbs p-8 text-sm">
        <ul>
          <li>
            <a className="font-regular">Home</a>
          </li>
          <li>
            <a className="font-bold">Cart</a>
          </li>
        </ul>
      </div>
      <div className="my-6 flex justify-center">
        <div className="pin-r pin-y flex w-full flex-col bg-white p-8 text-gray-800 shadow-lg md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            <table className="w-full text-sm lg:text-base" cellSpacing="0">
              <thead>
                <tr className="h-12 uppercase">
                  <th className="hidden md:table-cell"></th>
                  <th className="text-left">Product</th>
                  <th className="hidden text-right md:table-cell">
                    Unit price
                  </th>
                  <th className="pl-5 text-left lg:pl-0 lg:text-right">
                    <span className="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span className="hidden lg:inline">Quantity</span>
                  </th>
                  <th className="text-right">Total price</th>
                </tr>
              </thead>
              <tbody>
                <CartItem
                  img={Dummy1}
                  title="Foldsack No. 1 Backpack, Fits 15 Laptops"
                  price="9.0"
                  totalprice="18.0"
                />
                <CartItem
                  img={Dummy1}
                  title="Foldsack No. 1 Backpack, Fits 15 Laptops"
                  price="9.0"
                  totalprice="18.0"
                />
              </tbody>
            </table>
            <hr className="mt-6 pb-6" />
            <div className="flex">
              <h2 className="font-semibold">TOTAL</h2>
              <h2 className="ml-auto font-semibold">$20.00</h2>
            </div>

            <a href="#">
              <button className="item-center focus:shadow-outline mt-6 flex w-full justify-center rounded-full bg-[#EF6136] px-10 py-3 font-medium uppercase text-white shadow hover:bg-[#D63B0C] focus:outline-none">
                <span className="mt-5px ml-2">Checkout</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
