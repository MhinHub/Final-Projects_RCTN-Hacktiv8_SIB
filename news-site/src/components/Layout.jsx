import Navbar from "./Navbar";
import Tab from "./Tab";
import Sidebar from "./Sidebar";
import SideNews from "./SideNews";

import { Footer } from "react-daisyui";

import React from "react";

export default ({ children }) => {
  return (
    <>
      <Navbar />
      <Tab />
      <Sidebar />
      <main>
      <SideNews />
        {children}
      </main>
      <Footer  />
    </>
  );
}