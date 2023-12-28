import React, { useEffect, useState } from "react";
import Banner from "../banner/banner";
import SideMenu from "../sideMenu/sideMenu";
import "./homeMain.css";
import FacebookComment from "../facebookComment/fbComment";
import ProductList from "../renderProduct/renderProduct";

const HomeMain = () => {
  const [selectedScale, setSelectedScale] = useState("");
  return (
    <main className="web_main">
      <section className="banner-section">
        <Banner />
      </section>
      <section className="web_body">
        <SideMenu setSelectedScale={setSelectedScale} />
        <div className="store">
          {/* <div className="store_title_after_search">
            <h1 id="title_product" />
            <div className="sort_button" id="showSortBtn"></div>
          </div> */}
          <div className="store_sort">
            <div className="store_new">
              <div className="store_title">
                <i
                  className="fa-solid fa-arrow-down"
                  style={{ color: "red" }}
                />
                <h2>Our products :</h2>
              </div>
              <div className="store_product_list">
                <ProductList selectedScale={selectedScale} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeMain;
