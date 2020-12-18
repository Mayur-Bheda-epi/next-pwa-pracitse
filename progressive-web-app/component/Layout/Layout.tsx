import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <a
        href="#"
        id="back-to-top"
        title="Back to top"
        style={{ display: "none" }}
      >
        &uarr;
      </a>
    </>
  );
}
