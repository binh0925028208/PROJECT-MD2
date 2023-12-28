import "./productDetail.css";

const ProductDetail = () => {
  return (
    <div>
      <>
        <section className="prod">
          <div className="prod_main">
            <div className="prod_box1">
              <img src="../${newProductDetail.img}" alt="" />
            </div>
            <div className="prod_infor">
              <h2>
                ${"{"}newProductDetail.productName{"}"}
              </h2>
              <div className="prod_miniborder" />
              <div className="prod_price">
                <p>
                  $ ${"{"}newProductDetail.price{"}"}
                </p>
              </div>
              <div className="prod_infor_detail">
                <p>
                  <strong>Brand:</strong> ${"{"}newProductDetail.brand{"}"}
                </p>
                <p>
                  <strong>Made in:</strong> japan
                </p>
                <p>
                  <strong>Scale:</strong> ${"{"}newProductDetail.scaleDetail
                  {"}"}
                </p>
                <p>
                  <strong>Stock:</strong> ${"{"}newProductDetail.stock{"}"}
                </p>
                <p>
                  <strong>Description:</strong>
                </p>
                <p>
                  {" "}
                  ${"{"}newProductDetail.desc{"}"}
                </p>
                <p>You can pre-order</p>
              </div>
              <button className="buyBtn">Add to cart</button>
              <div className="prod_miniborder" />
              <div className="pro_tagMenu">
                <a href=""> Gundam/</a>
                <a href="">
                  {" "}
                  ${"{"}newProductDetail.scaleDetail{"}"}/
                </a>
              </div>
              <div className="prod_social">
                <i className="fa-brands fa-facebook" />
                <i className="fa-brands fa-instagram" />
                <i className="fa-brands fa-tiktok" />
                <i className="fa-brands fa-twitter" />
                <i className="fa-brands fa-youtube" />
              </div>
            </div>
          </div>
        </section>
        <div className="border_line" />
        <section className="familiar_prod">
          <div className="familiar_title">
            <h4>PEOPLE ALSO LIKE :</h4>
          </div>
          <div className="familiar_product_line" id="storeBody" />
        </section>
      </>
    </div>
  );
};

export default ProductDetail;
