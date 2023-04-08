import React, { useState } from "react";
import Base from "../core/Base";

import { signin, authenticate, isAutheticated } from "../auth/helper";
import { Navigate } from "react-router-dom";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    encry_password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, encry_password, error, loading, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, encry_password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };
  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/user/dashboard" />;
      }
    }
    if (isAutheticated()) {
      return <Navigate to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger py-1"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Email</label>
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control form-control-sm"
                type="Email"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("encry_password")}
                value={encry_password}
                className="form-control form-control-sm"
                type="password"
              />
            </div>
            <div class="row mb-3">
              <div class="d-grid py-3">
                <button
                  onClick={onSubmit}
                  class="btn btn-success btn-block w-100 d-block"
                >
                  Signin
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign In Page" description="A page for user to sign In!">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
    </Base>
  );
};

export default Signin;
