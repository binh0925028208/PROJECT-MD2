import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import "./adminHeader.css";
const AdminHeader = () => {
  return (
    <header className="admin_head">
      <button className="admin_search_button">
        <input
          type="text"
          className="admin_search_input"
          placeholder="Search..."
        />
        <IoIosSearch color="#50556A" />
      </button>
      <div className="admin_tool">
        {/* <IoPeople />
        <IoNotifications /> */}
        <div className="admin_avatar">B</div>
      </div>
    </header>
  );
};

export default AdminHeader;
