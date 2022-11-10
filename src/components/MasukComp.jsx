import React from "react";
import { useState } from "react";

function MasukComp({ check }) {
  const [checked, setChecked] = useState(check);
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        id="my-modal-3"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative p-10">
          <label
            htmlFor="my-modal-3"
            className="btn-sm btn-circle btn absolute right-2 top-2"
            onClick={() => setModal(false)}
          >
            ✕
          </label>
          <h3 className="mb-8 text-xl font-bold ">Masuk</h3>
          {/* <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p> */}
          <div>
            <label className="font-regular">Username</label>
            <input
              type="text"
              placeholder="Masukan Username"
              className="input-bordered input mt-3 mb-5 w-full"
            />
          </div>
          <div>
            <label className="font-regular">Password</label>
            <input
              type="password"
              placeholder="Masukan Password"
              className="input-bordered input mt-3 w-full"
            />
          </div>

          <button className="btn-primary btn mt-8 w-full">Masuk</button>
        </div>
      </div>
    </>
  );
}

export default MasukComp;
