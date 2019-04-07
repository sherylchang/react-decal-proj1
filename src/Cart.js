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

  handleAddToCart(productName, price) {
    let copy = [...this.state.cartItems];
    var j;
    for (j = 0; j < ProductData.products.length; j++) {
      if (ProductData.products[j].name === productName) {
        if (ProductData.products[j].stock === 0) {
          alert("This item is out of stock!");
          return;
        }
      }
    }

    var i;
    for (i = 0; i < copy.length; i++) {
      if ((copy[i].productName === productName) && (copy[i].price === price)) {
        copy[i].count += 1;
        this.setState({
          cartItems: copy
        });
        return;
      }
    }
    let product = {productName: productName, price: price, count: 1};
    this.setState({
      cartItems: [...copy, product]
    });
    // var k;
    // for (k = 0; k < ProductData.products.length; k++) {
    //   if (ProductData.products[k].name === productName) {
    //     ProductData.products[k].stock -= 1;
    //   }
    // }
  }

  handleRemoveFromCart(productName, price) {
    let copy = [...this.state.cartItems];

    var i;
    for (i = 0; i < copy.length; i++) {
      if ((copy[i].productName === productName) && (copy[i].price === price)) {
        copy[i].count -= 1;
        if (copy[i].count === 0) {
          const remaining = copy.filter(item => item.count >= 1);
          this.setState({
            cartItems: remaining
          });
        } else {
          this.setState({
            cartItems: copy
          });
        }
        // copy[i].count = 0;
        // const remaining = copy.filter(item => item.count >= 1);
        // this.setState({
        //   cartItems: remaining
        // });
      }
    }
  }

  render() {
    return (
        <div className="page-content">
        	<div class="ui cards">
	            {ProductData.products.map(product => (
	            	<Product productName={product.name} price={product.cost} onAddToCart={(name, price) => this.handleAddToCart(name, price)} onRemoveFromCart={(name, price) => this.handleRemoveFromCart(name, price)} />
	            ))}
          </div>
          <Receipt items={this.state.cartItems} />
        </div>
    );
  }

}

export default Cart;
