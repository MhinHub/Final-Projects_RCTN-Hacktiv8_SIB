import React from "react";
import Navbar from "./Navbar";
import Tab from "./Tab";
import Sidebar from "./Sidebar";
import SideNews from "./SideNews";

import { Footer } from "react-daisyui";


export default ({ children, title }) => {
  document.title = title;
  return (
    <React.Fragment>
      <Navbar />
      <Tab />
      {/* <Sidebar /> */}{/* karena list menunya sudah sedikit jadi tidak perlu dipakai */}
      <main>
      <SideNews />
        {children}
      </main>
      <Footer  />
    </React.Fragment>
  );
}