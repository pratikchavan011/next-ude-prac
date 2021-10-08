import React from "react";

import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
