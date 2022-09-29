import Navbar from "./Navbar";
import Tab from "./Tab";

import { Footer } from "react-daisyui";

import React from "react";

export default ({ children, title }) => {
  return (
    <>
      {/* <head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/vite.png" />
      </head> */}
      <Navbar />
      <Tab />
      <main>{children}</main>
      <Footer  />
    </>
  );
}