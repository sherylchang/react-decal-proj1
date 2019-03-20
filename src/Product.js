import React from "react";

const Product = props => {

	let counter = 0;

	function addToCart(num) {
		if (props.limit === 0) {
			alert("This item is out of stock!");
		} else if (num >= props.limit) {
			alert("There are too many " + props.productName.toString() + "s in your cart!");
		} else {
			counter += 1;
			alert("There are " + counter.toString() + " " + props.productName.toString() + "s in your cart!");
		}
	}

	return (
			<div class="card">
			    <div class="content">
			      <div class="header">{props.productName}</div>
			      <div class="description">
			        Price: ${props.price}
			      </div>
			    </div>
			    <div class="ui bottom attached button" onClick={() => addToCart(counter)}>
			      <i class="add icon"></i>
			      Add to Cart
			    </div>
	  		</div>
	);
}

export default Product;