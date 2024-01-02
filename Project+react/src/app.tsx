import "./app.css";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import DefaultLayout from "./layout/defaultLayout/defaultLayout";
import HomeMain from "./components/userHome/homeMain";
import ProductDetail from "./components/userProductDetail/productDetail";
import UserCartDetail from "./components/userCart/userCartDetail";
import LoginLayout from "./layout/loginLayout/loginLayout";
import AdminLayout from "./layout/adminLayout/adminLayout";
import AdminDashboard from "./components/adminDashboard/adminDashboard";
import ComingSoon from "./components/comingSoon/commingSoon";
import UserHistory from "./components/userCartHistory/cartHistory";
import AdminLogin from "./layout/adminLoginLayout/adminLogin";
import AdminUserPage from "./components/adminUserPage/adminUserPage";
import AdminOrders from "./components/adminOrdersPage/adminOrderPage";
import AdminProducts from "./components/adminProductsPage/adminProductsPage";
import P404Layout from "./layout/error/404Layout";
function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<DefaultLayout child={<HomeMain />} />} />
        <Route
          path="/comingSoon"
          element={<DefaultLayout child={<ComingSoon />} />}
        />
        <Route
          path="/product/:id"
          element={<DefaultLayout child={<ProductDetail />} />}
        />
        <Route path="/login" element={<LoginLayout />} />
        <Route
          path="/cart"
          element={<DefaultLayout child={<UserCartDetail />} />}
        />
        <Route
          path="/profile"
          element={<DefaultLayout child={<UserHistory />} />}
        />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route
          path="/adminPage"
          element={<AdminLayout child={<AdminDashboard />} />}
        />
        <Route
          path="/adminUsers"
          element={<AdminLayout child={<AdminUserPage />} />}
        />
        <Route
          path="/adminOrders"
          element={<AdminLayout child={<AdminOrders />} />}
        />
        <Route
          path="/adminProducts"
          element={<AdminLayout child={<AdminProducts />} />}
        />

        <Route path="/*" element={<P404Layout />} />
      </Routes>
    </div>
  );
}

export default App;
