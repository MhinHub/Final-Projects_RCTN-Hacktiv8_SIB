import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/images";
import MasukComp from "./MasukComp";
import { BsCartFill } from "react-icons/bs";

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
              <label
                tabIndex={0}
                className="badge btn-ghost badge-sm btn-circle btn"
              >
                <div className="indicator">
                  <BsCartFill color="#EF6136" size={23} />
                  <span className="badge:sm badge indicator-item text-slate-600 ">
                    8
                  </span>
                </div>
              </label>
            </div>
            <div className="px-5">
              <label
                htmlFor="my-modal-3"
                className="btn bg-[#EF6136] hover:bg-[#D63B0C]"
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
