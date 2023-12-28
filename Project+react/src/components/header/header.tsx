import "./header.css";
import { CiUser } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { PiClockThin } from "react-icons/pi";
import { PiPhoneCallThin } from "react-icons/pi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
const Header = () => {
  return (
    <div id="header">
      <section className="header">
        <div className="header_info">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/project-shop-gundam.appspot.com/o/img%20home%2Fpngfind.com-gundam-head-png-4840508.png?alt=media&token=c316061b-be78-4e2b-a43e-0d5771a6f224"
            className="header_logo"
            alt=""
          />
          <div className="header_search">
            <div className="search_bar_box">
              <input
                // oninput="searchFeature()"
                type="text"
                placeholder="What are you looking for?"
                className="search_bar"
                id="search_feature"
              />
              <ul id="searchList" />
              <a
                href="#mini_search"
                className="search_button"
                // onclick="searchClick()"
              >
                <IoMdSearch className="reactIcon" />
              </a>
            </div>
          </div>
          <div className="header_contract">
            <div className="header_information">
              <PiClockThin className="reactIcon" />
              <p>08:00 - 17:00</p>
            </div>
            <div className="header_information">
              <PiPhoneCallThin className="reactIcon" />
              <p>0925 028 208</p>
            </div>
          </div>
          <div className="header_user_services">
            <div className="header_border" />
            <div className="header_cart toolTip">
              <PiShoppingCartSimpleLight />
              <p id="cart_quantity" />
              <span className="toolTipText"> Your cart</span>
            </div>
            <div className="header_user toolTip" id="user_avatar">
              <CiUser
              // onclick="onLogin()"
              />
              <span className="toolTipText"> User</span>
            </div>
          </div>
        </div>
        <div className="header_nav">
          <div className="nav home">
            <a href="../../index.html">HOME</a>
          </div>
          <div className="nav"> Introduce</div>
          <div className="nav"> How to buy</div>
          <div className="nav"> Video</div>
          <div className="nav"> Contract</div>
          <div className="nav"> News</div>
        </div>
      </section>
    </div>
  );
};
export default Header;
