import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper/index"; // ->index path added
import { createaProduct, getCategories } from "./helper/adminapicall";

const AddProduct = () => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    categories: [],
    category: "",
    loading: false,
    error: "",
    createdProduct: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    name,
    description,
    price,
    stock,
    categories,
    category,
    loading,
    error,
    createdProduct,
    getaRedirect,
    formData,
  } = values;
  //TODO use get a redirect function to redirect to home page after the product creation is successful and the successmessage is displayed and loading is done (false) and use a time function to wait for 5 seconds for the redirect to happen
  const preload = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
        console.log("Categories:", categories);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const onSubmit = (event) => {
    console.log("huhuhuh");
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    console.log("huhuhuh");
    createaProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        console.log(1);
        setValues({ ...values, error: data.error });
      } else {
        console.log(2);
        setValues({
          ...values,
          name: "",
          description: "",
          price: "",
          photo: "",
          stock: "",
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    console.log(1);
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success py-1 mt-3"
      style={{ display: createdProduct ? "" : "none" }}
    >
      <h4> Product created successfully</h4>
    </div>
  );
  const createProductForm = () => (
    <form>
      <span>Post photo</span>
      <div className="form-group">
        <div class="text-center">
          <label className="btn btn-block text-center btn-success mb-2 py-1 ">
            <input
              onChange={handleChange("photo")}
              type="file"
              name="photo"
              accept="image"
              placeholder="choose a file"
              className="form-control py-1"
            />
          </label>
        </div>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("name")}
          name="photo"
          className="form-control py-1 mb-2"
          placeholder="Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleChange("description")}
          name="photo"
          className="form-control py-1 mb-2"
          placeholder="Description"
          value={description}
        />
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("price")}
          type="number"
          className="form-control py-1 mb-2"
          placeholder="Price"
          value={price}
        />
      </div>
      <div className="form-group">
        <select
          onChange={handleChange("category")}
          className="form-control py-1 mb-2"
          placeholder="Category"
        >
          <option>Select</option>
          {categories &&
            categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.name}
              </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <input
          onChange={handleChange("stock")}
          type="number"
          className="form-control py-1 mb-2"
          placeholder="Stock"
          value={stock}
        />
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        className="btn btn-outline-success mb-3 "
      >
        Create Product
      </button>
    </form>
  );

  return (
    <Base
      title="Add a Product here"
      description="Add a new Product"
      className="container-sm bg-info py-4 "
    >
      <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">
        Admin Home
      </Link>
      <div className="row  bg-dark text-white rounded">
        <div className="col-md-8 offset-md-2">
          {successMessage()}
          {createProductForm()}
        </div>
      </div>
    </Base>
  );
};

export default AddProduct;
