import Navbar from "./Navbar";
import Tab from "./Tab";

import { Footer } from "react-daisyui";

import React from "react";

export default ({ children }) => {
  return (
    <>
      <Navbar />
      <Tab />
      <main>{children}</main>
      <Footer  />
    </>
  );
}