import "./userPage.css";

const UserPage = () => {
  return (
    <div>
      <>
        <section className="historyCart">
          <div className="user_setting_box" id="user_info_box" />
          <div>
            <div className="history_cart_body">
              <table className="history_cart_box">
                <thead>
                  <tr className="history_box_head">
                    <th className="h_id">
                      <p>STT</p>
                    </th>
                    <th className="h_cart">
                      <p>CART</p>
                    </th>
                    <th className="h_price">
                      <p>TOTAL PRICES</p>
                    </th>
                    <th className="h_ship">
                      <p>SHIPPING</p>
                    </th>
                    <th className="h_date">
                      <p>DATE</p>
                    </th>
                    <th className="h_delete">
                      <p>OPTION</p>
                    </th>
                  </tr>
                </thead>
                <tbody id="history_of_user" />
              </table>
            </div>
            <img
              src="../../Assets/img/empty_cart.png"
              alt=""
              className="empty_cart_img"
            />
          </div>
        </section>
        <section id="showUpCart">
          <div className="showUpCartBody" id="history_box">
            <button
              className="closeBtn"
              //  onclick="onClosePopUp()"
            >
              <i className="fa-solid fa-chevron-left fa-beat-fade" />
            </button>
            <div className="showUpCartInfor">
              <table>
                <thead>
                  <tr className="showUpCartInfo_head">
                    <th className="show_img">
                      <p>
                        <strong>IMAGE</strong>
                      </p>
                    </th>
                    <th className="show_name">
                      <p>
                        <strong>NAME</strong>
                      </p>
                    </th>
                    <th className="show_quantity">
                      <p>
                        <strong>QUANTITY</strong>
                      </p>
                    </th>
                    <th className="show_brand">
                      <p>
                        <strong>BRAND</strong>
                      </p>
                    </th>
                    <th className="show_price">
                      <p>
                        <strong>PRICE</strong>
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody id="history_table" />
              </table>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default UserPage;
