import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images";
import MasukComp from "./MasukComp";

const Navbar = () => {
  const [modalLogin, setModalLogin] = useState(false);

  const handleModalOn = () => {
    setModalLogin(true);
  };

  return (
    <div className="shadow-md">
      <div className="navbar bg-base-100 py-4">
        <div className="flex-1 pl-5">
          <Link to="/" className="flex">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex w-full max-w-3xl flex-col">
          <div className="flex w-full items-center">
            <div className="form-control w-full pr-5">
              <input
                type="text"
                placeholder="Cari produk"
                className="input-bordered input w-full"
              />
            </div>
            <div className="dropdown-end dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle btn">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn-primary btn-block btn">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-5">
              <label
                htmlFor="my-modal-3"
                className="hover:bg-[#D63B0C] btn bg-[#EF6136]"
                onClick={() => handleModalOn()}
              >
                Masuk
              </label>
            </div>
          </div>
          <div className="mr-auto mt-3 hidden space-x-4 sm:flex ">
            {[
              "mens clothing",
              "womens clothing",
              "jewelery",
              "electronics",
            ].map((item, index) => (
              <Link to="/products" key={index} className="text-[#626262]">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <MasukComp />

      {modalLogin ? (
        <MasukComp checked={true} />
      ) : (
        // <p>login</p>
        // <p>login keluar</p>
        <MasukComp checked={false} />
      )}
    </div>
  );
};

export default Navbar;
