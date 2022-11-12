import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getLogin } from "../redux/actions/authSlice";
import { useDispatch } from "react-redux";
import login from "../redux/reducers/login";

function MasukComp({ check }) {
  const [checked, setChecked] = useState(check);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = () => {
    // console.log(email, password);
    dispatch(getLogin(email,password));
  };

  const { getLoginResult, getLoginLoading, getLoginError } = useSelector(
    (state) => state.LoginReducer
  );

  // useEffect(() => {
  //   console.log("1. use effect component did mount");

  //   dispatch(getLogin());
  // }, [dispatch]);

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
          <div>
            <label className="font-regular">Email</label>
            <input
              className="input-bordered input mt-3 mb-5 w-full"
              type="text"
              placeholder="Masukan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="font-regular">Password</label>
            <input
              className="input-bordered input mt-3 w-full"
              type="password"
              placeholder="Masukan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn-primary btn mt-8 w-full" onClick={handleLogin}>
            Masuk
          </button>
        </div>
      </div>
    </>
  );
}

export default MasukComp;
