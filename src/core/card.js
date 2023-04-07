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
          className="btn btn-block btn-outline-success  mt-0 mb-1"
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
          className="btn btn-block btn-outline-danger mt-0.2 mb-3 py-0"
        >
          Remove
        </button>
      )
    );
  };

  return (
    <div className=" text-white  ">
      {/* <div className="card-header lead py-1">{cartTitle}</div> */}
      <div className="card-body">
        {getARedirect(redirect)}
        <ImageHelper product={product} />
        <p className="lead  font-weight-normal  text-wrap mb-1">
          {cartDescrption}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">₹ {cartPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addtoCart)}</div>
          <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
