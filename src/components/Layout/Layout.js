import React from "react";
// import Footer from "./Footer";
import Header from "./Header";
import { useRef } from "react";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
//6488cbbacc26a871b0225767
//WID=> 1h2r5nl3f
const Layout = ({ children }) => {
  const tawkMessengerRef = useRef();

  return (
    <>
      <Header />
      <div style={{ margin: "20px" }}>{children}</div>
      {/* <button onClick={handleMinimize}> Minimize the Chat </button> */}

      <TawkMessengerReact
        propertyId="6488cbbacc26a871b0225767"
        widgetId="1h2r5nl3f"
        ref={tawkMessengerRef} />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
