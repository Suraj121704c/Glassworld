import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Cart from "../Components/Cart/Cart";
import EyeGlasses from "../Components/EyeGlasses/EyeGlasses";
import SunGlasses from "../Components/SunGlasses/SunGlasses";
import ContactGlasses from "../Components/ContactGlasses/ContactGlasses";
import ComputerGlasses from "../Components/ComputerGlasses/ComputerGlasses";
import KidsGlasses from "../Components/KidsGlasses/KidsGlasses";
import { PrivateRoute } from "./PrivateRoutes";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
import SingleProductPage from "../Components/SingleProductPage/SingleProductPage";
import LoginSuccess from "../Components/SuccesfullPage.jsx/LoginSuccessfull";
import SignUpSuccess from "../Components/SuccesfullPage.jsx/SignupSuccessfull";
import Payment from "../Components/Payment/Payment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route path="/kids" element={<KidsGlasses />} />
      <Route path="/computer" element={<ComputerGlasses />} />
      <Route path="/contacts" element={<ContactGlasses />} />
      <Route path="/shades" element={<SunGlasses />} />
      <Route path="/eye" element={<EyeGlasses />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/products/:product_id" element={<SingleProductPage />} />
      <Route path="/login/success" element={<LoginSuccess />} />
      <Route path="/success" element={<SignUpSuccess />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default AllRoutes;
