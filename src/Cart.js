import React from "react";
import Product from "./Product";
import ProductData from "./Data"
import Receipt from "./Receipt.jsx"
import "./styles/cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      total: 0
    };
  }

  render() {
    return (
        <div className="page-content">
        	<div class="ui cards">
	            {ProductData.products.map(product => (
	            	<Product productName={product.name} price={product.cost} />
	            ))}
          </div>
          <Receipt />
        </div>
    );
  }

}

export default Cart;
