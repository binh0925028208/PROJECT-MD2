import React from "react";
import "./adminSidebar.css";
import { BsFillBarChartFill, BsFillBox2Fill } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { LuClipboardEdit } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div className="admin_sidebar">
      <div className="admin_logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/project-shop-gundam.appspot.com/o/img%20admin%2Flogo.png?alt=media&token=e06c6c8c-d970-4e7f-9404-7113d5c204fb"
          alt=""
        />
      </div>
      <div className="admin_category">
        <button>
          <BsFillBarChartFill /> Dashboard
        </button>
        <button>
          <IoPeopleSharp /> Customers
        </button>
        <button>
          <BsFillBox2Fill /> Products
        </button>
        <button>
          <LuClipboardEdit /> Orders
        </button>
        <button>
          <TbLogout2 /> Logout
        </button>
      </div>
    </div>
  );
};
export default AdminSidebar;
