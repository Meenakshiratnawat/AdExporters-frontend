import React, { useState, useEffect } from "react";
import { Redirect, Link, NavLink, Navigate } from "react-router-dom";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart } from "./helper/CartHelper";
import { removeItemFromCart } from "./helper/CartHelper";
const Card = ({
  product,
  addtoCart = true,
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setRedirect(true));
  };

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Navigate to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-success  my-1"
        >
          Add to Cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);
            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger my-1"
        >
          Remove From Cart
        </button>
      )
    );
  };

  return (
    <div className=" text-white  d-flex flex-column align-items-center justify-content-center">
      {/* <div className="card-body"> */}
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead font-weight-normal text-center my-1">
    {cartTitle}
  </p>
  <p className="btn btn-success rounded btn-sm px-4 mb-1">₹ {cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
        </div>
        <div className="row">
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      {/* </div> */}
    </div>
  );
};

{/* <div className="text-white d-flex flex-column align-items-center justify-content-center">
  {getARedirect(redirect)}
  <div className="d-flex justify-content-center align-items-center" style={{ width: "300px", height: "200px" }}>
    <img
      src={imageurl}
      alt="photo"
      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s" }}
      className="rounded hover-zoom"
    />
  </div>
  <p className="lead font-weight-normal text-center my-1">
    {cartTitle}
  </p>
  <p className="btn btn-success rounded btn-sm px-4 mb-1">₹ {cartPrice}</p>
  <div className="row">
    <div className="col-12">
      <button
        onClick={addToCart}
        className="btn btn-block btn-outline-success my-1"
      >
        Add to Cart
      </button>
    </div>
  </div>
</div> */}


export default Card;
