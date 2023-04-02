import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import { API } from "../backend";
import Card from "./card";
import CategoryCard from "./catergoryCard";
import { getProducts, getCategories } from "./helper/coreapicalls";

const Home = () => {
  console.log("API IS", API);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const [categories, setCategories] = useState([]);
  // const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };
  const loadAllCateogry = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };
  useEffect(() => {
    loadAllProduct();
  }, []);

  useEffect(() => {
    loadAllCateogry();
  }, []);

  return (
    <Base title="Home Page" description="Welcome to the T-shirt store">
      <div className="row text-center">
        <h1 className="text-white">All of tshirts</h1>

        <div className="row">
          {categories.map((category, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <CategoryCard category={category} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
};

export default Home;
