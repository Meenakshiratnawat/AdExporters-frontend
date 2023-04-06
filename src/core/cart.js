import React, { useState, useEffect } from "react";
import Base from "./Base";
import "../styles.css";
import { API } from "../backend";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/CartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div className="cart-items col-6">
        {/* <h2>This section is to load products</h2> */}
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };

  const loadCheckout = () => {
    return (
      <div className="col-6">
        <h2>This section for checkout</h2>
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="cart-items-image col-6"> {loadAllProducts()}</div>
        {products.length === 0 && (
          <div className="cart-empty">no items added</div>
        )}
        <div className=""> {loadCheckout()}</div>
      </div>
    </Base>
  );
};

export default Cart;
