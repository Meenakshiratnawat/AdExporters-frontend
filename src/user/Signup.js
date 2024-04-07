import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";


const Signup = () => {
  console.log("singupconsolecall")

    
        const [values, setValues] = useState({
          name: "",
          email: "",
          encry_password: "",
          error: "",
          success: false
        });
    
        const { name, email, encry_password, error, success } = values;

        const handleChange = name => event => {
          setValues({ ...values, error: false, [name]: event.target.value });
        };
      
        const onSubmit = event => {

          event.preventDefault();
          setValues({ ...values, error: false });
          console.log(event,"data.error in signup")
          console.log(values,"singupconsole")
          signup({ name, email, encry_password })
            .then(data => {
              console.log(data.error,"data.error")
              if ( data.error) {

                setValues({ ...values, error: data.error, success: false });
              } else {
                setValues({
                  ...values,
                  name: "",
                  email: "",
                  encry_password: "",
                  error: "",
                  success: true
                });
              }
            })
            .catch(console.log("Error in signup"));
        };


        const signUpForm = () => {
            return (
              <div className="row">
                <div className="col-sm-6 offset-sm-3 text-left">
                  <form>
                    <div className="form-group">
                      <label className="text-light ">Name</label>
                      <input
                        className="form-control form-control-sm"
                        onChange={handleChange("name")}
                        type="text"
                        value={name}
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-light">Email</label>
                      <input
                        className="form-control form-control-sm"
                        onChange={handleChange("email")}
                        type="email"
                        value={email}
                      />
                    </div>
        
                    <div className="form-group">
                      <label className="text-light">Password</label>
                      <input
                        onChange={handleChange("encry_password")}
                        className="form-control form-control-sm"
                        type="password"
                        value={encry_password}
                      />
                    </div>
              
              <div class="row ">
              <div class="d-grid py-3">
              <button onClick={onSubmit}  class="btn btn-success btn-block w-100 d-block">
              Signup
              </button>
            </div>
            </div>
            </form>
          </div>
        </div>
      );
    };

    const successMessage = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3  text-left">
              <div
                className="alert alert-success py-1 "
                style={{ display: success ? "" : "none" }}
              >
                New account created successfully. Please 
                <Link to="/signin">Login Here</Link>
              </div>
            </div>
          </div>
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
    
   
    
      

return (
    <Base title="Sign up page" description="A page for user to sign up!">
    {successMessage()}
    {errorMessage()}
{signUpForm()}  
</Base>

);
};

export default Signup;