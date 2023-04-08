import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import { API } from "../backend";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/CartHelper";
import StripeCheckout from "./StripeCheckout";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const getFinalprice = (products) => {
    let amount =0
    products.map(p => {
        amount = amount + parseInt(p.price)  
    })
    return amount;
};

  const loadCheckout = (products) => {
    return (
      <div className="col-lg-6 col-md-8 col-sm-10 ">
        <h2 className="mb-4  ">Checkout</h2>
        <div>
          <h4>Order Summary</h4>
          <hr />
          <p>Total items: {products.length}</p>
          <p>Total price: ₹ {getFinalprice(products)}</p>
          
            <div className="col-6">
              <StripeCheckout products={products} setReload={setReload} />
            </div>
        </div>
      </div>
    );
  };


  return (
    <Base title="Cart" description="Ready to checkout">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
        {products==null || products.length === 0 ? (
          <div className="col-lg-6 col-md-8 col-sm-10 text-center" style={{ fontSize: "24px" }}>
          Cart is empty, please add items in the cart.
          </div>
          ) : (
            <div className="row justify-content-between">
                        {products.map((product, index) => {
        return (
          <div key={index} className="col-sm-6 col-md-4 mb-5">
            <Card key={index}
                      product={product}
                      removeFromCart={true}
                      addtoCart={false}
                      setReload={setReload}
                      reload={reload}/>
          </div>
        );
      })}
      <div className="row justify-content-between">
      {loadCheckout(products)}
        </div>

        <div className="row justify-content-center mt-5">
      <h3>Please contact us in case of any query.</h3>
        </div>

              
            </div>
        )}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
