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
// import React from "react";
// import { Route, redirect } from "react-router-dom";
// import { isAutheticated } from "./index";

// const AdminRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAutheticated() && isAutheticated().user.role === 1 ? (
//           <Component {...props} />
//         ) : (
//           <redirect
//             to={{
//               pathname: "/signin",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default AdminRoute;
