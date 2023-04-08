import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import { API } from "../backend";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import { useLocation } from "react-router-dom";

const Product = () => {
  console.log("API IS", API);
  const { state } = useLocation();
  console.log(state);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        if (state == null) {
          setProducts(data);
          return;
        }
        let dataNew = data.filter((item) => item.category._id == state);
        setProducts(dataNew);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Products" description="Welcome to the adex">
      <div className="row text-center">
      {products.length === 0 ? (
    <div className="col-12">
      <p>No products found in this category. Please explore other categories.</p>
    </div>
  ) : (
    <div className="row justify-content-between">
    {products.map((product, index) => {
      return (
        <div key={index} className="col-sm-6 col-md-4 mb-5">
          <Card product={product} />
        </div>
      );
    })}
  </div>
      )}
      </div>
    </Base>
  );
};

export default Product;
