import React from "react";

const CartItem = ({ img, title, price, totalprice }) => {
  return (
    <tr>
      <td className="hidden pb-4 md:table-cell">
        <a href="#">
          <img src={img} className="w-20 rounded" alt="Thumbnail" />
        </a>
      </td>
      <td>
        <a href="#">
          <p className="mb-2 md:ml-4">{title}</p>
          <form action="" method="POST">
            <button type="submit" className="text-gray-700 md:ml-4">
              <small>(Remove item)</small>
            </button>
          </form>
        </a>
      </td>
      <td className="hidden text-right md:table-cell">
        <span className="text-sm font-medium lg:text-base">${price}</span>
      </td>
      <td className="mt-6 justify-center md:flex md:justify-end">
        <div className="h-10 w-20">
          <div className="relative flex h-8 w-full flex-row">
            <input
              type="number"
              className="w-full bg-gray-200 text-center font-semibold text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none"
            />
          </div>
        </div>
      </td>

      <td className="text-right">
        <span className="text-sm font-medium lg:text-base">${totalprice}</span>
      </td>
    </tr>
  );
};

export default CartItem;
