import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SideNews from "./SideNews";

import { Footer } from "react-daisyui";


export default ({ children, title}) => {
  document.title = title;
  return (
    <React.Fragment>
      <Navbar />
      {/* <Sidebar /> */}{/* karena list menunya sudah sedikit jadi tidak perlu dipakai */}
      <main>
      {/* <SideNews /> */} {/* todo */}
        {children}
      </main>
      <Footer  />
    </React.Fragment>
  );
}