import React from "react";
import { PromoFacepacks, PromoMakeup, PromoSkincare } from "../assets/images";

const Promo = () => {
  return (
    <div className=" mt-10">
      <div className="mb-4">
        <img src={PromoMakeup} alt="" className="rounded-xl" />
      </div>
      <div className="mb-3 md:flex md:space-x-4 md:px-4">
        <img
          src={PromoSkincare}
          alt=""
          className="mb-4 rounded-md md:mb-0 md:w-1/2"
        />
        <img src={PromoFacepacks} alt="" className="rounded-md md:w-1/2" />
      </div>
    </div>
  );
};

export default Promo;
