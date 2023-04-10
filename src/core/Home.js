import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import { API } from "../backend";
import Card from "./card";
import CategoryCard from "./catergoryCard";
import { getProducts, getCategories } from "./helper/coreapicalls";
import HomeCarousel from "./caraousel";

const Home = () => {
  console.log("API IS", API);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const [categories, setCategories] = useState([]);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };
  const loadAllCategory = () => {
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
    loadAllCategory();
  }, []);

  return (
    <Base title="AD EXPORTERS">
      <HomeCarousel />
      <div className="container my-3">
        <h2 className="text-center text-white mb-3">Categories</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {categories.map((category, index) => {
            return (
              <div key={index} className="m-3">
                <CategoryCard category={category} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-2 mt-4">
            <h2 style={{ fontFamily: "Arial" }}>About us</h2>
          </div>

          <div className="text-center mb-3 ">
            <img
              src="about us.jpg"
              alt="About us"
              style={{ maxWidth: "100%", height: "auto", maxHeight: "50vh" }}
              className="rounded"
            />
          </div>
          <div
            className="text-center mb-3 about-us"
            style={{ fontFamily: "Arial" }}
          >
            <h1>
              Since 1960, we "Alluring Design Exporters", is a leading
              Manufacturer, Wholesaler and Exporter of marble Sculptures,
              Temples and Other handicraft items. We are unique mix of talent
              and meticulousness in the quest for excellence. We are sculpting
              the finest grade of marble idols with detail that will hold you
              spellbound with their mesmerising beauty, representing a true
              reflection of craftsmanship, Indian values and culture.
            </h1>
          </div>
        </div>
      </div>

      {/* </div>
      </div> */}
    </Base>
  );
};

export default Home;
