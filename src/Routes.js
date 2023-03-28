import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddProduct from "./admin/AddProduct";
import ManageCategories from "./admin/ManageCategories";
import AddCategory from "./admin/AddCategory";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import Cart from "./core/cart";
const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/user/dashboard"
          element={<PrivateRoute component={UserDashBoard} />}
        />
        <Route
          path="/admin/dashboard"
          element={<AdminRoute component={AdminDashBoard} />}
        />
        <Route
          path="/admin/create/category"
          element={<AdminRoute component={AddCategory} />}
        />
        <Route
          path="/admin/categories"
          element={<AdminRoute component={ManageCategories} />}
        />
        <Route
          path="/admin/create/product"
          element={<AdminRoute component={AddProduct} />}
        />
        <Route
          path="/admin/products"
          element={<AdminRoute component={ManageProducts} />}
        />
        <Route
          path="/admin/product/update/:productId"
          element={<AdminRoute component={UpdateProduct} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
