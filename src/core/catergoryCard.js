import React, { useState, useEffect } from "react";
import CImagehelper from "./helper/CImagehelper";
import { Redirect, Link, NavLink, Navigate } from "react-router-dom";
import "../styles.css";

const CategoryCard = ({ category, gotoProduct = true }) => {
  // const cartTitle = product ? product.name : "A photo from pexels";
  // const cartDescrption = product ? product.description : "Default description";
  // const cartPrice = product ? product.price : "DEFAULT";
  const [redirect, setRedirect] = useState(false);
  const cartTitle = category ? category.name : "A photo from pexels";

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Navigate to="/product" />;
    }
  };

  const goToProduct = () => {
    setRedirect(true);
  };

  const showCategoryName = (gotoProduct) => {
    return (
      gotoProduct && (
        <button
          onClick={goToProduct}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          {cartTitle}
        </button>
      )
    );
  };

  return (
    <div className="card  text-white bg-dark ">
      <div className="card-body">
        {getARedirect(redirect)}
        <CImagehelper category={category} />
      </div>
      <div className="col-12">{showCategoryName(goToProduct)}</div>
    </div>
  );
};

export default CategoryCard;
