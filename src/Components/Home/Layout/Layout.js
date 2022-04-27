import React from "react";
import Header from "./Header.Js";
import Footer from "./Footer.Js";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
export default Layout;
