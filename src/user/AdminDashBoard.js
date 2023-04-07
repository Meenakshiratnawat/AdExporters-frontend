import React from "react";
import Base from "../core/Base";
import "../styles.css"; // import your CSS file
import { isAutheticated } from "../auth/helper";
import { NavLink } from "react-router-dom";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAutheticated();

  const adminLeftSide = () => {
    return (
      <div className="card text-center w-85">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          {/* <li className="list-group-item ">
            <NavLink
              exact
              to="/admin/create/category"
              className="nav-link text-success"
            >
              Create Categories
            </NavLink>
          </li> */}
          {/* <li className="list-group-item">
            <NavLink
              exact
              to="/admin/categories"
              className="nav-link text-success"
            >
              Manage Categories
            </NavLink>
          </li> */}
          <li className="list-group-item">
            <NavLink
              exact
              to="/admin/create/product"
              className="nav-link text-success"
            >
              Create Product
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              exact
              to="/admin/products"
              className="nav-link text-success"
            >
              Manage Products
            </NavLink>
          </li>
          {/* <li className="list-group-item">
            <NavLink
              exact
              to="/admin/product/update/:productId"
              className="nav-link text-success"
            >
              Update Products
            </NavLink>
          </li> */}
          {/* <li className="list-group-item">
            <NavLink exact to="/admin/orders" className="nav-link text-success">
              Manage Orders
            </NavLink>
          </li> */}
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    //
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Information</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2 ">Name:</span> {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span> {email}
          </li>

          <li className="list-group-item">
            <span className="badge badge-danger">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };

  //  add style to title desc inside <base>
  const titleStyle = {
    fontSize: "32px",
    fontWeight: "bold",
  };

  const descStyle = {
    fontSize: "18px",
    color: "#fff",
  };

  return (
    <Base
      title={<h2 style={titleStyle}>Welcome to admin area</h2>}
      description={<p style={descStyle}>Manage all of your products here</p>}
      className="container bg-success my-3"
    >
      <div className="row">
        <div className="col-5 my-2">{adminLeftSide()}</div>
        <div className="col-7 my-2">{adminRightSide()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
