import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SideNews from "./SideNews";

export default ({ children, title }) => {
  document.title = title;
  return (
    <React.Fragment>
      <Navbar />
      {/* <Sidebar /> */}
      {/* karena list menunya sudah sedikit jadi tidak perlu dipakai */}
      <main>
        {/* <SideNews /> */} {/* todo */}
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};
