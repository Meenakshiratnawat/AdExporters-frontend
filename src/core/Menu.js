import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

function Menu() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <ul className="nav nav-tabs  ">
        <li className="nav-item  text-success ">
          <NavLink
            className="nav-link  text-light "
            activeClassName="active"
            exact
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link text-light "
            activeClassName="active"
            exact
            to="/cart"
          >
            Cart
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink
            className="nav-link text-light "
            activeClassName="active"
            exact
            to="/product"
          >
            Product
          </NavLink>
        </li>
        {isAutheticated() && isAutheticated().user.role === 0 && (
          <li className="nav-item">
            <NavLink
              className="nav-link text-light"
              activeClassName="active"
              exact
              to="/user/dashboard"
            >
              U.Dashboard
            </NavLink>
          </li>
        )}

        {/* <li className="nav-item">
          <NavLink
            className="nav-link text-light"
            activeClassName="active"
            exact
            to="/user/dashboard"
          >
            U.Dashboard
          </NavLink>
        </li> */}
        {isAutheticated() && isAutheticated().user.role === 1 && (
          <li className="nav-item">
            <NavLink
              className="nav-link text-light"
              activeClassName="active"
              exact
              to="/admin/dashboard"
            >
              A.Dashboard
            </NavLink>
          </li>
        )}
        {!isAutheticated() && (
          <Fragment>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light"
                activeClassName="active"
                exact
                to="/signup"
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light"
                activeClassName="active"
                exact
                to="/signin
"
              >
                Sign In
              </NavLink>
            </li>
          </Fragment>
        )}

        {isAutheticated() && (
          <li className="nav-item">
            <span
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  navigate("/");
                });
              }}
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}
export default Menu;
