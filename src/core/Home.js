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
    //     <Base title="Home Page">
    //       <HomeCarousel />
    //       <div className="row text-center">
    //         <div id="collection-description" class="desktop-12 tablet-6 mobile-3">
    //           <div class="rte">
    //             <p data-mce-fragment="1" data-mce-style="font-size:30ppx;">
    //               <h2>About us</h2>
    //             </p>
    //             <p data-mce-fragment="1">
    //               <span data-mce-fragment="1" data-mce-style="font-weight: 600;">
    //                 <h1>
    //                   Since 1960 , we "Alluring Design Exporters" , is a leading
    //                   Manufacturer , Wholesaler and Exporter of marble Sculptures ,
    //                   Temples and Other handicraft items . We are unique mix of
    //                   talent and meticulousness in the quest for excellence. We are
    //                   sculpting the finest grade of marble idols with detail that
    //                   will hold you spellbound with their mesmerising beauty ,
    //                   representing a true reflection of craftsmanship , Indian
    //                   values and culture.&nbsp;
    //                 </h1>
    //               </span>
    //             </p>
    //           </div>
    //         </div>
    //         <div class="desktop-12 tablet-6 mobile-3">
    //           <h1 className="text-white mt-2 mb-2">Categories</h1>
    //           <div className="row">
    //             {categories.map((category, index) => {
    //               return (
    //                 <div key={index} className="col-4 mb-4">
    //                   <CategoryCard category={category} />
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         </div>
    //       </div>
    //     </Base>
    //   );
    // };

    <Base title="Home Page">
      <HomeCarousel />
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="text-center mb-5">
            <h2>About us</h2>
          </div>
          <div className="text-center mb-5">
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
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="text-center mb-5">Categories</h1>
          <div className="row">
            {categories.map((category, index) => {
              return (
                <div key={index} className="col-lg-4 mb-4">
                  <CategoryCard category={category} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Base>
  );
};

export default Home;
