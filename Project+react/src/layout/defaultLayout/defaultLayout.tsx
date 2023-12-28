import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sideMenu/sideMenu";
import "./defaultLayout.css";
import Footer from "../../components/footer/footer";
import HomeVideo from "../../components/homeVideo/homeVideo";

interface Props {
  child: JSX.Element;
}

export default function DefaultLayout(props: Props) {
  return (
    <div className="wrapper_layout">
      <div className="header_layout">
        <Header />
      </div>
      <div className="wrapper_layout_body">
        <div className="content_layout">{props.child}</div>
      </div>
      <div className="footer_layout">
        <HomeVideo />
        <Footer />
      </div>
    </div>
  );
}
