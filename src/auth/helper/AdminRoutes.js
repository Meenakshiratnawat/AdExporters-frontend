import React from "react";
import { isAutheticated } from ".";

import { Route, Navigate } from "react-router-dom";
import { render } from "@testing-library/react";

function AdminRoute({ component: Component, ...rest }) {
  return (
    <>
      {isAutheticated() && isAutheticated().user.role === 1 ? (
        <Component {...rest} />
      ) : (
        <Navigate to="/signin" />
      )}
    </>
  );
}

export default AdminRoute;
