import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./router/Router";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  );
}

export default App;
