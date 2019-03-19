import React from "react";
import Product from "./Product.js";
import "./styles/cart.css";

class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <Product productName="Apple" price={2} limit={5}/>
        </div>
    );
  }

}

export default Cart;
