import React from "react";
import { isAutheticated } from ".";

import { Route, Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <>
      {isAutheticated() ? <Component {...rest} /> : <Navigate to="/signin" />}
    </>
  );
}

export default PrivateRoute;
