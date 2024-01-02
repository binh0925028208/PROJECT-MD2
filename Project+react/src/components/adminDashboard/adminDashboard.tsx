import React, { useEffect, useState } from "react";
import "./adminDashboard.css";
import { FaUserFriends } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { LuClipboardEdit } from "react-icons/lu";
import { SlSocialDropbox } from "react-icons/sl";
import { useLocation } from "react-router-dom";
import { notifySuccess } from "../../common/toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserService from "../../services/user.service";
import ProductService from "../../services/product.service";
import OrderService from "../../services/order.service";
import { IOrder, IProduct, IUser } from "../../types/interface";
import { useSelector } from "react-redux";
import AdminService from "../../services/admin.service";

const Dashboard = (): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [admin, setAdmin] = useState<IUser>();
  const idAdmin = localStorage.getItem("idUser");
  const status = useSelector((state: any) => state.update);
  const userService = new UserService();
  const productService = new ProductService();
  const orderService = new OrderService();
  const adminService = new AdminService();
  let location: any = useLocation();

  useEffect(() => {
    const getValue = async () => {
      const user = await userService.getAllUsers();
      const product = await productService.getAllProduct();
      const order = await orderService.getAllOrders();
      const admin = await adminService.getAdminById(Number(idAdmin));
      setUsers(user);
      setProducts(product);
      setOrders(order);
      setAdmin(admin);
    };
    getValue();
  }, [status]);
  useEffect(() => {
    if (location.state?.role === 3) {
      notifySuccess(`Welcome Admin ${location.state.fullName}`);
    }
    if (location.state?.role === 1) {
      notifySuccess(`Welcome Moderator ${location.state.fullName}`);
    }
  }, []);
  return (
    <section className="dashboard">
      <div className="admin_display_detail">
        <div className="admin_button">
          <div className="admin_box_1">
            <div className="admin_box_detail">
              <h3>Orders</h3>
              <div className="admin_mini_box_infor">
                <p>Total :</p>
                <p>{orders.length}</p>
              </div>
            </div>
            <div className="admin_box_icon">
              <i className="fa-solid fa-cart-arrow-down" />
            </div>
          </div>
          <div className="admin_box_2">
            <div className="admin_box_detail">
              <h3>Users</h3>
              <div className="admin_mini_box_infor">
                <p>Total :</p>
                <p>{users.length}</p>
              </div>
            </div>
            <div className="admin_box_icon">
              <i className="fa-solid fa-user-group" />
            </div>
          </div>
          <div className="admin_box_3">
            <div className="admin_box_detail">
              <h3>Products</h3>
              <div className="admin_mini_box_infor">
                <p>Total :</p>
                <p>{products.length}</p>
              </div>
            </div>
            <div className="admin_box_icon">
              <i className="fa-solid fa-box" />
            </div>
          </div>
        </div>
        {/* <div className="admin_button">
          <div className="admin_box_4">
            <div className="admin_box_detail">
              <h3>Revenue</h3>
              <div className="admin_mini_box_infor">
                <p>Total :</p>
                <p id="totalRevenue" />
              </div>
            </div>
            <div className="admin_box_icon">
              <i className="fa-solid fa-sack-dollar" />
            </div>
          </div>
          <div className="admin_box_5">
            <div className="admin_box_detail">
              <h3>Stock</h3>
              <div className="admin_mini_box_infor">
                <p>Total :</p>
                <p>{products.length}</p>
              </div>
            </div>
            <div className="admin_box_icon">
              <i className="fa-solid fa-boxes-stacked" />
            </div>
          </div> 
           <div className="admin_box_6">
            <div className="admin_box_detail">
              <h3>Out-stock:</h3>
              <div className="admin_mini_box_infor">
                <p>Total :</p>
                <p id="totalOutStocks" />
              </div>
            </div>
            <div className="admin_box_icon">
              <i className="fa-solid fa-dolly" />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Dashboard;
