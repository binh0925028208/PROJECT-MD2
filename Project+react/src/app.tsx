import React, { useEffect, useState } from "react";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toastError, toastSuccess } from "./utils/toast";
import { ToastContainer } from "react-toastify";
import DefaultLayout from "./layout/defaultLayout/defaultLayout";
import HomeMain from "./components/homeMain/homeMain";
import ProductDetail from "./components/productDetail/productDetail";
import UserCartDetail from "./components/userCartDetail/userCartDetail";
import UserPage from "./components/userPage/userPage";
import { useDispatch, useSelector } from "react-redux";
import LoginLayout from "./layout/loginLayout/loginLayout";
import AdminLayout from "./layout/adminLayout/adminLayout";
import AdminDashboard from "./components/adminDashboard/adminDashboard";
import AdminLoginPage from "./components/adminLoginPage/adminLoginPage";
import AdminOrderPage from "./components/adminOrderPage/adminOrderPage";
import AdminProductPage from "./components/adminProductPage/adminProductPage";
import AdminUserPage from "./components/adminUserPage/adminUserPage";
import { request } from "graphql-request";
function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<DefaultLayout child={<HomeMain />} />} />
        <Route
          path="/adminPage"
          element={<AdminLayout child={<AdminDashboard />} />}
        />
        <Route
          path="/product"
          element={<DefaultLayout child={<ProductDetail />} />}
        />
        <Route path="/login" element={<LoginLayout />} />
        <Route
          path="/cart"
          element={<DefaultLayout child={<UserCartDetail />} />}
        />
        <Route path="/user" element={<DefaultLayout child={<UserPage />} />} />
        <Route path="/*" element={<DefaultLayout child={<>Not Found</>} />} />
      </Routes>
    </div>
  );
}

export default App;
