import "./userCartDetail.css";

const UserCartDetail = () => {
  return (
    <div>
      <>
        <section className="prod" />
        <section className="cart">
          <div className="cart_product">
            <table className="cart_product_head">
              <tbody>
                <tr>
                  <th>
                    <h4>PRODUCT</h4>
                  </th>
                  <th>
                    <h4>NAME</h4>
                  </th>
                  <th>
                    <h4>QUANTITY</h4>
                  </th>
                  <th>
                    <h4>DISCOUNT</h4>
                  </th>
                  <th>
                    <h4>PRICE</h4>
                  </th>
                </tr>
              </tbody>
              <tbody id="cart_list" />
            </table>
            <img
              src="../../Assets/img/empty_cart.png"
              alt=""
              style={{ marginLeft: 200 }}
              id="emptyImg"
            />
          </div>
          <div className="cart_customer" />
          <div className="cart_checkout">
            <h4>CHECKOUT INFORMATION</h4>
            <div className="checkout_body">
              {/* <div class="user_box">
      <i class="fa-solid fa-user"></i>
      <input
        type="text"
        id="user_fullName"
        placeholder="Your first-Last name..."
      />
    </div> */}
              <div className="user_box">
                <i className="fa-solid fa-location-dot" />
                <input
                  type="text"
                  id="user_address"
                  placeholder="Your address..."
                  minLength={8}
                />
              </div>
              <div className="user_box">
                <div className="total_price_box">
                  <p>Your Total:</p>
                  <p
                    id="total_price_of_products"
                    style={{ color: "rgb(23, 101, 236)" }}
                  >
                    $ 0
                  </p>
                </div>
              </div>
              {/* <div class="user_box">
      <i class="fa-solid fa-phone"></i>
      <input type="text" id="user_Phone" placeholder="Phone Number..." />
    </div> */}
              {/* <button class="wayToPay tranfer">Transfer Upfront</button> */}
              <button
                className="wayToPay cod"
                //   onclick="onConfirmPay()"
              >
                COD Payment
              </button>
            </div>
          </div>
        </section>
        <div className="total_price_cart">
          <p>Total :</p>
          <p id="totalPriceOfCart" style={{ color: "rgb(23, 101, 236)" }}>
            $ 0
          </p>
        </div>
      </>
    </div>
  );
};

export default UserCartDetail;
