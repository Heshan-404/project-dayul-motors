import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import Home from "./pages/HomePage/Home";
import Shop from "./pages/Shopping/Shop";
import MainPage from "./components/ShowItem/Background/MainPage";
import AboutUs from "./pages/AboutUsPage/AboutUs";
import AdminUI from "./pages/AdminDashboard/AdminUI";
import LoginPage from "./pages/LoginPage/LoginPage";
import Signup from "./pages/LoginPage/SignUp";
import ForgetPassword from "./pages/LoginPage/FogetPassword";
import ChangePassword from "./pages/LoginPage/ChangePassword";
import OrderDetail from "./components/AdminDashboard/OrderMNG/OrderDetail";
import ProtectedRouteToHome from "./ProtectedRouteToHome";
import Aboutus from "./pages/AboutUsPage/AboutUs";
import AdminLogin from "./components/AdminDashboard/AdminLogin";
import ProtectedRouteToAdminSignin from "./ProtectedRouteToAdminSignin";
import ResponsiveDrawer from "./pages/Test2";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route element={<ProtectedRouteToHome />}>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/change-password" element={<ChangePassword />} /> 
        </Route>

        <Route element={<ProtectedRouteToAdminSignin />}>
          <Route path="/admin" element={<AdminUI />}></Route>
        </Route>
        <Route path="/adminSign" element={<AdminLogin />}></Route>
        <Route path="/Shop" element={<Shop />}></Route>
        <Route path="/Shop/product/:itemId" element={<MainPage />} />
        <Route path="/admin/orderDetail/:orderid" element={<OrderDetail />} />
        <Route path="/cart" element={<Aboutus />}></Route>
        <Route path="/test" element={<ResponsiveDrawer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
