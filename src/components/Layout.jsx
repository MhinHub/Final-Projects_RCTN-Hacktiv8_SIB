import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default ({ children, title }) => {
  document.title = title;
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};
